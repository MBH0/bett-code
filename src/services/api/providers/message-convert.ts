import type {
  BetaMessageStreamParams,
  BetaToolUnion,
} from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'

/**
 * Represents an OpenAI-compatible chat message.
 */
export interface OpenAIChatMessage {
  role: 'system' | 'user' | 'assistant' | 'tool'
  content?: string | null
  tool_calls?: OpenAIToolCall[]
  tool_call_id?: string
  name?: string
}

export interface OpenAIToolCall {
  id: string
  type: 'function'
  function: {
    name: string
    arguments: string
  }
}

export interface OpenAITool {
  type: 'function'
  function: {
    name: string
    description?: string
    parameters?: Record<string, unknown>
    strict?: boolean
  }
}

export interface OpenAIChatCompletionParams {
  model: string
  messages: OpenAIChatMessage[]
  tools?: OpenAITool[]
  tool_choice?: 'auto' | 'none' | 'required' | { type: 'function'; function: { name: string } }
  max_tokens?: number
  temperature?: number
  stream?: boolean
}

/**
 * Convert Anthropic BetaToolUnion[] to OpenAI tool format.
 */
export function anthropicToolsToOpenAI(tools: BetaToolUnion[]): OpenAITool[] {
  return tools.map(tool => {
    // Handle different BetaToolUnion variants
    const t = tool as Record<string, unknown>
    return {
      type: 'function' as const,
      function: {
        name: t.name as string,
        description: (t.description as string) ?? '',
        parameters: (t.input_schema as Record<string, unknown>) ?? { type: 'object', properties: {} },
      },
    }
  })
}

/**
 * Convert Anthropic BetaMessageStreamParams to OpenAI chat completion params.
 */
export function anthropicParamsToOpenAI(
  params: BetaMessageStreamParams,
): OpenAIChatCompletionParams {
  const messages: OpenAIChatMessage[] = []

  // System prompt
  if (params.system) {
    const systemContent = Array.isArray(params.system)
      ? params.system.map(block => {
          if (typeof block === 'string') return block
          if ('text' in block) return (block as { text: string }).text
          return ''
        }).join('\n')
      : String(params.system)
    if (systemContent) {
      messages.push({ role: 'system', content: systemContent })
    }
  }

  // Convert messages
  for (const msg of params.messages) {
    const role = msg.role
    if (role === 'user') {
      const content = msg.content
      if (typeof content === 'string') {
        messages.push({ role: 'user', content })
      } else if (Array.isArray(content)) {
        // Process content blocks
        const textParts: string[] = []
        const toolResults: { tool_call_id: string; content: string }[] = []

        for (const block of content) {
          const b = block as Record<string, unknown>
          if (b.type === 'text') {
            textParts.push(b.text as string)
          } else if (b.type === 'tool_result') {
            const resultContent = b.content
            let text = ''
            if (typeof resultContent === 'string') {
              text = resultContent
            } else if (Array.isArray(resultContent)) {
              text = (resultContent as Array<Record<string, unknown>>)
                .filter(c => c.type === 'text')
                .map(c => c.text as string)
                .join('\n')
            }
            toolResults.push({
              tool_call_id: b.tool_use_id as string,
              content: text || (b.is_error ? 'Error' : 'Success'),
            })
          }
          // Skip image/document blocks for now (handled by vision-capable providers)
        }

        // Emit tool results as separate messages (OpenAI format)
        for (const tr of toolResults) {
          messages.push({
            role: 'tool',
            tool_call_id: tr.tool_call_id,
            content: tr.content,
          })
        }

        // Emit text content as user message
        if (textParts.length > 0) {
          messages.push({ role: 'user', content: textParts.join('\n') })
        }
      }
    } else if (role === 'assistant') {
      const content = msg.content
      if (typeof content === 'string') {
        messages.push({ role: 'assistant', content })
      } else if (Array.isArray(content)) {
        const textParts: string[] = []
        const toolCalls: OpenAIToolCall[] = []

        for (const block of content) {
          const b = block as Record<string, unknown>
          if (b.type === 'text') {
            textParts.push(b.text as string)
          } else if (b.type === 'tool_use') {
            toolCalls.push({
              id: b.id as string,
              type: 'function',
              function: {
                name: b.name as string,
                arguments: typeof b.input === 'string'
                  ? b.input
                  : JSON.stringify(b.input),
              },
            })
          }
          // Skip thinking blocks (not supported by OpenAI)
        }

        const assistantMsg: OpenAIChatMessage = {
          role: 'assistant',
          content: textParts.join('') || null,
        }
        if (toolCalls.length > 0) {
          assistantMsg.tool_calls = toolCalls
        }
        messages.push(assistantMsg)
      }
    }
  }

  // Convert tool_choice
  let toolChoice: OpenAIChatCompletionParams['tool_choice'] = undefined
  if (params.tool_choice) {
    const tc = params.tool_choice as Record<string, unknown>
    if (tc.type === 'auto') {
      toolChoice = 'auto'
    } else if (tc.type === 'any') {
      toolChoice = 'required'
    } else if (tc.type === 'tool' && tc.name) {
      toolChoice = { type: 'function', function: { name: tc.name as string } }
    }
  }

  const result: OpenAIChatCompletionParams = {
    model: params.model,
    messages,
    max_tokens: params.max_tokens,
    stream: true,
  }

  if (params.tools && params.tools.length > 0) {
    result.tools = anthropicToolsToOpenAI(params.tools as BetaToolUnion[])
    if (toolChoice) {
      result.tool_choice = toolChoice
    }
  }

  // Only set temperature when thinking is not active (Anthropic behavior)
  if (params.temperature !== undefined) {
    result.temperature = params.temperature
  }

  return result
}

/**
 * Convert Anthropic BetaToolUnion[] to Google Gemini functionDeclarations format.
 */
export function anthropicToolsToGemini(tools: BetaToolUnion[]): Record<string, unknown>[] {
  return [{
    functionDeclarations: tools.map(tool => {
      const t = tool as Record<string, unknown>
      const schema = (t.input_schema as Record<string, unknown>) ?? { type: 'object', properties: {} }
      return {
        name: t.name as string,
        description: (t.description as string) ?? '',
        parameters: schema,
      }
    }),
  }]
}

/**
 * Convert Anthropic BetaMessageStreamParams to Gemini generateContent params.
 */
export function anthropicParamsToGemini(
  params: BetaMessageStreamParams,
): Record<string, unknown> {
  const contents: Record<string, unknown>[] = []

  // System instruction
  let systemInstruction: Record<string, unknown> | undefined
  if (params.system) {
    const systemText = Array.isArray(params.system)
      ? params.system.map(block => {
          if (typeof block === 'string') return block
          if ('text' in (block as Record<string, unknown>)) return (block as { text: string }).text
          return ''
        }).join('\n')
      : String(params.system)
    if (systemText) {
      systemInstruction = { parts: [{ text: systemText }] }
    }
  }

  // Convert messages
  for (const msg of params.messages) {
    const role = msg.role === 'assistant' ? 'model' : 'user'
    const content = msg.content

    if (typeof content === 'string') {
      contents.push({ role, parts: [{ text: content }] })
    } else if (Array.isArray(content)) {
      const parts: Record<string, unknown>[] = []

      for (const block of content) {
        const b = block as Record<string, unknown>
        if (b.type === 'text') {
          parts.push({ text: b.text as string })
        } else if (b.type === 'tool_use') {
          parts.push({
            functionCall: {
              name: b.name as string,
              args: typeof b.input === 'string' ? JSON.parse(b.input as string) : b.input,
            },
          })
        } else if (b.type === 'tool_result') {
          const resultContent = b.content
          let responseData: unknown = {}
          if (typeof resultContent === 'string') {
            responseData = { result: resultContent }
          } else if (Array.isArray(resultContent)) {
            const text = (resultContent as Array<Record<string, unknown>>)
              .filter(c => c.type === 'text')
              .map(c => c.text as string)
              .join('\n')
            responseData = { result: text || (b.is_error ? 'Error' : 'Success') }
          }
          parts.push({
            functionResponse: {
              name: b.name as string ?? 'unknown',
              response: responseData,
            },
          })
        }
      }

      if (parts.length > 0) {
        contents.push({ role, parts })
      }
    }
  }

  const result: Record<string, unknown> = {
    contents,
    generationConfig: {
      maxOutputTokens: params.max_tokens,
      ...(params.temperature !== undefined && { temperature: params.temperature }),
    },
  }

  if (systemInstruction) {
    result.systemInstruction = systemInstruction
  }

  if (params.tools && params.tools.length > 0) {
    result.tools = anthropicToolsToGemini(params.tools as BetaToolUnion[])
  }

  return result
}
