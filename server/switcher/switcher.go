// Package switcher implements the core video switching state machine.
// It receives tagged frames from sourceViewer proxies and forwards only
// the current program source's frames to the program Relay.
package switcher

import (
	"fmt"
	"sync"
	"time"

	"github.com/zsiec/prism/distribution"
	"github.com/zsiec/prism/media"
	"github.com/zsiec/switchframe/server/internal"
)

// sourceState tracks a registered source and its Relay/viewer pair.
type sourceState struct {
	key    string
	relay  *distribution.Relay
	viewer *sourceViewer
}

// Switcher is the central switching engine. It manages which source is
// on-program (live output) and which is on-preview, maintains tally state,
// and routes frames from the program source to the program Relay.
type Switcher struct {
	mu            sync.RWMutex
	sources       map[string]*sourceState
	programSource string
	previewSource string
	programRelay  *distribution.Relay
	seq           uint64
	stateCallback func(internal.ControlRoomState)
}

// Compile-time check that Switcher implements the frameHandler interface.
var _ frameHandler = (*Switcher)(nil)

// New creates a Switcher that forwards program frames to programRelay.
func New(programRelay *distribution.Relay) *Switcher {
	return &Switcher{
		sources:      make(map[string]*sourceState),
		programRelay: programRelay,
	}
}

// OnStateChange registers a callback that is invoked (under lock) whenever
// the switcher state changes. This is used to push state updates to the
// MoQ control track.
func (s *Switcher) OnStateChange(cb func(internal.ControlRoomState)) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.stateCallback = cb
}

// RegisterSource adds a source to the switcher. A sourceViewer proxy is
// created and attached to the source's Relay so that frames flow into the
// Switcher's handleVideoFrame/handleAudioFrame methods tagged with the
// source key.
func (s *Switcher) RegisterSource(key string, relay *distribution.Relay) {
	s.mu.Lock()
	defer s.mu.Unlock()
	viewer := newSourceViewer(key, s)
	relay.AddViewer(viewer)
	s.sources[key] = &sourceState{key: key, relay: relay, viewer: viewer}
}

// UnregisterSource removes a source from the switcher and detaches its
// viewer from the source Relay. If the removed source was on program or
// preview, those fields are cleared.
func (s *Switcher) UnregisterSource(key string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	ss, ok := s.sources[key]
	if !ok {
		return
	}
	ss.relay.RemoveViewer(ss.viewer.ID())
	delete(s.sources, key)
	if s.programSource == key {
		s.programSource = ""
	}
	if s.previewSource == key {
		s.previewSource = ""
	}
}

// Cut performs a hard cut to the named source, making it the program output.
// The previous program source is automatically moved to preview. If the
// source is already on program, Cut is a no-op (Seq is not incremented).
func (s *Switcher) Cut(sourceKey string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	if _, ok := s.sources[sourceKey]; !ok {
		return fmt.Errorf("source %q not found", sourceKey)
	}
	if s.programSource == sourceKey {
		return nil // already on program — no-op
	}
	oldProgram := s.programSource
	s.programSource = sourceKey
	if oldProgram != "" {
		s.previewSource = oldProgram
	}
	s.seq++
	s.notifyStateChange()
	return nil
}

// SetPreview sets the preview source. This does not affect the program output.
func (s *Switcher) SetPreview(sourceKey string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	if _, ok := s.sources[sourceKey]; !ok {
		return fmt.Errorf("source %q not found", sourceKey)
	}
	s.previewSource = sourceKey
	s.seq++
	s.notifyStateChange()
	return nil
}

// State returns a snapshot of the current control room state.
func (s *Switcher) State() internal.ControlRoomState {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.buildStateLocked()
}

// SourceKeys returns the keys of all registered sources.
func (s *Switcher) SourceKeys() []string {
	s.mu.RLock()
	defer s.mu.RUnlock()
	keys := make([]string, 0, len(s.sources))
	for k := range s.sources {
		keys = append(keys, k)
	}
	return keys
}

// buildStateLocked constructs a ControlRoomState snapshot. Caller must hold
// at least s.mu.RLock().
func (s *Switcher) buildStateLocked() internal.ControlRoomState {
	tally := make(map[string]internal.TallyStatus, len(s.sources))
	sources := make(map[string]internal.SourceInfo, len(s.sources))
	for key := range s.sources {
		tally[key] = internal.TallyIdle
		sources[key] = internal.SourceInfo{Key: key, Status: internal.SourceHealthy}
	}
	if s.programSource != "" {
		tally[s.programSource] = internal.TallyProgram
	}
	if s.previewSource != "" && s.previewSource != s.programSource {
		tally[s.previewSource] = internal.TallyPreview
	}
	return internal.ControlRoomState{
		ProgramSource:  s.programSource,
		PreviewSource:  s.previewSource,
		TransitionType: "cut",
		TallyState:     tally,
		Sources:        sources,
		Seq:            s.seq,
		Timestamp:      time.Now().UnixMilli(),
	}
}

// notifyStateChange calls the registered state callback, if any. Caller
// must hold s.mu (write lock).
func (s *Switcher) notifyStateChange() {
	if s.stateCallback != nil {
		s.stateCallback(s.buildStateLocked())
	}
}

// handleVideoFrame implements frameHandler. It is called by sourceViewers
// when a video frame arrives from a source. Only frames from the current
// program source are forwarded to the program Relay.
func (s *Switcher) handleVideoFrame(sourceKey string, frame *media.VideoFrame) {
	s.mu.RLock()
	isProgram := s.programSource == sourceKey
	s.mu.RUnlock()
	if !isProgram {
		return
	}
	s.programRelay.BroadcastVideo(frame)
}

// handleAudioFrame implements frameHandler. It is called by sourceViewers
// when an audio frame arrives from a source. Only frames from the current
// program source are forwarded to the program Relay.
func (s *Switcher) handleAudioFrame(sourceKey string, frame *media.AudioFrame) {
	s.mu.RLock()
	isProgram := s.programSource == sourceKey
	s.mu.RUnlock()
	if !isProgram {
		return
	}
	s.programRelay.BroadcastAudio(frame)
}
