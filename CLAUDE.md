# Switchframe

Browser-based live video switcher built on [Prism](https://github.com/zsiec/prism). Target market: houses of worship.

## Quick Start

```bash
cd server && go build ./cmd/switchframe    # build
cd server && go test ./... -race           # test
make build                                 # build to bin/switchframe
```

## Repository Layout

```
server/                          # Go module (github.com/zsiec/switchframe/server)
  cmd/switchframe/main.go        # Binary entry point (standalone HTTP on :8080)
  switcher/                      # Core switching engine
    switcher.go                  #   State machine: Cut(), SetPreview(), frame routing
    source_viewer.go             #   Per-source Viewer proxy (tags frames with source key)
    health.go                    #   Source health monitor (stale/no_signal/offline)
    integration_test.go          #   End-to-end tests: source relay -> switcher -> program relay
  control/                       # REST API + state broadcast
    api.go                       #   HTTP handlers: POST /api/switch/cut, /preview, GET /state, /sources
    state.go                     #   StatePublisher (JSON serialize -> callback)
  internal/                      # Shared types
    types.go                     #   ControlRoomState, SourceInfo, TallyStatus, SourceHealthStatus
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

## Current State (Phase 1 Complete)

- **Branch:** `phase1-server-switcher` (11 commits ahead of main)
- **Tests:** 33 passing with `-race`
- **What works:** Register sources, cut between them (keyframe-gated), audio-follows-video, REST API, health monitoring, state broadcast via callback
- **What's stubbed:** Transition endpoint returns 501, MoQ state publisher uses debug log callback, main.go runs standalone HTTP (not wired to Prism server)

## Key Architecture Decisions

- **Commands:** REST POST over HTTP/3 (NOT MoQ custom messages — spec says unknown types cause PROTOCOL_VIOLATION)
- **State broadcast:** MoQ "control" track with JSON (full snapshot per group for late-join)
- **Frame routing:** Per-source `sourceViewer` implements `distribution.Viewer`, tags frames with source key. Switcher forwards only program source's frames to program Relay.
- **Keyframe gating:** After a cut, video+audio are gated until first IDR from new source to prevent decoder artifacts.
- **Prism extension:** `ServerConfig.ExtraRoutes` added to Prism for mounting Switchframe's REST API on Prism's mux.

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
