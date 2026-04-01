/**
 * Shim for bun:bundle — replaces the Anthropic build-time feature flag system.
 * All feature flags default to false (disabled) in the open-source fork.
 * To enable a feature, add it to the ENABLED_FEATURES set below.
 */

const ENABLED_FEATURES = new Set<string>([
  // Add feature flags to enable here, e.g.:
  // 'BASH_CLASSIFIER',
])

export function feature(name: string): boolean {
  return ENABLED_FEATURES.has(name)
}
