// server/control/state_test.go
package control

import (
	"encoding/json"
	"testing"

	"github.com/zsiec/switchframe/server/internal"
)

func TestStatePublisherEncodesJSON(t *testing.T) {
	var published []byte
	pub := NewStatePublisher(func(data []byte) {
		published = data
	})

	state := internal.ControlRoomState{
		ProgramSource: "camera1",
		PreviewSource: "camera2",
		Seq:           1,
		Timestamp:     1709500000000,
		TallyState: map[string]internal.TallyStatus{
			"camera1": internal.TallyProgram,
			"camera2": internal.TallyPreview,
		},
		Sources: map[string]internal.SourceInfo{
			"camera1": {Key: "camera1", Status: internal.SourceHealthy},
		},
	}

	pub.Publish(state)

	if published == nil {
		t.Fatal("nothing published")
	}

	var decoded internal.ControlRoomState
	if err := json.Unmarshal(published, &decoded); err != nil {
		t.Fatalf("unmarshal: %v", err)
	}
	if decoded.ProgramSource != "camera1" {
		t.Errorf("ProgramSource = %q, want %q", decoded.ProgramSource, "camera1")
	}
	if decoded.Seq != 1 {
		t.Errorf("Seq = %d, want 1", decoded.Seq)
	}
}

func TestStatePublisherSequentialPublishes(t *testing.T) {
	var count int
	pub := NewStatePublisher(func(data []byte) {
		count++
	})
	for i := 0; i < 5; i++ {
		pub.Publish(internal.ControlRoomState{Seq: uint64(i)})
	}
	if count != 5 {
		t.Errorf("published %d times, want 5", count)
	}
}
