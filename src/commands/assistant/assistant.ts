// Stub: assistant command is an internal Anthropic module not included in this fork.
import React from 'react'

export function NewInstallWizard(props: {
  defaultDir: string
  onInstalled: (dir: string) => void
  onCancel: () => void
  onError: (message: string) => void
}) {
  props.onError('Assistant is not available in this build')
  return null
}

export async function computeDefaultInstallDir(): Promise<string> {
  return ''
}
