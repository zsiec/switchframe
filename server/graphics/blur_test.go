package graphics

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestBoxBlurYUV420_UniformFrame(t *testing.T) {
	t.Parallel()

	w, h := 8, 8
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	// A uniform frame should remain unchanged after blur.
	src := make([]byte, frameSize)
	for i := range src {
		src[i] = 128
	}
	dst := make([]byte, frameSize)

	BoxBlurYUV420(dst, src, w, h, 3)

	for i := 0; i < frameSize; i++ {
		require.Equal(t, byte(128), dst[i], "pixel %d should remain 128 after blur", i)
	}
}

func TestBoxBlurYUV420_SmallRadius(t *testing.T) {
	t.Parallel()

	w, h := 4, 4
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	// Create a frame with a bright center pixel.
	src := make([]byte, frameSize)
	// Y plane: all 0 except center pixel
	src[1*w+1] = 255

	dst := make([]byte, frameSize)
	BoxBlurYUV420(dst, src, w, h, 1)

	// After radius-1 box blur, energy should spread from the center.
	// The center pixel should be lower than 255.
	require.Less(t, dst[1*w+1], byte(255), "center should be blurred")
	// Some neighbors should be non-zero.
	require.Greater(t, dst[0*w+1], byte(0), "neighbor should receive some energy")
}

func TestBoxBlurYUV420_RadiusClamping(t *testing.T) {
	t.Parallel()

	w, h := 4, 4
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	src := make([]byte, frameSize)
	for i := range src {
		src[i] = 100
	}
	dst := make([]byte, frameSize)

	// Radius 0 should be clamped to 1 (no crash).
	BoxBlurYUV420(dst, src, w, h, 0)
	for i := 0; i < frameSize; i++ {
		require.Equal(t, byte(100), dst[i])
	}

	// Radius 100 should be clamped to 50 (no crash).
	BoxBlurYUV420(dst, src, w, h, 100)
}

func TestBoxBlurYUV420_OddDimensions(t *testing.T) {
	t.Parallel()

	// Odd dimensions should just copy src to dst.
	src := []byte{1, 2, 3, 4, 5}
	dst := make([]byte, len(src))

	BoxBlurYUV420(dst, src, 3, 3, 1)
	require.Equal(t, src, dst, "odd dimensions should copy src to dst")
}

func TestBoxBlurYUV420_LargeRadius(t *testing.T) {
	t.Parallel()

	// A large radius on a small frame should produce an average.
	w, h := 4, 4
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	src := make([]byte, frameSize)
	// Half the Y pixels are 0, half are 200.
	for y := 0; y < h; y++ {
		for x := 0; x < w; x++ {
			if y < h/2 {
				src[y*w+x] = 0
			} else {
				src[y*w+x] = 200
			}
		}
	}

	dst := make([]byte, frameSize)
	BoxBlurYUV420(dst, src, w, h, 50) // max clamped to 50

	// With a very large radius, all pixels should converge toward the average.
	// The average of (0*8 + 200*8)/16 = 100.
	// Due to edge clamping the values won't be exactly 100 but should be close.
	for y := 0; y < h; y++ {
		for x := 0; x < w; x++ {
			v := dst[y*w+x]
			require.InDelta(t, 100, int(v), 50, "Y[%d,%d]=%d should be near 100", x, y, v)
		}
	}
}

func BenchmarkBoxBlurYUV420_1080p(b *testing.B) {
	w, h := 1920, 1080
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	src := make([]byte, frameSize)
	dst := make([]byte, frameSize)
	for i := range src {
		src[i] = byte(i % 256)
	}

	b.ReportAllocs()
	b.SetBytes(int64(frameSize))
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		BoxBlurYUV420(dst, src, w, h, 10)
	}
}
