//go:build !cgo || !cuda || !tensorrt

package gpu

import "unsafe"

// SegmentationSession is a stub for non-TensorRT builds.
type SegmentationSession struct{}

// NewSegmentationSession returns ErrTensorRTNotAvailable on non-TensorRT builds.
func NewSegmentationSession(ctx *Context, engine *TRTEngine, srcW, srcH int) (*SegmentationSession, error) {
	return nil, ErrTensorRTNotAvailable
}

// Segment returns ErrTensorRTNotAvailable on non-TensorRT builds.
func (s *SegmentationSession) Segment(frame *GPUFrame) (unsafe.Pointer, error) {
	return nil, ErrTensorRTNotAvailable
}

// Close is a no-op on non-TensorRT builds.
func (s *SegmentationSession) Close() {}

// SegmentationManager is a stub for non-TensorRT builds.
type SegmentationManager struct{}

// NewSegmentationManager returns ErrTensorRTNotAvailable on non-TensorRT builds.
func NewSegmentationManager(ctx *Context, modelPath string) (*SegmentationManager, error) {
	return nil, ErrTensorRTNotAvailable
}

// EnableSource returns ErrTensorRTNotAvailable on non-TensorRT builds.
func (m *SegmentationManager) EnableSource(sourceKey string, w, h int) error {
	return ErrTensorRTNotAvailable
}

// DisableSource is a no-op on non-TensorRT builds.
func (m *SegmentationManager) DisableSource(sourceKey string) {}

// Segment returns ErrTensorRTNotAvailable on non-TensorRT builds.
func (m *SegmentationManager) Segment(sourceKey string, frame *GPUFrame) (unsafe.Pointer, error) {
	return nil, ErrTensorRTNotAvailable
}

// IsEnabled returns false on non-TensorRT builds.
func (m *SegmentationManager) IsEnabled(sourceKey string) bool { return false }

// Close is a no-op on non-TensorRT builds.
func (m *SegmentationManager) Close() {}
