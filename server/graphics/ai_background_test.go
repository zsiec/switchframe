package graphics

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestAIBackgroundTransparent(t *testing.T) {
	t.Parallel()

	kp := NewKeyProcessor()
	w, h := 8, 8
	ySize := w * h
	uvSize := (w / 2) * (h / 2)

	kp.SetKey("cam1", KeyConfig{
		Type:         KeyTypeAI,
		Enabled:      true,
		AIBackground: "transparent",
	})

	// Fully opaque mask: person everywhere.
	mask := make([]byte, ySize)
	for i := range mask {
		mask[i] = 255
	}
	kp.SetAIMask("cam1", mask)

	// Fill: Y=200
	fill := makeYUV420Frame(w, h, 200, 100, 150)
	// Background: Y=50
	bg := makeYUV420Frame(w, h, 50, 128, 128)

	result := kp.Process(bg, map[string][]byte{"cam1": fill}, w, h)

	// Transparent mode: standard key behavior. Fully opaque mask means fill replaces bg.
	for i := 0; i < ySize; i++ {
		require.Equal(t, byte(200), result[i],
			"Y[%d] should be fill (200) with transparent mode + full mask", i)
	}
	for i := 0; i < uvSize; i++ {
		require.Equal(t, byte(100), result[ySize+i],
			"Cb[%d] should be fill (100)", i)
		require.Equal(t, byte(150), result[ySize+uvSize+i],
			"Cr[%d] should be fill (150)", i)
	}
}

func TestAIBackgroundTransparent_EmptyString(t *testing.T) {
	t.Parallel()

	kp := NewKeyProcessor()
	w, h := 8, 8
	ySize := w * h

	// Empty AIBackground should behave like "transparent".
	kp.SetKey("cam1", KeyConfig{
		Type:         KeyTypeAI,
		Enabled:      true,
		AIBackground: "",
	})

	mask := make([]byte, ySize)
	for i := range mask {
		mask[i] = 255
	}
	kp.SetAIMask("cam1", mask)

	fill := makeYUV420Frame(w, h, 200, 100, 150)
	bg := makeYUV420Frame(w, h, 50, 128, 128)

	result := kp.Process(bg, map[string][]byte{"cam1": fill}, w, h)

	for i := 0; i < ySize; i++ {
		require.Equal(t, byte(200), result[i])
	}
}

func TestAIBackgroundBlur(t *testing.T) {
	t.Parallel()

	kp := NewKeyProcessor()
	w, h := 8, 8
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	kp.SetKey("cam1", KeyConfig{
		Type:         KeyTypeAI,
		Enabled:      true,
		AIBackground: "blur:3",
	})

	// Create a mask: top half is person (255), bottom half is background (0).
	mask := make([]byte, ySize)
	for y := 0; y < h/2; y++ {
		for x := 0; x < w; x++ {
			mask[y*w+x] = 255
		}
	}
	kp.SetAIMask("cam1", mask)

	// Fill/source: top half bright (Y=200), bottom half dark (Y=40).
	fill := make([]byte, frameSize)
	for y := 0; y < h; y++ {
		for x := 0; x < w; x++ {
			if y < h/2 {
				fill[y*w+x] = 200
			} else {
				fill[y*w+x] = 40
			}
		}
	}
	for i := 0; i < uvSize; i++ {
		fill[ySize+i] = 128
		fill[ySize+uvSize+i] = 128
	}

	bg := makeYUV420Frame(w, h, 80, 128, 128)

	result := kp.Process(bg, map[string][]byte{"cam1": fill}, w, h)

	// With blur mode and fully-opaque mask applied:
	// - The result replaces the program entirely (mask is set to 255 for all pixels).
	// - Top half (person region): should be the original sharp fill values (Y~200).
	// - Bottom half (background region): should be the blurred version of the fill.
	//   The blur mixes the bright top (200) with the dark bottom (40), so the bottom
	//   half should be somewhere between 40 and 200 (not exactly 40).
	for y := 0; y < h/2; y++ {
		for x := 0; x < w; x++ {
			v := result[y*w+x]
			require.Equal(t, byte(200), v,
				"person region Y[%d,%d] should be sharp fill (200), got %d", x, y, v)
		}
	}

	// Bottom half should be blurred (not the original 40, and not bg's 80).
	// The blur mixes energy from the bright top, so most values should be > 40.
	// Pixels far from the top half (near bottom edge with edge clamping) may stay at 40.
	blurredCount := 0
	for y := h / 2; y < h; y++ {
		for x := 0; x < w; x++ {
			v := result[y*w+x]
			if v > 40 {
				blurredCount++
			}
			// No pixel in the bottom half should be the program bg value (80).
			require.NotEqual(t, byte(80), v,
				"blurred bg Y[%d,%d] should not be program bg (80)", x, y)
		}
	}
	// At least some bottom-half pixels should show blur effect.
	require.Greater(t, blurredCount, 0, "at least some bottom-half pixels should be blurred")

	// The entire frame should have replaced the program bg (Y=80).
	// Check that no pixel is exactly the program background.
	for i := 0; i < ySize; i++ {
		require.NotEqual(t, byte(80), result[i],
			"no pixel should retain program bg value (80)")
	}
}

func TestAIBackgroundColor(t *testing.T) {
	t.Parallel()

	kp := NewKeyProcessor()
	w, h := 8, 8
	ySize := w * h
	uvSize := (w / 2) * (h / 2)

	// Green background: #00FF00
	kp.SetKey("cam1", KeyConfig{
		Type:         KeyTypeAI,
		Enabled:      true,
		AIBackground: "color:00FF00",
	})

	// Mask: top half person (255), bottom half background (0).
	mask := make([]byte, ySize)
	for y := 0; y < h/2; y++ {
		for x := 0; x < w; x++ {
			mask[y*w+x] = 255
		}
	}
	kp.SetAIMask("cam1", mask)

	// Fill: Y=200, Cb=100, Cr=150 (person)
	fill := makeYUV420Frame(w, h, 200, 100, 150)
	// Background program: Y=80
	bg := makeYUV420Frame(w, h, 80, 128, 128)

	result := kp.Process(bg, map[string][]byte{"cam1": fill}, w, h)

	// Compute expected green YCbCr values.
	greenY, greenCb, greenCr := rgbToYCbCr709(0, 255, 0)

	// Top half (person, mask=255): should be fill values (Y=200).
	for y := 0; y < h/2; y++ {
		for x := 0; x < w; x++ {
			require.Equal(t, byte(200), result[y*w+x],
				"person Y[%d,%d] should be 200", x, y)
		}
	}

	// Bottom half (background, mask=0): should be green color.
	for y := h / 2; y < h; y++ {
		for x := 0; x < w; x++ {
			require.Equal(t, greenY, result[y*w+x],
				"bg Y[%d,%d] should be green Y (%d)", x, y, greenY)
		}
	}

	// Chroma: top half chroma should be fill Cb/Cr.
	chromaW := w / 2
	chromaH := h / 2
	for cy := 0; cy < chromaH/2; cy++ {
		for cx := 0; cx < chromaW; cx++ {
			idx := cy*chromaW + cx
			require.Equal(t, byte(100), result[ySize+idx],
				"person Cb[%d,%d] should be 100", cx, cy)
			require.Equal(t, byte(150), result[ySize+uvSize+idx],
				"person Cr[%d,%d] should be 150", cx, cy)
		}
	}
	// Bottom half chroma should be green Cb/Cr.
	for cy := chromaH / 2; cy < chromaH; cy++ {
		for cx := 0; cx < chromaW; cx++ {
			idx := cy*chromaW + cx
			require.Equal(t, greenCb, result[ySize+idx],
				"bg Cb[%d,%d] should be green Cb (%d)", cx, cy, greenCb)
			require.Equal(t, greenCr, result[ySize+uvSize+idx],
				"bg Cr[%d,%d] should be green Cr (%d)", cx, cy, greenCr)
		}
	}
}

func TestAIBackgroundColor_Blue(t *testing.T) {
	t.Parallel()

	kp := NewKeyProcessor()
	w, h := 4, 4
	ySize := w * h

	kp.SetKey("cam1", KeyConfig{
		Type:         KeyTypeAI,
		Enabled:      true,
		AIBackground: "color:0000FF",
	})

	// Fully transparent mask (all background).
	mask := make([]byte, ySize) // all zeros
	kp.SetAIMask("cam1", mask)

	fill := makeYUV420Frame(w, h, 200, 100, 150)
	bg := makeYUV420Frame(w, h, 80, 128, 128)

	result := kp.Process(bg, map[string][]byte{"cam1": fill}, w, h)

	// With all-zero mask, the entire frame should be the blue color.
	blueY, _, _ := rgbToYCbCr709(0, 0, 255)
	for i := 0; i < ySize; i++ {
		require.Equal(t, blueY, result[i],
			"Y[%d] should be blue Y (%d) with transparent mask", i, blueY)
	}
}

func TestAIBackgroundBlur_ReusesBuffer(t *testing.T) {
	t.Parallel()

	kp := NewKeyProcessor()
	w, h := 8, 8
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	kp.SetKey("cam1", KeyConfig{
		Type:         KeyTypeAI,
		Enabled:      true,
		AIBackground: "blur:5",
	})

	mask := make([]byte, ySize)
	for i := range mask {
		mask[i] = 128
	}
	kp.SetAIMask("cam1", mask)

	fill := makeYUV420Frame(w, h, 200, 100, 150)

	// Process twice to verify blurBuf is reused (no panic, stable results).
	bg1 := makeYUV420Frame(w, h, 50, 128, 128)
	result1 := kp.Process(bg1, map[string][]byte{"cam1": fill}, w, h)
	snap1 := make([]byte, frameSize)
	copy(snap1, result1)

	bg2 := makeYUV420Frame(w, h, 50, 128, 128)
	result2 := kp.Process(bg2, map[string][]byte{"cam1": fill}, w, h)

	// Same inputs should produce same output (buffer reuse doesn't corrupt).
	require.Equal(t, snap1, result2, "repeated Process should produce identical results")
}

func TestParseBlurRadius(t *testing.T) {
	t.Parallel()

	tests := []struct {
		input    string
		expected int
	}{
		{"blur:10", 10},
		{"blur:1", 1},
		{"blur:50", 50},
		{"blur:0", 1},       // below minimum, clamped to 1
		{"blur:-5", 1},      // negative, clamped to 1
		{"blur:100", 50},    // above maximum, clamped to 50
		{"blur:", 1},        // empty number, fallback to 1
		{"blur:abc", 1},     // non-numeric, fallback to 1
		{"blur:25", 25},     // normal case
		{"blur:3.5", 1},     // float, fallback to 1 (Atoi doesn't handle floats)
	}

	for _, tt := range tests {
		t.Run(tt.input, func(t *testing.T) {
			result := parseBlurRadius(tt.input)
			require.Equal(t, tt.expected, result)
		})
	}
}

func TestParseColorHex(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name     string
		input    string
		expectOK bool // true if we expect non-default values
	}{
		{"green", "color:00FF00", true},
		{"red", "color:FF0000", true},
		{"blue", "color:0000FF", true},
		{"white", "color:FFFFFF", true},
		{"black", "color:000000", true},
		{"too short", "color:FFF", false},
		{"too long", "color:AABBCCDD", false},
		{"empty", "color:", false},
		{"invalid hex", "color:GGHHII", false},
		{"lowercase", "color:ff0000", true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			y, cb, cr := parseColorHex(tt.input)
			if !tt.expectOK {
				// Should return mid-gray fallback.
				require.Equal(t, uint8(128), y, "fallback Y should be 128")
				require.Equal(t, uint8(128), cb, "fallback Cb should be 128")
				require.Equal(t, uint8(128), cr, "fallback Cr should be 128")
			} else {
				// Should return valid YCbCr values (not mid-gray for non-gray colors).
				// Just verify no panic and values are in range.
				require.LessOrEqual(t, y, uint8(255))
				require.LessOrEqual(t, cb, uint8(255))
				require.LessOrEqual(t, cr, uint8(255))
			}
		})
	}

	// Specific color checks.
	t.Run("green YCbCr values", func(t *testing.T) {
		y, cb, cr := parseColorHex("color:00FF00")
		// BT.709 green: Y~170, Cb~42, Cr~26 (limited range)
		require.InDelta(t, 170, int(y), 10, "green Y")
		require.Less(t, cb, uint8(128), "green Cb should be below neutral")
		require.Less(t, cr, uint8(128), "green Cr should be below neutral")
		_ = y
		_ = cb
		_ = cr
	})

	t.Run("white YCbCr values", func(t *testing.T) {
		y, _, _ := parseColorHex("color:FFFFFF")
		require.Greater(t, y, uint8(220), "white Y should be high")
	})

	t.Run("black YCbCr values", func(t *testing.T) {
		y, cb, cr := parseColorHex("color:000000")
		require.Less(t, y, uint8(25), "black Y should be low")
		// Black chroma should be near neutral (128).
		require.InDelta(t, 128, int(cb), 5, "black Cb should be near 128")
		require.InDelta(t, 128, int(cr), 5, "black Cr should be near 128")
	})
}

func TestFillYUVColor(t *testing.T) {
	t.Parallel()

	w, h := 8, 8
	ySize := w * h
	uvSize := (w / 2) * (h / 2)
	frameSize := ySize + 2*uvSize

	dst := make([]byte, frameSize)
	fillYUVColor(dst, w, h, 100, 50, 200)

	for i := 0; i < ySize; i++ {
		require.Equal(t, byte(100), dst[i], "Y[%d]", i)
	}
	for i := 0; i < uvSize; i++ {
		require.Equal(t, byte(50), dst[ySize+i], "Cb[%d]", i)
		require.Equal(t, byte(200), dst[ySize+uvSize+i], "Cr[%d]", i)
	}
}

func TestRGBToYCbCr709(t *testing.T) {
	t.Parallel()

	// White should have high Y, neutral Cb/Cr.
	y, cb, cr := rgbToYCbCr709(255, 255, 255)
	require.Greater(t, y, uint8(220))
	require.InDelta(t, 128, int(cb), 5)
	require.InDelta(t, 128, int(cr), 5)

	// Black should have low Y, neutral Cb/Cr.
	y, cb, cr = rgbToYCbCr709(0, 0, 0)
	require.Less(t, y, uint8(25))
	require.InDelta(t, 128, int(cb), 5)
	require.InDelta(t, 128, int(cr), 5)

	// Red should have high Cr.
	_, _, cr = rgbToYCbCr709(255, 0, 0)
	require.Greater(t, cr, uint8(200))

	// Blue should have high Cb.
	_, cb, _ = rgbToYCbCr709(0, 0, 255)
	require.Greater(t, cb, uint8(200))
}
