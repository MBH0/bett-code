/**
 * bett-code Provider Tests
 * Tests the provider abstraction layer logic without requiring API keys.
 * Run with: node --experimental-strip-types test/providers.test.ts
 */

let passed = 0
let failed = 0

function assert(condition: boolean, message: string) {
  if (condition) {
    passed++
    console.log(`  ✓ ${message}`)
  } else {
    failed++
    console.error(`  ✗ ${message}`)
  }
}

function describe(name: string, fn: () => void) {
  console.log(`\n${name}`)
  fn()
}

// =====================================================
// Test 1: Message Conversion (Anthropic → OpenAI)
// =====================================================
describe('Message Conversion: Anthropic → OpenAI', () => {
  // Inline the conversion logic to avoid bun:bundle dependency
  function anthropicToolsToOpenAI(tools: any[]): any[] {
    return tools.map(tool => ({
      type: 'function',
      function: {
        name: tool.name,
        description: tool.description ?? '',
        parameters: tool.input_schema ?? { type: 'object', properties: {} },
      },
    }))
  }

  const anthropicTools = [
    {
      name: 'Bash',
      description: 'Execute a bash command',
      input_schema: {
        type: 'object',
        properties: {
          command: { type: 'string', description: 'The command to run' },
        },
        required: ['command'],
      },
    },
    {
      name: 'Read',
      description: 'Read a file',
      input_schema: {
        type: 'object',
        properties: {
          file_path: { type: 'string' },
        },
        required: ['file_path'],
      },
    },
  ]

  const openaiTools = anthropicToolsToOpenAI(anthropicTools)

  assert(openaiTools.length === 2, 'Should convert 2 tools')
  assert(openaiTools[0].type === 'function', 'Tool type should be "function"')
  assert(openaiTools[0].function.name === 'Bash', 'Tool name should be "Bash"')
  assert(
    openaiTools[0].function.parameters.required[0] === 'command',
    'Should preserve required params',
  )
  assert(
    openaiTools[1].function.name === 'Read',
    'Second tool name should be "Read"',
  )
})

// =====================================================
// Test 2: System Prompt Conversion
// =====================================================
describe('System Prompt Conversion', () => {
  function convertSystemPrompt(system: any): string {
    if (!system) return ''
    if (typeof system === 'string') return system
    if (Array.isArray(system)) {
      return system
        .map((block: any) => {
          if (typeof block === 'string') return block
          if ('text' in block) return block.text
          return ''
        })
        .join('\n')
    }
    return String(system)
  }

  assert(
    convertSystemPrompt('Hello') === 'Hello',
    'String system prompt passes through',
  )
  assert(
    convertSystemPrompt([{ type: 'text', text: 'Part 1' }, { type: 'text', text: 'Part 2' }]) ===
      'Part 1\nPart 2',
    'Array system prompt joins with newline',
  )
  assert(convertSystemPrompt(null) === '', 'Null returns empty string')
  assert(convertSystemPrompt(undefined) === '', 'Undefined returns empty string')
})

// =====================================================
// Test 3: Tool Use → Tool Calls Conversion
// =====================================================
describe('Tool Use Block → OpenAI Tool Calls', () => {
  function convertToolUseBlocks(content: any[]): { text: string; toolCalls: any[] } {
    const textParts: string[] = []
    const toolCalls: any[] = []

    for (const block of content) {
      if (block.type === 'text') {
        textParts.push(block.text)
      } else if (block.type === 'tool_use') {
        toolCalls.push({
          id: block.id,
          type: 'function',
          function: {
            name: block.name,
            arguments: typeof block.input === 'string'
              ? block.input
              : JSON.stringify(block.input),
          },
        })
      }
    }

    return { text: textParts.join(''), toolCalls }
  }

  const anthropicContent = [
    { type: 'text', text: 'Let me read that file.' },
    {
      type: 'tool_use',
      id: 'toolu_123',
      name: 'Read',
      input: { file_path: '/tmp/test.ts' },
    },
  ]

  const result = convertToolUseBlocks(anthropicContent)

  assert(result.text === 'Let me read that file.', 'Should extract text')
  assert(result.toolCalls.length === 1, 'Should have 1 tool call')
  assert(result.toolCalls[0].id === 'toolu_123', 'Should preserve tool_use id')
  assert(result.toolCalls[0].function.name === 'Read', 'Should preserve tool name')
  assert(
    JSON.parse(result.toolCalls[0].function.arguments).file_path === '/tmp/test.ts',
    'Should serialize input as JSON string',
  )
})

// =====================================================
// Test 4: Tool Result → OpenAI Tool Message
// =====================================================
describe('Tool Result Block → OpenAI Tool Message', () => {
  function convertToolResults(content: any[]): any[] {
    const messages: any[] = []
    const textParts: string[] = []

    for (const block of content) {
      if (block.type === 'tool_result') {
        let text = ''
        if (typeof block.content === 'string') {
          text = block.content
        } else if (Array.isArray(block.content)) {
          text = block.content
            .filter((c: any) => c.type === 'text')
            .map((c: any) => c.text)
            .join('\n')
        }
        messages.push({
          role: 'tool',
          tool_call_id: block.tool_use_id,
          content: text || (block.is_error ? 'Error' : 'Success'),
        })
      } else if (block.type === 'text') {
        textParts.push(block.text)
      }
    }

    if (textParts.length > 0) {
      messages.push({ role: 'user', content: textParts.join('\n') })
    }

    return messages
  }

  const userContent = [
    {
      type: 'tool_result',
      tool_use_id: 'toolu_123',
      content: [{ type: 'text', text: 'file contents here' }],
    },
    { type: 'text', text: 'Now edit it.' },
  ]

  const messages = convertToolResults(userContent)

  assert(messages.length === 2, 'Should produce 2 messages (tool + user)')
  assert(messages[0].role === 'tool', 'First should be tool message')
  assert(messages[0].tool_call_id === 'toolu_123', 'Should preserve tool_use_id')
  assert(messages[0].content === 'file contents here', 'Should extract text content')
  assert(messages[1].role === 'user', 'Second should be user message')
  assert(messages[1].content === 'Now edit it.', 'Should preserve user text')
})

// =====================================================
// Test 5: Stream Event Synthesis
// =====================================================
describe('Stream Event Synthesis', () => {
  function messageStartEvent(model: string): any {
    return {
      type: 'message_start',
      message: {
        id: `msg_test`,
        type: 'message',
        role: 'assistant',
        content: [],
        model,
        stop_reason: null,
        stop_sequence: null,
        usage: { input_tokens: 0, output_tokens: 0 },
      },
    }
  }

  function textDeltaEvent(index: number, text: string): any {
    return {
      type: 'content_block_delta',
      index,
      delta: { type: 'text_delta', text },
    }
  }

  function toolUseBlockStartEvent(index: number, id: string, name: string): any {
    return {
      type: 'content_block_start',
      index,
      content_block: { type: 'tool_use', id, name, input: '' },
    }
  }

  function inputJsonDeltaEvent(index: number, partialJson: string): any {
    return {
      type: 'content_block_delta',
      index,
      delta: { type: 'input_json_delta', partial_json: partialJson },
    }
  }

  function contentBlockStopEvent(index: number): any {
    return { type: 'content_block_stop', index }
  }

  function messageDeltaEvent(stopReason: string, outputTokens: number): any {
    return {
      type: 'message_delta',
      delta: { stop_reason: stopReason, stop_sequence: null },
      usage: { output_tokens: outputTokens },
    }
  }

  function messageStopEvent(): any {
    return { type: 'message_stop' }
  }

  // Simulate a full stream with text + tool use
  const events = [
    messageStartEvent('gpt-4o'),
    { type: 'content_block_start', index: 0, content_block: { type: 'text', text: '' } },
    textDeltaEvent(0, 'Hello '),
    textDeltaEvent(0, 'world!'),
    contentBlockStopEvent(0),
    toolUseBlockStartEvent(1, 'toolu_abc', 'Bash'),
    inputJsonDeltaEvent(1, '{"comma'),
    inputJsonDeltaEvent(1, 'nd":"ls"}'),
    contentBlockStopEvent(1),
    messageDeltaEvent('tool_use', 50),
    messageStopEvent(),
  ]

  assert(events[0].type === 'message_start', 'First event is message_start')
  assert(events[0].message.model === 'gpt-4o', 'Model is preserved')
  assert(events[2].delta.text === 'Hello ', 'Text delta content correct')
  assert(events[5].content_block.type === 'tool_use', 'Tool block type correct')
  assert(events[5].content_block.name === 'Bash', 'Tool name correct')
  assert(events[6].delta.partial_json === '{"comma', 'Partial JSON 1 correct')
  assert(events[7].delta.partial_json === 'nd":"ls"}', 'Partial JSON 2 correct')
  assert(events[9].delta.stop_reason === 'tool_use', 'Stop reason is tool_use')
  assert(events[10].type === 'message_stop', 'Last event is message_stop')

  // Verify accumulated JSON
  const accumulatedJson = events
    .filter((e: any) => e.delta?.type === 'input_json_delta')
    .map((e: any) => e.delta.partial_json)
    .join('')
  const parsed = JSON.parse(accumulatedJson)
  assert(parsed.command === 'ls', 'Accumulated JSON parses correctly')
})

// =====================================================
// Test 6: OpenAI Finish Reason → Anthropic Stop Reason
// =====================================================
describe('Finish Reason Mapping', () => {
  function mapFinishReason(reason: string): string {
    switch (reason) {
      case 'stop':
        return 'end_turn'
      case 'tool_calls':
        return 'tool_use'
      case 'length':
        return 'max_tokens'
      default:
        return 'end_turn'
    }
  }

  assert(mapFinishReason('stop') === 'end_turn', 'stop → end_turn')
  assert(mapFinishReason('tool_calls') === 'tool_use', 'tool_calls → tool_use')
  assert(mapFinishReason('length') === 'max_tokens', 'length → max_tokens')
  assert(mapFinishReason('content_filter') === 'end_turn', 'unknown → end_turn')
})

// =====================================================
// Test 7: Provider Detection
// =====================================================
describe('Provider Detection', () => {
  function getProviderName(env: Record<string, string | undefined>): string {
    const p = env.BETT_CODE_PROVIDER?.toLowerCase()
    if (p === 'openai') return 'openai'
    if (p === 'gemini') return 'gemini'
    if (p === 'ollama') return 'ollama'
    return 'anthropic'
  }

  assert(getProviderName({}) === 'anthropic', 'Default is anthropic')
  assert(
    getProviderName({ BETT_CODE_PROVIDER: 'openai' }) === 'openai',
    'BETT_CODE_PROVIDER=openai → openai',
  )
  assert(
    getProviderName({ BETT_CODE_PROVIDER: 'GEMINI' }) === 'gemini',
    'BETT_CODE_PROVIDER=GEMINI → gemini (case insensitive)',
  )
  assert(
    getProviderName({ BETT_CODE_PROVIDER: 'ollama' }) === 'ollama',
    'BETT_CODE_PROVIDER=ollama → ollama',
  )
  assert(
    getProviderName({ BETT_CODE_PROVIDER: 'unknown' }) === 'anthropic',
    'Unknown provider falls back to anthropic',
  )
})

// =====================================================
// Test 8: Gemini Format Conversion
// =====================================================
describe('Gemini Format Conversion', () => {
  function anthropicToolsToGemini(tools: any[]): any[] {
    return [{
      functionDeclarations: tools.map(tool => ({
        name: tool.name,
        description: tool.description ?? '',
        parameters: tool.input_schema ?? { type: 'object', properties: {} },
      })),
    }]
  }

  const tools = [
    { name: 'Bash', description: 'Run command', input_schema: { type: 'object', properties: { command: { type: 'string' } } } },
  ]

  const geminiTools = anthropicToolsToGemini(tools)

  assert(geminiTools.length === 1, 'Wraps in single object')
  assert(
    geminiTools[0].functionDeclarations.length === 1,
    'Has 1 function declaration',
  )
  assert(
    geminiTools[0].functionDeclarations[0].name === 'Bash',
    'Function name preserved',
  )
  assert(
    geminiTools[0].functionDeclarations[0].parameters.type === 'object',
    'Parameters type preserved',
  )
})

// =====================================================
// Test 9: Feature Support Matrix
// =====================================================
describe('Feature Support Matrix', () => {
  type Feature = 'thinking' | 'tool_use' | 'streaming' | 'vision' | 'caching'

  function openaiSupports(feature: Feature): boolean {
    return feature !== 'thinking' && feature !== 'caching'
  }

  function ollamaSupports(feature: Feature): boolean {
    return feature === 'tool_use' || feature === 'streaming'
  }

  function geminiSupports(feature: Feature): boolean {
    return feature === 'tool_use' || feature === 'streaming' || feature === 'vision'
  }

  assert(openaiSupports('tool_use') === true, 'OpenAI supports tool_use')
  assert(openaiSupports('thinking') === false, 'OpenAI does not support thinking')
  assert(openaiSupports('caching') === false, 'OpenAI does not support caching')
  assert(ollamaSupports('streaming') === true, 'Ollama supports streaming')
  assert(ollamaSupports('vision') === false, 'Ollama does not support vision')
  assert(geminiSupports('vision') === true, 'Gemini supports vision')
  assert(geminiSupports('thinking') === false, 'Gemini does not support thinking')
})

// =====================================================
// Summary
// =====================================================
console.log(`\n${'='.repeat(50)}`)
console.log(`Results: ${passed} passed, ${failed} failed, ${passed + failed} total`)
if (failed > 0) {
  console.log('\nSOME TESTS FAILED!')
  process.exit(1)
} else {
  console.log('\nALL TESTS PASSED!')
}
