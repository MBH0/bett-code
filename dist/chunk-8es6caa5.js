// @bun
import {
  init_process,
  writeToStderr
} from "./chunk-fbv4apne.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-h3gry12w.js";
import {
  getSessionId,
  init_state
} from "./chunk-qzn8r3qg.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-0ds34vbj.js";
import {
  __callDispose,
  __esm,
  __using
} from "./chunk-qp2qdcda.js";

// src/utils/bufferedWriter.ts
function createBufferedWriter({
  writeFn,
  flushIntervalMs = 1000,
  maxBufferSize = 100,
  maxBufferBytes = Infinity,
  immediateMode = false
}) {
  let buffer = [];
  let bufferBytes = 0;
  let flushTimer = null;
  let pendingOverflow = null;
  function clearTimer() {
    if (flushTimer) {
      clearTimeout(flushTimer);
      flushTimer = null;
    }
  }
  function flush() {
    if (pendingOverflow) {
      writeFn(pendingOverflow.join(""));
      pendingOverflow = null;
    }
    if (buffer.length === 0)
      return;
    writeFn(buffer.join(""));
    buffer = [];
    bufferBytes = 0;
    clearTimer();
  }
  function scheduleFlush() {
    if (!flushTimer) {
      flushTimer = setTimeout(flush, flushIntervalMs);
    }
  }
  function flushDeferred() {
    if (pendingOverflow) {
      pendingOverflow.push(...buffer);
      buffer = [];
      bufferBytes = 0;
      clearTimer();
      return;
    }
    const detached = buffer;
    buffer = [];
    bufferBytes = 0;
    clearTimer();
    pendingOverflow = detached;
    setImmediate(() => {
      const toWrite = pendingOverflow;
      pendingOverflow = null;
      if (toWrite)
        writeFn(toWrite.join(""));
    });
  }
  return {
    write(content) {
      if (immediateMode) {
        writeFn(content);
        return;
      }
      buffer.push(content);
      bufferBytes += content.length;
      scheduleFlush();
      if (buffer.length >= maxBufferSize || bufferBytes >= maxBufferBytes) {
        flushDeferred();
      }
    },
    flush,
    dispose() {
      flush();
    }
  };
}
var init_bufferedWriter = () => {};

// src/utils/cleanupRegistry.ts
function registerCleanup(cleanupFn) {
  cleanupFunctions.add(cleanupFn);
  return () => cleanupFunctions.delete(cleanupFn);
}
async function runCleanupFunctions() {
  await Promise.all(Array.from(cleanupFunctions).map((fn) => fn()));
}
var cleanupFunctions;
var init_cleanupRegistry = __esm(() => {
  cleanupFunctions = new Set;
});

// node_modules/@anthropic-ai/sdk/internal/tslib.mjs
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var init_tslib = () => {};

// node_modules/@anthropic-ai/sdk/internal/utils/uuid.mjs
var uuid4 = function() {
  const { crypto } = globalThis;
  if (crypto?.randomUUID) {
    uuid4 = crypto.randomUUID.bind(crypto);
    return crypto.randomUUID();
  }
  const u8 = new Uint8Array(1);
  const randomByte = crypto ? () => crypto.getRandomValues(u8)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => (+c ^ randomByte() & 15 >> +c / 4).toString(16));
};
var init_uuid = () => {};

// node_modules/@anthropic-ai/sdk/internal/errors.mjs
function isAbortError(err) {
  return typeof err === "object" && err !== null && (("name" in err) && err.name === "AbortError" || ("message" in err) && String(err.message).includes("FetchRequestCanceledException"));
}
var castToError = (err) => {
  if (err instanceof Error)
    return err;
  if (typeof err === "object" && err !== null) {
    try {
      if (Object.prototype.toString.call(err) === "[object Error]") {
        const error = new Error(err.message, err.cause ? { cause: err.cause } : {});
        if (err.stack)
          error.stack = err.stack;
        if (err.cause && !error.cause)
          error.cause = err.cause;
        if (err.name)
          error.name = err.name;
        return error;
      }
    } catch {}
    try {
      return new Error(JSON.stringify(err));
    } catch {}
  }
  return new Error(err);
};
var init_errors = () => {};

// node_modules/@anthropic-ai/sdk/core/error.mjs
var AnthropicError, APIError, APIUserAbortError, APIConnectionError, APIConnectionTimeoutError, BadRequestError, AuthenticationError, PermissionDeniedError, NotFoundError, ConflictError, UnprocessableEntityError, RateLimitError, InternalServerError;
var init_error = __esm(() => {
  init_errors();
  AnthropicError = class AnthropicError extends Error {
  };
  APIError = class APIError extends AnthropicError {
    constructor(status, error, message, headers) {
      super(`${APIError.makeMessage(status, error, message)}`);
      this.status = status;
      this.headers = headers;
      this.requestID = headers?.get("request-id");
      this.error = error;
    }
    static makeMessage(status, error, message) {
      const msg = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
      if (status && msg) {
        return `${status} ${msg}`;
      }
      if (status) {
        return `${status} status code (no body)`;
      }
      if (msg) {
        return msg;
      }
      return "(no status code or body)";
    }
    static generate(status, errorResponse, message, headers) {
      if (!status || !headers) {
        return new APIConnectionError({ message, cause: castToError(errorResponse) });
      }
      const error = errorResponse;
      if (status === 400) {
        return new BadRequestError(status, error, message, headers);
      }
      if (status === 401) {
        return new AuthenticationError(status, error, message, headers);
      }
      if (status === 403) {
        return new PermissionDeniedError(status, error, message, headers);
      }
      if (status === 404) {
        return new NotFoundError(status, error, message, headers);
      }
      if (status === 409) {
        return new ConflictError(status, error, message, headers);
      }
      if (status === 422) {
        return new UnprocessableEntityError(status, error, message, headers);
      }
      if (status === 429) {
        return new RateLimitError(status, error, message, headers);
      }
      if (status >= 500) {
        return new InternalServerError(status, error, message, headers);
      }
      return new APIError(status, error, message, headers);
    }
  };
  APIUserAbortError = class APIUserAbortError extends APIError {
    constructor({ message } = {}) {
      super(undefined, undefined, message || "Request was aborted.", undefined);
    }
  };
  APIConnectionError = class APIConnectionError extends APIError {
    constructor({ message, cause }) {
      super(undefined, undefined, message || "Connection error.", undefined);
      if (cause)
        this.cause = cause;
    }
  };
  APIConnectionTimeoutError = class APIConnectionTimeoutError extends APIConnectionError {
    constructor({ message } = {}) {
      super({ message: message ?? "Request timed out." });
    }
  };
  BadRequestError = class BadRequestError extends APIError {
  };
  AuthenticationError = class AuthenticationError extends APIError {
  };
  PermissionDeniedError = class PermissionDeniedError extends APIError {
  };
  NotFoundError = class NotFoundError extends APIError {
  };
  ConflictError = class ConflictError extends APIError {
  };
  UnprocessableEntityError = class UnprocessableEntityError extends APIError {
  };
  RateLimitError = class RateLimitError extends APIError {
  };
  InternalServerError = class InternalServerError extends APIError {
  };
});

// node_modules/@anthropic-ai/sdk/internal/utils/values.mjs
function maybeObj(x) {
  if (typeof x !== "object") {
    return {};
  }
  return x ?? {};
}
function isEmptyObj(obj) {
  if (!obj)
    return true;
  for (const _k in obj)
    return false;
  return true;
}
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
var startsWithSchemeRegexp, isAbsoluteURL = (url) => {
  return startsWithSchemeRegexp.test(url);
}, validatePositiveInteger = (name, n) => {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new AnthropicError(`${name} must be an integer`);
  }
  if (n < 0) {
    throw new AnthropicError(`${name} must be a positive integer`);
  }
  return n;
}, safeJSON = (text) => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return;
  }
};
var init_values = __esm(() => {
  init_error();
  startsWithSchemeRegexp = /^[a-z][a-z0-9+.-]*:/i;
});

// node_modules/@anthropic-ai/sdk/internal/utils/sleep.mjs
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var init_sleep = () => {};

// node_modules/@anthropic-ai/sdk/internal/utils/log.mjs
function noop() {}
function makeLogFn(fnLevel, logger, logLevel) {
  if (!logger || levelNumbers[fnLevel] > levelNumbers[logLevel]) {
    return noop;
  } else {
    return logger[fnLevel].bind(logger);
  }
}
function loggerFor(client) {
  const logger = client.logger;
  const logLevel = client.logLevel ?? "off";
  if (!logger) {
    return noopLogger;
  }
  const cachedLogger = cachedLoggers.get(logger);
  if (cachedLogger && cachedLogger[0] === logLevel) {
    return cachedLogger[1];
  }
  const levelLogger = {
    error: makeLogFn("error", logger, logLevel),
    warn: makeLogFn("warn", logger, logLevel),
    info: makeLogFn("info", logger, logLevel),
    debug: makeLogFn("debug", logger, logLevel)
  };
  cachedLoggers.set(logger, [logLevel, levelLogger]);
  return levelLogger;
}
var levelNumbers, parseLogLevel = (maybeLevel, sourceName, client) => {
  if (!maybeLevel) {
    return;
  }
  if (hasOwn(levelNumbers, maybeLevel)) {
    return maybeLevel;
  }
  loggerFor(client).warn(`${sourceName} was set to ${JSON.stringify(maybeLevel)}, expected one of ${JSON.stringify(Object.keys(levelNumbers))}`);
  return;
}, noopLogger, cachedLoggers, formatRequestDetails = (details) => {
  if (details.options) {
    details.options = { ...details.options };
    delete details.options["headers"];
  }
  if (details.headers) {
    details.headers = Object.fromEntries((details.headers instanceof Headers ? [...details.headers] : Object.entries(details.headers)).map(([name, value]) => [
      name,
      name.toLowerCase() === "x-api-key" || name.toLowerCase() === "authorization" || name.toLowerCase() === "cookie" || name.toLowerCase() === "set-cookie" ? "***" : value
    ]));
  }
  if ("retryOfRequestLogID" in details) {
    if (details.retryOfRequestLogID) {
      details.retryOf = details.retryOfRequestLogID;
    }
    delete details.retryOfRequestLogID;
  }
  return details;
};
var init_log = __esm(() => {
  init_values();
  levelNumbers = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
  };
  noopLogger = {
    error: noop,
    warn: noop,
    info: noop,
    debug: noop
  };
  cachedLoggers = new WeakMap;
});

// node_modules/@anthropic-ai/sdk/version.mjs
var VERSION = "0.52.0";
var init_version = () => {};

// node_modules/@anthropic-ai/sdk/internal/detect-platform.mjs
function getDetectedPlatform() {
  if (typeof Deno !== "undefined" && Deno.build != null) {
    return "deno";
  }
  if (typeof EdgeRuntime !== "undefined") {
    return "edge";
  }
  if (Object.prototype.toString.call(typeof globalThis.process !== "undefined" ? globalThis.process : 0) === "[object process]") {
    return "node";
  }
  return "unknown";
}
function getBrowserInfo() {
  if (typeof navigator === "undefined" || !navigator) {
    return null;
  }
  const browserPatterns = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ }
  ];
  for (const { key, pattern } of browserPatterns) {
    const match = pattern.exec(navigator.userAgent);
    if (match) {
      const major = match[1] || 0;
      const minor = match[2] || 0;
      const patch = match[3] || 0;
      return { browser: key, version: `${major}.${minor}.${patch}` };
    }
  }
  return null;
}
var isRunningInBrowser = () => {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof navigator !== "undefined";
}, getPlatformProperties = () => {
  const detectedPlatform = getDetectedPlatform();
  if (detectedPlatform === "deno") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(Deno.build.os),
      "X-Stainless-Arch": normalizeArch(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
    };
  }
  if (typeof EdgeRuntime !== "undefined") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": globalThis.process.version
    };
  }
  if (detectedPlatform === "node") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(globalThis.process.platform),
      "X-Stainless-Arch": normalizeArch(globalThis.process.arch),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": globalThis.process.version
    };
  }
  const browserInfo = getBrowserInfo();
  if (browserInfo) {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${browserInfo.browser}`,
      "X-Stainless-Runtime-Version": browserInfo.version
    };
  }
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": VERSION,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  };
}, normalizeArch = (arch) => {
  if (arch === "x32")
    return "x32";
  if (arch === "x86_64" || arch === "x64")
    return "x64";
  if (arch === "arm")
    return "arm";
  if (arch === "aarch64" || arch === "arm64")
    return "arm64";
  if (arch)
    return `other:${arch}`;
  return "unknown";
}, normalizePlatform = (platform) => {
  platform = platform.toLowerCase();
  if (platform.includes("ios"))
    return "iOS";
  if (platform === "android")
    return "Android";
  if (platform === "darwin")
    return "MacOS";
  if (platform === "win32")
    return "Windows";
  if (platform === "freebsd")
    return "FreeBSD";
  if (platform === "openbsd")
    return "OpenBSD";
  if (platform === "linux")
    return "Linux";
  if (platform)
    return `Other:${platform}`;
  return "Unknown";
}, _platformHeaders, getPlatformHeaders = () => {
  return _platformHeaders ?? (_platformHeaders = getPlatformProperties());
};
var init_detect_platform = __esm(() => {
  init_version();
});

// node_modules/@anthropic-ai/sdk/internal/shims.mjs
function getDefaultFetch() {
  if (typeof fetch !== "undefined") {
    return fetch;
  }
  throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`");
}
function makeReadableStream(...args) {
  const ReadableStream = globalThis.ReadableStream;
  if (typeof ReadableStream === "undefined") {
    throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  }
  return new ReadableStream(...args);
}
function ReadableStreamFrom(iterable) {
  let iter = Symbol.asyncIterator in iterable ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator]();
  return makeReadableStream({
    start() {},
    async pull(controller) {
      const { done, value } = await iter.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
    async cancel() {
      await iter.return?.();
    }
  });
}
function ReadableStreamToAsyncIterable(stream) {
  if (stream[Symbol.asyncIterator])
    return stream;
  const reader = stream.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done)
          reader.releaseLock();
        return result;
      } catch (e) {
        reader.releaseLock();
        throw e;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return { done: true, value: undefined };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
async function CancelReadableStream(stream) {
  if (stream === null || typeof stream !== "object")
    return;
  if (stream[Symbol.asyncIterator]) {
    await stream[Symbol.asyncIterator]().return?.();
    return;
  }
  const reader = stream.getReader();
  const cancelPromise = reader.cancel();
  reader.releaseLock();
  await cancelPromise;
}
var init_shims = () => {};

// node_modules/@anthropic-ai/sdk/internal/request-options.mjs
var FallbackEncoder = ({ headers, body }) => {
  return {
    bodyHeaders: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  };
};
var init_request_options = () => {};

// node_modules/@anthropic-ai/sdk/internal/utils/bytes.mjs
function concatBytes(buffers) {
  let length = 0;
  for (const buffer of buffers) {
    length += buffer.length;
  }
  const output = new Uint8Array(length);
  let index = 0;
  for (const buffer of buffers) {
    output.set(buffer, index);
    index += buffer.length;
  }
  return output;
}
function encodeUTF8(str) {
  let encoder;
  return (encodeUTF8_ ?? (encoder = new globalThis.TextEncoder, encodeUTF8_ = encoder.encode.bind(encoder)))(str);
}
function decodeUTF8(bytes) {
  let decoder;
  return (decodeUTF8_ ?? (decoder = new globalThis.TextDecoder, decodeUTF8_ = decoder.decode.bind(decoder)))(bytes);
}
var encodeUTF8_, decodeUTF8_;
var init_bytes = () => {};

// node_modules/@anthropic-ai/sdk/internal/decoders/line.mjs
class LineDecoder {
  constructor() {
    _LineDecoder_buffer.set(this, undefined);
    _LineDecoder_carriageReturnIndex.set(this, undefined);
    __classPrivateFieldSet(this, _LineDecoder_buffer, new Uint8Array, "f");
    __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
  }
  decode(chunk) {
    if (chunk == null) {
      return [];
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? encodeUTF8(chunk) : chunk;
    __classPrivateFieldSet(this, _LineDecoder_buffer, concatBytes([__classPrivateFieldGet(this, _LineDecoder_buffer, "f"), binaryChunk]), "f");
    const lines = [];
    let patternIndex;
    while ((patternIndex = findNewlineIndex(__classPrivateFieldGet(this, _LineDecoder_buffer, "f"), __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f"))) != null) {
      if (patternIndex.carriage && __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") == null) {
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, patternIndex.index, "f");
        continue;
      }
      if (__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") != null && (patternIndex.index !== __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") + 1 || patternIndex.carriage)) {
        lines.push(decodeUTF8(__classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(0, __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") - 1)));
        __classPrivateFieldSet(this, _LineDecoder_buffer, __classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f")), "f");
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
        continue;
      }
      const endIndex = __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") !== null ? patternIndex.preceding - 1 : patternIndex.preceding;
      const line = decodeUTF8(__classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(0, endIndex));
      lines.push(line);
      __classPrivateFieldSet(this, _LineDecoder_buffer, __classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(patternIndex.index), "f");
      __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
    }
    return lines;
  }
  flush() {
    if (!__classPrivateFieldGet(this, _LineDecoder_buffer, "f").length) {
      return [];
    }
    return this.decode(`
`);
  }
}
function findNewlineIndex(buffer, startIndex) {
  const newline = 10;
  const carriage = 13;
  for (let i = startIndex ?? 0;i < buffer.length; i++) {
    if (buffer[i] === newline) {
      return { preceding: i, index: i + 1, carriage: false };
    }
    if (buffer[i] === carriage) {
      return { preceding: i, index: i + 1, carriage: true };
    }
  }
  return null;
}
function findDoubleNewlineIndex(buffer) {
  const newline = 10;
  const carriage = 13;
  for (let i = 0;i < buffer.length - 1; i++) {
    if (buffer[i] === newline && buffer[i + 1] === newline) {
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === carriage) {
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === newline && i + 3 < buffer.length && buffer[i + 2] === carriage && buffer[i + 3] === newline) {
      return i + 4;
    }
  }
  return -1;
}
var _LineDecoder_buffer, _LineDecoder_carriageReturnIndex;
var init_line = __esm(() => {
  init_tslib();
  init_bytes();
  _LineDecoder_buffer = new WeakMap, _LineDecoder_carriageReturnIndex = new WeakMap;
  LineDecoder.NEWLINE_CHARS = new Set([`
`, "\r"]);
  LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
});

// node_modules/@anthropic-ai/sdk/core/streaming.mjs
async function* _iterSSEMessages(response, controller) {
  if (!response.body) {
    controller.abort();
    if (typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative") {
      throw new AnthropicError(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`);
    }
    throw new AnthropicError(`Attempted to iterate over a response with no body`);
  }
  const sseDecoder = new SSEDecoder;
  const lineDecoder = new LineDecoder;
  const iter = ReadableStreamToAsyncIterable(response.body);
  for await (const sseChunk of iterSSEChunks(iter)) {
    for (const line of lineDecoder.decode(sseChunk)) {
      const sse = sseDecoder.decode(line);
      if (sse)
        yield sse;
    }
  }
  for (const line of lineDecoder.flush()) {
    const sse = sseDecoder.decode(line);
    if (sse)
      yield sse;
  }
}
async function* iterSSEChunks(iterator) {
  let data = new Uint8Array;
  for await (const chunk of iterator) {
    if (chunk == null) {
      continue;
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? encodeUTF8(chunk) : chunk;
    let newData = new Uint8Array(data.length + binaryChunk.length);
    newData.set(data);
    newData.set(binaryChunk, data.length);
    data = newData;
    let patternIndex;
    while ((patternIndex = findDoubleNewlineIndex(data)) !== -1) {
      yield data.slice(0, patternIndex);
      data = data.slice(patternIndex);
    }
  }
  if (data.length > 0) {
    yield data;
  }
}

class SSEDecoder {
  constructor() {
    this.event = null;
    this.data = [];
    this.chunks = [];
  }
  decode(line) {
    if (line.endsWith("\r")) {
      line = line.substring(0, line.length - 1);
    }
    if (!line) {
      if (!this.event && !this.data.length)
        return null;
      const sse = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks
      };
      this.event = null;
      this.data = [];
      this.chunks = [];
      return sse;
    }
    this.chunks.push(line);
    if (line.startsWith(":")) {
      return null;
    }
    let [fieldname, _, value] = partition(line, ":");
    if (value.startsWith(" ")) {
      value = value.substring(1);
    }
    if (fieldname === "event") {
      this.event = value;
    } else if (fieldname === "data") {
      this.data.push(value);
    }
    return null;
  }
}
function partition(str, delimiter) {
  const index = str.indexOf(delimiter);
  if (index !== -1) {
    return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
  }
  return [str, "", ""];
}
var Stream;
var init_streaming = __esm(() => {
  init_error();
  init_shims();
  init_line();
  init_shims();
  init_errors();
  init_values();
  init_bytes();
  init_error();
  Stream = class Stream {
    constructor(iterator, controller) {
      this.iterator = iterator;
      this.controller = controller;
    }
    static fromSSEResponse(response, controller) {
      let consumed = false;
      async function* iterator() {
        if (consumed) {
          throw new AnthropicError("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        }
        consumed = true;
        let done = false;
        try {
          for await (const sse of _iterSSEMessages(response, controller)) {
            if (sse.event === "completion") {
              try {
                yield JSON.parse(sse.data);
              } catch (e) {
                console.error(`Could not parse message into JSON:`, sse.data);
                console.error(`From chunk:`, sse.raw);
                throw e;
              }
            }
            if (sse.event === "message_start" || sse.event === "message_delta" || sse.event === "message_stop" || sse.event === "content_block_start" || sse.event === "content_block_delta" || sse.event === "content_block_stop") {
              try {
                yield JSON.parse(sse.data);
              } catch (e) {
                console.error(`Could not parse message into JSON:`, sse.data);
                console.error(`From chunk:`, sse.raw);
                throw e;
              }
            }
            if (sse.event === "ping") {
              continue;
            }
            if (sse.event === "error") {
              throw new APIError(undefined, safeJSON(sse.data) ?? sse.data, undefined, response.headers);
            }
          }
          done = true;
        } catch (e) {
          if (isAbortError(e))
            return;
          throw e;
        } finally {
          if (!done)
            controller.abort();
        }
      }
      return new Stream(iterator, controller);
    }
    static fromReadableStream(readableStream, controller) {
      let consumed = false;
      async function* iterLines() {
        const lineDecoder = new LineDecoder;
        const iter = ReadableStreamToAsyncIterable(readableStream);
        for await (const chunk of iter) {
          for (const line of lineDecoder.decode(chunk)) {
            yield line;
          }
        }
        for (const line of lineDecoder.flush()) {
          yield line;
        }
      }
      async function* iterator() {
        if (consumed) {
          throw new AnthropicError("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        }
        consumed = true;
        let done = false;
        try {
          for await (const line of iterLines()) {
            if (done)
              continue;
            if (line)
              yield JSON.parse(line);
          }
          done = true;
        } catch (e) {
          if (isAbortError(e))
            return;
          throw e;
        } finally {
          if (!done)
            controller.abort();
        }
      }
      return new Stream(iterator, controller);
    }
    [Symbol.asyncIterator]() {
      return this.iterator();
    }
    tee() {
      const left = [];
      const right = [];
      const iterator = this.iterator();
      const teeIterator = (queue) => {
        return {
          next: () => {
            if (queue.length === 0) {
              const result = iterator.next();
              left.push(result);
              right.push(result);
            }
            return queue.shift();
          }
        };
      };
      return [
        new Stream(() => teeIterator(left), this.controller),
        new Stream(() => teeIterator(right), this.controller)
      ];
    }
    toReadableStream() {
      const self = this;
      let iter;
      return makeReadableStream({
        async start() {
          iter = self[Symbol.asyncIterator]();
        },
        async pull(ctrl) {
          try {
            const { value, done } = await iter.next();
            if (done)
              return ctrl.close();
            const bytes = encodeUTF8(JSON.stringify(value) + `
`);
            ctrl.enqueue(bytes);
          } catch (err) {
            ctrl.error(err);
          }
        },
        async cancel() {
          await iter.return?.();
        }
      });
    }
  };
});

// node_modules/@anthropic-ai/sdk/internal/parse.mjs
async function defaultParseResponse(client, props) {
  const { response, requestLogID, retryOfRequestLogID, startTime } = props;
  const body = await (async () => {
    if (props.options.stream) {
      loggerFor(client).debug("response", response.status, response.url, response.headers, response.body);
      if (props.options.__streamClass) {
        return props.options.__streamClass.fromSSEResponse(response, props.controller);
      }
      return Stream.fromSSEResponse(response, props.controller);
    }
    if (response.status === 204) {
      return null;
    }
    if (props.options.__binaryResponse) {
      return response;
    }
    const contentType = response.headers.get("content-type");
    const mediaType = contentType?.split(";")[0]?.trim();
    const isJSON = mediaType?.includes("application/json") || mediaType?.endsWith("+json");
    if (isJSON) {
      const json = await response.json();
      return addRequestID(json, response);
    }
    const text = await response.text();
    return text;
  })();
  loggerFor(client).debug(`[${requestLogID}] response parsed`, formatRequestDetails({
    retryOfRequestLogID,
    url: response.url,
    status: response.status,
    body,
    durationMs: Date.now() - startTime
  }));
  return body;
}
function addRequestID(value, response) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }
  return Object.defineProperty(value, "_request_id", {
    value: response.headers.get("request-id"),
    enumerable: false
  });
}
var init_parse = __esm(() => {
  init_streaming();
  init_log();
});

// node_modules/@anthropic-ai/sdk/core/api-promise.mjs
var _APIPromise_client, APIPromise;
var init_api_promise = __esm(() => {
  init_tslib();
  init_parse();
  APIPromise = class APIPromise extends Promise {
    constructor(client, responsePromise, parseResponse = defaultParseResponse) {
      super((resolve) => {
        resolve(null);
      });
      this.responsePromise = responsePromise;
      this.parseResponse = parseResponse;
      _APIPromise_client.set(this, undefined);
      __classPrivateFieldSet(this, _APIPromise_client, client, "f");
    }
    _thenUnwrap(transform) {
      return new APIPromise(__classPrivateFieldGet(this, _APIPromise_client, "f"), this.responsePromise, async (client, props) => addRequestID(transform(await this.parseResponse(client, props), props), props.response));
    }
    asResponse() {
      return this.responsePromise.then((p) => p.response);
    }
    async withResponse() {
      const [data, response] = await Promise.all([this.parse(), this.asResponse()]);
      return { data, response, request_id: response.headers.get("request-id") };
    }
    parse() {
      if (!this.parsedPromise) {
        this.parsedPromise = this.responsePromise.then((data) => this.parseResponse(__classPrivateFieldGet(this, _APIPromise_client, "f"), data));
      }
      return this.parsedPromise;
    }
    then(onfulfilled, onrejected) {
      return this.parse().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
      return this.parse().catch(onrejected);
    }
    finally(onfinally) {
      return this.parse().finally(onfinally);
    }
  };
  _APIPromise_client = new WeakMap;
});

// node_modules/@anthropic-ai/sdk/core/pagination.mjs
var _AbstractPage_client, AbstractPage, PagePromise, Page;
var init_pagination = __esm(() => {
  init_tslib();
  init_error();
  init_parse();
  init_api_promise();
  init_values();
  AbstractPage = class AbstractPage {
    constructor(client, response, body, options) {
      _AbstractPage_client.set(this, undefined);
      __classPrivateFieldSet(this, _AbstractPage_client, client, "f");
      this.options = options;
      this.response = response;
      this.body = body;
    }
    hasNextPage() {
      const items = this.getPaginatedItems();
      if (!items.length)
        return false;
      return this.nextPageRequestOptions() != null;
    }
    async getNextPage() {
      const nextOptions = this.nextPageRequestOptions();
      if (!nextOptions) {
        throw new AnthropicError("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
      }
      return await __classPrivateFieldGet(this, _AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
    }
    async* iterPages() {
      let page = this;
      yield page;
      while (page.hasNextPage()) {
        page = await page.getNextPage();
        yield page;
      }
    }
    async* [(_AbstractPage_client = new WeakMap, Symbol.asyncIterator)]() {
      for await (const page of this.iterPages()) {
        for (const item of page.getPaginatedItems()) {
          yield item;
        }
      }
    }
  };
  PagePromise = class PagePromise extends APIPromise {
    constructor(client, request, Page) {
      super(client, request, async (client2, props) => new Page(client2, props.response, await defaultParseResponse(client2, props), props.options));
    }
    async* [Symbol.asyncIterator]() {
      const page = await this;
      for await (const item of page) {
        yield item;
      }
    }
  };
  Page = class Page extends AbstractPage {
    constructor(client, response, body, options) {
      super(client, response, body, options);
      this.data = body.data || [];
      this.has_more = body.has_more || false;
      this.first_id = body.first_id || null;
      this.last_id = body.last_id || null;
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    hasNextPage() {
      if (this.has_more === false) {
        return false;
      }
      return super.hasNextPage();
    }
    nextPageRequestOptions() {
      if (this.options.query?.["before_id"]) {
        const first_id = this.first_id;
        if (!first_id) {
          return null;
        }
        return {
          ...this.options,
          query: {
            ...maybeObj(this.options.query),
            before_id: first_id
          }
        };
      }
      const cursor = this.last_id;
      if (!cursor) {
        return null;
      }
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          after_id: cursor
        }
      };
    }
  };
});

// node_modules/@anthropic-ai/sdk/internal/uploads.mjs
function makeFile(fileBits, fileName, options) {
  checkFileSupport();
  return new File(fileBits, fileName ?? "unknown_file", options);
}
function getName(value) {
  return (typeof value === "object" && value !== null && (("name" in value) && value.name && String(value.name) || ("url" in value) && value.url && String(value.url) || ("filename" in value) && value.filename && String(value.filename) || ("path" in value) && value.path && String(value.path)) || "").split(/[\\/]/).pop() || undefined;
}
function supportsFormData(fetchObject) {
  const fetch2 = typeof fetchObject === "function" ? fetchObject : fetchObject.fetch;
  const cached = supportsFormDataMap.get(fetch2);
  if (cached)
    return cached;
  const promise = (async () => {
    try {
      const FetchResponse = "Response" in fetch2 ? fetch2.Response : (await fetch2("data:,")).constructor;
      const data = new FormData;
      if (data.toString() === await new FetchResponse(data).text()) {
        return false;
      }
      return true;
    } catch {
      return true;
    }
  })();
  supportsFormDataMap.set(fetch2, promise);
  return promise;
}
var checkFileSupport = () => {
  if (typeof File === "undefined") {
    const { process: process2 } = globalThis;
    const isOldNode = typeof process2?.versions?.node === "string" && parseInt(process2.versions.node.split(".")) < 20;
    throw new Error("`File` is not defined as a global, which is required for file uploads." + (isOldNode ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""));
  }
}, isAsyncIterable = (value) => value != null && typeof value === "object" && typeof value[Symbol.asyncIterator] === "function", multipartFormRequestOptions = async (opts, fetch2) => {
  return { ...opts, body: await createForm(opts.body, fetch2) };
}, supportsFormDataMap, createForm = async (body, fetch2) => {
  if (!await supportsFormData(fetch2)) {
    throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");
  }
  const form = new FormData;
  await Promise.all(Object.entries(body || {}).map(([key, value]) => addFormValue(form, key, value)));
  return form;
}, isNamedBlob = (value) => value instanceof Blob && ("name" in value), addFormValue = async (form, key, value) => {
  if (value === undefined)
    return;
  if (value == null) {
    throw new TypeError(`Received null for "${key}"; to pass null in FormData, you must use the string 'null'`);
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    form.append(key, String(value));
  } else if (value instanceof Response) {
    let options = {};
    const contentType = value.headers.get("Content-Type");
    if (contentType) {
      options = { type: contentType };
    }
    form.append(key, makeFile([await value.blob()], getName(value), options));
  } else if (isAsyncIterable(value)) {
    form.append(key, makeFile([await new Response(ReadableStreamFrom(value)).blob()], getName(value)));
  } else if (isNamedBlob(value)) {
    form.append(key, makeFile([value], getName(value), { type: value.type }));
  } else if (Array.isArray(value)) {
    await Promise.all(value.map((entry) => addFormValue(form, key + "[]", entry)));
  } else if (typeof value === "object") {
    await Promise.all(Object.entries(value).map(([name, prop]) => addFormValue(form, `${key}[${name}]`, prop)));
  } else {
    throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${value} instead`);
  }
};
var init_uploads = __esm(() => {
  init_shims();
  supportsFormDataMap = new WeakMap;
});

// node_modules/@anthropic-ai/sdk/internal/to-file.mjs
async function toFile(value, name, options) {
  checkFileSupport();
  value = await value;
  name || (name = getName(value));
  if (isFileLike(value)) {
    if (value instanceof File && name == null && options == null) {
      return value;
    }
    return makeFile([await value.arrayBuffer()], name ?? value.name, {
      type: value.type,
      lastModified: value.lastModified,
      ...options
    });
  }
  if (isResponseLike(value)) {
    const blob = await value.blob();
    name || (name = new URL(value.url).pathname.split(/[\\/]/).pop());
    return makeFile(await getBytes(blob), name, options);
  }
  const parts = await getBytes(value);
  if (!options?.type) {
    const type = parts.find((part) => typeof part === "object" && ("type" in part) && part.type);
    if (typeof type === "string") {
      options = { ...options, type };
    }
  }
  return makeFile(parts, name, options);
}
async function getBytes(value) {
  let parts = [];
  if (typeof value === "string" || ArrayBuffer.isView(value) || value instanceof ArrayBuffer) {
    parts.push(value);
  } else if (isBlobLike(value)) {
    parts.push(value instanceof Blob ? value : await value.arrayBuffer());
  } else if (isAsyncIterable(value)) {
    for await (const chunk of value) {
      parts.push(...await getBytes(chunk));
    }
  } else {
    const constructor = value?.constructor?.name;
    throw new Error(`Unexpected data type: ${typeof value}${constructor ? `; constructor: ${constructor}` : ""}${propsForError(value)}`);
  }
  return parts;
}
function propsForError(value) {
  if (typeof value !== "object" || value === null)
    return "";
  const props = Object.getOwnPropertyNames(value);
  return `; props: [${props.map((p) => `"${p}"`).join(", ")}]`;
}
var isBlobLike = (value) => value != null && typeof value === "object" && typeof value.size === "number" && typeof value.type === "string" && typeof value.text === "function" && typeof value.slice === "function" && typeof value.arrayBuffer === "function", isFileLike = (value) => value != null && typeof value === "object" && typeof value.name === "string" && typeof value.lastModified === "number" && isBlobLike(value), isResponseLike = (value) => value != null && typeof value === "object" && typeof value.url === "string" && typeof value.blob === "function";
var init_to_file = __esm(() => {
  init_uploads();
  init_uploads();
});

// node_modules/@anthropic-ai/sdk/core/uploads.mjs
var init_uploads2 = __esm(() => {
  init_to_file();
});

// node_modules/@anthropic-ai/sdk/resources/shared.mjs
var init_shared = () => {};

// node_modules/@anthropic-ai/sdk/core/resource.mjs
class APIResource {
  constructor(client) {
    this._client = client;
  }
}
var init_resource = () => {};

// node_modules/@anthropic-ai/sdk/internal/headers.mjs
function* iterateHeaders(headers) {
  if (!headers)
    return;
  if (brand_privateNullableHeaders in headers) {
    const { values, nulls } = headers;
    yield* values.entries();
    for (const name of nulls) {
      yield [name, null];
    }
    return;
  }
  let shouldClear = false;
  let iter;
  if (headers instanceof Headers) {
    iter = headers.entries();
  } else if (isArray(headers)) {
    iter = headers;
  } else {
    shouldClear = true;
    iter = Object.entries(headers ?? {});
  }
  for (let row of iter) {
    const name = row[0];
    if (typeof name !== "string")
      throw new TypeError("expected header name to be a string");
    const values = isArray(row[1]) ? row[1] : [row[1]];
    let didClear = false;
    for (const value of values) {
      if (value === undefined)
        continue;
      if (shouldClear && !didClear) {
        didClear = true;
        yield [name, null];
      }
      yield [name, value];
    }
  }
}
var brand_privateNullableHeaders, isArray, buildHeaders = (newHeaders) => {
  const targetHeaders = new Headers;
  const nullHeaders = new Set;
  for (const headers of newHeaders) {
    const seenHeaders = new Set;
    for (const [name, value] of iterateHeaders(headers)) {
      const lowerName = name.toLowerCase();
      if (!seenHeaders.has(lowerName)) {
        targetHeaders.delete(name);
        seenHeaders.add(lowerName);
      }
      if (value === null) {
        targetHeaders.delete(name);
        nullHeaders.add(lowerName);
      } else {
        targetHeaders.append(name, value);
        nullHeaders.delete(lowerName);
      }
    }
  }
  return { [brand_privateNullableHeaders]: true, values: targetHeaders, nulls: nullHeaders };
};
var init_headers = __esm(() => {
  brand_privateNullableHeaders = Symbol.for("brand.privateNullableHeaders");
  isArray = Array.isArray;
});

// node_modules/@anthropic-ai/sdk/internal/utils/path.mjs
function encodeURIPath(str) {
  return str.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var createPathTagFunction = (pathEncoder = encodeURIPath) => function path(statics, ...params) {
  if (statics.length === 1)
    return statics[0];
  let postPath = false;
  const path2 = statics.reduce((previousValue, currentValue, index) => {
    if (/[?#]/.test(currentValue)) {
      postPath = true;
    }
    return previousValue + currentValue + (index === params.length ? "" : (postPath ? encodeURIComponent : pathEncoder)(String(params[index])));
  }, "");
  const pathOnly = path2.split(/[?#]/, 1)[0];
  const invalidSegments = [];
  const invalidSegmentPattern = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;
  let match;
  while ((match = invalidSegmentPattern.exec(pathOnly)) !== null) {
    invalidSegments.push({
      start: match.index,
      length: match[0].length
    });
  }
  if (invalidSegments.length > 0) {
    let lastEnd = 0;
    const underline = invalidSegments.reduce((acc, segment) => {
      const spaces = " ".repeat(segment.start - lastEnd);
      const arrows = "^".repeat(segment.length);
      lastEnd = segment.start + segment.length;
      return acc + spaces + arrows;
    }, "");
    throw new AnthropicError(`Path parameters result in path with invalid segments:
${path2}
${underline}`);
  }
  return path2;
}, path;
var init_path = __esm(() => {
  init_error();
  path = createPathTagFunction(encodeURIPath);
});

// node_modules/@anthropic-ai/sdk/resources/beta/files.mjs
var Files;
var init_files = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_uploads();
  init_path();
  Files = class Files extends APIResource {
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/files", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          options?.headers
        ])
      });
    }
    delete(fileID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.delete(path`/v1/files/${fileID}`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          options?.headers
        ])
      });
    }
    download(fileID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/files/${fileID}/content`, {
        ...options,
        headers: buildHeaders([
          {
            "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString(),
            Accept: "application/binary"
          },
          options?.headers
        ]),
        __binaryResponse: true
      });
    }
    retrieveMetadata(fileID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/files/${fileID}`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          options?.headers
        ])
      });
    }
    upload(params, options) {
      const { betas, ...body } = params;
      return this._client.post("/v1/files", multipartFormRequestOptions({
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          options?.headers
        ])
      }, this._client));
    }
  };
});

// node_modules/@anthropic-ai/sdk/resources/beta/models.mjs
var Models;
var init_models = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_path();
  Models = class Models extends APIResource {
    retrieve(modelID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/models/${modelID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/models?beta=true", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
  };
});

// node_modules/@anthropic-ai/sdk/internal/decoders/jsonl.mjs
var JSONLDecoder;
var init_jsonl = __esm(() => {
  init_error();
  init_shims();
  init_line();
  JSONLDecoder = class JSONLDecoder {
    constructor(iterator, controller) {
      this.iterator = iterator;
      this.controller = controller;
    }
    async* decoder() {
      const lineDecoder = new LineDecoder;
      for await (const chunk of this.iterator) {
        for (const line of lineDecoder.decode(chunk)) {
          yield JSON.parse(line);
        }
      }
      for (const line of lineDecoder.flush()) {
        yield JSON.parse(line);
      }
    }
    [Symbol.asyncIterator]() {
      return this.decoder();
    }
    static fromResponse(response, controller) {
      if (!response.body) {
        controller.abort();
        if (typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative") {
          throw new AnthropicError(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`);
        }
        throw new AnthropicError(`Attempted to iterate over a response with no body`);
      }
      return new JSONLDecoder(ReadableStreamToAsyncIterable(response.body), controller);
    }
  };
});

// node_modules/@anthropic-ai/sdk/error.mjs
var init_error2 = __esm(() => {
  init_error();
});

// node_modules/@anthropic-ai/sdk/resources/beta/messages/batches.mjs
var Batches;
var init_batches = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_jsonl();
  init_error2();
  init_path();
  Batches = class Batches extends APIResource {
    create(params, options) {
      const { betas, ...body } = params;
      return this._client.post("/v1/messages/batches?beta=true", {
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    retrieve(messageBatchID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/messages/batches/${messageBatchID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/messages/batches?beta=true", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    delete(messageBatchID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.delete(path`/v1/messages/batches/${messageBatchID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    cancel(messageBatchID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.post(path`/v1/messages/batches/${messageBatchID}/cancel?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    async results(messageBatchID, params = {}, options) {
      const batch = await this.retrieve(messageBatchID);
      if (!batch.results_url) {
        throw new AnthropicError(`No batch \`results_url\`; Has it finished processing? ${batch.processing_status} - ${batch.id}`);
      }
      const { betas } = params ?? {};
      return this._client.get(batch.results_url, {
        ...options,
        headers: buildHeaders([
          {
            "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString(),
            Accept: "application/binary"
          },
          options?.headers
        ]),
        stream: true,
        __binaryResponse: true
      })._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller));
    }
  };
});

// node_modules/@anthropic-ai/sdk/streaming.mjs
var init_streaming2 = __esm(() => {
  init_streaming();
});

// node_modules/@anthropic-ai/sdk/_vendor/partial-json-parser/parser.mjs
var tokenize = (input) => {
  let current = 0;
  let tokens = [];
  while (current < input.length) {
    let char = input[current];
    if (char === "\\") {
      current++;
      continue;
    }
    if (char === "{") {
      tokens.push({
        type: "brace",
        value: "{"
      });
      current++;
      continue;
    }
    if (char === "}") {
      tokens.push({
        type: "brace",
        value: "}"
      });
      current++;
      continue;
    }
    if (char === "[") {
      tokens.push({
        type: "paren",
        value: "["
      });
      current++;
      continue;
    }
    if (char === "]") {
      tokens.push({
        type: "paren",
        value: "]"
      });
      current++;
      continue;
    }
    if (char === ":") {
      tokens.push({
        type: "separator",
        value: ":"
      });
      current++;
      continue;
    }
    if (char === ",") {
      tokens.push({
        type: "delimiter",
        value: ","
      });
      current++;
      continue;
    }
    if (char === '"') {
      let value = "";
      let danglingQuote = false;
      char = input[++current];
      while (char !== '"') {
        if (current === input.length) {
          danglingQuote = true;
          break;
        }
        if (char === "\\") {
          current++;
          if (current === input.length) {
            danglingQuote = true;
            break;
          }
          value += char + input[current];
          char = input[++current];
        } else {
          value += char;
          char = input[++current];
        }
      }
      char = input[++current];
      if (!danglingQuote) {
        tokens.push({
          type: "string",
          value
        });
      }
      continue;
    }
    let WHITESPACE = /\s/;
    if (char && WHITESPACE.test(char)) {
      current++;
      continue;
    }
    let NUMBERS = /[0-9]/;
    if (char && NUMBERS.test(char) || char === "-" || char === ".") {
      let value = "";
      if (char === "-") {
        value += char;
        char = input[++current];
      }
      while (char && NUMBERS.test(char) || char === ".") {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "number",
        value
      });
      continue;
    }
    let LETTERS = /[a-z]/i;
    if (char && LETTERS.test(char)) {
      let value = "";
      while (char && LETTERS.test(char)) {
        if (current === input.length) {
          break;
        }
        value += char;
        char = input[++current];
      }
      if (value == "true" || value == "false" || value === "null") {
        tokens.push({
          type: "name",
          value
        });
      } else {
        current++;
        continue;
      }
      continue;
    }
    current++;
  }
  return tokens;
}, strip = (tokens) => {
  if (tokens.length === 0) {
    return tokens;
  }
  let lastToken = tokens[tokens.length - 1];
  switch (lastToken.type) {
    case "separator":
      tokens = tokens.slice(0, tokens.length - 1);
      return strip(tokens);
      break;
    case "number":
      let lastCharacterOfLastToken = lastToken.value[lastToken.value.length - 1];
      if (lastCharacterOfLastToken === "." || lastCharacterOfLastToken === "-") {
        tokens = tokens.slice(0, tokens.length - 1);
        return strip(tokens);
      }
    case "string":
      let tokenBeforeTheLastToken = tokens[tokens.length - 2];
      if (tokenBeforeTheLastToken?.type === "delimiter") {
        tokens = tokens.slice(0, tokens.length - 1);
        return strip(tokens);
      } else if (tokenBeforeTheLastToken?.type === "brace" && tokenBeforeTheLastToken.value === "{") {
        tokens = tokens.slice(0, tokens.length - 1);
        return strip(tokens);
      }
      break;
    case "delimiter":
      tokens = tokens.slice(0, tokens.length - 1);
      return strip(tokens);
      break;
  }
  return tokens;
}, unstrip = (tokens) => {
  let tail = [];
  tokens.map((token) => {
    if (token.type === "brace") {
      if (token.value === "{") {
        tail.push("}");
      } else {
        tail.splice(tail.lastIndexOf("}"), 1);
      }
    }
    if (token.type === "paren") {
      if (token.value === "[") {
        tail.push("]");
      } else {
        tail.splice(tail.lastIndexOf("]"), 1);
      }
    }
  });
  if (tail.length > 0) {
    tail.reverse().map((item) => {
      if (item === "}") {
        tokens.push({
          type: "brace",
          value: "}"
        });
      } else if (item === "]") {
        tokens.push({
          type: "paren",
          value: "]"
        });
      }
    });
  }
  return tokens;
}, generate = (tokens) => {
  let output = "";
  tokens.map((token) => {
    switch (token.type) {
      case "string":
        output += '"' + token.value + '"';
        break;
      default:
        output += token.value;
        break;
    }
  });
  return output;
}, partialParse = (input) => JSON.parse(generate(unstrip(strip(tokenize(input)))));
var init_parser = () => {};

// node_modules/@anthropic-ai/sdk/lib/BetaMessageStream.mjs
function checkNever(x) {}
var _BetaMessageStream_instances, _BetaMessageStream_currentMessageSnapshot, _BetaMessageStream_connectedPromise, _BetaMessageStream_resolveConnectedPromise, _BetaMessageStream_rejectConnectedPromise, _BetaMessageStream_endPromise, _BetaMessageStream_resolveEndPromise, _BetaMessageStream_rejectEndPromise, _BetaMessageStream_listeners, _BetaMessageStream_ended, _BetaMessageStream_errored, _BetaMessageStream_aborted, _BetaMessageStream_catchingPromiseCreated, _BetaMessageStream_response, _BetaMessageStream_request_id, _BetaMessageStream_getFinalMessage, _BetaMessageStream_getFinalText, _BetaMessageStream_handleError, _BetaMessageStream_beginRequest, _BetaMessageStream_addStreamEvent, _BetaMessageStream_endRequest, _BetaMessageStream_accumulateMessage, JSON_BUF_PROPERTY = "__json_buf", BetaMessageStream;
var init_BetaMessageStream = __esm(() => {
  init_tslib();
  init_errors();
  init_error2();
  init_streaming2();
  init_parser();
  BetaMessageStream = class BetaMessageStream {
    constructor() {
      _BetaMessageStream_instances.add(this);
      this.messages = [];
      this.receivedMessages = [];
      _BetaMessageStream_currentMessageSnapshot.set(this, undefined);
      this.controller = new AbortController;
      _BetaMessageStream_connectedPromise.set(this, undefined);
      _BetaMessageStream_resolveConnectedPromise.set(this, () => {});
      _BetaMessageStream_rejectConnectedPromise.set(this, () => {});
      _BetaMessageStream_endPromise.set(this, undefined);
      _BetaMessageStream_resolveEndPromise.set(this, () => {});
      _BetaMessageStream_rejectEndPromise.set(this, () => {});
      _BetaMessageStream_listeners.set(this, {});
      _BetaMessageStream_ended.set(this, false);
      _BetaMessageStream_errored.set(this, false);
      _BetaMessageStream_aborted.set(this, false);
      _BetaMessageStream_catchingPromiseCreated.set(this, false);
      _BetaMessageStream_response.set(this, undefined);
      _BetaMessageStream_request_id.set(this, undefined);
      _BetaMessageStream_handleError.set(this, (error2) => {
        __classPrivateFieldSet(this, _BetaMessageStream_errored, true, "f");
        if (isAbortError(error2)) {
          error2 = new APIUserAbortError;
        }
        if (error2 instanceof APIUserAbortError) {
          __classPrivateFieldSet(this, _BetaMessageStream_aborted, true, "f");
          return this._emit("abort", error2);
        }
        if (error2 instanceof AnthropicError) {
          return this._emit("error", error2);
        }
        if (error2 instanceof Error) {
          const anthropicError = new AnthropicError(error2.message);
          anthropicError.cause = error2;
          return this._emit("error", anthropicError);
        }
        return this._emit("error", new AnthropicError(String(error2)));
      });
      __classPrivateFieldSet(this, _BetaMessageStream_connectedPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _BetaMessageStream_resolveConnectedPromise, resolve, "f");
        __classPrivateFieldSet(this, _BetaMessageStream_rejectConnectedPromise, reject, "f");
      }), "f");
      __classPrivateFieldSet(this, _BetaMessageStream_endPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _BetaMessageStream_resolveEndPromise, resolve, "f");
        __classPrivateFieldSet(this, _BetaMessageStream_rejectEndPromise, reject, "f");
      }), "f");
      __classPrivateFieldGet(this, _BetaMessageStream_connectedPromise, "f").catch(() => {});
      __classPrivateFieldGet(this, _BetaMessageStream_endPromise, "f").catch(() => {});
    }
    get response() {
      return __classPrivateFieldGet(this, _BetaMessageStream_response, "f");
    }
    get request_id() {
      return __classPrivateFieldGet(this, _BetaMessageStream_request_id, "f");
    }
    async withResponse() {
      const response = await __classPrivateFieldGet(this, _BetaMessageStream_connectedPromise, "f");
      if (!response) {
        throw new Error("Could not resolve a `Response` object");
      }
      return {
        data: this,
        response,
        request_id: response.headers.get("request-id")
      };
    }
    static fromReadableStream(stream) {
      const runner = new BetaMessageStream;
      runner._run(() => runner._fromReadableStream(stream));
      return runner;
    }
    static createMessage(messages, params, options) {
      const runner = new BetaMessageStream;
      for (const message of params.messages) {
        runner._addMessageParam(message);
      }
      runner._run(() => runner._createMessage(messages, { ...params, stream: true }, { ...options, headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" } }));
      return runner;
    }
    _run(executor) {
      executor().then(() => {
        this._emitFinal();
        this._emit("end");
      }, __classPrivateFieldGet(this, _BetaMessageStream_handleError, "f"));
    }
    _addMessageParam(message) {
      this.messages.push(message);
    }
    _addMessage(message, emit = true) {
      this.receivedMessages.push(message);
      if (emit) {
        this._emit("message", message);
      }
    }
    async _createMessage(messages, params, options) {
      const signal = options?.signal;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        signal.addEventListener("abort", () => this.controller.abort());
      }
      __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_beginRequest).call(this);
      const { response, data: stream } = await messages.create({ ...params, stream: true }, { ...options, signal: this.controller.signal }).withResponse();
      this._connected(response);
      for await (const event of stream) {
        __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_addStreamEvent).call(this, event);
      }
      if (stream.controller.signal?.aborted) {
        throw new APIUserAbortError;
      }
      __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_endRequest).call(this);
    }
    _connected(response) {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _BetaMessageStream_response, response, "f");
      __classPrivateFieldSet(this, _BetaMessageStream_request_id, response?.headers.get("request-id"), "f");
      __classPrivateFieldGet(this, _BetaMessageStream_resolveConnectedPromise, "f").call(this, response);
      this._emit("connect");
    }
    get ended() {
      return __classPrivateFieldGet(this, _BetaMessageStream_ended, "f");
    }
    get errored() {
      return __classPrivateFieldGet(this, _BetaMessageStream_errored, "f");
    }
    get aborted() {
      return __classPrivateFieldGet(this, _BetaMessageStream_aborted, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(event, listener) {
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] = []);
      listeners.push({ listener });
      return this;
    }
    off(event, listener) {
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event];
      if (!listeners)
        return this;
      const index = listeners.findIndex((l) => l.listener === listener);
      if (index >= 0)
        listeners.splice(index, 1);
      return this;
    }
    once(event, listener) {
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] = []);
      listeners.push({ listener, once: true });
      return this;
    }
    emitted(event) {
      return new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _BetaMessageStream_catchingPromiseCreated, true, "f");
        if (event !== "error")
          this.once("error", reject);
        this.once(event, resolve);
      });
    }
    async done() {
      __classPrivateFieldSet(this, _BetaMessageStream_catchingPromiseCreated, true, "f");
      await __classPrivateFieldGet(this, _BetaMessageStream_endPromise, "f");
    }
    get currentMessage() {
      return __classPrivateFieldGet(this, _BetaMessageStream_currentMessageSnapshot, "f");
    }
    async finalMessage() {
      await this.done();
      return __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_getFinalMessage).call(this);
    }
    async finalText() {
      await this.done();
      return __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_getFinalText).call(this);
    }
    _emit(event, ...args) {
      if (__classPrivateFieldGet(this, _BetaMessageStream_ended, "f"))
        return;
      if (event === "end") {
        __classPrivateFieldSet(this, _BetaMessageStream_ended, true, "f");
        __classPrivateFieldGet(this, _BetaMessageStream_resolveEndPromise, "f").call(this);
      }
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event];
      if (listeners) {
        __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] = listeners.filter((l) => !l.once);
        listeners.forEach(({ listener }) => listener(...args));
      }
      if (event === "abort") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _BetaMessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _BetaMessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _BetaMessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
        return;
      }
      if (event === "error") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _BetaMessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _BetaMessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _BetaMessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
      }
    }
    _emitFinal() {
      const finalMessage = this.receivedMessages.at(-1);
      if (finalMessage) {
        this._emit("finalMessage", __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_getFinalMessage).call(this));
      }
    }
    async _fromReadableStream(readableStream, options) {
      const signal = options?.signal;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        signal.addEventListener("abort", () => this.controller.abort());
      }
      __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_beginRequest).call(this);
      this._connected(null);
      const stream = Stream.fromReadableStream(readableStream, this.controller);
      for await (const event of stream) {
        __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_addStreamEvent).call(this, event);
      }
      if (stream.controller.signal?.aborted) {
        throw new APIUserAbortError;
      }
      __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_endRequest).call(this);
    }
    [(_BetaMessageStream_currentMessageSnapshot = new WeakMap, _BetaMessageStream_connectedPromise = new WeakMap, _BetaMessageStream_resolveConnectedPromise = new WeakMap, _BetaMessageStream_rejectConnectedPromise = new WeakMap, _BetaMessageStream_endPromise = new WeakMap, _BetaMessageStream_resolveEndPromise = new WeakMap, _BetaMessageStream_rejectEndPromise = new WeakMap, _BetaMessageStream_listeners = new WeakMap, _BetaMessageStream_ended = new WeakMap, _BetaMessageStream_errored = new WeakMap, _BetaMessageStream_aborted = new WeakMap, _BetaMessageStream_catchingPromiseCreated = new WeakMap, _BetaMessageStream_response = new WeakMap, _BetaMessageStream_request_id = new WeakMap, _BetaMessageStream_handleError = new WeakMap, _BetaMessageStream_instances = new WeakSet, _BetaMessageStream_getFinalMessage = function _BetaMessageStream_getFinalMessage2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      return this.receivedMessages.at(-1);
    }, _BetaMessageStream_getFinalText = function _BetaMessageStream_getFinalText2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      const textBlocks = this.receivedMessages.at(-1).content.filter((block) => block.type === "text").map((block) => block.text);
      if (textBlocks.length === 0) {
        throw new AnthropicError("stream ended without producing a content block with type=text");
      }
      return textBlocks.join(" ");
    }, _BetaMessageStream_beginRequest = function _BetaMessageStream_beginRequest2() {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _BetaMessageStream_currentMessageSnapshot, undefined, "f");
    }, _BetaMessageStream_addStreamEvent = function _BetaMessageStream_addStreamEvent2(event) {
      if (this.ended)
        return;
      const messageSnapshot = __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_accumulateMessage).call(this, event);
      this._emit("streamEvent", event, messageSnapshot);
      switch (event.type) {
        case "content_block_delta": {
          const content = messageSnapshot.content.at(-1);
          switch (event.delta.type) {
            case "text_delta": {
              if (content.type === "text") {
                this._emit("text", event.delta.text, content.text || "");
              }
              break;
            }
            case "citations_delta": {
              if (content.type === "text") {
                this._emit("citation", event.delta.citation, content.citations ?? []);
              }
              break;
            }
            case "input_json_delta": {
              if ((content.type === "tool_use" || content.type === "mcp_tool_use") && content.input) {
                this._emit("inputJson", event.delta.partial_json, content.input);
              }
              break;
            }
            case "thinking_delta": {
              if (content.type === "thinking") {
                this._emit("thinking", event.delta.thinking, content.thinking);
              }
              break;
            }
            case "signature_delta": {
              if (content.type === "thinking") {
                this._emit("signature", content.signature);
              }
              break;
            }
            default:
              checkNever(event.delta);
          }
          break;
        }
        case "message_stop": {
          this._addMessageParam(messageSnapshot);
          this._addMessage(messageSnapshot, true);
          break;
        }
        case "content_block_stop": {
          this._emit("contentBlock", messageSnapshot.content.at(-1));
          break;
        }
        case "message_start": {
          __classPrivateFieldSet(this, _BetaMessageStream_currentMessageSnapshot, messageSnapshot, "f");
          break;
        }
        case "content_block_start":
        case "message_delta":
          break;
      }
    }, _BetaMessageStream_endRequest = function _BetaMessageStream_endRequest2() {
      if (this.ended) {
        throw new AnthropicError(`stream has ended, this shouldn't happen`);
      }
      const snapshot = __classPrivateFieldGet(this, _BetaMessageStream_currentMessageSnapshot, "f");
      if (!snapshot) {
        throw new AnthropicError(`request ended without sending any chunks`);
      }
      __classPrivateFieldSet(this, _BetaMessageStream_currentMessageSnapshot, undefined, "f");
      return snapshot;
    }, _BetaMessageStream_accumulateMessage = function _BetaMessageStream_accumulateMessage2(event) {
      let snapshot = __classPrivateFieldGet(this, _BetaMessageStream_currentMessageSnapshot, "f");
      if (event.type === "message_start") {
        if (snapshot) {
          throw new AnthropicError(`Unexpected event order, got ${event.type} before receiving "message_stop"`);
        }
        return event.message;
      }
      if (!snapshot) {
        throw new AnthropicError(`Unexpected event order, got ${event.type} before "message_start"`);
      }
      switch (event.type) {
        case "message_stop":
          return snapshot;
        case "message_delta":
          snapshot.container = event.delta.container;
          snapshot.stop_reason = event.delta.stop_reason;
          snapshot.stop_sequence = event.delta.stop_sequence;
          snapshot.usage.output_tokens = event.usage.output_tokens;
          if (event.usage.input_tokens != null) {
            snapshot.usage.input_tokens = event.usage.input_tokens;
          }
          if (event.usage.cache_creation_input_tokens != null) {
            snapshot.usage.cache_creation_input_tokens = event.usage.cache_creation_input_tokens;
          }
          if (event.usage.cache_read_input_tokens != null) {
            snapshot.usage.cache_read_input_tokens = event.usage.cache_read_input_tokens;
          }
          if (event.usage.server_tool_use != null) {
            snapshot.usage.server_tool_use = event.usage.server_tool_use;
          }
          return snapshot;
        case "content_block_start":
          snapshot.content.push(event.content_block);
          return snapshot;
        case "content_block_delta": {
          const snapshotContent = snapshot.content.at(event.index);
          switch (event.delta.type) {
            case "text_delta": {
              if (snapshotContent?.type === "text") {
                snapshotContent.text += event.delta.text;
              }
              break;
            }
            case "citations_delta": {
              if (snapshotContent?.type === "text") {
                snapshotContent.citations ?? (snapshotContent.citations = []);
                snapshotContent.citations.push(event.delta.citation);
              }
              break;
            }
            case "input_json_delta": {
              if (snapshotContent?.type === "tool_use" || snapshotContent?.type === "mcp_tool_use") {
                let jsonBuf = snapshotContent[JSON_BUF_PROPERTY] || "";
                jsonBuf += event.delta.partial_json;
                Object.defineProperty(snapshotContent, JSON_BUF_PROPERTY, {
                  value: jsonBuf,
                  enumerable: false,
                  writable: true
                });
                if (jsonBuf) {
                  snapshotContent.input = partialParse(jsonBuf);
                }
              }
              break;
            }
            case "thinking_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshotContent.thinking += event.delta.thinking;
              }
              break;
            }
            case "signature_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshotContent.signature = event.delta.signature;
              }
              break;
            }
            default:
              checkNever(event.delta);
          }
          return snapshot;
        }
        case "content_block_stop":
          return snapshot;
      }
    }, Symbol.asyncIterator)]() {
      const pushQueue = [];
      const readQueue = [];
      let done = false;
      this.on("streamEvent", (event) => {
        const reader = readQueue.shift();
        if (reader) {
          reader.resolve(event);
        } else {
          pushQueue.push(event);
        }
      });
      this.on("end", () => {
        done = true;
        for (const reader of readQueue) {
          reader.resolve(undefined);
        }
        readQueue.length = 0;
      });
      this.on("abort", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      this.on("error", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      return {
        next: async () => {
          if (!pushQueue.length) {
            if (done) {
              return { value: undefined, done: true };
            }
            return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk2) => chunk2 ? { value: chunk2, done: false } : { value: undefined, done: true });
          }
          const chunk = pushQueue.shift();
          return { value: chunk, done: false };
        },
        return: async () => {
          this.abort();
          return { value: undefined, done: true };
        }
      };
    }
    toReadableStream() {
      const stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
      return stream.toReadableStream();
    }
  };
});

// node_modules/@anthropic-ai/sdk/internal/constants.mjs
var MODEL_NONSTREAMING_TOKENS;
var init_constants = __esm(() => {
  MODEL_NONSTREAMING_TOKENS = {
    "claude-opus-4-20250514": 8192,
    "claude-opus-4-0": 8192,
    "claude-4-opus-20250514": 8192,
    "anthropic.claude-opus-4-20250514-v1:0": 8192,
    "claude-opus-4@20250514": 8192
  };
});

// node_modules/@anthropic-ai/sdk/resources/beta/messages/messages.mjs
var DEPRECATED_MODELS, Messages;
var init_messages = __esm(() => {
  init_resource();
  init_batches();
  init_batches();
  init_headers();
  init_BetaMessageStream();
  init_constants();
  DEPRECATED_MODELS = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025"
  };
  Messages = class Messages extends APIResource {
    constructor() {
      super(...arguments);
      this.batches = new Batches(this._client);
    }
    create(params, options) {
      const { betas, ...body } = params;
      if (body.model in DEPRECATED_MODELS) {
        console.warn(`The model '${body.model}' is deprecated and will reach end-of-life on ${DEPRECATED_MODELS[body.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
      }
      let timeout = this._client._options.timeout;
      if (!body.stream && timeout == null) {
        const maxNonstreamingTokens = MODEL_NONSTREAMING_TOKENS[body.model] ?? undefined;
        timeout = this._client.calculateNonstreamingTimeout(body.max_tokens, maxNonstreamingTokens);
      }
      return this._client.post("/v1/messages?beta=true", {
        body,
        timeout: timeout ?? 600000,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ]),
        stream: params.stream ?? false
      });
    }
    stream(body, options) {
      return BetaMessageStream.createMessage(this, body, options);
    }
    countTokens(params, options) {
      const { betas, ...body } = params;
      return this._client.post("/v1/messages/count_tokens?beta=true", {
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "token-counting-2024-11-01"].toString() },
          options?.headers
        ])
      });
    }
  };
  Messages.Batches = Batches;
});

// node_modules/@anthropic-ai/sdk/resources/beta/beta.mjs
var Beta;
var init_beta = __esm(() => {
  init_resource();
  init_files();
  init_files();
  init_models();
  init_models();
  init_messages();
  init_messages();
  Beta = class Beta extends APIResource {
    constructor() {
      super(...arguments);
      this.models = new Models(this._client);
      this.messages = new Messages(this._client);
      this.files = new Files(this._client);
    }
  };
  Beta.Models = Models;
  Beta.Messages = Messages;
  Beta.Files = Files;
});

// node_modules/@anthropic-ai/sdk/resources/completions.mjs
var Completions;
var init_completions = __esm(() => {
  init_resource();
  init_headers();
  Completions = class Completions extends APIResource {
    create(params, options) {
      const { betas, ...body } = params;
      return this._client.post("/v1/complete", {
        body,
        timeout: this._client._options.timeout ?? 600000,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ]),
        stream: params.stream ?? false
      });
    }
  };
});

// node_modules/@anthropic-ai/sdk/lib/MessageStream.mjs
function checkNever2(x) {}
var _MessageStream_instances, _MessageStream_currentMessageSnapshot, _MessageStream_connectedPromise, _MessageStream_resolveConnectedPromise, _MessageStream_rejectConnectedPromise, _MessageStream_endPromise, _MessageStream_resolveEndPromise, _MessageStream_rejectEndPromise, _MessageStream_listeners, _MessageStream_ended, _MessageStream_errored, _MessageStream_aborted, _MessageStream_catchingPromiseCreated, _MessageStream_response, _MessageStream_request_id, _MessageStream_getFinalMessage, _MessageStream_getFinalText, _MessageStream_handleError, _MessageStream_beginRequest, _MessageStream_addStreamEvent, _MessageStream_endRequest, _MessageStream_accumulateMessage, JSON_BUF_PROPERTY2 = "__json_buf", MessageStream;
var init_MessageStream = __esm(() => {
  init_tslib();
  init_errors();
  init_error2();
  init_streaming2();
  init_parser();
  MessageStream = class MessageStream {
    constructor() {
      _MessageStream_instances.add(this);
      this.messages = [];
      this.receivedMessages = [];
      _MessageStream_currentMessageSnapshot.set(this, undefined);
      this.controller = new AbortController;
      _MessageStream_connectedPromise.set(this, undefined);
      _MessageStream_resolveConnectedPromise.set(this, () => {});
      _MessageStream_rejectConnectedPromise.set(this, () => {});
      _MessageStream_endPromise.set(this, undefined);
      _MessageStream_resolveEndPromise.set(this, () => {});
      _MessageStream_rejectEndPromise.set(this, () => {});
      _MessageStream_listeners.set(this, {});
      _MessageStream_ended.set(this, false);
      _MessageStream_errored.set(this, false);
      _MessageStream_aborted.set(this, false);
      _MessageStream_catchingPromiseCreated.set(this, false);
      _MessageStream_response.set(this, undefined);
      _MessageStream_request_id.set(this, undefined);
      _MessageStream_handleError.set(this, (error2) => {
        __classPrivateFieldSet(this, _MessageStream_errored, true, "f");
        if (isAbortError(error2)) {
          error2 = new APIUserAbortError;
        }
        if (error2 instanceof APIUserAbortError) {
          __classPrivateFieldSet(this, _MessageStream_aborted, true, "f");
          return this._emit("abort", error2);
        }
        if (error2 instanceof AnthropicError) {
          return this._emit("error", error2);
        }
        if (error2 instanceof Error) {
          const anthropicError = new AnthropicError(error2.message);
          anthropicError.cause = error2;
          return this._emit("error", anthropicError);
        }
        return this._emit("error", new AnthropicError(String(error2)));
      });
      __classPrivateFieldSet(this, _MessageStream_connectedPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _MessageStream_resolveConnectedPromise, resolve, "f");
        __classPrivateFieldSet(this, _MessageStream_rejectConnectedPromise, reject, "f");
      }), "f");
      __classPrivateFieldSet(this, _MessageStream_endPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _MessageStream_resolveEndPromise, resolve, "f");
        __classPrivateFieldSet(this, _MessageStream_rejectEndPromise, reject, "f");
      }), "f");
      __classPrivateFieldGet(this, _MessageStream_connectedPromise, "f").catch(() => {});
      __classPrivateFieldGet(this, _MessageStream_endPromise, "f").catch(() => {});
    }
    get response() {
      return __classPrivateFieldGet(this, _MessageStream_response, "f");
    }
    get request_id() {
      return __classPrivateFieldGet(this, _MessageStream_request_id, "f");
    }
    async withResponse() {
      const response = await __classPrivateFieldGet(this, _MessageStream_connectedPromise, "f");
      if (!response) {
        throw new Error("Could not resolve a `Response` object");
      }
      return {
        data: this,
        response,
        request_id: response.headers.get("request-id")
      };
    }
    static fromReadableStream(stream) {
      const runner = new MessageStream;
      runner._run(() => runner._fromReadableStream(stream));
      return runner;
    }
    static createMessage(messages, params, options) {
      const runner = new MessageStream;
      for (const message of params.messages) {
        runner._addMessageParam(message);
      }
      runner._run(() => runner._createMessage(messages, { ...params, stream: true }, { ...options, headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" } }));
      return runner;
    }
    _run(executor) {
      executor().then(() => {
        this._emitFinal();
        this._emit("end");
      }, __classPrivateFieldGet(this, _MessageStream_handleError, "f"));
    }
    _addMessageParam(message) {
      this.messages.push(message);
    }
    _addMessage(message, emit = true) {
      this.receivedMessages.push(message);
      if (emit) {
        this._emit("message", message);
      }
    }
    async _createMessage(messages, params, options) {
      const signal = options?.signal;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        signal.addEventListener("abort", () => this.controller.abort());
      }
      __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_beginRequest).call(this);
      const { response, data: stream } = await messages.create({ ...params, stream: true }, { ...options, signal: this.controller.signal }).withResponse();
      this._connected(response);
      for await (const event of stream) {
        __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_addStreamEvent).call(this, event);
      }
      if (stream.controller.signal?.aborted) {
        throw new APIUserAbortError;
      }
      __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_endRequest).call(this);
    }
    _connected(response) {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _MessageStream_response, response, "f");
      __classPrivateFieldSet(this, _MessageStream_request_id, response?.headers.get("request-id"), "f");
      __classPrivateFieldGet(this, _MessageStream_resolveConnectedPromise, "f").call(this, response);
      this._emit("connect");
    }
    get ended() {
      return __classPrivateFieldGet(this, _MessageStream_ended, "f");
    }
    get errored() {
      return __classPrivateFieldGet(this, _MessageStream_errored, "f");
    }
    get aborted() {
      return __classPrivateFieldGet(this, _MessageStream_aborted, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(event, listener) {
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] = []);
      listeners.push({ listener });
      return this;
    }
    off(event, listener) {
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event];
      if (!listeners)
        return this;
      const index = listeners.findIndex((l) => l.listener === listener);
      if (index >= 0)
        listeners.splice(index, 1);
      return this;
    }
    once(event, listener) {
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] = []);
      listeners.push({ listener, once: true });
      return this;
    }
    emitted(event) {
      return new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _MessageStream_catchingPromiseCreated, true, "f");
        if (event !== "error")
          this.once("error", reject);
        this.once(event, resolve);
      });
    }
    async done() {
      __classPrivateFieldSet(this, _MessageStream_catchingPromiseCreated, true, "f");
      await __classPrivateFieldGet(this, _MessageStream_endPromise, "f");
    }
    get currentMessage() {
      return __classPrivateFieldGet(this, _MessageStream_currentMessageSnapshot, "f");
    }
    async finalMessage() {
      await this.done();
      return __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_getFinalMessage).call(this);
    }
    async finalText() {
      await this.done();
      return __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_getFinalText).call(this);
    }
    _emit(event, ...args) {
      if (__classPrivateFieldGet(this, _MessageStream_ended, "f"))
        return;
      if (event === "end") {
        __classPrivateFieldSet(this, _MessageStream_ended, true, "f");
        __classPrivateFieldGet(this, _MessageStream_resolveEndPromise, "f").call(this);
      }
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event];
      if (listeners) {
        __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] = listeners.filter((l) => !l.once);
        listeners.forEach(({ listener }) => listener(...args));
      }
      if (event === "abort") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _MessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _MessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _MessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
        return;
      }
      if (event === "error") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _MessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _MessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _MessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
      }
    }
    _emitFinal() {
      const finalMessage = this.receivedMessages.at(-1);
      if (finalMessage) {
        this._emit("finalMessage", __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_getFinalMessage).call(this));
      }
    }
    async _fromReadableStream(readableStream, options) {
      const signal = options?.signal;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        signal.addEventListener("abort", () => this.controller.abort());
      }
      __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_beginRequest).call(this);
      this._connected(null);
      const stream = Stream.fromReadableStream(readableStream, this.controller);
      for await (const event of stream) {
        __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_addStreamEvent).call(this, event);
      }
      if (stream.controller.signal?.aborted) {
        throw new APIUserAbortError;
      }
      __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_endRequest).call(this);
    }
    [(_MessageStream_currentMessageSnapshot = new WeakMap, _MessageStream_connectedPromise = new WeakMap, _MessageStream_resolveConnectedPromise = new WeakMap, _MessageStream_rejectConnectedPromise = new WeakMap, _MessageStream_endPromise = new WeakMap, _MessageStream_resolveEndPromise = new WeakMap, _MessageStream_rejectEndPromise = new WeakMap, _MessageStream_listeners = new WeakMap, _MessageStream_ended = new WeakMap, _MessageStream_errored = new WeakMap, _MessageStream_aborted = new WeakMap, _MessageStream_catchingPromiseCreated = new WeakMap, _MessageStream_response = new WeakMap, _MessageStream_request_id = new WeakMap, _MessageStream_handleError = new WeakMap, _MessageStream_instances = new WeakSet, _MessageStream_getFinalMessage = function _MessageStream_getFinalMessage2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      return this.receivedMessages.at(-1);
    }, _MessageStream_getFinalText = function _MessageStream_getFinalText2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      const textBlocks = this.receivedMessages.at(-1).content.filter((block) => block.type === "text").map((block) => block.text);
      if (textBlocks.length === 0) {
        throw new AnthropicError("stream ended without producing a content block with type=text");
      }
      return textBlocks.join(" ");
    }, _MessageStream_beginRequest = function _MessageStream_beginRequest2() {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _MessageStream_currentMessageSnapshot, undefined, "f");
    }, _MessageStream_addStreamEvent = function _MessageStream_addStreamEvent2(event) {
      if (this.ended)
        return;
      const messageSnapshot = __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_accumulateMessage).call(this, event);
      this._emit("streamEvent", event, messageSnapshot);
      switch (event.type) {
        case "content_block_delta": {
          const content = messageSnapshot.content.at(-1);
          switch (event.delta.type) {
            case "text_delta": {
              if (content.type === "text") {
                this._emit("text", event.delta.text, content.text || "");
              }
              break;
            }
            case "citations_delta": {
              if (content.type === "text") {
                this._emit("citation", event.delta.citation, content.citations ?? []);
              }
              break;
            }
            case "input_json_delta": {
              if (content.type === "tool_use" && content.input) {
                this._emit("inputJson", event.delta.partial_json, content.input);
              }
              break;
            }
            case "thinking_delta": {
              if (content.type === "thinking") {
                this._emit("thinking", event.delta.thinking, content.thinking);
              }
              break;
            }
            case "signature_delta": {
              if (content.type === "thinking") {
                this._emit("signature", content.signature);
              }
              break;
            }
            default:
              checkNever2(event.delta);
          }
          break;
        }
        case "message_stop": {
          this._addMessageParam(messageSnapshot);
          this._addMessage(messageSnapshot, true);
          break;
        }
        case "content_block_stop": {
          this._emit("contentBlock", messageSnapshot.content.at(-1));
          break;
        }
        case "message_start": {
          __classPrivateFieldSet(this, _MessageStream_currentMessageSnapshot, messageSnapshot, "f");
          break;
        }
        case "content_block_start":
        case "message_delta":
          break;
      }
    }, _MessageStream_endRequest = function _MessageStream_endRequest2() {
      if (this.ended) {
        throw new AnthropicError(`stream has ended, this shouldn't happen`);
      }
      const snapshot = __classPrivateFieldGet(this, _MessageStream_currentMessageSnapshot, "f");
      if (!snapshot) {
        throw new AnthropicError(`request ended without sending any chunks`);
      }
      __classPrivateFieldSet(this, _MessageStream_currentMessageSnapshot, undefined, "f");
      return snapshot;
    }, _MessageStream_accumulateMessage = function _MessageStream_accumulateMessage2(event) {
      let snapshot = __classPrivateFieldGet(this, _MessageStream_currentMessageSnapshot, "f");
      if (event.type === "message_start") {
        if (snapshot) {
          throw new AnthropicError(`Unexpected event order, got ${event.type} before receiving "message_stop"`);
        }
        return event.message;
      }
      if (!snapshot) {
        throw new AnthropicError(`Unexpected event order, got ${event.type} before "message_start"`);
      }
      switch (event.type) {
        case "message_stop":
          return snapshot;
        case "message_delta":
          snapshot.stop_reason = event.delta.stop_reason;
          snapshot.stop_sequence = event.delta.stop_sequence;
          snapshot.usage.output_tokens = event.usage.output_tokens;
          if (event.usage.input_tokens != null) {
            snapshot.usage.input_tokens = event.usage.input_tokens;
          }
          if (event.usage.cache_creation_input_tokens != null) {
            snapshot.usage.cache_creation_input_tokens = event.usage.cache_creation_input_tokens;
          }
          if (event.usage.cache_read_input_tokens != null) {
            snapshot.usage.cache_read_input_tokens = event.usage.cache_read_input_tokens;
          }
          if (event.usage.server_tool_use != null) {
            snapshot.usage.server_tool_use = event.usage.server_tool_use;
          }
          return snapshot;
        case "content_block_start":
          snapshot.content.push(event.content_block);
          return snapshot;
        case "content_block_delta": {
          const snapshotContent = snapshot.content.at(event.index);
          switch (event.delta.type) {
            case "text_delta": {
              if (snapshotContent?.type === "text") {
                snapshotContent.text += event.delta.text;
              }
              break;
            }
            case "citations_delta": {
              if (snapshotContent?.type === "text") {
                snapshotContent.citations ?? (snapshotContent.citations = []);
                snapshotContent.citations.push(event.delta.citation);
              }
              break;
            }
            case "input_json_delta": {
              if (snapshotContent?.type === "tool_use") {
                let jsonBuf = snapshotContent[JSON_BUF_PROPERTY2] || "";
                jsonBuf += event.delta.partial_json;
                Object.defineProperty(snapshotContent, JSON_BUF_PROPERTY2, {
                  value: jsonBuf,
                  enumerable: false,
                  writable: true
                });
                if (jsonBuf) {
                  snapshotContent.input = partialParse(jsonBuf);
                }
              }
              break;
            }
            case "thinking_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshotContent.thinking += event.delta.thinking;
              }
              break;
            }
            case "signature_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshotContent.signature = event.delta.signature;
              }
              break;
            }
            default:
              checkNever2(event.delta);
          }
          return snapshot;
        }
        case "content_block_stop":
          return snapshot;
      }
    }, Symbol.asyncIterator)]() {
      const pushQueue = [];
      const readQueue = [];
      let done = false;
      this.on("streamEvent", (event) => {
        const reader = readQueue.shift();
        if (reader) {
          reader.resolve(event);
        } else {
          pushQueue.push(event);
        }
      });
      this.on("end", () => {
        done = true;
        for (const reader of readQueue) {
          reader.resolve(undefined);
        }
        readQueue.length = 0;
      });
      this.on("abort", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      this.on("error", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      return {
        next: async () => {
          if (!pushQueue.length) {
            if (done) {
              return { value: undefined, done: true };
            }
            return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk2) => chunk2 ? { value: chunk2, done: false } : { value: undefined, done: true });
          }
          const chunk = pushQueue.shift();
          return { value: chunk, done: false };
        },
        return: async () => {
          this.abort();
          return { value: undefined, done: true };
        }
      };
    }
    toReadableStream() {
      const stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
      return stream.toReadableStream();
    }
  };
});

// node_modules/@anthropic-ai/sdk/resources/messages/batches.mjs
var Batches2;
var init_batches2 = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_jsonl();
  init_error2();
  init_path();
  Batches2 = class Batches2 extends APIResource {
    create(body, options) {
      return this._client.post("/v1/messages/batches", { body, ...options });
    }
    retrieve(messageBatchID, options) {
      return this._client.get(path`/v1/messages/batches/${messageBatchID}`, options);
    }
    list(query = {}, options) {
      return this._client.getAPIList("/v1/messages/batches", Page, { query, ...options });
    }
    delete(messageBatchID, options) {
      return this._client.delete(path`/v1/messages/batches/${messageBatchID}`, options);
    }
    cancel(messageBatchID, options) {
      return this._client.post(path`/v1/messages/batches/${messageBatchID}/cancel`, options);
    }
    async results(messageBatchID, options) {
      const batch = await this.retrieve(messageBatchID);
      if (!batch.results_url) {
        throw new AnthropicError(`No batch \`results_url\`; Has it finished processing? ${batch.processing_status} - ${batch.id}`);
      }
      return this._client.get(batch.results_url, {
        ...options,
        headers: buildHeaders([{ Accept: "application/binary" }, options?.headers]),
        stream: true,
        __binaryResponse: true
      })._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller));
    }
  };
});

// node_modules/@anthropic-ai/sdk/resources/messages/messages.mjs
var Messages2, DEPRECATED_MODELS2;
var init_messages2 = __esm(() => {
  init_resource();
  init_MessageStream();
  init_batches2();
  init_batches2();
  init_constants();
  Messages2 = class Messages2 extends APIResource {
    constructor() {
      super(...arguments);
      this.batches = new Batches2(this._client);
    }
    create(body, options) {
      if (body.model in DEPRECATED_MODELS2) {
        console.warn(`The model '${body.model}' is deprecated and will reach end-of-life on ${DEPRECATED_MODELS2[body.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
      }
      let timeout = this._client._options.timeout;
      if (!body.stream && timeout == null) {
        const maxNonstreamingTokens = MODEL_NONSTREAMING_TOKENS[body.model] ?? undefined;
        timeout = this._client.calculateNonstreamingTimeout(body.max_tokens, maxNonstreamingTokens);
      }
      return this._client.post("/v1/messages", {
        body,
        timeout: timeout ?? 600000,
        ...options,
        stream: body.stream ?? false
      });
    }
    stream(body, options) {
      return MessageStream.createMessage(this, body, options);
    }
    countTokens(body, options) {
      return this._client.post("/v1/messages/count_tokens", { body, ...options });
    }
  };
  DEPRECATED_MODELS2 = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025"
  };
  Messages2.Batches = Batches2;
});

// node_modules/@anthropic-ai/sdk/resources/models.mjs
var Models2;
var init_models2 = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_path();
  Models2 = class Models2 extends APIResource {
    retrieve(modelID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/models/${modelID}`, {
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/models", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
  };
});

// node_modules/@anthropic-ai/sdk/resources/index.mjs
var init_resources = __esm(() => {
  init_beta();
  init_completions();
  init_messages2();
  init_models2();
  init_shared();
});

// node_modules/@anthropic-ai/sdk/internal/utils/env.mjs
var readEnv = (env) => {
  if (typeof globalThis.process !== "undefined") {
    return globalThis.process.env?.[env]?.trim() ?? undefined;
  }
  if (typeof globalThis.Deno !== "undefined") {
    return globalThis.Deno.env?.get?.(env)?.trim();
  }
  return;
};
var init_env = () => {};

// node_modules/@anthropic-ai/sdk/client.mjs
class BaseAnthropic {
  constructor({ baseURL = readEnv("ANTHROPIC_BASE_URL"), apiKey = readEnv("ANTHROPIC_API_KEY") ?? null, authToken = readEnv("ANTHROPIC_AUTH_TOKEN") ?? null, ...opts } = {}) {
    _BaseAnthropic_encoder.set(this, undefined);
    const options = {
      apiKey,
      authToken,
      ...opts,
      baseURL: baseURL || `https://api.anthropic.com`
    };
    if (!options.dangerouslyAllowBrowser && isRunningInBrowser()) {
      throw new AnthropicError(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    }
    this.baseURL = options.baseURL;
    this.timeout = options.timeout ?? Anthropic.DEFAULT_TIMEOUT;
    this.logger = options.logger ?? console;
    const defaultLogLevel = "warn";
    this.logLevel = defaultLogLevel;
    this.logLevel = parseLogLevel(options.logLevel, "ClientOptions.logLevel", this) ?? parseLogLevel(readEnv("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ?? defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? getDefaultFetch();
    __classPrivateFieldSet(this, _BaseAnthropic_encoder, FallbackEncoder, "f");
    this._options = options;
    this.apiKey = apiKey;
    this.authToken = authToken;
  }
  withOptions(options) {
    return new this.constructor({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      authToken: this.authToken,
      ...options
    });
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values, nulls }) {
    if (this.apiKey && values.get("x-api-key")) {
      return;
    }
    if (nulls.has("x-api-key")) {
      return;
    }
    if (this.authToken && values.get("authorization")) {
      return;
    }
    if (nulls.has("authorization")) {
      return;
    }
    throw new Error('Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted');
  }
  authHeaders(opts) {
    return buildHeaders([this.apiKeyAuth(opts), this.bearerAuth(opts)]);
  }
  apiKeyAuth(opts) {
    if (this.apiKey == null) {
      return;
    }
    return buildHeaders([{ "X-Api-Key": this.apiKey }]);
  }
  bearerAuth(opts) {
    if (this.authToken == null) {
      return;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.authToken}` }]);
  }
  stringifyQuery(query) {
    return Object.entries(query).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
      if (value === null) {
        return `${encodeURIComponent(key)}=`;
      }
      throw new AnthropicError(`Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
    }).join("&");
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${VERSION}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${uuid4()}`;
  }
  makeStatusError(status, error2, message, headers) {
    return APIError.generate(status, error2, message, headers);
  }
  buildURL(path2, query) {
    const url = isAbsoluteURL(path2) ? new URL(path2) : new URL(this.baseURL + (this.baseURL.endsWith("/") && path2.startsWith("/") ? path2.slice(1) : path2));
    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }
    if (typeof query === "object" && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }
    return url.toString();
  }
  _calculateNonstreamingTimeout(maxTokens) {
    const defaultTimeout = 10 * 60;
    const expectedTimeout = 60 * 60 * maxTokens / 128000;
    if (expectedTimeout > defaultTimeout) {
      throw new AnthropicError("Streaming is strongly recommended for operations that may take longer than 10 minutes. " + "See https://github.com/anthropics/anthropic-sdk-python#streaming-responses for more details");
    }
    return defaultTimeout * 1000;
  }
  async prepareOptions(options) {}
  async prepareRequest(request, { url, options }) {}
  get(path2, opts) {
    return this.methodRequest("get", path2, opts);
  }
  post(path2, opts) {
    return this.methodRequest("post", path2, opts);
  }
  patch(path2, opts) {
    return this.methodRequest("patch", path2, opts);
  }
  put(path2, opts) {
    return this.methodRequest("put", path2, opts);
  }
  delete(path2, opts) {
    return this.methodRequest("delete", path2, opts);
  }
  methodRequest(method, path2, opts) {
    return this.request(Promise.resolve(opts).then((opts2) => {
      return { method, path: path2, ...opts2 };
    }));
  }
  request(options, remainingRetries = null) {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }
  async makeRequest(optionsInput, retriesRemaining, retryOfRequestLogID) {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }
    await this.prepareOptions(options);
    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });
    await this.prepareRequest(req, { url, options });
    const requestLogID = "log_" + (Math.random() * (1 << 24) | 0).toString(16).padStart(6, "0");
    const retryLogStr = retryOfRequestLogID === undefined ? "" : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();
    loggerFor(this).debug(`[${requestLogID}] sending request`, formatRequestDetails({
      retryOfRequestLogID,
      method: options.method,
      url,
      options,
      headers: req.headers
    }));
    if (options.signal?.aborted) {
      throw new APIUserAbortError;
    }
    const controller = new AbortController;
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();
    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new APIUserAbortError;
      }
      const isTimeout = isAbortError(response) || /timed? ?out/i.test(String(response) + ("cause" in response ? String(response.cause) : ""));
      if (retriesRemaining) {
        loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} - ${retryMessage}`);
        loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} (${retryMessage})`, formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message
        }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} - error; no more retries left`);
      loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} (error; no more retries left)`, formatRequestDetails({
        retryOfRequestLogID,
        url,
        durationMs: headersTime - startTime,
        message: response.message
      }));
      if (isTimeout) {
        throw new APIConnectionTimeoutError;
      }
      throw new APIConnectionError({ cause: response });
    }
    const specialHeaders = [...response.headers.entries()].filter(([name]) => name === "request-id").map(([name, value]) => ", " + name + ": " + JSON.stringify(value)).join("");
    const responseInfo = `[${requestLogID}${retryLogStr}${specialHeaders}] ${req.method} ${url} ${response.ok ? "succeeded" : "failed"} with status ${response.status} in ${headersTime - startTime}ms`;
    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage2 = `retrying, ${retriesRemaining} attempts remaining`;
        await CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage2}`);
        loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage2})`, formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          durationMs: headersTime - startTime
        }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID, response.headers);
      }
      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;
      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
      const errText = await response.text().catch((err2) => castToError(err2).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;
      loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage})`, formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        message: errMessage,
        durationMs: Date.now() - startTime
      }));
      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }
    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(`[${requestLogID}] response start`, formatRequestDetails({
      retryOfRequestLogID,
      url: response.url,
      status: response.status,
      headers: response.headers,
      durationMs: headersTime - startTime
    }));
    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }
  getAPIList(path2, Page2, opts) {
    return this.requestAPIList(Page2, { method: "get", path: path2, ...opts });
  }
  requestAPIList(Page2, options) {
    const request = this.makeRequest(options, null, undefined);
    return new PagePromise(this, request, Page2);
  }
  async fetchWithTimeout(url, init, ms, controller) {
    const { signal, method, ...options } = init || {};
    if (signal)
      signal.addEventListener("abort", () => controller.abort());
    const timeout = setTimeout(() => controller.abort(), ms);
    const isReadableBody = globalThis.ReadableStream && options.body instanceof globalThis.ReadableStream || typeof options.body === "object" && options.body !== null && Symbol.asyncIterator in options.body;
    const fetchOptions = {
      signal: controller.signal,
      ...isReadableBody ? { duplex: "half" } : {},
      method: "GET",
      ...options
    };
    if (method) {
      fetchOptions.method = method.toUpperCase();
    }
    try {
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }
  shouldRetry(response) {
    const shouldRetryHeader = response.headers.get("x-should-retry");
    if (shouldRetryHeader === "true")
      return true;
    if (shouldRetryHeader === "false")
      return false;
    if (response.status === 408)
      return true;
    if (response.status === 409)
      return true;
    if (response.status === 429)
      return true;
    if (response.status >= 500)
      return true;
    return false;
  }
  async retryRequest(options, retriesRemaining, requestLogID, responseHeaders) {
    let timeoutMillis;
    const retryAfterMillisHeader = responseHeaders?.get("retry-after-ms");
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }
    const retryAfterHeader = responseHeaders?.get("retry-after");
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);
    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }
  calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8;
    const numRetries = maxRetries - retriesRemaining;
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);
    const jitter = 1 - Math.random() * 0.25;
    return sleepSeconds * jitter * 1000;
  }
  calculateNonstreamingTimeout(maxTokens, maxNonstreamingTokens) {
    const maxTime = 60 * 60 * 1000;
    const defaultTime = 60 * 10 * 1000;
    const expectedTime = maxTime * maxTokens / 128000;
    if (expectedTime > defaultTime || maxNonstreamingTokens != null && maxTokens > maxNonstreamingTokens) {
      throw new AnthropicError("Streaming is strongly recommended for operations that may token longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");
    }
    return defaultTime;
  }
  buildRequest(inputOptions, { retryCount = 0 } = {}) {
    const options = { ...inputOptions };
    const { method, path: path2, query } = options;
    const url = this.buildURL(path2, query);
    if ("timeout" in options)
      validatePositiveInteger("timeout", options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });
    const req = {
      method,
      headers: reqHeaders,
      ...options.signal && { signal: options.signal },
      ...globalThis.ReadableStream && body instanceof globalThis.ReadableStream && { duplex: "half" },
      ...body && { body },
      ...this.fetchOptions ?? {},
      ...options.fetchOptions ?? {}
    };
    return { req, url, timeout: options.timeout };
  }
  buildHeaders({ options, method, bodyHeaders, retryCount }) {
    let idempotencyHeaders = {};
    if (this.idempotencyHeader && method !== "get") {
      if (!options.idempotencyKey)
        options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }
    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: "application/json",
        "User-Agent": this.getUserAgent(),
        "X-Stainless-Retry-Count": String(retryCount),
        ...options.timeout ? { "X-Stainless-Timeout": String(Math.trunc(options.timeout / 1000)) } : {},
        ...getPlatformHeaders(),
        ...this._options.dangerouslyAllowBrowser ? { "anthropic-dangerous-direct-browser-access": "true" } : undefined,
        "anthropic-version": "2023-06-01"
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers
    ]);
    this.validateHeaders(headers);
    return headers.values;
  }
  buildBody({ options: { body, headers: rawHeaders } }) {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (ArrayBuffer.isView(body) || body instanceof ArrayBuffer || body instanceof DataView || typeof body === "string" && headers.values.has("content-type") || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams || globalThis.ReadableStream && body instanceof globalThis.ReadableStream) {
      return { bodyHeaders: undefined, body };
    } else if (typeof body === "object" && ((Symbol.asyncIterator in body) || (Symbol.iterator in body) && ("next" in body) && typeof body.next === "function")) {
      return { bodyHeaders: undefined, body: ReadableStreamFrom(body) };
    } else {
      return __classPrivateFieldGet(this, _BaseAnthropic_encoder, "f").call(this, { body, headers });
    }
  }
}
var _a, _BaseAnthropic_encoder, Anthropic;
var init_client = __esm(() => {
  init_tslib();
  init_uuid();
  init_values();
  init_sleep();
  init_log();
  init_errors();
  init_detect_platform();
  init_shims();
  init_request_options();
  init_version();
  init_error();
  init_pagination();
  init_uploads2();
  init_resources();
  init_api_promise();
  init_detect_platform();
  init_headers();
  init_completions();
  init_models2();
  init_env();
  init_log();
  init_values();
  init_beta();
  init_messages2();
  _a = BaseAnthropic, _BaseAnthropic_encoder = new WeakMap;
  BaseAnthropic.Anthropic = _a;
  BaseAnthropic.HUMAN_PROMPT = `

Human:`;
  BaseAnthropic.AI_PROMPT = `

Assistant:`;
  BaseAnthropic.DEFAULT_TIMEOUT = 600000;
  BaseAnthropic.AnthropicError = AnthropicError;
  BaseAnthropic.APIError = APIError;
  BaseAnthropic.APIConnectionError = APIConnectionError;
  BaseAnthropic.APIConnectionTimeoutError = APIConnectionTimeoutError;
  BaseAnthropic.APIUserAbortError = APIUserAbortError;
  BaseAnthropic.NotFoundError = NotFoundError;
  BaseAnthropic.ConflictError = ConflictError;
  BaseAnthropic.RateLimitError = RateLimitError;
  BaseAnthropic.BadRequestError = BadRequestError;
  BaseAnthropic.AuthenticationError = AuthenticationError;
  BaseAnthropic.InternalServerError = InternalServerError;
  BaseAnthropic.PermissionDeniedError = PermissionDeniedError;
  BaseAnthropic.UnprocessableEntityError = UnprocessableEntityError;
  BaseAnthropic.toFile = toFile;
  Anthropic = class Anthropic extends BaseAnthropic {
    constructor() {
      super(...arguments);
      this.completions = new Completions(this);
      this.messages = new Messages2(this);
      this.models = new Models2(this);
      this.beta = new Beta(this);
    }
  };
  Anthropic.Completions = Completions;
  Anthropic.Messages = Messages2;
  Anthropic.Models = Models2;
  Anthropic.Beta = Beta;
});

// node_modules/@anthropic-ai/sdk/index.mjs
var init_sdk = __esm(() => {
  init_client();
  init_uploads2();
  init_api_promise();
  init_client();
  init_pagination();
  init_error();
});

// src/utils/errors.ts
function isAbortError2(e) {
  return e instanceof AbortError || e instanceof APIUserAbortError || e instanceof Error && e.name === "AbortError";
}
function hasExactErrorMessage(error2, message) {
  return error2 instanceof Error && error2.message === message;
}
function toError(e) {
  return e instanceof Error ? e : new Error(String(e));
}
function errorMessage(e) {
  return e instanceof Error ? e.message : String(e);
}
function getErrnoCode(e) {
  if (e && typeof e === "object" && "code" in e && typeof e.code === "string") {
    return e.code;
  }
  return;
}
function isENOENT(e) {
  return getErrnoCode(e) === "ENOENT";
}
function getErrnoPath(e) {
  if (e && typeof e === "object" && "path" in e && typeof e.path === "string") {
    return e.path;
  }
  return;
}
function isFsInaccessible(e) {
  const code = getErrnoCode(e);
  return code === "ENOENT" || code === "EACCES" || code === "EPERM" || code === "ENOTDIR" || code === "ELOOP";
}
function classifyAxiosError(e) {
  const message = errorMessage(e);
  if (!e || typeof e !== "object" || !("isAxiosError" in e) || !e.isAxiosError) {
    return { kind: "other", message };
  }
  const err = e;
  const status = err.response?.status;
  if (status === 401 || status === 403)
    return { kind: "auth", status, message };
  if (err.code === "ECONNABORTED")
    return { kind: "timeout", status, message };
  if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND") {
    return { kind: "network", status, message };
  }
  return { kind: "http", status, message };
}
var ClaudeError, MalformedCommandError, AbortError, ConfigParseError, ShellError, TeleportOperationError, TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS;
var init_errors2 = __esm(() => {
  init_sdk();
  ClaudeError = class ClaudeError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  };
  MalformedCommandError = class MalformedCommandError extends Error {
  };
  AbortError = class AbortError extends Error {
    constructor(message) {
      super(message);
      this.name = "AbortError";
    }
  };
  ConfigParseError = class ConfigParseError extends Error {
    filePath;
    defaultConfig;
    constructor(message, filePath, defaultConfig) {
      super(message);
      this.name = "ConfigParseError";
      this.filePath = filePath;
      this.defaultConfig = defaultConfig;
    }
  };
  ShellError = class ShellError extends Error {
    stdout;
    stderr;
    code;
    interrupted;
    constructor(stdout, stderr, code, interrupted) {
      super("Shell command failed");
      this.stdout = stdout;
      this.stderr = stderr;
      this.code = code;
      this.interrupted = interrupted;
      this.name = "ShellError";
    }
  };
  TeleportOperationError = class TeleportOperationError extends Error {
    formattedMessage;
    constructor(message, formattedMessage) {
      super(message);
      this.formattedMessage = formattedMessage;
      this.name = "TeleportOperationError";
    }
  };
  TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS = class TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS extends Error {
    telemetryMessage;
    constructor(message, telemetryMessage) {
      super(message);
      this.name = "TelemetrySafeError";
      this.telemetryMessage = telemetryMessage ?? message;
    }
  };
});

// src/utils/debugFilter.ts
function extractDebugCategories(message) {
  const categories = [];
  const mcpMatch = message.match(/^MCP server ["']([^"']+)["']/);
  if (mcpMatch && mcpMatch[1]) {
    categories.push("mcp");
    categories.push(mcpMatch[1].toLowerCase());
  } else {
    const prefixMatch = message.match(/^([^:[]+):/);
    if (prefixMatch && prefixMatch[1]) {
      categories.push(prefixMatch[1].trim().toLowerCase());
    }
  }
  const bracketMatch = message.match(/^\[([^\]]+)]/);
  if (bracketMatch && bracketMatch[1]) {
    categories.push(bracketMatch[1].trim().toLowerCase());
  }
  if (message.toLowerCase().includes("1p event:")) {
    categories.push("1p");
  }
  const secondaryMatch = message.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (secondaryMatch && secondaryMatch[1]) {
    const secondary = secondaryMatch[1].trim().toLowerCase();
    if (secondary.length < 30 && !secondary.includes(" ")) {
      categories.push(secondary);
    }
  }
  return Array.from(new Set(categories));
}
function shouldShowDebugCategories(categories, filter) {
  if (!filter) {
    return true;
  }
  if (categories.length === 0) {
    return false;
  }
  if (filter.isExclusive) {
    return !categories.some((cat) => filter.exclude.includes(cat));
  } else {
    return categories.some((cat) => filter.include.includes(cat));
  }
}
function shouldShowDebugMessage(message, filter) {
  if (!filter) {
    return true;
  }
  const categories = extractDebugCategories(message);
  return shouldShowDebugCategories(categories, filter);
}
var parseDebugFilter;
var init_debugFilter = __esm(() => {
  init_memoize();
  parseDebugFilter = memoize_default((filterString) => {
    if (!filterString || filterString.trim() === "") {
      return null;
    }
    const filters = filterString.split(",").map((f) => f.trim()).filter(Boolean);
    if (filters.length === 0) {
      return null;
    }
    const hasExclusive = filters.some((f) => f.startsWith("!"));
    const hasInclusive = filters.some((f) => !f.startsWith("!"));
    if (hasExclusive && hasInclusive) {
      return null;
    }
    const cleanFilters = filters.map((f) => f.replace(/^!/, "").toLowerCase());
    return {
      include: hasExclusive ? [] : cleanFilters,
      exclude: hasExclusive ? cleanFilters : [],
      isExclusive: hasExclusive
    };
  });
});

// src/utils/fsOperations.ts
import * as fs from "fs";
import {
  mkdir as mkdirPromise,
  open,
  readdir as readdirPromise,
  readFile as readFilePromise,
  rename as renamePromise,
  rmdir as rmdirPromise,
  rm as rmPromise,
  stat as statPromise,
  unlink as unlinkPromise
} from "fs/promises";
import { homedir } from "os";
import * as nodePath from "path";
function safeResolvePath(fs2, filePath) {
  if (filePath.startsWith("//") || filePath.startsWith("\\\\")) {
    return { resolvedPath: filePath, isSymlink: false, isCanonical: false };
  }
  try {
    const stats = fs2.lstatSync(filePath);
    if (stats.isFIFO() || stats.isSocket() || stats.isCharacterDevice() || stats.isBlockDevice()) {
      return { resolvedPath: filePath, isSymlink: false, isCanonical: false };
    }
    const resolvedPath = fs2.realpathSync(filePath);
    return {
      resolvedPath,
      isSymlink: resolvedPath !== filePath,
      isCanonical: true
    };
  } catch (_error) {
    return { resolvedPath: filePath, isSymlink: false, isCanonical: false };
  }
}
function isDuplicatePath(fs2, filePath, loadedPaths) {
  const { resolvedPath } = safeResolvePath(fs2, filePath);
  if (loadedPaths.has(resolvedPath)) {
    return true;
  }
  loadedPaths.add(resolvedPath);
  return false;
}
function resolveDeepestExistingAncestorSync(fs2, absolutePath) {
  let dir = absolutePath;
  const segments = [];
  while (dir !== nodePath.dirname(dir)) {
    let st;
    try {
      st = fs2.lstatSync(dir);
    } catch {
      segments.unshift(nodePath.basename(dir));
      dir = nodePath.dirname(dir);
      continue;
    }
    if (st.isSymbolicLink()) {
      try {
        const resolved = fs2.realpathSync(dir);
        return segments.length === 0 ? resolved : nodePath.join(resolved, ...segments);
      } catch {
        const target = fs2.readlinkSync(dir);
        const absTarget = nodePath.isAbsolute(target) ? target : nodePath.resolve(nodePath.dirname(dir), target);
        return segments.length === 0 ? absTarget : nodePath.join(absTarget, ...segments);
      }
    }
    try {
      const resolved = fs2.realpathSync(dir);
      if (resolved !== dir) {
        return segments.length === 0 ? resolved : nodePath.join(resolved, ...segments);
      }
    } catch {}
    return;
  }
  return;
}
function getPathsForPermissionCheck(inputPath) {
  let path2 = inputPath;
  if (path2 === "~") {
    path2 = homedir().normalize("NFC");
  } else if (path2.startsWith("~/")) {
    path2 = nodePath.join(homedir().normalize("NFC"), path2.slice(2));
  }
  const pathSet = new Set;
  const fsImpl = getFsImplementation();
  pathSet.add(path2);
  if (path2.startsWith("//") || path2.startsWith("\\\\")) {
    return Array.from(pathSet);
  }
  try {
    let currentPath = path2;
    const visited = new Set;
    const maxDepth = 40;
    for (let depth = 0;depth < maxDepth; depth++) {
      if (visited.has(currentPath)) {
        break;
      }
      visited.add(currentPath);
      if (!fsImpl.existsSync(currentPath)) {
        if (currentPath === path2) {
          const resolved = resolveDeepestExistingAncestorSync(fsImpl, path2);
          if (resolved !== undefined) {
            pathSet.add(resolved);
          }
        }
        break;
      }
      const stats = fsImpl.lstatSync(currentPath);
      if (stats.isFIFO() || stats.isSocket() || stats.isCharacterDevice() || stats.isBlockDevice()) {
        break;
      }
      if (!stats.isSymbolicLink()) {
        break;
      }
      const target = fsImpl.readlinkSync(currentPath);
      const absoluteTarget = nodePath.isAbsolute(target) ? target : nodePath.resolve(nodePath.dirname(currentPath), target);
      pathSet.add(absoluteTarget);
      currentPath = absoluteTarget;
    }
  } catch {}
  const { resolvedPath, isSymlink } = safeResolvePath(fsImpl, path2);
  if (isSymlink && resolvedPath !== path2) {
    pathSet.add(resolvedPath);
  }
  return Array.from(pathSet);
}
function getFsImplementation() {
  return activeFs;
}
async function readFileRange(path2, offset, maxBytes) {
  let __stack = [];
  try {
    const fh = __using(__stack, await open(path2, "r"), 1);
    const size = (await fh.stat()).size;
    if (size <= offset) {
      return null;
    }
    const bytesToRead = Math.min(size - offset, maxBytes);
    const buffer = Buffer.allocUnsafe(bytesToRead);
    let totalRead = 0;
    while (totalRead < bytesToRead) {
      const { bytesRead } = await fh.read(buffer, totalRead, bytesToRead - totalRead, offset + totalRead);
      if (bytesRead === 0) {
        break;
      }
      totalRead += bytesRead;
    }
    return {
      content: buffer.toString("utf8", 0, totalRead),
      bytesRead: totalRead,
      bytesTotal: size
    };
  } catch (_catch) {
    var _err = _catch, _hasErr = 1;
  } finally {
    var _promise = __callDispose(__stack, _err, _hasErr);
    _promise && await _promise;
  }
}
async function tailFile(path2, maxBytes) {
  let __stack = [];
  try {
    const fh = __using(__stack, await open(path2, "r"), 1);
    const size = (await fh.stat()).size;
    if (size === 0) {
      return { content: "", bytesRead: 0, bytesTotal: 0 };
    }
    const offset = Math.max(0, size - maxBytes);
    const bytesToRead = size - offset;
    const buffer = Buffer.allocUnsafe(bytesToRead);
    let totalRead = 0;
    while (totalRead < bytesToRead) {
      const { bytesRead } = await fh.read(buffer, totalRead, bytesToRead - totalRead, offset + totalRead);
      if (bytesRead === 0) {
        break;
      }
      totalRead += bytesRead;
    }
    return {
      content: buffer.toString("utf8", 0, totalRead),
      bytesRead: totalRead,
      bytesTotal: size
    };
  } catch (_catch) {
    var _err = _catch, _hasErr = 1;
  } finally {
    var _promise = __callDispose(__stack, _err, _hasErr);
    _promise && await _promise;
  }
}
async function* readLinesReverse(path2) {
  const CHUNK_SIZE = 1024 * 4;
  const fileHandle = await open(path2, "r");
  try {
    const stats = await fileHandle.stat();
    let position = stats.size;
    let remainder = Buffer.alloc(0);
    const buffer = Buffer.alloc(CHUNK_SIZE);
    while (position > 0) {
      const currentChunkSize = Math.min(CHUNK_SIZE, position);
      position -= currentChunkSize;
      await fileHandle.read(buffer, 0, currentChunkSize, position);
      const combined = Buffer.concat([
        buffer.subarray(0, currentChunkSize),
        remainder
      ]);
      const firstNewline = combined.indexOf(10);
      if (firstNewline === -1) {
        remainder = combined;
        continue;
      }
      remainder = Buffer.from(combined.subarray(0, firstNewline));
      const lines = combined.toString("utf8", firstNewline + 1).split(`
`);
      for (let i = lines.length - 1;i >= 0; i--) {
        const line = lines[i];
        if (line) {
          yield line;
        }
      }
    }
    if (remainder.length > 0) {
      yield remainder.toString("utf8");
    }
  } finally {
    await fileHandle.close();
  }
}
var NodeFsOperations, activeFs;
var init_fsOperations = __esm(() => {
  init_errors2();
  init_slowOperations();
  NodeFsOperations = {
    cwd() {
      return process.cwd();
    },
    existsSync(fsPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.existsSync(${fsPath})`, 0);
        return fs.existsSync(fsPath);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    async stat(fsPath) {
      return statPromise(fsPath);
    },
    async readdir(fsPath) {
      return readdirPromise(fsPath, { withFileTypes: true });
    },
    async unlink(fsPath) {
      return unlinkPromise(fsPath);
    },
    async rmdir(fsPath) {
      return rmdirPromise(fsPath);
    },
    async rm(fsPath, options) {
      return rmPromise(fsPath, options);
    },
    async mkdir(dirPath, options) {
      try {
        await mkdirPromise(dirPath, { recursive: true, ...options });
      } catch (e) {
        if (getErrnoCode(e) !== "EEXIST")
          throw e;
      }
    },
    async readFile(fsPath, options) {
      return readFilePromise(fsPath, { encoding: options.encoding });
    },
    async rename(oldPath, newPath) {
      return renamePromise(oldPath, newPath);
    },
    statSync(fsPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.statSync(${fsPath})`, 0);
        return fs.statSync(fsPath);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    lstatSync(fsPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.lstatSync(${fsPath})`, 0);
        return fs.lstatSync(fsPath);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    readFileSync(fsPath, options) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.readFileSync(${fsPath})`, 0);
        return fs.readFileSync(fsPath, { encoding: options.encoding });
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    readFileBytesSync(fsPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.readFileBytesSync(${fsPath})`, 0);
        return fs.readFileSync(fsPath);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    readSync(fsPath, options) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.readSync(${fsPath}, ${options.length} bytes)`, 0);
        let fd = undefined;
        try {
          fd = fs.openSync(fsPath, "r");
          const buffer = Buffer.alloc(options.length);
          const bytesRead = fs.readSync(fd, buffer, 0, options.length, 0);
          return { buffer, bytesRead };
        } finally {
          if (fd)
            fs.closeSync(fd);
        }
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    appendFileSync(path2, data, options) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.appendFileSync(${path2}, ${data.length} chars)`, 0);
        if (options?.mode !== undefined) {
          try {
            const fd = fs.openSync(path2, "ax", options.mode);
            try {
              fs.appendFileSync(fd, data);
            } finally {
              fs.closeSync(fd);
            }
            return;
          } catch (e) {
            if (getErrnoCode(e) !== "EEXIST")
              throw e;
          }
        }
        fs.appendFileSync(path2, data);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    copyFileSync(src, dest) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.copyFileSync(${src} \u2192 ${dest})`, 0);
        fs.copyFileSync(src, dest);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    unlinkSync(path2) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.unlinkSync(${path2})`, 0);
        fs.unlinkSync(path2);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    renameSync(oldPath, newPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.renameSync(${oldPath} \u2192 ${newPath})`, 0);
        fs.renameSync(oldPath, newPath);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    linkSync(target, path2) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.linkSync(${target} \u2192 ${path2})`, 0);
        fs.linkSync(target, path2);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    symlinkSync(target, path2, type) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.symlinkSync(${target} \u2192 ${path2})`, 0);
        fs.symlinkSync(target, path2, type);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    readlinkSync(path2) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.readlinkSync(${path2})`, 0);
        return fs.readlinkSync(path2);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    realpathSync(path2) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.realpathSync(${path2})`, 0);
        return fs.realpathSync(path2).normalize("NFC");
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    mkdirSync(dirPath, options) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.mkdirSync(${dirPath})`, 0);
        const mkdirOptions = {
          recursive: true
        };
        if (options?.mode !== undefined) {
          mkdirOptions.mode = options.mode;
        }
        try {
          fs.mkdirSync(dirPath, mkdirOptions);
        } catch (e) {
          if (getErrnoCode(e) !== "EEXIST")
            throw e;
        }
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    readdirSync(dirPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.readdirSync(${dirPath})`, 0);
        return fs.readdirSync(dirPath, { withFileTypes: true });
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    readdirStringSync(dirPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.readdirStringSync(${dirPath})`, 0);
        return fs.readdirSync(dirPath);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    isDirEmptySync(dirPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.isDirEmptySync(${dirPath})`, 0);
        const files = this.readdirSync(dirPath);
        return files.length === 0;
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    rmdirSync(dirPath) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.rmdirSync(${dirPath})`, 0);
        fs.rmdirSync(dirPath);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    rmSync(path2, options) {
      let __stack = [];
      try {
        const _ = __using(__stack, slowLogging`fs.rmSync(${path2})`, 0);
        fs.rmSync(path2, options);
      } catch (_catch) {
        var _err = _catch, _hasErr = 1;
      } finally {
        __callDispose(__stack, _err, _hasErr);
      }
    },
    createWriteStream(path2) {
      return fs.createWriteStream(path2);
    },
    async readFileBytes(fsPath, maxBytes) {
      if (maxBytes === undefined) {
        return readFilePromise(fsPath);
      }
      const handle = await open(fsPath, "r");
      try {
        const { size } = await handle.stat();
        const readSize = Math.min(size, maxBytes);
        const buffer = Buffer.allocUnsafe(readSize);
        let offset = 0;
        while (offset < readSize) {
          const { bytesRead } = await handle.read(buffer, offset, readSize - offset, offset);
          if (bytesRead === 0)
            break;
          offset += bytesRead;
        }
        return offset < readSize ? buffer.subarray(0, offset) : buffer;
      } finally {
        await handle.close();
      }
    }
  };
  activeFs = NodeFsOperations;
});

// src/utils/debug.ts
import { appendFile, mkdir, symlink, unlink } from "fs/promises";
import { dirname as dirname2, join as join2 } from "path";
function enableDebugLogging() {
  const wasActive = isDebugMode() || false;
  runtimeDebugEnabled = true;
  isDebugMode.cache.clear?.();
  return wasActive;
}
function shouldLogDebugMessage(message) {
  if (false) {}
  if (!isDebugMode()) {
    return false;
  }
  if (typeof process === "undefined" || typeof process.versions === "undefined" || typeof process.versions.node === "undefined") {
    return false;
  }
  const filter = getDebugFilter();
  return shouldShowDebugMessage(message, filter);
}
function setHasFormattedOutput(value) {
  hasFormattedOutput = value;
}
function getHasFormattedOutput() {
  return hasFormattedOutput;
}
async function appendAsync(needMkdir, dir, path2, content) {
  if (needMkdir) {
    await mkdir(dir, { recursive: true }).catch(() => {});
  }
  await appendFile(path2, content);
  updateLatestDebugLogSymlink();
}
function noop2() {}
function getDebugWriter() {
  if (!debugWriter) {
    let ensuredDir = null;
    debugWriter = createBufferedWriter({
      writeFn: (content) => {
        const path2 = getDebugLogPath();
        const dir = dirname2(path2);
        const needMkdir = ensuredDir !== dir;
        ensuredDir = dir;
        if (isDebugMode()) {
          if (needMkdir) {
            try {
              getFsImplementation().mkdirSync(dir);
            } catch {}
          }
          getFsImplementation().appendFileSync(path2, content);
          updateLatestDebugLogSymlink();
          return;
        }
        pendingWrite = pendingWrite.then(appendAsync.bind(null, needMkdir, dir, path2, content)).catch(noop2);
      },
      flushIntervalMs: 1000,
      maxBufferSize: 100,
      immediateMode: isDebugMode()
    });
    registerCleanup(async () => {
      debugWriter?.dispose();
      await pendingWrite;
    });
  }
  return debugWriter;
}
function logForDebugging(message, { level } = {
  level: "debug"
}) {
  if (LEVEL_ORDER[level] < LEVEL_ORDER[getMinDebugLogLevel()]) {
    return;
  }
  if (!shouldLogDebugMessage(message)) {
    return;
  }
  if (hasFormattedOutput && message.includes(`
`)) {
    message = jsonStringify(message);
  }
  const timestamp = new Date().toISOString();
  const output = `${timestamp} [${level.toUpperCase()}] ${message.trim()}
`;
  if (isDebugToStdErr()) {
    writeToStderr(output);
    return;
  }
  getDebugWriter().write(output);
}
function getDebugLogPath() {
  return getDebugFilePath() ?? process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? join2(getClaudeConfigHomeDir(), "debug", `${getSessionId()}.txt`);
}
function logAntError(context, error2) {
  if (true) {
    return;
  }
  if (error2 instanceof Error && error2.stack) {
    logForDebugging(`[ANT-ONLY] ${context} stack trace:
${error2.stack}`, {
      level: "error"
    });
  }
}
var LEVEL_ORDER, getMinDebugLogLevel, runtimeDebugEnabled = false, isDebugMode, getDebugFilter, isDebugToStdErr, getDebugFilePath, hasFormattedOutput = false, debugWriter = null, pendingWrite, updateLatestDebugLogSymlink;
var init_debug = __esm(() => {
  init_memoize();
  init_state();
  init_bufferedWriter();
  init_cleanupRegistry();
  init_debugFilter();
  init_envUtils();
  init_fsOperations();
  init_process();
  init_slowOperations();
  LEVEL_ORDER = {
    verbose: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4
  };
  getMinDebugLogLevel = memoize_default(() => {
    const raw = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    if (raw && Object.hasOwn(LEVEL_ORDER, raw)) {
      return raw;
    }
    return "debug";
  });
  isDebugMode = memoize_default(() => {
    return runtimeDebugEnabled || isEnvTruthy(process.env.DEBUG) || isEnvTruthy(process.env.DEBUG_SDK) || process.argv.includes("--debug") || process.argv.includes("-d") || isDebugToStdErr() || process.argv.some((arg) => arg.startsWith("--debug=")) || getDebugFilePath() !== null;
  });
  getDebugFilter = memoize_default(() => {
    const debugArg = process.argv.find((arg) => arg.startsWith("--debug="));
    if (!debugArg) {
      return null;
    }
    const filterPattern = debugArg.substring("--debug=".length);
    return parseDebugFilter(filterPattern);
  });
  isDebugToStdErr = memoize_default(() => {
    return process.argv.includes("--debug-to-stderr") || process.argv.includes("-d2e");
  });
  getDebugFilePath = memoize_default(() => {
    for (let i = 0;i < process.argv.length; i++) {
      const arg = process.argv[i];
      if (arg.startsWith("--debug-file=")) {
        return arg.substring("--debug-file=".length);
      }
      if (arg === "--debug-file" && i + 1 < process.argv.length) {
        return process.argv[i + 1];
      }
    }
    return null;
  });
  pendingWrite = Promise.resolve();
  updateLatestDebugLogSymlink = memoize_default(async () => {
    try {
      const debugLogPath = getDebugLogPath();
      const debugLogsDir = dirname2(debugLogPath);
      const latestSymlinkPath = join2(debugLogsDir, "latest");
      await unlink(latestSymlinkPath).catch(() => {});
      await symlink(debugLogPath, latestSymlinkPath);
    } catch {}
  });
});

// src/utils/slowOperations.ts
import {
  closeSync as closeSync2,
  writeFileSync as fsWriteFileSync,
  fsyncSync,
  openSync as openSync2
} from "fs";
function slowLoggingExternal() {
  return NOOP_LOGGER;
}
function jsonStringify(value, replacer, space) {
  let __stack = [];
  try {
    const _ = __using(__stack, slowLogging`JSON.stringify(${value})`, 0);
    return JSON.stringify(value, replacer, space);
  } catch (_catch) {
    var _err = _catch, _hasErr = 1;
  } finally {
    __callDispose(__stack, _err, _hasErr);
  }
}
function clone(value, options) {
  let __stack = [];
  try {
    const _ = __using(__stack, slowLogging`structuredClone(${value})`, 0);
    return structuredClone(value, options);
  } catch (_catch) {
    var _err = _catch, _hasErr = 1;
  } finally {
    __callDispose(__stack, _err, _hasErr);
  }
}
function writeFileSync_DEPRECATED(filePath, data, options) {
  let __stack = [];
  try {
    const _ = __using(__stack, slowLogging`fs.writeFileSync(${filePath}, ${data})`, 0);
    const needsFlush = options !== null && typeof options === "object" && "flush" in options && options.flush === true;
    if (needsFlush) {
      const encoding = typeof options === "object" && "encoding" in options ? options.encoding : undefined;
      const mode = typeof options === "object" && "mode" in options ? options.mode : undefined;
      let fd;
      try {
        fd = openSync2(filePath, "w", mode);
        fsWriteFileSync(fd, data, { encoding: encoding ?? undefined });
        fsyncSync(fd);
      } finally {
        if (fd !== undefined) {
          closeSync2(fd);
        }
      }
    } else {
      fsWriteFileSync(filePath, data, options);
    }
  } catch (_catch) {
    var _err = _catch, _hasErr = 1;
  } finally {
    __callDispose(__stack, _err, _hasErr);
  }
}
var SLOW_OPERATION_THRESHOLD_MS, NOOP_LOGGER, slowLogging, jsonParse = (text, reviver) => {
  let __stack = [];
  try {
    const _ = __using(__stack, slowLogging`JSON.parse(${text})`, 0);
    return typeof reviver === "undefined" ? JSON.parse(text) : JSON.parse(text, reviver);
  } catch (_catch) {
    var _err = _catch, _hasErr = 1;
  } finally {
    __callDispose(__stack, _err, _hasErr);
  }
};
var init_slowOperations = __esm(() => {
  init_state();
  init_debug();
  SLOW_OPERATION_THRESHOLD_MS = (() => {
    const envValue = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
    if (envValue !== undefined) {
      const parsed = Number(envValue);
      if (!Number.isNaN(parsed) && parsed >= 0) {
        return parsed;
      }
    }
    if (true) {
      return 20;
    }
    if (false) {}
    return Infinity;
  })();
  NOOP_LOGGER = { [Symbol.dispose]() {} };
  slowLogging = slowLoggingExternal;
});

export { createBufferedWriter, init_bufferedWriter, registerCleanup, runCleanupFunctions, init_cleanupRegistry, APIError, APIUserAbortError, APIConnectionError, APIConnectionTimeoutError, AuthenticationError, NotFoundError, init_error2 as init_error, Anthropic, init_sdk, ClaudeError, MalformedCommandError, AbortError, isAbortError2 as isAbortError, ConfigParseError, ShellError, TeleportOperationError, TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, hasExactErrorMessage, toError, errorMessage, getErrnoCode, isENOENT, getErrnoPath, isFsInaccessible, classifyAxiosError, init_errors2 as init_errors, slowLogging, jsonStringify, jsonParse, clone, writeFileSync_DEPRECATED, init_slowOperations, safeResolvePath, isDuplicatePath, getPathsForPermissionCheck, getFsImplementation, readFileRange, tailFile, readLinesReverse, init_fsOperations, isDebugMode, enableDebugLogging, isDebugToStdErr, setHasFormattedOutput, getHasFormattedOutput, logForDebugging, getDebugLogPath, logAntError, init_debug };
