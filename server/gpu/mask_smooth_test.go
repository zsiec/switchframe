//go:build cgo && cuda

package gpu

/*
#include <cuda.h>
#include <cuda_runtime.h>
#include <stdint.h>
*/
import "C"

import (
	"testing"
	"unsafe"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

// allocMaskDeviceBuf allocates a CUDA device buffer of `size` bytes on the
// default stream and fills it from the host slice `host`. Returns the device
// pointer; the caller must free it with cudaFree (via freeMaskDeviceBuf).
func allocMaskDeviceBuf(t *testing.T, host []byte) unsafe.Pointer {
	t.Helper()
	var devPtr unsafe.Pointer
	if rc := C.cudaMalloc(&devPtr, C.size_t(len(host))); rc != C.cudaSuccess {
		t.Fatalf("cudaMalloc(%d): %d", len(host), rc)
	}
	if rc := C.cudaMemcpy(
		devPtr,
		unsafe.Pointer(&host[0]),
		C.size_t(len(host)),
		C.cudaMemcpyHostToDevice,
	); rc != C.cudaSuccess {
		C.cudaFree(devPtr)
		t.Fatalf("cudaMemcpy H→D: %d", rc)
	}
	return devPtr
}

// freeMaskDeviceBuf releases a device buffer allocated by allocMaskDeviceBuf.
func freeMaskDeviceBuf(ptr unsafe.Pointer) {
	if ptr != nil {
		C.cudaFree(ptr)
	}
}

// downloadMaskBuf copies `size` device bytes to a host slice.
func downloadMaskBuf(t *testing.T, devPtr unsafe.Pointer, size int) []byte {
	t.Helper()
	dst := make([]byte, size)
	if rc := C.cudaMemcpy(
		unsafe.Pointer(&dst[0]),
		devPtr,
		C.size_t(size),
		C.cudaMemcpyDeviceToHost,
	); rc != C.cudaSuccess {
		t.Fatalf("cudaMemcpy D→H: %d", rc)
	}
	return dst
}

// TestMaskEMA verifies the EMA kernel blends two masks correctly.
// prev=100, curr=200, alpha=0.5 → expected output ≈ 150.
func TestMaskEMA(t *testing.T) {
	const size = 256

	prev := make([]byte, size)
	curr := make([]byte, size)
	for i := range prev {
		prev[i] = 100
		curr[i] = 200
	}
	output := make([]byte, size) // zeros initially

	prevDev := allocMaskDeviceBuf(t, prev)
	defer freeMaskDeviceBuf(prevDev)
	currDev := allocMaskDeviceBuf(t, curr)
	defer freeMaskDeviceBuf(currDev)
	outDev := allocMaskDeviceBuf(t, output)
	defer freeMaskDeviceBuf(outDev)

	// Use the default stream (nil / 0) for simplicity in tests.
	var stream C.cudaStream_t

	err := MaskEMA(outDev, prevDev, currDev, 0.5, size, stream)
	require.NoError(t, err)

	// Synchronize before reading back.
	if rc := C.cudaDeviceSynchronize(); rc != C.cudaSuccess {
		t.Fatalf("cudaDeviceSynchronize: %d", rc)
	}

	result := downloadMaskBuf(t, outDev, size)

	// 100*0.5 + 200*0.5 + 0.5 rounding = 150
	for i, v := range result {
		assert.Equal(t, byte(150), v, "result[%d] = %d, want 150", i, v)
	}
}

// TestMaskEMAEndpoints verifies alpha=0 returns curr and alpha=1 returns prev.
func TestMaskEMAEndpoints(t *testing.T) {
	const size = 64

	prev := make([]byte, size)
	curr := make([]byte, size)
	for i := range prev {
		prev[i] = 100
		curr[i] = 200
	}

	prevDev := allocMaskDeviceBuf(t, prev)
	defer freeMaskDeviceBuf(prevDev)
	currDev := allocMaskDeviceBuf(t, curr)
	defer freeMaskDeviceBuf(currDev)

	var stream C.cudaStream_t

	// alpha=0: output should equal curr (200).
	t.Run("alpha0", func(t *testing.T) {
		outBuf := make([]byte, size)
		outDev := allocMaskDeviceBuf(t, outBuf)
		defer freeMaskDeviceBuf(outDev)

		require.NoError(t, MaskEMA(outDev, prevDev, currDev, 0.0, size, stream))
		if rc := C.cudaDeviceSynchronize(); rc != C.cudaSuccess {
			t.Fatalf("sync: %d", rc)
		}
		got := downloadMaskBuf(t, outDev, size)
		for i, v := range got {
			assert.Equal(t, byte(200), v, "alpha=0: result[%d] = %d, want 200", i, v)
		}
	})

	// alpha=1: output should equal prev (100).
	t.Run("alpha1", func(t *testing.T) {
		outBuf := make([]byte, size)
		outDev := allocMaskDeviceBuf(t, outBuf)
		defer freeMaskDeviceBuf(outDev)

		require.NoError(t, MaskEMA(outDev, prevDev, currDev, 1.0, size, stream))
		if rc := C.cudaDeviceSynchronize(); rc != C.cudaSuccess {
			t.Fatalf("sync: %d", rc)
		}
		got := downloadMaskBuf(t, outDev, size)
		for i, v := range got {
			assert.Equal(t, byte(100), v, "alpha=1: result[%d] = %d, want 100", i, v)
		}
	})
}

// TestMaskErode3x3 verifies that a single bright pixel surrounded by zeros is
// removed by 3×3 erosion.
//
// A 5×5 mask with only the center pixel set to 255 should become all-zeros
// after erosion because the center's 3×3 neighbourhood contains zero pixels.
func TestMaskErode3x3(t *testing.T) {
	const w, h = 5, 5
	const size = w * h

	// All zeros except center pixel.
	src := make([]byte, size)
	src[2*w+2] = 255 // center (row 2, col 2)

	srcDev := allocMaskDeviceBuf(t, src)
	defer freeMaskDeviceBuf(srcDev)

	dstBuf := make([]byte, size) // zeros
	dstDev := allocMaskDeviceBuf(t, dstBuf)
	defer freeMaskDeviceBuf(dstDev)

	var stream C.cudaStream_t
	require.NoError(t, MaskErode3x3(dstDev, srcDev, w, h, stream))

	if rc := C.cudaDeviceSynchronize(); rc != C.cudaSuccess {
		t.Fatalf("sync: %d", rc)
	}

	dst := downloadMaskBuf(t, dstDev, size)

	// Every pixel should be 0: the single bright pixel has zero-valued
	// neighbours so its 3×3 minimum is 0.
	for i, v := range dst {
		assert.Equal(t, byte(0), v, "erode dst[%d] = %d, want 0", i, v)
	}
	t.Logf("5×5 single-pixel erosion: all %d output pixels are 0", size)
}

// TestMaskEMANilArgs verifies Go-level nil checks before any CUDA call.
func TestMaskEMANilArgs(t *testing.T) {
	dummy := make([]byte, 4)
	p := unsafe.Pointer(&dummy[0])
	var stream C.cudaStream_t

	err := MaskEMA(nil, p, p, 0.5, 4, stream)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "output is nil")

	err = MaskEMA(p, nil, p, 0.5, 4, stream)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "prev is nil")

	err = MaskEMA(p, p, nil, 0.5, 4, stream)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "curr is nil")

	err = MaskEMA(p, p, p, 0.5, 0, stream)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "size must be positive")
}

// TestMaskErode3x3NilArgs verifies Go-level nil checks before any CUDA call.
func TestMaskErode3x3NilArgs(t *testing.T) {
	dummy := make([]byte, 4)
	p := unsafe.Pointer(&dummy[0])
	var stream C.cudaStream_t

	err := MaskErode3x3(nil, p, 4, 1, stream)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "dst is nil")

	err = MaskErode3x3(p, nil, 4, 1, stream)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "src is nil")

	err = MaskErode3x3(p, p, 0, 1, stream)
	require.Error(t, err)
	assert.Contains(t, err.Error(), "invalid dimensions")
}
