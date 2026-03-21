//go:build cgo && cuda

package gpu

import (
	"math"
	"testing"
	"unsafe"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

// TestPreprocessNV12ToRGB uploads a known YUV color (near-white: Y=235,
// Cb=128, Cr=128) and verifies that after preprocessing to 256×256,
// all sampled output RGB pixels are approximately 1.0.
func TestPreprocessNV12ToRGB(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	const w, h = 64, 64
	pool, err := NewFramePool(ctx, w, h, 2)
	require.NoError(t, err)
	defer pool.Close()

	frame, err := pool.Acquire()
	require.NoError(t, err)
	defer frame.Release()

	// Build a YUV420p buffer: Y=235 (near-white), Cb=128, Cr=128 (neutral chroma)
	ySize := w * h
	cbSize := (w / 2) * (h / 2)
	yuv := make([]byte, ySize+cbSize+cbSize)
	for i := 0; i < ySize; i++ {
		yuv[i] = 235
	}
	for i := ySize; i < len(yuv); i++ {
		yuv[i] = 128
	}

	err = Upload(ctx, frame, yuv, w, h)
	require.NoError(t, err)

	const outW, outH = 256, 256
	rgbBuf, err := AllocRGBBuffer(outW, outH)
	require.NoError(t, err)
	defer FreeRGBBuffer(rgbBuf)

	err = PreprocessNV12ToRGB(ctx, rgbBuf, frame, outW, outH)
	require.NoError(t, err)

	rgb := make([]float32, 3*outW*outH)
	err = DownloadRGBBuffer(rgb, rgbBuf, outW, outH)
	require.NoError(t, err)

	// BT.709 white point: Y=235, Cb=128, Cr=128 → R≈G≈B≈1.0
	// Allow ±0.02 tolerance for rounding in the limited-range conversion.
	const tolerance = 0.02
	pixCount := outW * outH

	// Sample 100 interior pixels from each plane to verify correctness.
	for i := 0; i < 100; i++ {
		px := (i * pixCount / 100) + pixCount/8 // skip very first pixels
		r := rgb[0*pixCount+px]
		g := rgb[1*pixCount+px]
		b := rgb[2*pixCount+px]
		assert.InDelta(t, 1.0, float64(r), tolerance, "R[%d] = %f, want ≈1.0", px, r)
		assert.InDelta(t, 1.0, float64(g), tolerance, "G[%d] = %f, want ≈1.0", px, g)
		assert.InDelta(t, 1.0, float64(b), tolerance, "B[%d] = %f, want ≈1.0", px, b)
	}

	t.Logf("White-point test: R[0]=%.4f G[pixCount]=%.4f B[2*pixCount]=%.4f (want ≈1.0)",
		rgb[0], rgb[pixCount], rgb[2*pixCount])
}

// TestPreprocessNV12ToRGBScale uploads a 1920×1080 gradient frame and
// verifies the output is 256×256 with a horizontal gradient from near-0 to near-1.
func TestPreprocessNV12ToRGBScale(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	const srcW, srcH = 1920, 1080
	pool, err := NewFramePool(ctx, srcW, srcH, 2)
	require.NoError(t, err)
	defer pool.Close()

	frame, err := pool.Acquire()
	require.NoError(t, err)
	defer frame.Release()

	// Horizontal Y gradient from 16 (black) to 235 (white), neutral chroma.
	ySize := srcW * srcH
	cbSize := (srcW / 2) * (srcH / 2)
	yuv := make([]byte, ySize+cbSize+cbSize)
	for y := 0; y < srcH; y++ {
		for x := 0; x < srcW; x++ {
			yuv[y*srcW+x] = byte(16 + (x*219)/(srcW-1))
		}
	}
	for i := ySize; i < len(yuv); i++ {
		yuv[i] = 128
	}

	err = Upload(ctx, frame, yuv, srcW, srcH)
	require.NoError(t, err)

	const outW, outH = 256, 256
	rgbBuf, err := AllocRGBBuffer(outW, outH)
	require.NoError(t, err)
	defer FreeRGBBuffer(rgbBuf)

	err = PreprocessNV12ToRGB(ctx, rgbBuf, frame, outW, outH)
	require.NoError(t, err)

	rgb := make([]float32, 3*outW*outH)
	err = DownloadRGBBuffer(rgb, rgbBuf, outW, outH)
	require.NoError(t, err)

	// Verify output buffer has exact expected size.
	require.Equal(t, 3*outW*outH, len(rgb), "output buffer length mismatch")

	// Verify all values are in [0, 1].
	for i, v := range rgb {
		assert.True(t, v >= 0.0 && v <= 1.0, "rgb[%d] = %f out of [0,1]", i, v)
	}

	// Horizontal gradient: left columns should be near 0.0, right columns near 1.0.
	pixCount := outW * outH
	minR := float32(math.MaxFloat32)
	maxR := float32(-math.MaxFloat32)
	for row := 0; row < outH; row++ {
		// Left 5% columns
		for col := 0; col < outW/20; col++ {
			v := rgb[0*pixCount+row*outW+col]
			if v < minR {
				minR = v
			}
		}
		// Right 5% columns
		for col := outW - outW/20; col < outW; col++ {
			v := rgb[0*pixCount+row*outW+col]
			if v > maxR {
				maxR = v
			}
		}
	}
	assert.Less(t, minR, float32(0.2), "left-edge R should be near 0 (got %f)", minR)
	assert.Greater(t, maxR, float32(0.8), "right-edge R should be near 1 (got %f)", maxR)

	t.Logf("Scale test 1920x1080→256x256: R left-min=%.4f right-max=%.4f", minR, maxR)
}

// TestPreprocessNilArgs verifies nil context and nil frame return errors.
func TestPreprocessNilArgs(t *testing.T) {
	// Nil context — use a non-nil dummy pointer so we reach the nil-ctx check.
	dummy := make([]byte, 4)
	fakePtr := unsafe.Pointer(&dummy[0])

	err := PreprocessNV12ToRGB(nil, fakePtr, &GPUFrame{}, 256, 256)
	require.ErrorIs(t, err, ErrGPUNotAvailable)

	// Nil frame
	ctx, err2 := NewContext()
	require.NoError(t, err2)
	defer ctx.Close()

	err = PreprocessNV12ToRGB(ctx, fakePtr, nil, 256, 256)
	require.ErrorIs(t, err, ErrGPUNotAvailable)

	// Nil rgbOut
	frame := &GPUFrame{}
	err = PreprocessNV12ToRGB(ctx, nil, frame, 256, 256)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "nil")
}
