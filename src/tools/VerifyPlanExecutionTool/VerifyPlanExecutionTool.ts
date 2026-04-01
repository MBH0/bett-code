// Stub: VerifyPlanExecutionTool is an internal Anthropic module not included in this fork.
export const VerifyPlanExecutionTool = {
  name: 'verify_plan_execution',
  aliases: [],
  async call() {
    throw new Error('VerifyPlanExecutionTool is not available in this build')
  },
  description() {
    return 'Verify plan execution (not available)'
  },
  isReadOnly() {
    return true
  },
  isEnabled() {
    return false
  },
  inputJSONSchema: { type: 'object' as const, properties: {} },
  userFacingName() {
    return 'VerifyPlanExecution'
  },
  prompt() {
    return ''
  },
}
