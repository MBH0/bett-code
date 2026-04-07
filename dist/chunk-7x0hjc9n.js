// @bun
import {
  anthropicParamsToGemini,
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/providers/gemini.ts
class GeminiProvider {
  name = "gemini";
  apiKey;
  baseUrl;
  model;
  constructor(config) {
    this.apiKey = config.apiKey ?? process.env.BETT_CODE_PROVIDER_API_KEY ?? process.env.GEMINI_API_KEY ?? "";
    this.baseUrl = config.baseUrl ?? "https://generativelanguage.googleapis.com/v1beta";
    this.model = config.model;
  }
  async createStream(params, signal) {
    const geminiParams = anthropicParamsToGemini(params);
    const model = params.model || this.model;
    const url = `${this.baseUrl}/models/${model}:streamGenerateContent?alt=sse&key=${this.apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiParams),
      signal
    });
    if (!response.ok) {
      const errorBody = await response.text().catch(() => "unknown error");
      throw new Error(`Gemini API error ${response.status}: ${errorBody}`);
    }
    return {
      stream: this.transformStream(response, model)
    };
  }
  async* transformStream(response, model) {
    yield messageStartEvent(model);
    let currentIndex = 0;
    let hasStartedTextBlock = false;
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
          let chunk;
          try {
            chunk = JSON.parse(data);
          } catch {
            continue;
          }
          const candidate = chunk.candidates?.[0];
          if (!candidate?.content?.parts)
            continue;
          for (const part of candidate.content.parts) {
            if ("text" in part && part.text) {
              if (!hasStartedTextBlock) {
                yield textBlockStartEvent(currentIndex);
                hasStartedTextBlock = true;
              }
              yield textDeltaEvent(currentIndex, part.text);
            } else if ("functionCall" in part && part.functionCall) {
              if (hasStartedTextBlock) {
                yield contentBlockStopEvent(currentIndex);
                currentIndex++;
                hasStartedTextBlock = false;
              }
              const fc = part.functionCall;
              const toolId = `toolu_${Date.now()}_${currentIndex}`;
              yield toolUseBlockStartEvent(currentIndex, toolId, fc.name);
              const argsJson = JSON.stringify(fc.args ?? {});
              yield inputJsonDeltaEvent(currentIndex, argsJson);
              yield contentBlockStopEvent(currentIndex);
              currentIndex++;
            }
          }
          if (candidate.finishReason) {
            finishReason = candidate.finishReason === "STOP" ? "end_turn" : candidate.finishReason === "MAX_TOKENS" ? "max_tokens" : "end_turn";
          }
          if (chunk.usageMetadata) {
            totalOutputTokens = chunk.usageMetadata.candidatesTokenCount ?? 0;
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
    if (hasStartedTextBlock) {
      yield contentBlockStopEvent(currentIndex);
      currentIndex++;
    }
    yield messageDeltaEvent(finishReason, totalOutputTokens);
    yield messageStopEvent();
  }
  async createMessage(params, signal) {
    const geminiParams = anthropicParamsToGemini(params);
    const model = params.model || this.model;
    const url = `${this.baseUrl}/models/${model}:generateContent?key=${this.apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiParams),
      signal
    });
    if (!response.ok) {
      const errorBody = await response.text().catch(() => "unknown error");
      throw new Error(`Gemini API error ${response.status}: ${errorBody}`);
    }
    const data = await response.json();
    const candidate = data.candidates?.[0];
    if (!candidate?.content?.parts) {
      throw new Error("No candidates in Gemini response");
    }
    const content = [];
    for (const part of candidate.content.parts) {
      if ("text" in part && part.text) {
        content.push({ type: "text", text: part.text });
      } else if ("functionCall" in part && part.functionCall) {
        content.push({
          type: "tool_use",
          id: `toolu_${Date.now()}_${content.length}`,
          name: part.functionCall.name,
          input: part.functionCall.args ?? {}
        });
      }
    }
    const stopReason = candidate.finishReason === "STOP" ? "end_turn" : candidate.finishReason === "MAX_TOKENS" ? "max_tokens" : "end_turn";
    return {
      id: `msg_gemini_${Date.now()}`,
      type: "message",
      role: "assistant",
      content,
      model,
      stop_reason: stopReason,
      stop_sequence: null,
      usage: createUsage(data.usageMetadata?.promptTokenCount ?? 0, data.usageMetadata?.candidatesTokenCount ?? 0)
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
var init_gemini = __esm(() => {
  init_types();
  init_message_convert();
  init_stream_adapter();
});
init_gemini();

export {
  GeminiProvider
};
