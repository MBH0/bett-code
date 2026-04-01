import type {
  BetaContentBlock,
  BetaMessage,
  BetaRawMessageStreamEvent,
  BetaUsage,
} from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
import { createUsage } from './types.js'

/**
 * Creates a synthetic message_start event.
 */
export function messageStartEvent(
  model: string,
  usage?: BetaUsage,
): BetaRawMessageStreamEvent {
  return {
    type: 'message_start',
    message: {
      id: `msg_${Date.now()}`,
      type: 'message',
      role: 'assistant',
      content: [],
      model,
      stop_reason: null,
      stop_sequence: null,
      usage: usage ?? createUsage(0, 0),
    } as BetaMessage,
  } as BetaRawMessageStreamEvent
}

/**
 * Creates a content_block_start event for a text block.
 */
export function textBlockStartEvent(
  index: number,
): BetaRawMessageStreamEvent {
  return {
    type: 'content_block_start',
    index,
    content_block: {
      type: 'text',
      text: '',
    },
  } as unknown as BetaRawMessageStreamEvent
}

/**
 * Creates a content_block_start event for a tool_use block.
 */
export function toolUseBlockStartEvent(
  index: number,
  id: string,
  name: string,
): BetaRawMessageStreamEvent {
  return {
    type: 'content_block_start',
    index,
    content_block: {
      type: 'tool_use',
      id,
      name,
      input: '',
    },
  } as unknown as BetaRawMessageStreamEvent
}

/**
 * Creates a content_block_delta event with text_delta.
 */
export function textDeltaEvent(
  index: number,
  text: string,
): BetaRawMessageStreamEvent {
  return {
    type: 'content_block_delta',
    index,
    delta: {
      type: 'text_delta',
      text,
    },
  } as unknown as BetaRawMessageStreamEvent
}

/**
 * Creates a content_block_delta event with input_json_delta.
 */
export function inputJsonDeltaEvent(
  index: number,
  partialJson: string,
): BetaRawMessageStreamEvent {
  return {
    type: 'content_block_delta',
    index,
    delta: {
      type: 'input_json_delta',
      partial_json: partialJson,
    },
  } as unknown as BetaRawMessageStreamEvent
}

/**
 * Creates a content_block_stop event.
 */
export function contentBlockStopEvent(
  index: number,
): BetaRawMessageStreamEvent {
  return {
    type: 'content_block_stop',
    index,
  } as unknown as BetaRawMessageStreamEvent
}

/**
 * Creates a message_delta event with stop_reason and usage.
 */
export function messageDeltaEvent(
  stopReason: string,
  outputTokens: number,
): BetaRawMessageStreamEvent {
  return {
    type: 'message_delta',
    delta: {
      stop_reason: stopReason,
      stop_sequence: null,
    },
    usage: {
      output_tokens: outputTokens,
    },
  } as unknown as BetaRawMessageStreamEvent
}

/**
 * Creates a message_stop event.
 */
export function messageStopEvent(): BetaRawMessageStreamEvent {
  return {
    type: 'message_stop',
  } as unknown as BetaRawMessageStreamEvent
}

/**
 * Wraps an AsyncIterable of BetaRawMessageStreamEvent into an object
 * that mimics the Anthropic SDK Stream shape enough for the existing
 * streaming loop (which uses `for await (const part of stream)`).
 *
 * The existing code also checks for `'controller' in stream` to
 * distinguish streams from error messages, so we include a stub controller.
 */
export function wrapAsAnthropicStream(
  iterable: AsyncIterable<BetaRawMessageStreamEvent>,
): AsyncIterable<BetaRawMessageStreamEvent> & { controller: unknown } {
  return Object.assign(iterable, {
    controller: { abort: () => {} },
  })
}
