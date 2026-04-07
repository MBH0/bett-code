// @bun
import {
  cacheKeys,
  init_fileStateCache
} from "./chunk-dq4kxhbm.js";
import"./chunk-vv49ky54.js";
import {
  getCwd,
  init_cwd
} from "./chunk-ya62xx2m.js";
import"./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/files/files.ts
import { relative } from "path";
async function call(_args, context) {
  const files = context.readFileState ? cacheKeys(context.readFileState) : [];
  if (files.length === 0) {
    return { type: "text", value: "No files in context" };
  }
  const fileList = files.map((file) => relative(getCwd(), file)).join(`
`);
  return { type: "text", value: `Files in context:
${fileList}` };
}
var init_files = __esm(() => {
  init_cwd();
  init_fileStateCache();
});
init_files();

export {
  call
};
