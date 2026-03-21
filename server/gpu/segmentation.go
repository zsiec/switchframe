//go:build cgo && cuda && tensorrt

package gpu

/*
#include <cuda.h>
#include <cuda_runtime.h>
#include <stdint.h>

// Preprocessing kernel (defined in cuda/preprocess.cu, linked via libswitchframe_cuda.a)
// CHW variant for u2netp: output [3, outH, outW] planar float32
cudaError_t nv12_to_rgb_chw(
    float* rgbOut,
    const uint8_t* nv12,
    int srcW, int srcH, int srcPitch,
    int outW, int outH,
    cudaStream_t stream);

// Mask conversion + upscale kernel (defined in cuda/preprocess.cu)
cudaError_t mask_to_u8_upscale(
    uint8_t* dst, int dstW, int dstH,
    const float* src, int srcW, int srcH,
    cudaStream_t stream);
*/
import "C"

import (
	"fmt"
	"log/slog"
	"os"
	"path/filepath"
	"sync"
	"unsafe"
)

const (
	// segModelW and segModelH are the input dimensions for the MediaPipe
	// Selfie Segmentation model.
	segModelW = 320
	segModelH = 320
)

// SegmentationSession is a per-source inference session with pre-allocated
// GPU buffers and a dedicated CUDA stream. Each source gets its own session
// so that inference can overlap with other GPU work.
type SegmentationSession struct {
	ctx    *Context
	trtCtx *TRTContext
	stream C.cudaStream_t // dedicated per-source CUDA stream

	// Pre-allocated GPU buffers
	rgbBuf  unsafe.Pointer // [1, 3, 320, 320] float32 CHW (model input)
	maskBuf unsafe.Pointer // [1, 1, 320, 320] float32 (model output, first of 7)
	maskU8  unsafe.Pointer // [srcH, srcW] uint8 upscaled mask (final output)

	srcW, srcH     int // source frame resolution
	modelW, modelH int // model input resolution (256x256)
}

// NewSegmentationSession creates a per-source inference session.
//
// It allocates a dedicated CUDA stream and pre-allocates all GPU buffers
// needed for preprocessing, inference, and post-processing. The engine
// is shared across sessions; each session gets its own TRTContext.
func NewSegmentationSession(ctx *Context, engine *TRTEngine, srcW, srcH int) (*SegmentationSession, error) {
	if ctx == nil {
		return nil, ErrGPUNotAvailable
	}
	if engine == nil {
		return nil, fmt.Errorf("gpu: segmentation: nil engine")
	}
	if srcW <= 0 || srcH <= 0 {
		return nil, fmt.Errorf("gpu: segmentation: invalid source dimensions %dx%d", srcW, srcH)
	}

	s := &SegmentationSession{
		ctx:    ctx,
		srcW:   srcW,
		srcH:   srcH,
		modelW: segModelW,
		modelH: segModelH,
	}

	// Create dedicated CUDA stream for this source.
	if rc := C.cudaStreamCreateWithFlags(&s.stream, C.cudaStreamNonBlocking); rc != C.cudaSuccess {
		return nil, fmt.Errorf("gpu: segmentation: stream create failed: %d", rc)
	}

	// Allocate model input buffer: [1, 3, 320, 320] float32 CHW
	rgbSize := C.size_t(segModelW * segModelH * 3 * 4) // 3 channels * 4 bytes/float32
	if rc := C.cudaMalloc(&s.rgbBuf, rgbSize); rc != C.cudaSuccess {
		s.Close()
		return nil, fmt.Errorf("gpu: segmentation: alloc rgbBuf failed: %d", rc)
	}

	// Allocate model output buffer: [1, 1, 320, 320] float32 (u2netp has 7 outputs, we use the first)
	maskSize := C.size_t(segModelW * segModelH * 1 * 4) // 1 channel * 4 bytes/float32
	if rc := C.cudaMalloc(&s.maskBuf, maskSize); rc != C.cudaSuccess {
		s.Close()
		return nil, fmt.Errorf("gpu: segmentation: alloc maskBuf failed: %d", rc)
	}

	// Allocate upscaled mask buffer: [srcH, srcW] uint8
	maskU8Size := C.size_t(srcW * srcH)
	if rc := C.cudaMalloc(&s.maskU8, maskU8Size); rc != C.cudaSuccess {
		s.Close()
		return nil, fmt.Errorf("gpu: segmentation: alloc maskU8 failed: %d", rc)
	}

	// Create TRTContext from shared engine.
	trtCtx, err := engine.NewContext()
	if err != nil {
		s.Close()
		return nil, fmt.Errorf("gpu: segmentation: create TRT context: %w", err)
	}
	s.trtCtx = trtCtx

	return s, nil
}

// Segment runs the segmentation inference pipeline on a GPU frame and
// returns a device pointer to a uint8 mask at source resolution.
//
// The pipeline:
//  1. NV12→CHW RGB: NV12 GPU frame → 320x320 float32 CHW (u2netp input format)
//  2. TRTContext.Infer: run u2netp, producing 320x320 float32 mask
//  3. MaskFloatToU8Upscale: convert + bilinear upscale to source resolution
//  4. cudaStreamSynchronize: ensure all async ops complete
//
// The returned pointer points to the session's pre-allocated maskU8 buffer.
// It is valid until the next call to Segment or Close.
func (s *SegmentationSession) Segment(frame *GPUFrame) (unsafe.Pointer, error) {
	if s == nil {
		return nil, fmt.Errorf("gpu: segmentation: nil session")
	}
	if frame == nil {
		return nil, fmt.Errorf("gpu: segmentation: nil frame")
	}

	// Step 1: Preprocess NV12 → CHW float32 on our dedicated stream.
	// u2netp expects NCHW [1, 3, 320, 320] with values in [0, 1].
	rc := C.nv12_to_rgb_chw(
		(*C.float)(s.rgbBuf),
		(*C.uint8_t)(unsafe.Pointer(uintptr(frame.DevPtr))),
		C.int(frame.Width), C.int(frame.Height), C.int(frame.Pitch),
		C.int(s.modelW), C.int(s.modelH),
		s.stream,
	)
	if rc != C.cudaSuccess {
		return nil, fmt.Errorf("gpu: segmentation: preprocess kernel failed: %d", rc)
	}

	// Step 2: TensorRT inference (async on our stream).
	if err := s.trtCtx.Infer(s.rgbBuf, s.maskBuf, 1, s.stream); err != nil {
		return nil, fmt.Errorf("gpu: segmentation: infer: %w", err)
	}

	// Step 3: Convert float32 mask -> uint8 + bilinear upscale to source res.
	if err := MaskFloatToU8Upscale(s.maskU8, s.srcW, s.srcH, s.maskBuf, s.modelW, s.modelH, s.stream); err != nil {
		return nil, fmt.Errorf("gpu: segmentation: mask upscale: %w", err)
	}

	// Step 4: Synchronize to ensure all work is complete before returning.
	if syncRc := C.cudaStreamSynchronize(s.stream); syncRc != C.cudaSuccess {
		return nil, fmt.Errorf("gpu: segmentation: stream sync failed: %d", syncRc)
	}

	return s.maskU8, nil
}

// Close releases all GPU resources owned by this session.
func (s *SegmentationSession) Close() {
	if s == nil {
		return
	}
	if s.trtCtx != nil {
		s.trtCtx.Close()
		s.trtCtx = nil
	}
	if s.rgbBuf != nil {
		C.cudaFree(s.rgbBuf)
		s.rgbBuf = nil
	}
	if s.maskBuf != nil {
		C.cudaFree(s.maskBuf)
		s.maskBuf = nil
	}
	if s.maskU8 != nil {
		C.cudaFree(s.maskU8)
		s.maskU8 = nil
	}
	if s.stream != nil {
		C.cudaStreamDestroy(s.stream)
		s.stream = nil
	}
}

// SegmentationManager manages per-source segmentation sessions with a shared
// TensorRT engine. The engine is built once from ONNX at manager creation
// (with .plan caching for fast subsequent startups). Sessions are created
// and destroyed per source via EnableSource/DisableSource.
type SegmentationManager struct {
	mu       sync.RWMutex
	sessions map[string]*SegmentationSession
	engine   *TRTEngine
	ctx      *Context
}

// NewSegmentationManager creates a segmentation manager, building or loading
// the TensorRT engine from the given ONNX model path. The engine plan is
// cached at ~/.switchframe/models/ for fast subsequent loads.
//
// Uses FP16 precision for a good balance of speed and quality on L4 GPUs.
func NewSegmentationManager(ctx *Context, modelPath string) (*SegmentationManager, error) {
	if ctx == nil {
		return nil, ErrGPUNotAvailable
	}

	// Determine plan cache path.
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return nil, fmt.Errorf("gpu: segmentation: get home dir: %w", err)
	}
	planDir := filepath.Join(homeDir, ".switchframe", "models")
	if err := os.MkdirAll(planDir, 0o755); err != nil {
		return nil, fmt.Errorf("gpu: segmentation: create plan cache dir: %w", err)
	}
	// Derive plan filename from ONNX filename
	onnxBase := filepath.Base(modelPath)
	planName := onnxBase[:len(onnxBase)-len(filepath.Ext(onnxBase))] + ".plan"
	planPath := filepath.Join(planDir, planName)

	slog.Info("gpu: segmentation: building/loading TensorRT engine",
		"onnx", modelPath,
		"plan_cache", planPath,
	)

	engine, err := NewTRTEngine(modelPath, TRTEngineOpts{
		MaxBatchSize:  1,
		UseFP16:       true,
		PlanCachePath: planPath,
	})
	if err != nil {
		return nil, fmt.Errorf("gpu: segmentation: build engine: %w", err)
	}

	slog.Info("gpu: segmentation: engine ready",
		"input_size", engine.InputSize(),
		"output_size", engine.OutputSize(),
	)

	return &SegmentationManager{
		sessions: make(map[string]*SegmentationSession),
		engine:   engine,
		ctx:      ctx,
	}, nil
}

// EnableSource creates a segmentation session for the given source.
// If a session already exists for this source, it is replaced.
func (m *SegmentationManager) EnableSource(sourceKey string, w, h int) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	// Clean up existing session if any.
	if old, ok := m.sessions[sourceKey]; ok {
		old.Close()
		delete(m.sessions, sourceKey)
	}

	session, err := NewSegmentationSession(m.ctx, m.engine, w, h)
	if err != nil {
		return fmt.Errorf("gpu: segmentation: enable source %q: %w", sourceKey, err)
	}
	m.sessions[sourceKey] = session

	slog.Info("gpu: segmentation: enabled source",
		"source", sourceKey,
		"resolution", fmt.Sprintf("%dx%d", w, h),
	)
	return nil
}

// DisableSource destroys the segmentation session for the given source.
func (m *SegmentationManager) DisableSource(sourceKey string) {
	m.mu.Lock()
	defer m.mu.Unlock()

	if session, ok := m.sessions[sourceKey]; ok {
		session.Close()
		delete(m.sessions, sourceKey)
		slog.Info("gpu: segmentation: disabled source", "source", sourceKey)
	}
}

// Segment runs segmentation inference for the given source.
// Returns a device pointer to a uint8 mask at the source's resolution.
// The pointer is valid until the next Segment call for the same source.
func (m *SegmentationManager) Segment(sourceKey string, frame *GPUFrame) (unsafe.Pointer, error) {
	m.mu.RLock()
	session, ok := m.sessions[sourceKey]
	m.mu.RUnlock()

	if !ok {
		return nil, fmt.Errorf("gpu: segmentation: source %q not enabled", sourceKey)
	}
	return session.Segment(frame)
}

// IsEnabled returns true if segmentation is enabled for the given source.
func (m *SegmentationManager) IsEnabled(sourceKey string) bool {
	m.mu.RLock()
	defer m.mu.RUnlock()
	_, ok := m.sessions[sourceKey]
	return ok
}

// Close destroys all sessions and the shared TensorRT engine.
func (m *SegmentationManager) Close() {
	m.mu.Lock()
	defer m.mu.Unlock()

	for key, session := range m.sessions {
		session.Close()
		delete(m.sessions, key)
	}
	if m.engine != nil {
		m.engine.Close()
		m.engine = nil
	}
}
