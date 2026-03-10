# Phase 8: PIP & Multi-Layout Compositing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a 4-slot layout engine (PIP, side-by-side, quad) with cut/dissolve/fly-in transitions to the video processing pipeline.

**Architecture:** A `server/layout/` package provides the compositing engine. A single `layoutNode` pipeline node (inserted between upstream-key and compositor) reads cached source frames, scales them, and composites onto the program frame. Layout configuration is atomically swapped — no pipeline rebuild for position/source changes. REST API exposes 10 endpoints. UI extends the Keys tab with a Layout sub-tab.

**Tech Stack:** Go, YUV420 planar compositing, existing Lanczos-3/bilinear scalers, Svelte 5

---

### Task 1: Layout types and even-alignment validation

**Files:**
- Create: `server/layout/types.go`
- Test: `server/layout/types_test.go`

**Step 1: Write the failing test**

Create `server/layout/types_test.go`:

```go
package layout

import (
	"image"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestEvenAlign(t *testing.T) {
	require.Equal(t, 0, EvenAlign(0))
	require.Equal(t, 0, EvenAlign(1))
	require.Equal(t, 2, EvenAlign(2))
	require.Equal(t, 2, EvenAlign(3))
	require.Equal(t, 100, EvenAlign(100))
	require.Equal(t, 100, EvenAlign(101))
}

func TestValidateSlot(t *testing.T) {
	t.Run("valid slot", func(t *testing.T) {
		slot := LayoutSlot{
			SourceKey: "cam1",
			Rect:      image.Rect(100, 100, 420, 280),
		}
		require.NoError(t, ValidateSlot(slot, 1920, 1080))
	})

	t.Run("odd X origin", func(t *testing.T) {
		slot := LayoutSlot{
			SourceKey: "cam1",
			Rect:      image.Rect(101, 100, 421, 280),
		}
		require.Error(t, ValidateSlot(slot, 1920, 1080))
	})

	t.Run("odd Y origin", func(t *testing.T) {
		slot := LayoutSlot{
			SourceKey: "cam1",
			Rect:      image.Rect(100, 101, 420, 281),
		}
		require.Error(t, ValidateSlot(slot, 1920, 1080))
	})

	t.Run("odd width", func(t *testing.T) {
		slot := LayoutSlot{
			SourceKey: "cam1",
			Rect:      image.Rect(100, 100, 421, 280),
		}
		require.Error(t, ValidateSlot(slot, 1920, 1080))
	})

	t.Run("out of bounds", func(t *testing.T) {
		slot := LayoutSlot{
			SourceKey: "cam1",
			Rect:      image.Rect(1800, 1000, 2000, 1200),
		}
		require.Error(t, ValidateSlot(slot, 1920, 1080))
	})

	t.Run("empty source", func(t *testing.T) {
		slot := LayoutSlot{
			SourceKey: "",
			Rect:      image.Rect(100, 100, 420, 280),
		}
		require.Error(t, ValidateSlot(slot, 1920, 1080))
	})
}

func TestValidateLayout(t *testing.T) {
	t.Run("valid layout", func(t *testing.T) {
		l := &Layout{
			Name: "test",
			Slots: []LayoutSlot{
				{SourceKey: "cam1", Rect: image.Rect(0, 0, 480, 270), Enabled: true},
			},
		}
		require.NoError(t, ValidateLayout(l, 1920, 1080))
	})

	t.Run("too many slots", func(t *testing.T) {
		l := &Layout{Name: "test", Slots: make([]LayoutSlot, 5)}
		require.Error(t, ValidateLayout(l, 1920, 1080))
	})
}
```

**Step 2: Run test to verify it fails**

Run: `cd server && go test ./layout/ -run TestEvenAlign -v`
Expected: FAIL — package not found

**Step 3: Implement**

Create `server/layout/types.go`:

```go
package layout

import (
	"fmt"
	"image"
	"time"
)

// MaxSlots is the maximum number of layout slots.
const MaxSlots = 4

// LayoutSlot defines one source's position within a layout.
type LayoutSlot struct {
	SourceKey  string          `json:"sourceKey"`
	Rect       image.Rectangle `json:"rect"`
	ZOrder     int             `json:"zOrder"`
	Border     BorderConfig    `json:"border"`
	Transition SlotTransition  `json:"transition"`
	Enabled    bool            `json:"enabled"`
}

// BorderConfig describes the visual border around a PIP slot.
type BorderConfig struct {
	Width   int  `json:"width"`   // luma pixels, must be even, 0 = no border
	ColorY  byte `json:"colorY"`  // BT.709 limited range
	ColorCb byte `json:"colorCb"`
	ColorCr byte `json:"colorCr"`
}

// SlotTransition configures how a slot animates on/off.
type SlotTransition struct {
	Type     string        `json:"type"` // "cut", "dissolve", "fly"
	Duration time.Duration `json:"duration"`
}

// Layout is the complete multi-source layout configuration.
type Layout struct {
	Name  string       `json:"name"`
	Slots []LayoutSlot `json:"slots"`
}

// EvenAlign rounds down to the nearest even number (YUV420 alignment).
func EvenAlign(v int) int { return v &^ 1 }

// ValidateSlot checks that a slot has valid even-aligned dimensions within frame bounds.
func ValidateSlot(slot LayoutSlot, frameW, frameH int) error {
	if slot.SourceKey == "" {
		return fmt.Errorf("slot source key is empty")
	}
	r := slot.Rect
	if r.Min.X%2 != 0 || r.Min.Y%2 != 0 {
		return fmt.Errorf("slot rect origin (%d,%d) must be even-aligned", r.Min.X, r.Min.Y)
	}
	if r.Dx()%2 != 0 || r.Dy()%2 != 0 {
		return fmt.Errorf("slot rect size (%dx%d) must be even-aligned", r.Dx(), r.Dy())
	}
	if r.Min.X < 0 || r.Min.Y < 0 || r.Max.X > frameW || r.Max.Y > frameH {
		return fmt.Errorf("slot rect %v exceeds frame bounds %dx%d", r, frameW, frameH)
	}
	if r.Dx() <= 0 || r.Dy() <= 0 {
		return fmt.Errorf("slot rect has zero or negative dimensions")
	}
	if slot.Border.Width%2 != 0 {
		return fmt.Errorf("border width %d must be even", slot.Border.Width)
	}
	return nil
}

// ValidateLayout checks all slots in a layout.
func ValidateLayout(l *Layout, frameW, frameH int) error {
	if len(l.Slots) > MaxSlots {
		return fmt.Errorf("layout has %d slots, max is %d", len(l.Slots), MaxSlots)
	}
	for i, slot := range l.Slots {
		if err := ValidateSlot(slot, frameW, frameH); err != nil {
			return fmt.Errorf("slot %d: %w", i, err)
		}
	}
	return nil
}
```

**Step 4: Run test to verify it passes**

Run: `cd server && go test ./layout/ -run 'TestEvenAlign|TestValidateSlot|TestValidateLayout' -v`
Expected: PASS

**Step 5: Commit**

```bash
git add server/layout/types.go server/layout/types_test.go
git commit -m "feat(layout): add Layout types and even-alignment validation"
```

---

### Task 2: Opaque YUV420 compositing and border drawing

**Files:**
- Create: `server/layout/composite.go`
- Test: `server/layout/composite_test.go`

**Step 1: Write the failing test**

Create `server/layout/composite_test.go`:

```go
package layout

import (
	"image"
	"testing"

	"github.com/stretchr/testify/require"
)

// makeYUV420 creates a YUV420 buffer filled with a constant Y value.
func makeYUV420(w, h int, y, cb, cr byte) []byte {
	ySize := w * h
	cbSize := (w / 2) * (h / 2)
	buf := make([]byte, ySize+cbSize*2)
	for i := 0; i < ySize; i++ {
		buf[i] = y
	}
	for i := 0; i < cbSize; i++ {
		buf[ySize+i] = cb
		buf[ySize+cbSize+i] = cr
	}
	return buf
}

func TestComposePIPOpaque(t *testing.T) {
	// 8x8 destination (black), 4x4 source (white) placed at (2,2)
	dst := makeYUV420(8, 8, 16, 128, 128)  // BT.709 black
	src := makeYUV420(4, 4, 235, 128, 128) // BT.709 white
	rect := image.Rect(2, 2, 6, 6)

	ComposePIPOpaque(dst, 8, 8, src, 4, 4, rect)

	// Y plane: pixel (3,3) should be white (235), pixel (0,0) should be black (16)
	require.Equal(t, byte(235), dst[3*8+3], "Y at (3,3) should be white")
	require.Equal(t, byte(16), dst[0], "Y at (0,0) should be black")

	// Cb plane: chroma at (1,1) in half-res = center of PIP
	ySize := 8 * 8
	chromaW := 4 // 8/2
	require.Equal(t, byte(128), dst[ySize+1*chromaW+1], "Cb at chroma (1,1)")
}

func TestComposePIPOpaque_Boundaries(t *testing.T) {
	// Place PIP at top-left corner (0,0)
	dst := makeYUV420(8, 8, 16, 128, 128)
	src := makeYUV420(4, 4, 235, 128, 128)
	rect := image.Rect(0, 0, 4, 4)

	ComposePIPOpaque(dst, 8, 8, src, 4, 4, rect)
	require.Equal(t, byte(235), dst[0], "Y at (0,0) should be white")
	require.Equal(t, byte(16), dst[4], "Y at (4,0) should be black")
}

func TestDrawBorderYUV(t *testing.T) {
	dst := makeYUV420(8, 8, 16, 128, 128)
	rect := image.Rect(2, 2, 6, 6)
	color := [3]byte{235, 128, 128} // white

	DrawBorderYUV(dst, 8, 8, rect, color, 2)

	// Border pixel at (2,1) — top border, 2px thick means rows 0-1
	require.Equal(t, byte(235), dst[0*8+2], "top border Y at (2,0)")
	require.Equal(t, byte(235), dst[1*8+2], "top border Y at (2,1)")
	// Interior (3,3) should still be black
	require.Equal(t, byte(16), dst[3*8+3], "interior should be unchanged")
}
```

**Step 2: Run test to verify it fails**

Run: `cd server && go test ./layout/ -run 'TestComposePIP|TestDrawBorder' -v`
Expected: FAIL — functions not defined

**Step 3: Implement**

Create `server/layout/composite.go`:

```go
package layout

import "image"

// ComposePIPOpaque copies a scaled PIP source YUV420 buffer into a sub-region
// of the destination frame. All three planes are copied at their native resolutions.
// rect.Min must be even-aligned for YUV420 correctness.
func ComposePIPOpaque(dst []byte, dstW, dstH int, src []byte, srcW, srcH int, rect image.Rectangle) {
	// Y plane: row-by-row copy
	for y := 0; y < srcH; y++ {
		dstOff := (rect.Min.Y+y)*dstW + rect.Min.X
		srcOff := y * srcW
		copy(dst[dstOff:dstOff+srcW], src[srcOff:srcOff+srcW])
	}

	// Chroma planes
	dstYSize := dstW * dstH
	srcYSize := srcW * srcH
	chromaDstW := dstW / 2
	chromaSrcW := srcW / 2
	chromaSrcH := srcH / 2
	chromaX := rect.Min.X / 2
	chromaY := rect.Min.Y / 2

	for plane := 0; plane < 2; plane++ {
		dstBase := dstYSize + plane*(chromaDstW*(dstH/2))
		srcBase := srcYSize + plane*(chromaSrcW*chromaSrcH)
		for y := 0; y < chromaSrcH; y++ {
			dstOff := dstBase + (chromaY+y)*chromaDstW + chromaX
			srcOff := srcBase + y*chromaSrcW
			copy(dst[dstOff:dstOff+chromaSrcW], src[srcOff:srcOff+chromaSrcW])
		}
	}
}

// DrawBorderYUV draws a solid border around a rectangle in the YUV420 frame.
// borderColor is {Y, Cb, Cr}. thickness is in luma pixels.
// The border is drawn OUTSIDE the rectangle (expanding outward).
func DrawBorderYUV(dst []byte, dstW, dstH int, rect image.Rectangle, borderColor [3]byte, thickness int) {
	if thickness <= 0 {
		return
	}
	ySize := dstW * dstH
	chromaW := dstW / 2
	chromaH := dstH / 2

	// Expand rect outward by thickness
	outer := image.Rect(
		max(rect.Min.X-thickness, 0),
		max(rect.Min.Y-thickness, 0),
		min(rect.Max.X+thickness, dstW),
		min(rect.Max.Y+thickness, dstH),
	)

	// Fill Y plane border pixels (outer minus inner)
	for y := outer.Min.Y; y < outer.Max.Y; y++ {
		for x := outer.Min.X; x < outer.Max.X; x++ {
			if y >= rect.Min.Y && y < rect.Max.Y && x >= rect.Min.X && x < rect.Max.X {
				continue // skip interior
			}
			dst[y*dstW+x] = borderColor[0]
		}
	}

	// Fill chroma planes at half resolution
	chromaOuter := image.Rect(outer.Min.X/2, outer.Min.Y/2, outer.Max.X/2, outer.Max.Y/2)
	chromaInner := image.Rect(rect.Min.X/2, rect.Min.Y/2, rect.Max.X/2, rect.Max.Y/2)

	for y := chromaOuter.Min.Y; y < chromaOuter.Max.Y; y++ {
		for x := chromaOuter.Min.X; x < chromaOuter.Max.X; x++ {
			if y >= chromaInner.Min.Y && y < chromaInner.Max.Y && x >= chromaInner.Min.X && x < chromaInner.Max.X {
				continue
			}
			off := y*chromaW + x
			if off < chromaW*chromaH {
				dst[ySize+off] = borderColor[1]                   // Cb
				dst[ySize+chromaW*chromaH+off] = borderColor[2]   // Cr
			}
		}
	}
}

// BlendRegion alpha-blends src onto dst for a rectangular region.
// alpha is 0.0 (fully transparent) to 1.0 (fully opaque).
// Used for dissolve transitions on PIP slots.
func BlendRegion(dst []byte, dstW, dstH int, src []byte, srcW, srcH int, rect image.Rectangle, alpha float64) {
	if alpha <= 0 {
		return
	}
	if alpha >= 1.0 {
		ComposePIPOpaque(dst, dstW, dstH, src, srcW, srcH, rect)
		return
	}

	a := uint16(alpha * 256)
	inv := 256 - a

	// Y plane
	for y := 0; y < srcH; y++ {
		for x := 0; x < srcW; x++ {
			di := (rect.Min.Y+y)*dstW + rect.Min.X + x
			si := y*srcW + x
			dst[di] = byte((uint16(dst[di])*inv + uint16(src[si])*a) >> 8)
		}
	}

	// Chroma planes
	dstYSize := dstW * dstH
	srcYSize := srcW * srcH
	chromaDstW := dstW / 2
	chromaSrcW := srcW / 2
	chromaSrcH := srcH / 2
	chromaX := rect.Min.X / 2
	chromaY := rect.Min.Y / 2

	for plane := 0; plane < 2; plane++ {
		dstBase := dstYSize + plane*(chromaDstW*(dstH/2))
		srcBase := srcYSize + plane*(chromaSrcW*chromaSrcH)
		for y := 0; y < chromaSrcH; y++ {
			for x := 0; x < chromaSrcW; x++ {
				di := dstBase + (chromaY+y)*chromaDstW + chromaX + x
				si := srcBase + y*chromaSrcW + x
				dst[di] = byte((uint16(dst[di])*inv + uint16(src[si])*a) >> 8)
			}
		}
	}
}
```

**Step 4: Run test to verify it passes**

Run: `cd server && go test ./layout/ -run 'TestComposePIP|TestDrawBorder' -v`
Expected: PASS

**Step 5: Run full layout tests**

Run: `cd server && go test ./layout/ -race -count=1`
Expected: All tests pass

**Step 6: Commit**

```bash
git add server/layout/composite.go server/layout/composite_test.go
git commit -m "feat(layout): add YUV420 opaque compositing, border drawing, and alpha blend"
```

---

### Task 3: Layout presets

**Files:**
- Create: `server/layout/presets.go`
- Test: `server/layout/presets_test.go`

**Step 1: Write the failing test**

Create `server/layout/presets_test.go`:

```go
package layout

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestPIPPreset(t *testing.T) {
	tests := []struct {
		position string
		expectX  int // expected Min.X
		expectY  int // expected Min.Y
	}{
		{"top-right", 1402, 22},
		{"top-left", 38, 22},
		{"bottom-right", 1402, 788},
		{"bottom-left", 38, 788},
	}

	for _, tt := range tests {
		t.Run(tt.position, func(t *testing.T) {
			l := PIPPreset(1920, 1080, "cam1", tt.position, 0.25)
			require.Len(t, l.Slots, 1)
			slot := l.Slots[0]
			require.Equal(t, "cam1", slot.SourceKey)
			require.Equal(t, 480, slot.Rect.Dx(), "PIP width = 25% of 1920")
			require.Equal(t, 270, slot.Rect.Dy(), "PIP height maintains 16:9")
			// Even alignment
			require.Equal(t, 0, slot.Rect.Min.X%2, "X must be even")
			require.Equal(t, 0, slot.Rect.Min.Y%2, "Y must be even")
			require.NoError(t, ValidateSlot(slot, 1920, 1080))
		})
	}
}

func TestSideBySidePreset(t *testing.T) {
	l := SideBySidePreset(1920, 1080, "cam1", "cam2", 4)
	require.Len(t, l.Slots, 2)
	// Both slots should cover the full height
	require.Equal(t, 1080, l.Slots[0].Rect.Dy())
	require.Equal(t, 1080, l.Slots[1].Rect.Dy())
	// Combined width should be ~1920 minus gap
	totalW := l.Slots[0].Rect.Dx() + l.Slots[1].Rect.Dx() + 4
	require.InDelta(t, 1920, totalW, 2) // allow rounding
	for i, slot := range l.Slots {
		require.NoError(t, ValidateSlot(slot, 1920, 1080), "slot %d", i)
	}
}

func TestQuadPreset(t *testing.T) {
	sources := [4]string{"cam1", "cam2", "cam3", "cam4"}
	l := QuadPreset(1920, 1080, sources, 4)
	require.Len(t, l.Slots, 4)
	for i, slot := range l.Slots {
		require.NoError(t, ValidateSlot(slot, 1920, 1080), "slot %d", i)
		require.Equal(t, sources[i], slot.SourceKey)
	}
}

func TestBuiltinPresets(t *testing.T) {
	presets := BuiltinPresets()
	require.GreaterOrEqual(t, len(presets), 7)
	for _, name := range []string{"full", "pip-top-right", "pip-top-left", "pip-bottom-right", "pip-bottom-left", "side-by-side", "quad"} {
		found := false
		for _, p := range presets {
			if p == name {
				found = true
				break
			}
		}
		require.True(t, found, "preset %q should exist", name)
	}
}
```

**Step 2: Run test to verify it fails**

Run: `cd server && go test ./layout/ -run 'TestPIPPreset|TestSideBySide|TestQuad|TestBuiltinPresets' -v`
Expected: FAIL — functions not defined

**Step 3: Implement**

Create `server/layout/presets.go`:

```go
package layout

import "image"

// PIPPreset creates a standard PIP layout with a secondary source in a corner.
// size is the PIP width as a fraction of frame width (e.g., 0.25 = quarter width).
func PIPPreset(frameW, frameH int, source, position string, size float64) *Layout {
	pipW := EvenAlign(int(float64(frameW) * size))
	pipH := EvenAlign(pipW * frameH / frameW)
	margin := EvenAlign(int(float64(frameW) * 0.02))

	var rect image.Rectangle
	switch position {
	case "top-left":
		rect = image.Rect(margin, margin, margin+pipW, margin+pipH)
	case "top-right":
		rect = image.Rect(frameW-margin-pipW, margin, frameW-margin, margin+pipH)
	case "bottom-left":
		rect = image.Rect(margin, frameH-margin-pipH, margin+pipW, frameH-margin)
	case "bottom-right":
		rect = image.Rect(frameW-margin-pipW, frameH-margin-pipH, frameW-margin, frameH-margin)
	default:
		rect = image.Rect(frameW-margin-pipW, margin, frameW-margin, margin+pipH) // default top-right
	}

	return &Layout{
		Name: "pip-" + position,
		Slots: []LayoutSlot{{
			SourceKey: source,
			Rect:      rect,
			ZOrder:    1,
			Enabled:   true,
			Border:    BorderConfig{Width: 2, ColorY: 235, ColorCb: 128, ColorCr: 128},
			Transition: SlotTransition{Type: "cut"},
		}},
	}
}

// SideBySidePreset creates a 50/50 split layout.
func SideBySidePreset(frameW, frameH int, leftSource, rightSource string, gap int) *Layout {
	gap = EvenAlign(gap)
	leftW := EvenAlign((frameW - gap) / 2)
	rightW := EvenAlign(frameW - gap - leftW)

	return &Layout{
		Name: "side-by-side",
		Slots: []LayoutSlot{
			{SourceKey: leftSource, Rect: image.Rect(0, 0, leftW, frameH), ZOrder: 0, Enabled: true},
			{SourceKey: rightSource, Rect: image.Rect(leftW+gap, 0, leftW+gap+rightW, frameH), ZOrder: 0, Enabled: true},
		},
	}
}

// QuadPreset creates a 2x2 grid layout.
func QuadPreset(frameW, frameH int, sources [4]string, gap int) *Layout {
	gap = EvenAlign(gap)
	slotW := EvenAlign((frameW - gap) / 2)
	slotH := EvenAlign((frameH - gap) / 2)

	return &Layout{
		Name: "quad",
		Slots: []LayoutSlot{
			{SourceKey: sources[0], Rect: image.Rect(0, 0, slotW, slotH), ZOrder: 0, Enabled: true},
			{SourceKey: sources[1], Rect: image.Rect(slotW+gap, 0, slotW+gap+slotW, slotH), ZOrder: 0, Enabled: true},
			{SourceKey: sources[2], Rect: image.Rect(0, slotH+gap, slotW, slotH+gap+slotH), ZOrder: 0, Enabled: true},
			{SourceKey: sources[3], Rect: image.Rect(slotW+gap, slotH+gap, slotW+gap+slotW, slotH+gap+slotH), ZOrder: 0, Enabled: true},
		},
	}
}

// BuiltinPresets returns the names of all built-in layout presets.
func BuiltinPresets() []string {
	return []string{
		"full",
		"pip-top-right",
		"pip-top-left",
		"pip-bottom-right",
		"pip-bottom-left",
		"side-by-side",
		"quad",
	}
}
```

**Step 4: Run test to verify it passes**

Run: `cd server && go test ./layout/ -race -count=1`
Expected: All tests pass

**Step 5: Commit**

```bash
git add server/layout/presets.go server/layout/presets_test.go
git commit -m "feat(layout): add PIP, side-by-side, and quad preset factories"
```

---

### Task 4: Layout compositor core

**Files:**
- Create: `server/layout/compositor.go`
- Test: `server/layout/compositor_test.go`

**Step 1: Write the failing test**

Create `server/layout/compositor_test.go`:

```go
package layout

import (
	"image"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestCompositor_IngestAndNeedsSource(t *testing.T) {
	c := NewCompositor(1920, 1080)

	l := &Layout{
		Name: "pip",
		Slots: []LayoutSlot{
			{SourceKey: "cam2", Rect: image.Rect(1440, 0, 1920, 270), Enabled: true},
		},
	}
	c.SetLayout(l)

	require.True(t, c.NeedsSource("cam2"))
	require.False(t, c.NeedsSource("cam3"))

	// Ingest a frame
	yuv := makeYUV420(1920, 1080, 235, 128, 128)
	c.IngestSourceFrame("cam2", yuv, 1920, 1080)

	require.True(t, c.HasFrame("cam2"))
}

func TestCompositor_ProcessFrame(t *testing.T) {
	c := NewCompositor(8, 8)

	// Layout: 4x4 PIP at (4,0)
	l := &Layout{
		Name: "pip",
		Slots: []LayoutSlot{
			{SourceKey: "cam2", Rect: image.Rect(4, 0, 8, 4), Enabled: true},
		},
	}
	c.SetLayout(l)

	// Ingest white source
	src := makeYUV420(4, 4, 235, 128, 128)
	c.IngestSourceFrame("cam2", src, 4, 4)

	// Process on black background
	bg := makeYUV420(8, 8, 16, 128, 128)
	result := c.ProcessFrame(bg, 8, 8)

	// PIP region (4,0) should be white
	require.Equal(t, byte(235), result[0*8+4], "PIP at (4,0) should be white Y")
	// Background (0,0) should be black
	require.Equal(t, byte(16), result[0], "background should be black Y")
}

func TestCompositor_InactiveWhenEmpty(t *testing.T) {
	c := NewCompositor(1920, 1080)
	require.False(t, c.Active())

	l := &Layout{Name: "pip", Slots: []LayoutSlot{
		{SourceKey: "cam2", Rect: image.Rect(0, 0, 480, 270), Enabled: true},
	}}
	c.SetLayout(l)
	require.True(t, c.Active())

	c.SetLayout(nil)
	require.False(t, c.Active())
}

func TestCompositor_NilSourceRendersGray(t *testing.T) {
	c := NewCompositor(8, 8)

	l := &Layout{
		Name: "pip",
		Slots: []LayoutSlot{
			{SourceKey: "missing", Rect: image.Rect(4, 0, 8, 4), Enabled: true},
		},
	}
	c.SetLayout(l)

	// No frame ingested for "missing" — should render gray
	bg := makeYUV420(8, 8, 16, 128, 128)
	result := c.ProcessFrame(bg, 8, 8)

	// PIP region should be gray (Y=128)
	require.Equal(t, byte(128), result[0*8+4], "missing source should render gray")
}

func TestCompositor_DisabledSlotSkipped(t *testing.T) {
	c := NewCompositor(8, 8)

	l := &Layout{
		Name: "pip",
		Slots: []LayoutSlot{
			{SourceKey: "cam2", Rect: image.Rect(4, 0, 8, 4), Enabled: false},
		},
	}
	c.SetLayout(l)

	src := makeYUV420(4, 4, 235, 128, 128)
	c.IngestSourceFrame("cam2", src, 4, 4)

	bg := makeYUV420(8, 8, 16, 128, 128)
	result := c.ProcessFrame(bg, 8, 8)

	// Disabled slot should not be composited
	require.Equal(t, byte(16), result[0*8+4], "disabled slot should not appear")
}
```

**Step 2: Run test to verify it fails**

Run: `cd server && go test ./layout/ -run 'TestCompositor' -v`
Expected: FAIL — `NewCompositor` not defined

**Step 3: Implement**

Create `server/layout/compositor.go`:

```go
package layout

import (
	"image"
	"sort"
	"sync"
	"sync/atomic"
	"time"

	"github.com/zsiec/switchframe/server/transition"
)

// fillEntry holds a cached source frame.
type fillEntry struct {
	yuv           []byte
	width, height int
}

// Compositor manages the layout composition pipeline.
// Frame delivery via IngestSourceFrame (called from handleRawVideoFrame).
// Compositing via ProcessFrame (called from pipeline node).
type Compositor struct {
	mu     sync.Mutex
	layout atomic.Pointer[Layout]

	// Per-source cached frames
	fills map[string]*fillEntry

	// Per-slot pre-allocated scale buffers
	scaleBufs [][]byte

	// Per-slot gray "no signal" frames
	grayBufs [][]byte

	// Active animations
	animations []*Animation

	// Frame dimensions
	frameW, frameH int
}

// NewCompositor creates a new layout compositor.
func NewCompositor(frameW, frameH int) *Compositor {
	return &Compositor{
		fills:  make(map[string]*fillEntry),
		frameW: frameW,
		frameH: frameH,
	}
}

// SetLayout atomically sets the current layout. nil clears the layout.
func (c *Compositor) SetLayout(l *Layout) {
	c.layout.Store(l)
	if l != nil {
		c.mu.Lock()
		c.allocateBuffers(l)
		c.mu.Unlock()
	}
}

// allocateBuffers pre-allocates scale and gray buffers for each slot.
func (c *Compositor) allocateBuffers(l *Layout) {
	c.scaleBufs = make([][]byte, len(l.Slots))
	c.grayBufs = make([][]byte, len(l.Slots))
	for i, slot := range l.Slots {
		w := slot.Rect.Dx()
		h := slot.Rect.Dy()
		size := w * h * 3 / 2
		c.scaleBufs[i] = make([]byte, size)
		c.grayBufs[i] = makeGrayFrame(w, h)
	}
}

// makeGrayFrame creates a "no signal" YUV420 frame (Y=128, Cb=128, Cr=128).
func makeGrayFrame(w, h int) []byte {
	ySize := w * h
	cbSize := (w / 2) * (h / 2)
	buf := make([]byte, ySize+cbSize*2)
	for i := 0; i < ySize; i++ {
		buf[i] = 128
	}
	for i := 0; i < cbSize*2; i++ {
		buf[ySize+i] = 128
	}
	return buf
}

// Active returns true if a layout is configured with at least one enabled slot.
func (c *Compositor) Active() bool {
	l := c.layout.Load()
	if l == nil {
		return false
	}
	for _, slot := range l.Slots {
		if slot.Enabled {
			return true
		}
	}
	return false
}

// NeedsSource returns true if the source is assigned to any slot in the current layout.
func (c *Compositor) NeedsSource(sourceKey string) bool {
	l := c.layout.Load()
	if l == nil {
		return false
	}
	for _, slot := range l.Slots {
		if slot.SourceKey == sourceKey {
			return true
		}
	}
	return false
}

// HasFrame returns true if a cached frame exists for the source.
func (c *Compositor) HasFrame(sourceKey string) bool {
	c.mu.Lock()
	defer c.mu.Unlock()
	_, ok := c.fills[sourceKey]
	return ok
}

// IngestSourceFrame caches a decoded YUV frame for a source.
func (c *Compositor) IngestSourceFrame(sourceKey string, yuv []byte, width, height int) {
	c.mu.Lock()
	defer c.mu.Unlock()

	yuvSize := width * height * 3 / 2
	if len(yuv) < yuvSize {
		return
	}

	entry := c.fills[sourceKey]
	if entry == nil || len(entry.yuv) != yuvSize {
		entry = &fillEntry{yuv: make([]byte, yuvSize)}
	}
	copy(entry.yuv, yuv[:yuvSize])
	entry.width = width
	entry.height = height
	c.fills[sourceKey] = entry
}

// ProcessFrame composites all enabled layout slots onto the frame.
// Called from the pipeline goroutine (single-threaded).
func (c *Compositor) ProcessFrame(yuv []byte, width, height int) []byte {
	l := c.layout.Load()
	if l == nil {
		return yuv
	}

	c.mu.Lock()
	defer c.mu.Unlock()

	// Process animations
	c.tickAnimations()

	// Sort slots by ZOrder
	sorted := make([]int, 0, len(l.Slots))
	for i := range l.Slots {
		sorted = append(sorted, i)
	}
	sort.Slice(sorted, func(a, b int) bool {
		return l.Slots[sorted[a]].ZOrder < l.Slots[sorted[b]].ZOrder
	})

	// Composite each slot
	for _, idx := range sorted {
		slot := l.Slots[idx]
		if !slot.Enabled && !c.isAnimating(idx) {
			continue
		}

		// Get the effective rect (may be modified by animation)
		rect, alpha := c.effectiveRectAndAlpha(idx, slot)
		if rect.Dx() <= 0 || rect.Dy() <= 0 {
			continue
		}

		slotW := rect.Dx()
		slotH := rect.Dy()

		// Get source frame or gray fallback
		var srcYUV []byte
		var srcW, srcH int
		if entry, ok := c.fills[slot.SourceKey]; ok {
			srcYUV = entry.yuv
			srcW = entry.width
			srcH = entry.height
		} else if idx < len(c.grayBufs) {
			srcYUV = c.grayBufs[idx]
			srcW = slot.Rect.Dx()
			srcH = slot.Rect.Dy()
		} else {
			continue
		}

		// Scale source to slot dimensions
		var scaled []byte
		if srcW == slotW && srcH == slotH {
			scaled = srcYUV
		} else {
			if idx >= len(c.scaleBufs) || len(c.scaleBufs[idx]) < slotW*slotH*3/2 {
				c.scaleBufs = append(c.scaleBufs, make([]byte, slotW*slotH*3/2))
			}
			buf := c.scaleBufs[idx][:slotW*slotH*3/2]
			quality := c.selectScaleQuality(srcW, srcH, slotW, slotH, width, height)
			transition.ScaleYUV420WithQuality(srcYUV, srcW, srcH, buf, slotW, slotH, quality)
			scaled = buf
		}

		// Composite onto frame
		if alpha < 1.0 {
			BlendRegion(yuv, width, height, scaled, slotW, slotH, rect, alpha)
		} else {
			ComposePIPOpaque(yuv, width, height, scaled, slotW, slotH, rect)
		}

		// Draw border
		if slot.Border.Width > 0 {
			color := [3]byte{slot.Border.ColorY, slot.Border.ColorCb, slot.Border.ColorCr}
			DrawBorderYUV(yuv, width, height, rect, color, slot.Border.Width)
		}
	}

	return yuv
}

// selectScaleQuality chooses Lanczos for small PIPs, bilinear for large.
func (c *Compositor) selectScaleQuality(srcW, srcH, dstW, dstH, frameW, frameH int) transition.ScaleQuality {
	pipArea := dstW * dstH
	frameArea := frameW * frameH
	if pipArea*4 <= frameArea { // PIP is <=25% of frame area
		return transition.ScaleQualityHigh
	}
	return transition.ScaleQualityFast
}

// Latency returns the estimated processing time for the current layout.
func (c *Compositor) Latency() time.Duration {
	l := c.layout.Load()
	if l == nil {
		return 0
	}
	// ~1ms per small PIP, ~2ms per large slot
	count := 0
	for _, slot := range l.Slots {
		if slot.Enabled {
			count++
		}
	}
	return time.Duration(count) * time.Millisecond
}

// effectiveRectAndAlpha returns the current rect and alpha for a slot,
// accounting for any active animation.
func (c *Compositor) effectiveRectAndAlpha(slotIdx int, slot LayoutSlot) (image.Rectangle, float64) {
	for _, anim := range c.animations {
		if anim.SlotIndex == slotIdx {
			t := anim.Progress()
			if t >= 1.0 {
				continue // completed, will be cleaned up
			}
			rect := anim.InterpolateRect(t)
			alpha := anim.InterpolateAlpha(t)
			return rect, alpha
		}
	}
	if slot.Enabled {
		return slot.Rect, 1.0
	}
	return image.Rectangle{}, 0.0
}

// isAnimating returns true if a slot has an active animation.
func (c *Compositor) isAnimating(slotIdx int) bool {
	for _, anim := range c.animations {
		if anim.SlotIndex == slotIdx && anim.Progress() < 1.0 {
			return true
		}
	}
	return false
}

// tickAnimations removes completed animations and runs callbacks.
func (c *Compositor) tickAnimations() {
	remaining := c.animations[:0]
	for _, anim := range c.animations {
		if anim.Progress() >= 1.0 {
			if anim.OnComplete != nil {
				anim.OnComplete()
			}
			continue
		}
		remaining = append(remaining, anim)
	}
	c.animations = remaining
}

// UpdateFormat updates the frame dimensions (called on pipeline format change).
func (c *Compositor) UpdateFormat(frameW, frameH int) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.frameW = frameW
	c.frameH = frameH
	if l := c.layout.Load(); l != nil {
		c.allocateBuffers(l)
	}
}
```

**Step 4: Run test to verify it passes**

Run: `cd server && go test ./layout/ -run TestCompositor -v`
Expected: PASS (some tests will fail because Animation type doesn't exist yet — we need a stub)

Create a minimal `server/layout/animation.go` stub:

```go
package layout

import (
	"image"
	"time"
)

// Animation represents a slot transition animation.
type Animation struct {
	SlotIndex  int
	StartTime  time.Time
	Duration   time.Duration
	FromRect   image.Rectangle
	ToRect     image.Rectangle
	FromAlpha  float64
	ToAlpha    float64
	Easing     func(float64) float64
	OnComplete func()
}

// Progress returns the animation progress [0, 1].
func (a *Animation) Progress() float64 {
	elapsed := time.Since(a.StartTime)
	t := float64(elapsed) / float64(a.Duration)
	if t >= 1.0 {
		return 1.0
	}
	if t <= 0 {
		return 0
	}
	if a.Easing != nil {
		return a.Easing(t)
	}
	return t
}

// InterpolateRect returns the interpolated rectangle at progress t.
func (a *Animation) InterpolateRect(t float64) image.Rectangle {
	return image.Rect(
		EvenAlign(lerp(a.FromRect.Min.X, a.ToRect.Min.X, t)),
		EvenAlign(lerp(a.FromRect.Min.Y, a.ToRect.Min.Y, t)),
		EvenAlign(lerp(a.FromRect.Max.X, a.ToRect.Max.X, t)),
		EvenAlign(lerp(a.FromRect.Max.Y, a.ToRect.Max.Y, t)),
	)
}

// InterpolateAlpha returns the interpolated alpha at progress t.
func (a *Animation) InterpolateAlpha(t float64) float64 {
	return a.FromAlpha + (a.ToAlpha-a.FromAlpha)*t
}

func lerp(a, b int, t float64) int {
	return a + int(float64(b-a)*t+0.5)
}
```

**Step 5: Run full layout tests**

Run: `cd server && go test ./layout/ -race -count=1`
Expected: All tests pass

**Step 6: Commit**

```bash
git add server/layout/compositor.go server/layout/compositor_test.go server/layout/animation.go
git commit -m "feat(layout): add Compositor with frame cache, scaling, and gray fallback"
```

---

### Task 5: PIP transition animations

**Files:**
- Modify: `server/layout/animation.go` (already created as stub in Task 4)
- Test: `server/layout/animation_test.go`
- Modify: `server/layout/compositor.go` (add SlotOn/SlotOff methods)

**Step 1: Write the failing test**

Create `server/layout/animation_test.go`:

```go
package layout

import (
	"image"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestAnimation_Progress(t *testing.T) {
	a := &Animation{
		StartTime: time.Now().Add(-500 * time.Millisecond),
		Duration:  time.Second,
	}
	p := a.Progress()
	require.InDelta(t, 0.5, p, 0.1)
}

func TestAnimation_ProgressComplete(t *testing.T) {
	a := &Animation{
		StartTime: time.Now().Add(-2 * time.Second),
		Duration:  time.Second,
	}
	require.Equal(t, 1.0, a.Progress())
}

func TestAnimation_InterpolateRect(t *testing.T) {
	a := &Animation{
		FromRect: image.Rect(0, 0, 100, 100),
		ToRect:   image.Rect(200, 200, 400, 400),
	}
	r := a.InterpolateRect(0.5)
	require.Equal(t, 100, r.Min.X)
	require.Equal(t, 100, r.Min.Y)
	// Even-aligned
	require.Equal(t, 0, r.Min.X%2)
	require.Equal(t, 0, r.Min.Y%2)
}

func TestAnimation_InterpolateAlpha(t *testing.T) {
	a := &Animation{FromAlpha: 0.0, ToAlpha: 1.0}
	require.InDelta(t, 0.5, a.InterpolateAlpha(0.5), 0.001)
}

func TestFlyInOrigin(t *testing.T) {
	target := image.Rect(1440, 20, 1920, 290)
	origin := FlyInOrigin(target, 1920, 1080)
	// Should fly in from the right edge
	require.GreaterOrEqual(t, origin.Min.X, 1920, "should start off-screen right")
}

func TestCompositor_SlotOn(t *testing.T) {
	c := NewCompositor(8, 8)
	l := &Layout{
		Name: "pip",
		Slots: []LayoutSlot{
			{SourceKey: "cam2", Rect: image.Rect(4, 0, 8, 4), Enabled: false,
				Transition: SlotTransition{Type: "cut"}},
		},
	}
	c.SetLayout(l)

	c.SlotOn(0)
	updated := c.layout.Load()
	require.True(t, updated.Slots[0].Enabled)
}

func TestCompositor_SlotOff(t *testing.T) {
	c := NewCompositor(8, 8)
	l := &Layout{
		Name: "pip",
		Slots: []LayoutSlot{
			{SourceKey: "cam2", Rect: image.Rect(4, 0, 8, 4), Enabled: true,
				Transition: SlotTransition{Type: "cut"}},
		},
	}
	c.SetLayout(l)

	c.SlotOff(0)
	updated := c.layout.Load()
	require.False(t, updated.Slots[0].Enabled)
}
```

**Step 2: Run test to verify it fails**

Run: `cd server && go test ./layout/ -run 'TestAnimation|TestFlyIn|TestCompositor_Slot' -v`
Expected: FAIL — `FlyInOrigin`, `SlotOn`, `SlotOff` not defined

**Step 3: Implement**

Add to `server/layout/animation.go`:

```go
// FlyInOrigin computes the off-screen starting position for a fly-in animation.
// The PIP flies in from the nearest frame edge.
func FlyInOrigin(target image.Rectangle, frameW, frameH int) image.Rectangle {
	cx := (target.Min.X + target.Max.X) / 2
	cy := (target.Min.Y + target.Max.Y) / 2
	w := target.Dx()
	h := target.Dy()

	// Find nearest edge
	distLeft := cx
	distRight := frameW - cx
	distTop := cy
	distBottom := frameH - cy

	minDist := distLeft
	dx, dy := -(cx + w), 0
	if distRight < minDist {
		minDist = distRight
		dx, dy = frameW-target.Min.X, 0
	}
	if distTop < minDist {
		minDist = distTop
		dx, dy = 0, -(cy + h)
	}
	if distBottom < minDist {
		dx, dy = 0, frameH-target.Min.Y
	}

	return image.Rect(
		EvenAlign(target.Min.X+dx),
		EvenAlign(target.Min.Y+dy),
		EvenAlign(target.Max.X+dx),
		EvenAlign(target.Max.Y+dy),
	)
}
```

Add `SlotOn` and `SlotOff` methods to `server/layout/compositor.go`:

```go
// SlotOn brings a slot on-air with its configured transition.
func (c *Compositor) SlotOn(slotIdx int) {
	c.mu.Lock()
	defer c.mu.Unlock()

	l := c.layout.Load()
	if l == nil || slotIdx >= len(l.Slots) {
		return
	}

	// Clone layout and enable the slot
	updated := c.cloneLayout(l)
	slot := &updated.Slots[slotIdx]
	slot.Enabled = true
	c.layout.Store(updated)

	switch slot.Transition.Type {
	case "dissolve":
		c.animations = append(c.animations, &Animation{
			SlotIndex: slotIdx,
			StartTime: time.Now(),
			Duration:  slot.Transition.Duration,
			FromRect:  slot.Rect,
			ToRect:    slot.Rect,
			FromAlpha: 0.0,
			ToAlpha:   1.0,
		})
	case "fly":
		origin := FlyInOrigin(slot.Rect, c.frameW, c.frameH)
		c.animations = append(c.animations, &Animation{
			SlotIndex: slotIdx,
			StartTime: time.Now(),
			Duration:  slot.Transition.Duration,
			FromRect:  origin,
			ToRect:    slot.Rect,
			FromAlpha: 1.0,
			ToAlpha:   1.0,
		})
	}
	// "cut" = no animation, slot is just enabled
}

// SlotOff takes a slot off-air with its configured transition.
func (c *Compositor) SlotOff(slotIdx int) {
	c.mu.Lock()
	defer c.mu.Unlock()

	l := c.layout.Load()
	if l == nil || slotIdx >= len(l.Slots) {
		return
	}

	slot := l.Slots[slotIdx]

	switch slot.Transition.Type {
	case "dissolve":
		c.animations = append(c.animations, &Animation{
			SlotIndex: slotIdx,
			StartTime: time.Now(),
			Duration:  slot.Transition.Duration,
			FromRect:  slot.Rect,
			ToRect:    slot.Rect,
			FromAlpha: 1.0,
			ToAlpha:   0.0,
			OnComplete: func() {
				c.mu.Lock()
				defer c.mu.Unlock()
				if cur := c.layout.Load(); cur != nil {
					up := c.cloneLayout(cur)
					if slotIdx < len(up.Slots) {
						up.Slots[slotIdx].Enabled = false
					}
					c.layout.Store(up)
				}
			},
		})
	case "fly":
		dest := FlyInOrigin(slot.Rect, c.frameW, c.frameH)
		c.animations = append(c.animations, &Animation{
			SlotIndex: slotIdx,
			StartTime: time.Now(),
			Duration:  slot.Transition.Duration,
			FromRect:  slot.Rect,
			ToRect:    dest,
			FromAlpha: 1.0,
			ToAlpha:   1.0,
			OnComplete: func() {
				c.mu.Lock()
				defer c.mu.Unlock()
				if cur := c.layout.Load(); cur != nil {
					up := c.cloneLayout(cur)
					if slotIdx < len(up.Slots) {
						up.Slots[slotIdx].Enabled = false
					}
					c.layout.Store(up)
				}
			},
		})
	default: // "cut"
		updated := c.cloneLayout(l)
		updated.Slots[slotIdx].Enabled = false
		c.layout.Store(updated)
	}
}

// cloneLayout creates a deep copy of a Layout.
func (c *Compositor) cloneLayout(l *Layout) *Layout {
	cp := &Layout{Name: l.Name, Slots: make([]LayoutSlot, len(l.Slots))}
	copy(cp.Slots, l.Slots)
	return cp
}
```

**Step 4: Run test to verify it passes**

Run: `cd server && go test ./layout/ -race -count=1`
Expected: All tests pass

**Step 5: Commit**

```bash
git add server/layout/animation.go server/layout/animation_test.go server/layout/compositor.go
git commit -m "feat(layout): add PIP transitions (cut, dissolve, fly-in) with slot on/off"
```

---

### Task 6: Layout pipeline node and switcher wiring

**Files:**
- Create: `server/switcher/node_layout.go`
- Modify: `server/switcher/switcher.go:230` (add layoutCompositor field)
- Modify: `server/switcher/switcher.go:553` (add to buildNodeList)
- Modify: `server/switcher/switcher.go:2313` (add IngestSourceFrame call)
- Test: `server/switcher/pipeline_loop_test.go`

**Step 1: Write the failing test**

Add to `server/switcher/pipeline_loop_test.go`:

```go
func TestLayoutNode_ActiveAndProcess(t *testing.T) {
	lc := layout.NewCompositor(4, 4)
	node := &layoutNode{compositor: lc}

	// Initially inactive
	require.False(t, node.Active())

	// Set a layout with an enabled slot
	l := &layout.Layout{
		Name: "pip",
		Slots: []layout.LayoutSlot{
			{SourceKey: "cam2", Rect: image.Rect(2, 0, 4, 2), Enabled: true},
		},
	}
	lc.SetLayout(l)
	require.True(t, node.Active())

	// Ingest a white source frame at the slot's exact dimensions (2x2)
	src := make([]byte, 2*2*3/2) // 2x2 YUV420
	for i := 0; i < 2*2; i++ {
		src[i] = 235 // white Y
	}
	for i := 2 * 2; i < len(src); i++ {
		src[i] = 128 // neutral chroma
	}
	lc.IngestSourceFrame("cam2", src, 2, 2)

	// Process a black background
	pf := &ProcessingFrame{
		YUV:   make([]byte, 4*4*3/2),
		Width: 4, Height: 4,
	}
	for i := 0; i < 4*4; i++ {
		pf.YUV[i] = 16 // black Y
	}

	result := node.Process(nil, pf)
	require.Equal(t, byte(235), result.YUV[0*4+2], "PIP at (2,0) should be white")
	require.Equal(t, byte(16), result.YUV[0*4+0], "background should be black")
}
```

**Step 2: Run test to verify it fails**

Run: `cd server && go test ./switcher/ -run TestLayoutNode -v`
Expected: FAIL — `layoutNode` not defined

**Step 3: Implement**

Create `server/switcher/node_layout.go`:

```go
package switcher

import (
	"time"

	"github.com/zsiec/switchframe/server/layout"
)

// Compile-time interface check.
var _ PipelineNode = (*layoutNode)(nil)

// layoutNode composites PIP/split-screen/quad layouts onto the program frame.
// Wraps layout.Compositor as a PipelineNode. In-place: modifies src.YUV and returns src.
//
// Active only when the compositor has an active layout with enabled slots.
// When inactive, the pipeline skips this node entirely (zero overhead).
type layoutNode struct {
	compositor *layout.Compositor
}

func (n *layoutNode) Name() string                          { return "layout-composite" }
func (n *layoutNode) Configure(format PipelineFormat) error {
	if n.compositor != nil {
		n.compositor.UpdateFormat(format.Width, format.Height)
	}
	return nil
}
func (n *layoutNode) Active() bool {
	return n.compositor != nil && n.compositor.Active()
}
func (n *layoutNode) Err() error             { return nil }
func (n *layoutNode) Latency() time.Duration {
	if n.compositor != nil {
		return n.compositor.Latency()
	}
	return 0
}
func (n *layoutNode) Close() error { return nil }

func (n *layoutNode) Process(dst, src *ProcessingFrame) *ProcessingFrame {
	src.YUV = n.compositor.ProcessFrame(src.YUV, src.Width, src.Height)
	return src
}
```

Now modify `server/switcher/switcher.go`:

**Add field to Switcher struct** (after `keyBridge` at line 230):

```go
	// Layout compositor — applies PIP/split-screen/quad layouts.
	layoutCompositor *layout.Compositor
```

**Add import** for `"github.com/zsiec/switchframe/server/layout"` in the import block.

**Modify `buildNodeList()`** (line 553) — insert layout node between upstream-key and compositor:

```go
func (s *Switcher) buildNodeList() []PipelineNode {
	return []PipelineNode{
		&upstreamKeyNode{bridge: s.keyBridge},
		&layoutNode{compositor: s.layoutCompositor},
		&compositorNode{compositor: s.compositorRef},
		&rawSinkNode{sink: &s.rawVideoSink, name: "raw-sink-mxl"},
		&rawSinkNode{sink: &s.rawMonitorSink, name: "raw-sink-monitor"},
		&encodeNode{
			codecs:         s.pipeCodecs,
			forceIDR:       &s.forceNextIDR,
			promMetrics:    s.promMetrics,
			encodeNilCount: &s.pipeEncodeNil,
			onEncoded:      s.broadcastOwnedToProgram,
		},
	}
}
```

**Add IngestSourceFrame call in `handleRawVideoFrame()`** (after keyBridge block, around line 2315):

```go
	// Feed layout compositor with decoded YUV (for PIP/split-screen).
	if s.layoutCompositor != nil && s.layoutCompositor.NeedsSource(sourceKey) {
		s.layoutCompositor.IngestSourceFrame(sourceKey, pf.YUV, pf.Width, pf.Height)
	}
```

Also capture `layoutCompositor` under the RLock at the top of the function (around line 2282):

```go
	layoutComp := s.layoutCompositor
```

And use `layoutComp` instead of `s.layoutCompositor` in the feed block:

```go
	if layoutComp != nil && layoutComp.NeedsSource(sourceKey) {
		layoutComp.IngestSourceFrame(sourceKey, pf.YUV, pf.Width, pf.Height)
	}
```

**Add `SetLayoutCompositor` method:**

```go
// SetLayoutCompositor sets the layout compositor for PIP/split-screen.
func (s *Switcher) SetLayoutCompositor(lc *layout.Compositor) {
	s.mu.Lock()
	s.layoutCompositor = lc
	s.mu.Unlock()
	s.rebuildPipeline()
}
```

**Step 4: Run test to verify it passes**

Run: `cd server && go test ./switcher/ -run TestLayoutNode -v`
Expected: PASS

**Step 5: Run full switcher tests**

Run: `cd server && go test ./switcher/ -race -count=1`
Expected: All tests pass

**Step 6: Commit**

```bash
git add server/switcher/node_layout.go server/switcher/switcher.go server/switcher/pipeline_loop_test.go
git commit -m "feat(switcher): add layoutNode to pipeline with frame delivery in handleRawVideoFrame"
```

---

### Task 7: Layout preset store

**Files:**
- Create: `server/layout/store.go`
- Test: `server/layout/store_test.go`

**Step 1: Write the failing test**

Create `server/layout/store_test.go`:

```go
package layout

import (
	"image"
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestStore_CRUD(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, "layout_presets.json")
	s := NewStore(path)

	// Save
	l := &Layout{
		Name: "custom-pip",
		Slots: []LayoutSlot{
			{SourceKey: "cam2", Rect: image.Rect(100, 100, 500, 370), Enabled: true},
		},
	}
	require.NoError(t, s.Save(l))

	// List
	presets := s.List()
	require.Len(t, presets, 1)
	require.Equal(t, "custom-pip", presets[0])

	// Get
	got, err := s.Get("custom-pip")
	require.NoError(t, err)
	require.Equal(t, "cam2", got.Slots[0].SourceKey)

	// Delete
	require.NoError(t, s.Delete("custom-pip"))
	presets = s.List()
	require.Len(t, presets, 0)

	// Get missing
	_, err = s.Get("nonexistent")
	require.Error(t, err)
}

func TestStore_Persistence(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, "layout_presets.json")

	s1 := NewStore(path)
	l := &Layout{Name: "test", Slots: []LayoutSlot{
		{SourceKey: "cam1", Rect: image.Rect(0, 0, 480, 270)},
	}}
	require.NoError(t, s1.Save(l))

	// New store reads from file
	s2 := NewStore(path)
	presets := s2.List()
	require.Len(t, presets, 1)

	got, err := s2.Get("test")
	require.NoError(t, err)
	require.Equal(t, "cam1", got.Slots[0].SourceKey)
}

func TestStore_NilFile(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, "nonexistent", "presets.json")
	s := NewStore(path)
	// Should not panic — file doesn't exist yet
	require.Len(t, s.List(), 0)

	// Create parent dir and save
	require.NoError(t, os.MkdirAll(filepath.Dir(path), 0o755))
	l := &Layout{Name: "test", Slots: []LayoutSlot{}}
	require.NoError(t, s.Save(l))
}
```

**Step 2: Run test to verify it fails**

Run: `cd server && go test ./layout/ -run TestStore -v`
Expected: FAIL — `NewStore` not defined

**Step 3: Implement**

Create `server/layout/store.go`:

```go
package layout

import (
	"encoding/json"
	"fmt"
	"os"
	"sync"
)

// Store manages CRUD operations for custom layout presets.
type Store struct {
	mu       sync.RWMutex
	presets  map[string]*Layout
	filePath string
}

// NewStore creates a new layout preset store, loading from file if it exists.
func NewStore(filePath string) *Store {
	s := &Store{
		presets:  make(map[string]*Layout),
		filePath: filePath,
	}
	s.load()
	return s
}

// Save stores a layout preset. Overwrites if name already exists.
func (s *Store) Save(l *Layout) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.presets[l.Name] = l
	return s.persist()
}

// Get returns a layout preset by name.
func (s *Store) Get(name string) (*Layout, error) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	l, ok := s.presets[name]
	if !ok {
		return nil, fmt.Errorf("layout preset %q not found", name)
	}
	cp := *l
	cp.Slots = make([]LayoutSlot, len(l.Slots))
	copy(cp.Slots, l.Slots)
	return &cp, nil
}

// Delete removes a layout preset by name.
func (s *Store) Delete(name string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	delete(s.presets, name)
	return s.persist()
}

// List returns the names of all saved presets.
func (s *Store) List() []string {
	s.mu.RLock()
	defer s.mu.RUnlock()
	names := make([]string, 0, len(s.presets))
	for name := range s.presets {
		names = append(names, name)
	}
	return names
}

func (s *Store) load() {
	data, err := os.ReadFile(s.filePath)
	if err != nil {
		return
	}
	var presets map[string]*Layout
	if err := json.Unmarshal(data, &presets); err != nil {
		return
	}
	s.presets = presets
}

func (s *Store) persist() error {
	data, err := json.MarshalIndent(s.presets, "", "  ")
	if err != nil {
		return err
	}
	tmp := s.filePath + ".tmp"
	if err := os.WriteFile(tmp, data, 0o644); err != nil {
		return err
	}
	return os.Rename(tmp, s.filePath)
}
```

**Step 4: Run test to verify it passes**

Run: `cd server && go test ./layout/ -race -count=1`
Expected: All tests pass

**Step 5: Commit**

```bash
git add server/layout/store.go server/layout/store_test.go
git commit -m "feat(layout): add file-based layout preset store with CRUD"
```

---

### Task 8: LayoutState types and REST API

**Files:**
- Modify: `server/internal/types.go:193` (add Layout field to ControlRoomState)
- Create: `server/control/api_layout.go`
- Modify: `server/control/api.go:173` (add layoutCompositor + layoutStore fields)
- Modify: `server/control/api.go:269` (register layout routes)
- Test: `server/control/api_layout_test.go`

**Step 1: Implement LayoutState types**

Add to `server/internal/types.go` (after `GraphicsState` field, around line 193):

```go
	Layout *LayoutState `json:"layout,omitempty"`
```

Add the types at the bottom of the file:

```go
// LayoutState represents the current layout configuration for state broadcast.
type LayoutState struct {
	ActivePreset string            `json:"activePreset"`
	Slots        []LayoutSlotState `json:"slots"`
}

// LayoutSlotState represents a single layout slot in the state broadcast.
type LayoutSlotState struct {
	ID        int    `json:"id"`
	SourceKey string `json:"sourceKey"`
	Enabled   bool   `json:"enabled"`
	X         int    `json:"x"`
	Y         int    `json:"y"`
	Width     int    `json:"width"`
	Height    int    `json:"height"`
	ZOrder    int    `json:"zOrder"`
	Animating bool   `json:"animating,omitempty"`
}
```

**Step 2: Create API handlers**

Create `server/control/api_layout.go`:

```go
package control

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/zsiec/switchframe/server/control/httperr"
	"github.com/zsiec/switchframe/server/layout"
)

type layoutRequest struct {
	Preset    string              `json:"preset,omitempty"`
	Slots     []layout.LayoutSlot `json:"slots,omitempty"`
	Name      string              `json:"name,omitempty"`
}

type slotUpdateRequest struct {
	SourceKey  string               `json:"sourceKey,omitempty"`
	X          *int                 `json:"x,omitempty"`
	Y          *int                 `json:"y,omitempty"`
	Width      *int                 `json:"width,omitempty"`
	Height     *int                 `json:"height,omitempty"`
	Border     *layout.BorderConfig `json:"border,omitempty"`
	Transition *layout.SlotTransition `json:"transition,omitempty"`
}

func (a *API) handleGetLayout(w http.ResponseWriter, r *http.Request) {
	l := a.layoutCompositor.GetLayout()
	w.Header().Set("Content-Type", "application/json")
	if l == nil {
		_ = json.NewEncoder(w).Encode(map[string]any{"layout": nil})
		return
	}
	_ = json.NewEncoder(w).Encode(l)
}

func (a *API) handleSetLayout(w http.ResponseWriter, r *http.Request) {
	var req layoutRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid json")
		return
	}

	var l *layout.Layout
	if req.Preset != "" {
		// Load from preset — could be builtin or custom
		stored, err := a.layoutStore.Get(req.Preset)
		if err != nil {
			httperr.Write(w, http.StatusNotFound, "preset not found: "+req.Preset)
			return
		}
		l = stored
	} else if len(req.Slots) > 0 {
		l = &layout.Layout{Name: "custom", Slots: req.Slots}
	} else {
		httperr.Write(w, http.StatusBadRequest, "provide preset name or slots")
		return
	}

	format := a.switcher.PipelineFormat()
	if err := layout.ValidateLayout(l, format.Width, format.Height); err != nil {
		httperr.Write(w, http.StatusBadRequest, err.Error())
		return
	}

	a.layoutCompositor.SetLayout(l)
	a.broadcastFn()
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(l)
}

func (a *API) handleDeleteLayout(w http.ResponseWriter, r *http.Request) {
	a.layoutCompositor.SetLayout(nil)
	a.broadcastFn()
	w.WriteHeader(http.StatusNoContent)
}

func (a *API) handleSlotOn(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid slot id")
		return
	}
	a.layoutCompositor.SlotOn(id)
	a.broadcastFn()
	w.WriteHeader(http.StatusNoContent)
}

func (a *API) handleSlotOff(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid slot id")
		return
	}
	a.layoutCompositor.SlotOff(id)
	a.broadcastFn()
	w.WriteHeader(http.StatusNoContent)
}

func (a *API) handleSlotUpdate(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid slot id")
		return
	}

	var req slotUpdateRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid json")
		return
	}

	a.layoutCompositor.UpdateSlot(id, func(slot *layout.LayoutSlot) {
		if req.SourceKey != "" {
			slot.SourceKey = req.SourceKey
		}
		if req.X != nil {
			slot.Rect.Min.X = layout.EvenAlign(*req.X)
			slot.Rect.Max.X = slot.Rect.Min.X + slot.Rect.Dx()
		}
		if req.Y != nil {
			slot.Rect.Min.Y = layout.EvenAlign(*req.Y)
			slot.Rect.Max.Y = slot.Rect.Min.Y + slot.Rect.Dy()
		}
		if req.Width != nil {
			slot.Rect.Max.X = slot.Rect.Min.X + layout.EvenAlign(*req.Width)
		}
		if req.Height != nil {
			slot.Rect.Max.Y = slot.Rect.Min.Y + layout.EvenAlign(*req.Height)
		}
		if req.Border != nil {
			slot.Border = *req.Border
		}
		if req.Transition != nil {
			slot.Transition = *req.Transition
		}
	})
	a.broadcastFn()
	w.WriteHeader(http.StatusNoContent)
}

func (a *API) handleSlotSource(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid slot id")
		return
	}
	var req struct {
		Source string `json:"source"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid json")
		return
	}
	a.layoutCompositor.UpdateSlot(id, func(slot *layout.LayoutSlot) {
		slot.SourceKey = req.Source
	})
	a.broadcastFn()
	w.WriteHeader(http.StatusNoContent)
}

func (a *API) handleListPresets(w http.ResponseWriter, r *http.Request) {
	names := a.layoutStore.List()
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(names)
}

func (a *API) handleSavePreset(w http.ResponseWriter, r *http.Request) {
	l := a.layoutCompositor.GetLayout()
	if l == nil {
		httperr.Write(w, http.StatusBadRequest, "no active layout to save")
		return
	}
	var req struct {
		Name string `json:"name"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil || req.Name == "" {
		httperr.Write(w, http.StatusBadRequest, "provide a name")
		return
	}
	saved := *l
	saved.Name = req.Name
	if err := a.layoutStore.Save(&saved); err != nil {
		httperr.Write(w, http.StatusInternalServerError, err.Error())
		return
	}
	w.WriteHeader(http.StatusCreated)
}

func (a *API) handleDeletePreset(w http.ResponseWriter, r *http.Request) {
	name := r.PathValue("name")
	if err := a.layoutStore.Delete(name); err != nil {
		httperr.Write(w, http.StatusNotFound, err.Error())
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
```

**Step 3: Add fields to API struct and register routes**

In `server/control/api.go`, add to the API struct (after `keyBridge` at line 173):

```go
	layoutCompositor *layout.Compositor
	layoutStore      *layout.Store
```

Add import for `"github.com/zsiec/switchframe/server/layout"`.

In `registerAPIRoutes()`, add after the keyer routes (around line 344):

```go
	if a.layoutCompositor != nil {
		mux.HandleFunc("GET /api/layout", a.handleGetLayout)
		mux.HandleFunc("PUT /api/layout", a.handleSetLayout)
		mux.HandleFunc("DELETE /api/layout", a.handleDeleteLayout)
		mux.HandleFunc("PUT /api/layout/slots/{id}", a.handleSlotUpdate)
		mux.HandleFunc("POST /api/layout/slots/{id}/on", a.handleSlotOn)
		mux.HandleFunc("POST /api/layout/slots/{id}/off", a.handleSlotOff)
		mux.HandleFunc("PUT /api/layout/slots/{id}/source", a.handleSlotSource)
		mux.HandleFunc("GET /api/layout/presets", a.handleListPresets)
		mux.HandleFunc("POST /api/layout/presets", a.handleSavePreset)
		mux.HandleFunc("DELETE /api/layout/presets/{name}", a.handleDeletePreset)
	}
```

**Step 4: Add `UpdateSlot` and `GetLayout` methods to Compositor**

Add to `server/layout/compositor.go`:

```go
// GetLayout returns the current layout (may be nil).
func (c *Compositor) GetLayout() *Layout {
	return c.layout.Load()
}

// UpdateSlot modifies a slot in-place using the given function, then atomically swaps the layout.
func (c *Compositor) UpdateSlot(slotIdx int, fn func(*LayoutSlot)) {
	c.mu.Lock()
	defer c.mu.Unlock()
	l := c.layout.Load()
	if l == nil || slotIdx >= len(l.Slots) {
		return
	}
	updated := c.cloneLayout(l)
	fn(&updated.Slots[slotIdx])
	c.layout.Store(updated)
}
```

**Step 5: Run full tests**

Run: `cd server && go test ./layout/ ./switcher/ ./control/ -race -count=1`
Expected: All tests pass

**Step 6: Commit**

```bash
git add server/internal/types.go server/control/api_layout.go server/control/api.go server/layout/compositor.go
git commit -m "feat(control): add 10 REST endpoints for layout/PIP management"
```

---

### Task 9: Auto-dissolve on program change and macro actions

**Files:**
- Modify: `server/switcher/switcher.go` (program change handler)
- Modify: `server/macro/types.go` (add layout actions)
- Modify: `server/macro/validate.go` (add layout validation)

**Step 1: Implement auto-dissolve**

In `server/switcher/switcher.go`, find the `Cut()` method where `s.programSource` is updated. After the program source change, add:

```go
	// Auto-dissolve any PIP slot showing the new program source.
	if s.layoutCompositor != nil {
		s.layoutCompositor.AutoDissolveSource(newProgramSource)
	}
```

Add `AutoDissolveSource` to `server/layout/compositor.go`:

```go
// AutoDissolveSource dissolves off any enabled slot whose source matches the given key.
// Used when a program cut changes to match a PIP source.
func (c *Compositor) AutoDissolveSource(sourceKey string) {
	l := c.layout.Load()
	if l == nil {
		return
	}
	for i, slot := range l.Slots {
		if slot.Enabled && slot.SourceKey == sourceKey {
			// Override transition to a quick dissolve
			c.mu.Lock()
			c.animations = append(c.animations, &Animation{
				SlotIndex: i,
				StartTime: time.Now(),
				Duration:  200 * time.Millisecond,
				FromRect:  slot.Rect,
				ToRect:    slot.Rect,
				FromAlpha: 1.0,
				ToAlpha:   0.0,
				OnComplete: func() {
					c.mu.Lock()
					defer c.mu.Unlock()
					if cur := c.layout.Load(); cur != nil {
						up := c.cloneLayout(cur)
						if i < len(up.Slots) {
							up.Slots[i].Enabled = false
						}
						c.layout.Store(up)
					}
				},
			})
			c.mu.Unlock()
		}
	}
}
```

**Step 2: Add macro actions**

In `server/macro/types.go`, add after the graphics actions (line 34):

```go
	// Layout/PIP actions.
	ActionLayoutPreset    MacroAction = "layout_preset"
	ActionLayoutSlotOn    MacroAction = "layout_slot_on"
	ActionLayoutSlotOff   MacroAction = "layout_slot_off"
	ActionLayoutSlotSource MacroAction = "layout_slot_source"
	ActionLayoutClear     MacroAction = "layout_clear"
```

In `server/macro/validate.go`, add these actions to the valid actions set (follow the existing pattern).

**Step 3: Run full tests**

Run: `cd server && go test ./... -race -count=1`
Expected: All tests pass

**Step 4: Commit**

```bash
git add server/switcher/switcher.go server/layout/compositor.go server/macro/types.go server/macro/validate.go
git commit -m "feat(layout): auto-dissolve PIP on program match, add 5 macro actions"
```

---

### Task 10: UI TypeScript types and API functions

**Files:**
- Modify: `ui/src/lib/api/types.ts` (add LayoutState types)
- Modify: `ui/src/lib/api/switch-api.ts` (add layout API functions)

**Step 1: Add TypeScript types**

In `ui/src/lib/api/types.ts`, add after `GraphicsState`:

```typescript
export interface LayoutState {
	activePreset: string;
	slots: LayoutSlotState[];
}

export interface LayoutSlotState {
	id: number;
	sourceKey: string;
	enabled: boolean;
	x: number;
	y: number;
	width: number;
	height: number;
	zOrder: number;
	animating?: boolean;
}

export interface LayoutSlotConfig {
	sourceKey: string;
	rect: { min: { x: number; y: number }; max: { x: number; y: number } };
	zOrder: number;
	enabled: boolean;
	border?: { width: number; colorY: number; colorCb: number; colorCr: number };
	transition?: { type: 'cut' | 'dissolve' | 'fly'; duration: number };
}

export interface LayoutConfig {
	preset?: string;
	slots?: LayoutSlotConfig[];
	name?: string;
}
```

Add `layout?: LayoutState;` to the `ControlRoomState` interface (after `graphics`).

**Step 2: Add API functions**

In `ui/src/lib/api/switch-api.ts`, add:

```typescript
// Layout/PIP API
export function getLayout(): Promise<LayoutConfig | null> {
	return request('/api/layout');
}

export function setLayout(config: LayoutConfig): Promise<LayoutConfig> {
	return request('/api/layout', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(config),
	});
}

export function clearLayout(): Promise<void> {
	return request('/api/layout', { method: 'DELETE' });
}

export function layoutSlotOn(slotId: number): Promise<void> {
	return post(`/api/layout/slots/${slotId}/on`, {});
}

export function layoutSlotOff(slotId: number): Promise<void> {
	return post(`/api/layout/slots/${slotId}/off`, {});
}

export function updateLayoutSlot(slotId: number, update: Record<string, unknown>): Promise<void> {
	return request(`/api/layout/slots/${slotId}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(update),
	});
}

export function setLayoutSlotSource(slotId: number, source: string): Promise<void> {
	return request(`/api/layout/slots/${slotId}/source`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ source }),
	});
}

export function listLayoutPresets(): Promise<string[]> {
	return request('/api/layout/presets');
}

export function saveLayoutPreset(name: string): Promise<void> {
	return post('/api/layout/presets', { name });
}

export function deleteLayoutPreset(name: string): Promise<void> {
	return request(`/api/layout/presets/${encodeURIComponent(name)}`, { method: 'DELETE' });
}
```

**Step 3: Run UI tests**

Run: `cd ui && npx vitest run`
Expected: All tests pass

**Step 4: Commit**

```bash
git add ui/src/lib/api/types.ts ui/src/lib/api/switch-api.ts
git commit -m "feat(ui): add LayoutState types and layout API functions"
```

---

### Task 11: LayoutPanel Svelte component

**Files:**
- Create: `ui/src/components/LayoutPanel.svelte`
- Modify: `ui/src/components/BottomTabs.svelte` (add Layout tab)
- Modify: `ui/src/routes/+page.svelte` (pass layout state)

**Step 1: Create LayoutPanel**

Create `ui/src/components/LayoutPanel.svelte`. This is a large component — implement the preset strip + per-slot controls as described in the design. Follow the patterns in `KeyPanel.svelte` (Svelte 5 `$state` runes, `$derived`, `interface Props`).

Key elements:
- Preset strip with built-in layout thumbnails (SVG mini-previews)
- Per-slot controls: source dropdown, X/Y/W/H inputs, quick position grid, border toggle, ON/OFF buttons, transition type selector
- Source dropdown shows tally dots (red=program, green=preview, amber=PIP on-air)

**Step 2: Add Layout tab to BottomTabs**

In `ui/src/components/BottomTabs.svelte`, add `'Layout'` to the tabs array (line 9) and update the keyboard shortcut regex to include Digit8.

**Step 3: Wire into page**

In `ui/src/routes/+page.svelte`, pass layout-related state to LayoutPanel when the Layout tab is active.

**Step 4: Run UI tests**

Run: `cd ui && npx vitest run`
Expected: All tests pass

**Step 5: Commit**

```bash
git add ui/src/components/LayoutPanel.svelte ui/src/components/BottomTabs.svelte ui/src/routes/+page.svelte
git commit -m "feat(ui): add LayoutPanel component with preset strip and slot controls"
```

---

### Task 12: Preview overlay, keyboard shortcuts, and tally

**Files:**
- Create: `ui/src/components/LayoutOverlay.svelte`
- Modify: `ui/src/components/ProgramPreview.svelte` (add overlay layer)
- Modify: `ui/src/lib/keyboard/handler.ts` (add P, Shift+P, F3 shortcuts)
- Modify: `ui/src/components/SourceTile.svelte` (amber tally for PIP sources)

**Step 1: Create LayoutOverlay**

Create `ui/src/components/LayoutOverlay.svelte` — an absolutely-positioned layer on top of the preview canvas showing PIP slot outlines and drag handles. Uses SVG or positioned divs.

Key interactions:
- Drag PIP regions to reposition (throttled at 50ms via existing `throttle.ts`)
- Corner drag handles to resize (maintain aspect ratio by default)
- Snap to 5% grid

**Step 2: Wire overlay into ProgramPreview**

Add the overlay layer as a child of the preview container, visible only when the Layout tab is active.

**Step 3: Add keyboard shortcuts**

In `ui/src/lib/keyboard/handler.ts`, add:
- `P` (KeyP) — toggle PIP slot 0 on/off via `layoutSlotOn(0)` / `layoutSlotOff(0)`
- `Shift+P` — cycle PIP position presets
- `F3` — same as P (alternative toggle)

**Step 4: Add amber tally**

In `ui/src/components/SourceTile.svelte`, extend the tally color logic. When the source's key appears in `state.layout?.slots` with `enabled: true`, use `var(--color-tally-pip)` amber border instead of the default no-tally state.

Add CSS custom property to the root styles:
```css
--color-tally-pip: #d4a017;
```

**Step 5: Run UI tests**

Run: `cd ui && npx vitest run`
Expected: All tests pass

**Step 6: Run full project tests**

Run: `cd server && go test ./... -race -count=1`
Expected: All tests pass

**Step 7: Commit**

```bash
git add ui/src/components/LayoutOverlay.svelte ui/src/components/ProgramPreview.svelte ui/src/lib/keyboard/handler.ts ui/src/components/SourceTile.svelte
git commit -m "feat(ui): add preview overlay with drag handles, keyboard shortcuts, and amber PIP tally"
```

---

## Summary

| Task | What | Files |
|------|------|-------|
| 1 | Layout types + validation | `layout/types.go` |
| 2 | YUV420 compositing + borders | `layout/composite.go` |
| 3 | Layout presets (PIP/split/quad) | `layout/presets.go` |
| 4 | Layout compositor core | `layout/compositor.go` |
| 5 | PIP transitions (cut/dissolve/fly) | `layout/animation.go`, `layout/compositor.go` |
| 6 | Pipeline node + switcher wiring | `switcher/node_layout.go`, `switcher/switcher.go` |
| 7 | Layout preset store | `layout/store.go` |
| 8 | LayoutState + REST API (10 endpoints) | `control/api_layout.go`, `internal/types.go` |
| 9 | Auto-dissolve + macro actions | `switcher/switcher.go`, `macro/types.go` |
| 10 | UI: TypeScript types + API | `api/types.ts`, `switch-api.ts` |
| 11 | UI: LayoutPanel component | `LayoutPanel.svelte`, `BottomTabs.svelte` |
| 12 | UI: Preview overlay + shortcuts + tally | `LayoutOverlay.svelte`, `handler.ts`, `SourceTile.svelte` |
