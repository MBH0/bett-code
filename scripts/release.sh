#!/usr/bin/env bash
# scripts/release.sh — cut a tagged release of bett-ai-harness.
#
# What it does:
#   1. Verifies the working tree is clean (no uncommitted changes).
#   2. Verifies the version argument matches semver (vMAJOR.MINOR.PATCH[-prerelease]).
#   3. Creates an annotated git tag at HEAD (or moves it if it already exists).
#   4. Pushes the tag to origin.
#   5. Invokes goreleaser with the right env vars to publish binaries + tap + bucket.
#
# Prerequisites:
#   - goreleaser installed (brew install goreleaser)
#   - GITHUB_TOKEN in env (with repo + write:packages)
#   - MINISIGN_KEY in env (path to the minisign private key for signing checksums)
#   - gh authenticated (for tap / bucket publishing)
#
# Usage:
#   scripts/release.sh v0.1.0
#   scripts/release.sh v0.2.0-rc.1   # prerelease (goreleaser auto-detects -rc/-beta/-alpha)

set -euo pipefail

VERSION="${1:-}"
if [[ -z "$VERSION" ]]; then
  echo "Usage: $0 <version>" >&2
  echo "  e.g. $0 v0.1.0" >&2
  echo "  e.g. $0 v0.2.0-rc.1" >&2
  exit 1
fi

# ─── Semver sanity check ────────────────────────────────────────────────────
if ! [[ "$VERSION" =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$ ]]; then
  echo "✗ '$VERSION' is not a valid semver tag (expected vMAJOR.MINOR.PATCH[-prerelease])" >&2
  exit 1
fi

# ─── Working tree must be clean ─────────────────────────────────────────────
if ! git diff --quiet HEAD; then
  echo "✗ Working tree has uncommitted changes. Commit or stash first." >&2
  exit 1
fi
if [[ -n "$(git status --porcelain)" ]]; then
  echo "✗ Working tree has untracked or staged files. Commit or clean first." >&2
  exit 1
fi

# ─── Prereqs ────────────────────────────────────────────────────────────────
for tool in goreleaser gh git; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "✗ $tool is required but not installed." >&2
    exit 1
  fi
done
if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "✗ GITHUB_TOKEN env var is required." >&2
  exit 1
fi
if [[ -z "${MINISIGN_KEY:-}" ]]; then
  echo "✗ MINISIGN_KEY env var is required (path to minisign private key)." >&2
  exit 1
fi

# ─── Tag ────────────────────────────────────────────────────────────────────
echo "▸ Tagging HEAD as $VERSION…"
if git rev-parse "$VERSION" >/dev/null 2>&1; then
  echo "  Tag already exists locally; verifying it points to HEAD…"
  if [[ "$(git rev-parse "$VERSION")" != "$(git rev-parse HEAD)" ]]; then
    echo "✗ Tag $VERSION exists but does not point to HEAD." >&2
    echo "  Move with: git tag -f $VERSION HEAD" >&2
    exit 1
  fi
else
  git tag -a "$VERSION" -m "Release $VERSION"
fi

echo "▸ Pushing tag to origin…"
git push origin "$VERSION"

# ─── Release ────────────────────────────────────────────────────────────────
echo "▸ Invoking goreleaser…"
GORELEASER_CURRENT_TAG="$VERSION" \
GITHUB_TOKEN="$GITHUB_TOKEN" \
MINISIGN_KEY="$MINISIGN_KEY" \
  goreleaser release --clean

cat <<EOF

✓ Released $VERSION

Next steps:
  - Verify the release: https://github.com/MBH0/bett-code/releases/tag/$VERSION
  - Verify the tap:    https://github.com/MBH0/homebrew-tap/blob/main/Formula/bett-ai-harness.rb
  - Verify the bucket: https://github.com/MBH0/scoop-bucket/blob/main/bucket/bett-ai-harness.json
  - Smoke test:
      curl -fsSL https://raw.githubusercontent.com/MBH0/bett-code/main/scripts/install.sh | bash -s -- --version $VERSION
EOF
