// Stub: SnapshotUpdateDialog is an internal Anthropic component not included in this fork.
import React from 'react'

export function SnapshotUpdateDialog(props: {
  agentType: string
  scope: string
  snapshotTimestamp: number
  onComplete: (choice: 'merge' | 'keep' | 'replace') => void
  onCancel: () => void
}) {
  // Auto-resolve with 'keep' since this is a stub
  props.onComplete('keep')
  return null
}
