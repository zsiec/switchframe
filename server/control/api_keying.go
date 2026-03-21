package control

import (
	"encoding/json"
	"fmt"
	"net/http"
	"regexp"
	"strconv"
	"strings"

	"github.com/zsiec/switchframe/server/control/httperr"
	"github.com/zsiec/switchframe/server/graphics"
)

// validColorHex matches exactly 6 uppercase or lowercase hex digits.
var validColorHex = regexp.MustCompile(`^[0-9A-Fa-f]{6}$`)

// validateAIBackground validates the aiBackground field.
// Accepted values: "" (empty), "transparent", "blur:N" (N in [1,50]),
// "color:RRGGBB" (valid 6-char hex), "source:KEY" (non-empty key).
func validateAIBackground(bg string) error {
	if bg == "" || bg == "transparent" {
		return nil
	}
	if strings.HasPrefix(bg, "blur:") {
		s := strings.TrimPrefix(bg, "blur:")
		n, err := strconv.Atoi(s)
		if err != nil || n < 1 || n > 50 {
			return fmt.Errorf("aiBackground blur radius must be an integer 1-50, got %q", s)
		}
		return nil
	}
	if strings.HasPrefix(bg, "color:") {
		hex := strings.TrimPrefix(bg, "color:")
		if !validColorHex.MatchString(hex) {
			return fmt.Errorf("aiBackground color must be 6 hex digits (RRGGBB), got %q", hex)
		}
		return nil
	}
	if strings.HasPrefix(bg, "source:") {
		key := strings.TrimPrefix(bg, "source:")
		if key == "" {
			return fmt.Errorf("aiBackground source key must not be empty")
		}
		return nil
	}
	return fmt.Errorf("aiBackground must be empty, 'transparent', 'blur:N', 'color:RRGGBB', or 'source:KEY', got %q", bg)
}

// registerKeyRoutes registers upstream key API routes on the given mux.
func (a *API) registerKeyRoutes(mux *http.ServeMux) {
	if a.keyer == nil {
		return
	}
	mux.HandleFunc("PUT /api/sources/{source}/key", a.handleSetSourceKey)
	mux.HandleFunc("GET /api/sources/{source}/key", a.handleGetSourceKey)
	mux.HandleFunc("DELETE /api/sources/{source}/key", a.handleDeleteSourceKey)
}

// handleSetSourceKey configures an upstream key for a source.
func (a *API) handleSetSourceKey(w http.ResponseWriter, r *http.Request) {
	source := r.PathValue("source")
	var cfg graphics.KeyConfig
	if err := json.NewDecoder(r.Body).Decode(&cfg); err != nil {
		httperr.Write(w, http.StatusBadRequest, "invalid json")
		return
	}
	switch cfg.Type {
	case graphics.KeyTypeChroma, graphics.KeyTypeLuma:
		// no extra validation needed beyond existing chroma/luma logic
	case graphics.KeyTypeAI:
		// Apply defaults for unset AI params.
		if cfg.AISensitivity == 0 {
			cfg.AISensitivity = 0.7
		}
		if cfg.AIEdgeSmooth == 0 {
			cfg.AIEdgeSmooth = 0.5
		}
		// Validate ranges.
		if cfg.AISensitivity < 0 || cfg.AISensitivity > 1 {
			httperr.Write(w, http.StatusBadRequest, "aiSensitivity must be between 0.0 and 1.0")
			return
		}
		if cfg.AIEdgeSmooth < 0 || cfg.AIEdgeSmooth > 1 {
			httperr.Write(w, http.StatusBadRequest, "aiEdgeSmooth must be between 0.0 and 1.0")
			return
		}
		if err := validateAIBackground(cfg.AIBackground); err != nil {
			httperr.Write(w, http.StatusBadRequest, err.Error())
			return
		}
	default:
		httperr.Write(w, http.StatusBadRequest, "type must be 'chroma', 'luma', or 'ai'")
		return
	}
	a.keyer.SetKey(source, cfg)
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(cfg)
}

// handleGetSourceKey returns the current key configuration for a source.
func (a *API) handleGetSourceKey(w http.ResponseWriter, r *http.Request) {
	source := r.PathValue("source")
	cfg, ok := a.keyer.GetKey(source)
	if !ok {
		httperr.Write(w, http.StatusNotFound, "no key configured for source")
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(cfg)
}

// handleDeleteSourceKey removes the key configuration for a source.
func (a *API) handleDeleteSourceKey(w http.ResponseWriter, r *http.Request) {
	source := r.PathValue("source")
	a.keyer.RemoveKey(source)
	if a.keyBridge != nil {
		a.keyBridge.RemoveFillSource(source)
	}
	w.WriteHeader(http.StatusNoContent)
}
