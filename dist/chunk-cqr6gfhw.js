// @bun
import {
  require_jsx_dev_runtime
} from "./chunk-vbq42z9n.js";
import"./chunk-k0ad762d.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/diff/diff.tsx
var jsx_dev_runtime, call = async (onDone, context) => {
  const {
    DiffDialog
  } = await import("./chunk-bvb9dj1r.js");
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DiffDialog, {
    messages: context.messages,
    onDone
  }, undefined, false, undefined, this);
};
var init_diff = __esm(() => {
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_diff();

export {
  call
};
