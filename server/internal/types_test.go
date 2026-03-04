// server/internal/types_test.go
package internal

import (
	"encoding/json"
	"testing"
)

func TestControlRoomStateJSON(t *testing.T) {
	state := ControlRoomState{
		ProgramSource:        "camera1",
		PreviewSource:        "camera2",
		TransitionType:       "cut",
		TransitionDurationMs: 0,
		TransitionPosition:   0.0,
		InTransition:         false,
		AudioLevels:          map[string]float64{"camera1": -3.0},
		TallyState:           map[string]TallyStatus{"camera1": TallyProgram, "camera2": TallyPreview},
		Sources:              map[string]SourceInfo{"camera1": {Key: "camera1", Status: SourceHealthy}},
		Seq:                  1,
		Timestamp:            1709500000000,
	}

	data, err := json.Marshal(state)
	if err != nil {
		t.Fatalf("marshal: %v", err)
	}

	var decoded ControlRoomState
	if err := json.Unmarshal(data, &decoded); err != nil {
		t.Fatalf("unmarshal: %v", err)
	}

	if decoded.ProgramSource != "camera1" {
		t.Errorf("ProgramSource = %q, want %q", decoded.ProgramSource, "camera1")
	}
	if decoded.TallyState["camera1"] != TallyProgram {
		t.Errorf("TallyState[camera1] = %q, want %q", decoded.TallyState["camera1"], TallyProgram)
	}
	if decoded.Sources["camera1"].Status != SourceHealthy {
		t.Errorf("Sources[camera1].Status = %q, want %q", decoded.Sources["camera1"].Status, SourceHealthy)
	}
}

func TestSourceInfoHealthStatus(t *testing.T) {
	tests := []struct {
		name   string
		status SourceHealthStatus
		want   string
	}{
		{"healthy", SourceHealthy, "healthy"},
		{"stale", SourceStale, "stale"},
		{"no_signal", SourceNoSignal, "no_signal"},
		{"offline", SourceOffline, "offline"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			si := SourceInfo{Key: "cam1", Status: tt.status}
			data, _ := json.Marshal(si)
			var decoded SourceInfo
			json.Unmarshal(data, &decoded)
			if decoded.Status != tt.status {
				t.Errorf("got %q, want %q", decoded.Status, tt.status)
			}
		})
	}
}
