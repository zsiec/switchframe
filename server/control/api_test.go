package control

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/zsiec/prism/distribution"
	"github.com/zsiec/switchframe/server/internal"
	"github.com/zsiec/switchframe/server/switcher"
)

func setupTestAPI(t *testing.T) (*API, *switcher.Switcher) {
	t.Helper()
	programRelay := distribution.NewRelay()
	sw := switcher.New(programRelay)
	r1 := distribution.NewRelay()
	sw.RegisterSource("camera1", r1)
	r2 := distribution.NewRelay()
	sw.RegisterSource("camera2", r2)
	api := NewAPI(sw)
	return api, sw
}

func TestCutEndpoint(t *testing.T) {
	api, sw := setupTestAPI(t)
	sw.Cut("camera1")
	body := `{"source":"camera2"}`
	req := httptest.NewRequest("POST", "/api/switch/cut", strings.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	api.Mux().ServeHTTP(rec, req)
	if rec.Code != http.StatusOK {
		t.Fatalf("status = %d, want %d; body: %s", rec.Code, http.StatusOK, rec.Body.String())
	}
	state := sw.State()
	if state.ProgramSource != "camera2" {
		t.Errorf("ProgramSource = %q, want %q", state.ProgramSource, "camera2")
	}
}

func TestCutToMissingSourceReturns409(t *testing.T) {
	api, _ := setupTestAPI(t)
	body := `{"source":"nonexistent"}`
	req := httptest.NewRequest("POST", "/api/switch/cut", strings.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	api.Mux().ServeHTTP(rec, req)
	if rec.Code != http.StatusConflict {
		t.Fatalf("status = %d, want %d", rec.Code, http.StatusConflict)
	}
}

func TestPreviewEndpoint(t *testing.T) {
	api, sw := setupTestAPI(t)
	body := `{"source":"camera1"}`
	req := httptest.NewRequest("POST", "/api/switch/preview", strings.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	api.Mux().ServeHTTP(rec, req)
	if rec.Code != http.StatusOK {
		t.Fatalf("status = %d, want %d", rec.Code, http.StatusOK)
	}
	state := sw.State()
	if state.PreviewSource != "camera1" {
		t.Errorf("PreviewSource = %q, want %q", state.PreviewSource, "camera1")
	}
}

func TestStateEndpoint(t *testing.T) {
	api, sw := setupTestAPI(t)
	sw.Cut("camera1")
	req := httptest.NewRequest("GET", "/api/switch/state", nil)
	rec := httptest.NewRecorder()
	api.Mux().ServeHTTP(rec, req)
	if rec.Code != http.StatusOK {
		t.Fatalf("status = %d, want %d", rec.Code, http.StatusOK)
	}
	var state internal.ControlRoomState
	if err := json.NewDecoder(rec.Body).Decode(&state); err != nil {
		t.Fatalf("decode: %v", err)
	}
	if state.ProgramSource != "camera1" {
		t.Errorf("ProgramSource = %q, want %q", state.ProgramSource, "camera1")
	}
}

func TestSourcesEndpoint(t *testing.T) {
	api, _ := setupTestAPI(t)
	req := httptest.NewRequest("GET", "/api/sources", nil)
	rec := httptest.NewRecorder()
	api.Mux().ServeHTTP(rec, req)
	if rec.Code != http.StatusOK {
		t.Fatalf("status = %d, want %d", rec.Code, http.StatusOK)
	}
	var sources map[string]internal.SourceInfo
	if err := json.NewDecoder(rec.Body).Decode(&sources); err != nil {
		t.Fatalf("decode: %v", err)
	}
	if len(sources) != 2 {
		t.Errorf("got %d sources, want 2", len(sources))
	}
}
