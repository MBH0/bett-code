/**
 * bett-code build script
 * Bundles the project into dist/ with Bun, then patches for Node.js compat.
 */
import { rmSync, readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join, resolve, dirname } from 'path'

const ROOT = import.meta.dir

// Step 1: Clean dist
console.log('Cleaning dist/...')
rmSync(join(ROOT, 'dist'), { recursive: true, force: true })

// Step 2: Bundle
console.log('Bundling...')
const result = await Bun.build({
  entrypoints: ['./src/entrypoints/cli.tsx'],
  outdir: './dist',
  target: 'bun',
  splitting: true,
  plugins: [
    {
      name: 'bett-code-build',
      setup(build) {
        // bun:bundle → shim
        build.onResolve({ filter: /^bun:bundle$/ }, () => ({
          path: resolve(ROOT, 'src/shims/bun-bundle.ts'),
        }))

        // src/ absolute imports
        build.onResolve({ filter: /^src\// }, (args) => {
          const base = args.path.replace(/\.js$/, '').replace(/\.jsx$/, '')
          for (const ext of ['.ts', '.tsx', '.js', '/index.ts', '/index.tsx']) {
            const p = join(ROOT, base + ext)
            try { statSync(p); return { path: p } } catch {}
          }
          return { path: args.path, external: true }
        })

        // Stub .d.ts
        build.onResolve({ filter: /\.d\.ts$/ }, () => ({
          path: resolve(ROOT, 'src/shims/empty-stub.ts'),
        }))

        // Stub missing .md/.txt
        build.onResolve({ filter: /\.(md|txt)$/ }, (args) => {
          const resolved = join(dirname(args.importer), args.path)
          try { statSync(resolved); return undefined } catch {}
          return { path: resolve(ROOT, 'src/shims/empty-stub.ts') }
        })
      },
    },
  ],
  define: {
    'MACRO.VERSION': JSON.stringify('1.0.0'),
    'MACRO.BUILD_TIME': JSON.stringify(new Date().toISOString()),
    'MACRO.PACKAGE_URL': JSON.stringify('bett-code'),
    'MACRO.NATIVE_PACKAGE_URL': JSON.stringify('bett-code'),
    'MACRO.FEEDBACK_CHANNEL': JSON.stringify('https://github.com/MBH0/bett-code/issues'),
    'MACRO.ISSUES_EXPLAINER': JSON.stringify('https://github.com/MBH0/bett-code/issues'),
    'MACRO.VERSION_CHANGELOG': JSON.stringify(''),
    'process.env.USER_TYPE': JSON.stringify('external'),
  },
  external: [
    // Anthropic internal packages
    '@anthropic-ai/bedrock-sdk', '@anthropic-ai/foundry-sdk', '@anthropic-ai/vertex-sdk',
    '@anthropic-ai/sandbox-runtime', '@anthropic-ai/mcpb', '@ant/claude-for-chrome-mcp',
    // AWS SDKs
    '@aws-sdk/client-bedrock', '@aws-sdk/client-bedrock-runtime', '@aws-sdk/client-sts',
    '@aws-sdk/credential-provider-node', '@smithy/core', '@smithy/node-http-handler',
    // Azure
    '@azure/identity',
    // Optional native
    'sharp', 'color-diff-napi', 'modifiers-napi',
    // OpenTelemetry exporters
    '@opentelemetry/exporter-logs-otlp-grpc', '@opentelemetry/exporter-logs-otlp-http',
    '@opentelemetry/exporter-logs-otlp-proto', '@opentelemetry/exporter-metrics-otlp-grpc',
    '@opentelemetry/exporter-metrics-otlp-http', '@opentelemetry/exporter-metrics-otlp-proto',
    '@opentelemetry/exporter-prometheus', '@opentelemetry/exporter-trace-otlp-grpc',
    '@opentelemetry/exporter-trace-otlp-http', '@opentelemetry/exporter-trace-otlp-proto',
    // Optional deps
    'ws', 'undici', 'tree-kill', 'turndown', 'xss', 'yaml', 'fflate',
    'vscode-jsonrpc/node.js', 'react-reconciler/constants.js',
  ],
})

if (!result.success) {
  console.error('Build FAILED:')
  for (const msg of result.logs) {
    console.error(msg)
  }
  process.exit(1)
}

console.log(`Bundled ${result.outputs.length} files`)

// Step 3: Post-build Node.js compatibility patch
// Replace Bun-specific import.meta.require with Node.js createRequire fallback
let patched = 0
function patchDir(dir: string) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      patchDir(full)
    } else if (entry.name.endsWith('.js')) {
      let content = readFileSync(full, 'utf8')
      if (content.includes('import.meta.require')) {
        content = content.replace(
          /var __require = import\.meta\.require;/g,
          'var __require = typeof import.meta.require === "function" ? import.meta.require : (await import("module")).createRequire(import.meta.url);',
        )
        writeFileSync(full, content)
        patched++
      }
    }
  }
}

patchDir(join(ROOT, 'dist'))
console.log(`Patched ${patched} files for Node.js compatibility`)

// Step 4: Create dist entry script with env setup
const cliWrapper = `#!/usr/bin/env bun
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

  console.log('\\n  \\x1b[1mbett-code Settings\\x1b[0m\\n')
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
  console.log('\\n  Provider: \\x1b[32m' + selected.name + '\\x1b[0m')

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
  wf(cfgPath, JSON.stringify(cfg, null, 2) + '\\n', { mode: 0o600 })
  console.log('\\n  \\x1b[32m✓\\x1b[0m Saved. Run \\x1b[1mbett-code\\x1b[0m to start.\\n')
  process.exit(0)
}

// Launch bundled CLI
await import('./cli.js')
`

writeFileSync(join(ROOT, 'dist', 'bett-code.js'), cliWrapper)
import { chmodSync } from 'fs'
chmodSync(join(ROOT, 'dist', 'bett-code.js'), 0o755)
console.log('Created dist/bett-code.js entry point')

// Total size
let totalSize = 0
function sumDir(dir: string) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) sumDir(full)
    else totalSize += statSync(full).size
  }
}
sumDir(join(ROOT, 'dist'))
console.log(`\nBuild complete: ${(totalSize / 1024 / 1024).toFixed(1)} MB total`)
