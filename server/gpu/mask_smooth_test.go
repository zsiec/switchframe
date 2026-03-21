//go:build cgo && cuda

package gpu

import (
	"testing"
	"unsafe"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestMaskEMA(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	size := 256
	prev := make([]byte, size)
	curr := make([]byte, size)
	for i := range prev {
		prev[i] = 100
		curr[i] = 200
	}

	// Upload prev and curr to GPU
	prevDev, err := AllocDeviceBytes(size)
	require.NoError(t, err)
	defer FreeDeviceBytes(prevDev)
	require.NoError(t, UploadBytes(prevDev, prev))

	currDev, err := AllocDeviceBytes(size)
	require.NoError(t, err)
	defer FreeDeviceBytes(currDev)
	require.NoError(t, UploadBytes(currDev, curr))

	outDev, err := AllocDeviceBytes(size)
	require.NoError(t, err)
	defer FreeDeviceBytes(outDev)

	// EMA at alpha=0.5: output = 100*0.5 + 200*0.5 = 150
	require.NoError(t, MaskEMA(outDev, prevDev, currDev, 0.5, size, ctx.Stream()))
	require.NoError(t, ctx.Sync())

	result := make([]byte, size)
	require.NoError(t, DownloadMaskU8(result, outDev, size))

	for i := 0; i < size; i++ {
		assert.InDelta(t, 150, int(result[i]), 1, "pixel %d", i)
	}
}

func TestMaskEMAEndpoints(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	size := 256
	prev := make([]byte, size)
	curr := make([]byte, size)
	for i := range prev {
		prev[i] = 100
		curr[i] = 200
	}

	prevDev, _ := AllocDeviceBytes(size)
	defer FreeDeviceBytes(prevDev)
	UploadBytes(prevDev, prev)

	currDev, _ := AllocDeviceBytes(size)
	defer FreeDeviceBytes(currDev)
	UploadBytes(currDev, curr)

	outDev, _ := AllocDeviceBytes(size)
	defer FreeDeviceBytes(outDev)

	result := make([]byte, size)

	// alpha=0: output = curr (200)
	require.NoError(t, MaskEMA(outDev, prevDev, currDev, 0.0, size, ctx.Stream()))
	ctx.Sync()
	DownloadMaskU8(result, outDev, size)
	assert.Equal(t, byte(200), result[0], "alpha=0 should produce curr")

	// alpha=1: output = prev (100)
	require.NoError(t, MaskEMA(outDev, prevDev, currDev, 1.0, size, ctx.Stream()))
	ctx.Sync()
	DownloadMaskU8(result, outDev, size)
	assert.Equal(t, byte(100), result[0], "alpha=1 should produce prev")
}

func TestMaskErode3x3(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	w, h := 5, 5
	size := w * h
	src := make([]byte, size) // all zeros
	src[2*w+2] = 255          // single bright pixel at center

	srcDev, _ := AllocDeviceBytes(size)
	defer FreeDeviceBytes(srcDev)
	UploadBytes(srcDev, src)

	dstDev, _ := AllocDeviceBytes(size)
	defer FreeDeviceBytes(dstDev)

	require.NoError(t, MaskErode3x3(dstDev, srcDev, w, h, ctx.Stream()))
	ctx.Sync()

	result := make([]byte, size)
	DownloadMaskU8(result, dstDev, size)

	// After erosion, the center pixel should be 0 (min of 3x3 neighborhood includes zeros)
	assert.Equal(t, byte(0), result[2*w+2], "center pixel should be eroded to 0")
}

func TestMaskEMANilArgs(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	err = MaskEMA(nil, nil, nil, 0.5, 100, ctx.Stream())
	require.Error(t, err)

	err = MaskEMA(unsafe.Pointer(uintptr(1)), nil, nil, 0.5, 100, ctx.Stream())
	require.Error(t, err)
}

func TestMaskErode3x3NilArgs(t *testing.T) {
	ctx, err := NewContext()
	require.NoError(t, err)
	defer ctx.Close()

	err = MaskErode3x3(nil, nil, 10, 10, ctx.Stream())
	require.Error(t, err)

	err = MaskErode3x3(nil, nil, 0, 0, ctx.Stream())
	require.Error(t, err)
}
