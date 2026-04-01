#!/usr/bin/env bash
# bett-code launcher
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
exec bun run "$DIR/src/entrypoints/cli.tsx" "$@"
