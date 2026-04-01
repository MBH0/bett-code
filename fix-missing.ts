import { execSync } from 'child_process'
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs'
import { dirname, join, resolve } from 'path'

const PROJECT = '/Users/diegosalazar/projects/bett-code'
const MAX_ITERATIONS = 100

for (let i = 0; i < MAX_ITERATIONS; i++) {
  try {
    // Try importing the main module
    const result = execSync(
      `cd ${PROJECT} && bun -e "await import('./src/main.tsx')"  2>&1`,
      { timeout: 15000, env: { ...process.env, PATH: process.env.HOME + '/.bun/bin:' + process.env.PATH } }
    ).toString()

    console.log(`Iteration ${i}: Import succeeded!`)
    break
  } catch (e: any) {
    const stdout = e.stdout?.toString() || ''
    const stderr = e.stderr?.toString() || ''
    const output = stdout + '\n' + stderr

    // Match "Cannot find module './xxx.js' from '/path/to/file.ts'"
    const match1 = output.match(/Cannot find module ['"]([^'"]+)['"] from ['"]([^'"]+)['"]/)
    // Match "ENOENT reading "file:/path/to/file.ts""
    const match2 = output.match(/ENOENT reading "file:([^"]+)"/)
    // Match "Could not resolve: "xxx""  with optional context "from "/path/to/file""
    const match3 = output.match(/Could not resolve:\s*"([^"]+)"/)
    const match3from = output.match(/Could not resolve:\s*"[^"]+"\s*from\s*"([^"]+)"/)
    // Match Bun's module not found: ModuleNotFound: Module not found "xxx"
    const match4 = output.match(/Module not found\s*"([^"]+)"/)
    // Match 'error: Cannot find package "xxx"'
    const match5 = output.match(/Cannot find package "([^"]+)"/)
    // Match 'No such file or directory' with a path
    const match6 = output.match(/No such file or directory[^\n]*?['"]([^'"]+\.(?:ts|tsx|js|jsx))['"]/i)
    // Match 'error: Could not resolve "xxx" from "yyy"' (Bun bundler style)
    const match7 = output.match(/error:\s*Could not resolve "([^"]+)"\s*\n/)
    // Match referenced file in error
    const match8 = output.match(/error:.*?"([^"]+\.(?:ts|tsx|js|jsx))"/)

    if (match1) {
      const [, modulePath, fromFile] = match1
      const fromDir = dirname(fromFile)
      let resolved: string

      if (modulePath.startsWith('.')) {
        // Relative path
        resolved = resolve(fromDir, modulePath)
        // Try .ts/.tsx variants
        if (!resolved.match(/\.(ts|tsx|js|jsx)$/)) {
          resolved = resolved + '.ts'
        } else {
          resolved = resolved.replace(/\.js$/, '.ts').replace(/\.jsx$/, '.tsx')
        }
      } else {
        // Package-style import — create in node_modules or handle differently
        console.log(`Iteration ${i}: Missing package-style module ${modulePath} from ${fromFile}`)
        console.log(output.substring(0, 800))
        break
      }

      console.log(`Iteration ${i}: Missing ${modulePath} from ${fromFile}`)
      console.log(`  Creating stub: ${resolved}`)

      createStub(resolved, modulePath, fromFile)
    } else if (match2) {
      const filePath = match2[1]
      console.log(`Iteration ${i}: ENOENT ${filePath}`)
      if (!existsSync(filePath)) {
        createStub(filePath, '', '')
      } else {
        console.log(`  File exists, checking for internal import issues...`)
        console.log(output.substring(0, 800))
        break
      }
    } else if (match3) {
      const moduleName = match3[1]
      const fromFile = match3from ? match3from[1] : ''

      if (moduleName.startsWith('.') && fromFile) {
        const fromDir = dirname(fromFile)
        let resolved = resolve(fromDir, moduleName)
        if (!resolved.match(/\.(ts|tsx|js|jsx)$/)) {
          resolved = resolved + '.ts'
        } else {
          resolved = resolved.replace(/\.js$/, '.ts').replace(/\.jsx$/, '.tsx')
        }
        console.log(`Iteration ${i}: Could not resolve ${moduleName} from ${fromFile}`)
        console.log(`  Creating stub: ${resolved}`)
        createStub(resolved, moduleName, fromFile)
      } else if (moduleName.startsWith('.')) {
        // Relative but no from — try to find context in error
        console.log(`Iteration ${i}: Could not resolve relative ${moduleName} (no from context)`)
        console.log(output.substring(0, 800))
        break
      } else {
        console.log(`Iteration ${i}: Could not resolve package ${moduleName}`)
        console.log(output.substring(0, 800))
        break
      }
    } else if (match4 || match5) {
      const moduleName = (match4 || match5)![1]
      console.log(`Iteration ${i}: Module/package not found: ${moduleName}`)
      console.log(output.substring(0, 800))
      break
    } else {
      console.log(`Iteration ${i}: Unknown error pattern`)
      console.log(output.substring(0, 1200))
      break
    }
  }
}

function createStub(filePath: string, moduleName: string, importer: string) {
  // Make sure directory exists
  const dir = dirname(filePath)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }

  if (existsSync(filePath)) {
    console.log(`  Already exists: ${filePath}`)
    return
  }

  // Check what the importer expects by looking at its import statement
  let exports = ''
  if (importer && existsSync(importer)) {
    try {
      const content = readFileSync(importer, 'utf8')
      // Find what's imported from this module
      const escaped = moduleName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

      // Named imports: import { A, B } from 'module'
      const importMatch = content.match(new RegExp(`import\\s+\\{([^}]+)\\}\\s+from\\s+['"]${escaped}['"]`))
      if (importMatch) {
        const names = importMatch[1].split(',').map((n: string) => n.trim().split(' as ')[0].trim()).filter(Boolean)
        exports = names.map((n: string) => {
          if (n.startsWith('type ')) {
            return `export type ${n.replace('type ', '')} = any`
          }
          if (/^[A-Z]/.test(n)) {
            // Could be a class, component, or constant
            return `export const ${n} = (() => {}) as any`
          }
          return `export const ${n} = (() => {}) as any`
        }).join('\n')
      }

      // Default import: import Foo from 'module'
      const defaultMatch = content.match(new RegExp(`import\\s+(\\w+)\\s+from\\s+['"]${escaped}['"]`))
      if (defaultMatch) {
        exports += `\nexport default null as any`
      }

      // Star import: import * as Foo from 'module'
      const starMatch = content.match(new RegExp(`import\\s+\\*\\s+as\\s+(\\w+)\\s+from\\s+['"]${escaped}['"]`))
      if (starMatch) {
        // Just needs to be a valid module
        if (!exports) {
          exports = '// Auto-generated stub (star import)\nexport {}'
        }
      }
    } catch {}
  }

  if (!exports) {
    exports = '// Auto-generated stub\nexport default null as any\nexport {}'
  }

  writeFileSync(filePath, exports.trim() + '\n')
  console.log(`  Created: ${filePath}`)
}
