//go:build cgo && cuda && tensorrt

package gpu

/*
#include <cuda_runtime.h>
*/
import "C"

import (
	"os"
	"testing"
)

// Segmentation benchmarks measure each stage of the AI segmentation pipeline
// on a 1080p frame through the complete u2netp inference path.
//
// Run with:
//
//	go test -tags 'cgo cuda tensorrt' -bench=BenchmarkPreprocess -benchtime=100x
//
// All benchmarks skip if the ONNX model is not found (see benchModelPath()).

// benchModelPath returns the ONNX model path for benchmarks, skipping if not found.
// Uses the same environment variable and default path as modelPath(*testing.T).
func benchModelPath(b *testing.B) string {
	b.Helper()
	p := os.Getenv("SEGMENTATION_MODEL_PATH")
	if p == "" {
		p = defaultModelPath
	}
	if _, err := os.Stat(p); os.IsNotExist(err) {
		b.Skipf("segmentation model not found at %s (set SEGMENTATION_MODEL_PATH to override)", p)
	}
	return p
}

// BenchmarkPreprocessNV12ToRGB320 benchmarks the fused NV12→RGB CHW kernel:
// 1080p NV12 GPU frame → 320×320 float32 CHW (u2netp input format).
// Target: <0.2ms on NVIDIA L4.
func BenchmarkPreprocessNV12ToRGB320(b *testing.B) {
	ctx, err := NewContext()
	if err != nil {
		b.Skip("no GPU:", err)
	}
	defer ctx.Close()

	pool, err := NewFramePool(ctx, 1920, 1080, 2)
	if err != nil {
		b.Fatal(err)
	}
	defer pool.Close()

	frame, err := pool.Acquire()
	if err != nil {
		b.Fatal(err)
	}
	defer frame.Release()

	ySize := 1920 * 1080
	cbSize := (1920 / 2) * (1080 / 2)
	yuv := make([]byte, ySize+cbSize+cbSize)
	for i := 0; i < ySize; i++ {
		yuv[i] = 128
	}
	for i := ySize; i < len(yuv); i++ {
		yuv[i] = 128
	}
	if err := Upload(ctx, frame, yuv, 1920, 1080); err != nil {
		b.Fatal(err)
	}

	rgbBuf, err := AllocRGBBuffer(segModelW, segModelH)
	if err != nil {
		b.Fatal(err)
	}
	defer FreeRGBBuffer(rgbBuf)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if err := PreprocessNV12ToRGB(ctx, rgbBuf, frame, segModelW, segModelH); err != nil {
			b.Fatal(err)
		}
	}
}

// BenchmarkTRTInference320 benchmarks TensorRT inference for u2netp at 320×320.
// Target: <2ms on NVIDIA L4.
func BenchmarkTRTInference320(b *testing.B) {
	mp := benchModelPath(b)

	ctx, err := NewContext()
	if err != nil {
		b.Skip("no GPU:", err)
	}
	defer ctx.Close()

	engine, err := NewTRTEngine(mp, TRTEngineOpts{
		MaxBatchSize:  1,
		UseFP16:       true,
		PlanCachePath: "/tmp/u2netp_bench.plan",
	})
	if err != nil {
		b.Fatal("load engine:", err)
	}
	defer engine.Close()

	trtCtx, err := engine.NewContext()
	if err != nil {
		b.Fatal("create context:", err)
	}
	defer trtCtx.Close()

	// Allocate model input buffer: [1, 3, 320, 320] float32 CHW
	inputBuf, err := AllocDeviceBytes(segModelW * segModelH * 3 * 4)
	if err != nil {
		b.Fatal("alloc input:", err)
	}
	defer FreeDeviceBytes(inputBuf)

	// Allocate model output buffer: [1, 1, 320, 320] float32
	outputBuf, err := AllocDeviceBytes(segModelW * segModelH * 1 * 4)
	if err != nil {
		b.Fatal("alloc output:", err)
	}
	defer FreeDeviceBytes(outputBuf)

	stream := ctx.Stream()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if err := trtCtx.Infer(inputBuf, outputBuf, 1, stream); err != nil {
			b.Fatal(err)
		}
		// Synchronize to measure end-to-end GPU latency including inference.
		if rc := C.cudaStreamSynchronize(stream); rc != C.cudaSuccess {
			b.Fatalf("stream sync failed: %d", rc)
		}
	}
}

// BenchmarkMaskUpscale320to1080p benchmarks float32→uint8 conversion + bilinear
// upscale from 320×320 (model output) to 1920×1080 (source resolution).
// Target: <0.2ms on NVIDIA L4.
func BenchmarkMaskUpscale320to1080p(b *testing.B) {
	ctx, err := NewContext()
	if err != nil {
		b.Skip("no GPU:", err)
	}
	defer ctx.Close()

	// Source (model output): 320×320 float32
	srcBuf, err := AllocDeviceBytes(segModelW * segModelH * 4)
	if err != nil {
		b.Fatal("alloc src:", err)
	}
	defer FreeDeviceBytes(srcBuf)

	// Destination: 1920×1080 uint8
	dstBuf, err := AllocDeviceBytes(1920 * 1080)
	if err != nil {
		b.Fatal("alloc dst:", err)
	}
	defer FreeDeviceBytes(dstBuf)

	stream := ctx.Stream()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if err := MaskFloatToU8Upscale(dstBuf, 1920, 1080, srcBuf, segModelW, segModelH, stream); err != nil {
			b.Fatal(err)
		}
		if rc := C.cudaStreamSynchronize(stream); rc != C.cudaSuccess {
			b.Fatalf("stream sync failed: %d", rc)
		}
	}
}

// BenchmarkMaskEMA1080p benchmarks temporal EMA smoothing on a 1920×1080 mask.
// Input: two 1920×1080 uint8 device buffers, alpha=0.5.
// Target: <0.1ms on NVIDIA L4.
func BenchmarkMaskEMA1080p(b *testing.B) {
	ctx, err := NewContext()
	if err != nil {
		b.Skip("no GPU:", err)
	}
	defer ctx.Close()

	const size = 1920 * 1080

	prevBuf, err := AllocDeviceBytes(size)
	if err != nil {
		b.Fatal("alloc prev:", err)
	}
	defer FreeDeviceBytes(prevBuf)

	currBuf, err := AllocDeviceBytes(size)
	if err != nil {
		b.Fatal("alloc curr:", err)
	}
	defer FreeDeviceBytes(currBuf)

	outBuf, err := AllocDeviceBytes(size)
	if err != nil {
		b.Fatal("alloc out:", err)
	}
	defer FreeDeviceBytes(outBuf)

	// Seed prev with non-zero data to exercise the full EMA blending path.
	prevData := make([]byte, size)
	for i := range prevData {
		prevData[i] = 128
	}
	if err := UploadBytes(prevBuf, prevData); err != nil {
		b.Fatal("upload prev:", err)
	}

	stream := ctx.Stream()
	const alpha = float32(0.5)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if err := MaskEMA(outBuf, prevBuf, currBuf, alpha, size, stream); err != nil {
			b.Fatal(err)
		}
		if rc := C.cudaStreamSynchronize(stream); rc != C.cudaSuccess {
			b.Fatalf("stream sync failed: %d", rc)
		}
	}
}

// BenchmarkFullSegmentation1080p benchmarks the complete segmentation pipeline:
// NV12→RGB preprocess → TRT inference → mask upscale → EMA temporal smoothing → sync.
// Target: <5ms on NVIDIA L4 with u2netp FP16.
func BenchmarkFullSegmentation1080p(b *testing.B) {
	mp := benchModelPath(b)

	ctx, err := NewContext()
	if err != nil {
		b.Skip("no GPU:", err)
	}
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	if err != nil {
		b.Fatal("create manager:", err)
	}
	defer mgr.Close()

	const srcW, srcH = 1920, 1080
	if err := mgr.EnableSource("bench-cam", srcW, srcH, 0.5, false); err != nil {
		b.Fatal("enable source:", err)
	}
	defer mgr.DisableSource("bench-cam")

	pool, err := NewFramePool(ctx, srcW, srcH, 2)
	if err != nil {
		b.Fatal("create pool:", err)
	}
	defer pool.Close()

	frame, err := pool.Acquire()
	if err != nil {
		b.Fatal("acquire frame:", err)
	}
	defer frame.Release()

	ySize := srcW * srcH
	cbSize := (srcW / 2) * (srcH / 2)
	yuv := make([]byte, ySize+cbSize+cbSize)
	for i := 0; i < ySize; i++ {
		yuv[i] = 128
	}
	for i := ySize; i < len(yuv); i++ {
		yuv[i] = 128
	}
	if err := Upload(ctx, frame, yuv, srcW, srcH); err != nil {
		b.Fatal("upload frame:", err)
	}

	// Warm up: run one inference pass before timing to ensure plan is loaded
	// and GPU caches are warm.
	if _, err := mgr.Segment("bench-cam", frame); err != nil {
		b.Fatal("warmup segment:", err)
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		maskPtr, err := mgr.Segment("bench-cam", frame)
		if err != nil {
			b.Fatal(err)
		}
		if maskPtr == nil {
			b.Fatal("nil mask returned")
		}
	}
}
