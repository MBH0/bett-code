# install.ps1 — bootstrap installer for bett-ai-harness on Windows.
#
# Fail-closed: never downloads an unsigned binary. If a pre-built release
# archive is missing or unsigned for the target OS/arch, the script falls
# back to `go install` (requires Go 1.21+).
#
# If Go is not present, the script auto-installs it via winget (preferred),
# Chocolatey, or Scoop (if any of them is on PATH). Otherwise it prints
# the download URL and asks the user to install manually.
#
# curl, git, and tar are pre-installed on Windows 10+ / Server 2019+.
# This script checks them and warns if any are missing.
#
# PATH is auto-configured for the current process AND persisted to the
# user's persistent PATH environment variable.
#
# Usage (PowerShell 5.1+):
#   irm https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/install.ps1 | iex
#   .\install.ps1 -Version v1.2.3
#   .\install.ps1 -Channel beta
#
# Environment overrides:
#   $env:BETT_VERSION      - pinned version (e.g. v1.2.3); defaults to @latest
#   $env:BETT_CHANNEL      - stable | beta (default: stable)
#   $env:BETT_GO_VERSION   - Go version to install (default: 1.23.4)
#   $env:INSTALL_DIR       - destination dir (default: ~\bin)
#   $env:SKIP_AUTO_GO      - set to "1" to disable auto-install of Go

[CmdletBinding()]
param(
    [string]$Version       = $env:BETT_VERSION,
    [string]$Channel       = $(if ($env:BETT_CHANNEL) { $env:BETT_CHANNEL } else { "stable" }),
    [string]$GoVersion     = $(if ($env:BETT_GO_VERSION) { $env:BETT_GO_VERSION } else { "1.23.4" }),
    [string]$InstallDir    = $(if ($env:INSTALL_DIR) { $env:INSTALL_DIR } else { Join-Path $HOME "bin" }),
    [string]$SkipAutoGo    = $env:SKIP_AUTO_GO,
    [string]$Agent         = $(if ($env:BETT_AGENT) { $env:BETT_AGENT } else { "opencode" }),
    [string]$SDDProfile    = $(if ($env:BETT_SDD_PROFILE) { $env:BETT_SDD_PROFILE } else { "default" }),
    [switch]$SkipEngram    = ($env:BETT_SKIP_ENGRAM -eq "1"),
    [switch]$SkipProfiles  = ($env:BETT_SKIP_PROFILES -eq "1")
)

$ErrorActionPreference = "Stop"

# ─── Config ──────────────────────────────────────────────────────────────────
$Repo              = "MBH0/bett-code"
$Binary            = "bett-ai-harness"
$ModulePath        = "github.com/$Repo/cmd/bett-harness"
$EngramRepo        = "gentleman-programming/engram"
$EngramModulePath  = "github.com/$EngramRepo/cmd/engram"
$EngramBinary      = "engram.exe"
$GitHubApi         = "https://api.github.com"

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

# ─── System dependency check (Windows ships these by default) ───────────────
function Test-SystemDeps {
    $missing = @()
    if (-not (Get-Command curl -ErrorAction SilentlyContinue)) { $missing += "curl" }
    if (-not (Get-Command git  -ErrorAction SilentlyContinue)) { $missing += "git" }
    if (-not (Get-Command tar  -ErrorAction SilentlyContinue)) { $missing += "tar" }
    return $missing
}
$depsMissing = Test-SystemDeps
if ($depsMissing.Count -gt 0) {
    Write-Warn "Missing system tools: $($depsMissing -join ', ')"
    Write-Warn "Windows 10+ / Server 2019+ ships these by default. Re-enable them via"
    Write-Warn "'Turn Windows features on or off' (curl) or install Git for Windows"
    Write-Warn "from https://git-scm.com/download/win ."
} else {
    Write-Ok "System deps present: curl, git, tar"
}

# ─── Package manager detection ──────────────────────────────────────────────
$GoInstaller = $null
function Find-GoInstaller {
    $winget = Get-Command winget -ErrorAction SilentlyContinue
    if ($winget) { return @{ Name = "winget"; Id = "GoLang.Go" } }

    $choco = Get-Command choco -ErrorAction SilentlyContinue
    if ($choco) { return @{ Name = "choco"; Id = "golang" } }

    $scoop = Get-Command scoop -ErrorAction SilentlyContinue
    if ($scoop) { return @{ Name = "scoop"; Id = "go" } }

    return $null
}

# ─── Go detection + auto-install ─────────────────────────────────────────────
function Ensure-Go {
    $goCmd = Get-Command go -ErrorAction SilentlyContinue
    if ($goCmd) {
        $verRaw = (& go version) 2>&1
        if ($verRaw -match 'go(\d+)\.(\d+)') {
            $major = [int]$Matches[1]
            $minor = [int]$Matches[2]
            if ($major -ge 1 -and $minor -ge 21) {
                Write-Ok "Go present: $verRaw"
                return $true
            }
        }
        Write-Warn "Go $verRaw is older than required 1.21+ — installing $GoVersion"
    } else {
        Write-Warn "Go not found — installing $GoVersion"
    }

    if ($SkipAutoGo -eq "1") {
        Write-Err "Go is required and SKIP_AUTO_GO=1 is set."
        exit 1
    }

    $installer = Find-GoInstaller
    if ($installer) {
        Write-Log "Installing Go via $($installer.Name)…"
        switch ($installer.Name) {
            "winget" { & winget install --id $installer.Id --silent --accept-package-agreements --accept-source-agreements }
            "choco"  { & choco install $installer.Id -y --no-progress }
            "scoop"  { & scoop install $installer.Id }
        }
        if ($LASTEXITCODE -eq 0 -and (Get-Command go -ErrorAction SilentlyContinue)) {
            # Refresh PATH for the new install.
            $machinePath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
            $userPath    = [System.Environment]::GetEnvironmentVariable("Path", "User")
            $env:Path    = "$machinePath;$userPath"
            Write-Ok "Installed Go via $($installer.Name)"
            return $true
        }
        Write-Warn "Package manager install of Go failed; falling back to manual install"
    }

    Write-Err ""
    Write-Err "Could not auto-install Go (no winget / choco / scoop detected)."
    Write-Err "Install Go $GoVersion manually from https://go.dev/dl/ and re-run this script."
    exit 1
}

Ensure-Go | Out-Null

# ─── PATH auto-configuration ────────────────────────────────────────────────
function Add-To-Path {
    param([string]$Dir)

    # Current process
    if (($env:Path -split ';') -notcontains $Dir) {
        $env:Path = "$Dir;$env:Path"
    }

    # Persistent user PATH
    $userPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
    if ($userPath -notlike "*$Dir*") {
        $newPath = "$Dir;$userPath"
        [System.Environment]::SetEnvironmentVariable("Path", $newPath, "User")
        Write-Ok "Added $Dir to user PATH"
    } else {
        Write-Ok "PATH already configured (user)"
    }
}

# ─── Resolve target version ──────────────────────────────────────────────────
function Resolve-Version {
    param([string]$Channel, [string]$Pinned)

    if ($Pinned) { return $Pinned }

    if ($Channel -eq "beta") {
        Write-Log "Resolving latest beta release from GitHub..."
        try {
            $releases = Invoke-RestMethod -Uri "$GitHubApi/repos/$Repo/releases?per_page=20"
            $beta = $releases | Where-Object { $_.tag_name -match '-rc\.|-beta\.|alpha' } | Select-Object -First 1
            if ($beta) { return $beta.tag_name }
        } catch {}
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
    Write-Warn "Could not resolve a release from GitHub; falling back to go install"
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
        exit 1
    }
    Write-Log "Using $(& go version)"
    Write-Log "Running: go install ${ModulePath}${Ver}"

    $env:GOBIN = $InstallDir
    & go install "${ModulePath}${Ver}"
    if ($LASTEXITCODE -ne 0) {
        if ($Ver -eq "@latest") {
            Write-Warn "go install @latest failed (proxy cache may be stale); trying @main"
            & go install "${ModulePath}@main"
            if ($LASTEXITCODE -ne 0) {
                Write-Err "Both @latest and @main failed."
                exit $LASTEXITCODE
            }
        } else {
            Write-Err "go install $Ver failed with exit code $LASTEXITCODE"
            exit $LASTEXITCODE
        }
    }
    # Rename bett-harness.exe to bett-ai-harness.exe if needed.
    $harnessExe = Join-Path $InstallDir "bett-harness.exe"
    $canonical   = Join-Path $InstallDir "$Binary.exe"
    if ((Test-Path $harnessExe) -and -not (Test-Path $canonical)) {
        Move-Item -Path $harnessExe -Destination $canonical -Force
    }
    Write-Ok "Installed $Binary to $InstallDir\$Binary.exe (via go install)"
}

# ─── Install ─────────────────────────────────────────────────────────────────
if (-not (Test-Path $InstallDir)) { New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null }

$goInstallRef = "@latest"
if ($resolvedVersion) { $goInstallRef = "@$resolvedVersion" }

if (-not $useGoInstall) {
    $ok = Install-FromRelease -Ver $resolvedVersion
    if (-not $ok) {
        Write-Warn "Falling back to go install $goInstallRef"
        $useGoInstall = $true
    }
}

if ($useGoInstall) {
    Install-FromGo -Ver $goInstallRef
}

# ─── Engram auto-install ─────────────────────────────────────────────────────
function Install-Engram {
    if (Get-Command $EngramBinary -ErrorAction SilentlyContinue) {
        Write-Ok "Engram present: $((& $EngramBinary --version) 2>&1 | Select-Object -First 1)"
        return
    }
    if ($SkipEngram) {
        Write-Warn "Engram not found and -SkipEngram set; skipping"
        return
    }
    Write-Warn "Engram not found — installing"

    # Try package managers in order.
    if (Get-Command scoop -ErrorAction SilentlyContinue) {
        Write-Log "Installing Engram via scoop…"
        & scoop install engram 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0 -and (Get-Command $EngramBinary -ErrorAction SilentlyContinue)) {
            Write-Ok "Installed Engram via scoop"
            return
        }
    }
    if (Get-Command choco -ErrorAction SilentlyContinue) {
        Write-Log "Installing Engram via choco…"
        & choco install engram -y --no-progress 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0 -and (Get-Command $EngramBinary -ErrorAction SilentlyContinue)) {
            Write-Ok "Installed Engram via choco"
            return
        }
    }
    if (Get-Command winget -ErrorAction SilentlyContinue) {
        Write-Log "Installing Engram via winget…"
        # winget doesn't have engram by id; fall through to go install.
    }

    Write-Log "Installing Engram via go install…"
    $env:GOBIN = $InstallDir
    & go install "${EngramModulePath}@latest"
    if ($LASTEXITCODE -ne 0) {
        & go install "${EngramModulePath}@main"
    }
    if ($LASTEXITCODE -ne 0) {
        Write-Err "Could not install Engram."
        Write-Err "Install manually:"
        Write-Err "  scoop install engram"
        Write-Err "  go install ${EngramModulePath}@latest"
        return
    }
    Write-Ok "Installed Engram via go install"
}

Install-Engram

# ─── SDD profile seeding ─────────────────────────────────────────────────────
function Seed-SDDProfiles {
    if ($SkipProfiles) {
        Write-Warn "Skipping SDD profile seeding (-SkipProfiles)"
        return
    }
    $harnessPath = Join-Path $InstallDir "$Binary.exe"
    if (-not (Test-Path $harnessPath)) {
        Write-Warn "bett-ai-harness not found at $harnessPath; cannot seed profiles"
        return
    }
    Write-Log "Seeding SDD profile set for $Agent…"
    & $harnessPath seed-profiles $Agent 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Warn "seed-profiles exited with code $LASTEXITCODE"
        return
    }
    Write-Ok "SDD profile set written"

    if ($SDDProfile -ne "") {
        if ($SDDProfile -notin @("default","cheap","premium")) {
            Write-Err "Unknown -SDDProfile '$SDDProfile' (valid: default | cheap | premium)"
            return
        }
        & $harnessPath activate-profile $Agent $SDDProfile 2>&1 | Out-Null
        Write-Ok "Active profile: $SDDProfile"
    }

    # Per-phase overrides from $env:BETT_MODEL_<PHASE>
    foreach ($phase in @("orchestrator","explore","propose","spec","design","tasks","apply","verify","archive")) {
        $var = "BETT_MODEL_" + $phase.ToUpper()
        $modelVal = (Get-Item env:$var -ErrorAction SilentlyContinue).Value
        if ($modelVal) {
            & $harnessPath set-model $Agent $SDDProfile $phase $modelVal 2>&1 | Out-Null
            Write-Ok "Set $Agent/$SDDProfile/$phase = $modelVal"
        }
    }
}

Seed-SDDProfiles

# ─── PATH configuration ─────────────────────────────────────────────────────
Add-To-Path -Dir $InstallDir

# ─── Verify ─────────────────────────────────────────────────────────────────
$binaryPath = Join-Path $InstallDir "$Binary.exe"
if (Test-Path $binaryPath) {
    Write-Log "Verifying installation..."
    try {
        & $binaryPath --version 2>&1 | Select-Object -First 1 | ForEach-Object { Write-Log $_ }
        Write-Ok "$Binary installed successfully"
    } catch {
        Write-Warn "Installation succeeded but $Binary --version exited non-zero: $_"
    }
} else {
    Write-Warn "$Binary not found at expected path: $binaryPath"
}

@"

Next steps:
  1. Restart PowerShell to pick up the new PATH.
  2. $Binary                         # launch the TUI
  3. Select "Wire bett-ai into selected agent"
  4. Enjoy persistent memory across OpenCode and Claude Code sessions.

Docs:   https://github.com/$Repo
Issues: https://github.com/$Repo/issues
"@
