package switcher

import (
	"testing"
	"time"

	"github.com/zsiec/switchframe/server/internal"
)

func TestHealthStatusFromAge(t *testing.T) {
	tests := []struct {
		name string
		age  time.Duration
		want internal.SourceHealthStatus
	}{
		{"fresh", 500 * time.Millisecond, internal.SourceHealthy},
		{"stale", 1500 * time.Millisecond, internal.SourceStale},
		{"no_signal", 5 * time.Second, internal.SourceNoSignal},
		{"offline", 15 * time.Second, internal.SourceOffline},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := healthStatusFromAge(tt.age)
			if got != tt.want {
				t.Errorf("healthStatusFromAge(%v) = %q, want %q", tt.age, got, tt.want)
			}
		})
	}
}

func TestHealthMonitorRecordAndStatus(t *testing.T) {
	hm := newHealthMonitor(nil)
	hm.recordFrame("camera1")
	status := hm.status("camera1")
	if status != internal.SourceHealthy {
		t.Errorf("status = %q, want %q", status, internal.SourceHealthy)
	}
	hm.stop()
}

func TestHealthMonitorStaleAfterNoFrames(t *testing.T) {
	hm := newHealthMonitor(nil)
	hm.mu.Lock()
	hm.lastFrame["camera1"] = time.Now().Add(-3 * time.Second)
	hm.mu.Unlock()
	status := hm.status("camera1")
	if status != internal.SourceNoSignal {
		t.Errorf("status = %q, want %q", status, internal.SourceNoSignal)
	}
	hm.stop()
}

func TestHealthMonitorUnknownSource(t *testing.T) {
	hm := newHealthMonitor(nil)
	status := hm.status("nonexistent")
	if status != internal.SourceOffline {
		t.Errorf("status = %q, want %q", status, internal.SourceOffline)
	}
	hm.stop()
}
