// @bun
import {
  anthropicParamsToOpenAI,
  init_message_convert
} from "./chunk-62r94tdq.js";
import {
  contentBlockStopEvent,
  createUsage,
  init_stream_adapter,
  init_types,
  inputJsonDeltaEvent,
  messageDeltaEvent,
  messageStartEvent,
  messageStopEvent,
  textBlockStartEvent,
  textDeltaEvent,
  toolUseBlockStartEvent
} from "./chunk-ewzh7pdh.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/api/providers/openai-compat.ts
class OpenAICompatProvider {
  name;
  apiKey;
  baseUrl;
  model;
  constructor(config) {
    this.name = config.provider;
    this.apiKey = config.apiKey ?? process.env.BETT_CODE_PROVIDER_API_KEY ?? "";
    this.baseUrl = config.baseUrl ?? process.env.BETT_CODE_PROVIDER_BASE_URL ?? "https://api.openai.com/v1";
    this.model = config.model;
  }
  async createStream(params, signal) {
    const openaiParams = anthropicParamsToOpenAI(params);
    openaiParams.stream = true;
    openaiParams.stream_options = { include_usage: true };
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}
      },
      body: JSON.stringify(openaiParams),
      signal
    });
    if (!response.ok) {
      const errorBody = await response.text().catch(() => "unknown error");
      throw new Error(`${this.name} API error ${response.status}: ${errorBody}`);
    }
    const requestId = response.headers.get("x-request-id") ?? undefined;
    return {
      stream: this.transformStream(response, params.model),
      requestId
    };
  }
  async* transformStream(response, model) {
    yield messageStartEvent(model);
    let currentContentIndex = 0;
    let hasStartedTextBlock = false;
    const toolCallIndices = new Map;
    const toolCallArgs = new Map;
    let totalInputTokens = 0;
    let totalOutputTokens = 0;
    let finishReason = "end_turn";
    const reader = response.body?.getReader();
    if (!reader)
      throw new Error("No response body");
    const decoder = new TextDecoder;
    let buffer = "";
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(`
`);
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: "))
            continue;
          const data = trimmed.slice(6);
          if (data === "[DONE]")
            continue;
          let chunk;
          try {
            chunk = JSON.parse(data);
          } catch {
            continue;
          }
          if (chunk.usage && chunk.usage.prompt_tokens != null) {
            totalInputTokens = chunk.usage.prompt_tokens;
            totalOutputTokens = chunk.usage.completion_tokens ?? totalOutputTokens;
          }
          const choice = chunk.choices?.[0];
          if (!choice)
            continue;
          if (choice.delta.content) {
            if (!hasStartedTextBlock) {
              yield textBlockStartEvent(currentContentIndex);
              hasStartedTextBlock = true;
            }
            yield textDeltaEvent(currentContentIndex, choice.delta.content);
          }
          if (choice.delta.tool_calls) {
            try {
              __require("fs").appendFileSync("/tmp/bett-debug.log", `[openai] tool_call delta: ${JSON.stringify(choice.delta.tool_calls)}
`);
            } catch {}
            for (const tc of choice.delta.tool_calls) {
              const tcIndex = tc.index;
              if (tc.id && tc.function?.name) {
                if (hasStartedTextBlock) {
                  yield contentBlockStopEvent(currentContentIndex);
                  currentContentIndex++;
                  hasStartedTextBlock = false;
                }
                toolCallIndices.set(tcIndex, currentContentIndex);
                toolCallArgs.set(tcIndex, "");
                yield toolUseBlockStartEvent(currentContentIndex, tc.id, tc.function.name);
              }
              if (tc.function?.arguments) {
                const existingArgs = toolCallArgs.get(tcIndex) ?? "";
                toolCallArgs.set(tcIndex, existingArgs + tc.function.arguments);
                const blockIndex = toolCallIndices.get(tcIndex);
                if (blockIndex !== undefined) {
                  yield inputJsonDeltaEvent(blockIndex, tc.function.arguments);
                }
              }
            }
          }
          if (choice.finish_reason) {
            finishReason = choice.finish_reason === "tool_calls" ? "tool_use" : choice.finish_reason === "stop" ? "end_turn" : choice.finish_reason === "length" ? "max_tokens" : "end_turn";
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
    if (hasStartedTextBlock) {
      yield contentBlockStopEvent(currentContentIndex);
      currentContentIndex++;
    }
    for (const [, blockIndex] of toolCallIndices) {
      yield contentBlockStopEvent(blockIndex);
      currentContentIndex = Math.max(currentContentIndex, blockIndex + 1);
    }
    yield messageDeltaEvent(finishReason, totalOutputTokens, totalInputTokens);
    yield messageStopEvent();
  }
  async createMessage(params, signal) {
    const openaiParams = anthropicParamsToOpenAI(params);
    openaiParams.stream = false;
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}
      },
      body: JSON.stringify(openaiParams),
      signal
    });
    if (!response.ok) {
      const errorBody = await response.text().catch(() => "unknown error");
      throw new Error(`${this.name} API error ${response.status}: ${errorBody}`);
    }
    const data = await response.json();
    const choice = data.choices[0];
    if (!choice)
      throw new Error("No choices in response");
    const content = [];
    if (choice.message.content) {
      content.push({ type: "text", text: choice.message.content });
    }
    if (choice.message.tool_calls) {
      for (const tc of choice.message.tool_calls) {
        let parsedArgs;
        try {
          parsedArgs = JSON.parse(tc.function.arguments);
        } catch {
          parsedArgs = tc.function.arguments;
        }
        content.push({
          type: "tool_use",
          id: tc.id,
          name: tc.function.name,
          input: parsedArgs
        });
      }
    }
    const stopReason = choice.finish_reason === "tool_calls" ? "tool_use" : choice.finish_reason === "stop" ? "end_turn" : choice.finish_reason === "length" ? "max_tokens" : "end_turn";
    return {
      id: data.id,
      type: "message",
      role: "assistant",
      content,
      model: data.model,
      stop_reason: stopReason,
      stop_sequence: null,
      usage: createUsage(data.usage?.prompt_tokens ?? 0, data.usage?.completion_tokens ?? 0)
    };
  }
  supportsFeature(feature) {
    switch (feature) {
      case "thinking":
        return false;
      case "caching":
        return false;
      case "tool_use":
        return true;
      case "streaming":
        return true;
      case "vision":
        return true;
    }
  }
}
var init_openai_compat = __esm(() => {
  init_types();
  init_message_convert();
  init_stream_adapter();
});

export { OpenAICompatProvider, init_openai_compat };
