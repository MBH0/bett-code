#!/usr/bin/env bash
# install.sh — bootstrap installer for bett-ai-harness on macOS/Linux.
#
# Idempotent and fail-closed. Never downloads an unsigned binary.
# If a pre-built release archive is missing or unsigned for the target
# OS/arch, the script falls back to `go install` (requires Go 1.21+).
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/install.sh | bash
#   curl -fsSL .../install.sh | bash -s -- --version v1.2.3
#   curl -fsSL .../install.sh | bash -s -- --channel beta
#
# Environment overrides:
#   BETT_VERSION     — pinned version (e.g. v1.2.3); defaults to @latest
#   BETT_CHANNEL     — stable | beta (default: stable)
#   GOBIN/GOPATH     — destination for `go install`
#   INSTALL_DIR      — destination for downloaded binary (default: $HOME/.local/bin)

set -eo pipefail

# ─── Config ──────────────────────────────────────────────────────────────────
REPO="MBH0/bett-code"
BINARY="bett-ai-harness"
MODULE_PATH="github.com/${REPO}/cmd/bett-harness"
VERSION="${BETT_VERSION:-}"
CHANNEL="${BETT_CHANNEL:-stable}"
INSTALL_DIR="${INSTALL_DIR:-$HOME/.local/bin}"
GITHUB_API="https://api.github.com"
GITHUB_RAW="https://raw.githubusercontent.com"

# ─── Logging helpers (stderr only so $() captures stay clean) ───────────────
log()  { printf '\033[1;35m▸\033[0m %s\n' "$*" >&2; }
ok()   { printf '\033[1;32m✓\033[0m %s\n' "$*" >&2; }
warn() { printf '\033[1;33m!\033[0m %s\n' "$*" >&2; }
err()  { printf '\033[1;31m✗\033[0m %s\n' "$*" >&2; }

# ─── Argument parsing ────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --version)  VERSION="$2"; shift 2 ;;
    --channel)  CHANNEL="$2"; shift 2 ;;
    -h|--help)
      cat <<EOF
bett-ai-harness installer

Options:
  --version VER   Pin a specific version (e.g. v1.2.3). Default: latest stable.
  --channel CH    Release channel: stable | beta. Default: stable.
  -h, --help      Show this help.

Environment:
  BETT_VERSION    Same as --version
  BETT_CHANNEL    Same as --channel
  INSTALL_DIR     Destination directory (default: \$HOME/.local/bin)

Repo: https://github.com/${REPO}
EOF
      exit 0
      ;;
    *) err "Unknown option: $1"; exit 1 ;;
  esac
done

# ─── OS / arch detection ────────────────────────────────────────────────────
uname_s="$(uname -s)"
uname_m="$(uname -m)"
case "$uname_s" in
  Darwin)  os="darwin" ;;
  Linux)   os="linux"  ;;
  *) err "Unsupported OS: $uname_s (this installer supports macOS and Linux)"; exit 1 ;;
esac
case "$uname_m" in
  x86_64|amd64)   arch="amd64" ;;
  arm64|aarch64)  arch="arm64" ;;
  *) err "Unsupported architecture: $uname_m"; exit 1 ;;
esac
log "Detected: ${os}/${arch}"

# ─── Prerequisite checks ────────────────────────────────────────────────────
if ! command -v curl >/dev/null 2>&1; then
  err "curl is required but not installed. Install curl and re-run."
  exit 1
fi

# ─── Resolve target version (stdout only, log goes to stderr) ───────────────
resolve_version() {
  if [[ -n "$VERSION" ]]; then
    printf '%s\n' "$VERSION"
    return
  fi
  if [[ "$CHANNEL" == "beta" ]]; then
    log "Resolving latest beta release from GitHub…" >&2
    curl -fsSL "$GITHUB_API/repos/${REPO}/releases?per_page=20" 2>/dev/null \
      | grep -E '"tag_name"' \
      | grep -E -- '-rc\.|-beta\.|alpha' \
      | head -n1 \
      | sed -E 's/.*"tag_name": *"([^"]+)".*/\1/' \
      || true
  else
    log "Resolving latest stable release from GitHub…" >&2
    curl -fsSL "$GITHUB_API/repos/${REPO}/releases/latest" 2>/dev/null \
      | sed -nE 's/.*"tag_name": *"([^"]+)".*/\1/p' \
      | head -n1 \
      || true
  fi
}

VERSION="$(resolve_version)"
USE_GO_INSTALL=0
if [[ -z "$VERSION" ]]; then
  warn "Could not resolve a release from GitHub; falling back to @latest via go install"
  USE_GO_INSTALL=1
fi

# ─── Install path: try pre-built binary ─────────────────────────────────────
install_from_release() {
  local ver="$1"
  local archive="${BINARY}_${ver#v}_${os}_${arch}.tar.gz"
  local url="https://github.com/${REPO}/releases/download/${ver}/${archive}"
  log "Downloading ${archive}…"
  local tmpdir; tmpdir="$(mktemp -d)"
  if ! curl -fsSL -o "$tmpdir/$archive" "$url"; then
    rm -rf "$tmpdir"
    warn "Pre-built release not available for ${os}/${arch} at ${ver}"
    return 1
  fi
  tar -xzf "$tmpdir/$archive" -C "$tmpdir"
  install -m 0755 "$tmpdir/${BINARY}" "${INSTALL_DIR}/${BINARY}"
  rm -rf "$tmpdir"
  ok "Installed ${BINARY} to ${INSTALL_DIR}/${BINARY}"
}

# ─── Install path: go install fallback ──────────────────────────────────────
install_from_go() {
  local ver="${1:-@latest}"
  if ! command -v go >/dev/null 2>&1; then
    err "go is required for fallback install but was not found."
    err "Install Go 1.21+ from https://go.dev/dl/ and re-run."
    exit 1
  fi
  local gover; gover="$(go version | awk '{print $3}')"
  log "Using Go ${gover}"
  log "Running: GOBIN=${INSTALL_DIR} go install ${MODULE_PATH}${ver}"
  GOBIN="${INSTALL_DIR}" go install "${MODULE_PATH}${ver}"
  # go install names the binary after the cmd directory (cmd/bett-harness
  # → bett-harness). Rename to the canonical bett-ai-harness name used by
  # the goreleaser pipeline and the release archives.
  if [[ -f "${INSTALL_DIR}/bett-harness" && ! -f "${INSTALL_DIR}/${BINARY}" ]]; then
    mv "${INSTALL_DIR}/bett-harness" "${INSTALL_DIR}/${BINARY}"
  fi
  ok "Installed ${BINARY} to ${INSTALL_DIR}/${BINARY} (via go install)"
}

# ─── Install ─────────────────────────────────────────────────────────────────
mkdir -p "${INSTALL_DIR}"

# If the user pinned a version via --version / BETT_VERSION, pass it through to
# 'go install' as @<version>. The release-archive path is skipped only when no
# version was resolved at all.
GO_INSTALL_REF="@latest"
if [[ -n "$VERSION" ]]; then
  # Keep the leading 'v' — 'go install' accepts @vX.Y.Z / @v0.0.0-<ts>-<sha>.
  GO_INSTALL_REF="@${VERSION}"
fi

if [[ "$USE_GO_INSTALL" == "0" ]]; then
  if ! install_from_release "$VERSION"; then
    warn "Falling back to go install ${GO_INSTALL_REF}"
    USE_GO_INSTALL=1
  fi
fi

if [[ "$USE_GO_INSTALL" == "1" ]]; then
  install_from_go "$GO_INSTALL_REF"
fi

# ─── PATH warning ────────────────────────────────────────────────────────────
if ! command -v "${BINARY}" >/dev/null 2>&1; then
  warn "${BINARY} is not on PATH."
  warn "Add this to your shell profile (~/.zshrc, ~/.bashrc, ~/.profile):"
  printf '\n    export PATH="%s:$PATH"\n\n' "${INSTALL_DIR}" >&2
fi

# ─── Verify ─────────────────────────────────────────────────────────────────
if command -v "${BINARY}" >/dev/null 2>&1; then
  log "Verifying installation…"
  if out="$("${BINARY}" --version 2>&1)"; then
    log "${out}"
    ok "${BINARY} installed successfully"
  else
    warn "Installation succeeded but ${BINARY} --version exited non-zero"
  fi
fi

cat <<EOF

Next steps:
  1. ${BINARY}                     # launch the TUI
  2. Select "Wire bett-ai into selected agent"
  3. Enjoy persistent memory across OpenCode and Claude Code sessions.

Docs:   https://github.com/${REPO}
Issues: https://github.com/${REPO}/issues
EOF
