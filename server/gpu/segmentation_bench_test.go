//go:build cgo && cuda && tensorrt

package gpu

import (
	"os"
	"testing"
)

func benchModelPath(b *testing.B) string {
	b.Helper()
	p := os.Getenv("SEGMENTATION_MODEL_PATH")
	if p == "" {
		p = "/opt/switchframe/models/u2netp.onnx"
	}
	if _, err := os.Stat(p); err != nil {
		b.Skipf("ONNX model not found at %s", p)
	}
	return p
}

// BenchmarkPreprocessNV12ToRGB320 measures the fused NV12→RGB+scale+normalize
// kernel for 1080p input → 320x320 output.
func BenchmarkPreprocessNV12ToRGB320(b *testing.B) {
	ctx, err := NewContext()
	if err != nil {
		b.Fatal(err)
	}
	defer ctx.Close()

	pool, err := NewFramePool(ctx, 1920, 1080, 2)
	if err != nil {
		b.Fatal(err)
	}
	defer pool.Close()

	frame, _ := pool.Acquire()
	defer frame.Release()
	FillBlack(ctx, frame)

	rgbBuf, err := AllocRGBBuffer(320, 320)
	if err != nil {
		b.Fatal(err)
	}
	defer FreeRGBBuffer(rgbBuf)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		PreprocessNV12ToRGB(ctx, rgbBuf, frame, 320, 320)
	}
}

// BenchmarkFullSegmentation1080p measures the complete AI segmentation pipeline:
// preprocess → TRT inference → mask upscale → temporal EMA → stream sync.
func BenchmarkFullSegmentation1080p(b *testing.B) {
	mp := benchModelPath(b)

	ctx, err := NewContext()
	if err != nil {
		b.Fatal(err)
	}
	defer ctx.Close()

	mgr, err := NewSegmentationManager(ctx, mp)
	if err != nil {
		b.Fatal(err)
	}
	defer mgr.Close()

	if err := mgr.EnableSource("bench", 1920, 1080, 0.5, false); err != nil {
		b.Fatal(err)
	}

	pool, err := NewFramePool(ctx, 1920, 1080, 2)
	if err != nil {
		b.Fatal(err)
	}
	defer pool.Close()

	frame, _ := pool.Acquire()
	defer frame.Release()
	FillBlack(ctx, frame)

	// Warmup: first inference triggers TRT optimizations
	mgr.Segment("bench", frame)
	mgr.Segment("bench", frame)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := mgr.Segment("bench", frame)
		if err != nil {
			b.Fatal(err)
		}
	}
}
