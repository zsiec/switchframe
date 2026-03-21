//go:build cgo && cuda

package gpu

/*
#include <cuda.h>
#include <cuda_runtime.h>
#include <stdint.h>

cudaError_t nv12_to_rgb_chw(
    float* rgbOut,
    const uint8_t* nv12,
    int srcW, int srcH, int srcPitch,
    int outW, int outH,
    cudaStream_t stream);
*/
import "C"

import (
	"fmt"
	"unsafe"
)

// PreprocessNV12ToRGB runs the fused NV12 → RGB float32 CHW preprocessing kernel.
//
// The kernel performs in a single GPU pass:
//   - Bilinear downscale from src resolution to outW×outH
//   - BT.709 limited-range YCbCr → RGB colorspace conversion
//   - Normalization to [0.0, 1.0]
//   - CHW planar layout: R[outH*outW] | G[outH*outW] | B[outH*outW]
//
// rgbOut must be a device pointer to a float32 buffer of at least
// 3 * outW * outH elements, allocated via AllocRGBBuffer.
func PreprocessNV12ToRGB(ctx *Context, rgbOut unsafe.Pointer, src *GPUFrame, outW, outH int) error {
	if ctx == nil || src == nil {
		return ErrGPUNotAvailable
	}
	if rgbOut == nil {
		return fmt.Errorf("gpu: preprocess: rgbOut is nil")
	}

	rc := C.nv12_to_rgb_chw(
		(*C.float)(rgbOut),
		(*C.uint8_t)(unsafe.Pointer(uintptr(src.DevPtr))),
		C.int(src.Width), C.int(src.Height), C.int(src.Pitch),
		C.int(outW), C.int(outH),
		ctx.stream,
	)
	if rc != C.cudaSuccess {
		return fmt.Errorf("gpu: preprocess: nv12_to_rgb_chw kernel failed: %d", rc)
	}

	if syncRc := C.cudaStreamSynchronize(ctx.stream); syncRc != C.cudaSuccess {
		return fmt.Errorf("gpu: preprocess: stream sync failed: %d", syncRc)
	}
	return nil
}

// AllocRGBBuffer allocates a float32 CHW device buffer for outW×outH RGB output.
// The buffer size is 3 * outW * outH * sizeof(float32) bytes.
// Caller must free with FreeRGBBuffer when done.
func AllocRGBBuffer(outW, outH int) (unsafe.Pointer, error) {
	size := C.size_t(3 * outW * outH * 4) // float32 = 4 bytes
	var ptr unsafe.Pointer
	if rc := C.cudaMalloc(&ptr, size); rc != C.cudaSuccess {
		return nil, fmt.Errorf("gpu: AllocRGBBuffer: cudaMalloc(%d bytes) failed: %d", size, rc)
	}
	return ptr, nil
}

// FreeRGBBuffer releases a device buffer previously allocated by AllocRGBBuffer.
func FreeRGBBuffer(buf unsafe.Pointer) {
	if buf != nil {
		C.cudaFree(buf)
	}
}

// DownloadRGBBuffer copies a float32 CHW device buffer to a Go slice.
// dst must have capacity >= 3 * outW * outH.
func DownloadRGBBuffer(dst []float32, devPtr unsafe.Pointer, outW, outH int) error {
	if devPtr == nil {
		return fmt.Errorf("gpu: DownloadRGBBuffer: devPtr is nil")
	}
	n := 3 * outW * outH
	if len(dst) < n {
		return fmt.Errorf("gpu: DownloadRGBBuffer: dst too small: %d < %d", len(dst), n)
	}
	size := C.size_t(n * 4) // float32 = 4 bytes
	if rc := C.cudaMemcpy(
		unsafe.Pointer(&dst[0]),
		devPtr,
		size,
		C.cudaMemcpyDeviceToHost,
	); rc != C.cudaSuccess {
		return fmt.Errorf("gpu: DownloadRGBBuffer: cudaMemcpy failed: %d", rc)
	}
	return nil
}
