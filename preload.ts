/**
 * Bun preload plugin for bett-code
 * Resolves bun:bundle imports and sets up MACRO globals.
 * Usage: bun --preload ./preload.ts src/main.tsx
 */

import { plugin } from 'bun'
import { resolve, dirname, join } from 'path'
import { existsSync } from 'fs'

// Setup MACRO globals
;(globalThis as any).MACRO = {
  VERSION: '99.0.0',
  BUILD_TIME: new Date().toISOString(),
  PACKAGE_URL: 'bett-code',
  NATIVE_PACKAGE_URL: 'bett-code',
  FEEDBACK_CHANNEL: 'https://github.com/MBH0/bett-code/issues',
  ISSUES_EXPLAINER: 'https://github.com/MBH0/bett-code/issues',
  VERSION_CHANGELOG: '',
}

// Set env — isolate bett-code from Claude Code
import { homedir } from 'os'
process.env.USER_TYPE = 'external'
process.env.DISABLE_TELEMETRY = '1'
process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = '1'
process.env.CLAUDE_CONFIG_DIR ??= join(homedir(), '.bett-code')

plugin({
  name: 'bett-code-resolver',
  setup(build) {
    // bun:bundle → shim
    build.onResolve({ filter: /^bun:bundle$/ }, () => ({
      path: resolve(import.meta.dir, 'src/shims/bun-bundle.ts'),
    }))

    // Resolve src/ absolute imports
    build.onResolve({ filter: /^src\// }, (args) => {
      const base = args.path.replace(/\.js$/, '').replace(/\.jsx$/, '')
      const candidates = [
        join(import.meta.dir, base + '.ts'),
        join(import.meta.dir, base + '.tsx'),
        join(import.meta.dir, base + '.js'),
        join(import.meta.dir, base, 'index.ts'),
        join(import.meta.dir, base, 'index.tsx'),
      ]
      for (const c of candidates) {
        if (existsSync(c)) return { path: c }
      }
      return undefined
    })

    // Stub .d.ts imports - resolve to a real empty stub file
    build.onResolve({ filter: /\.d\.ts$/ }, () => {
      return { path: resolve(import.meta.dir, 'src/shims/empty-stub.ts') }
    })

    // Stub .md/.txt file imports that don't exist - resolve to real stub file
    build.onResolve({ filter: /\.(md|txt)$/ }, (args) => {
      const resolved = join(dirname(args.importer), args.path)
      if (existsSync(resolved)) return undefined // let bun handle
      return { path: resolve(import.meta.dir, 'src/shims/empty-stub.ts') }
    })
  },
})
