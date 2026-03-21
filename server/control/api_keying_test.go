package control

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/zsiec/prism/distribution"
	"github.com/zsiec/switchframe/server/graphics"
	"github.com/zsiec/switchframe/server/switcher"
)

// setupKeyingTestAPI creates an API with a real KeyProcessor attached.
func setupKeyingTestAPI(t *testing.T) (*API, *graphics.KeyProcessor) {
	t.Helper()
	programRelay := distribution.NewRelay()
	sw := switcher.NewTestSwitcher(programRelay)
	kp := graphics.NewKeyProcessor()
	api := NewAPI(sw, WithKeyer(kp))
	return api, kp
}

// putKey sends PUT /api/sources/{source}/key with the given JSON body.
func putKey(t *testing.T, api *API, source, body string) *httptest.ResponseRecorder {
	t.Helper()
	req := httptest.NewRequest("PUT", fmt.Sprintf("/api/sources/%s/key", source), strings.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	api.Mux().ServeHTTP(rec, req)
	return rec
}

// TestSetKeyAI_Valid verifies that a well-formed AI key request returns 200
// and echoes the stored config back in the response body.
func TestSetKeyAI_Valid(t *testing.T) {
	api, kp := setupKeyingTestAPI(t)
	body := `{"type":"ai","enabled":true,"aiSensitivity":0.8,"aiEdgeSmooth":0.3,"aiBackground":"transparent"}`
	rec := putKey(t, api, "camera1", body)
	require.Equal(t, http.StatusOK, rec.Code, "body: %s", rec.Body.String())

	// Verify the stored config matches what we sent.
	cfg, ok := kp.GetKey("camera1")
	require.True(t, ok)
	require.Equal(t, graphics.KeyTypeAI, cfg.Type)
	require.True(t, cfg.Enabled)
	require.InDelta(t, 0.8, cfg.AISensitivity, 0.001)
	require.InDelta(t, 0.3, cfg.AIEdgeSmooth, 0.001)
	require.Equal(t, "transparent", cfg.AIBackground)

	// Verify the response body echoes the config.
	var returned graphics.KeyConfig
	require.NoError(t, json.NewDecoder(rec.Body).Decode(&returned))
	require.Equal(t, graphics.KeyTypeAI, returned.Type)
}

// TestSetKeyAI_DefaultsApplied checks that missing aiSensitivity and aiEdgeSmooth
// default to 0.7 and 0.5 respectively.
func TestSetKeyAI_DefaultsApplied(t *testing.T) {
	api, kp := setupKeyingTestAPI(t)
	body := `{"type":"ai","enabled":true}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusOK, rec.Code, "body: %s", rec.Body.String())

	cfg, ok := kp.GetKey("cam1")
	require.True(t, ok)
	require.InDelta(t, 0.7, cfg.AISensitivity, 0.001, "default sensitivity should be 0.7")
	require.InDelta(t, 0.5, cfg.AIEdgeSmooth, 0.001, "default edge smooth should be 0.5")
}

// TestSetKeyAI_InvalidSensitivity verifies that aiSensitivity > 1.0 returns 400.
func TestSetKeyAI_InvalidSensitivity(t *testing.T) {
	api, _ := setupKeyingTestAPI(t)
	body := `{"type":"ai","enabled":true,"aiSensitivity":1.5}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusBadRequest, rec.Code, "body: %s", rec.Body.String())
}

// TestSetKeyAI_InvalidSensitivityNegative verifies that negative aiSensitivity returns 400.
func TestSetKeyAI_InvalidSensitivityNegative(t *testing.T) {
	api, _ := setupKeyingTestAPI(t)
	body := `{"type":"ai","enabled":true,"aiSensitivity":-0.1}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusBadRequest, rec.Code, "body: %s", rec.Body.String())
}

// TestSetKeyAI_InvalidEdgeSmooth verifies that aiEdgeSmooth > 1.0 returns 400.
func TestSetKeyAI_InvalidEdgeSmooth(t *testing.T) {
	api, _ := setupKeyingTestAPI(t)
	body := `{"type":"ai","enabled":true,"aiEdgeSmooth":2.0}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusBadRequest, rec.Code, "body: %s", rec.Body.String())
}

// TestSetKeyAI_InvalidBackground verifies that an unrecognized aiBackground returns 400.
func TestSetKeyAI_InvalidBackground(t *testing.T) {
	api, _ := setupKeyingTestAPI(t)
	body := `{"type":"ai","enabled":true,"aiBackground":"invalid"}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusBadRequest, rec.Code, "body: %s", rec.Body.String())
}

// TestSetKeyAI_ValidBackgroundModes tests all accepted aiBackground values.
func TestSetKeyAI_ValidBackgroundModes(t *testing.T) {
	tests := []struct {
		name string
		bg   string
	}{
		{"empty", ""},
		{"transparent", "transparent"},
		{"blur low", "blur:1"},
		{"blur mid", "blur:10"},
		{"blur high", "blur:50"},
		{"color red", "color:FF0000"},
		{"color lowercase", "color:ff0000"},
		{"color mixed", "color:Ff00Aa"},
		{"source key", "source:cam2"},
		{"source key with colon", "source:srt:camera1"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			api, kp := setupKeyingTestAPI(t)
			body := fmt.Sprintf(`{"type":"ai","enabled":true,"aiBackground":%q}`, tt.bg)
			rec := putKey(t, api, "cam1", body)
			require.Equal(t, http.StatusOK, rec.Code, "bg=%q body: %s", tt.bg, rec.Body.String())

			cfg, ok := kp.GetKey("cam1")
			require.True(t, ok)
			require.Equal(t, tt.bg, cfg.AIBackground)
		})
	}
}

// TestSetKeyAI_InvalidBackgroundModes tests rejected aiBackground values.
func TestSetKeyAI_InvalidBackgroundModes(t *testing.T) {
	tests := []struct {
		name string
		bg   string
	}{
		{"plain string", "invalid"},
		{"blur zero", "blur:0"},
		{"blur negative", "blur:-1"},
		{"blur too high", "blur:51"},
		{"blur non-int", "blur:abc"},
		{"color too short", "color:FF00"},
		{"color too long", "color:FF0000FF"},
		{"color non-hex", "color:ZZZZZZ"},
		{"source empty key", "source:"},
		{"just colon", ":transparent"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			api, _ := setupKeyingTestAPI(t)
			body := fmt.Sprintf(`{"type":"ai","enabled":true,"aiBackground":%q}`, tt.bg)
			rec := putKey(t, api, "cam1", body)
			require.Equal(t, http.StatusBadRequest, rec.Code, "bg=%q should be rejected; body: %s", tt.bg, rec.Body.String())
		})
	}
}

// TestSetKeyChroma_StillWorks verifies chroma keying is unaffected by the new AI type.
func TestSetKeyChroma_StillWorks(t *testing.T) {
	api, kp := setupKeyingTestAPI(t)
	body := `{"type":"chroma","enabled":true,"keyColorY":81,"keyColorCb":90,"keyColorCr":240,"similarity":0.4}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusOK, rec.Code, "body: %s", rec.Body.String())

	cfg, ok := kp.GetKey("cam1")
	require.True(t, ok)
	require.Equal(t, graphics.KeyTypeChroma, cfg.Type)
	require.InDelta(t, 0.4, cfg.Similarity, 0.001)
}

// TestSetKeyLuma_StillWorks verifies luma keying is unaffected by the new AI type.
func TestSetKeyLuma_StillWorks(t *testing.T) {
	api, kp := setupKeyingTestAPI(t)
	body := `{"type":"luma","enabled":true,"lowClip":0.1,"highClip":0.9}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusOK, rec.Code, "body: %s", rec.Body.String())

	cfg, ok := kp.GetKey("cam1")
	require.True(t, ok)
	require.Equal(t, graphics.KeyTypeLuma, cfg.Type)
}

// TestSetKey_UnknownTypeReturns400 verifies that an unknown key type returns 400.
func TestSetKey_UnknownTypeReturns400(t *testing.T) {
	api, _ := setupKeyingTestAPI(t)
	body := `{"type":"magic","enabled":true}`
	rec := putKey(t, api, "cam1", body)
	require.Equal(t, http.StatusBadRequest, rec.Code)
}
