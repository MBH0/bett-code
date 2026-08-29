# Release signing and key rotation

How bett-ai-harness signs release artifacts. The release pipeline must produce **trusted, reproducible, fail-closed** binaries on every supported platform.

## Trust anchors by platform

| Platform | Trust anchor | Status |
| --- | --- | --- |
| macOS / Linux | Minisign over `checksums.txt` + TLS to GitHub Releases | **Active** |
| Windows (amd64) | RSA Authenticode (managed OIDC, Azure Artifact Signing) | **Held — provisioning required** |
| Windows (arm64) | RSA Authenticode (managed OIDC, Azure Artifact Signing) | **Held — provisioning required** |
| `go install` | Go checksum database (`sum.golang.org`) | **Active** |

Until Windows Authenticode is in place, the Windows binary distribution channel is **closed**. The bootstrap installer (`scripts/install.ps1`) falls back to `go install` on Windows, and the goreleaser config skips `win/arm64` entirely.

## Why minisign is enough for POSIX

The release flow on macOS and Linux is:

1. goreleaser builds tar.gz archives for darwin/{amd64,arm64} and linux/{amd64,arm64}.
2. goreleaser writes `checksums.txt` containing the SHA256 of every archive.
3. The release script signs `checksums.txt` with the maintainer's minisign key, producing `checksums.txt.minisig`.
4. Both files are uploaded to the GitHub Release.

A user can verify any archive by:

```bash
minisign -VQm checksums.txt -x checksums.txt.minisig -p <public-key>
sha256sum --check --strict --ignore-missing checksums.txt
```

Because TLS to GitHub authenticates the download, and minisign binds the checksums to a key only the maintainer controls, the chain is end-to-end trusted.

## Windows distribution restoration gate

Windows binary distribution is **provisionally held** until **all** of the following are satisfied:

1. **Managed OIDC signing** is configured through Azure Artifact Signing (preferred) or a comparable trust service.
2. **Both** `win/amd64` and `win/arm64` executables are signed **before** archive generation, so `checksums.txt` reflects the signed bytes.
3. The release script verifies the Authenticode signature on each signed executable and **fails closed** if either is unsigned or has an unexpected signer.
4. The Windows bootstrap installer (`scripts/install.ps1`) verifies the Authenticode chain before running the downloaded binary.

When all four conditions hold, remove the `win/arm64` entry from the `ignore:` list in `.goreleaser.yaml` and uncomment the Authenticode section in `scripts/install.ps1`.

## Azure Artifact Signing setup (TODO)

1. Create an Azure Trusted Signing account:
   ```bash
   az extension add --name trustedsigning
   az trustedsigning signing-account create \
     --resource-group <rg> \
     --account-name <account> \
     --location <region>
   ```
2. Grant the GitHub Actions OIDC subject access to the signing account:
   ```bash
   az role assignment create \
     --role "Trusted Signing Certificate Profile Signer" \
     --assignee-object-id <github-actions-oidc-subject-id>
   ```
3. Add the OIDC trust to the GitHub workflow:
   ```yaml
   permissions:
     id-token: write   # required for Azure workload identity federation
   ```
4. Inject the signing certificate profile ID and endpoint into the workflow as secrets:
   - `AZURE_TENANT_ID`
   - `AZURE_CLIENT_ID` (the federated identity)
   - `AZURE_SIGNING_ENDPOINT`
   - `AZURE_CERTIFICATE_PROFILE`
5. Add a goreleaser `signs:` entry that calls `signtool.exe sign /fd sha256 /td sha256 /tr "$AZURE_SIGNING_ENDPOINT" /fd sha256 /a /csp "..."` after each Windows build, before checksum generation.
6. Update `scripts/install.ps1` to call `Get-AuthenticodeSignature` on the downloaded `.exe` and verify the signer thumbprint matches `$env:BETT_AUTHENTICODE_THUMBPRINT`.

## First-signed-release procedure

When the gate is satisfied and the first Authenticode-signed release is cut:

1. Announce the new trust chain in the README and the release notes.
2. Add the Authenticode thumbprint to `.goreleaser.yaml` as a constant so future builds fail closed if it changes unexpectedly.
3. Update the bootstrap installer to require the thumbprint check.
4. Coordinate the key rotation log entry — see below.

## Key rotation

Key rotation requires:

- A planned overlap window where both old and new keys are accepted.
- A signed announcement in the repo (`KEY-ROTATION.md`) recording:
  - Old key fingerprint.
  - New key fingerprint.
  - Rotation date and reason.
  - Threshold of mirrors that have updated.
- A new release **must** be signed by the new key; the bootstrap installer must **reject** releases signed only by the old key after the rotation grace period.

## Anti-patterns

- Embedding the private minisign key in the repo or any artifact.
- Trusting TLS to GitHub Releases alone (TLS authenticates the channel, not the publisher).
- Skipping the unsigned-binary check in the bootstrap installer.
- Generating checksums before signing (the signed bytes must match the checksummed bytes).
- Distributing Windows binaries without Authenticode.
