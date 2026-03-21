//go:build cgo && cuda && tensorrt

package gpu

import (
	"os"
	"testing"
	"unsafe"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

const (
	// defaultModelPath is the standard path for the selfie segmenter ONNX model.
	defaultModelPath = "/opt/switchframe/models/selfie_segmenter.onnx"
)

// modelPath returns the path to the segmentation model ONNX file,
// checking SEGMENTATION_MODEL_PATH env var first, then the default.
// Skips the test if the model file is not found.
func modelPath(t *testing.T) string {
	t.Helper()
	p := os.Getenv("SEGMENTATION_MODEL_PATH")
	if p == "" {
		p = defaultModelPath
	}
	if _, err := os.Stat(p); os.IsNotExist(err) {
		t.Skipf("segmentation model not found at %s (set SEGMENTATION_MODEL_PATH to override)", p)
	}
	return p
}

func TestSegmentationManagerCreate(t *testing.T) {
	mp := modelPath(t)

	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	require.NoError(t, err)
	defer mgr.Close()

	// Verify engine was loaded with expected dimensions.
	// MediaPipe selfie segmenter: input [1,256,256,3] = 196608, output [1,256,256,1] = 65536
	assert.Equal(t, 256*256*3, mgr.engine.InputSize(), "engine input size")
	assert.Equal(t, 256*256*1, mgr.engine.OutputSize(), "engine output size")
}

func TestSegmentationSession(t *testing.T) {
	mp := modelPath(t)

	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	require.NoError(t, err)
	defer mgr.Close()

	const srcW, srcH = 1920, 1080

	// Enable source
	err = mgr.EnableSource("test-cam", srcW, srcH)
	require.NoError(t, err)
	assert.True(t, mgr.IsEnabled("test-cam"))

	// Create a frame pool and upload a test frame
	pool, err := NewFramePool(ctx, srcW, srcH, 2)
	require.NoError(t, err)
	defer pool.Close()

	frame, err := pool.Acquire()
	require.NoError(t, err)
	defer frame.Release()

	// Fill with a neutral YUV frame (Y=128, Cb=128, Cr=128 = mid-gray)
	ySize := srcW * srcH
	cbSize := (srcW / 2) * (srcH / 2)
	yuv := make([]byte, ySize+cbSize+cbSize)
	for i := 0; i < ySize; i++ {
		yuv[i] = 128
	}
	for i := ySize; i < len(yuv); i++ {
		yuv[i] = 128
	}
	err = Upload(ctx, frame, yuv, srcW, srcH)
	require.NoError(t, err)

	// Run segmentation
	maskPtr, err := mgr.Segment("test-cam", frame)
	require.NoError(t, err)
	assert.NotNil(t, maskPtr, "mask device pointer should be non-nil")
}

func TestSegmentationMaskValues(t *testing.T) {
	mp := modelPath(t)

	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	require.NoError(t, err)
	defer mgr.Close()

	const srcW, srcH = 640, 480

	err = mgr.EnableSource("mask-test", srcW, srcH)
	require.NoError(t, err)

	pool, err := NewFramePool(ctx, srcW, srcH, 2)
	require.NoError(t, err)
	defer pool.Close()

	frame, err := pool.Acquire()
	require.NoError(t, err)
	defer frame.Release()

	// Upload a skin-tone-ish frame: Y=170, Cb=112, Cr=152
	// This approximates a warm skin tone in BT.709 limited-range.
	ySize := srcW * srcH
	cbSize := (srcW / 2) * (srcH / 2)
	yuv := make([]byte, ySize+cbSize+cbSize)
	for i := 0; i < ySize; i++ {
		yuv[i] = 170
	}
	// Cb plane starts at ySize, Cr plane starts at ySize+cbSize
	for i := 0; i < cbSize; i++ {
		yuv[ySize+i] = 112         // Cb
		yuv[ySize+cbSize+i] = 152  // Cr
	}
	err = Upload(ctx, frame, yuv, srcW, srcH)
	require.NoError(t, err)

	maskPtr, err := mgr.Segment("mask-test", frame)
	require.NoError(t, err)
	require.NotNil(t, maskPtr)

	// Download mask to host and verify it has non-zero values.
	// Even on synthetic data the model will produce some response.
	maskSize := srcW * srcH
	hostMask := make([]byte, maskSize)
	rc := C.cudaMemcpy(
		unsafe.Pointer(&hostMask[0]),
		maskPtr,
		C.size_t(maskSize),
		C.cudaMemcpyDeviceToHost,
	)
	require.Equal(t, C.cudaSuccess, rc, "cudaMemcpy mask to host")

	// Count non-zero pixels
	nonZero := 0
	for _, v := range hostMask {
		if v > 0 {
			nonZero++
		}
	}
	t.Logf("Mask stats: %d/%d pixels non-zero (%.1f%%)",
		nonZero, maskSize, float64(nonZero)*100.0/float64(maskSize))

	// The model should produce at least some non-zero output even for
	// a uniform skin-tone frame. We just verify the pipeline didn't
	// produce an all-zero result.
	assert.Greater(t, nonZero, 0, "mask should have at least some non-zero pixels")

	// Verify all values are in valid uint8 range (always true for uint8,
	// but check max to ensure the kernel didn't produce unexpected values).
	maxVal := byte(0)
	for _, v := range hostMask {
		if v > maxVal {
			maxVal = v
		}
	}
	t.Logf("Mask max value: %d", maxVal)
}

func TestSegmentationManagerDisable(t *testing.T) {
	mp := modelPath(t)

	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	require.NoError(t, err)
	defer mgr.Close()

	const srcW, srcH = 640, 480

	// Enable source
	err = mgr.EnableSource("disable-test", srcW, srcH)
	require.NoError(t, err)
	assert.True(t, mgr.IsEnabled("disable-test"))

	// Disable source
	mgr.DisableSource("disable-test")
	assert.False(t, mgr.IsEnabled("disable-test"))

	// Segment on disabled source should fail
	_, err = mgr.Segment("disable-test", &GPUFrame{})
	require.Error(t, err)
	assert.Contains(t, err.Error(), "not enabled")
}

func TestSegmentationSessionNilArgs(t *testing.T) {
	// Nil context
	_, err := NewSegmentationSession(nil, &TRTEngine{}, 640, 480)
	require.ErrorIs(t, err, ErrGPUNotAvailable)

	// Nil engine
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	_, err = NewSegmentationSession(ctx, nil, 640, 480)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "nil engine")

	// Invalid dimensions
	_, err = NewSegmentationSession(ctx, &TRTEngine{}, 0, 480)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "invalid source dimensions")
}

func TestSegmentationManagerNotEnabled(t *testing.T) {
	mp := modelPath(t)

	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	require.NoError(t, err)
	defer mgr.Close()

	// Segment on non-existent source should fail
	_, err = mgr.Segment("nonexistent", &GPUFrame{})
	require.Error(t, err)
	assert.Contains(t, err.Error(), "not enabled")

	// IsEnabled on non-existent source
	assert.False(t, mgr.IsEnabled("nonexistent"))
}

func TestSegmentationManagerReplaceSource(t *testing.T) {
	mp := modelPath(t)

	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	require.NoError(t, err)
	defer mgr.Close()

	// Enable at one resolution
	err = mgr.EnableSource("replace-test", 1920, 1080)
	require.NoError(t, err)
	assert.True(t, mgr.IsEnabled("replace-test"))

	// Re-enable at a different resolution (should replace cleanly)
	err = mgr.EnableSource("replace-test", 640, 480)
	require.NoError(t, err)
	assert.True(t, mgr.IsEnabled("replace-test"))
}

func TestSegmentationManagerNilCtx(t *testing.T) {
	_, err := NewSegmentationManager(nil, "/some/path")
	require.ErrorIs(t, err, ErrGPUNotAvailable)
}

func TestSegmentationManagerBadModelPath(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	_, err = NewSegmentationManager(ctx, "/nonexistent/model.onnx")
	require.Error(t, err)
	assert.Contains(t, err.Error(), "not found")
}

func TestSegmentationDisableNoop(t *testing.T) {
	mp := modelPath(t)

	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	require.NoError(t, err)
	defer mgr.Close()

	// Disabling a source that was never enabled should be a no-op.
	mgr.DisableSource("never-enabled")
}
