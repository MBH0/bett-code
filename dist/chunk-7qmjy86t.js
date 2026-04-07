// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/providers/anthropic.ts
class AnthropicProvider {
  client;
  name = "anthropic";
  constructor(client) {
    this.client = client;
  }
  async createStream(params, signal) {
    const result = await this.client.beta.messages.create({ ...params, stream: true }, { signal }).withResponse();
    return {
      stream: result.data,
      requestId: result.request_id
    };
  }
  async createMessage(params, signal) {
    return await this.client.beta.messages.create(params, { signal });
  }
  supportsFeature(_feature) {
    return true;
  }
}
var init_anthropic = () => {};
init_anthropic();

export {
  AnthropicProvider
};
