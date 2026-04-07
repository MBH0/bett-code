// @bun
import {
  _baseSlice_default,
  escapeXmlAttr,
  getPluginsDirectory,
  init__baseSlice,
  init_last,
  init_pluginDirectories,
  init_pluginIdentifier,
  init_xml as init_xml2,
  last_default,
  parsePluginIdentifier
} from "./chunk-6gs8crjw.js";
import {
  _assignValue_default,
  _cloneArrayBuffer_default,
  _cloneBuffer_default,
  _cloneTypedArray_default,
  _copyArray_default,
  _copyObject_default,
  _getAllKeysIn_default,
  _getSymbolsIn_default,
  _initCloneObject_default,
  _overRest_default,
  _setToString_default,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getSettingsForSource,
  getSubscriptionType,
  init__assignValue,
  init__cloneArrayBuffer,
  init__cloneBuffer,
  init__cloneTypedArray,
  init__copyArray,
  init__copyObject,
  init__getAllKeysIn,
  init__getSymbolsIn,
  init__initCloneObject,
  init__overRest,
  init__setToString,
  init_auth,
  init_growthbook,
  init_isPlainObject,
  init_keysIn,
  init_settings1 as init_settings,
  isPlainObject_default,
  keysIn_default
} from "./chunk-0ybjyybr.js";
import {
  exports_external,
  init_v4
} from "./chunk-r1gancj0.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  CHANNEL_TAG,
  init_log,
  init_xml,
  logError
} from "./chunk-rqbfd2rb.js";
import {
  getFsImplementation,
  init_debug,
  init_fsOperations,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-8es6caa5.js";
import {
  _Stack_default,
  _arrayMap_default,
  _arrayPush_default,
  _baseGet_default,
  _baseUnary_default,
  _castPath_default,
  _getAllKeys_default,
  _getSymbols_default,
  _getTag_default,
  _nodeUtil_default,
  _toKey_default,
  getAllowedChannels,
  init__Stack,
  init__arrayMap,
  init__arrayPush,
  init__baseGet,
  init__baseUnary,
  init__castPath,
  init__getAllKeys,
  init__getSymbols,
  init__getTag,
  init__nodeUtil,
  init__toKey,
  init_isArguments,
  init_isArray,
  init_isBuffer,
  init_isObjectLike,
  init_keys,
  init_state,
  isArguments_default,
  isArray_default,
  isBuffer_default,
  isObjectLike_default,
  keys_default
} from "./chunk-qzn8r3qg.js";
import {
  _Symbol_default,
  init__Symbol,
  init_isObject,
  isObject_default
} from "./chunk-0ds34vbj.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach_default;
var init__arrayEach = __esm(() => {
  _arrayEach_default = arrayEach;
});

// node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && _copyObject_default(source, keys_default(source), object);
}
var _baseAssign_default;
var init__baseAssign = __esm(() => {
  init__copyObject();
  init_keys();
  _baseAssign_default = baseAssign;
});

// node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && _copyObject_default(source, keysIn_default(source), object);
}
var _baseAssignIn_default;
var init__baseAssignIn = __esm(() => {
  init__copyObject();
  init_keysIn();
  _baseAssignIn_default = baseAssignIn;
});

// node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return _copyObject_default(source, _getSymbols_default(source), object);
}
var _copySymbols_default;
var init__copySymbols = __esm(() => {
  init__copyObject();
  init__getSymbols();
  _copySymbols_default = copySymbols;
});

// node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return _copyObject_default(source, _getSymbolsIn_default(source), object);
}
var _copySymbolsIn_default;
var init__copySymbolsIn = __esm(() => {
  init__copyObject();
  init__getSymbolsIn();
  _copySymbolsIn_default = copySymbolsIn;
});

// node_modules/lodash-es/_initCloneArray.js
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var objectProto, hasOwnProperty, _initCloneArray_default;
var init__initCloneArray = __esm(() => {
  objectProto = Object.prototype;
  hasOwnProperty = objectProto.hasOwnProperty;
  _initCloneArray_default = initCloneArray;
});

// node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView_default;
var init__cloneDataView = __esm(() => {
  init__cloneArrayBuffer();
  _cloneDataView_default = cloneDataView;
});

// node_modules/lodash-es/_cloneRegExp.js
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var reFlags, _cloneRegExp_default;
var init__cloneRegExp = __esm(() => {
  reFlags = /\w*$/;
  _cloneRegExp_default = cloneRegExp;
});

// node_modules/lodash-es/_cloneSymbol.js
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var symbolProto, symbolValueOf, _cloneSymbol_default;
var init__cloneSymbol = __esm(() => {
  init__Symbol();
  symbolProto = _Symbol_default ? _Symbol_default.prototype : undefined;
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  _cloneSymbol_default = cloneSymbol;
});

// node_modules/lodash-es/_initCloneByTag.js
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return _cloneArrayBuffer_default(object);
    case boolTag:
    case dateTag:
      return new Ctor(+object);
    case dataViewTag:
      return _cloneDataView_default(object, isDeep);
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return _cloneTypedArray_default(object, isDeep);
    case mapTag:
      return new Ctor;
    case numberTag:
    case stringTag:
      return new Ctor(object);
    case regexpTag:
      return _cloneRegExp_default(object);
    case setTag:
      return new Ctor;
    case symbolTag:
      return _cloneSymbol_default(object);
  }
}
var boolTag = "[object Boolean]", dateTag = "[object Date]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", _initCloneByTag_default;
var init__initCloneByTag = __esm(() => {
  init__cloneArrayBuffer();
  init__cloneDataView();
  init__cloneRegExp();
  init__cloneSymbol();
  init__cloneTypedArray();
  _initCloneByTag_default = initCloneByTag;
});

// node_modules/lodash-es/_baseIsMap.js
function baseIsMap(value) {
  return isObjectLike_default(value) && _getTag_default(value) == mapTag2;
}
var mapTag2 = "[object Map]", _baseIsMap_default;
var init__baseIsMap = __esm(() => {
  init__getTag();
  init_isObjectLike();
  _baseIsMap_default = baseIsMap;
});

// node_modules/lodash-es/isMap.js
var nodeIsMap, isMap, isMap_default;
var init_isMap = __esm(() => {
  init__baseIsMap();
  init__baseUnary();
  init__nodeUtil();
  nodeIsMap = _nodeUtil_default && _nodeUtil_default.isMap;
  isMap = nodeIsMap ? _baseUnary_default(nodeIsMap) : _baseIsMap_default;
  isMap_default = isMap;
});

// node_modules/lodash-es/_baseIsSet.js
function baseIsSet(value) {
  return isObjectLike_default(value) && _getTag_default(value) == setTag2;
}
var setTag2 = "[object Set]", _baseIsSet_default;
var init__baseIsSet = __esm(() => {
  init__getTag();
  init_isObjectLike();
  _baseIsSet_default = baseIsSet;
});

// node_modules/lodash-es/isSet.js
var nodeIsSet, isSet, isSet_default;
var init_isSet = __esm(() => {
  init__baseIsSet();
  init__baseUnary();
  init__nodeUtil();
  nodeIsSet = _nodeUtil_default && _nodeUtil_default.isSet;
  isSet = nodeIsSet ? _baseUnary_default(nodeIsSet) : _baseIsSet_default;
  isSet_default = isSet;
});

// node_modules/lodash-es/_baseClone.js
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result = _initCloneArray_default(value);
    if (!isDeep) {
      return _copyArray_default(value, result);
    }
  } else {
    var tag = _getTag_default(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer_default(value)) {
      return _cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : _initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? _copySymbolsIn_default(value, _baseAssignIn_default(result, value)) : _copySymbols_default(value, _baseAssign_default(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new _Stack_default);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? _getAllKeysIn_default : _getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? undefined : keysFunc(value);
  _arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    _assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4, argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag3 = "[object Map]", numberTag2 = "[object Number]", objectTag = "[object Object]", regexpTag2 = "[object RegExp]", setTag3 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", weakMapTag = "[object WeakMap]", arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]", cloneableTags, _baseClone_default;
var init__baseClone = __esm(() => {
  init__Stack();
  init__arrayEach();
  init__assignValue();
  init__baseAssign();
  init__baseAssignIn();
  init__cloneBuffer();
  init__copyArray();
  init__copySymbols();
  init__copySymbolsIn();
  init__getAllKeys();
  init__getAllKeysIn();
  init__getTag();
  init__initCloneArray();
  init__initCloneByTag();
  init__initCloneObject();
  init_isArray();
  init_isBuffer();
  init_isMap();
  init_isObject();
  init_isSet();
  init_keys();
  init_keysIn();
  cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag2] = cloneableTags[dataViewTag2] = cloneableTags[boolTag2] = cloneableTags[dateTag2] = cloneableTags[float32Tag2] = cloneableTags[float64Tag2] = cloneableTags[int8Tag2] = cloneableTags[int16Tag2] = cloneableTags[int32Tag2] = cloneableTags[mapTag3] = cloneableTags[numberTag2] = cloneableTags[objectTag] = cloneableTags[regexpTag2] = cloneableTags[setTag3] = cloneableTags[stringTag2] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag2] = cloneableTags[uint8ClampedTag2] = cloneableTags[uint16Tag2] = cloneableTags[uint32Tag2] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  _baseClone_default = baseClone;
});

// node_modules/lodash-es/_parent.js
function parent(object, path) {
  return path.length < 2 ? object : _baseGet_default(object, _baseSlice_default(path, 0, -1));
}
var _parent_default;
var init__parent = __esm(() => {
  init__baseGet();
  init__baseSlice();
  _parent_default = parent;
});

// node_modules/lodash-es/_baseUnset.js
function baseUnset(object, path) {
  path = _castPath_default(path, object);
  var index = -1, length = path.length;
  if (!length) {
    return true;
  }
  while (++index < length) {
    var key = _toKey_default(path[index]);
    if (key === "__proto__" && !hasOwnProperty2.call(object, "__proto__")) {
      return false;
    }
    if ((key === "constructor" || key === "prototype") && index < length - 1) {
      return false;
    }
  }
  var obj = _parent_default(object, path);
  return obj == null || delete obj[_toKey_default(last_default(path))];
}
var objectProto2, hasOwnProperty2, _baseUnset_default;
var init__baseUnset = __esm(() => {
  init__castPath();
  init_last();
  init__parent();
  init__toKey();
  objectProto2 = Object.prototype;
  hasOwnProperty2 = objectProto2.hasOwnProperty;
  _baseUnset_default = baseUnset;
});

// node_modules/lodash-es/_customOmitClone.js
function customOmitClone(value) {
  return isPlainObject_default(value) ? undefined : value;
}
var _customOmitClone_default;
var init__customOmitClone = __esm(() => {
  init_isPlainObject();
  _customOmitClone_default = customOmitClone;
});

// node_modules/lodash-es/_isFlattenable.js
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var spreadableSymbol, _isFlattenable_default;
var init__isFlattenable = __esm(() => {
  init__Symbol();
  init_isArguments();
  init_isArray();
  spreadableSymbol = _Symbol_default ? _Symbol_default.isConcatSpreadable : undefined;
  _isFlattenable_default = isFlattenable;
});

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = _isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten_default;
var init__baseFlatten = __esm(() => {
  init__arrayPush();
  init__isFlattenable();
  _baseFlatten_default = baseFlatten;
});

// node_modules/lodash-es/flatten.js
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten_default(array, 1) : [];
}
var flatten_default;
var init_flatten = __esm(() => {
  init__baseFlatten();
  flatten_default = flatten;
});

// node_modules/lodash-es/_flatRest.js
function flatRest(func) {
  return _setToString_default(_overRest_default(func, undefined, flatten_default), func + "");
}
var _flatRest_default;
var init__flatRest = __esm(() => {
  init_flatten();
  init__overRest();
  init__setToString();
  _flatRest_default = flatRest;
});

// node_modules/lodash-es/omit.js
var CLONE_DEEP_FLAG2 = 1, CLONE_FLAT_FLAG2 = 2, CLONE_SYMBOLS_FLAG2 = 4, omit, omit_default;
var init_omit = __esm(() => {
  init__arrayMap();
  init__baseClone();
  init__baseUnset();
  init__castPath();
  init__copyObject();
  init__customOmitClone();
  init__flatRest();
  init__getAllKeysIn();
  omit = _flatRest_default(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = _arrayMap_default(paths, function(path) {
      path = _castPath_default(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    _copyObject_default(object, _getAllKeysIn_default(object), result);
    if (isDeep) {
      result = _baseClone_default(result, CLONE_DEEP_FLAG2 | CLONE_FLAT_FLAG2 | CLONE_SYMBOLS_FLAG2, _customOmitClone_default);
    }
    var length = paths.length;
    while (length--) {
      _baseUnset_default(result, paths[length]);
    }
    return result;
  });
  omit_default = omit;
});

// src/services/mcp/channelAllowlist.ts
function getChannelAllowlist() {
  const raw = getFeatureValue_CACHED_MAY_BE_STALE("tengu_harbor_ledger", []);
  const parsed = ChannelAllowlistSchema().safeParse(raw);
  return parsed.success ? parsed.data : [];
}
function isChannelsEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_harbor", false);
}
var ChannelAllowlistSchema;
var init_channelAllowlist = __esm(() => {
  init_v4();
  init_lazySchema();
  init_pluginIdentifier();
  init_growthbook();
  ChannelAllowlistSchema = lazySchema(() => exports_external.array(exports_external.object({
    marketplace: exports_external.string(),
    plugin: exports_external.string()
  })));
});

// src/services/mcp/channelNotification.ts
function wrapChannelMessage(serverName, content, meta) {
  const attrs = Object.entries(meta ?? {}).filter(([k]) => SAFE_META_KEY.test(k)).map(([k, v]) => ` ${k}="${escapeXmlAttr(v)}"`).join("");
  return `<${CHANNEL_TAG} source="${escapeXmlAttr(serverName)}"${attrs}>
${content}
</${CHANNEL_TAG}>`;
}
function getEffectiveChannelAllowlist(sub, orgList) {
  if ((sub === "team" || sub === "enterprise") && orgList) {
    return { entries: orgList, source: "org" };
  }
  return { entries: getChannelAllowlist(), source: "ledger" };
}
function findChannelEntry(serverName, channels) {
  const parts = serverName.split(":");
  return channels.find((c) => c.kind === "server" ? serverName === c.name : parts[0] === "plugin" && parts[1] === c.name);
}
function gateChannelServer(serverName, capabilities, pluginSource) {
  if (!capabilities?.experimental?.["claude/channel"]) {
    return {
      action: "skip",
      kind: "capability",
      reason: "server did not declare claude/channel capability"
    };
  }
  if (!isChannelsEnabled()) {
    return {
      action: "skip",
      kind: "disabled",
      reason: "channels feature is not currently available"
    };
  }
  if (!getClaudeAIOAuthTokens()?.accessToken) {
    return {
      action: "skip",
      kind: "auth",
      reason: "channels requires claude.ai authentication (run /login)"
    };
  }
  const sub = getSubscriptionType();
  const managed = sub === "team" || sub === "enterprise";
  const policy = managed ? getSettingsForSource("policySettings") : undefined;
  if (managed && policy?.channelsEnabled !== true) {
    return {
      action: "skip",
      kind: "policy",
      reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)"
    };
  }
  const entry = findChannelEntry(serverName, getAllowedChannels());
  if (!entry) {
    return {
      action: "skip",
      kind: "session",
      reason: `server ${serverName} not in --channels list for this session`
    };
  }
  if (entry.kind === "plugin") {
    const actual = pluginSource ? parsePluginIdentifier(pluginSource).marketplace : undefined;
    if (actual !== entry.marketplace) {
      return {
        action: "skip",
        kind: "marketplace",
        reason: `you asked for plugin:${entry.name}@${entry.marketplace} but the installed ${entry.name} plugin is from ${actual ?? "an unknown source"}`
      };
    }
    if (!entry.dev) {
      const { entries, source } = getEffectiveChannelAllowlist(sub, policy?.allowedChannelPlugins);
      if (!entries.some((e) => e.plugin === entry.name && e.marketplace === entry.marketplace)) {
        return {
          action: "skip",
          kind: "allowlist",
          reason: source === "org" ? `plugin ${entry.name}@${entry.marketplace} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${entry.name}@${entry.marketplace} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
        };
      }
    }
  } else {
    if (!entry.dev) {
      return {
        action: "skip",
        kind: "allowlist",
        reason: `server ${entry.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
      };
    }
  }
  return { action: "register" };
}
var ChannelMessageNotificationSchema, CHANNEL_PERMISSION_METHOD = "notifications/claude/channel/permission", ChannelPermissionNotificationSchema, SAFE_META_KEY;
var init_channelNotification = __esm(() => {
  init_v4();
  init_state();
  init_xml();
  init_auth();
  init_lazySchema();
  init_pluginIdentifier();
  init_settings();
  init_xml2();
  init_channelAllowlist();
  ChannelMessageNotificationSchema = lazySchema(() => exports_external.object({
    method: exports_external.literal("notifications/claude/channel"),
    params: exports_external.object({
      content: exports_external.string(),
      meta: exports_external.record(exports_external.string(), exports_external.string()).optional()
    })
  }));
  ChannelPermissionNotificationSchema = lazySchema(() => exports_external.object({
    method: exports_external.literal(CHANNEL_PERMISSION_METHOD),
    params: exports_external.object({
      request_id: exports_external.string(),
      behavior: exports_external.enum(["allow", "deny"])
    })
  }));
  SAFE_META_KEY = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
});

// src/utils/plugins/pluginFlagging.ts
import { randomBytes } from "crypto";
import { readFile, rename, unlink, writeFile } from "fs/promises";
import { join } from "path";
function getFlaggedPluginsPath() {
  return join(getPluginsDirectory(), FLAGGED_PLUGINS_FILENAME);
}
function parsePluginsData(content) {
  const parsed = jsonParse(content);
  if (typeof parsed !== "object" || parsed === null || !("plugins" in parsed) || typeof parsed.plugins !== "object" || parsed.plugins === null) {
    return {};
  }
  const plugins = parsed.plugins;
  const result = {};
  for (const [id, entry] of Object.entries(plugins)) {
    if (entry && typeof entry === "object" && "flaggedAt" in entry && typeof entry.flaggedAt === "string") {
      const parsed2 = {
        flaggedAt: entry.flaggedAt
      };
      if ("seenAt" in entry && typeof entry.seenAt === "string") {
        parsed2.seenAt = entry.seenAt;
      }
      result[id] = parsed2;
    }
  }
  return result;
}
async function readFromDisk() {
  try {
    const content = await readFile(getFlaggedPluginsPath(), {
      encoding: "utf-8"
    });
    return parsePluginsData(content);
  } catch {
    return {};
  }
}
async function writeToDisk(plugins) {
  const filePath = getFlaggedPluginsPath();
  const tempPath = `${filePath}.${randomBytes(8).toString("hex")}.tmp`;
  try {
    await getFsImplementation().mkdir(getPluginsDirectory());
    const content = jsonStringify({ plugins }, null, 2);
    await writeFile(tempPath, content, {
      encoding: "utf-8",
      mode: 384
    });
    await rename(tempPath, filePath);
    cache = plugins;
  } catch (error) {
    logError(error);
    try {
      await unlink(tempPath);
    } catch {}
  }
}
async function loadFlaggedPlugins() {
  const all = await readFromDisk();
  const now = Date.now();
  let changed = false;
  for (const [id, entry] of Object.entries(all)) {
    if (entry.seenAt && now - new Date(entry.seenAt).getTime() >= SEEN_EXPIRY_MS) {
      delete all[id];
      changed = true;
    }
  }
  cache = all;
  if (changed) {
    await writeToDisk(all);
  }
}
function getFlaggedPlugins() {
  return cache ?? {};
}
async function addFlaggedPlugin(pluginId) {
  if (cache === null) {
    cache = await readFromDisk();
  }
  const updated = {
    ...cache,
    [pluginId]: {
      flaggedAt: new Date().toISOString()
    }
  };
  await writeToDisk(updated);
  logForDebugging(`Flagged plugin: ${pluginId}`);
}
async function markFlaggedPluginsSeen(pluginIds) {
  if (cache === null) {
    cache = await readFromDisk();
  }
  const now = new Date().toISOString();
  let changed = false;
  const updated = { ...cache };
  for (const id of pluginIds) {
    const entry = updated[id];
    if (entry && !entry.seenAt) {
      updated[id] = { ...entry, seenAt: now };
      changed = true;
    }
  }
  if (changed) {
    await writeToDisk(updated);
  }
}
async function removeFlaggedPlugin(pluginId) {
  if (cache === null) {
    cache = await readFromDisk();
  }
  if (!(pluginId in cache))
    return;
  const { [pluginId]: _, ...rest } = cache;
  cache = rest;
  await writeToDisk(rest);
}
var FLAGGED_PLUGINS_FILENAME = "flagged-plugins.json", SEEN_EXPIRY_MS, cache = null;
var init_pluginFlagging = __esm(() => {
  init_debug();
  init_fsOperations();
  init_log();
  init_slowOperations();
  init_pluginDirectories();
  SEEN_EXPIRY_MS = 48 * 60 * 60 * 1000;
});

export { omit_default, init_omit, init_channelAllowlist, ChannelMessageNotificationSchema, wrapChannelMessage, findChannelEntry, gateChannelServer, init_channelNotification, loadFlaggedPlugins, getFlaggedPlugins, addFlaggedPlugin, markFlaggedPluginsSeen, removeFlaggedPlugin, init_pluginFlagging };
