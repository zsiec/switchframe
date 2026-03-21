package graphics

// BoxBlurYUV420 applies a separable box blur to a YUV420p frame.
// radius is the blur radius in pixels, clamped to [1, 50].
// The blur uses a sliding window accumulator for O(width*height) performance
// regardless of radius.
//
// dst and src must both be at least width*height + 2*(width/2)*(height/2) bytes.
// dst and src must not overlap. width and height must be even.
func BoxBlurYUV420(dst, src []byte, width, height, radius int) {
	if radius < 1 {
		radius = 1
	}
	if radius > 50 {
		radius = 50
	}
	if width < 2 || height < 2 || width%2 != 0 || height%2 != 0 {
		copy(dst, src)
		return
	}

	ySize := width * height
	uvWidth := width / 2
	uvHeight := height / 2
	uvSize := uvWidth * uvHeight
	frameSize := ySize + 2*uvSize

	if len(src) < frameSize || len(dst) < frameSize {
		return
	}

	// We need a temporary buffer for the intermediate horizontal pass.
	// We reuse dst for the first pass output, then do the second pass.
	// Actually, do horizontal pass into dst, then vertical pass from dst into dst
	// (need a temp buffer for vertical pass).

	// Use a temporary buffer for the two-pass separable blur.
	// Pass 1: horizontal blur src → dst
	// Pass 2: vertical blur dst → dst (requires temp buffer)

	// Y plane
	boxBlurPlane(dst[:ySize], src[:ySize], width, height, radius)

	// Cb plane (half resolution, half radius)
	chromaRadius := radius / 2
	if chromaRadius < 1 {
		chromaRadius = 1
	}
	boxBlurPlane(dst[ySize:ySize+uvSize], src[ySize:ySize+uvSize], uvWidth, uvHeight, chromaRadius)

	// Cr plane
	boxBlurPlane(dst[ySize+uvSize:frameSize], src[ySize+uvSize:frameSize], uvWidth, uvHeight, chromaRadius)
}

// boxBlurPlane applies a two-pass separable box blur to a single plane.
func boxBlurPlane(dst, src []byte, width, height, radius int) {
	if width*height == 0 {
		return
	}

	// Allocate temp buffer for intermediate result
	temp := make([]byte, width*height)

	// Pass 1: horizontal blur src → temp
	boxBlurHorizontal(temp, src, width, height, radius)

	// Pass 2: vertical blur temp → dst
	boxBlurVertical(dst, temp, width, height, radius)
}

// boxBlurHorizontal applies a horizontal box blur using sliding window.
func boxBlurHorizontal(dst, src []byte, width, height, radius int) {
	diam := 2*radius + 1

	for y := 0; y < height; y++ {
		rowOff := y * width

		// Initialize accumulator with the first window.
		// For pixels near the left edge, clamp to 0.
		var sum int
		for x := -radius; x <= radius; x++ {
			sx := x
			if sx < 0 {
				sx = 0
			}
			if sx >= width {
				sx = width - 1
			}
			sum += int(src[rowOff+sx])
		}
		dst[rowOff] = byte(sum / diam)

		// Slide the window across the row.
		for x := 1; x < width; x++ {
			// Add the new right pixel
			addX := x + radius
			if addX >= width {
				addX = width - 1
			}
			sum += int(src[rowOff+addX])

			// Remove the old left pixel
			removeX := x - radius - 1
			if removeX < 0 {
				removeX = 0
			}
			sum -= int(src[rowOff+removeX])

			dst[rowOff+x] = byte(sum / diam)
		}
	}
}

// boxBlurVertical applies a vertical box blur using sliding window.
func boxBlurVertical(dst, src []byte, width, height, radius int) {
	diam := 2*radius + 1

	for x := 0; x < width; x++ {
		// Initialize accumulator for column x.
		var sum int
		for y := -radius; y <= radius; y++ {
			sy := y
			if sy < 0 {
				sy = 0
			}
			if sy >= height {
				sy = height - 1
			}
			sum += int(src[sy*width+x])
		}
		dst[x] = byte(sum / diam)

		// Slide down.
		for y := 1; y < height; y++ {
			addY := y + radius
			if addY >= height {
				addY = height - 1
			}
			sum += int(src[addY*width+x])

			removeY := y - radius - 1
			if removeY < 0 {
				removeY = 0
			}
			sum -= int(src[removeY*width+x])

			dst[y*width+x] = byte(sum / diam)
		}
	}
}
