#!/usr/bin/env bash
# install.sh — bootstrap installer for bett-ai-harness on macOS/Linux.
#
# Idempotent and fail-closed. Never downloads an unsigned binary.
# If a pre-built release archive is missing or unsigned for the target
# OS/arch, the script falls back to `go install` (requires Go 1.21+).
#
# If Go is not present, the script auto-installs it via the system package
# manager (apt / dnf / pacman / apk / brew) or, as a last resort, the
# official Go tarball into $HOME/.local/go.
#
# If curl, git, or tar are missing, the script auto-installs them via the
# package manager (Linux only; macOS ships all of these).
#
# PATH is auto-configured for the current shell and appended to the
# appropriate shell rc file (~/.bashrc, ~/.zshrc, ~/.profile, ~/.config/fish/config.fish).
#
# In addition to the harness binary, the bootstrap also installs Engram
# (persistent-memory backend, via brew tap or `go install`) and seeds the
# SDD profile set (default / cheap / premium) into the active agent's
# config dir. A non-interactive --sdd-profile flag lets CI / scripted
# installs pick a profile without prompting.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/install.sh | bash
#   curl -fsSL .../install.sh | bash -s -- --version v1.2.3
#   curl -fsSL .../install.sh | bash -s -- --channel beta
#   curl -fsSL .../install.sh | bash -s -- --sdd-profile cheap
#   curl -fsSL .../install.sh | bash -s -- --model-apply openrouter/qwen/qwen3-30b-a3b:free
#
# Environment overrides:
#   BETT_VERSION              — pinned version (e.g. v1.2.3); defaults to @latest
#   BETT_CHANNEL              — stable | beta (default: stable)
#   BETT_GO_VERSION           — Go version to install (default: 1.23.4)
#   BETT_SDD_PROFILE          — profile to activate: default | cheap | premium
#   BETT_AGENT                — agent to target: opencode | claude-code (default: opencode)
#   BETT_MODEL_<PHASE>        — per-phase override (e.g. BETT_MODEL_APPLY=...)
#   BETT_SKIP_ENGRAM          — set to "1" to skip Engram install
#   BETT_SKIP_PROFILES        — set to "1" to skip SDD profile seeding
#   GOBIN/GOPATH              — destination for `go install` (default: ~/.local/go)
#   INSTALL_DIR               — destination for downloaded binary (default: $GOBIN/bin)
#   SKIP_AUTO_GO              — set to "1" to disable auto-install of Go
#   SKIP_AUTO_DEPS            — set to "1" to disable auto-install of system packages

set -eo pipefail

# ─── Config ──────────────────────────────────────────────────────────────────
REPO="MBH0/bett-code"
BINARY="bett-ai-harness"
MODULE_PATH="github.com/${REPO}/cmd/bett-harness"
ENGRAM_REPO="Gentleman-Programming/engram"
ENGRAM_MODULE_PATH="github.com/${ENGRAM_REPO}/cmd/engram"
ENGRAM_BINARY="engram"
VERSION="${BETT_VERSION:-}"
CHANNEL="${BETT_CHANNEL:-stable}"
GO_VERSION="${BETT_GO_VERSION:-1.23.4}"
GOBIN_DIR="${GOBIN:-$HOME/.local/go}"
INSTALL_DIR="${INSTALL_DIR:-$GOBIN_DIR/bin}"
AGENT="${BETT_AGENT:-opencode}"
SDD_PROFILE="${BETT_SDD_PROFILE:-default}"
GITHUB_API="https://api.github.com"
GITHUB_RAW="https://raw.githubusercontent.com"
GO_DL="https://go.dev/dl"

# ─── Logging helpers (stderr only so $() captures stay clean) ───────────────
log()  { printf '\033[1;35m▸\033[0m %s\n' "$*" >&2; }
ok()   { printf '\033[1;32m✓\033[0m %s\n' "$*" >&2; }
warn() { printf '\033[1;33m!\033[0m %s\n' "$*" >&2; }
err()  { printf '\033[1;31m✗\033[0m %s\n' "$*" >&2; }

# ─── Argument parsing ────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --version)           VERSION="$2"; shift 2 ;;
    --channel)           CHANNEL="$2"; shift 2 ;;
    --sdd-profile)       SDD_PROFILE="$2"; shift 2 ;;
    --agent)             AGENT="$2"; shift 2 ;;
    --model-orchestrator) export BETT_MODEL_ORCHESTRATOR="$2"; shift 2 ;;
    --model-explore)      export BETT_MODEL_EXPLORE="$2"; shift 2 ;;
    --model-propose)      export BETT_MODEL_PROPOSE="$2"; shift 2 ;;
    --model-spec)         export BETT_MODEL_SPEC="$2"; shift 2 ;;
    --model-design)       export BETT_MODEL_DESIGN="$2"; shift 2 ;;
    --model-tasks)        export BETT_MODEL_TASKS="$2"; shift 2 ;;
    --model-apply)        export BETT_MODEL_APPLY="$2"; shift 2 ;;
    --model-verify)       export BETT_MODEL_VERIFY="$2"; shift 2 ;;
    --model-archive)      export BETT_MODEL_ARCHIVE="$2"; shift 2 ;;
    -h|--help)
      cat <<EOF
bett-ai-harness installer

Options:
  --version VER                Pin a specific version (e.g. v1.2.3). Default: latest stable.
  --channel CH                 Release channel: stable | beta. Default: stable.
  --agent AGENT                Target agent: opencode | claude-code. Default: opencode.
  --sdd-profile NAME           Activate profile: default | cheap | premium.
  --model-orchestrator MODEL   Per-phase model override (--model-<phase>=<model>).
  --model-explore MODEL        Same for each SDD phase: orchestrator, explore,
  --model-propose MODEL        propose, spec, design, tasks, apply, verify,
  --model-spec MODEL           archive.
  --model-design MODEL
  --model-tasks MODEL
  --model-apply MODEL
  --model-verify MODEL
  --model-archive MODEL
  -h, --help                   Show this help.

Environment:
  BETT_VERSION      Same as --version
  BETT_CHANNEL      Same as --channel
  BETT_AGENT        Same as --agent
  BETT_SDD_PROFILE  Same as --sdd-profile
  BETT_MODEL_<PHASE>  Per-phase model override
  BETT_GO_VERSION   Go version to auto-install (default: 1.23.4)
  BETT_SKIP_ENGRAM  Set to 1 to skip Engram install
  BETT_SKIP_PROFILES  Set to 1 to skip SDD profile seeding
  INSTALL_DIR       Destination directory (default: ~/.local/go/bin)
  GOBIN             Same as INSTALL_DIR (go install respects this)
  SKIP_AUTO_GO      Set to 1 to refuse Go auto-install
  SKIP_AUTO_DEPS    Set to 1 to refuse system-package auto-install

The bootstrap installs bett-ai-harness, Engram, and the default SDD profile
set in one shot. Use --sdd-profile and --model-<phase> for non-interactive
configuration; omit them and the harness will write the defaults that the
TUI's "SDD Profiles" screen can edit later.

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

# ─── Package manager detection ──────────────────────────────────────────────
PKG_MANAGER=""
PKG_INSTALL=""
PKG_UPDATE=""
PKG_SUDO=""
detect_pkg_manager() {
  if [[ "$os" == "darwin" ]]; then
    if command -v brew >/dev/null 2>&1; then
      PKG_MANAGER="brew"; PKG_INSTALL="brew install"; PKG_UPDATE="brew update"; PKG_SUDO=""
    fi
    return
  fi
  # Linux: check in order of commonality
  if command -v apt-get >/dev/null 2>&1; then
    PKG_MANAGER="apt"; PKG_INSTALL="apt-get install -y"; PKG_UPDATE="apt-get update"; PKG_SUDO="sudo"
  elif command -v dnf >/dev/null 2>&1; then
    PKG_MANAGER="dnf"; PKG_INSTALL="dnf install -y"; PKG_UPDATE="dnf check-update"; PKG_SUDO="sudo"
  elif command -v yum >/dev/null 2>&1; then
    PKG_MANAGER="yum"; PKG_INSTALL="yum install -y"; PKG_UPDATE="yum check-update"; PKG_SUDO="sudo"
  elif command -v pacman >/dev/null 2>&1; then
    PKG_MANAGER="pacman"; PKG_INSTALL="pacman -S --noconfirm"; PKG_UPDATE="pacman -Sy"; PKG_SUDO="sudo"
  elif command -v apk >/dev/null 2>&1; then
    PKG_MANAGER="apk"; PKG_INSTALL="apk add"; PKG_UPDATE="apk update"; PKG_SUDO="sudo"
  elif command -v zypper >/dev/null 2>&1; then
    PKG_MANAGER="zypper"; PKG_INSTALL="zypper install -y"; PKG_UPDATE="zypper refresh"; PKG_SUDO="sudo"
  fi
}

run_pkg_install() {
  local pkgs="$*"
  if [[ -z "$PKG_MANAGER" ]]; then
    err "No supported package manager found. Install manually: $pkgs"
    return 1
  fi
  log "Installing via $PKG_MANAGER: $pkgs"
  if [[ -n "$PKG_UPDATE" ]] && [[ "${SKIP_AUTO_DEPS:-0}" != "1" ]]; then
    if [[ "$PKG_SUDO" != "" ]]; then
      $PKG_SUDO $PKG_UPDATE || warn "$PKG_UPDATE failed (continuing)"
    else
      $PKG_UPDATE || warn "$PKG_UPDATE failed (continuing)"
    fi
  fi
  if [[ "$PKG_SUDO" != "" ]]; then
    $PKG_SUDO $PKG_INSTALL $pkgs
  else
    $PKG_INSTALL $pkgs
  fi
}

# ─── Prerequisite check + auto-install ──────────────────────────────────────
detect_pkg_manager

ensure_system_deps() {
  local missing=()
  command -v curl  >/dev/null 2>&1 || missing+=(curl)
  command -v git   >/dev/null 2>&1 || missing+=(git)
  command -v tar   >/dev/null 2>&1 || missing+=(tar)
  command -v ca-certificates >/dev/null 2>&1 || true  # optional

  if [[ ${#missing[@]} -eq 0 ]]; then
    ok "System deps present: curl, git, tar"
    return 0
  fi

  if [[ "${SKIP_AUTO_DEPS:-0}" == "1" ]]; then
    err "Missing required tools: ${missing[*]}"
    err "SKIP_AUTO_DEPS=1 is set; install them manually and re-run."
    exit 1
  fi

  warn "Missing system tools: ${missing[*]}"

  case "$PKG_MANAGER" in
    apt)
      run_pkg_install curl git tar ca-certificates
      ;;
    dnf|yum)
      run_pkg_install curl git tar ca-certificates
      ;;
    pacman)
      run_pkg_install curl git tar ca-certificates
      ;;
    apk)
      run_pkg_install curl git tar ca-certificates
      ;;
    brew)
      run_pkg_install curl git tar
      ;;
    zypper)
      run_pkg_install curl git tar ca-certificates
      ;;
    *)
      err "No supported package manager. Install manually: ${missing[*]}"
      exit 1
      ;;
  esac

  # Re-check
  local still_missing=()
  command -v curl  >/dev/null 2>&1 || still_missing+=(curl)
  command -v git   >/dev/null 2>&1 || still_missing+=(git)
  command -v tar   >/dev/null 2>&1 || still_missing+=(tar)
  if [[ ${#still_missing[@]} -ne 0 ]]; then
    err "Auto-install failed; still missing: ${still_missing[*]}"
    exit 1
  fi
  ok "Auto-installed: ${missing[*]}"
}

ensure_system_deps

# ─── Go detection + auto-install ─────────────────────────────────────────────
ensure_go() {
  if command -v go >/dev/null 2>&1; then
    local gover; gover="$(go version | awk '{print $3}')"
    local major; major="${gover#go}"; major="${major%%.*}"
    if [[ "$major" -ge 1 ]]; then
      # Verify minor version >= 21
      local minor; minor="${gover#go1.}"; minor="${minor%%.*}"
      if [[ "$minor" -ge 21 ]] 2>/dev/null; then
        ok "Go present: $gover"
        return 0
      fi
    fi
    warn "Go $gover is older than the required 1.21+ — installing $GO_VERSION"
  else
    warn "Go not found — installing $GO_VERSION"
  fi

  if [[ "${SKIP_AUTO_GO:-0}" == "1" ]]; then
    err "Go is required and SKIP_AUTO_GO=1 is set."
    exit 1
  fi

  install_go
}

install_go() {
  # Try package manager first (faster, OS-integrated).
  case "$PKG_MANAGER" in
    apt)
      if run_pkg_install golang-go 2>/dev/null; then
        if command -v go >/dev/null 2>&1; then
          ok "Installed Go via apt"
          return 0
        fi
      fi
      warn "apt golang-go install did not put 'go' on PATH — falling back to tarball"
      ;;
    dnf|yum)
      if run_pkg_install golang 2>/dev/null; then
        if command -v go >/dev/null 2>&1; then
          ok "Installed Go via $PKG_MANAGER"
          return 0
        fi
      fi
      warn "$PKG_MANAGER golang install did not put 'go' on PATH — falling back to tarball"
      ;;
    pacman)
      if run_pkg_install go 2>/dev/null; then
        if command -v go >/dev/null 2>&1; then
          ok "Installed Go via pacman"
          return 0
        fi
      fi
      warn "pacman go install did not put 'go' on PATH — falling back to tarball"
      ;;
    apk)
      if run_pkg_install go 2>/dev/null; then
        if command -v go >/dev/null 2>&1; then
          ok "Installed Go via apk"
          return 0
        fi
      fi
      warn "apk go install did not put 'go' on PATH — falling back to tarball"
      ;;
    brew)
      if run_pkg_install go 2>/dev/null; then
        if command -v go >/dev/null 2>&1; then
          ok "Installed Go via brew"
          return 0
        fi
      fi
      warn "brew go install did not put 'go' on PATH — falling back to tarball"
      ;;
  esac

  # Tarball fallback into $HOME/.local/go (always works, no sudo).
  install_go_tarball
}

install_go_tarball() {
  local go_os_arch="${os}-${arch}"
  case "$go_os_arch" in
    linux-amd64)   go_tar="go${GO_VERSION}.linux-amd64.tar.gz" ;;
    linux-arm64)   go_tar="go${GO_VERSION}.linux-arm64.tar.gz" ;;
    darwin-amd64)  go_tar="go${GO_VERSION}.darwin-amd64.tar.gz" ;;
    darwin-arm64)  go_tar="go${GO_VERSION}.darwin-arm64.tar.gz" ;;
    *)
      err "Unsupported platform for Go tarball: $go_os_arch"
      exit 1
      ;;
  esac
  local go_url="${GO_DL}/${go_tar}"
  local go_install_dir="$HOME/.local/go"

  log "Downloading Go ${GO_VERSION} from ${go_url}…"
  local tmpdir; tmpdir="$(mktemp -d)"
  if ! curl -fsSL -o "$tmpdir/$go_tar" "$go_url"; then
    rm -rf "$tmpdir"
    err "Failed to download Go tarball"
    exit 1
  fi
  # Strip any prior install so we don't end up with stale subdirs.
  rm -rf "$go_install_dir"
  mkdir -p "$(dirname "$go_install_dir")"
  tar -C "$(dirname "$go_install_dir")" -xzf "$tmpdir/$go_tar"
  rm -rf "$tmpdir"
  ok "Installed Go ${GO_VERSION} to ${go_install_dir}"

  # Wire GOROOT for the rest of this script.
  export GOROOT="$go_install_dir"
  export PATH="${go_install_dir}/bin:${PATH}"
  # Persist into GOBIN_DIR so subsequent 'go install' uses the same prefix.
  GOBIN_DIR="$go_install_dir"
  INSTALL_DIR="${go_install_dir}/bin"
  if ! command -v go >/dev/null 2>&1; then
    err "Go install succeeded but 'go' is still not on PATH."
    exit 1
  fi
}

ensure_go

# ─── Engram auto-install ────────────────────────────────────────────────────
ENGRAM_INSTALL_DIR="$INSTALL_DIR"   # same dir as bett-ai-harness
ensure_engram() {
  if command -v "$ENGRAM_BINARY" >/dev/null 2>&1; then
    local ever; ever="$("$ENGRAM_BINARY" --version 2>&1 | head -1 || true)"
    ok "Engram present: $ever"
    return 0
  fi
  if [[ "${BETT_SKIP_ENGRAM:-0}" == "1" ]]; then
    warn "Engram not found and BETT_SKIP_ENGRAM=1 — skipping"
    return 0
  fi
  warn "Engram not found — installing"

  # Prefer the brew tap on platforms where brew is available. The tap ships
  # both macOS and Linux bottles, so it covers both via brew.
  if [[ "$PKG_MANAGER" == "brew" ]]; then
    if $PKG_INSTALL gentleman-programming/tap/engram 2>&1 | tail -5; then
      if command -v "$ENGRAM_BINARY" >/dev/null 2>&1; then
        ok "Installed Engram via brew tap"
        return 0
      fi
    fi
    warn "brew install failed; falling back to 'go install'"
  fi

  # Fallback: go install the upstream module.
  local engram_log; engram_log="$(mktemp)"
  set +e
  GOBIN="${ENGRAM_INSTALL_DIR}" go install "${ENGRAM_MODULE_PATH}@latest" 2>&1 | tee "$engram_log"
  local status="${PIPESTATUS[0]}"
  set -e
  if [[ "$status" -ne 0 ]]; then
    warn "go install engram @latest failed; trying @main"
    set +e
    GOBIN="${ENGRAM_INSTALL_DIR}" go install "${ENGRAM_MODULE_PATH}@main" 2>&1 | tee -a "$engram_log"
    status="${PIPESTATUS[0]}"
    set -e
  fi
  rm -f "$engram_log"
  if [[ "$status" -ne 0 ]]; then
    err "Could not install Engram. Install manually:"
    err "  brew install gentleman-programming/tap/engram"
    err "  go install ${ENGRAM_MODULE_PATH}@latest"
    return 1
  fi
  ok "Installed Engram via go install @${ENGRAM_MODULE_PATH}"
}

# Wrap in `|| true` so a failure to install Engram does not abort the rest
# of the bootstrap — the user can install it manually later. The error is
# already logged by ensure_engram.
ensure_engram || true

# ─── SDD profile seeding + model assignment ─────────────────────────────────
seed_sdd_profiles() {
  if [[ "${BETT_SKIP_PROFILES:-0}" == "1" ]]; then
    warn "BETT_SKIP_PROFILES=1 — skipping SDD profile seeding"
    return 0
  fi
  if ! command -v "$BINARY" >/dev/null 2>&1; then
    warn "bett-ai-harness not on PATH; cannot seed profiles"
    return 0
  fi
  log "Seeding SDD profile set for ${AGENT}…"
  "$BINARY" seed-profiles "$AGENT" >&2
  ok "SDD profile set written"

  # Apply BETT_SDD_PROFILE activation (enable the chosen profile, disable others).
  if [[ -n "$SDD_PROFILE" ]]; then
    case "$SDD_PROFILE" in
      default|cheap|premium) : ;;
      *) err "Unknown --sdd-profile '$SDD_PROFILE' (valid: default | cheap | premium)"; return 1 ;;
    esac
    "$BINARY" activate-profile "$AGENT" "$SDD_PROFILE" >&2
    ok "Active profile: ${SDD_PROFILE}"
  fi

  # Apply per-phase overrides from --model-<phase>=<model> or BETT_MODEL_<PHASE>.
  local phase phase_upper model
  for phase in orchestrator explore propose spec design tasks apply verify archive; do
    phase_upper="$(printf '%s' "$phase" | tr '[:lower:]' '[:upper:]')"
    model="${BETT_MODEL_${phase_upper}:-}"
    if [[ -z "$model" ]]; then continue; fi
    "$BINARY" set-model "$AGENT" "$SDD_PROFILE" "$phase" "$model" >&2
    ok "Set ${AGENT}/${SDD_PROFILE}/${phase} = ${model}"
  done
}

seed_sdd_profiles || true

# ─── Start engram serve in background (best-effort) ─────────────────────────
start_engram_serve() {
  if ! command -v "$ENGRAM_BINARY" >/dev/null 2>&1; then return 0; fi
  # Only start if not already running on the default port.
  if "$ENGRAM_BINARY" serve --help 2>/dev/null | head -1 >/dev/null; then
    if "$ENGRAM_BINARY" mcp --help 2>/dev/null | head -1 >/dev/null; then
      log "Starting 'engram serve' in background…"
      nohup "$ENGRAM_BINARY" serve >/dev/null 2>&1 &
      sleep 1
      ok "engram serve started (pid $!)"
    fi
  fi
}

# ─── PATH auto-configuration ────────────────────────────────────────────────
configure_path() {
  # Export for the current shell.
  case ":$PATH:" in
    *":$INSTALL_DIR:"*) : ;;  # already on PATH for current process
    *) export PATH="$INSTALL_DIR:$PATH" ;;
  esac

  # Persist to the appropriate rc file(s) so future shells also pick it up.
  local rc_file=""
  local shell_name="${SHELL:-}"
  # When the script is piped via 'curl ... | bash', $SHELL may be empty;
  # default to bash (the most common interactive shell on servers).
  if [[ -z "$shell_name" ]]; then
    case "$os" in
      darwin) shell_name="/bin/zsh" ;;  # macOS default since Catalina
      linux)  shell_name="/bin/bash" ;;
      *)      shell_name="/bin/sh" ;;
    esac
  fi
  case "$(basename "$shell_name")" in
    zsh)  rc_file="$HOME/.zshrc" ;;
    bash)
      if [[ -f "$HOME/.bashrc" ]]; then
        rc_file="$HOME/.bashrc"
      else
        rc_file="$HOME/.profile"
      fi
      ;;
    fish)
      mkdir -p "$HOME/.config/fish"
      rc_file="$HOME/.config/fish/config.fish"
      ;;
    *)
      rc_file="$HOME/.profile"
      ;;
  esac

  # Idempotent: skip if the line is already there.
  if [[ -f "$rc_file" ]] && grep -F "$INSTALL_DIR" "$rc_file" >/dev/null 2>&1; then
    ok "PATH already configured in $rc_file"
    return 0
  fi

  local marker="# >>> bett-ai-harness initialize >>>"
  local marker_end="# <<< bett-ai-harness initialize <<<"

  case "$(basename "${shell_name:-/bin/sh}")" in
    fish)
      cat >> "$rc_file" <<EOF

$marker
# Added by bett-ai-harness installer — do not edit by hand.
fish_add_path $INSTALL_DIR
$marker_end
EOF
      ;;
    *)
      cat >> "$rc_file" <<EOF

$marker
# Added by bett-ai-harness installer — do not edit by hand.
export PATH="$INSTALL_DIR:\$PATH"
$marker_end
EOF
      ;;
  esac

  ok "Added PATH export to $rc_file"
}

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
  local gover; gover="$(go version | awk '{print $3}')"
  log "Using Go ${gover}"
  log "Running: GOBIN=${INSTALL_DIR} go install ${MODULE_PATH}${ver}"

  local go_log; go_log="$(mktemp)"
  set +e
  GOBIN="${INSTALL_DIR}" go install "${MODULE_PATH}${ver}" 2>&1 | tee "$go_log"
  local go_status="${PIPESTATUS[0]}"
  set -e

  if [[ "$go_status" -ne 0 ]]; then
    if [[ "$ver" == "@latest" ]]; then
      warn "go install @latest failed (proxy cache may be stale); trying @main"
      log "Running: GOBIN=${INSTALL_DIR} go install ${MODULE_PATH}@main"
      set +e
      GOBIN="${INSTALL_DIR}" go install "${MODULE_PATH}@main" 2>&1 | tee -a "$go_log"
      go_status="${PIPESTATUS[0]}"
      set -e
      if [[ "$go_status" -ne 0 ]]; then
        err "Both @latest and @main failed."
        err "Common causes: Go version < 1.21, network, or a broken commit on main."
        rm -f "$go_log"
        return 1
      fi
    else
      err "go install $ver failed. Check Go version (need 1.21+) and network."
      rm -f "$go_log"
      return 1
    fi
  fi
  rm -f "$go_log"

  if [[ -f "${INSTALL_DIR}/bett-harness" && ! -f "${INSTALL_DIR}/${BINARY}" ]]; then
    mv "${INSTALL_DIR}/bett-harness" "${INSTALL_DIR}/${BINARY}"
  fi
  ok "Installed ${BINARY} to ${INSTALL_DIR}/${BINARY} (via go install)"
}

# ─── Install ─────────────────────────────────────────────────────────────────
mkdir -p "${INSTALL_DIR}"

GO_INSTALL_REF="@latest"
if [[ -n "$VERSION" ]]; then
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

# ─── PATH configuration (after install so we know the final path) ──────────
configure_path

# ─── Verify ─────────────────────────────────────────────────────────────────
if command -v "${BINARY}" >/dev/null 2>&1; then
  log "Verifying installation…"
  if out="$("${BINARY}" --version 2>&1)"; then
    log "${out}"
    ok "${BINARY} installed successfully"
  else
    warn "Installation succeeded but ${BINARY} --version exited non-zero"
  fi
else
  warn "${BINARY} is installed at ${INSTALL_DIR}/${BINARY} but is not on your current PATH."
  warn "Restart your shell, or run: export PATH=\"${INSTALL_DIR}:\$PATH\""
fi

# ─── Start Engram in background (best-effort) ──────────────────────────────
start_engram_serve

cat <<EOF

Next steps:
  1. Restart your shell (or: exec \$SHELL) to pick up the new PATH.
  2. ${BINARY}                       # launch the TUI
  3. Select "Wire bett-ai into selected agent" (targets ${AGENT})
  4. Configure models per SDD phase via "SDD Profiles" (or pass
     --sdd-profile and --model-<phase>=<model> to this installer to script it).

Installed in one shot:
  • bett-ai-harness  ${BINARY}    (Go TUI for OpenCode / Claude Code)
  • engram          ${ENGRAM_BINARY}  (persistent memory backend)
  • SDD profiles    default, cheap, premium  (active: ${SDD_PROFILE})
  • PATH exports    ${INSTALL_DIR}  (added to your shell rc)

Docs:   https://github.com/${REPO}
Issues: https://github.com/${REPO}/issues
EOF
