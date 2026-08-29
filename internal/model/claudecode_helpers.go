// Helpers exported for the model package. Kept in a separate file so callers
// that only need ClaudeConfigDir do not pull in the rest of claudecode.
package model

import "bett-ai-harness/internal/claudecode"

// ClaudeConfigDir returns Claude Code's global config directory.
// Cross-platform: ~/.claude on POSIX, %USERPROFILE%\.claude on Windows.
func ClaudeConfigDir() string {
	return claudecode.ConfigDir()
}
