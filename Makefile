.PHONY: build test lint dev

build:
	cd server && go build -o ../bin/switchframe ./cmd/switchframe

test:
	cd server && go test ./... -v -race

lint:
	cd server && golangci-lint run ./...

dev: build
	./bin/switchframe
