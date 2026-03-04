// server/cmd/switchframe/main.go
package main

import (
	"context"
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/zsiec/prism/distribution"
	"github.com/zsiec/switchframe/server/control"
	"github.com/zsiec/switchframe/server/internal"
	"github.com/zsiec/switchframe/server/switcher"
)

func main() {
	if err := run(); err != nil {
		fmt.Fprintf(os.Stderr, "error: %v\n", err)
		os.Exit(1)
	}
}

func run() error {
	ctx, cancel := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer cancel()

	slog.Info("switchframe starting")

	// Create program relay for switched output
	programRelay := distribution.NewRelay()

	// Create switcher
	sw := switcher.New(programRelay)

	// Create REST API
	api := control.NewAPI(sw)

	// Create state publisher (wired to MoQ in future)
	statePub := control.NewStatePublisher(func(data []byte) {
		slog.Debug("state published", "bytes", len(data))
	})

	// Wire state changes to publisher
	sw.OnStateChange(func(state internal.ControlRoomState) {
		statePub.Publish(state)
	})

	// Serve REST API
	mux := http.NewServeMux()
	api.RegisterOnMux(mux)

	addr := ":8080"
	slog.Info("listening", "addr", addr)

	srv := &http.Server{Addr: addr, Handler: mux}
	go func() {
		<-ctx.Done()
		srv.Close()
	}()

	return srv.ListenAndServe()
}
