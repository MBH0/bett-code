/**
 * Build-time macros — replaces Bun's --define compile-time constants.
 * Import this at the top of the entry point so MACRO is available globally.
 */

const MACRO = {
  VERSION: '1.0.0',
  BUILD_TIME: new Date().toISOString(),
  PACKAGE_URL: 'bett-code',
  NATIVE_PACKAGE_URL: 'bett-code',
  FEEDBACK_CHANNEL: 'https://github.com/MBH0/bett-code/issues',
  ISSUES_EXPLAINER: 'https://github.com/MBH0/bett-code/issues',
  VERSION_CHANGELOG: '',
}

;(globalThis as any).MACRO = MACRO

export default MACRO
