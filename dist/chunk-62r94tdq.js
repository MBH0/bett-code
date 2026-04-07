// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/providers/message-convert.ts
function anthropicToolsToOpenAI(tools) {
  return tools.map((tool) => {
    const t = tool;
    return {
      type: "function",
      function: {
        name: t.name,
        description: t.description ?? "",
        parameters: t.input_schema ?? { type: "object", properties: {} }
      }
    };
  });
}
function anthropicParamsToOpenAI(params) {
  const messages = [];
  if (params.system) {
    const systemContent = Array.isArray(params.system) ? params.system.map((block) => {
      if (typeof block === "string")
        return block;
      if ("text" in block)
        return block.text;
      return "";
    }).join(`
`) : String(params.system);
    if (systemContent) {
      messages.push({ role: "system", content: systemContent });
    }
  }
  for (const msg of params.messages) {
    const role = msg.role;
    if (role === "user") {
      const content = msg.content;
      if (typeof content === "string") {
        messages.push({ role: "user", content });
      } else if (Array.isArray(content)) {
        const textParts = [];
        const toolResults = [];
        for (const block of content) {
          const b = block;
          if (b.type === "text") {
            textParts.push(b.text);
          } else if (b.type === "tool_result") {
            const resultContent = b.content;
            let text = "";
            if (typeof resultContent === "string") {
              text = resultContent;
            } else if (Array.isArray(resultContent)) {
              text = resultContent.filter((c) => c.type === "text").map((c) => c.text).join(`
`);
            }
            toolResults.push({
              tool_call_id: b.tool_use_id,
              content: text || (b.is_error ? "Error" : "Success")
            });
          }
        }
        for (const tr of toolResults) {
          messages.push({
            role: "tool",
            tool_call_id: tr.tool_call_id,
            content: tr.content
          });
        }
        if (textParts.length > 0) {
          messages.push({ role: "user", content: textParts.join(`
`) });
        }
      }
    } else if (role === "assistant") {
      const content = msg.content;
      if (typeof content === "string") {
        messages.push({ role: "assistant", content });
      } else if (Array.isArray(content)) {
        const textParts = [];
        const toolCalls = [];
        for (const block of content) {
          const b = block;
          if (b.type === "text") {
            textParts.push(b.text);
          } else if (b.type === "tool_use") {
            toolCalls.push({
              id: b.id,
              type: "function",
              function: {
                name: b.name,
                arguments: typeof b.input === "string" ? b.input : JSON.stringify(b.input)
              }
            });
          }
        }
        const assistantMsg = {
          role: "assistant",
          content: textParts.join("") || null
        };
        if (toolCalls.length > 0) {
          assistantMsg.tool_calls = toolCalls;
        }
        messages.push(assistantMsg);
      }
    }
  }
  let toolChoice = undefined;
  if (params.tool_choice) {
    const tc = params.tool_choice;
    if (tc.type === "auto") {
      toolChoice = "auto";
    } else if (tc.type === "any") {
      toolChoice = "required";
    } else if (tc.type === "tool" && tc.name) {
      toolChoice = { type: "function", function: { name: tc.name } };
    }
  }
  const modelMaxTokens = {
    "gpt-4.1": 32768,
    "gpt-4.1-mini": 32768,
    "gpt-4.1-nano": 16384,
    "gpt-4o": 16384,
    "gpt-4o-mini": 16384,
    "gpt-4-turbo": 4096,
    "gpt-4": 8192,
    "gpt-3.5-turbo": 4096,
    o1: 1e5,
    "o1-mini": 65536,
    o3: 1e5,
    "o3-mini": 65536,
    "o4-mini": 1e5
  };
  const maxTokens = Math.min(params.max_tokens ?? 16384, modelMaxTokens[params.model] ?? 16384);
  const result = {
    model: params.model,
    messages,
    max_tokens: maxTokens,
    stream: true
  };
  if (params.tools && params.tools.length > 0) {
    result.tools = anthropicToolsToOpenAI(params.tools);
    if (toolChoice) {
      result.tool_choice = toolChoice;
    }
  }
  if (params.temperature !== undefined) {
    result.temperature = params.temperature;
  }
  return result;
}
function anthropicToolsToGemini(tools) {
  return [{
    functionDeclarations: tools.map((tool) => {
      const t = tool;
      const schema = t.input_schema ?? { type: "object", properties: {} };
      return {
        name: t.name,
        description: t.description ?? "",
        parameters: schema
      };
    })
  }];
}
function anthropicParamsToGemini(params) {
  const contents = [];
  let systemInstruction;
  if (params.system) {
    const systemText = Array.isArray(params.system) ? params.system.map((block) => {
      if (typeof block === "string")
        return block;
      if ("text" in block)
        return block.text;
      return "";
    }).join(`
`) : String(params.system);
    if (systemText) {
      systemInstruction = { parts: [{ text: systemText }] };
    }
  }
  for (const msg of params.messages) {
    const role = msg.role === "assistant" ? "model" : "user";
    const content = msg.content;
    if (typeof content === "string") {
      contents.push({ role, parts: [{ text: content }] });
    } else if (Array.isArray(content)) {
      const parts = [];
      for (const block of content) {
        const b = block;
        if (b.type === "text") {
          parts.push({ text: b.text });
        } else if (b.type === "tool_use") {
          parts.push({
            functionCall: {
              name: b.name,
              args: typeof b.input === "string" ? JSON.parse(b.input) : b.input
            }
          });
        } else if (b.type === "tool_result") {
          const resultContent = b.content;
          let responseData = {};
          if (typeof resultContent === "string") {
            responseData = { result: resultContent };
          } else if (Array.isArray(resultContent)) {
            const text = resultContent.filter((c) => c.type === "text").map((c) => c.text).join(`
`);
            responseData = { result: text || (b.is_error ? "Error" : "Success") };
          }
          parts.push({
            functionResponse: {
              name: b.name ?? "unknown",
              response: responseData
            }
          });
        }
      }
      if (parts.length > 0) {
        contents.push({ role, parts });
      }
    }
  }
  const result = {
    contents,
    generationConfig: {
      maxOutputTokens: params.max_tokens,
      ...params.temperature !== undefined && { temperature: params.temperature }
    }
  };
  if (systemInstruction) {
    result.systemInstruction = systemInstruction;
  }
  if (params.tools && params.tools.length > 0) {
    result.tools = anthropicToolsToGemini(params.tools);
  }
  return result;
}
var init_message_convert = () => {};

export { anthropicParamsToOpenAI, anthropicParamsToGemini, init_message_convert };
