package switcher

import (
	"sync"
	"time"

	"github.com/zsiec/switchframe/server/internal"
)

const (
	staleThreshold    = 1 * time.Second
	noSignalThreshold = 2 * time.Second
	offlineThreshold  = 10 * time.Second
)

func healthStatusFromAge(age time.Duration) internal.SourceHealthStatus {
	switch {
	case age >= offlineThreshold:
		return internal.SourceOffline
	case age >= noSignalThreshold:
		return internal.SourceNoSignal
	case age >= staleThreshold:
		return internal.SourceStale
	default:
		return internal.SourceHealthy
	}
}

type healthMonitor struct {
	mu        sync.RWMutex
	lastFrame map[string]time.Time
	stopCh    chan struct{}
	callback  func(internal.ControlRoomState)
}

func newHealthMonitor(callback func(internal.ControlRoomState)) *healthMonitor {
	return &healthMonitor{
		lastFrame: make(map[string]time.Time),
		stopCh:    make(chan struct{}),
		callback:  callback,
	}
}

func (hm *healthMonitor) recordFrame(sourceKey string) {
	hm.mu.Lock()
	hm.lastFrame[sourceKey] = time.Now()
	hm.mu.Unlock()
}

func (hm *healthMonitor) status(sourceKey string) internal.SourceHealthStatus {
	hm.mu.RLock()
	lastTime, ok := hm.lastFrame[sourceKey]
	hm.mu.RUnlock()
	if !ok {
		return internal.SourceOffline
	}
	return healthStatusFromAge(time.Since(lastTime))
}

func (hm *healthMonitor) removeSource(sourceKey string) {
	hm.mu.Lock()
	delete(hm.lastFrame, sourceKey)
	hm.mu.Unlock()
}

func (hm *healthMonitor) stop() {
	select {
	case <-hm.stopCh:
	default:
		close(hm.stopCh)
	}
}
