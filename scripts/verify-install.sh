#!/usr/bin/env bash
# verify-install.sh — post-install health check for bett-ai-harness.
#
# Verifies that:
#   1. bett-ai-harness binary is on PATH and runs
#   2. At least one of the supported agents (opencode, claude) is installed
#   3. engram binary is available (needed for persistent memory)
#   4. Node.js is available (needed for some agent integrations)
#
# Exits 0 if the ecosystem is healthy, non-zero with remediation hints otherwise.

set -euo pipefail

ok()   { printf '\033[1;32m✓\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m!\033[0m %s\n' "$*"; }
err()  { printf '\033[1;31m✗\033[0m %s\n' "$*" >&2; }
hdr()  { printf '\n\033[1;35m== %s ==\033[0m\n' "$*"; }

failures=0

hdr "bett-ai-harness binary"
if command -v bett-ai-harness >/dev/null 2>&1; then
  BIN="$(command -v bett-ai-harness)"
  ok "binary found at $BIN"
  if version="$(bett-ai-harness --version 2>&1 || true)" && [[ -n "$version" ]]; then
    ok "version: $version"
  else
    warn "bett-ai-harness --version returned no output"
    failures=$((failures+1))
  fi
else
  err "bett-ai-harness is not on PATH"
  err "  → Re-run install.sh, or add INSTALL_DIR to PATH"
  failures=$((failures+1))
fi

hdr "Supported agents"
agent_found=0
for bin in opencode claude; do
  if command -v "$bin" >/dev/null 2>&1; then
    ok "$bin: $(command -v $bin)"
    agent_found=1
  else
    warn "$bin: not installed"
  fi
done
if [[ "$agent_found" == "0" ]]; then
  err "No supported agents installed"
  err "  → Install OpenCode: https://opencode.ai"
  err "  → Install Claude Code: https://claude.ai/download"
  failures=$((failures+1))
fi

hdr "Engram persistent memory"
if command -v engram >/dev/null 2>&1; then
  ok "engram: $(command -v engram)"
else
  warn "engram binary not found"
  warn "  → Install via Homebrew: brew install gentleman-programming/tap/engram"
  warn "  → Or via Go: go install github.com/gentleman-programming/engram@latest"
  failures=$((failures+1))
fi

hdr "Node.js (for plugin runtimes)"
if command -v node >/dev/null 2>&1; then
  ver="$(node --version)"
  major="${ver#v}"
  major="${major%%.*}"
  if [[ "$major" -ge 18 ]]; then
    ok "node $ver (>= 18 required)"
  else
    warn "node $ver is below the required 18.x"
    failures=$((failures+1))
  fi
else
  warn "node not found (optional; only needed for some agent plugins)"
fi

hdr "Result"
if [[ "$failures" -eq 0 ]]; then
  ok "All checks passed. Run 'bett-ai-harness' to launch the TUI."
  exit 0
else
  err "$failures check(s) failed. See remediation hints above."
  exit 1
fi
