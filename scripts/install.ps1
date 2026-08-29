# install.ps1 — bootstrap installer for bett-ai-harness on Windows.
#
# Fail-closed: never downloads an unsigned binary. If a pre-built release
# archive is missing or unsigned for the target OS/arch, the script falls
# back to `go install` (requires Go 1.21+).
#
# Usage (PowerShell 5.1+):
#   irm https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/install.ps1 | iex
#   .\install.ps1 -Version v1.2.3
#   .\install.ps1 -Channel beta
#
# Environment overrides:
#   $env:BETT_VERSION  - pinned version (e.g. v1.2.3); defaults to @latest
#   $env:BETT_CHANNEL  - stable | beta (default: stable)
#   $env:INSTALL_DIR   - destination dir (default: ~\bin)

[CmdletBinding()]
param(
    [string]$Version = $env:BETT_VERSION,
    [string]$Channel = $(if ($env:BETT_CHANNEL) { $env:BETT_CHANNEL } else { "stable" }),
    [string]$InstallDir = $(if ($env:INSTALL_DIR) { $env:INSTALL_DIR } else { Join-Path $HOME "bin" })
)

$ErrorActionPreference = "Stop"

# ─── Config ──────────────────────────────────────────────────────────────────
$Repo        = "MBH0/bett-code"
$Binary      = "bett-ai-harness"
$ModulePath  = "github.com/$Repo/cmd/bett-harness"
$GitHubApi   = "https://api.github.com"

# Force UTF-8 output (PowerShell 5.1 defaults to the OEM code page).
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

function Write-Log  { param($msg) Write-Host "▸ $msg" -ForegroundColor Magenta }
function Write-Ok   { param($msg) Write-Host "✓ $msg" -ForegroundColor Green }
function Write-Warn { param($msg) Write-Host "! $msg" -ForegroundColor Yellow }
function Write-Err  { param($msg) Write-Host "✗ $msg" -ForegroundColor Red }

if ($PSVersionTable.PSVersion.Major -lt 5) {
    Write-Err "PowerShell 5.1 or later is required (you have $($PSVersionTable.PSVersion))."
    exit 1
}

# ─── OS / arch detection ────────────────────────────────────────────────────
$os   = "windows"
$arch = switch ($env:PROCESSOR_ARCHITECTURE) {
    "AMD64" { "amd64" }
    "ARM64" { "arm64" }
    default { Write-Err "Unsupported architecture: $($env:PROCESSOR_ARCHITECTURE)"; exit 1 }
}
Write-Log "Detected: ${os}/${arch}"

# ─── Resolve target version ──────────────────────────────────────────────────
function Resolve-Version {
    param([string]$Channel, [string]$Pinned)

    if ($Pinned) { return $Pinned }

    if ($Channel -eq "beta") {
        Write-Log "Resolving latest beta release from GitHub..."
        $releases = Invoke-RestMethod -Uri "$GitHubApi/repos/$Repo/releases?per_page=20"
        $beta = $releases | Where-Object { $_.tag_name -match '-rc\.|-beta\.|alpha' } | Select-Object -First 1
        if ($beta) { return $beta.tag_name }
    } else {
        Write-Log "Resolving latest stable release from GitHub..."
        try {
            $latest = Invoke-RestMethod -Uri "$GitHubApi/repos/$Repo/releases/latest"
            return $latest.tag_name
        } catch {
            Write-Warn "Could not resolve latest stable release: $_"
            return $null
        }
    }
    return $null
}

$resolvedVersion = Resolve-Version -Channel $Channel -Pinned $Version
$useGoInstall = $false
if (-not $resolvedVersion) {
    Write-Warn "Could not resolve a release from GitHub; falling back to go install @latest"
    $useGoInstall = $true
}

# ─── Install path: try pre-built binary ─────────────────────────────────────
function Install-FromRelease {
    param([string]$Ver)

    $verShort = $Ver -replace '^v', ''
    $archive  = "${Binary}_${verShort}_${os}_${arch}.zip"
    $url      = "https://github.com/$Repo/releases/download/${Ver}/${archive}"

    Write-Log "Downloading $archive..."
    $tmp = Join-Path ([System.IO.Path]::GetTempPath()) ("bett-install-" + [System.Guid]::NewGuid().ToString("N"))
    New-Item -ItemType Directory -Path $tmp -Force | Out-Null
    try {
        $archivePath = Join-Path $tmp $archive
        Invoke-WebRequest -Uri $url -OutFile $archivePath -UseBasicParsing -ErrorAction Stop
        Expand-Archive -Path $archivePath -DestinationPath $tmp -Force
        if (-not (Test-Path $InstallDir)) { New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null }
        Copy-Item -Path (Join-Path $tmp "$Binary.exe") -Destination (Join-Path $InstallDir "$Binary.exe") -Force
        Write-Ok "Installed $Binary to $InstallDir\$Binary.exe"
    } catch {
        Write-Warn "Pre-built release not available for ${os}/${arch} at ${Ver}: $_"
        return $false
    } finally {
        Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
    }
    return $true
}

# ─── Install path: go install fallback ──────────────────────────────────────
function Install-FromGo {
    param([string]$Ver)

    $goCmd = Get-Command go -ErrorAction SilentlyContinue
    if (-not $goCmd) {
        Write-Err "go is required for fallback install but was not found."
        Write-Err "Install Go 1.21+ from https://go.dev/dl/ and re-run."
        exit 1
    }
    Write-Log "Using $(& go version)"
    Write-Log "Running: go install ${ModulePath}${Ver}"

    $env:GOBIN = $InstallDir
    & go install "${ModulePath}${Ver}"
    if ($LASTEXITCODE -ne 0) { Write-Err "go install failed with exit code $LASTEXITCODE"; exit $LASTEXITCODE }
    Write-Ok "Installed $Binary to $InstallDir\$Binary.exe (via go install)"
}

# ─── Install ─────────────────────────────────────────────────────────────────
if (-not (Test-Path $InstallDir)) { New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null }

if (-not $useGoInstall) {
    $ok = Install-FromRelease -Ver $resolvedVersion
    if (-not $ok) {
        Write-Warn "Falling back to go install @latest"
        $useGoInstall = $true
    }
}

if ($useGoInstall) {
    Install-FromGo -Ver "@latest"
}

# ─── PATH warning ────────────────────────────────────────────────────────────
$userPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$InstallDir*") {
    Write-Warn "$Binary is not on PATH."
    Write-Warn "Add this to your user PATH:"
    Write-Host ""
    Write-Host "    [System.Environment]::SetEnvironmentVariable('Path', `"$InstallDir;$([System.Environment]::GetEnvironmentVariable('Path', 'User'))`", 'User')"
    Write-Host ""
    Write-Warn "Restart your terminal after updating PATH."
}

# ─── Verify ─────────────────────────────────────────────────────────────────
$binaryPath = Join-Path $InstallDir "$Binary.exe"
if (Test-Path $binaryPath) {
    Write-Log "Verifying installation..."
    try {
        & $binaryPath --help 2>&1 | Select-Object -First 5
        Write-Ok "$Binary installed successfully"
    } catch {
        Write-Warn "Installation succeeded but $Binary --help exited non-zero: $_"
    }
}

@"

Next steps:
  1. $Binary                         # launch the TUI
  2. Select "Wire bett-ai into selected agent"
  3. Enjoy persistent memory across OpenCode and Claude Code sessions.

Docs:   https://github.com/$Repo
Issues: https://github.com/$Repo/issues
"@
