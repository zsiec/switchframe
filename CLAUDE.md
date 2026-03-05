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
  switcher/                      # Core switching engine
    switcher.go                  #   State machine: Cut(), SetPreview(), frame routing, audio handler
    source_viewer.go             #   Per-source Viewer proxy (tags frames with source key)
    health.go                    #   Source health monitor (stale/no_signal/offline)
    integration_test.go          #   End-to-end tests: source relay -> switcher -> program relay + audio
  audio/                         # Audio mixing engine
    mixer.go                     #   Per-channel decode/mix/encode, passthrough optimization
    codec.go                     #   AudioDecoder/AudioEncoder interfaces + factory types
    fdk_cgo.go                   #   Centralized cgo CFLAGS/LDFLAGS for fdk-aac
    fdk_decoder.go               #   FDK AAC decoder (direct cgo wrapper)
    fdk_encoder.go               #   FDK AAC encoder (direct cgo wrapper)
    crossfade.go                 #   Equal-power cos/sin ramp
    metering.go                  #   Peak level computation + LinearToDBFS
  control/                       # REST API + state broadcast
    api.go                       #   HTTP handlers: cut, preview, state, sources, audio level/mute/AFV/master
    state.go                     #   StatePublisher (JSON serialize -> callback)
  transition/                      # Dissolve transition engine
    engine.go                      #   TransitionEngine lifecycle (start/ingest/complete/abort)
    blend.go                       #   RGB alpha blending (mix, dip, FTB)
    color.go                       #   BT.709 YUV420↔RGB colorspace conversion
    codec.go                       #   VideoDecoder/VideoEncoder interfaces + mocks
    types.go                       #   TransitionType/TransitionState constants
  output/                          # Recording + SRT output engine
    manager.go                     #   OutputManager: lifecycle, viewer, fan-out
    muxer.go                       #   TSMuxer: MPEG-TS muxing (go-astits)
    types.go                       #   OutputAdapter interface, status types
    viewer.go                      #   outputViewer (distribution.Viewer on program relay)
    recorder.go                    #   FileRecorder adapter (.ts file, rotation)
    srt_caller.go                  #   SRTCaller adapter (push mode, reconnect, overflow callback)
    srt_listener.go                #   SRTListener adapter (pull, N conns)
    srt_common.go                  #   Shared srtConn interface
    srt_wire.go                    #   Real srtgo connection wrappers
    ringbuf.go                     #   Ring buffer for SRT reconnection
    integration_test.go            #   End-to-end tests
  codec/                           # Video codec infrastructure + NALU/ADTS helpers
    ffmpeg_cgo.go                  #   FFmpeg cgo CFLAGS/LDFLAGS (libavcodec/libavutil)
    ffmpeg_encoder.go              #   FFmpegEncoder (x264/NVENC/VA-API/VideoToolbox)
    ffmpeg_decoder.go              #   FFmpegDecoder (H.264 software + HW)
    probe.go                       #   ProbeEncoders() startup auto-detection
    video.go                       #   NewVideoEncoder/NewVideoDecoder unified factories
    openh264_encoder.go            #   OpenH264 fallback encoder (build tag: openh264)
    openh264_decoder.go            #   OpenH264 fallback decoder (build tag: openh264)
    nalu.go                        #   AVC1↔Annex B conversion
    adts.go                        #   ADTS header construction
  demo/                            # Simulated camera sources for demo mode
    source.go                      #   StartSources(): N fake cameras at 30fps
  internal/                      # Shared types
    types.go                     #   ControlRoomState, SourceInfo, TallyStatus, AudioChannel
ui/                              # SvelteKit frontend (Svelte 5 + TypeScript)
  src/
    lib/
      prism/                     # Vendored Prism TS modules (transport, decode, render)
      api/                       # REST API client + TypeScript types
        types.ts                 #   ControlRoomState, SourceInfo, TallyStatus, AudioChannel types
        switch-api.ts            #   cut(), setPreview(), setLabel(), getState(), setLevel/Mute/AFV/Master
      state/                     # Reactive state management
        control-room.svelte.ts   #   Svelte 5 $state store with MoQ update handler
      keyboard/                  # Keyboard shortcut handler
        handler.ts               #   Capture-phase keydown with event.code
      transport/                 # WebTransport connection management
        connection.ts            #   Auto-retry WebTransport with REST polling fallback
        media-pipeline.ts        #   MoQ → decoder orchestrator (per-source)
      video/                     # Video playback and transition rendering
        playback.ts              #   Video playback manager (MoQ → decoder → buffer)
        dissolve.ts              #   WebGPU dissolve renderer + Canvas 2D fallback
        dissolve-fallback.ts     #   Canvas 2D dissolve/dip rendering
      audio/                     # Client-side audio
        pfl.ts                   #   PFL manager (per-source solo monitoring)
    components/                  # Svelte UI components
      Multiview.svelte           #   Source tile grid with tally outlines + canvas
      ProgramPreview.svelte      #   Large preview/program windows with canvas
      PreviewBus.svelte          #   Green preview source buttons
      ProgramBus.svelte          #   Red program source buttons
      TransitionControls.svelte  #   CUT / AUTO / FTB buttons
      SourceTile.svelte          #   Single source button with tally color + canvas
      AudioMixer.svelte          #   Channel strips: faders, VU meters, PFL/MUTE/AFV
      KeyboardOverlay.svelte     #   Keyboard shortcut reference (press ?)
      OutputControls.svelte        #   Header: REC button + SRT status + MODE toggle
      RecordingControl.svelte      #   Recording start/stop/status
      SRTOutputModal.svelte        #   SRT configuration modal
      SimpleMode.svelte            #   Volunteer-friendly layout (CUT/DISSOLVE + sources)
    lib/layout/                    # Layout mode management
      preferences.ts             #   URL param + localStorage detection/persistence
    routes/
      +page.svelte               #   Layout switcher (traditional/simple) + media pipeline
      +layout.svelte             #   Root layout (CSS import)
      +layout.ts                 #   SPA mode (no SSR, no prerender)
docs/
  plans/
    2026-03-03-mvp-design.md     # Approved MVP design (Phases 1-5)
    2026-03-03-phase1-implementation.md  # Phase 1 task breakdown (completed)
  tech-debt.md                   # Deferred review findings — READ THIS before Phase 2
charter.md                       # Project charter (vision, architecture, pricing, GTM)
phase0-findings.md               # Phase 0 research synthesis (15 areas)
phase0-research.md               # Original research task list
competitive-analysis.md          # 15 competitors analyzed
Makefile                         # Build chain: dev, build, docker, test-all, clean
Dockerfile                       # Multi-stage build (UI → Go → runtime)
.github/workflows/ci.yml         # GitHub Actions: lint, test-go, test-ui, docker
research/                        # Detailed research by topic
  browser-capabilities.md        #   Keyboard, WebGPU dissolve, tally borders
  deployment-infrastructure.md   #   Hosting comparison (Hetzner wins)
  legal-licensing-trademark.md   #   AGPL, trademark risk, domains
  market-and-audio-research.md   #   Church market data, audio crossfade techniques
```

## Reading Order for New Agents

1. **This file** — layout and conventions
2. **`docs/plans/2026-03-03-mvp-design.md`** — the approved design, all key decisions
3. **`docs/tech-debt.md`** — deferred issues, known limitations, what to fix next
4. **`phase0-findings.md`** — research context (skim sections relevant to your task)
5. **`charter.md`** — full vision (read if you need business/UX context)

## Current State (MVP Complete — Phases 1-5 + Polish)

- **Branch:** `main`
- **Tests:** 357 Go tests + 176 Vitest tests + 39 E2E tests passing with `-race`
- **What works:** Everything from Phases 1-5 + Simple Mode (volunteer-friendly layout), video/audio playback pipeline (MoQ → decoder → canvas), PFL audio decode + metering, FTB reverse toggle (smooth fade-in), recording file rotation (time + size), SRT wired to real zsiec/srtgo (pure Go), ring buffer overflow monitoring with reconnect callback, static file embedding (single binary), Dockerfile (multi-stage), GitHub Actions CI, Makefile with dev/build/docker/test targets, `make demo` with 4 simulated cameras (`--demo` flag)
- **What's stubbed:** Wipe transitions (post-MVP), graphics overlay, multi-destination SRT (v1.5), ISO per-source recording (v2.5), WebGPU dissolve (Canvas 2D fallback works)

## Key Architecture Decisions

- **Commands:** REST POST over HTTP/3 (NOT MoQ custom messages — spec says unknown types cause PROTOCOL_VIOLATION)
- **State broadcast:** MoQ "control" track with JSON (full snapshot per group for late-join)
- **Frame routing:** Per-source `sourceViewer` implements `distribution.Viewer`, tags frames with source key. Switcher forwards only program source's frames to program Relay.
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
- **Dissolve transitions:** Server-side FFmpeg decode → YUV420 blend → encode (High profile, medium preset). Returns to zero-CPU passthrough between transitions.
- **Transition engine:** Created per-transition, destroyed on complete/abort. Wall-clock frame pairing with smoothstep easing, output driven by incoming source. Encoder bitrate/fps derived from source stream statistics.
- **Blend colorspace:** YUV420 (BT.709 domain) matching hardware broadcast mixers (ATEM, Ross). Avoids costly YUV↔RGB round-trip.
- **T-bar control:** Throttled REST position updates (50ms/20Hz). HTTP/3 multiplexed on shared QUIC connection.
- **Resolution mismatch:** Pure Go bilinear scaler normalizes mismatched sources to program resolution during transitions. No new cgo dependencies.
- **Browser dissolve:** WebGPU shader + Canvas 2D fallback. Client-side preview only; server produces authoritative output.
- **Recording format:** MPEG-TS (.ts) -- crash-resilient (no moov atom), same muxer as SRT output.
- **SRT modes:** Both caller (push to platform) and listener (accept N pulls, max 8). srtgo is pure Go (no cgo).
- **Output lifecycle:** OutputManager auto-registers viewer on program relay when first output starts, removes when last stops. Zero CPU when inactive.
- **SRT reconnection:** Exponential backoff (1s->30s) with 4MB ring buffer. Resume from keyframe if overflow.
- **Shared codec:** `server/codec/` package: FFmpeg libavcodec cgo bindings (encoder + decoder), startup probe auto-detects best encoder (NVENC → VA-API → VideoToolbox → libx264 → OpenH264 fallback). Build tags: `cgo && !noffmpeg` for FFmpeg, `cgo && openh264` for OpenH264. Also provides AVC1↔Annex B NALU helpers used by output muxer.
- **Simple Mode:** Volunteer-friendly layout with just preview/program + source buttons + CUT/DISSOLVE. Layout mode detected from URL param (`?mode=simple`) > localStorage > default 'traditional'. Auto-persists URL param to localStorage.
- **Media pipeline:** Per-source MoQTransport → PrismVideoDecoder → VideoRenderBuffer → PrismRenderer (rAF loop). Audio via PrismAudioDecoder with AudioContext for PFL/metering.
- **FTB reverse:** Smooth fade-in from black using inverted blend position (`1.0 - pos`). New `TransitionFTBReverse` type.
- **Recording rotation:** Time-based (default 1h) and size-based. Sequential naming `program_YYYYMMDD_HHMMSS_NNN.ts`.
- **SRT wiring:** Function injection pattern — `srt_wire.go` provides real `srt.Dial()`/`srt.Listen()` wrappers, injected into OutputManager from `main.go`. Uses `zsiec/srtgo` (pure Go, no cgo).
- **Ring buffer overflow:** `onReconnect(overflowed bool)` callback on SRTCaller. OutputManager logs warning and broadcasts state on overflow.
- **Static file embedding:** Build tags (`embed_ui` / `!embed_ui`) with symlink for `//go:embed`. SPA file server with immutable cache headers for `/_app/immutable/*`.

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
3. Move resolved tech-debt items out of `docs/tech-debt.md`
4. Add new files to the repository layout
