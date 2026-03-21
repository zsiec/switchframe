//go:build !cgo || !cuda || !tensorrt

package gpu

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestTRTEngineNotAvailable(t *testing.T) {
	engine, err := NewTRTEngine("/nonexistent/model.onnx", TRTEngineOpts{})
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)
	assert.Nil(t, engine)
}

func TestTRTEngineStubMethods(t *testing.T) {
	// Verify all stub methods are nil-safe and return expected values.
	var engine TRTEngine

	assert.Equal(t, 0, engine.InputSize())
	assert.Equal(t, 0, engine.OutputSize())

	ctx, err := engine.NewContext()
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)
	assert.Nil(t, ctx)

	// Close on zero-value should not panic.
	engine.Close()
}

func TestTRTContextStubInfer(t *testing.T) {
	var ctx TRTContext

	err := ctx.Infer(nil, nil, 1, 0)
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)

	// Close on zero-value should not panic.
	ctx.Close()
}

func TestTRTEngineOptsDefaults(t *testing.T) {
	opts := TRTEngineOpts{}
	assert.Equal(t, 0, opts.MaxBatchSize)
	assert.False(t, opts.UseFP16)
	assert.False(t, opts.UseINT8)
	assert.Empty(t, opts.PlanCachePath)
}

func TestSegmentationSessionStub(t *testing.T) {
	sess, err := NewSegmentationSession(nil, nil, 640, 480)
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)
	assert.Nil(t, sess)

	// Close on zero-value should not panic.
	var s SegmentationSession
	s.Close()

	// Segment on zero-value should return error.
	_, err = s.Segment(nil)
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)
}

func TestSegmentationManagerStub(t *testing.T) {
	mgr, err := NewSegmentationManager(nil, "/some/path")
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)
	assert.Nil(t, mgr)

	// Methods on zero-value should not panic.
	var m SegmentationManager
	err = m.EnableSource("test", 640, 480)
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)

	m.DisableSource("test")

	_, err = m.Segment("test", nil)
	require.ErrorIs(t, err, ErrTensorRTNotAvailable)

	assert.False(t, m.IsEnabled("test"))

	m.Close()
}
