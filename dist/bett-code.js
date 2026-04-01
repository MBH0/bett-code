#!/usr/bin/env bun
// bett-code CLI - bundled entry point
import { homedir } from 'os'
import { join } from 'path'
import { readFileSync, existsSync } from 'fs'

// Environment
process.env.USER_TYPE = 'external'
process.env.DISABLE_TELEMETRY = '1'
process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = '1'
process.env.CLAUDE_CONFIG_DIR ??= join(homedir(), '.bett-code')

// Load saved provider config
try {
  const configPath = join(process.env.CLAUDE_CONFIG_DIR, '.claude.json')
  if (existsSync(configPath)) {
    const config = JSON.parse(readFileSync(configPath, 'utf8'))
    if (config.bettProvider && config.bettProvider !== 'anthropic') {
      process.env.BETT_CODE_PROVIDER ??= config.bettProvider
      if (config.bettProviderApiKey) process.env.BETT_CODE_PROVIDER_API_KEY ??= config.bettProviderApiKey
      if (config.bettProviderBaseUrl) process.env.BETT_CODE_PROVIDER_BASE_URL ??= config.bettProviderBaseUrl
      if (config.bettModel) process.env.ANTHROPIC_MODEL ??= config.bettModel
      process.env.ANTHROPIC_API_KEY ??= 'bett-code-external-provider'
    } else if (config.bettProvider === 'anthropic' && config.bettProviderApiKey) {
      process.env.ANTHROPIC_API_KEY ??= config.bettProviderApiKey
      if (config.bettModel) process.env.ANTHROPIC_MODEL ??= config.bettModel
    }
  }
} catch {}

// Handle --setting
if (process.argv.includes('--setting') || process.argv.includes('--settings')) {
  const { createInterface } = await import('readline')
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const ask = (q) => new Promise(r => rl.question(q, r))

  console.log('\n  \x1b[1mbett-code Settings\x1b[0m\n')
  console.log('  Select provider:')
  console.log('    1. OpenAI (gpt-4o, gpt-4-turbo)')
  console.log('    2. Anthropic (claude-sonnet, claude-opus)')
  console.log('    3. Gemini (gemini-pro, gemini-2.0-flash)')
  console.log('    4. Ollama (local - llama3.1, codellama)')
  console.log()

  const choice = await ask('  Choice [1-4]: ')
  const providers = {
    '1': { name: 'openai', needsKey: true, defaultModel: 'gpt-4o' },
    '2': { name: 'anthropic', needsKey: true, defaultModel: 'claude-sonnet-4-5-20250514' },
    '3': { name: 'gemini', needsKey: true, defaultModel: 'gemini-2.0-flash' },
    '4': { name: 'ollama', needsKey: false, defaultModel: 'llama3.1' },
  }
  const selected = providers[choice.trim()]
  if (!selected) { console.log('  Invalid choice.'); process.exit(1) }
  console.log('\n  Provider: \x1b[32m' + selected.name + '\x1b[0m')

  let apiKey = ''
  if (selected.needsKey) {
    apiKey = await ask('  API Key: ')
    if (!apiKey.trim()) { console.log('  API key required.'); process.exit(1) }
  }
  const modelInput = await ask('  Model [' + selected.defaultModel + ']: ')
  const model = modelInput.trim() || selected.defaultModel
  let baseUrl = ''
  if (selected.name === 'ollama') {
    const u = await ask('  Ollama URL [http://localhost:11434]: ')
    baseUrl = u.trim() || 'http://localhost:11434'
  }
  rl.close()

  const { writeFileSync: wf, mkdirSync: md } = await import('fs')
  const cfgPath = join(process.env.CLAUDE_CONFIG_DIR, '.claude.json')
  let cfg = {}
  try { cfg = JSON.parse(readFileSync(cfgPath, 'utf8')) } catch {}
  Object.assign(cfg, {
    bettProvider: selected.name, bettProviderApiKey: apiKey.trim(), bettModel: model,
    hasCompletedOnboarding: true, numStartups: cfg.numStartups || 1, theme: cfg.theme || 'dark',
    preferredNotifChannel: cfg.preferredNotifChannel || 'iterm2', verbose: cfg.verbose ?? false,
    autoCompactEnabled: cfg.autoCompactEnabled ?? true, showTurnDuration: false,
  })
  if (baseUrl) cfg.bettProviderBaseUrl = baseUrl
  if (selected.name !== 'anthropic') cfg.customApiKeyResponses = { approved: ['bett-code-external-provider'], rejected: [] }
  md(process.env.CLAUDE_CONFIG_DIR, { recursive: true })
  wf(cfgPath, JSON.stringify(cfg, null, 2) + '\n', { mode: 0o600 })
  console.log('\n  \x1b[32m✓\x1b[0m Saved. Run \x1b[1mbett-code\x1b[0m to start.\n')
  process.exit(0)
}

// Launch bundled CLI
await import('./cli.js')
