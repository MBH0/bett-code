// @bun
import {
  init_claudemd,
  init_withRetry
} from "./chunk-6gs8crjw.js";
import {
  init_auth,
  init_config1 as init_config,
  init_growthbook,
  init_internalWrites,
  init_settings1 as init_settings,
  init_sleep,
  init_userAgent
} from "./chunk-0ybjyybr.js";
import {
  exports_external,
  init_v4
} from "./chunk-r1gancj0.js";
import {
  init_providers
} from "./chunk-k5hep4qq.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_oauth
} from "./chunk-egb62rk0.js";
import {
  init_analytics
} from "./chunk-paapvyzx.js";
import {
  init_diagLogs,
  init_git
} from "./chunk-g1f9xvnd.js";
import {
  init_errors
} from "./chunk-8es6caa5.js";
import {
  init_settingsCache,
  init_state
} from "./chunk-qzn8r3qg.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/settingsSync/types.ts
var UserSyncContentSchema, UserSyncDataSchema;
var init_types = __esm(() => {
  init_v4();
  init_lazySchema();
  UserSyncContentSchema = lazySchema(() => exports_external.object({
    entries: exports_external.record(exports_external.string(), exports_external.string())
  }));
  UserSyncDataSchema = lazySchema(() => exports_external.object({
    userId: exports_external.string(),
    version: exports_external.number(),
    lastModified: exports_external.string(),
    checksum: exports_external.string(),
    content: UserSyncContentSchema()
  }));
});

// src/services/settingsSync/index.ts
var MAX_FILE_SIZE_BYTES;
var init_settingsSync = __esm(() => {
  init_state();
  init_oauth();
  init_auth();
  init_claudemd();
  init_config();
  init_diagLogs();
  init_errors();
  init_git();
  init_providers();
  init_internalWrites();
  init_settings();
  init_settingsCache();
  init_sleep();
  init_userAgent();
  init_growthbook();
  init_analytics();
  init_withRetry();
  init_types();
  MAX_FILE_SIZE_BYTES = 500 * 1024;
});

export { init_settingsSync };
