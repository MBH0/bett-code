// Stub: TungstenTool is an internal Anthropic module not included in this fork.
export const TungstenTool = {
  name: 'tungsten',
  aliases: [],
  async call() {
    throw new Error('TungstenTool is not available in this build')
  },
  description() {
    return 'Tungsten terminal (not available)'
  },
  isReadOnly() {
    return false
  },
  isEnabled() {
    return false
  },
  inputJSONSchema: { type: 'object' as const, properties: {} },
  userFacingName() {
    return 'Tungsten'
  },
  prompt() {
    return ''
  },
}
