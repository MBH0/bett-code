// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/providers/types.ts
function createUsage(inputTokens, outputTokens) {
  return {
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0
  };
}
var init_types = () => {};

// src/services/api/providers/stream-adapter.ts
function messageStartEvent(model, usage) {
  return {
    type: "message_start",
    message: {
      id: `msg_${Date.now()}`,
      type: "message",
      role: "assistant",
      content: [],
      model,
      stop_reason: null,
      stop_sequence: null,
      usage: usage ?? createUsage(0, 0)
    }
  };
}
function textBlockStartEvent(index) {
  return {
    type: "content_block_start",
    index,
    content_block: {
      type: "text",
      text: ""
    }
  };
}
function toolUseBlockStartEvent(index, id, name) {
  return {
    type: "content_block_start",
    index,
    content_block: {
      type: "tool_use",
      id,
      name,
      input: ""
    }
  };
}
function textDeltaEvent(index, text) {
  return {
    type: "content_block_delta",
    index,
    delta: {
      type: "text_delta",
      text
    }
  };
}
function inputJsonDeltaEvent(index, partialJson) {
  return {
    type: "content_block_delta",
    index,
    delta: {
      type: "input_json_delta",
      partial_json: partialJson
    }
  };
}
function contentBlockStopEvent(index) {
  return {
    type: "content_block_stop",
    index
  };
}
function messageDeltaEvent(stopReason, outputTokens, inputTokens) {
  return {
    type: "message_delta",
    delta: {
      stop_reason: stopReason,
      stop_sequence: null
    },
    usage: {
      input_tokens: inputTokens ?? 0,
      output_tokens: outputTokens,
      cache_read_input_tokens: 0,
      cache_creation_input_tokens: 0
    }
  };
}
function messageStopEvent() {
  return {
    type: "message_stop"
  };
}
function wrapAsAnthropicStream(iterable) {
  return Object.assign(iterable, {
    controller: { abort: () => {} }
  });
}
var init_stream_adapter = __esm(() => {
  init_types();
});

export { createUsage, init_types, messageStartEvent, textBlockStartEvent, toolUseBlockStartEvent, textDeltaEvent, inputJsonDeltaEvent, contentBlockStopEvent, messageDeltaEvent, messageStopEvent, wrapAsAnthropicStream, init_stream_adapter };
