# Switchframe

Browser-based live video switcher built on [Prism](https://github.com/zsiec/prism).

## Quick Start

```bash
make demo                                  # 4 simulated cameras, open localhost:5173
cd server && go build ./cmd/switchframe    # build
cd server && go test ./... -race           # test
make build                                 # build to bin/switchframe
cd ui && npm install                       # install UI deps
cd ui && npm run dev                       # dev server (proxies to Go)
cd ui && npx vitest run                    # frontend tests
cd ui && npx playwright test               # E2E tests
make test-all                              # run all tests
```

## Repository Layout

```
server/                          # Go module (github.com/zsiec/switchframe/server)
  cmd/switchframe/main.go        # Binary entry point (standalone HTTP on :8080)
    embed_prod.go                #   Static file embedding (build tag: embed_ui)
    embed_dev.go                 #   No-op handler (default, dev mode)
    admin.go                     #   Admin/debug HTTP endpoints
  switcher/                      # Core switching engine
    switcher.go                  #   State machine: Cut(), SetPreview(), frame routing, audio handler
    source_viewer.go             #   Per-source Viewer proxy (atomic.Pointer for lock-free hot path)
    frame_sync.go                #   FrameSynchronizer: freerun frame alignment (90 kHz PTS)
    health.go                    #   Source health monitor (stale/no_signal/offline)
    delay_buffer.go              #   Per-source frame delay buffer (0-500ms)
    gop_cache.go                 #   GOP cache for instant keyframe on cut
    processing_frame.go          #   ProcessingFrame: raw YUV420 carrier through pipeline
    pipeline_codecs.go           #   Shared decoder/encoder pool for video processing chain
  audio/                         # Audio mixing engine
    mixer.go                     #   Per-channel decode/mix/encode, passthrough optimization
    codec.go                     #   AudioDecoder/AudioEncoder interfaces + factory types
    fdk_cgo.go                   #   Centralized cgo CFLAGS/LDFLAGS for fdk-aac
    fdk_decoder.go               #   FDK AAC decoder (direct cgo wrapper)
    fdk_encoder.go               #   FDK AAC encoder (direct cgo wrapper)
    crossfade.go                 #   Equal-power cos/sin ramp
    metering.go                  #   Peak level computation + LinearToDBFS
    limiter.go                   #   Brickwall limiter at -1 dBFS
    eq.go                        #   3-band parametric EQ (RBJ biquad, Direct Form II Transposed)
    compressor.go                #   Single-band compressor (envelope follower, makeup gain)
    loudness.go                  #   BS.1770-4 LUFS meter (K-weighting, momentary/short-term/integrated)
    stub_codec.go                #   No-op codec stubs (non-cgo builds)
  control/                       # REST API + state broadcast
    api.go                       #   HTTP handlers: cut, preview, transition, FTB, audio, recording,
                                 #     SRT, confidence, presets, stinger, graphics, macros, replay,
                                 #     operators, keying, debug
    api_operator.go              #   Operator management HTTP handlers (register, lock, heartbeat)
    state.go                     #   StatePublisher (JSON serialize -> callback)
    auth.go                      #   API key authentication
    middleware.go                #   HTTP middleware (logging, auth, metrics)
  transition/                    # Transition engine
    engine.go                    #   TransitionEngine lifecycle (start/ingest/complete/abort)
    blend.go                     #   YUV420 blending (mix, dip, wipe, FTB, stinger)
    color.go                     #   BT.709 YUV420↔RGB colorspace conversion
    codec.go                     #   VideoDecoder/VideoEncoder interfaces + mocks
    types.go                     #   TransitionType/TransitionState/WipeDirection constants
    scaler.go                    #   Pure Go bilinear YUV420 scaler for resolution mismatch
    scaler_lanczos.go            #   Lanczos-3 kernel scaler for broadcast-quality scaling
  output/                        # Recording + SRT output engine
    manager.go                   #   OutputManager: lifecycle, viewer, fan-out, confidence monitor
    muxer.go                     #   TSMuxer: MPEG-TS muxing (go-astits)
    types.go                     #   OutputAdapter interface, status types
    viewer.go                    #   OutputViewer (distribution.Viewer on program relay)
    recorder.go                  #   FileRecorder adapter (.ts file, rotation)
    confidence.go                #   ConfidenceMonitor (1fps JPEG thumbnail from program keyframes)
    srt_caller.go                #   SRTCaller adapter (push mode, reconnect, overflow tracking)
    srt_listener.go              #   SRTListener adapter (pull, N conns)
    srt_common.go                #   Shared srtConn interface
    srt_wire.go                  #   Real srtgo connection wrappers
    ringbuf.go                   #   Ring buffer for SRT reconnection
    async_adapter.go             #   Async write adapter (non-blocking output)
    destination.go               #   Multi-destination types and lifecycle (DestinationConfig/Status)
  stinger/                       # Stinger transition clips
    store.go                     #   StingerStore: load/upload/delete PNG sequences, path traversal
                                 #     prevention, maxClips limit, sentinel errors
  codec/                         # Video codec infrastructure + NALU/ADTS helpers
    ffmpeg_cgo.go                #   FFmpeg cgo CFLAGS/LDFLAGS (libavcodec/libavutil)
    ffmpeg_encoder.go            #   FFmpegEncoder (x264/NVENC/VA-API/VideoToolbox)
    ffmpeg_decoder.go            #   FFmpegDecoder (H.264 software + HW)
    probe.go                     #   ProbeEncoders() startup auto-detection
    video.go                     #   NewVideoEncoder/NewVideoDecoder unified factories
    openh264_encoder.go          #   OpenH264 fallback encoder (build tag: openh264)
    openh264_decoder.go          #   OpenH264 fallback decoder (build tag: openh264)
    nalu.go                      #   AVC1↔Annex B conversion
    adts.go                      #   ADTS header construction
    openh264_cgo.go              #   OpenH264 cgo CFLAGS/LDFLAGS
    stub_codec.go                #   Stub codec (non-cgo builds)
    stub_ffmpeg.go               #   Stub FFmpeg (non-cgo builds)
  metrics/                       # Prometheus metrics
    metrics.go                   #   Metrics registry (counters, gauges, histograms)
  debug/                         # Debug/diagnostic tools
    collector.go                 #   Debug snapshot collector (all subsystems)
    event_log.go                 #   Circular event log for diagnostics
  graphics/                      # DSK graphics overlay + upstream keying
    blend.go                     #   Alpha blending for overlay compositing
    compositor.go                #   DSK compositor (template → overlay → program)
    keyer.go                     #   Chroma/luma key generation in YUV420 domain
    key_processor.go             #   Upstream key chain (per-source, before mix)
    key_processor_bridge.go      #   KeyProcessorBridge: fill decode + ProcessYUV for pipeline
  preset/                        # Switcher preset save/recall
    store.go                     #   Preset storage (file-based)
    recall.go                    #   Preset recall logic
  macro/                         # Macro system
    types.go                     #   Macro, MacroStep, MacroAction types
    store.go                     #   File-based JSON CRUD (atomic writes)
    runner.go                    #   Sequential executor with delays + context cancellation
  operator/                      # Multi-operator management
    types.go                     #   Role/Subsystem enums, permission matrix, Operator/Session types
    store.go                     #   File-based operator registration (JSON, atomic writes)
    session.go                   #   Session tracking, subsystem locking, 60s stale cleanup
    middleware.go                #   HTTP middleware: role permission + lock ownership checks
  replay/                        # Instant replay system
    types.go                     #   PlayerState, Config, bufferedFrame, gopDescriptor, MarkPoints
    buffer.go                    #   Per-source GOP-aligned circular buffer with wall-clock clipping
    viewer.go                    #   distribution.Viewer for capturing source frames to buffer
    player.go                    #   Decode → re-encode pipeline with frame duplication for slow-mo
    wsola.go                     #   WSOLA time-stretching for pitch-preserved slow-motion audio
    interpolator.go              #   FrameInterpolator interface + blend interpolator for slow-mo
    manager.go                   #   Replay orchestration: mark-in/out, play, stop, per-source buffers
  demo/                          # Simulated camera sources for demo mode
    source.go                    #   StartSources(): N fake cameras at 30fps
    demux.go                     #   Demo stream demuxer
  internal/                      # Shared types
    types.go                     #   ControlRoomState, SourceInfo, TallyStatus, AudioChannel
ui/                              # SvelteKit frontend (Svelte 5 + TypeScript)
  src/
    lib/
      prism/                     # Vendored Prism TS modules (transport, decode, render)
      api/                       # REST API client + TypeScript types
        types.ts                 #   ControlRoomState, SourceInfo, TallyStatus, AudioChannel types
        switch-api.ts            #   Full REST client: cut, preview, transition, audio (EQ/compressor),
                                 #     presets, stinger, recording, SRT, graphics, macros, keying
      state/                     # Reactive state management
        control-room.svelte.ts   #   Svelte 5 $state store with MoQ update handler
        notifications.svelte.ts  #   Toast notification state
        preferences.svelte.ts    #   User preferences state
        operator.svelte.ts       #   Operator session state (token, role, heartbeat)
      keyboard/                  # Keyboard shortcut handler
        handler.ts               #   Capture-phase keydown with event.code
      transport/                 # WebTransport connection management
        connection.ts            #   Auto-retry WebTransport with REST polling fallback
        connection-manager.ts    #   Connection lifecycle manager
        media-pipeline.ts        #   MoQ → decoder orchestrator (per-source)
        source-errors.svelte.ts  #   Per-source error tracking
      video/                     # Video rendering
        dissolve.ts              #   WebGPU dissolve renderer + Canvas 2D fallback
        dissolve-fallback.ts     #   Canvas 2D dissolve/dip rendering
        canvas-utils.ts          #   Canvas helper utilities
      audio/                     # Client-side audio
        pfl.ts                   #   PFL manager (per-source solo monitoring)
        pfl-toggle.ts            #   PFL toggle utility
      graphics/                  # Graphics overlay
        publisher.ts             #   Graphics publisher
        templates.ts             #   Graphics templates
      pipeline/                  # Media pipeline
        manager.ts               #   Pipeline lifecycle manager
      util/                      # Utilities
        throttle.ts              #   Throttle function (used by T-bar)
    components/                  # Svelte UI components
      Multiview.svelte           #   Source tile grid with tally outlines + canvas
      ProgramPreview.svelte      #   Large preview/program windows with canvas
      PreviewBus.svelte          #   Green preview source buttons
      ProgramBus.svelte          #   Red program source buttons
      TransitionControls.svelte  #   CUT / AUTO / FTB + type selector + stinger upload/delete
      SourceTile.svelte          #   Single source button with tally color + canvas + audio bar
      AudioMixer.svelte          #   Channel strips: faders, VU meters, PFL/MUTE/AFV, EQ/compressor/delay
      KeyboardOverlay.svelte     #   Keyboard shortcut reference (press ?)
      OutputControls.svelte      #   Header: REC button + SRT status + MODE + CONFIRM toggle
      RecordingControl.svelte    #   Recording start/stop/status
      SRTOutputModal.svelte      #   SRT configuration modal
      SimpleMode.svelte          #   Volunteer-friendly layout (CUT/DISSOLVE/FTB + sources + health)
      GraphicsPanel.svelte       #   DSK graphics control panel
      Clock.svelte               #   Live clock display
      ConfirmDialog.svelte       #   Confirmation dialog
      ConnectionBanner.svelte    #   Connection status banner
      ConnectionStatus.svelte    #   Connection status indicator
      ErrorBoundary.svelte       #   Error boundary wrapper
      HealthAlarm.svelte         #   Source health alarm
      LoadingOverlay.svelte      #   Loading state overlay
      ProgramHealthBanner.svelte #   Program health status
      Toast.svelte               #   Toast notification
      MacroPanel.svelte          #   Macro buttons grid with run/edit/delete
      KeyPanel.svelte            #   Upstream key configuration (chroma/luma)
      ReplayPanel.svelte         #   Instant replay controls (mark-in/out, play, speed)
      OperatorBadge.svelte       #   Operator name/role display badge
      OperatorRegistration.svelte #  Operator registration form (name, role)
      LockIndicator.svelte       #   Subsystem lock status indicator
      PresetPanel.svelte         #   Preset save/recall/delete panel
      BottomTabs.svelte          #   Tabbed bottom panel (Audio/Graphics/Macros/Keys/Replay/Presets)
      auto-animation.svelte.ts   #   Auto transition animation state
    lib/layout/                  # Layout mode management
      preferences.ts             #   URL param + localStorage detection/persistence
      responsive.css             #   Responsive breakpoints + touch support utilities
    routes/
      +page.svelte               #   Layout switcher (traditional/simple) + media pipeline
      +layout.svelte             #   Root layout (CSS import)
      +layout.ts                 #   SPA mode (no SSR, no prerender)
Makefile                         # Build chain: dev, build, docker, test-all, clean
Dockerfile                       # Multi-stage build (UI → Go → runtime)
.github/workflows/ci.yml         # GitHub Actions: lint, test-go, test-ui, docker
```

## Reading Order for New Agents

1. **This file** — layout and conventions

## Current State (MVP + Production Hardening — Phases 1-21)

- **Branch:** `main`
- **Tests:** ~1100 Go tests + 575 Vitest tests + 45 E2E tests passing with `-race`
- **What works:** Everything from Phases 1-5 + Simple Mode (volunteer-friendly layout), video/audio playback pipeline (MoQ → decoder → canvas), PFL audio decode + metering, FTB reverse toggle (smooth fade-in), recording file rotation (time + size), SRT wired to real zsiec/srtgo (pure Go), ring buffer overflow monitoring with reconnect callback, static file embedding (single binary), Dockerfile (multi-stage), GitHub Actions CI, Makefile with dev/build/docker/test targets, `make demo` with 4 simulated cameras (`--demo` flag)
- **Phase 6 (Instrumentation):** Prometheus metrics, debug snapshot collector, event log, admin endpoints
- **Phase 7 (Production Hardening):** Source delay buffer, GOP cache, auth middleware, brickwall limiter, async output adapter, codec stubs, DSK graphics compositor
- **Phase 8 (Testing Hardening):** Codec fuzz tests (found+fixed SplitADTSFrames bug), benchmark suite (19 benchmarks), stress tests (6), integration gap tests (12), soak test, frontend stress tests (6)
- **Phase 9 (Audio Polish):** Per-channel audio input trim (-20 to +20 dB), per-channel audio metering, PCM pre-buffering for crossfade gap elimination
- **Phase 10 (Output Confidence):** ConfidenceMonitor for 1fps JPEG thumbnail of program output, `GET /api/output/confidence` endpoint
- **Phase 11 (Stinger Transitions):** PNG sequence stinger clips with per-pixel alpha blending, StingerStore (load/upload/delete), zip upload with path traversal prevention, maxClips memory limit (default 16), configurable cut point
- **Phase 12 (Frame Synchronizer):** Freerun FrameSynchronizer aligns multi-source frames to common tick boundary (90 kHz PTS), 2-frame ring buffer per source, audio freeze limited to 2 repeats to prevent AAC glitch loop
- **Phase 13 (Advanced Audio):** 3-band parametric EQ (RBJ biquad filters), single-band compressor with envelope follower, pipeline: Trim→EQ→Compressor→Fader→Mix→Master→Limiter→Encode, passthrough optimization preserved, multiview audio level bars on source tiles
- **Phase 14 (Operator Experience):** Macro system (file-based store, sequential runner, Ctrl+1-9 keyboard triggers), responsive layout (4 breakpoints, touch support), upstream chroma/luma keying in YUV420 domain
- **Phase 15 (Instant Replay):** Per-source GOP-aligned circular buffers (configurable 1-300s via `--replay-buffer-secs`), mark-in/out with wall-clock precision, variable-speed playback (0.25x-1x) with frame duplication, loop mode, replay relay, 6 API endpoints, ReplayPanel UI component
- **Phase 16 (Multi-Operator):** Role-based operator management (director/audio/graphics/viewer), subsystem locking (switching/audio/graphics/replay/output), per-operator bearer tokens with session heartbeat, 60s stale timeout with auto lock release, director force-unlock, backward-compatible (all requests pass through when no operators registered), operator store (`~/.switchframe/operators.json`), OperatorBadge/Registration/LockIndicator UI components
- **Phase 17 (Audio & Video Fixes):** Stereo envelope linking, limited-range YUV black level, limiter/compressor reset on mute, int16 normalization fix, monotonic output PTS, AutoOn compositor guard, graphics setLastOperator, fsync before rotation, mixer hot-path allocation elimination
- **Phase 18 (UI Layout & Core UX):** Vertical T-bar, multiview height fix, BottomTabs tabbed panel, source position ordering, ATEM-style source label, preview health alarm, peak hold + clip indicator on audio meters
- **Phase 19 (Missing UI Panels):** PresetPanel (save/recall/delete, 6th BottomTab), source delay slider + badge, stinger upload/delete UI, confirm mode toggle, compressor bypass toggle, complete keyboard overlay, FTB button in simple mode, source health indicators in simple mode
- **Phase 20 (Replay & Keying Polish):** Replay timecode display (HH:MM:SS.mmm mark-in/out + clip duration), HiDPI canvas for replay monitor, ReplayPanel design system migration (hex → CSS variables), key color picker (green/blue presets + RGB picker with BT.709 YCbCr conversion), load key config on source select
- **Phase 21 (Broadcast Quality & Feature Completeness):** Video processing channel depth fix (2→4), H.264 colorspace signaling (BT.709), limited-range black level default (Y=16), per-channel biquad EQ state (stereo crosstalk fix), chroma key squared distance + configurable spill replacement color, Lanczos-3 scaler with auto-selection, replay frame blending + interpolator interface, per-source audio delay buffer (lip-sync correction 0-500ms), BS.1770-4 LUFS loudness metering (K-weighted filtering, momentary/short-term/integrated with dual gating), replay audio with WSOLA time-stretching (pitch-preserved slow-motion), multi-destination SRT output (add/remove/start/stop per-destination lifecycle)
- **What's stubbed:** ISO per-source recording (v2.5), WebGPU dissolve (Canvas 2D fallback works)

## Key Architecture Decisions

- **Commands:** REST POST over HTTP/3 (NOT MoQ custom messages — spec says unknown types cause PROTOCOL_VIOLATION)
- **State broadcast:** MoQ "control" track with JSON (full snapshot per group for late-join)
- **Frame routing:** Per-source `sourceViewer` implements `distribution.Viewer`, tags frames with source key. Uses `atomic.Pointer[T]` for lock-free reads on hot path. Switcher forwards only program source's frames to program Relay.
- **Keyframe gating:** After a cut, video+audio are gated until first IDR from new source to prevent decoder artifacts.
- **Prism extension:** `ServerConfig.ExtraRoutes` added to Prism for mounting Switchframe's REST API on Prism's mux.
- **Frontend:** Svelte 5 + SvelteKit with static adapter (for Go binary embed)
- **Vendored Prism TS:** Transport, decode, render modules copied to ui/src/lib/prism/ for full control
- **State sync:** MoQ "control" track (event-driven) with REST polling fallback
- **Keyboard:** Capture-phase `keydown` with `event.code` for layout-independent shortcuts
- **Tally rendering:** WebGPU fragment shader border + CSS outline fallback
- **Audio mixing:** Server-side FDK AAC decode/mix/encode with passthrough optimization (zero CPU when single source at 0dB)
- **Crossfade:** Equal-power cos/sin ramp, 1 AAC frame (~23ms), triggered on cut
- **PFL:** Client-side only, per-operator, no server involvement
- **Program relay bridge:** Use `server.RegisterStream("program")` relay directly (zero extra Prism changes)
- **AFV wiring:** State callback triggers `mixer.OnProgramChange` before state broadcast to browsers
- **Dissolve transitions:** Server-side FFmpeg decode → YUV420 blend → encode (High profile, medium preset). Always-on re-encode ensures consistent SPS/PPS across transition boundaries.
- **Transition engine:** Created per-transition, destroyed on complete/abort. Wall-clock frame pairing with smoothstep easing, output driven by incoming source. Encoder bitrate/fps derived from source stream statistics.
- **Blend colorspace:** YUV420 (BT.709 domain) matching hardware broadcast mixers (ATEM, Ross). Avoids costly YUV↔RGB round-trip.
- **Wipe transitions:** 6 directions (h-left, h-right, v-top, v-bottom, box-center-out, box-edges-in) using per-pixel threshold mask with 4px soft edge in YUV420 domain.
- **T-bar control:** Throttled REST position updates (50ms/20Hz). HTTP/3 multiplexed on shared QUIC connection.
- **Resolution mismatch:** Pure Go bilinear scaler normalizes mismatched sources to program resolution during transitions. No new cgo dependencies.
- **Browser dissolve:** WebGPU shader + Canvas 2D fallback. Client-side preview only; server produces authoritative output.
- **Recording format:** MPEG-TS (.ts) -- crash-resilient (no moov atom), same muxer as SRT output.
- **SRT modes:** Both caller (push to platform) and listener (accept N pulls, max 8). srtgo is pure Go (no cgo).
- **Output lifecycle:** OutputManager auto-registers viewer on program relay when first output starts, removes when last stops. Zero CPU when inactive.
- **SRT reconnection:** Exponential backoff (1s->30s) with 4MB ring buffer. Resume from keyframe if overflow. Overflow count tracked and broadcast in state snapshots, reset on Start().
- **Shared codec:** `server/codec/` package: FFmpeg libavcodec cgo bindings (encoder + decoder), startup probe auto-detects best encoder (NVENC → VA-API → VideoToolbox → libx264 → OpenH264 fallback). Build tags: `cgo && !noffmpeg` for FFmpeg, `cgo && openh264` for OpenH264. Also provides AVC1↔Annex B NALU helpers used by output muxer.
- **Simple Mode:** Volunteer-friendly layout with just preview/program + source buttons + CUT/DISSOLVE. Layout mode detected from URL param (`?mode=simple`) > localStorage > default 'traditional'. Auto-persists URL param to localStorage.
- **Media pipeline:** Per-source MoQTransport → PrismVideoDecoder → VideoRenderBuffer → PrismRenderer (rAF loop). Audio via PrismAudioDecoder with AudioContext for PFL/metering.
- **FTB reverse:** Smooth fade-in from black using inverted blend position (`1.0 - pos`). New `TransitionFTBReverse` type.
- **Recording rotation:** Time-based (default 1h) and size-based. Sequential naming `program_YYYYMMDD_HHMMSS_NNN.ts`.
- **SRT wiring:** Function injection pattern — `srt_wire.go` provides real `srt.Dial()`/`srt.Listen()` wrappers, injected into OutputManager from `main.go`. Uses `zsiec/srtgo` (pure Go, no cgo).
- **Ring buffer overflow:** `onReconnect(overflowed bool)` callback on SRTCaller. OutputManager logs warning and broadcasts state on overflow.
- **Static file embedding:** Build tags (`embed_ui` / `!embed_ui`) with symlink for `//go:embed`. SPA file server with immutable cache headers for `/_app/immutable/*`.
- **Hardware encoder recommendation:** Hardware encoder (NVENC, VA-API, VideoToolbox) strongly recommended for 1080p transitions. Software-only (libx264) is marginal above 720p. Startup probe auto-detects and logs warning if software-only.
- **Stinger transitions:** PNG sequence clips pre-decoded to YUV420 + per-pixel alpha plane. `BlendStinger()` composites overlay with bounds checking. Stored in `StingerStore` with zip upload (`POST /api/stinger/{name}/upload`), path traversal prevention via `validateName()`, and maxClips memory limit (default 16, ~156MB per 1080p 30-frame clip).
- **Frame synchronizer:** Optional `FrameSynchronizer` aligns multi-source frames to a common tick boundary. Per-source 2-frame ring buffer with newest-wins policy. PTS rewritten to monotonic 90 kHz MPEG-TS clock. Audio freeze limited to 2 consecutive repeats to prevent AAC glitch loop (downstream handles silence).
- **Confidence monitor:** `ConfidenceMonitor` generates 320x180 JPEG thumbnails from program keyframes at ≤1fps. Exposed via `GET /api/output/confidence` with `no-store` cache header. Lifecycle owned by `OutputManager.Close()`.
- **Parametric EQ:** 3-band (Low/Mid/High) using RBJ Audio EQ Cookbook peakingEQ biquad coefficients. Direct Form II Transposed processing. Coefficients recalculated only on parameter change, not per-frame. `IsBypassed()` check preserves passthrough optimization.
- **Audio compressor:** Single-band with exponential envelope follower (reuses `limiter.go` pattern). Threshold/ratio/attack/release/makeup gain. `GainReduction()` exported for UI metering.
- **Audio pipeline order:** Trim → EQ → Compressor → Fader → Mix → Master → Limiter → Encode. Passthrough check: all channels at 0dB with EQ bypassed and compressor bypassed.
- **Multiview audio bars:** 4px vertical bar on right edge of SourceTile. Green → yellow (>-12dB) → red (>-3dB). Data from existing state broadcast `audioLevels`.
- **Macro system:** File-based JSON store at `~/.switchframe/macros.json` (mirrors `preset/store.go` pattern). `MacroTarget` interface for testability. Sequential executor with `time.After` + `ctx.Done` select for wait/cancellation.
- **Responsive layout:** CSS-only media queries at 4 breakpoints (1920/1024/768px). `@media (pointer: coarse)` for 44px touch targets. AudioMixer collapses below 1024px.
- **Upstream keying:** Chroma/luma key generation in YUV420 domain (matches blend architecture). `KeyProcessor` applies per-source key chain before DSK compositing. Cb/Cr distance for chroma, Y threshold for luma, with smoothness feathering.
- **Instant replay:** Per-source GOP-aligned circular buffers with wall-clock clipping. `replayBuffer.ExtractClip(inTime, outTime)` returns video frames + audio frames. Player decodes clip, sorts by PTS, estimates FPS, re-encodes with frame duplication for slow-mo (`dupCount = ceil(1/speed)`). Audio time-stretched via WSOLA for pitch-preserved slow-motion. Frame blending via pluggable `FrameInterpolator` interface (default: alpha blend). Output paced at source FPS via timers. Replay routed to dedicated `"replay"` relay registered via `server.RegisterStream("replay")`.
- **Operator management:** File-based operator store at `~/.switchframe/operators.json`. 4 roles (director/audio/graphics/viewer) with 5 lockable subsystems (switching/audio/graphics/replay/output). Per-operator 64-char hex bearer tokens. `SessionManager` tracks heartbeats with 60s stale timeout and 15s cleanup interval. `OperatorMiddleware` enforces role permission + lock ownership on every command (GET requests exempt). Backward-compatible: no operators registered = all requests pass through.
- **Replay relay:** Registered as `server.RegisterStream("replay")`. Replay player output broadcast to this relay so browsers can subscribe via MoQ for replay monitoring.
- **Raw YUV pipeline:** Video processing chain (key bridge → compositor) operates on raw YUV420 with a single decode at ingest and single encode at output. Eliminates multi-encode generation loss. TransitionEngine outputs raw YUV via callback; `pipelineCodecs` manages the shared encoder/decoder pool. Always-on re-encode: every program frame flows through decode→encode for consistent SPS/PPS, eliminating browser VideoDecoder reconfigurations at transition boundaries. Audio passthrough optimization is unchanged.
- **LUFS loudness metering:** BS.1770-4 compliant K-weighted loudness meter. Two-stage K-weighting (head-related shelf + RLB biquad). Three windows: momentary (400ms), short-term (3s), integrated (dual gating: absolute -70 LUFS + relative -10 LU). Fed after master fader, before limiter. EBU R128 color coding in UI (green ≤-23, yellow ≤-14, red above).
- **WSOLA time-stretching:** Waveform Similarity Overlap-Add for pitch-preserved audio slow-motion. Hann window overlap-add with normalized cross-correlation search. Window size 1024 samples, search range 256. Passthrough at 1.0x speed.
- **Lanczos-3 scaler:** Broadcast-quality Lanczos-3 kernel scaler with sinc-based interpolation. Auto-selected for quality scaling (transitions, replay), bilinear used for speed-critical paths. `ScaleYUV420WithQuality(quality)` factory function.
- **Multi-destination SRT:** Per-destination `OutputDestination` with independent lifecycle (add/remove/start/stop). Each destination gets its own `AsyncAdapter` wrapper. CRUD API at `/api/output/destinations`. Destinations included in adapter fan-out via `rebuildAdaptersLocked()`. State change callbacks trigger ControlRoomState broadcast.

## Prism Dependency

Prism is published as `github.com/zsiec/prism v0.1.1` (includes `ExtraRoutes` field in `ServerConfig`). SRT is `github.com/zsiec/srtgo v0.2.4`. No local `replace` directives — all dependencies resolve from the Go module proxy.

Key Prism interfaces used:
- `distribution.Viewer` — `ID()`, `SendVideo()`, `SendAudio()`, `SendCaptions()`, `Stats()`
- `distribution.Relay` — `AddViewer()`, `RemoveViewer()`, `BroadcastVideo()`, `BroadcastAudio()`, `ReplayFullGOPToChannel()`
- `media.VideoFrame` — `PTS`, `IsKeyframe`, `WireData` (AVC1), `Codec`
- `media.AudioFrame` — `PTS`, `Data`, `SampleRate`, `Channels`

## Conventions

- **TDD:** Write failing test first, then implement, then verify
- **Commits:** `feat:`, `fix:`, `test:` prefixes. No Co-Authored-By lines.
- **Testing:** Always run `go test ./... -race` before committing
- **Packages:** `switcher/` for switching logic, `control/` for HTTP/state, `internal/` for shared types
- **Error handling:** Return errors, don't panic. HTTP errors: 400 bad input, 404 not found, 501 not implemented.

## Updating This File

When completing a phase or making significant architectural changes:
1. Update "Current State" section with new branch/test count/what works
2. Add any new architecture decisions to the decisions section
3. Add new files to the repository layout
