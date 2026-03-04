# Switchframe

Browser-based live video switcher built on [Prism](https://github.com/zsiec/prism). Target market: houses of worship.

## Quick Start

```bash
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
      video/                     # Video playback
        playback.ts              #   Video playback manager (MoQ → decoder → buffer)
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
    routes/
      +page.svelte               #   Traditional broadcast layout
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

## Current State (Phase 3 Complete)

- **Branch:** `phase3-video-audio` (34 commits ahead of phase2-browser-ui)
- **Tests:** 119 Go tests + 66 Vitest tests + 15 E2E tests passing with `-race`
- **What works:** Everything from Phases 1-2 + live MoQ video in multiview tiles and program/preview windows, server-side audio mixer with passthrough optimization, FDK AAC decode/encode via cgo, per-channel level/mute/AFV, equal-power crossfade on cut, PFL monitoring, VU metering, audio REST API, WebTransport connection manager with REST polling fallback, AudioMixer UI with channel strips and faders
- **What's stubbed:** Dissolve/wipe transitions (Phase 4), recording/SRT output (Phase 5), graphics overlay

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

## Prism Dependency

Prism lives at `/Users/zsiec/dev/prism` and is referenced via `replace` directive in `server/go.mod`. One commit was added to Prism: `ExtraRoutes` field in `ServerConfig` + call in `registerAPIRoutes`.

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
