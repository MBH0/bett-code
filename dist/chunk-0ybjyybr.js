// @bun
import {
  McpServerConfigSchema,
  init_json,
  init_jsonRead,
  init_types,
  readJSONLFile,
  safeParseJSON,
  stripBOM
} from "./chunk-acq8papb.js";
import {
  expandPath,
  init_path,
  normalizePathForConfigKey
} from "./chunk-k5yw79cx.js";
import {
  sanitizePath
} from "./chunk-5ajamnkb.js";
import {
  getAWSClientProxyConfig,
  getProxyFetchOptions,
  init_proxy
} from "./chunk-4jqh9cde.js";
import {
  count,
  getAgentId,
  getParentSessionId as getParentSessionId2,
  getTeamName,
  init_array,
  init_lockfile,
  init_teammate,
  isTeammate,
  lock,
  lockSync,
  uniq
} from "./chunk-xswm8fjv.js";
import {
  exports_external,
  init_v4,
  toJSONSchema,
  v4_default
} from "./chunk-r1gancj0.js";
import {
  getAPIProvider,
  init_providers,
  isFirstPartyAnthropicBaseUrl
} from "./chunk-k5hep4qq.js";
import {
  init_normalization,
  normalizeNameForMCP
} from "./chunk-3c25bcsw.js";
import {
  detectVcs,
  getLinuxDistroInfo,
  getPlatform,
  getWslVersion,
  init_platform
} from "./chunk-63kzvq55.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  JETBRAINS_IDES,
  env,
  getGlobalClaudeFile,
  getHostPlatformForAnalytics,
  init_bundledMode,
  init_env,
  isInBundledMode
} from "./chunk-ypnebnty.js";
import {
  ALL_OAUTH_SCOPES,
  CLAUDE_AI_INFERENCE_SCOPE,
  CLAUDE_AI_OAUTH_SCOPES,
  CLAUDE_AI_PROFILE_SCOPE,
  OAUTH_BETA_HEADER,
  getOauthConfig,
  init_oauth
} from "./chunk-egb62rk0.js";
import {
  init_startupProfiler,
  profileCheckpoint
} from "./chunk-wsj9bqwr.js";
import {
  init_analytics,
  logEvent,
  stripProtoFields
} from "./chunk-paapvyzx.js";
import {
  dirIsInGitRepo,
  findCanonicalGitRoot,
  getRepoRemoteHash,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-g1f9xvnd.js";
import {
  init_memoize as init_memoize2,
  memoizeWithTTLAsync
} from "./chunk-202de3fk.js";
import {
  execFileNoThrow,
  execFileNoThrowWithCwd,
  execSyncWithDefaults_DEPRECATED,
  execa,
  execaSync,
  init_execFileNoThrow,
  init_execFileNoThrowPortable,
  init_execa
} from "./chunk-hhkbd8h1.js";
import {
  getEssentialTrafficOnlyReason,
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  isTelemetryDisabled,
  logError
} from "./chunk-rqbfd2rb.js";
import {
  getCwd,
  init_cwd
} from "./chunk-ya62xx2m.js";
import {
  Anthropic,
  ConfigParseError,
  clone,
  errorMessage,
  getErrnoCode,
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_fsOperations,
  init_sdk,
  init_slowOperations,
  isDebugToStdErr,
  isENOENT,
  isFsInaccessible,
  jsonParse,
  jsonStringify,
  logAntError,
  logForDebugging,
  registerCleanup,
  safeResolvePath,
  toError,
  writeFileSync_DEPRECATED
} from "./chunk-8es6caa5.js";
import {
  getAWSRegion,
  getClaudeConfigHomeDir,
  getVertexRegionForModel,
  init_envUtils,
  isBareMode,
  isEnvDefinedFalsy,
  isEnvTruthy,
  isRunningOnHomespace
} from "./chunk-h3gry12w.js";
import {
  _Stack_default,
  _Uint8Array_default,
  _arrayLikeKeys_default,
  _arrayMap_default,
  _arrayPush_default,
  _baseGetAllKeys_default,
  _baseGet_default,
  _baseIsEqual_default,
  _baseIteratee_default,
  _castPath_default,
  _getSymbols_default,
  _isIndex_default,
  _isPrototype_default,
  _overArg_default,
  _toKey_default,
  createSignal,
  getAllowedSettingSources,
  getApiKeyFromFd,
  getCachedParsedFile,
  getCachedSettingsForSource,
  getClientType,
  getFlagSettingsInline,
  getFlagSettingsPath,
  getIsInteractive,
  getIsNonInteractiveSession,
  getKairosActive,
  getMainLoopModelOverride,
  getModelStrings,
  getOauthTokenFromFd,
  getOriginalCwd,
  getParentSessionId,
  getPluginSettingsBase,
  getProjectRoot,
  getSdkBetas,
  getSessionId,
  getSessionSettingsCache,
  getSessionTrustAccepted,
  getUseCoworkPlugins,
  identity_default,
  init__Stack,
  init__Uint8Array,
  init__arrayLikeKeys,
  init__arrayMap,
  init__arrayPush,
  init__baseGet,
  init__baseGetAllKeys,
  init__baseIsEqual,
  init__baseIteratee,
  init__castPath,
  init__getSymbols,
  init__isIndex,
  init__isPrototype,
  init__overArg,
  init__toKey,
  init_identity,
  init_isArguments,
  init_isArray,
  init_isArrayLike,
  init_isBuffer,
  init_isObjectLike,
  init_isTypedArray,
  init_settingsCache,
  init_signal,
  init_state,
  init_stubArray,
  isArguments_default,
  isArrayLike_default,
  isArray_default,
  isBuffer_default,
  isObjectLike_default,
  isTypedArray_default,
  preferThirdPartyAuthentication,
  resetSettingsCache,
  setApiKeyFromFd,
  setCachedParsedFile,
  setCachedSettingsForSource,
  setHasUnknownModelCost,
  setModelStrings,
  setOauthTokenFromFd,
  setSessionSettingsCache,
  stubArray_default
} from "./chunk-qzn8r3qg.js";
import {
  _baseGetTag_default,
  _getNative_default,
  _root_default,
  eq_default,
  init__baseGetTag,
  init__getNative,
  init__root,
  init_eq,
  init_isFunction,
  init_isObject,
  init_memoize,
  isFunction_default,
  isObject_default,
  memoize_default
} from "./chunk-0ds34vbj.js";
import {
  axios_default,
  init_axios
} from "./chunk-3wk0tdmp.js";
import {
  require_src
} from "./chunk-64q1p7wf.js";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/chalk/source/vendor/ansi-styles/index.js
function assembleStyles() {
  const codes = new Map;
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ANSI_BACKGROUND_OFFSET = 10, wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`, wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`, wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`, styles, modifierNames, foregroundColorNames, backgroundColorNames, colorNames, ansiStyles, ansi_styles_default;
var init_ansi_styles = __esm(() => {
  styles = {
    modifier: {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      blackBright: [90, 39],
      gray: [90, 39],
      grey: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgBlackBright: [100, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };
  modifierNames = Object.keys(styles.modifier);
  foregroundColorNames = Object.keys(styles.color);
  backgroundColorNames = Object.keys(styles.bgColor);
  colorNames = [...foregroundColorNames, ...backgroundColorNames];
  ansiStyles = assembleStyles();
  ansi_styles_default = ansiStyles;
});

// node_modules/chalk/source/vendor/supports-color/index.js
import process2 from "process";
import os from "os";
import tty from "tty";
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process2.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
function envForceColor() {
  if ("FORCE_COLOR" in env2) {
    if (env2.FORCE_COLOR === "true") {
      return 1;
    }
    if (env2.FORCE_COLOR === "false") {
      return 0;
    }
    return env2.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env2.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== undefined) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env2 && "AGENT_NAME" in env2) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === undefined) {
    return 0;
  }
  const min = forceColor || 0;
  if (env2.TERM === "dumb") {
    return min;
  }
  if (process2.platform === "win32") {
    const osRelease = os.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env2) {
    if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => (key in env2))) {
      return 3;
    }
    if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => (sign in env2)) || env2.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env2) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env2.COLORTERM === "truecolor") {
    return 3;
  }
  if (env2.TERM === "xterm-kitty") {
    return 3;
  }
  if (env2.TERM === "xterm-ghostty") {
    return 3;
  }
  if (env2.TERM === "wezterm") {
    return 3;
  }
  if ("TERM_PROGRAM" in env2) {
    const version = Number.parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env2.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env2.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env2) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var env2, flagForceColor, supportsColor, supports_color_default;
var init_supports_color = __esm(() => {
  ({ env: env2 } = process2);
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    flagForceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    flagForceColor = 1;
  }
  supportsColor = {
    stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
    stderr: createSupportsColor({ isTTY: tty.isatty(2) })
  };
  supports_color_default = supportsColor;
});

// node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? `\r
` : `
`) + postfix;
    endIndex = index + 1;
    index = string.indexOf(`
`, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
var init_utilities = () => {};

// node_modules/chalk/source/index.js
class Chalk {
  constructor(options) {
    return chalkFactory(options);
  }
}
function createChalk(options) {
  return chalkFactory(options);
}
var stdoutColor, stderrColor, GENERATOR, STYLER, IS_EMPTY, levelMapping, styles2, applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === undefined ? colorLevel : options.level;
}, chalkFactory = (options) => {
  const chalk = (...strings) => strings.join(" ");
  applyOptions(chalk, options);
  Object.setPrototypeOf(chalk, createChalk.prototype);
  return chalk;
}, getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
}, usedModels, proto, createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === undefined) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
}, createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
}, applyStyle = (self, string) => {
  if (self.level <= 0 || !string) {
    return self[IS_EMPTY] ? "" : string;
  }
  let styler = self[STYLER];
  if (styler === undefined) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== undefined) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf(`
`);
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
}, chalk, chalkStderr, source_default;
var init_source = __esm(() => {
  init_ansi_styles();
  init_supports_color();
  init_utilities();
  ({ stdout: stdoutColor, stderr: stderrColor } = supports_color_default);
  GENERATOR = Symbol("GENERATOR");
  STYLER = Symbol("STYLER");
  IS_EMPTY = Symbol("IS_EMPTY");
  levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  styles2 = Object.create(null);
  Object.setPrototypeOf(createChalk.prototype, Function.prototype);
  for (const [styleName, style] of Object.entries(ansi_styles_default)) {
    styles2[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
        Object.defineProperty(this, styleName, { value: builder });
        return builder;
      }
    };
  }
  styles2.visible = {
    get() {
      const builder = createBuilder(this, this[STYLER], true);
      Object.defineProperty(this, "visible", { value: builder });
      return builder;
    }
  };
  usedModels = ["rgb", "hex", "ansi256"];
  for (const model of usedModels) {
    styles2[model] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles2[bgModel] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
  }
  proto = Object.defineProperties(() => {}, {
    ...styles2,
    level: {
      enumerable: true,
      get() {
        return this[GENERATOR].level;
      },
      set(level) {
        this[GENERATOR].level = level;
      }
    }
  });
  Object.defineProperties(createChalk.prototype, styles2);
  chalk = createChalk();
  chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
  source_default = chalk;
});

// node_modules/lodash-es/_defineProperty.js
var defineProperty, _defineProperty_default;
var init__defineProperty = __esm(() => {
  init__getNative();
  defineProperty = function() {
    try {
      var func = _getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {}
  }();
  _defineProperty_default = defineProperty;
});

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && _defineProperty_default) {
    _defineProperty_default(object, key, {
      configurable: true,
      enumerable: true,
      value,
      writable: true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue_default;
var init__baseAssignValue = __esm(() => {
  init__defineProperty();
  _baseAssignValue_default = baseAssignValue;
});

// node_modules/lodash-es/_assignValue.js
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq_default(objValue, value)) || value === undefined && !(key in object)) {
    _baseAssignValue_default(object, key, value);
  }
}
var objectProto, hasOwnProperty, _assignValue_default;
var init__assignValue = __esm(() => {
  init__baseAssignValue();
  init_eq();
  objectProto = Object.prototype;
  hasOwnProperty = objectProto.hasOwnProperty;
  _assignValue_default = assignValue;
});

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue_default(object, key, newValue);
    } else {
      _assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var _copyObject_default;
var init__copyObject = __esm(() => {
  init__assignValue();
  init__baseAssignValue();
  _copyObject_default = copyObject;
});

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn_default;
var init__nativeKeysIn = __esm(() => {
  _nativeKeysIn_default = nativeKeysIn;
});

// node_modules/lodash-es/_baseKeysIn.js
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return _nativeKeysIn_default(object);
  }
  var isProto = _isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto2, hasOwnProperty2, _baseKeysIn_default;
var init__baseKeysIn = __esm(() => {
  init_isObject();
  init__isPrototype();
  init__nativeKeysIn();
  objectProto2 = Object.prototype;
  hasOwnProperty2 = objectProto2.hasOwnProperty;
  _baseKeysIn_default = baseKeysIn;
});

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? _arrayLikeKeys_default(object, true) : _baseKeysIn_default(object);
}
var keysIn_default;
var init_keysIn = __esm(() => {
  init__arrayLikeKeys();
  init__baseKeysIn();
  init_isArrayLike();
  keysIn_default = keysIn;
});

// node_modules/lodash-es/_cloneBuffer.js
var exports__cloneBuffer = {};
__export(exports__cloneBuffer, {
  default: () => _cloneBuffer_default
});
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var freeExports, freeModule, moduleExports, Buffer2, allocUnsafe, _cloneBuffer_default;
var init__cloneBuffer = __esm(() => {
  init__root();
  freeExports = typeof exports__cloneBuffer == "object" && exports__cloneBuffer && !exports__cloneBuffer.nodeType && exports__cloneBuffer;
  freeModule = freeExports && typeof module__cloneBuffer == "object" && module__cloneBuffer && !module__cloneBuffer.nodeType && module__cloneBuffer;
  moduleExports = freeModule && freeModule.exports === freeExports;
  Buffer2 = moduleExports ? _root_default.Buffer : undefined;
  allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined;
  _cloneBuffer_default = cloneBuffer;
});

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray_default;
var init__copyArray = __esm(() => {
  _copyArray_default = copyArray;
});

// node_modules/lodash-es/_getPrototype.js
var getPrototype, _getPrototype_default;
var init__getPrototype = __esm(() => {
  init__overArg();
  getPrototype = _overArg_default(Object.getPrototypeOf, Object);
  _getPrototype_default = getPrototype;
});

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols, getSymbolsIn, _getSymbolsIn_default;
var init__getSymbolsIn = __esm(() => {
  init__arrayPush();
  init__getPrototype();
  init__getSymbols();
  init_stubArray();
  nativeGetSymbols = Object.getOwnPropertySymbols;
  getSymbolsIn = !nativeGetSymbols ? stubArray_default : function(object) {
    var result = [];
    while (object) {
      _arrayPush_default(result, _getSymbols_default(object));
      object = _getPrototype_default(object);
    }
    return result;
  };
  _getSymbolsIn_default = getSymbolsIn;
});

// node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return _baseGetAllKeys_default(object, keysIn_default, _getSymbolsIn_default);
}
var _getAllKeysIn_default;
var init__getAllKeysIn = __esm(() => {
  init__baseGetAllKeys();
  init__getSymbolsIn();
  init_keysIn();
  _getAllKeysIn_default = getAllKeysIn;
});

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_default(result).set(new _Uint8Array_default(arrayBuffer));
  return result;
}
var _cloneArrayBuffer_default;
var init__cloneArrayBuffer = __esm(() => {
  init__Uint8Array();
  _cloneArrayBuffer_default = cloneArrayBuffer;
});

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray_default;
var init__cloneTypedArray = __esm(() => {
  init__cloneArrayBuffer();
  _cloneTypedArray_default = cloneTypedArray;
});

// node_modules/lodash-es/_baseCreate.js
var objectCreate, baseCreate, _baseCreate_default;
var init__baseCreate = __esm(() => {
  init_isObject();
  objectCreate = Object.create;
  baseCreate = function() {
    function object() {}
    return function(proto2) {
      if (!isObject_default(proto2)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto2);
      }
      object.prototype = proto2;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }();
  _baseCreate_default = baseCreate;
});

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !_isPrototype_default(object) ? _baseCreate_default(_getPrototype_default(object)) : {};
}
var _initCloneObject_default;
var init__initCloneObject = __esm(() => {
  init__baseCreate();
  init__getPrototype();
  init__isPrototype();
  _initCloneObject_default = initCloneObject;
});

// src/utils/sequential.ts
function sequential(fn) {
  const queue = [];
  let processing = false;
  async function processQueue() {
    if (processing)
      return;
    if (queue.length === 0)
      return;
    processing = true;
    while (queue.length > 0) {
      const { args, resolve, reject, context } = queue.shift();
      try {
        const result = await fn.apply(context, args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    processing = false;
    if (queue.length > 0) {
      processQueue();
    }
  }
  return function(...args) {
    return new Promise((resolve, reject) => {
      queue.push({ args, resolve, reject, context: this });
      processQueue();
    });
  };
}
var init_sequential = () => {};

// node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq_default(object[key], value) || value === undefined && !(key in object)) {
    _baseAssignValue_default(object, key, value);
  }
}
var _assignMergeValue_default;
var init__assignMergeValue = __esm(() => {
  init__baseAssignValue();
  init_eq();
  _assignMergeValue_default = assignMergeValue;
});

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor_default;
var init__createBaseFor = __esm(() => {
  _createBaseFor_default = createBaseFor;
});

// node_modules/lodash-es/_baseFor.js
var baseFor, _baseFor_default;
var init__baseFor = __esm(() => {
  init__createBaseFor();
  baseFor = _createBaseFor_default();
  _baseFor_default = baseFor;
});

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default;
var init_isArrayLikeObject = __esm(() => {
  init_isArrayLike();
  init_isObjectLike();
  isArrayLikeObject_default = isArrayLikeObject;
});

// node_modules/lodash-es/isPlainObject.js
function isPlainObject(value) {
  if (!isObjectLike_default(value) || _baseGetTag_default(value) != objectTag) {
    return false;
  }
  var proto2 = _getPrototype_default(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty3.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var objectTag = "[object Object]", funcProto, objectProto3, funcToString, hasOwnProperty3, objectCtorString, isPlainObject_default;
var init_isPlainObject = __esm(() => {
  init__baseGetTag();
  init__getPrototype();
  init_isObjectLike();
  funcProto = Function.prototype;
  objectProto3 = Object.prototype;
  funcToString = funcProto.toString;
  hasOwnProperty3 = objectProto3.hasOwnProperty;
  objectCtorString = funcToString.call(Object);
  isPlainObject_default = isPlainObject;
});

// node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet_default;
var init__safeGet = __esm(() => {
  _safeGet_default = safeGet;
});

// node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return _copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default;
var init_toPlainObject = __esm(() => {
  init__copyObject();
  init_keysIn();
  toPlainObject_default = toPlainObject;
});

// node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet_default(object, key), srcValue = _safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    _assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = _copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = _initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  _assignMergeValue_default(object, key, newValue);
}
var _baseMergeDeep_default;
var init__baseMergeDeep = __esm(() => {
  init__assignMergeValue();
  init__cloneBuffer();
  init__cloneTypedArray();
  init__copyArray();
  init__initCloneObject();
  init_isArguments();
  init_isArray();
  init_isArrayLikeObject();
  init_isBuffer();
  init_isFunction();
  init_isObject();
  init_isPlainObject();
  init_isTypedArray();
  init__safeGet();
  init_toPlainObject();
  _baseMergeDeep_default = baseMergeDeep;
});

// node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor_default(source, function(srcValue, key) {
    stack || (stack = new _Stack_default);
    if (isObject_default(srcValue)) {
      _baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(_safeGet_default(object, key), srcValue, key + "", object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var _baseMerge_default;
var init__baseMerge = __esm(() => {
  init__Stack();
  init__assignMergeValue();
  init__baseFor();
  init__baseMergeDeep();
  init_isObject();
  init_keysIn();
  init__safeGet();
  _baseMerge_default = baseMerge;
});

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply_default;
var init__apply = __esm(() => {
  _apply_default = apply;
});

// node_modules/lodash-es/_overRest.js
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply_default(func, this, otherArgs);
  };
}
var nativeMax, _overRest_default;
var init__overRest = __esm(() => {
  init__apply();
  nativeMax = Math.max;
  _overRest_default = overRest;
});

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default;
var init_constant = __esm(() => {
  constant_default = constant;
});

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString, _baseSetToString_default;
var init__baseSetToString = __esm(() => {
  init_constant();
  init__defineProperty();
  init_identity();
  baseSetToString = !_defineProperty_default ? identity_default : function(func, string) {
    return _defineProperty_default(func, "toString", {
      configurable: true,
      enumerable: false,
      value: constant_default(string),
      writable: true
    });
  };
  _baseSetToString_default = baseSetToString;
});

// node_modules/lodash-es/_shortOut.js
function shortOut(func) {
  var count2 = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count2 >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count2 = 0;
    }
    return func.apply(undefined, arguments);
  };
}
var HOT_COUNT = 800, HOT_SPAN = 16, nativeNow, _shortOut_default;
var init__shortOut = __esm(() => {
  nativeNow = Date.now;
  _shortOut_default = shortOut;
});

// node_modules/lodash-es/_setToString.js
var setToString, _setToString_default;
var init__setToString = __esm(() => {
  init__baseSetToString();
  init__shortOut();
  setToString = _shortOut_default(_baseSetToString_default);
  _setToString_default = setToString;
});

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return _setToString_default(_overRest_default(func, start, identity_default), func + "");
}
var _baseRest_default;
var init__baseRest = __esm(() => {
  init_identity();
  init__overRest();
  init__setToString();
  _baseRest_default = baseRest;
});

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && _isIndex_default(index, object.length) : type == "string" && (index in object)) {
    return eq_default(object[index], value);
  }
  return false;
}
var _isIterateeCall_default;
var init__isIterateeCall = __esm(() => {
  init_eq();
  init_isArrayLike();
  init__isIndex();
  init_isObject();
  _isIterateeCall_default = isIterateeCall;
});

// node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return _baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
    if (guard && _isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var _createAssigner_default;
var init__createAssigner = __esm(() => {
  init__baseRest();
  init__isIterateeCall();
  _createAssigner_default = createAssigner;
});

// node_modules/lodash-es/mergeWith.js
var mergeWith, mergeWith_default;
var init_mergeWith = __esm(() => {
  init__baseMerge();
  init__createAssigner();
  mergeWith = _createAssigner_default(function(object, source, srcIndex, customizer) {
    _baseMerge_default(object, source, srcIndex, customizer);
  });
  mergeWith_default = mergeWith;
});

// src/utils/fileRead.ts
function detectEncodingForResolvedPath(resolvedPath) {
  const { buffer, bytesRead } = getFsImplementation().readSync(resolvedPath, {
    length: 4096
  });
  if (bytesRead === 0) {
    return "utf8";
  }
  if (bytesRead >= 2) {
    if (buffer[0] === 255 && buffer[1] === 254)
      return "utf16le";
  }
  if (bytesRead >= 3 && buffer[0] === 239 && buffer[1] === 187 && buffer[2] === 191) {
    return "utf8";
  }
  return "utf8";
}
function detectLineEndingsForString(content) {
  let crlfCount = 0;
  let lfCount = 0;
  for (let i = 0;i < content.length; i++) {
    if (content[i] === `
`) {
      if (i > 0 && content[i - 1] === "\r") {
        crlfCount++;
      } else {
        lfCount++;
      }
    }
  }
  return crlfCount > lfCount ? "CRLF" : "LF";
}
function readFileSyncWithMetadata(filePath) {
  const fs = getFsImplementation();
  const { resolvedPath, isSymlink } = safeResolvePath(fs, filePath);
  if (isSymlink) {
    logForDebugging(`Reading through symlink: ${filePath} -> ${resolvedPath}`);
  }
  const encoding = detectEncodingForResolvedPath(resolvedPath);
  const raw = fs.readFileSync(resolvedPath, { encoding });
  const lineEndings = detectLineEndingsForString(raw.slice(0, 4096));
  return {
    content: raw.replaceAll(`\r
`, `
`),
    encoding,
    lineEndings
  };
}
function readFileSync(filePath) {
  return readFileSyncWithMetadata(filePath).content;
}
var init_fileRead = __esm(() => {
  init_debug();
  init_fsOperations();
});

// src/services/remoteManagedSettings/syncCacheState.ts
import { join } from "path";
function setSessionCache(value) {
  sessionCache = value;
}
function resetSyncCache() {
  sessionCache = null;
  eligible = undefined;
}
function setEligibility(v) {
  eligible = v;
  return v;
}
function getSettingsPath() {
  return join(getClaudeConfigHomeDir(), SETTINGS_FILENAME);
}
function loadSettings() {
  try {
    const content = readFileSync(getSettingsPath());
    const data = jsonParse(stripBOM(content));
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}
function getRemoteManagedSettingsSyncFromCache() {
  if (eligible !== true)
    return null;
  if (sessionCache)
    return sessionCache;
  const cachedSettings = loadSettings();
  if (cachedSettings) {
    sessionCache = cachedSettings;
    resetSettingsCache();
    return cachedSettings;
  }
  return null;
}
var SETTINGS_FILENAME = "remote-settings.json", sessionCache = null, eligible;
var init_syncCacheState = __esm(() => {
  init_envUtils();
  init_fileRead();
  init_jsonRead();
  init_settingsCache();
  init_slowOperations();
});

// node_modules/dom-mutator/dist/dom-mutator.esm.js
function getObserverInit(attr) {
  return attr === "html" ? {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  } : {
    childList: false,
    subtree: false,
    attributes: true,
    attributeFilter: [attr]
  };
}
function getElementRecord(element) {
  var record = elements.get(element);
  if (!record) {
    record = {
      element,
      attributes: {}
    };
    elements.set(element, record);
  }
  return record;
}
function createElementPropertyRecord(el, attr, getCurrentValue, setValue, mutationRunner) {
  var currentValue = getCurrentValue(el);
  var record = {
    isDirty: false,
    originalValue: currentValue,
    virtualValue: currentValue,
    mutations: [],
    el,
    _positionTimeout: null,
    observer: new MutationObserver(function() {
      if (attr === "position" && record._positionTimeout)
        return;
      else if (attr === "position")
        record._positionTimeout = setTimeout(function() {
          record._positionTimeout = null;
        }, 1000);
      var currentValue2 = getCurrentValue(el);
      if (attr === "position" && currentValue2.parentNode === record.virtualValue.parentNode && currentValue2.insertBeforeNode === record.virtualValue.insertBeforeNode)
        return;
      if (currentValue2 === record.virtualValue)
        return;
      record.originalValue = currentValue2;
      mutationRunner(record);
    }),
    mutationRunner,
    setValue,
    getCurrentValue
  };
  if (attr === "position" && el.parentNode) {
    record.observer.observe(el.parentNode, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  } else {
    record.observer.observe(el, getObserverInit(attr));
  }
  return record;
}
function queueIfNeeded(val, record) {
  var currentVal = record.getCurrentValue(record.el);
  record.virtualValue = val;
  if (val && typeof val !== "string") {
    if (!currentVal || val.parentNode !== currentVal.parentNode || val.insertBeforeNode !== currentVal.insertBeforeNode) {
      record.isDirty = true;
      runDOMUpdates();
    }
  } else if (val !== currentVal) {
    record.isDirty = true;
    runDOMUpdates();
  }
}
function htmlMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function(m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(getTransformedHTML(val), record);
}
function classMutationRunner(record) {
  var val = new Set(record.originalValue.split(/\s+/).filter(Boolean));
  record.mutations.forEach(function(m) {
    return m.mutate(val);
  });
  queueIfNeeded(Array.from(val).filter(Boolean).join(" "), record);
}
function attrMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function(m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(val, record);
}
function _loadDOMNodes(_ref) {
  var { parentSelector, insertBeforeSelector } = _ref;
  var parentNode = document.querySelector(parentSelector);
  if (!parentNode)
    return null;
  var insertBeforeNode = insertBeforeSelector ? document.querySelector(insertBeforeSelector) : null;
  if (insertBeforeSelector && !insertBeforeNode)
    return null;
  return {
    parentNode,
    insertBeforeNode
  };
}
function positionMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function(m) {
    var selectors = m.mutate();
    var newNodes = _loadDOMNodes(selectors);
    val = newNodes || val;
  });
  queueIfNeeded(val, record);
}
function getElementHTMLRecord(element) {
  var elementRecord = getElementRecord(element);
  if (!elementRecord.html) {
    elementRecord.html = createElementPropertyRecord(element, "html", getHTMLValue, setHTMLValue, htmlMutationRunner);
  }
  return elementRecord.html;
}
function getElementPositionRecord(element) {
  var elementRecord = getElementRecord(element);
  if (!elementRecord.position) {
    elementRecord.position = createElementPropertyRecord(element, "position", getElementPosition, setElementPosition, positionMutationRunner);
  }
  return elementRecord.position;
}
function getElementClassRecord(el) {
  var elementRecord = getElementRecord(el);
  if (!elementRecord.classes) {
    elementRecord.classes = createElementPropertyRecord(el, "class", getClassValue, setClassValue, classMutationRunner);
  }
  return elementRecord.classes;
}
function getElementAttributeRecord(el, attr) {
  var elementRecord = getElementRecord(el);
  if (!elementRecord.attributes[attr]) {
    elementRecord.attributes[attr] = createElementPropertyRecord(el, attr, getAttrValue(attr), setAttrValue(attr), attrMutationRunner);
  }
  return elementRecord.attributes[attr];
}
function deleteElementPropertyRecord(el, attr) {
  var element = elements.get(el);
  if (!element)
    return;
  if (attr === "html") {
    var _element$html, _element$html$observe;
    (_element$html = element.html) == null || (_element$html$observe = _element$html.observer) == null || _element$html$observe.disconnect();
    delete element.html;
  } else if (attr === "class") {
    var _element$classes, _element$classes$obse;
    (_element$classes = element.classes) == null || (_element$classes$obse = _element$classes.observer) == null || _element$classes$obse.disconnect();
    delete element.classes;
  } else if (attr === "position") {
    var _element$position, _element$position$obs;
    (_element$position = element.position) == null || (_element$position$obs = _element$position.observer) == null || _element$position$obs.disconnect();
    delete element.position;
  } else {
    var _element$attributes, _element$attributes$a, _element$attributes$a2;
    (_element$attributes = element.attributes) == null || (_element$attributes$a = _element$attributes[attr]) == null || (_element$attributes$a2 = _element$attributes$a.observer) == null || _element$attributes$a2.disconnect();
    delete element.attributes[attr];
  }
}
function getTransformedHTML(html) {
  if (!transformContainer) {
    transformContainer = document.createElement("div");
  }
  transformContainer.innerHTML = html;
  return transformContainer.innerHTML;
}
function setPropertyValue(el, attr, m) {
  if (!m.isDirty)
    return;
  m.isDirty = false;
  var val = m.virtualValue;
  if (!m.mutations.length) {
    deleteElementPropertyRecord(el, attr);
  }
  m.setValue(el, val);
}
function setValue(m, el) {
  m.html && setPropertyValue(el, "html", m.html);
  m.classes && setPropertyValue(el, "class", m.classes);
  m.position && setPropertyValue(el, "position", m.position);
  Object.keys(m.attributes).forEach(function(attr) {
    setPropertyValue(el, attr, m.attributes[attr]);
  });
}
function runDOMUpdates() {
  elements.forEach(setValue);
}
function startMutating(mutation, element) {
  var record = null;
  if (mutation.kind === "html") {
    record = getElementHTMLRecord(element);
  } else if (mutation.kind === "class") {
    record = getElementClassRecord(element);
  } else if (mutation.kind === "attribute") {
    record = getElementAttributeRecord(element, mutation.attribute);
  } else if (mutation.kind === "position") {
    record = getElementPositionRecord(element);
  }
  if (!record)
    return;
  record.mutations.push(mutation);
  record.mutationRunner(record);
}
function stopMutating(mutation, el) {
  var record = null;
  if (mutation.kind === "html") {
    record = getElementHTMLRecord(el);
  } else if (mutation.kind === "class") {
    record = getElementClassRecord(el);
  } else if (mutation.kind === "attribute") {
    record = getElementAttributeRecord(el, mutation.attribute);
  } else if (mutation.kind === "position") {
    record = getElementPositionRecord(el);
  }
  if (!record)
    return;
  var index = record.mutations.indexOf(mutation);
  if (index !== -1)
    record.mutations.splice(index, 1);
  record.mutationRunner(record);
}
function refreshElementsSet(mutation) {
  if (mutation.kind === "position" && mutation.elements.size === 1)
    return;
  var existingElements = new Set(mutation.elements);
  var matchingElements = document.querySelectorAll(mutation.selector);
  matchingElements.forEach(function(el) {
    if (!existingElements.has(el)) {
      mutation.elements.add(el);
      startMutating(mutation, el);
    }
  });
}
function revertMutation(mutation) {
  mutation.elements.forEach(function(el) {
    return stopMutating(mutation, el);
  });
  mutation.elements.clear();
  mutations["delete"](mutation);
}
function refreshAllElementSets() {
  mutations.forEach(refreshElementsSet);
}
function connectGlobalObserver() {
  if (typeof document === "undefined")
    return;
  if (!observer) {
    observer = new MutationObserver(function() {
      refreshAllElementSets();
    });
  }
  refreshAllElementSets();
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
}
function newMutation(m) {
  if (typeof document === "undefined")
    return nullController;
  mutations.add(m);
  refreshElementsSet(m);
  return {
    revert: function revert2() {
      revertMutation(m);
    }
  };
}
function html(selector, mutate) {
  return newMutation({
    kind: "html",
    elements: new Set,
    mutate,
    selector
  });
}
function position(selector, mutate) {
  return newMutation({
    kind: "position",
    elements: new Set,
    mutate,
    selector
  });
}
function classes(selector, mutate) {
  return newMutation({
    kind: "class",
    elements: new Set,
    mutate,
    selector
  });
}
function attribute(selector, attribute2, mutate) {
  if (!validAttributeName.test(attribute2))
    return nullController;
  if (attribute2 === "class" || attribute2 === "className") {
    return classes(selector, function(classnames) {
      var mutatedClassnames = mutate(Array.from(classnames).join(" "));
      classnames.clear();
      if (!mutatedClassnames)
        return;
      mutatedClassnames.split(/\s+/g).filter(Boolean).forEach(function(c) {
        return classnames.add(c);
      });
    });
  }
  return newMutation({
    kind: "attribute",
    attribute: attribute2,
    elements: new Set,
    mutate,
    selector
  });
}
function declarative(_ref2) {
  var { selector, action, value, attribute: attr, parentSelector, insertBeforeSelector } = _ref2;
  if (attr === "html") {
    if (action === "append") {
      return html(selector, function(val) {
        return val + (value != null ? value : "");
      });
    } else if (action === "set") {
      return html(selector, function() {
        return value != null ? value : "";
      });
    }
  } else if (attr === "class") {
    if (action === "append") {
      return classes(selector, function(val) {
        if (value)
          val.add(value);
      });
    } else if (action === "remove") {
      return classes(selector, function(val) {
        if (value)
          val["delete"](value);
      });
    } else if (action === "set") {
      return classes(selector, function(val) {
        val.clear();
        if (value)
          val.add(value);
      });
    }
  } else if (attr === "position") {
    if (action === "set" && parentSelector) {
      return position(selector, function() {
        return {
          insertBeforeSelector,
          parentSelector
        };
      });
    }
  } else {
    if (action === "append") {
      return attribute(selector, attr, function(val) {
        return val !== null ? val + (value != null ? value : "") : value != null ? value : "";
      });
    } else if (action === "set") {
      return attribute(selector, attr, function() {
        return value != null ? value : "";
      });
    } else if (action === "remove") {
      return attribute(selector, attr, function() {
        return null;
      });
    }
  }
  return nullController;
}
var validAttributeName, nullController, elements, mutations, getHTMLValue = function getHTMLValue2(el) {
  return el.innerHTML;
}, setHTMLValue = function setHTMLValue2(el, value) {
  return el.innerHTML = value;
}, getElementPosition = function getElementPosition2(el) {
  return {
    parentNode: el.parentElement,
    insertBeforeNode: el.nextElementSibling
  };
}, setElementPosition = function setElementPosition2(el, value) {
  if (value.insertBeforeNode && !value.parentNode.contains(value.insertBeforeNode)) {
    return;
  }
  value.parentNode.insertBefore(el, value.insertBeforeNode);
}, setClassValue = function setClassValue2(el, val) {
  return val ? el.className = val : el.removeAttribute("class");
}, getClassValue = function getClassValue2(el) {
  return el.className;
}, getAttrValue = function getAttrValue2(attrName) {
  return function(el) {
    var _el$getAttribute;
    return (_el$getAttribute = el.getAttribute(attrName)) != null ? _el$getAttribute : null;
  };
}, setAttrValue = function setAttrValue2(attrName) {
  return function(el, val) {
    return val !== null ? el.setAttribute(attrName, val) : el.removeAttribute(attrName);
  };
}, transformContainer, observer, index, dom_mutator_esm_default;
var init_dom_mutator_esm = __esm(() => {
  validAttributeName = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/;
  nullController = {
    revert: function revert() {}
  };
  elements = /* @__PURE__ */ new Map;
  mutations = /* @__PURE__ */ new Set;
  connectGlobalObserver();
  index = {
    html,
    classes,
    attribute,
    position,
    declarative
  };
  dom_mutator_esm_default = index;
});

// node_modules/@growthbook/growthbook/dist/esm/util.mjs
function getPolyfills() {
  return polyfills;
}
function hashFnv32a(str) {
  let hval = 2166136261;
  const l = str.length;
  for (let i = 0;i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return hval >>> 0;
}
function hash(seed, value, version) {
  if (version === 2) {
    return hashFnv32a(hashFnv32a(seed + value) + "") % 1e4 / 1e4;
  }
  if (version === 1) {
    return hashFnv32a(value + seed) % 1000 / 1000;
  }
  return null;
}
function getEqualWeights(n) {
  if (n <= 0)
    return [];
  return new Array(n).fill(1 / n);
}
function inRange(n, range) {
  return n >= range[0] && n < range[1];
}
function inNamespace(hashValue, namespace) {
  const n = hash("__" + namespace[0], hashValue, 1);
  if (n === null)
    return false;
  return n >= namespace[1] && n < namespace[2];
}
function chooseVariation(n, ranges) {
  for (let i = 0;i < ranges.length; i++) {
    if (inRange(n, ranges[i])) {
      return i;
    }
  }
  return -1;
}
function getUrlRegExp(regexString) {
  try {
    const escaped = regexString.replace(/([^\\])\//g, "$1\\/");
    return new RegExp(escaped);
  } catch (e) {
    console.error(e);
    return;
  }
}
function isURLTargeted(url, targets) {
  if (!targets.length)
    return false;
  let hasIncludeRules = false;
  let isIncluded = false;
  for (let i = 0;i < targets.length; i++) {
    const match = _evalURLTarget(url, targets[i].type, targets[i].pattern);
    if (targets[i].include === false) {
      if (match)
        return false;
    } else {
      hasIncludeRules = true;
      if (match)
        isIncluded = true;
    }
  }
  return isIncluded || !hasIncludeRules;
}
function _evalSimpleUrlPart(actual, pattern, isPath) {
  try {
    let escaped = pattern.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
    if (isPath) {
      escaped = "\\/?" + escaped.replace(/(^\/|\/$)/g, "") + "\\/?";
    }
    const regex = new RegExp("^" + escaped + "$", "i");
    return regex.test(actual);
  } catch (e) {
    return false;
  }
}
function _evalSimpleUrlTarget(actual, pattern) {
  try {
    const expected = new URL(pattern.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____");
    const comps = [[actual.host, expected.host, false], [actual.pathname, expected.pathname, true]];
    if (expected.hash) {
      comps.push([actual.hash, expected.hash, false]);
    }
    expected.searchParams.forEach((v, k) => {
      comps.push([actual.searchParams.get(k) || "", v, false]);
    });
    return !comps.some((data) => !_evalSimpleUrlPart(data[0], data[1], data[2]));
  } catch (e) {
    return false;
  }
}
function _evalURLTarget(url, type, pattern) {
  try {
    const parsed = new URL(url, "https://_");
    if (type === "regex") {
      const regex = getUrlRegExp(pattern);
      if (!regex)
        return false;
      return regex.test(parsed.href) || regex.test(parsed.href.substring(parsed.origin.length));
    } else if (type === "simple") {
      return _evalSimpleUrlTarget(parsed, pattern);
    }
    return false;
  } catch (e) {
    return false;
  }
}
function getBucketRanges(numVariations, coverage, weights) {
  coverage = coverage === undefined ? 1 : coverage;
  if (coverage < 0) {
    if (true) {
      console.error("Experiment.coverage must be greater than or equal to 0");
    }
    coverage = 0;
  } else if (coverage > 1) {
    if (true) {
      console.error("Experiment.coverage must be less than or equal to 1");
    }
    coverage = 1;
  }
  const equal = getEqualWeights(numVariations);
  weights = weights || equal;
  if (weights.length !== numVariations) {
    if (true) {
      console.error("Experiment.weights array must be the same length as Experiment.variations");
    }
    weights = equal;
  }
  const totalWeight = weights.reduce((w, sum) => sum + w, 0);
  if (totalWeight < 0.99 || totalWeight > 1.01) {
    if (true) {
      console.error("Experiment.weights must add up to 1");
    }
    weights = equal;
  }
  let cumulative = 0;
  return weights.map((w) => {
    const start = cumulative;
    cumulative += w;
    return [start, start + coverage * w];
  });
}
function getQueryStringOverride(id, url, numVariations) {
  if (!url) {
    return null;
  }
  const search = url.split("?")[1];
  if (!search) {
    return null;
  }
  const match = search.replace(/#.*/, "").split("&").map((kv) => kv.split("=", 2)).filter(([k]) => k === id).map(([, v]) => parseInt(v));
  if (match.length > 0 && match[0] >= 0 && match[0] < numVariations)
    return match[0];
  return null;
}
function isIncluded(include) {
  try {
    return include();
  } catch (e) {
    console.error(e);
    return false;
  }
}
async function decrypt(encryptedString, decryptionKey, subtle) {
  decryptionKey = decryptionKey || "";
  subtle = subtle || globalThis.crypto && globalThis.crypto.subtle || polyfills.SubtleCrypto;
  if (!subtle) {
    throw new Error("No SubtleCrypto implementation found");
  }
  try {
    const key = await subtle.importKey("raw", base64ToBuf(decryptionKey), {
      name: "AES-CBC",
      length: 128
    }, true, ["encrypt", "decrypt"]);
    const [iv, cipherText] = encryptedString.split(".");
    const plainTextBuffer = await subtle.decrypt({
      name: "AES-CBC",
      iv: base64ToBuf(iv)
    }, key, base64ToBuf(cipherText));
    return new TextDecoder().decode(plainTextBuffer);
  } catch (e) {
    throw new Error("Failed to decrypt");
  }
}
function toString(input) {
  if (typeof input === "string")
    return input;
  return JSON.stringify(input);
}
function paddedVersionString(input) {
  if (typeof input === "number") {
    input = input + "";
  }
  if (!input || typeof input !== "string") {
    input = "0";
  }
  const parts = input.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
  if (parts.length === 3) {
    parts.push("~");
  }
  return parts.map((v) => v.match(/^[0-9]+$/) ? v.padStart(5, " ") : v).join("-");
}
function loadSDKVersion() {
  let version;
  try {
    version = "1.6.5";
  } catch (e) {
    version = "";
  }
  return version;
}
function mergeQueryStrings(oldUrl, newUrl) {
  let currUrl;
  let redirectUrl;
  try {
    currUrl = new URL(oldUrl);
    redirectUrl = new URL(newUrl);
  } catch (e) {
    console.error(`Unable to merge query strings: ${e}`);
    return newUrl;
  }
  currUrl.searchParams.forEach((value, key) => {
    if (redirectUrl.searchParams.has(key)) {
      return;
    }
    redirectUrl.searchParams.set(key, value);
  });
  return redirectUrl.toString();
}
function isObj(x) {
  return typeof x === "object" && x !== null;
}
function getAutoExperimentChangeType(exp) {
  if (exp.urlPatterns && exp.variations.some((variation) => isObj(variation) && ("urlRedirect" in variation))) {
    return "redirect";
  } else if (exp.variations.some((variation) => isObj(variation) && (variation.domMutations || ("js" in variation) || ("css" in variation)))) {
    return "visual";
  }
  return "unknown";
}
async function promiseTimeout(promise, timeout) {
  return new Promise((resolve) => {
    let resolved = false;
    let timer;
    const finish = (data) => {
      if (resolved)
        return;
      resolved = true;
      timer && clearTimeout(timer);
      resolve(data || null);
    };
    if (timeout) {
      timer = setTimeout(() => finish(), timeout);
    }
    promise.then((data) => finish(data)).catch(() => finish());
  });
}
var polyfills, base64ToBuf = (b) => Uint8Array.from(atob(b), (c) => c.charCodeAt(0));
var init_util = __esm(() => {
  polyfills = {
    fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : undefined,
    SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : undefined,
    EventSource: globalThis.EventSource
  };
});

// node_modules/@growthbook/growthbook/dist/esm/feature-repository.mjs
function configureCache(overrides) {
  Object.assign(cacheSettings, overrides);
  if (!cacheSettings.backgroundSync) {
    clearAutoRefresh();
  }
}
async function refreshFeatures({
  instance,
  timeout,
  skipCache,
  allowStale,
  backgroundSync
}) {
  if (!backgroundSync) {
    cacheSettings.backgroundSync = false;
  }
  return fetchFeaturesWithCache({
    instance,
    allowStale,
    timeout,
    skipCache
  });
}
function subscribe(instance) {
  const key = getKey(instance);
  const subs = subscribedInstances.get(key) || new Set;
  subs.add(instance);
  subscribedInstances.set(key, subs);
}
function unsubscribe(instance) {
  subscribedInstances.forEach((s) => s.delete(instance));
}
function onHidden() {
  streams.forEach((channel) => {
    if (!channel)
      return;
    channel.state = "idle";
    disableChannel(channel);
  });
}
function onVisible() {
  streams.forEach((channel) => {
    if (!channel)
      return;
    if (channel.state !== "idle")
      return;
    enableChannel(channel);
  });
}
async function updatePersistentCache() {
  try {
    if (!polyfills2.localStorage)
      return;
    await polyfills2.localStorage.setItem(cacheSettings.cacheKey, JSON.stringify(Array.from(cache.entries())));
  } catch (e) {}
}
async function fetchFeaturesWithCache({
  instance,
  allowStale,
  timeout,
  skipCache
}) {
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  const now = new Date;
  const minStaleAt = new Date(now.getTime() - cacheSettings.maxAge + cacheSettings.staleTTL);
  await initializeCache();
  const existing = !cacheSettings.disableCache && !skipCache ? cache.get(cacheKey) : undefined;
  if (existing && (allowStale || existing.staleAt > now) && existing.staleAt > minStaleAt) {
    if (existing.sse)
      supportsSSE.add(key);
    if (existing.staleAt < now) {
      fetchFeatures(instance);
    } else {
      startAutoRefresh(instance);
    }
    return {
      data: existing.data,
      success: true,
      source: "cache"
    };
  } else {
    const res = await promiseTimeout(fetchFeatures(instance), timeout);
    return res || {
      data: null,
      success: false,
      source: "timeout",
      error: new Error("Timeout")
    };
  }
}
function getKey(instance) {
  const [apiHost, clientKey] = instance.getApiInfo();
  return `${apiHost}||${clientKey}`;
}
function getCacheKey(instance) {
  const baseKey = getKey(instance);
  if (!("isRemoteEval" in instance) || !instance.isRemoteEval())
    return baseKey;
  const attributes = instance.getAttributes();
  const cacheKeyAttributes = instance.getCacheKeyAttributes() || Object.keys(instance.getAttributes());
  const ca = {};
  cacheKeyAttributes.forEach((key) => {
    ca[key] = attributes[key];
  });
  const fv = instance.getForcedVariations();
  const url = instance.getUrl();
  return `${baseKey}||${JSON.stringify({
    ca,
    fv,
    url
  })}`;
}
async function initializeCache() {
  if (cacheInitialized)
    return;
  cacheInitialized = true;
  try {
    if (polyfills2.localStorage) {
      const value = await polyfills2.localStorage.getItem(cacheSettings.cacheKey);
      if (!cacheSettings.disableCache && value) {
        const parsed = JSON.parse(value);
        if (parsed && Array.isArray(parsed)) {
          parsed.forEach(([key, data]) => {
            cache.set(key, {
              ...data,
              staleAt: new Date(data.staleAt)
            });
          });
        }
        cleanupCache();
      }
    }
  } catch (e) {}
  if (!cacheSettings.disableIdleStreams) {
    const cleanupFn = helpers.startIdleListener();
    if (cleanupFn) {
      helpers.stopIdleListener = cleanupFn;
    }
  }
}
function cleanupCache() {
  const entriesWithTimestamps = Array.from(cache.entries()).map(([key, value]) => ({
    key,
    staleAt: value.staleAt.getTime()
  })).sort((a, b) => a.staleAt - b.staleAt);
  const entriesToRemoveCount = Math.min(Math.max(0, cache.size - cacheSettings.maxEntries), cache.size);
  for (let i = 0;i < entriesToRemoveCount; i++) {
    cache.delete(entriesWithTimestamps[i].key);
  }
}
function onNewFeatureData(key, cacheKey, data) {
  const version = data.dateUpdated || "";
  const staleAt = new Date(Date.now() + cacheSettings.staleTTL);
  const existing = !cacheSettings.disableCache ? cache.get(cacheKey) : undefined;
  if (existing && version && existing.version === version) {
    existing.staleAt = staleAt;
    updatePersistentCache();
    return;
  }
  if (!cacheSettings.disableCache) {
    cache.set(cacheKey, {
      data,
      version,
      staleAt,
      sse: supportsSSE.has(key)
    });
    cleanupCache();
  }
  updatePersistentCache();
  const instances = subscribedInstances.get(key);
  instances && instances.forEach((instance) => refreshInstance(instance, data));
}
async function refreshInstance(instance, data) {
  await instance.setPayload(data || instance.getPayload());
}
async function fetchFeatures(instance) {
  const {
    apiHost,
    apiRequestHeaders
  } = instance.getApiHosts();
  const clientKey = instance.getClientKey();
  const remoteEval = "isRemoteEval" in instance && instance.isRemoteEval();
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  let promise = activeFetches.get(cacheKey);
  if (!promise) {
    const fetcher = remoteEval ? helpers.fetchRemoteEvalCall({
      host: apiHost,
      clientKey,
      payload: {
        attributes: instance.getAttributes(),
        forcedVariations: instance.getForcedVariations(),
        forcedFeatures: Array.from(instance.getForcedFeatures().entries()),
        url: instance.getUrl()
      },
      headers: apiRequestHeaders
    }) : helpers.fetchFeaturesCall({
      host: apiHost,
      clientKey,
      headers: apiRequestHeaders
    });
    promise = fetcher.then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      if (res.headers.get("x-sse-support") === "enabled") {
        supportsSSE.add(key);
      }
      return res.json();
    }).then((data) => {
      onNewFeatureData(key, cacheKey, data);
      startAutoRefresh(instance);
      activeFetches.delete(cacheKey);
      return {
        data,
        success: true,
        source: "network"
      };
    }).catch((e) => {
      instance.log("Error fetching features", {
        apiHost,
        clientKey,
        error: e ? e.message : null
      });
      activeFetches.delete(cacheKey);
      return {
        data: null,
        source: "error",
        success: false,
        error: e
      };
    });
    activeFetches.set(cacheKey, promise);
  }
  return promise;
}
function startAutoRefresh(instance, forceSSE = false) {
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  const {
    streamingHost,
    streamingHostRequestHeaders
  } = instance.getApiHosts();
  const clientKey = instance.getClientKey();
  if (forceSSE) {
    supportsSSE.add(key);
  }
  if (cacheSettings.backgroundSync && supportsSSE.has(key) && polyfills2.EventSource) {
    if (streams.has(key))
      return;
    const channel = {
      src: null,
      host: streamingHost,
      clientKey,
      headers: streamingHostRequestHeaders,
      cb: (event) => {
        try {
          if (event.type === "features-updated") {
            const instances = subscribedInstances.get(key);
            instances && instances.forEach((instance2) => {
              fetchFeatures(instance2);
            });
          } else if (event.type === "features") {
            const json = JSON.parse(event.data);
            onNewFeatureData(key, cacheKey, json);
          }
          channel.errors = 0;
        } catch (e) {
          instance.log("SSE Error", {
            streamingHost,
            clientKey,
            error: e ? e.message : null
          });
          onSSEError(channel);
        }
      },
      errors: 0,
      state: "active"
    };
    streams.set(key, channel);
    enableChannel(channel);
  }
}
function onSSEError(channel) {
  if (channel.state === "idle")
    return;
  channel.errors++;
  if (channel.errors > 3 || channel.src && channel.src.readyState === 2) {
    const delay = Math.pow(3, channel.errors - 3) * (1000 + Math.random() * 1000);
    disableChannel(channel);
    setTimeout(() => {
      if (["idle", "active"].includes(channel.state))
        return;
      enableChannel(channel);
    }, Math.min(delay, 300000));
  }
}
function disableChannel(channel) {
  if (!channel.src)
    return;
  channel.src.onopen = null;
  channel.src.onerror = null;
  channel.src.close();
  channel.src = null;
  if (channel.state === "active") {
    channel.state = "disabled";
  }
}
function enableChannel(channel) {
  channel.src = helpers.eventSourceCall({
    host: channel.host,
    clientKey: channel.clientKey,
    headers: channel.headers
  });
  channel.state = "active";
  channel.src.addEventListener("features", channel.cb);
  channel.src.addEventListener("features-updated", channel.cb);
  channel.src.onerror = () => onSSEError(channel);
  channel.src.onopen = () => {
    channel.errors = 0;
  };
}
function destroyChannel(channel, key) {
  disableChannel(channel);
  streams.delete(key);
}
function clearAutoRefresh() {
  supportsSSE.clear();
  streams.forEach(destroyChannel);
  subscribedInstances.clear();
  helpers.stopIdleListener();
}
function startStreaming(instance, options) {
  if (options.streaming) {
    if (!instance.getClientKey()) {
      throw new Error("Must specify clientKey to enable streaming");
    }
    if (options.payload) {
      startAutoRefresh(instance, true);
    }
    subscribe(instance);
  }
}
var cacheSettings, polyfills2, helpers, subscribedInstances, cacheInitialized = false, cache, activeFetches, streams, supportsSSE;
var init_feature_repository = __esm(() => {
  init_util();
  cacheSettings = {
    staleTTL: 1000 * 60,
    maxAge: 1000 * 60 * 60 * 4,
    cacheKey: "gbFeaturesCache",
    backgroundSync: true,
    maxEntries: 10,
    disableIdleStreams: false,
    idleStreamInterval: 20000,
    disableCache: false
  };
  polyfills2 = getPolyfills();
  helpers = {
    fetchFeaturesCall: ({
      host,
      clientKey,
      headers
    }) => {
      return polyfills2.fetch(`${host}/api/features/${clientKey}`, {
        headers
      });
    },
    fetchRemoteEvalCall: ({
      host,
      clientKey,
      payload,
      headers
    }) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        body: JSON.stringify(payload)
      };
      return polyfills2.fetch(`${host}/api/eval/${clientKey}`, options);
    },
    eventSourceCall: ({
      host,
      clientKey,
      headers
    }) => {
      if (headers) {
        return new polyfills2.EventSource(`${host}/sub/${clientKey}`, {
          headers
        });
      }
      return new polyfills2.EventSource(`${host}/sub/${clientKey}`);
    },
    startIdleListener: () => {
      let idleTimeout;
      const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
      if (!isBrowser)
        return;
      const onVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          window.clearTimeout(idleTimeout);
          onVisible();
        } else if (document.visibilityState === "hidden") {
          idleTimeout = window.setTimeout(onHidden, cacheSettings.idleStreamInterval);
        }
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    },
    stopIdleListener: () => {}
  };
  try {
    if (globalThis.localStorage) {
      polyfills2.localStorage = globalThis.localStorage;
    }
  } catch (e) {}
  subscribedInstances = new Map;
  cache = new Map;
  activeFetches = new Map;
  streams = new Map;
  supportsSSE = new Set;
});

// node_modules/@growthbook/growthbook/dist/esm/mongrule.mjs
function evalCondition(obj, condition, savedGroups) {
  savedGroups = savedGroups || {};
  for (const [k, v] of Object.entries(condition)) {
    switch (k) {
      case "$or":
        if (!evalOr(obj, v, savedGroups))
          return false;
        break;
      case "$nor":
        if (evalOr(obj, v, savedGroups))
          return false;
        break;
      case "$and":
        if (!evalAnd(obj, v, savedGroups))
          return false;
        break;
      case "$not":
        if (evalCondition(obj, v, savedGroups))
          return false;
        break;
      default:
        if (!evalConditionValue(v, getPath(obj, k), savedGroups))
          return false;
    }
  }
  return true;
}
function getPath(obj, path) {
  const parts = path.split(".");
  let current = obj;
  for (let i = 0;i < parts.length; i++) {
    if (current && typeof current === "object" && parts[i] in current) {
      current = current[parts[i]];
    } else {
      return null;
    }
  }
  return current;
}
function getRegex(regex, insensitive = false) {
  const cacheKey = `${regex}${insensitive ? "/i" : ""}`;
  if (!_regexCache[cacheKey]) {
    _regexCache[cacheKey] = new RegExp(regex.replace(/([^\\])\//g, "$1\\/"), insensitive ? "i" : undefined);
  }
  return _regexCache[cacheKey];
}
function evalConditionValue(condition, value, savedGroups, insensitive = false) {
  if (typeof condition === "string") {
    if (insensitive) {
      return String(value).toLowerCase() === condition.toLowerCase();
    }
    return value + "" === condition;
  }
  if (typeof condition === "number") {
    return value * 1 === condition;
  }
  if (typeof condition === "boolean") {
    return value !== null && !!value === condition;
  }
  if (condition === null) {
    return value === null;
  }
  if (Array.isArray(condition) || !isOperatorObject(condition)) {
    return JSON.stringify(value) === JSON.stringify(condition);
  }
  for (const op in condition) {
    if (!evalOperatorCondition(op, value, condition[op], savedGroups)) {
      return false;
    }
  }
  return true;
}
function isOperatorObject(obj) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.filter((k) => k[0] === "$").length === keys.length;
}
function getType(v) {
  if (v === null)
    return "null";
  if (Array.isArray(v))
    return "array";
  const t = typeof v;
  if (["string", "number", "boolean", "object", "undefined"].includes(t)) {
    return t;
  }
  return "unknown";
}
function elemMatch(actual, expected, savedGroups) {
  if (!Array.isArray(actual))
    return false;
  const check = isOperatorObject(expected) ? (v) => evalConditionValue(expected, v, savedGroups) : (v) => evalCondition(v, expected, savedGroups);
  for (let i = 0;i < actual.length; i++) {
    if (actual[i] && check(actual[i])) {
      return true;
    }
  }
  return false;
}
function isIn(actual, expected, insensitive = false) {
  if (insensitive) {
    const caseFold = (val) => typeof val === "string" ? val.toLowerCase() : val;
    if (Array.isArray(actual)) {
      return actual.some((el) => expected.some((exp) => caseFold(el) === caseFold(exp)));
    }
    return expected.some((exp) => caseFold(actual) === caseFold(exp));
  }
  if (Array.isArray(actual)) {
    return actual.some((el) => expected.includes(el));
  }
  return expected.includes(actual);
}
function isInAll(actual, expected, savedGroups, insensitive = false) {
  if (!Array.isArray(actual))
    return false;
  for (let i = 0;i < expected.length; i++) {
    let passed = false;
    for (let j = 0;j < actual.length; j++) {
      if (evalConditionValue(expected[i], actual[j], savedGroups, insensitive)) {
        passed = true;
        break;
      }
    }
    if (!passed)
      return false;
  }
  return true;
}
function evalOperatorCondition(operator, actual, expected, savedGroups) {
  switch (operator) {
    case "$veq":
      return paddedVersionString(actual) === paddedVersionString(expected);
    case "$vne":
      return paddedVersionString(actual) !== paddedVersionString(expected);
    case "$vgt":
      return paddedVersionString(actual) > paddedVersionString(expected);
    case "$vgte":
      return paddedVersionString(actual) >= paddedVersionString(expected);
    case "$vlt":
      return paddedVersionString(actual) < paddedVersionString(expected);
    case "$vlte":
      return paddedVersionString(actual) <= paddedVersionString(expected);
    case "$eq":
      return actual === expected;
    case "$ne":
      return actual !== expected;
    case "$lt":
      return actual < expected;
    case "$lte":
      return actual <= expected;
    case "$gt":
      return actual > expected;
    case "$gte":
      return actual >= expected;
    case "$exists":
      return expected ? actual != null : actual == null;
    case "$in":
      if (!Array.isArray(expected))
        return false;
      return isIn(actual, expected);
    case "$ini":
      if (!Array.isArray(expected))
        return false;
      return isIn(actual, expected, true);
    case "$inGroup":
      return isIn(actual, savedGroups[expected] || []);
    case "$notInGroup":
      return !isIn(actual, savedGroups[expected] || []);
    case "$nin":
      if (!Array.isArray(expected))
        return false;
      return !isIn(actual, expected);
    case "$nini":
      if (!Array.isArray(expected))
        return false;
      return !isIn(actual, expected, true);
    case "$not":
      return !evalConditionValue(expected, actual, savedGroups);
    case "$size":
      if (!Array.isArray(actual))
        return false;
      return evalConditionValue(expected, actual.length, savedGroups);
    case "$elemMatch":
      return elemMatch(actual, expected, savedGroups);
    case "$all":
      if (!Array.isArray(expected))
        return false;
      return isInAll(actual, expected, savedGroups);
    case "$alli":
      if (!Array.isArray(expected))
        return false;
      return isInAll(actual, expected, savedGroups, true);
    case "$regex":
      try {
        return getRegex(expected).test(actual);
      } catch (e) {
        return false;
      }
    case "$regexi":
      try {
        return getRegex(expected, true).test(actual);
      } catch (e) {
        return false;
      }
    case "$type":
      return getType(actual) === expected;
    default:
      console.error("Unknown operator: " + operator);
      return false;
  }
}
function evalOr(obj, conditions, savedGroups) {
  if (!conditions.length)
    return true;
  for (let i = 0;i < conditions.length; i++) {
    if (evalCondition(obj, conditions[i], savedGroups)) {
      return true;
    }
  }
  return false;
}
function evalAnd(obj, conditions, savedGroups) {
  for (let i = 0;i < conditions.length; i++) {
    if (!evalCondition(obj, conditions[i], savedGroups)) {
      return false;
    }
  }
  return true;
}
var _regexCache;
var init_mongrule = __esm(() => {
  init_util();
  _regexCache = {};
});

// node_modules/@growthbook/growthbook/dist/esm/core.mjs
function getForcedFeatureValues(ctx) {
  const ret = new Map;
  if (ctx.global.forcedFeatureValues) {
    ctx.global.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  if (ctx.user.forcedFeatureValues) {
    ctx.user.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  return ret;
}
function getForcedVariations(ctx) {
  if (ctx.global.forcedVariations && ctx.user.forcedVariations) {
    return {
      ...ctx.global.forcedVariations,
      ...ctx.user.forcedVariations
    };
  } else if (ctx.global.forcedVariations) {
    return ctx.global.forcedVariations;
  } else if (ctx.user.forcedVariations) {
    return ctx.user.forcedVariations;
  } else {
    return {};
  }
}
async function safeCall(fn) {
  try {
    await fn();
  } catch (e) {}
}
function onExperimentViewed(ctx, experiment, result) {
  if (ctx.user.trackedExperiments) {
    const k = getExperimentDedupeKey(experiment, result);
    if (ctx.user.trackedExperiments.has(k)) {
      return [];
    }
    ctx.user.trackedExperiments.add(k);
  }
  if (ctx.user.enableDevMode && ctx.user.devLogs) {
    ctx.user.devLogs.push({
      experiment,
      result,
      timestamp: Date.now().toString(),
      logType: "experiment"
    });
  }
  const calls = [];
  if (ctx.global.trackingCallback) {
    const cb = ctx.global.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result, ctx.user)));
  }
  if (ctx.user.trackingCallback) {
    const cb = ctx.user.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result)));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    calls.push(safeCall(() => cb(EVENT_EXPERIMENT_VIEWED, {
      experimentId: experiment.key,
      variationId: result.key,
      hashAttribute: result.hashAttribute,
      hashValue: result.hashValue
    }, ctx.user)));
  }
  return calls;
}
function onFeatureUsage(ctx, key, ret) {
  if (ctx.user.trackedFeatureUsage) {
    const stringifiedValue = JSON.stringify(ret.value);
    if (ctx.user.trackedFeatureUsage[key] === stringifiedValue)
      return;
    ctx.user.trackedFeatureUsage[key] = stringifiedValue;
    if (ctx.user.enableDevMode && ctx.user.devLogs) {
      ctx.user.devLogs.push({
        featureKey: key,
        result: ret,
        timestamp: Date.now().toString(),
        logType: "feature"
      });
    }
  }
  if (ctx.global.onFeatureUsage) {
    const cb = ctx.global.onFeatureUsage;
    safeCall(() => cb(key, ret, ctx.user));
  }
  if (ctx.user.onFeatureUsage) {
    const cb = ctx.user.onFeatureUsage;
    safeCall(() => cb(key, ret));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    safeCall(() => cb(EVENT_FEATURE_EVALUATED, {
      feature: key,
      source: ret.source,
      value: ret.value,
      ruleId: ret.source === "defaultValue" ? "$default" : ret.ruleId || "",
      variationId: ret.experimentResult ? ret.experimentResult.key : ""
    }, ctx.user));
  }
}
function evalFeature(id, ctx) {
  if (ctx.stack.evaluatedFeatures.has(id)) {
    ctx.global.log(`evalFeature: circular dependency detected: ${ctx.stack.id} -> ${id}`, {
      from: ctx.stack.id,
      to: id
    });
    return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
  }
  ctx.stack.evaluatedFeatures.add(id);
  ctx.stack.id = id;
  const forcedValues = getForcedFeatureValues(ctx);
  if (forcedValues.has(id)) {
    ctx.global.log("Global override", {
      id,
      value: forcedValues.get(id)
    });
    return getFeatureResult(ctx, id, forcedValues.get(id), "override");
  }
  if (!ctx.global.features || !ctx.global.features[id]) {
    ctx.global.log("Unknown feature", {
      id
    });
    return getFeatureResult(ctx, id, null, "unknownFeature");
  }
  const feature = ctx.global.features[id];
  if (feature.rules) {
    const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
    rules:
      for (const rule of feature.rules) {
        if (rule.parentConditions) {
          for (const parentCondition of rule.parentConditions) {
            ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
            const parentResult = evalFeature(parentCondition.id, ctx);
            if (parentResult.source === "cyclicPrerequisite") {
              return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
            }
            const evalObj = {
              value: parentResult.value
            };
            const evaled = evalCondition(evalObj, parentCondition.condition || {});
            if (!evaled) {
              if (parentCondition.gate) {
                ctx.global.log("Feature blocked by prerequisite", {
                  id,
                  rule
                });
                return getFeatureResult(ctx, id, null, "prerequisite");
              }
              ctx.global.log("Skip rule because prerequisite evaluation fails", {
                id,
                rule
              });
              continue rules;
            }
          }
        }
        if (rule.filters && isFilteredOut(rule.filters, ctx)) {
          ctx.global.log("Skip rule because of filters", {
            id,
            rule
          });
          continue;
        }
        if ("force" in rule) {
          if (rule.condition && !conditionPasses(rule.condition, ctx)) {
            ctx.global.log("Skip rule because of condition ff", {
              id,
              rule
            });
            continue;
          }
          if (!isIncludedInRollout(ctx, rule.seed || id, rule.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !rule.disableStickyBucketing ? rule.fallbackAttribute : undefined, rule.range, rule.coverage, rule.hashVersion)) {
            ctx.global.log("Skip rule because user not included in rollout", {
              id,
              rule
            });
            continue;
          }
          ctx.global.log("Force value from rule", {
            id,
            rule
          });
          if (rule.tracks) {
            rule.tracks.forEach((t) => {
              const calls = onExperimentViewed(ctx, t.experiment, t.result);
              if (!calls.length && ctx.global.saveDeferredTrack) {
                ctx.global.saveDeferredTrack({
                  experiment: t.experiment,
                  result: t.result
                });
              }
            });
          }
          return getFeatureResult(ctx, id, rule.force, "force", rule.id);
        }
        if (!rule.variations) {
          ctx.global.log("Skip invalid rule", {
            id,
            rule
          });
          continue;
        }
        const exp = {
          variations: rule.variations,
          key: rule.key || id
        };
        if ("coverage" in rule)
          exp.coverage = rule.coverage;
        if (rule.weights)
          exp.weights = rule.weights;
        if (rule.hashAttribute)
          exp.hashAttribute = rule.hashAttribute;
        if (rule.fallbackAttribute)
          exp.fallbackAttribute = rule.fallbackAttribute;
        if (rule.disableStickyBucketing)
          exp.disableStickyBucketing = rule.disableStickyBucketing;
        if (rule.bucketVersion !== undefined)
          exp.bucketVersion = rule.bucketVersion;
        if (rule.minBucketVersion !== undefined)
          exp.minBucketVersion = rule.minBucketVersion;
        if (rule.namespace)
          exp.namespace = rule.namespace;
        if (rule.meta)
          exp.meta = rule.meta;
        if (rule.ranges)
          exp.ranges = rule.ranges;
        if (rule.name)
          exp.name = rule.name;
        if (rule.phase)
          exp.phase = rule.phase;
        if (rule.seed)
          exp.seed = rule.seed;
        if (rule.hashVersion)
          exp.hashVersion = rule.hashVersion;
        if (rule.filters)
          exp.filters = rule.filters;
        if (rule.condition)
          exp.condition = rule.condition;
        const {
          result
        } = runExperiment(exp, id, ctx);
        ctx.global.onExperimentEval && ctx.global.onExperimentEval(exp, result);
        if (result.inExperiment && !result.passthrough) {
          return getFeatureResult(ctx, id, result.value, "experiment", rule.id, exp, result);
        }
      }
  }
  ctx.global.log("Use default value", {
    id,
    value: feature.defaultValue
  });
  return getFeatureResult(ctx, id, feature.defaultValue === undefined ? null : feature.defaultValue, "defaultValue");
}
function runExperiment(experiment, featureId, ctx) {
  const key = experiment.key;
  const numVariations = experiment.variations.length;
  if (numVariations < 2) {
    ctx.global.log("Invalid experiment", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if (ctx.global.enabled === false || ctx.user.enabled === false) {
    ctx.global.log("Context disabled", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  experiment = mergeOverrides(experiment, ctx);
  if (experiment.urlPatterns && !isURLTargeted(ctx.user.url || "", experiment.urlPatterns)) {
    ctx.global.log("Skip because of url targeting", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const qsOverride = getQueryStringOverride(key, ctx.user.url || "", numVariations);
  if (qsOverride !== null) {
    ctx.global.log("Force via querystring", {
      id: key,
      variation: qsOverride
    });
    return {
      result: getExperimentResult(ctx, experiment, qsOverride, false, featureId)
    };
  }
  const forcedVariations = getForcedVariations(ctx);
  if (key in forcedVariations) {
    const variation = forcedVariations[key];
    ctx.global.log("Force via dev tools", {
      id: key,
      variation
    });
    return {
      result: getExperimentResult(ctx, experiment, variation, false, featureId)
    };
  }
  if (experiment.status === "draft" || experiment.active === false) {
    ctx.global.log("Skip because inactive", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, experiment.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing ? experiment.fallbackAttribute : undefined);
  if (!hashValue) {
    ctx.global.log("Skip because missing hashAttribute", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  let assigned = -1;
  let foundStickyBucket = false;
  let stickyBucketVersionIsBlocked = false;
  if (ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing) {
    const {
      variation,
      versionIsBlocked
    } = getStickyBucketVariation({
      ctx,
      expKey: experiment.key,
      expBucketVersion: experiment.bucketVersion,
      expHashAttribute: experiment.hashAttribute,
      expFallbackAttribute: experiment.fallbackAttribute,
      expMinBucketVersion: experiment.minBucketVersion,
      expMeta: experiment.meta
    });
    foundStickyBucket = variation >= 0;
    assigned = variation;
    stickyBucketVersionIsBlocked = !!versionIsBlocked;
  }
  if (!foundStickyBucket) {
    if (experiment.filters) {
      if (isFilteredOut(experiment.filters, ctx)) {
        ctx.global.log("Skip because of filters", {
          id: key
        });
        return {
          result: getExperimentResult(ctx, experiment, -1, false, featureId)
        };
      }
    } else if (experiment.namespace && !inNamespace(hashValue, experiment.namespace)) {
      ctx.global.log("Skip because of namespace", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
    if (experiment.include && !isIncluded(experiment.include)) {
      ctx.global.log("Skip because of include function", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
    if (experiment.condition && !conditionPasses(experiment.condition, ctx)) {
      ctx.global.log("Skip because of condition exp", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
    if (experiment.parentConditions) {
      const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
      for (const parentCondition of experiment.parentConditions) {
        ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
        const parentResult = evalFeature(parentCondition.id, ctx);
        if (parentResult.source === "cyclicPrerequisite") {
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId)
          };
        }
        const evalObj = {
          value: parentResult.value
        };
        if (!evalCondition(evalObj, parentCondition.condition || {})) {
          ctx.global.log("Skip because prerequisite evaluation fails", {
            id: key
          });
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId)
          };
        }
      }
    }
    if (experiment.groups && !hasGroupOverlap(experiment.groups, ctx)) {
      ctx.global.log("Skip because of groups", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
  }
  if (experiment.url && !urlIsValid(experiment.url, ctx)) {
    ctx.global.log("Skip because of url", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const n = hash(experiment.seed || key, hashValue, experiment.hashVersion || 1);
  if (n === null) {
    ctx.global.log("Skip because of invalid hash version", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if (!foundStickyBucket) {
    const ranges = experiment.ranges || getBucketRanges(numVariations, experiment.coverage === undefined ? 1 : experiment.coverage, experiment.weights);
    assigned = chooseVariation(n, ranges);
  }
  if (stickyBucketVersionIsBlocked) {
    ctx.global.log("Skip because sticky bucket version is blocked", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId, undefined, true)
    };
  }
  if (assigned < 0) {
    ctx.global.log("Skip because of coverage", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if ("force" in experiment) {
    ctx.global.log("Force variation", {
      id: key,
      variation: experiment.force
    });
    return {
      result: getExperimentResult(ctx, experiment, experiment.force === undefined ? -1 : experiment.force, false, featureId)
    };
  }
  if (ctx.global.qaMode || ctx.user.qaMode) {
    ctx.global.log("Skip because QA mode", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if (experiment.status === "stopped") {
    ctx.global.log("Skip because stopped", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const result = getExperimentResult(ctx, experiment, assigned, true, featureId, n, foundStickyBucket);
  if (ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing) {
    const {
      changed,
      key: attrKey,
      doc
    } = generateStickyBucketAssignmentDoc(ctx, hashAttribute, toString(hashValue), {
      [getStickyBucketExperimentKey(experiment.key, experiment.bucketVersion)]: result.key
    });
    if (changed) {
      ctx.user.stickyBucketAssignmentDocs = ctx.user.stickyBucketAssignmentDocs || {};
      ctx.user.stickyBucketAssignmentDocs[attrKey] = doc;
      ctx.user.saveStickyBucketAssignmentDoc(doc);
    }
  }
  const trackingCalls = onExperimentViewed(ctx, experiment, result);
  if (trackingCalls.length === 0 && ctx.global.saveDeferredTrack) {
    ctx.global.saveDeferredTrack({
      experiment,
      result
    });
  }
  const trackingCall = !trackingCalls.length ? undefined : trackingCalls.length === 1 ? trackingCalls[0] : Promise.all(trackingCalls).then(() => {});
  "changeId" in experiment && experiment.changeId && ctx.global.recordChangeId && ctx.global.recordChangeId(experiment.changeId);
  ctx.global.log("In experiment", {
    id: key,
    variation: result.variationId
  });
  return {
    result,
    trackingCall
  };
}
function getFeatureResult(ctx, key, value, source, ruleId, experiment, result) {
  const ret = {
    value,
    on: !!value,
    off: !value,
    source,
    ruleId: ruleId || ""
  };
  if (experiment)
    ret.experiment = experiment;
  if (result)
    ret.experimentResult = result;
  if (source !== "override") {
    onFeatureUsage(ctx, key, ret);
  }
  return ret;
}
function getAttributes(ctx) {
  return {
    ...ctx.user.attributes,
    ...ctx.user.attributeOverrides
  };
}
function conditionPasses(condition, ctx) {
  return evalCondition(getAttributes(ctx), condition, ctx.global.savedGroups || {});
}
function isFilteredOut(filters, ctx) {
  return filters.some((filter) => {
    const {
      hashValue
    } = getHashAttribute(ctx, filter.attribute);
    if (!hashValue)
      return true;
    const n = hash(filter.seed, hashValue, filter.hashVersion || 2);
    if (n === null)
      return true;
    return !filter.ranges.some((r) => inRange(n, r));
  });
}
function isIncludedInRollout(ctx, seed, hashAttribute, fallbackAttribute, range, coverage, hashVersion) {
  if (!range && coverage === undefined)
    return true;
  if (!range && coverage === 0)
    return false;
  const {
    hashValue
  } = getHashAttribute(ctx, hashAttribute, fallbackAttribute);
  if (!hashValue) {
    return false;
  }
  const n = hash(seed, hashValue, hashVersion || 1);
  if (n === null)
    return false;
  return range ? inRange(n, range) : coverage !== undefined ? n <= coverage : true;
}
function getExperimentResult(ctx, experiment, variationIndex, hashUsed, featureId, bucket, stickyBucketUsed) {
  let inExperiment = true;
  if (variationIndex < 0 || variationIndex >= experiment.variations.length) {
    variationIndex = 0;
    inExperiment = false;
  }
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, experiment.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing ? experiment.fallbackAttribute : undefined);
  const meta = experiment.meta ? experiment.meta[variationIndex] : {};
  const res = {
    key: meta.key || "" + variationIndex,
    featureId,
    inExperiment,
    hashUsed,
    variationId: variationIndex,
    value: experiment.variations[variationIndex],
    hashAttribute,
    hashValue,
    stickyBucketUsed: !!stickyBucketUsed
  };
  if (meta.name)
    res.name = meta.name;
  if (bucket !== undefined)
    res.bucket = bucket;
  if (meta.passthrough)
    res.passthrough = meta.passthrough;
  return res;
}
function mergeOverrides(experiment, ctx) {
  const key = experiment.key;
  const o = ctx.global.overrides;
  if (o && o[key]) {
    experiment = Object.assign({}, experiment, o[key]);
    if (typeof experiment.url === "string") {
      experiment.url = getUrlRegExp(experiment.url);
    }
  }
  return experiment;
}
function getHashAttribute(ctx, attr, fallback) {
  let hashAttribute = attr || "id";
  let hashValue = "";
  const attributes = getAttributes(ctx);
  if (attributes[hashAttribute]) {
    hashValue = attributes[hashAttribute];
  }
  if (!hashValue && fallback) {
    if (attributes[fallback]) {
      hashValue = attributes[fallback];
    }
    if (hashValue) {
      hashAttribute = fallback;
    }
  }
  return {
    hashAttribute,
    hashValue
  };
}
function urlIsValid(urlRegex, ctx) {
  const url = ctx.user.url;
  if (!url)
    return false;
  const pathOnly = url.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
  if (urlRegex.test(url))
    return true;
  if (urlRegex.test(pathOnly))
    return true;
  return false;
}
function hasGroupOverlap(expGroups, ctx) {
  const groups = ctx.global.groups || {};
  for (let i = 0;i < expGroups.length; i++) {
    if (groups[expGroups[i]])
      return true;
  }
  return false;
}
function getStickyBucketVariation({
  ctx,
  expKey,
  expBucketVersion,
  expHashAttribute,
  expFallbackAttribute,
  expMinBucketVersion,
  expMeta
}) {
  expBucketVersion = expBucketVersion || 0;
  expMinBucketVersion = expMinBucketVersion || 0;
  expHashAttribute = expHashAttribute || "id";
  expMeta = expMeta || [];
  const id = getStickyBucketExperimentKey(expKey, expBucketVersion);
  const assignments = getStickyBucketAssignments(ctx, expHashAttribute, expFallbackAttribute);
  if (expMinBucketVersion > 0) {
    for (let i = 0;i < expMinBucketVersion; i++) {
      const blockedKey = getStickyBucketExperimentKey(expKey, i);
      if (assignments[blockedKey] !== undefined) {
        return {
          variation: -1,
          versionIsBlocked: true
        };
      }
    }
  }
  const variationKey = assignments[id];
  if (variationKey === undefined)
    return {
      variation: -1
    };
  const variation = expMeta.findIndex((m) => m.key === variationKey);
  if (variation < 0)
    return {
      variation: -1
    };
  return {
    variation
  };
}
function getStickyBucketExperimentKey(experimentKey, experimentBucketVersion) {
  experimentBucketVersion = experimentBucketVersion || 0;
  return `${experimentKey}__${experimentBucketVersion}`;
}
function getStickyBucketAttributeKey(attributeName, attributeValue) {
  return `${attributeName}||${attributeValue}`;
}
function getStickyBucketAssignments(ctx, expHashAttribute, expFallbackAttribute) {
  if (!ctx.user.stickyBucketAssignmentDocs)
    return {};
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, expHashAttribute);
  const hashKey = getStickyBucketAttributeKey(hashAttribute, toString(hashValue));
  const {
    hashAttribute: fallbackAttribute,
    hashValue: fallbackValue
  } = getHashAttribute(ctx, expFallbackAttribute);
  const fallbackKey = fallbackValue ? getStickyBucketAttributeKey(fallbackAttribute, toString(fallbackValue)) : null;
  const assignments = {};
  if (fallbackKey && ctx.user.stickyBucketAssignmentDocs[fallbackKey]) {
    Object.assign(assignments, ctx.user.stickyBucketAssignmentDocs[fallbackKey].assignments || {});
  }
  if (ctx.user.stickyBucketAssignmentDocs[hashKey]) {
    Object.assign(assignments, ctx.user.stickyBucketAssignmentDocs[hashKey].assignments || {});
  }
  return assignments;
}
function generateStickyBucketAssignmentDoc(ctx, attributeName, attributeValue, assignments) {
  const key = getStickyBucketAttributeKey(attributeName, attributeValue);
  const existingAssignments = ctx.user.stickyBucketAssignmentDocs && ctx.user.stickyBucketAssignmentDocs[key] ? ctx.user.stickyBucketAssignmentDocs[key].assignments || {} : {};
  const newAssignments = {
    ...existingAssignments,
    ...assignments
  };
  const changed = JSON.stringify(existingAssignments) !== JSON.stringify(newAssignments);
  return {
    key,
    doc: {
      attributeName,
      attributeValue,
      assignments: newAssignments
    },
    changed
  };
}
function deriveStickyBucketIdentifierAttributes(ctx, data) {
  const attributes = new Set;
  const features = data && data.features ? data.features : ctx.global.features || {};
  const experiments = data && data.experiments ? data.experiments : ctx.global.experiments || [];
  Object.keys(features).forEach((id) => {
    const feature = features[id];
    if (feature.rules) {
      for (const rule of feature.rules) {
        if (rule.variations) {
          attributes.add(rule.hashAttribute || "id");
          if (rule.fallbackAttribute) {
            attributes.add(rule.fallbackAttribute);
          }
        }
      }
    }
  });
  experiments.map((experiment) => {
    attributes.add(experiment.hashAttribute || "id");
    if (experiment.fallbackAttribute) {
      attributes.add(experiment.fallbackAttribute);
    }
  });
  return Array.from(attributes);
}
async function getAllStickyBucketAssignmentDocs(ctx, stickyBucketService, data) {
  const attributes = getStickyBucketAttributes(ctx, data);
  return stickyBucketService.getAllAssignments(attributes);
}
function getStickyBucketAttributes(ctx, data) {
  const attributes = {};
  const stickyBucketIdentifierAttributes = deriveStickyBucketIdentifierAttributes(ctx, data);
  stickyBucketIdentifierAttributes.forEach((attr) => {
    const {
      hashValue
    } = getHashAttribute(ctx, attr);
    attributes[attr] = toString(hashValue);
  });
  return attributes;
}
async function decryptPayload(data, decryptionKey, subtle) {
  data = {
    ...data
  };
  if (data.encryptedFeatures) {
    try {
      data.features = JSON.parse(await decrypt(data.encryptedFeatures, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedFeatures;
  }
  if (data.encryptedExperiments) {
    try {
      data.experiments = JSON.parse(await decrypt(data.encryptedExperiments, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedExperiments;
  }
  if (data.encryptedSavedGroups) {
    try {
      data.savedGroups = JSON.parse(await decrypt(data.encryptedSavedGroups, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedSavedGroups;
  }
  return data;
}
function getApiHosts(options) {
  const defaultHost = options.apiHost || "https://cdn.growthbook.io";
  return {
    apiHost: defaultHost.replace(/\/*$/, ""),
    streamingHost: (options.streamingHost || defaultHost).replace(/\/*$/, ""),
    apiRequestHeaders: options.apiHostRequestHeaders,
    streamingHostRequestHeaders: options.streamingHostRequestHeaders
  };
}
function getExperimentDedupeKey(experiment, result) {
  return result.hashAttribute + result.hashValue + experiment.key + result.variationId;
}
var EVENT_FEATURE_EVALUATED = "Feature Evaluated", EVENT_EXPERIMENT_VIEWED = "Experiment Viewed";
var init_core = __esm(() => {
  init_mongrule();
  init_util();
});

// node_modules/@growthbook/growthbook/dist/esm/GrowthBook.mjs
class GrowthBook {
  constructor(options) {
    options = options || {};
    this.version = SDK_VERSION;
    this._options = this.context = options;
    this._renderer = options.renderer || null;
    this._trackedExperiments = new Set;
    this._completedChangeIds = new Set;
    this._trackedFeatures = {};
    this.debug = !!options.debug;
    this._subscriptions = new Set;
    this.ready = false;
    this._assigned = new Map;
    this._activeAutoExperiments = new Map;
    this._triggeredExpKeys = new Set;
    this._initialized = false;
    this._redirectedUrl = "";
    this._deferredTrackingCalls = new Map;
    this._autoExperimentsAllowed = !options.disableExperimentsOnLoad;
    this._destroyCallbacks = [];
    this.logs = [];
    this.log = this.log.bind(this);
    this._saveDeferredTrack = this._saveDeferredTrack.bind(this);
    this._onExperimentEval = this._onExperimentEval.bind(this);
    this._fireSubscriptions = this._fireSubscriptions.bind(this);
    this._recordChangedId = this._recordChangedId.bind(this);
    if (options.remoteEval) {
      if (options.decryptionKey) {
        throw new Error("Encryption is not available for remoteEval");
      }
      if (!options.clientKey) {
        throw new Error("Missing clientKey");
      }
      let isGbHost = false;
      try {
        isGbHost = !!new URL(options.apiHost || "").hostname.match(/growthbook\.io$/i);
      } catch (e) {}
      if (isGbHost) {
        throw new Error("Cannot use remoteEval on GrowthBook Cloud");
      }
    } else {
      if (options.cacheKeyAttributes) {
        throw new Error("cacheKeyAttributes are only used for remoteEval");
      }
    }
    if (options.stickyBucketService) {
      const s = options.stickyBucketService;
      this._saveStickyBucketAssignmentDoc = (doc) => {
        return s.saveAssignments(doc);
      };
    }
    if (options.plugins) {
      for (const plugin of options.plugins) {
        plugin(this);
      }
    }
    if (options.features) {
      this.ready = true;
    }
    if (isBrowser && options.enableDevMode) {
      window._growthbook = this;
      document.dispatchEvent(new Event("gbloaded"));
    }
    if (options.experiments) {
      this.ready = true;
      this._updateAllAutoExperiments();
    }
    if (this._options.stickyBucketService && this._options.stickyBucketAssignmentDocs) {
      for (const key in this._options.stickyBucketAssignmentDocs) {
        const doc = this._options.stickyBucketAssignmentDocs[key];
        if (doc) {
          this._options.stickyBucketService.saveAssignments(doc).catch(() => {});
        }
      }
    }
    if (this.ready) {
      this.refreshStickyBuckets(this.getPayload());
    }
  }
  async setPayload(payload) {
    this._payload = payload;
    const data = await decryptPayload(payload, this._options.decryptionKey);
    this._decryptedPayload = data;
    await this.refreshStickyBuckets(data);
    if (data.features) {
      this._options.features = data.features;
    }
    if (data.savedGroups) {
      this._options.savedGroups = data.savedGroups;
    }
    if (data.experiments) {
      this._options.experiments = data.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    this._render();
  }
  initSync(options) {
    this._initialized = true;
    const payload = options.payload;
    if (payload.encryptedExperiments || payload.encryptedFeatures) {
      throw new Error("initSync does not support encrypted payloads");
    }
    if (this._options.stickyBucketService && !this._options.stickyBucketAssignmentDocs) {
      this._options.stickyBucketAssignmentDocs = this.generateStickyBucketAssignmentDocsSync(this._options.stickyBucketService, payload);
    }
    this._payload = payload;
    this._decryptedPayload = payload;
    if (payload.features) {
      this._options.features = payload.features;
    }
    if (payload.experiments) {
      this._options.experiments = payload.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    startStreaming(this, options);
    return this;
  }
  async init(options) {
    this._initialized = true;
    options = options || {};
    if (options.cacheSettings) {
      configureCache(options.cacheSettings);
    }
    if (options.payload) {
      await this.setPayload(options.payload);
      startStreaming(this, options);
      return {
        success: true,
        source: "init"
      };
    } else {
      const {
        data,
        ...res
      } = await this._refresh({
        ...options,
        allowStale: true
      });
      startStreaming(this, options);
      await this.setPayload(data || {});
      return res;
    }
  }
  async loadFeatures(options) {
    options = options || {};
    await this.init({
      skipCache: options.skipCache,
      timeout: options.timeout,
      streaming: (this._options.backgroundSync ?? true) && (options.autoRefresh || this._options.subscribeToChanges)
    });
  }
  async refreshFeatures(options) {
    const res = await this._refresh({
      ...options || {},
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getApiInfo() {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  getApiHosts() {
    return getApiHosts(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || {
      features: this.getFeatures(),
      experiments: this.getExperiments()
    };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
  }
  isRemoteEval() {
    return this._options.remoteEval || false;
  }
  getCacheKeyAttributes() {
    return this._options.cacheKeyAttributes;
  }
  async _refresh({
    timeout,
    skipCache,
    allowStale,
    streaming
  }) {
    if (!this._options.clientKey) {
      throw new Error("Missing clientKey");
    }
    return refreshFeatures({
      instance: this,
      timeout,
      skipCache: skipCache || this._options.disableCache,
      allowStale,
      backgroundSync: streaming ?? this._options.backgroundSync ?? true
    });
  }
  _render() {
    if (this._renderer) {
      try {
        this._renderer();
      } catch (e) {
        console.error("Failed to render", e);
      }
    }
  }
  setFeatures(features) {
    this._options.features = features;
    this.ready = true;
    this._render();
  }
  async setEncryptedFeatures(encryptedString, decryptionKey, subtle) {
    const featuresJSON = await decrypt(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setFeatures(JSON.parse(featuresJSON));
  }
  setExperiments(experiments) {
    this._options.experiments = experiments;
    this.ready = true;
    this._updateAllAutoExperiments();
  }
  async setEncryptedExperiments(encryptedString, decryptionKey, subtle) {
    const experimentsJSON = await decrypt(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setExperiments(JSON.parse(experimentsJSON));
  }
  async setAttributes(attributes) {
    this._options.attributes = attributes;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async updateAttributes(attributes) {
    return this.setAttributes({
      ...this._options.attributes,
      ...attributes
    });
  }
  async setAttributeOverrides(overrides) {
    this._options.attributeOverrides = overrides;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async setForcedVariations(vars) {
    this._options.forcedVariations = vars || {};
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  setForcedFeatures(map) {
    this._options.forcedFeatureValues = map;
    this._render();
  }
  async setURL(url) {
    if (url === this._options.url)
      return;
    this._options.url = url;
    this._redirectedUrl = "";
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      this._updateAllAutoExperiments(true);
      return;
    }
    this._updateAllAutoExperiments(true);
  }
  getAttributes() {
    return {
      ...this._options.attributes,
      ...this._options.attributeOverrides
    };
  }
  getForcedVariations() {
    return this._options.forcedVariations || {};
  }
  getForcedFeatures() {
    return this._options.forcedFeatureValues || new Map;
  }
  getStickyBucketAssignmentDocs() {
    return this._options.stickyBucketAssignmentDocs || {};
  }
  getUrl() {
    return this._options.url || "";
  }
  getFeatures() {
    return this._options.features || {};
  }
  getExperiments() {
    return this._options.experiments || [];
  }
  getCompletedChangeIds() {
    return Array.from(this._completedChangeIds);
  }
  subscribe(cb) {
    this._subscriptions.add(cb);
    return () => {
      this._subscriptions.delete(cb);
    };
  }
  async _refreshForRemoteEval() {
    if (!this._options.remoteEval)
      return;
    if (!this._initialized)
      return;
    const res = await this._refresh({
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getAllResults() {
    return new Map(this._assigned);
  }
  onDestroy(cb) {
    this._destroyCallbacks.push(cb);
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  destroy(options) {
    options = options || {};
    this._destroyed = true;
    this._destroyCallbacks.forEach((cb) => {
      try {
        cb();
      } catch (e) {
        console.error(e);
      }
    });
    this._subscriptions.clear();
    this._assigned.clear();
    this._trackedExperiments.clear();
    this._completedChangeIds.clear();
    this._deferredTrackingCalls.clear();
    this._trackedFeatures = {};
    this._destroyCallbacks = [];
    this._payload = undefined;
    this._saveStickyBucketAssignmentDoc = undefined;
    unsubscribe(this);
    if (options.destroyAllStreams) {
      clearAutoRefresh();
    }
    this.logs = [];
    if (isBrowser && window._growthbook === this) {
      delete window._growthbook;
    }
    this._activeAutoExperiments.forEach((exp) => {
      exp.undo();
    });
    this._activeAutoExperiments.clear();
    this._triggeredExpKeys.clear();
  }
  setRenderer(renderer) {
    this._renderer = renderer;
  }
  forceVariation(key, variation) {
    this._options.forcedVariations = this._options.forcedVariations || {};
    this._options.forcedVariations[key] = variation;
    if (this._options.remoteEval) {
      this._refreshForRemoteEval();
      return;
    }
    this._updateAllAutoExperiments();
    this._render();
  }
  run(experiment) {
    const {
      result
    } = runExperiment(experiment, null, this._getEvalContext());
    this._onExperimentEval(experiment, result);
    return result;
  }
  triggerExperiment(key) {
    this._triggeredExpKeys.add(key);
    if (!this._options.experiments)
      return null;
    const experiments = this._options.experiments.filter((exp) => exp.key === key);
    return experiments.map((exp) => {
      return this._runAutoExperiment(exp);
    }).filter((res) => res !== null);
  }
  triggerAutoExperiments() {
    this._autoExperimentsAllowed = true;
    this._updateAllAutoExperiments(true);
  }
  _getEvalContext() {
    return {
      user: this._getUserContext(),
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set
      }
    };
  }
  _getUserContext() {
    return {
      attributes: this._options.user ? {
        ...this._options.user,
        ...this._options.attributes
      } : this._options.attributes,
      enableDevMode: this._options.enableDevMode,
      blockedChangeIds: this._options.blockedChangeIds,
      stickyBucketAssignmentDocs: this._options.stickyBucketAssignmentDocs,
      url: this._getContextUrl(),
      forcedVariations: this._options.forcedVariations,
      forcedFeatureValues: this._options.forcedFeatureValues,
      attributeOverrides: this._options.attributeOverrides,
      saveStickyBucketAssignmentDoc: this._saveStickyBucketAssignmentDoc,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage,
      devLogs: this.logs,
      trackedExperiments: this._trackedExperiments,
      trackedFeatureUsage: this._trackedFeatures
    };
  }
  _getGlobalContext() {
    return {
      features: this._options.features,
      experiments: this._options.experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      groups: this._options.groups,
      overrides: this._options.overrides,
      onExperimentEval: this._onExperimentEval,
      recordChangeId: this._recordChangedId,
      saveDeferredTrack: this._saveDeferredTrack,
      eventLogger: this._options.eventLogger
    };
  }
  _runAutoExperiment(experiment, forceRerun) {
    const existing = this._activeAutoExperiments.get(experiment);
    if (experiment.manual && !this._triggeredExpKeys.has(experiment.key) && !existing)
      return null;
    const isBlocked = this._isAutoExperimentBlockedByContext(experiment);
    if (isBlocked) {
      this.log("Auto experiment blocked", {
        id: experiment.key
      });
    }
    let result;
    let trackingCall;
    if (isBlocked) {
      result = getExperimentResult(this._getEvalContext(), experiment, -1, false, "");
    } else {
      ({
        result,
        trackingCall
      } = runExperiment(experiment, null, this._getEvalContext()));
      this._onExperimentEval(experiment, result);
    }
    const valueHash = JSON.stringify(result.value);
    if (!forceRerun && result.inExperiment && existing && existing.valueHash === valueHash) {
      return result;
    }
    if (existing)
      this._undoActiveAutoExperiment(experiment);
    if (result.inExperiment) {
      const changeType = getAutoExperimentChangeType(experiment);
      if (changeType === "redirect" && result.value.urlRedirect && experiment.urlPatterns) {
        const url = experiment.persistQueryString ? mergeQueryStrings(this._getContextUrl(), result.value.urlRedirect) : result.value.urlRedirect;
        if (isURLTargeted(url, experiment.urlPatterns)) {
          this.log("Skipping redirect because original URL matches redirect URL", {
            id: experiment.key
          });
          return result;
        }
        this._redirectedUrl = url;
        const {
          navigate,
          delay
        } = this._getNavigateFunction();
        if (navigate) {
          if (isBrowser) {
            Promise.all([...trackingCall ? [promiseTimeout(trackingCall, this._options.maxNavigateDelay ?? 1000)] : [], new Promise((resolve) => window.setTimeout(resolve, this._options.navigateDelay ?? delay))]).then(() => {
              try {
                navigate(url);
              } catch (e) {
                console.error(e);
              }
            });
          } else {
            try {
              navigate(url);
            } catch (e) {
              console.error(e);
            }
          }
        }
      } else if (changeType === "visual") {
        const undo = this._options.applyDomChangesCallback ? this._options.applyDomChangesCallback(result.value) : this._applyDOMChanges(result.value);
        if (undo) {
          this._activeAutoExperiments.set(experiment, {
            undo,
            valueHash
          });
        }
      }
    }
    return result;
  }
  _undoActiveAutoExperiment(exp) {
    const data = this._activeAutoExperiments.get(exp);
    if (data) {
      data.undo();
      this._activeAutoExperiments.delete(exp);
    }
  }
  _updateAllAutoExperiments(forceRerun) {
    if (!this._autoExperimentsAllowed)
      return;
    const experiments = this._options.experiments || [];
    const keys = new Set(experiments);
    this._activeAutoExperiments.forEach((v, k) => {
      if (!keys.has(k)) {
        v.undo();
        this._activeAutoExperiments.delete(k);
      }
    });
    for (const exp of experiments) {
      const result = this._runAutoExperiment(exp, forceRerun);
      if (result && result.inExperiment && getAutoExperimentChangeType(exp) === "redirect") {
        break;
      }
    }
  }
  _onExperimentEval(experiment, result) {
    const prev = this._assigned.get(experiment.key);
    this._assigned.set(experiment.key, {
      experiment,
      result
    });
    if (this._subscriptions.size > 0) {
      this._fireSubscriptions(experiment, result, prev);
    }
  }
  _fireSubscriptions(experiment, result, prev) {
    if (!prev || prev.result.inExperiment !== result.inExperiment || prev.result.variationId !== result.variationId) {
      this._subscriptions.forEach((cb) => {
        try {
          cb(experiment, result);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }
  _recordChangedId(id) {
    this._completedChangeIds.add(id);
  }
  isOn(key) {
    return this.evalFeature(key).on;
  }
  isOff(key) {
    return this.evalFeature(key).off;
  }
  getFeatureValue(key, defaultValue) {
    const value = this.evalFeature(key).value;
    return value === null ? defaultValue : value;
  }
  feature(id) {
    return this.evalFeature(id);
  }
  evalFeature(id) {
    return evalFeature(id, this._getEvalContext());
  }
  log(msg, ctx) {
    if (!this.debug)
      return;
    if (this._options.log)
      this._options.log(msg, ctx);
    else
      console.log(msg, ctx);
  }
  getDeferredTrackingCalls() {
    return Array.from(this._deferredTrackingCalls.values());
  }
  setDeferredTrackingCalls(calls) {
    this._deferredTrackingCalls = new Map(calls.filter((c) => c && c.experiment && c.result).map((c) => {
      return [getExperimentDedupeKey(c.experiment, c.result), c];
    }));
  }
  async fireDeferredTrackingCalls() {
    if (!this._options.trackingCallback)
      return;
    const promises = [];
    this._deferredTrackingCalls.forEach((call) => {
      if (!call || !call.experiment || !call.result) {
        console.error("Invalid deferred tracking call", {
          call
        });
      } else {
        promises.push(this._options.trackingCallback(call.experiment, call.result));
      }
    });
    this._deferredTrackingCalls.clear();
    await Promise.all(promises);
  }
  setTrackingCallback(callback) {
    this._options.trackingCallback = callback;
    this.fireDeferredTrackingCalls();
  }
  setFeatureUsageCallback(callback) {
    this._options.onFeatureUsage = callback;
  }
  setEventLogger(logger) {
    this._options.eventLogger = logger;
  }
  async logEvent(eventName, properties) {
    if (this._destroyed) {
      console.error("Cannot log event to destroyed GrowthBook instance");
      return;
    }
    if (this._options.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event"
      });
    }
    if (this._options.eventLogger) {
      try {
        await this._options.eventLogger(eventName, properties || {}, this._getUserContext());
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("No event logger configured");
    }
  }
  _saveDeferredTrack(data) {
    this._deferredTrackingCalls.set(getExperimentDedupeKey(data.experiment, data.result), data);
  }
  _getContextUrl() {
    return this._options.url || (isBrowser ? window.location.href : "");
  }
  _isAutoExperimentBlockedByContext(experiment) {
    const changeType = getAutoExperimentChangeType(experiment);
    if (changeType === "visual") {
      if (this._options.disableVisualExperiments)
        return true;
      if (this._options.disableJsInjection) {
        if (experiment.variations.some((v) => v.js)) {
          return true;
        }
      }
    } else if (changeType === "redirect") {
      if (this._options.disableUrlRedirectExperiments)
        return true;
      try {
        const current = new URL(this._getContextUrl());
        for (const v of experiment.variations) {
          if (!v || !v.urlRedirect)
            continue;
          const url = new URL(v.urlRedirect);
          if (this._options.disableCrossOriginUrlRedirectExperiments) {
            if (url.protocol !== current.protocol)
              return true;
            if (url.host !== current.host)
              return true;
          }
        }
      } catch (e) {
        this.log("Error parsing current or redirect URL", {
          id: experiment.key,
          error: e
        });
        return true;
      }
    } else {
      return true;
    }
    if (experiment.changeId && (this._options.blockedChangeIds || []).includes(experiment.changeId)) {
      return true;
    }
    return false;
  }
  getRedirectUrl() {
    return this._redirectedUrl;
  }
  _getNavigateFunction() {
    if (this._options.navigate) {
      return {
        navigate: this._options.navigate,
        delay: 0
      };
    } else if (isBrowser) {
      return {
        navigate: (url) => {
          window.location.replace(url);
        },
        delay: 100
      };
    }
    return {
      navigate: null,
      delay: 0
    };
  }
  _applyDOMChanges(changes) {
    if (!isBrowser)
      return;
    const undo = [];
    if (changes.css) {
      const s = document.createElement("style");
      s.innerHTML = changes.css;
      document.head.appendChild(s);
      undo.push(() => s.remove());
    }
    if (changes.js) {
      const script = document.createElement("script");
      script.innerHTML = changes.js;
      if (this._options.jsInjectionNonce) {
        script.nonce = this._options.jsInjectionNonce;
      }
      document.head.appendChild(script);
      undo.push(() => script.remove());
    }
    if (changes.domMutations) {
      changes.domMutations.forEach((mutation) => {
        undo.push(dom_mutator_esm_default.declarative(mutation).revert);
      });
    }
    return () => {
      undo.forEach((fn) => fn());
    };
  }
  async refreshStickyBuckets(data) {
    if (this._options.stickyBucketService) {
      const ctx = this._getEvalContext();
      const docs = await getAllStickyBucketAssignmentDocs(ctx, this._options.stickyBucketService, data);
      this._options.stickyBucketAssignmentDocs = docs;
    }
  }
  generateStickyBucketAssignmentDocsSync(stickyBucketService, payload) {
    if (!("getAllAssignmentsSync" in stickyBucketService)) {
      console.error("generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync");
      return;
    }
    const ctx = this._getEvalContext();
    const attributes = getStickyBucketAttributes(ctx, payload);
    return stickyBucketService.getAllAssignmentsSync(attributes);
  }
  inDevMode() {
    return !!this._options.enableDevMode;
  }
}
var isBrowser, SDK_VERSION;
var init_GrowthBook = __esm(() => {
  init_dom_mutator_esm();
  init_util();
  init_feature_repository();
  init_core();
  isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  SDK_VERSION = loadSDKVersion();
});

// node_modules/@growthbook/growthbook/dist/esm/index.mjs
var init_esm = __esm(() => {
  init_GrowthBook();
});

// node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
  return _baseIsEqual_default(value, other);
}
var isEqual_default;
var init_isEqual = __esm(() => {
  init__baseIsEqual();
  isEqual_default = isEqual;
});

// node_modules/lodash-es/lodash.js
var init_lodash = __esm(() => {
  init_isEqual();
  init_memoize();
});

// src/constants/keys.ts
function getGrowthBookClientKey() {
  return "sdk-zAZezfDKGoZuXXKe";
}
var init_keys = __esm(() => {
  init_envUtils();
});

// node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = _castPath_default(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = _toKey_default(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_default(objValue) ? objValue : _isIndex_default(path[index2 + 1]) ? [] : {};
      }
    }
    _assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet_default;
var init__baseSet = __esm(() => {
  init__assignValue();
  init__castPath();
  init__isIndex();
  init_isObject();
  init__toKey();
  _baseSet_default = baseSet;
});

// node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = _baseGet_default(object, path);
    if (predicate(value, path)) {
      _baseSet_default(result, _castPath_default(path, object), value);
    }
  }
  return result;
}
var _basePickBy_default;
var init__basePickBy = __esm(() => {
  init__baseGet();
  init__baseSet();
  init__castPath();
  _basePickBy_default = basePickBy;
});

// node_modules/lodash-es/pickBy.js
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap_default(_getAllKeysIn_default(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee_default(predicate);
  return _basePickBy_default(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_default;
var init_pickBy = __esm(() => {
  init__arrayMap();
  init__baseIteratee();
  init__basePickBy();
  init__getAllKeysIn();
  pickBy_default = pickBy;
});

// src/memdir/paths.ts
import { homedir } from "os";
import { isAbsolute, join as join2, normalize, sep } from "path";
function isAutoMemoryEnabled() {
  const envVal = process.env.CLAUDE_CODE_DISABLE_AUTO_MEMORY;
  if (isEnvTruthy(envVal)) {
    return false;
  }
  if (isEnvDefinedFalsy(envVal)) {
    return true;
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_SIMPLE)) {
    return false;
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) && !process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR) {
    return false;
  }
  const settings = getInitialSettings();
  if (settings.autoMemoryEnabled !== undefined) {
    return settings.autoMemoryEnabled;
  }
  return true;
}
function getMemoryBaseDir() {
  if (process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR) {
    return process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  }
  return getClaudeConfigHomeDir();
}
function validateMemoryPath(raw, expandTilde) {
  if (!raw) {
    return;
  }
  let candidate = raw;
  if (expandTilde && (candidate.startsWith("~/") || candidate.startsWith("~\\"))) {
    const rest = candidate.slice(2);
    const restNorm = normalize(rest || ".");
    if (restNorm === "." || restNorm === "..") {
      return;
    }
    candidate = join2(homedir(), rest);
  }
  const normalized = normalize(candidate).replace(/[/\\]+$/, "");
  if (!isAbsolute(normalized) || normalized.length < 3 || /^[A-Za-z]:$/.test(normalized) || normalized.startsWith("\\\\") || normalized.startsWith("//") || normalized.includes("\x00")) {
    return;
  }
  return (normalized + sep).normalize("NFC");
}
function getAutoMemPathOverride() {
  return validateMemoryPath(process.env.CLAUDE_COWORK_MEMORY_PATH_OVERRIDE, false);
}
function getAutoMemPathSetting() {
  const dir = getSettingsForSource("policySettings")?.autoMemoryDirectory ?? getSettingsForSource("flagSettings")?.autoMemoryDirectory ?? getSettingsForSource("localSettings")?.autoMemoryDirectory ?? getSettingsForSource("userSettings")?.autoMemoryDirectory;
  return validateMemoryPath(dir, true);
}
function hasAutoMemPathOverride() {
  return getAutoMemPathOverride() !== undefined;
}
function getAutoMemBase() {
  return findCanonicalGitRoot(getProjectRoot()) ?? getProjectRoot();
}
function getAutoMemEntrypoint() {
  return join2(getAutoMemPath(), AUTO_MEM_ENTRYPOINT_NAME);
}
function isAutoMemPath(absolutePath) {
  const normalizedPath = normalize(absolutePath);
  return normalizedPath.startsWith(getAutoMemPath());
}
var AUTO_MEM_DIRNAME = "memory", AUTO_MEM_ENTRYPOINT_NAME = "MEMORY.md", getAutoMemPath;
var init_paths = __esm(() => {
  init_memoize();
  init_state();
  init_growthbook();
  init_envUtils();
  init_git();
  init_path();
  init_settings2();
  getAutoMemPath = memoize_default(() => {
    const override = getAutoMemPathOverride() ?? getAutoMemPathSetting();
    if (override) {
      return override;
    }
    const projectsDir = join2(getMemoryBaseDir(), "projects");
    return (join2(projectsDir, sanitizePath(getAutoMemBase()), AUTO_MEM_DIRNAME) + sep).normalize("NFC");
  }, () => getProjectRoot());
});

// src/utils/settings/managedPath.ts
import { join as join3 } from "path";
var getManagedFilePath, getManagedSettingsDropInDir;
var init_managedPath = __esm(() => {
  init_memoize();
  init_platform();
  getManagedFilePath = memoize_default(function() {
    if (false) {}
    switch (getPlatform()) {
      case "macos":
        return "/Library/Application Support/ClaudeCode";
      case "windows":
        return "C:\\Program Files\\ClaudeCode";
      default:
        return "/etc/claude-code";
    }
  });
  getManagedSettingsDropInDir = memoize_default(function() {
    return join3(getManagedFilePath(), "managed-settings.d");
  });
});

// src/utils/configConstants.ts
var NOTIFICATION_CHANNELS, EDITOR_MODES, TEAMMATE_MODES;
var init_configConstants = __esm(() => {
  NOTIFICATION_CHANNELS = [
    "auto",
    "iterm2",
    "iterm2_with_bell",
    "terminal_bell",
    "kitty",
    "ghostty",
    "notifications_disabled"
  ];
  EDITOR_MODES = ["normal", "vim"];
  TEAMMATE_MODES = ["auto", "tmux", "in-process"];
});

// src/utils/config.ts
import { randomBytes } from "crypto";
import { unwatchFile, watchFile } from "fs";
import { basename, dirname, join as join4, resolve } from "path";
function createDefaultGlobalConfig() {
  return {
    numStartups: 0,
    installMethod: undefined,
    autoUpdates: undefined,
    theme: "dark",
    preferredNotifChannel: "auto",
    verbose: false,
    editorMode: "normal",
    autoCompactEnabled: true,
    showTurnDuration: true,
    hasSeenTasksHint: false,
    hasUsedStash: false,
    hasUsedBackgroundTask: false,
    queuedCommandUpHintCount: 0,
    diffTool: "auto",
    customApiKeyResponses: {
      approved: [],
      rejected: []
    },
    env: {},
    tipsHistory: {},
    memoryUsageCount: 0,
    promptQueueUseCount: 0,
    btwUseCount: 0,
    todoFeatureEnabled: true,
    showExpandedTodos: false,
    messageIdleNotifThresholdMs: 60000,
    autoConnectIde: false,
    autoInstallIdeExtension: true,
    fileCheckpointingEnabled: true,
    terminalProgressBarEnabled: true,
    cachedStatsigGates: {},
    cachedDynamicConfigs: {},
    cachedGrowthBookFeatures: {},
    respectGitignore: true,
    copyFullResponse: false
  };
}
function isGlobalConfigKey(key) {
  return GLOBAL_CONFIG_KEYS.includes(key);
}
function resetTrustDialogAcceptedCacheForTesting() {
  _trustAccepted = false;
}
function checkHasTrustDialogAccepted() {
  return _trustAccepted ||= computeTrustDialogAccepted();
}
function computeTrustDialogAccepted() {
  if (getSessionTrustAccepted()) {
    return true;
  }
  const config = getGlobalConfig();
  const projectPath = getProjectPathForConfig();
  const projectConfig = config.projects?.[projectPath];
  if (projectConfig?.hasTrustDialogAccepted) {
    return true;
  }
  let currentPath = normalizePathForConfigKey(getCwd());
  while (true) {
    const pathConfig = config.projects?.[currentPath];
    if (pathConfig?.hasTrustDialogAccepted) {
      return true;
    }
    const parentPath = normalizePathForConfigKey(resolve(currentPath, ".."));
    if (parentPath === currentPath) {
      break;
    }
    currentPath = parentPath;
  }
  return false;
}
function isPathTrusted(dir) {
  const config = getGlobalConfig();
  let currentPath = normalizePathForConfigKey(resolve(dir));
  while (true) {
    if (config.projects?.[currentPath]?.hasTrustDialogAccepted)
      return true;
    const parentPath = normalizePathForConfigKey(resolve(currentPath, ".."));
    if (parentPath === currentPath)
      return false;
    currentPath = parentPath;
  }
}
function isProjectConfigKey(key) {
  return PROJECT_CONFIG_KEYS.includes(key);
}
function wouldLoseAuthState(fresh) {
  const cached = globalConfigCache.config;
  if (!cached)
    return false;
  const lostOauth = cached.oauthAccount !== undefined && fresh.oauthAccount === undefined;
  const lostOnboarding = cached.hasCompletedOnboarding === true && fresh.hasCompletedOnboarding !== true;
  return lostOauth || lostOnboarding;
}
function saveGlobalConfig(updater) {
  if (false) {}
  let written = null;
  try {
    const didWrite = saveConfigWithLock(getGlobalClaudeFile(), createDefaultGlobalConfig, (current) => {
      const config = updater(current);
      if (config === current) {
        return current;
      }
      written = {
        ...config,
        projects: removeProjectHistory(current.projects)
      };
      return written;
    });
    if (didWrite && written) {
      writeThroughGlobalConfigCache(written);
    }
  } catch (error) {
    logForDebugging(`Failed to save config with lock: ${error}`, {
      level: "error"
    });
    const currentConfig = getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig);
    if (wouldLoseAuthState(currentConfig)) {
      logForDebugging("saveGlobalConfig fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.", { level: "error" });
      logEvent("tengu_config_auth_loss_prevented", {});
      return;
    }
    const config = updater(currentConfig);
    if (config === currentConfig) {
      return;
    }
    written = {
      ...config,
      projects: removeProjectHistory(currentConfig.projects)
    };
    saveConfig(getGlobalClaudeFile(), written, DEFAULT_GLOBAL_CONFIG);
    writeThroughGlobalConfigCache(written);
  }
}
function getGlobalConfigWriteCount() {
  return globalConfigWriteCount;
}
function reportConfigCacheStats() {
  const total = configCacheHits + configCacheMisses;
  if (total > 0) {
    logEvent("tengu_config_cache_stats", {
      cache_hits: configCacheHits,
      cache_misses: configCacheMisses,
      hit_rate: configCacheHits / total
    });
  }
  configCacheHits = 0;
  configCacheMisses = 0;
}
function migrateConfigFields(config) {
  if (config.installMethod !== undefined) {
    return config;
  }
  const legacy = config;
  let installMethod = "unknown";
  let autoUpdates = config.autoUpdates ?? true;
  switch (legacy.autoUpdaterStatus) {
    case "migrated":
      installMethod = "local";
      break;
    case "installed":
      installMethod = "native";
      break;
    case "disabled":
      autoUpdates = false;
      break;
    case "enabled":
    case "no_permissions":
    case "not_configured":
      installMethod = "global";
      break;
    case undefined:
      break;
  }
  return {
    ...config,
    installMethod,
    autoUpdates
  };
}
function removeProjectHistory(projects) {
  if (!projects) {
    return projects;
  }
  const cleanedProjects = {};
  let needsCleaning = false;
  for (const [path, projectConfig] of Object.entries(projects)) {
    const legacy = projectConfig;
    if (legacy.history !== undefined) {
      needsCleaning = true;
      const { history, ...cleanedConfig } = legacy;
      cleanedProjects[path] = cleanedConfig;
    } else {
      cleanedProjects[path] = projectConfig;
    }
  }
  return needsCleaning ? cleanedProjects : projects;
}
function startGlobalConfigFreshnessWatcher() {
  if (freshnessWatcherStarted || false)
    return;
  freshnessWatcherStarted = true;
  const file = getGlobalClaudeFile();
  watchFile(file, { interval: CONFIG_FRESHNESS_POLL_MS, persistent: false }, (curr) => {
    if (curr.mtimeMs <= globalConfigCache.mtime)
      return;
    getFsImplementation().readFile(file, { encoding: "utf-8" }).then((content) => {
      if (curr.mtimeMs <= globalConfigCache.mtime)
        return;
      const parsed = safeParseJSON(stripBOM(content));
      if (parsed === null || typeof parsed !== "object")
        return;
      globalConfigCache = {
        config: migrateConfigFields({
          ...createDefaultGlobalConfig(),
          ...parsed
        }),
        mtime: curr.mtimeMs
      };
      lastReadFileStats = { mtime: curr.mtimeMs, size: curr.size };
    }).catch(() => {});
  });
  registerCleanup(async () => {
    unwatchFile(file);
    freshnessWatcherStarted = false;
  });
}
function writeThroughGlobalConfigCache(config) {
  globalConfigCache = { config, mtime: Date.now() };
  lastReadFileStats = null;
}
function getGlobalConfig() {
  if (false) {}
  if (globalConfigCache.config) {
    configCacheHits++;
    return globalConfigCache.config;
  }
  configCacheMisses++;
  try {
    let stats = null;
    try {
      stats = getFsImplementation().statSync(getGlobalClaudeFile());
    } catch {}
    const config = migrateConfigFields(getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig));
    globalConfigCache = {
      config,
      mtime: stats?.mtimeMs ?? Date.now()
    };
    lastReadFileStats = stats ? { mtime: stats.mtimeMs, size: stats.size } : null;
    startGlobalConfigFreshnessWatcher();
    return config;
  } catch {
    return migrateConfigFields(getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig));
  }
}
function getRemoteControlAtStartup() {
  const explicit = getGlobalConfig().remoteControlAtStartup;
  if (explicit !== undefined)
    return explicit;
  if (false) {}
  return false;
}
function getCustomApiKeyStatus(truncatedApiKey) {
  const config = getGlobalConfig();
  if (config.customApiKeyResponses?.approved?.includes(truncatedApiKey)) {
    return "approved";
  }
  if (config.customApiKeyResponses?.rejected?.includes(truncatedApiKey)) {
    return "rejected";
  }
  return "new";
}
function saveConfig(file, config, defaultConfig) {
  const dir = dirname(file);
  const fs = getFsImplementation();
  fs.mkdirSync(dir);
  const filteredConfig = pickBy_default(config, (value, key) => jsonStringify(value) !== jsonStringify(defaultConfig[key]));
  writeFileSyncAndFlush_DEPRECATED(file, jsonStringify(filteredConfig, null, 2), {
    encoding: "utf-8",
    mode: 384
  });
  if (file === getGlobalClaudeFile()) {
    globalConfigWriteCount++;
  }
}
function saveConfigWithLock(file, createDefault, mergeFn) {
  const defaultConfig = createDefault();
  const dir = dirname(file);
  const fs = getFsImplementation();
  fs.mkdirSync(dir);
  let release;
  try {
    const lockFilePath = `${file}.lock`;
    const startTime = Date.now();
    release = lockSync(file, {
      lockfilePath: lockFilePath,
      onCompromised: (err) => {
        logForDebugging(`Config lock compromised: ${err}`, { level: "error" });
      }
    });
    const lockTime = Date.now() - startTime;
    if (lockTime > 100) {
      logForDebugging("Lock acquisition took longer than expected - another Claude instance may be running");
      logEvent("tengu_config_lock_contention", {
        lock_time_ms: lockTime
      });
    }
    if (lastReadFileStats && file === getGlobalClaudeFile()) {
      try {
        const currentStats = fs.statSync(file);
        if (currentStats.mtimeMs !== lastReadFileStats.mtime || currentStats.size !== lastReadFileStats.size) {
          logEvent("tengu_config_stale_write", {
            read_mtime: lastReadFileStats.mtime,
            write_mtime: currentStats.mtimeMs,
            read_size: lastReadFileStats.size,
            write_size: currentStats.size
          });
        }
      } catch (e) {
        const code = getErrnoCode(e);
        if (code !== "ENOENT") {
          throw e;
        }
      }
    }
    const currentConfig = getConfig(file, createDefault);
    if (file === getGlobalClaudeFile() && wouldLoseAuthState(currentConfig)) {
      logForDebugging("saveConfigWithLock: re-read config is missing auth that cache has; refusing to write to avoid wiping ~/.claude.json. See GH #3117.", { level: "error" });
      logEvent("tengu_config_auth_loss_prevented", {});
      return false;
    }
    const mergedConfig = mergeFn(currentConfig);
    if (mergedConfig === currentConfig) {
      return false;
    }
    const filteredConfig = pickBy_default(mergedConfig, (value, key) => jsonStringify(value) !== jsonStringify(defaultConfig[key]));
    try {
      const fileBase = basename(file);
      const backupDir = getConfigBackupDir();
      try {
        fs.mkdirSync(backupDir);
      } catch (mkdirErr) {
        const mkdirCode = getErrnoCode(mkdirErr);
        if (mkdirCode !== "EEXIST") {
          throw mkdirErr;
        }
      }
      const MIN_BACKUP_INTERVAL_MS = 60000;
      const existingBackups = fs.readdirStringSync(backupDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort().reverse();
      const mostRecentBackup = existingBackups[0];
      const mostRecentTimestamp = mostRecentBackup ? Number(mostRecentBackup.split(".backup.").pop()) : 0;
      const shouldCreateBackup = Number.isNaN(mostRecentTimestamp) || Date.now() - mostRecentTimestamp >= MIN_BACKUP_INTERVAL_MS;
      if (shouldCreateBackup) {
        const backupPath = join4(backupDir, `${fileBase}.backup.${Date.now()}`);
        fs.copyFileSync(file, backupPath);
      }
      const MAX_BACKUPS = 5;
      const backupsForCleanup = shouldCreateBackup ? fs.readdirStringSync(backupDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort().reverse() : existingBackups;
      for (const oldBackup of backupsForCleanup.slice(MAX_BACKUPS)) {
        try {
          fs.unlinkSync(join4(backupDir, oldBackup));
        } catch {}
      }
    } catch (e) {
      const code = getErrnoCode(e);
      if (code !== "ENOENT") {
        logForDebugging(`Failed to backup config: ${e}`, {
          level: "error"
        });
      }
    }
    writeFileSyncAndFlush_DEPRECATED(file, jsonStringify(filteredConfig, null, 2), {
      encoding: "utf-8",
      mode: 384
    });
    if (file === getGlobalClaudeFile()) {
      globalConfigWriteCount++;
    }
    return true;
  } finally {
    if (release) {
      release();
    }
  }
}
function enableConfigs() {
  if (configReadingAllowed) {
    return;
  }
  const startTime = Date.now();
  logForDiagnosticsNoPII("info", "enable_configs_started");
  configReadingAllowed = true;
  getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig, true);
  logForDiagnosticsNoPII("info", "enable_configs_completed", {
    duration_ms: Date.now() - startTime
  });
}
function getConfigBackupDir() {
  return join4(getClaudeConfigHomeDir(), "backups");
}
function findMostRecentBackup(file) {
  const fs = getFsImplementation();
  const fileBase = basename(file);
  const backupDir = getConfigBackupDir();
  try {
    const backups = fs.readdirStringSync(backupDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort();
    const mostRecent = backups.at(-1);
    if (mostRecent) {
      return join4(backupDir, mostRecent);
    }
  } catch {}
  const fileDir = dirname(file);
  try {
    const backups = fs.readdirStringSync(fileDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort();
    const mostRecent = backups.at(-1);
    if (mostRecent) {
      return join4(fileDir, mostRecent);
    }
    const legacyBackup = `${file}.backup`;
    try {
      fs.statSync(legacyBackup);
      return legacyBackup;
    } catch {}
  } catch {}
  return null;
}
function getConfig(file, createDefault, throwOnInvalid) {
  if (!configReadingAllowed && true) {
    throw new Error("Config accessed before allowed.");
  }
  const fs = getFsImplementation();
  try {
    const fileContent = fs.readFileSync(file, {
      encoding: "utf-8"
    });
    try {
      const parsedConfig = jsonParse(stripBOM(fileContent));
      return {
        ...createDefault(),
        ...parsedConfig
      };
    } catch (error) {
      const errorMessage2 = error instanceof Error ? error.message : String(error);
      throw new ConfigParseError(errorMessage2, file, createDefault());
    }
  } catch (error) {
    const errCode = getErrnoCode(error);
    if (errCode === "ENOENT") {
      const backupPath = findMostRecentBackup(file);
      if (backupPath) {
        process.stderr.write(`
Claude configuration file not found at: ${file}
` + `A backup file exists at: ${backupPath}
` + `You can manually restore it by running: cp "${backupPath}" "${file}"

`);
      }
      return createDefault();
    }
    if (error instanceof ConfigParseError && throwOnInvalid) {
      throw error;
    }
    if (error instanceof ConfigParseError) {
      logForDebugging(`Config file corrupted, resetting to defaults: ${error.message}`, { level: "error" });
      if (!insideGetConfig) {
        insideGetConfig = true;
        try {
          logError(error);
          let hasBackup = false;
          try {
            fs.statSync(`${file}.backup`);
            hasBackup = true;
          } catch {}
          logEvent("tengu_config_parse_error", {
            has_backup: hasBackup
          });
        } finally {
          insideGetConfig = false;
        }
      }
      process.stderr.write(`
Claude configuration file at ${file} is corrupted: ${error.message}
`);
      const fileBase = basename(file);
      const corruptedBackupDir = getConfigBackupDir();
      try {
        fs.mkdirSync(corruptedBackupDir);
      } catch (mkdirErr) {
        const mkdirCode = getErrnoCode(mkdirErr);
        if (mkdirCode !== "EEXIST") {
          throw mkdirErr;
        }
      }
      const existingCorruptedBackups = fs.readdirStringSync(corruptedBackupDir).filter((f) => f.startsWith(`${fileBase}.corrupted.`));
      let corruptedBackupPath;
      let alreadyBackedUp = false;
      const currentContent = fs.readFileSync(file, { encoding: "utf-8" });
      for (const backup of existingCorruptedBackups) {
        try {
          const backupContent = fs.readFileSync(join4(corruptedBackupDir, backup), { encoding: "utf-8" });
          if (currentContent === backupContent) {
            alreadyBackedUp = true;
            break;
          }
        } catch {}
      }
      if (!alreadyBackedUp) {
        corruptedBackupPath = join4(corruptedBackupDir, `${fileBase}.corrupted.${Date.now()}`);
        try {
          fs.copyFileSync(file, corruptedBackupPath);
          logForDebugging(`Corrupted config backed up to: ${corruptedBackupPath}`, {
            level: "error"
          });
        } catch {}
      }
      const backupPath = findMostRecentBackup(file);
      if (corruptedBackupPath) {
        process.stderr.write(`The corrupted file has been backed up to: ${corruptedBackupPath}
`);
      } else if (alreadyBackedUp) {
        process.stderr.write(`The corrupted file has already been backed up.
`);
      }
      if (backupPath) {
        process.stderr.write(`A backup file exists at: ${backupPath}
` + `You can manually restore it by running: cp "${backupPath}" "${file}"

`);
      } else {
        process.stderr.write(`
`);
      }
    }
    return createDefault();
  }
}
function getCurrentProjectConfig() {
  if (false) {}
  const absolutePath = getProjectPathForConfig();
  const config = getGlobalConfig();
  if (!config.projects) {
    return DEFAULT_PROJECT_CONFIG;
  }
  const projectConfig = config.projects[absolutePath] ?? DEFAULT_PROJECT_CONFIG;
  if (typeof projectConfig.allowedTools === "string") {
    projectConfig.allowedTools = safeParseJSON(projectConfig.allowedTools) ?? [];
  }
  return projectConfig;
}
function saveCurrentProjectConfig(updater) {
  if (false) {}
  const absolutePath = getProjectPathForConfig();
  let written = null;
  try {
    const didWrite = saveConfigWithLock(getGlobalClaudeFile(), createDefaultGlobalConfig, (current) => {
      const currentProjectConfig = current.projects?.[absolutePath] ?? DEFAULT_PROJECT_CONFIG;
      const newProjectConfig = updater(currentProjectConfig);
      if (newProjectConfig === currentProjectConfig) {
        return current;
      }
      written = {
        ...current,
        projects: {
          ...current.projects,
          [absolutePath]: newProjectConfig
        }
      };
      return written;
    });
    if (didWrite && written) {
      writeThroughGlobalConfigCache(written);
    }
  } catch (error) {
    logForDebugging(`Failed to save config with lock: ${error}`, {
      level: "error"
    });
    const config = getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig);
    if (wouldLoseAuthState(config)) {
      logForDebugging("saveCurrentProjectConfig fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.", { level: "error" });
      logEvent("tengu_config_auth_loss_prevented", {});
      return;
    }
    const currentProjectConfig = config.projects?.[absolutePath] ?? DEFAULT_PROJECT_CONFIG;
    const newProjectConfig = updater(currentProjectConfig);
    if (newProjectConfig === currentProjectConfig) {
      return;
    }
    written = {
      ...config,
      projects: {
        ...config.projects,
        [absolutePath]: newProjectConfig
      }
    };
    saveConfig(getGlobalClaudeFile(), written, DEFAULT_GLOBAL_CONFIG);
    writeThroughGlobalConfigCache(written);
  }
}
function isAutoUpdaterDisabled() {
  return getAutoUpdaterDisabledReason() !== null;
}
function shouldSkipPluginAutoupdate() {
  return isAutoUpdaterDisabled() && !isEnvTruthy(process.env.FORCE_AUTOUPDATE_PLUGINS);
}
function formatAutoUpdaterDisabledReason(reason) {
  switch (reason.type) {
    case "development":
      return "development build";
    case "env":
      return `${reason.envVar} set`;
    case "config":
      return "config";
  }
}
function getAutoUpdaterDisabledReason() {
  if (true) {
    return { type: "development" };
  }
  if (isEnvTruthy(process.env.DISABLE_AUTOUPDATER)) {
    return { type: "env", envVar: "DISABLE_AUTOUPDATER" };
  }
  const essentialTrafficEnvVar = getEssentialTrafficOnlyReason();
  if (essentialTrafficEnvVar) {
    return { type: "env", envVar: essentialTrafficEnvVar };
  }
  const config = getGlobalConfig();
  if (config.autoUpdates === false && (config.installMethod !== "native" || config.autoUpdatesProtectedForNative !== true)) {
    return { type: "config" };
  }
  return null;
}
function getOrCreateUserID() {
  const config = getGlobalConfig();
  if (config.userID) {
    return config.userID;
  }
  const userID = randomBytes(32).toString("hex");
  saveGlobalConfig((current) => ({ ...current, userID }));
  return userID;
}
function recordFirstStartTime() {
  const config = getGlobalConfig();
  if (!config.firstStartTime) {
    const firstStartTime = new Date().toISOString();
    saveGlobalConfig((current) => ({
      ...current,
      firstStartTime: current.firstStartTime ?? firstStartTime
    }));
  }
}
function getMemoryPath(memoryType) {
  const cwd = getOriginalCwd();
  switch (memoryType) {
    case "User":
      return join4(getClaudeConfigHomeDir(), "CLAUDE.md");
    case "Local":
      return join4(cwd, "CLAUDE.local.md");
    case "Project":
      return join4(cwd, "CLAUDE.md");
    case "Managed":
      return join4(getManagedFilePath(), "CLAUDE.md");
    case "AutoMem":
      return getAutoMemEntrypoint();
  }
  if (false) {}
  return "";
}
function getManagedClaudeRulesDir() {
  return join4(getManagedFilePath(), ".claude", "rules");
}
function getUserClaudeRulesDir() {
  return join4(getClaudeConfigHomeDir(), "rules");
}
function _setGlobalConfigCacheForTesting(config) {
  globalConfigCache.config = config;
  globalConfigCache.mtime = config ? Date.now() : 0;
}
var insideGetConfig = false, DEFAULT_PROJECT_CONFIG, DEFAULT_GLOBAL_CONFIG, GLOBAL_CONFIG_KEYS, PROJECT_CONFIG_KEYS, _trustAccepted = false, TEST_GLOBAL_CONFIG_FOR_TESTING, TEST_PROJECT_CONFIG_FOR_TESTING, globalConfigCache, lastReadFileStats = null, configCacheHits = 0, configCacheMisses = 0, globalConfigWriteCount = 0, CONFIG_WRITE_DISPLAY_THRESHOLD = 20, CONFIG_FRESHNESS_POLL_MS = 1000, freshnessWatcherStarted = false, configReadingAllowed = false, getProjectPathForConfig, _getConfigForTesting, _wouldLoseAuthStateForTesting;
var init_config = __esm(() => {
  init_memoize();
  init_pickBy();
  init_state();
  init_paths();
  init_analytics();
  init_cwd();
  init_cleanupRegistry();
  init_debug();
  init_diagLogs();
  init_env();
  init_envUtils();
  init_errors();
  init_file();
  init_fsOperations();
  init_git();
  init_json();
  init_jsonRead();
  init_lockfile();
  init_log();
  init_path();
  init_privacyLevel();
  init_managedPath();
  init_slowOperations();
  init_configConstants();
  DEFAULT_PROJECT_CONFIG = {
    allowedTools: [],
    mcpContextUris: [],
    mcpServers: {},
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    hasTrustDialogAccepted: false,
    projectOnboardingSeenCount: 0,
    hasClaudeMdExternalIncludesApproved: false,
    hasClaudeMdExternalIncludesWarningShown: false
  };
  DEFAULT_GLOBAL_CONFIG = createDefaultGlobalConfig();
  GLOBAL_CONFIG_KEYS = [
    "apiKeyHelper",
    "installMethod",
    "autoUpdates",
    "autoUpdatesProtectedForNative",
    "theme",
    "verbose",
    "preferredNotifChannel",
    "shiftEnterKeyBindingInstalled",
    "editorMode",
    "hasUsedBackslashReturn",
    "autoCompactEnabled",
    "showTurnDuration",
    "diffTool",
    "env",
    "tipsHistory",
    "todoFeatureEnabled",
    "showExpandedTodos",
    "messageIdleNotifThresholdMs",
    "autoConnectIde",
    "autoInstallIdeExtension",
    "fileCheckpointingEnabled",
    "terminalProgressBarEnabled",
    "showStatusInTerminalTab",
    "taskCompleteNotifEnabled",
    "inputNeededNotifEnabled",
    "agentPushNotifEnabled",
    "respectGitignore",
    "claudeInChromeDefaultEnabled",
    "hasCompletedClaudeInChromeOnboarding",
    "lspRecommendationDisabled",
    "lspRecommendationNeverPlugins",
    "lspRecommendationIgnoredCount",
    "copyFullResponse",
    "copyOnSelect",
    "permissionExplainerEnabled",
    "prStatusFooterEnabled",
    "remoteControlAtStartup",
    "remoteDialogSeen",
    "bettProvider",
    "bettProviderApiKey",
    "bettProviderBaseUrl",
    "bettModel"
  ];
  PROJECT_CONFIG_KEYS = [
    "allowedTools",
    "hasTrustDialogAccepted",
    "hasCompletedProjectOnboarding"
  ];
  TEST_GLOBAL_CONFIG_FOR_TESTING = {
    ...DEFAULT_GLOBAL_CONFIG,
    autoUpdates: false
  };
  TEST_PROJECT_CONFIG_FOR_TESTING = {
    ...DEFAULT_PROJECT_CONFIG
  };
  globalConfigCache = {
    config: null,
    mtime: 0
  };
  registerCleanup(async () => {
    reportConfigCacheStats();
  });
  getProjectPathForConfig = memoize_default(() => {
    const originalCwd = getOriginalCwd();
    const gitRoot = findCanonicalGitRoot(originalCwd);
    if (gitRoot) {
      return normalizePathForConfigKey(gitRoot);
    }
    return normalizePathForConfigKey(resolve(originalCwd));
  });
  _getConfigForTesting = getConfig;
  _wouldLoseAuthStateForTesting = wouldLoseAuthState;
});

// src/utils/userAgent.ts
function getBettCodeUserAgent() {
  return `bett-code/${"1.0.0"}`;
}
var getClaudeCodeUserAgent;
var init_userAgent = __esm(() => {
  getClaudeCodeUserAgent = getBettCodeUserAgent;
});

// src/utils/workloadContext.ts
import { AsyncLocalStorage } from "async_hooks";
function getWorkload() {
  return workloadStorage.getStore()?.workload;
}
function runWithWorkload(workload, fn) {
  return workloadStorage.run({ workload }, fn);
}
var workloadStorage;
var init_workloadContext = __esm(() => {
  workloadStorage = new AsyncLocalStorage;
});

// src/utils/http.ts
function getUserAgent() {
  const agentSdkVersion = process.env.CLAUDE_AGENT_SDK_VERSION ? `, agent-sdk/${process.env.CLAUDE_AGENT_SDK_VERSION}` : "";
  const clientApp = process.env.CLAUDE_AGENT_SDK_CLIENT_APP ? `, client-app/${process.env.CLAUDE_AGENT_SDK_CLIENT_APP}` : "";
  const workload = getWorkload();
  const workloadSuffix = workload ? `, workload/${workload}` : "";
  return `bett-code/${"1.0.0"} (${"external"}, ${process.env.CLAUDE_CODE_ENTRYPOINT ?? "cli"}${agentSdkVersion}${clientApp}${workloadSuffix})`;
}
function getMCPUserAgent() {
  const parts = [];
  if (process.env.CLAUDE_CODE_ENTRYPOINT) {
    parts.push(process.env.CLAUDE_CODE_ENTRYPOINT);
  }
  if (process.env.CLAUDE_AGENT_SDK_VERSION) {
    parts.push(`agent-sdk/${process.env.CLAUDE_AGENT_SDK_VERSION}`);
  }
  if (process.env.CLAUDE_AGENT_SDK_CLIENT_APP) {
    parts.push(`client-app/${process.env.CLAUDE_AGENT_SDK_CLIENT_APP}`);
  }
  const suffix = parts.length > 0 ? ` (${parts.join(", ")})` : "";
  return `bett-code/${"1.0.0"}${suffix}`;
}
function getWebFetchUserAgent() {
  return `Claude-User (${getBettCodeUserAgent()}; +https://support.anthropic.com/)`;
}
function getAuthHeaders() {
  if (isClaudeAISubscriber()) {
    const oauthTokens = getClaudeAIOAuthTokens();
    if (!oauthTokens?.accessToken) {
      return {
        headers: {},
        error: "No OAuth token available"
      };
    }
    return {
      headers: {
        Authorization: `Bearer ${oauthTokens.accessToken}`,
        "anthropic-beta": OAUTH_BETA_HEADER
      }
    };
  }
  const apiKey = getAnthropicApiKey();
  if (!apiKey) {
    return {
      headers: {},
      error: "No API key available"
    };
  }
  return {
    headers: {
      "x-api-key": apiKey
    }
  };
}
async function withOAuth401Retry(request, opts) {
  try {
    return await request();
  } catch (err) {
    if (!axios_default.isAxiosError(err))
      throw err;
    const status = err.response?.status;
    const isAuthError = status === 401 || opts?.also403Revoked && status === 403 && typeof err.response?.data === "string" && err.response.data.includes("OAuth token has been revoked");
    if (!isAuthError)
      throw err;
    const failedAccessToken = getClaudeAIOAuthTokens()?.accessToken;
    if (!failedAccessToken)
      throw err;
    await handleOAuth401Error(failedAccessToken);
    return await request();
  }
}
var init_http = __esm(() => {
  init_axios();
  init_oauth();
  init_auth2();
  init_userAgent();
  init_workloadContext();
});

// src/utils/user.ts
async function initUser() {
  if (cachedEmail === null && !emailFetchPromise) {
    emailFetchPromise = getEmailAsync();
    cachedEmail = await emailFetchPromise;
    emailFetchPromise = null;
    getCoreUserData.cache.clear?.();
  }
}
function resetUserCache() {
  cachedEmail = null;
  emailFetchPromise = null;
  getCoreUserData.cache.clear?.();
  getGitEmail.cache.clear?.();
}
function getUserForGrowthBook() {
  return getCoreUserData(true);
}
function getEmail() {
  if (cachedEmail !== null) {
    return cachedEmail;
  }
  const oauthAccount = getOauthAccountInfo();
  if (oauthAccount?.emailAddress) {
    return oauthAccount.emailAddress;
  }
  if (true) {
    return;
  }
  if (process.env.COO_CREATOR) {
    return `${process.env.COO_CREATOR}@anthropic.com`;
  }
  return;
}
async function getEmailAsync() {
  const oauthAccount = getOauthAccountInfo();
  if (oauthAccount?.emailAddress) {
    return oauthAccount.emailAddress;
  }
  if (true) {
    return;
  }
  if (process.env.COO_CREATOR) {
    return `${process.env.COO_CREATOR}@anthropic.com`;
  }
  return getGitEmail();
}
var cachedEmail = null, emailFetchPromise = null, getCoreUserData, getGitEmail;
var init_user = __esm(() => {
  init_execa();
  init_memoize();
  init_state();
  init_auth2();
  init_config();
  init_cwd();
  init_env();
  init_envUtils();
  getCoreUserData = memoize_default((includeAnalyticsMetadata) => {
    const deviceId = getOrCreateUserID();
    const config = getGlobalConfig();
    let subscriptionType;
    let rateLimitTier;
    let firstTokenTime;
    if (includeAnalyticsMetadata) {
      subscriptionType = getSubscriptionType() ?? undefined;
      rateLimitTier = getRateLimitTier() ?? undefined;
      if (subscriptionType && config.claudeCodeFirstTokenDate) {
        const configFirstTokenTime = new Date(config.claudeCodeFirstTokenDate).getTime();
        if (!isNaN(configFirstTokenTime)) {
          firstTokenTime = configFirstTokenTime;
        }
      }
    }
    const oauthAccount = getOauthAccountInfo();
    const organizationUuid = oauthAccount?.organizationUuid;
    const accountUuid = oauthAccount?.accountUuid;
    return {
      deviceId,
      sessionId: getSessionId(),
      email: getEmail(),
      appVersion: "1.0.0",
      platform: getHostPlatformForAnalytics(),
      organizationUuid,
      accountUuid,
      userType: "external",
      subscriptionType,
      rateLimitTier,
      firstTokenTime,
      ...isEnvTruthy(process.env.GITHUB_ACTIONS) && {
        githubActionsMetadata: {
          actor: process.env.GITHUB_ACTOR,
          actorId: process.env.GITHUB_ACTOR_ID,
          repository: process.env.GITHUB_REPOSITORY,
          repositoryId: process.env.GITHUB_REPOSITORY_ID,
          repositoryOwner: process.env.GITHUB_REPOSITORY_OWNER,
          repositoryOwnerId: process.env.GITHUB_REPOSITORY_OWNER_ID
        }
      }
    };
  });
  getGitEmail = memoize_default(async () => {
    const result = await execa("git config --get user.email", {
      shell: true,
      reject: false,
      cwd: getCwd()
    });
    return result.exitCode === 0 && result.stdout ? result.stdout.trim() : undefined;
  });
});

// node_modules/@opentelemetry/semantic-conventions/build/src/internal/utils.js
var require_utils = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createConstMap = undefined;
  function createConstMap(values) {
    let res = {};
    const len = values.length;
    for (let lp = 0;lp < len; lp++) {
      const val = values[lp];
      if (val) {
        res[String(val).toUpperCase().replace(/[-.]/g, "_")] = val;
      }
    }
    return res;
  }
  exports.createConstMap = createConstMap;
});

// node_modules/@opentelemetry/semantic-conventions/build/src/trace/SemanticAttributes.js
var require_SemanticAttributes = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SEMATTRS_NET_HOST_CARRIER_ICC = exports.SEMATTRS_NET_HOST_CARRIER_MNC = exports.SEMATTRS_NET_HOST_CARRIER_MCC = exports.SEMATTRS_NET_HOST_CARRIER_NAME = exports.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = exports.SEMATTRS_NET_HOST_CONNECTION_TYPE = exports.SEMATTRS_NET_HOST_NAME = exports.SEMATTRS_NET_HOST_PORT = exports.SEMATTRS_NET_HOST_IP = exports.SEMATTRS_NET_PEER_NAME = exports.SEMATTRS_NET_PEER_PORT = exports.SEMATTRS_NET_PEER_IP = exports.SEMATTRS_NET_TRANSPORT = exports.SEMATTRS_FAAS_INVOKED_REGION = exports.SEMATTRS_FAAS_INVOKED_PROVIDER = exports.SEMATTRS_FAAS_INVOKED_NAME = exports.SEMATTRS_FAAS_COLDSTART = exports.SEMATTRS_FAAS_CRON = exports.SEMATTRS_FAAS_TIME = exports.SEMATTRS_FAAS_DOCUMENT_NAME = exports.SEMATTRS_FAAS_DOCUMENT_TIME = exports.SEMATTRS_FAAS_DOCUMENT_OPERATION = exports.SEMATTRS_FAAS_DOCUMENT_COLLECTION = exports.SEMATTRS_FAAS_EXECUTION = exports.SEMATTRS_FAAS_TRIGGER = exports.SEMATTRS_EXCEPTION_ESCAPED = exports.SEMATTRS_EXCEPTION_STACKTRACE = exports.SEMATTRS_EXCEPTION_MESSAGE = exports.SEMATTRS_EXCEPTION_TYPE = exports.SEMATTRS_DB_SQL_TABLE = exports.SEMATTRS_DB_MONGODB_COLLECTION = exports.SEMATTRS_DB_REDIS_DATABASE_INDEX = exports.SEMATTRS_DB_HBASE_NAMESPACE = exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = exports.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = exports.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = exports.SEMATTRS_DB_CASSANDRA_TABLE = exports.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = exports.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = exports.SEMATTRS_DB_CASSANDRA_KEYSPACE = exports.SEMATTRS_DB_MSSQL_INSTANCE_NAME = exports.SEMATTRS_DB_OPERATION = exports.SEMATTRS_DB_STATEMENT = exports.SEMATTRS_DB_NAME = exports.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = exports.SEMATTRS_DB_USER = exports.SEMATTRS_DB_CONNECTION_STRING = exports.SEMATTRS_DB_SYSTEM = exports.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = undefined;
  exports.SEMATTRS_MESSAGING_DESTINATION_KIND = exports.SEMATTRS_MESSAGING_DESTINATION = exports.SEMATTRS_MESSAGING_SYSTEM = exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = exports.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = exports.SEMATTRS_AWS_DYNAMODB_COUNT = exports.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = exports.SEMATTRS_AWS_DYNAMODB_SEGMENT = exports.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = exports.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = exports.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = exports.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = exports.SEMATTRS_AWS_DYNAMODB_SELECT = exports.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = exports.SEMATTRS_AWS_DYNAMODB_LIMIT = exports.SEMATTRS_AWS_DYNAMODB_PROJECTION = exports.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = exports.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = exports.SEMATTRS_HTTP_CLIENT_IP = exports.SEMATTRS_HTTP_ROUTE = exports.SEMATTRS_HTTP_SERVER_NAME = exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = exports.SEMATTRS_HTTP_USER_AGENT = exports.SEMATTRS_HTTP_FLAVOR = exports.SEMATTRS_HTTP_STATUS_CODE = exports.SEMATTRS_HTTP_SCHEME = exports.SEMATTRS_HTTP_HOST = exports.SEMATTRS_HTTP_TARGET = exports.SEMATTRS_HTTP_URL = exports.SEMATTRS_HTTP_METHOD = exports.SEMATTRS_CODE_LINENO = exports.SEMATTRS_CODE_FILEPATH = exports.SEMATTRS_CODE_NAMESPACE = exports.SEMATTRS_CODE_FUNCTION = exports.SEMATTRS_THREAD_NAME = exports.SEMATTRS_THREAD_ID = exports.SEMATTRS_ENDUSER_SCOPE = exports.SEMATTRS_ENDUSER_ROLE = exports.SEMATTRS_ENDUSER_ID = exports.SEMATTRS_PEER_SERVICE = undefined;
  exports.DBSYSTEMVALUES_FILEMAKER = exports.DBSYSTEMVALUES_DERBY = exports.DBSYSTEMVALUES_FIREBIRD = exports.DBSYSTEMVALUES_ADABAS = exports.DBSYSTEMVALUES_CACHE = exports.DBSYSTEMVALUES_EDB = exports.DBSYSTEMVALUES_FIRSTSQL = exports.DBSYSTEMVALUES_INGRES = exports.DBSYSTEMVALUES_HANADB = exports.DBSYSTEMVALUES_MAXDB = exports.DBSYSTEMVALUES_PROGRESS = exports.DBSYSTEMVALUES_HSQLDB = exports.DBSYSTEMVALUES_CLOUDSCAPE = exports.DBSYSTEMVALUES_HIVE = exports.DBSYSTEMVALUES_REDSHIFT = exports.DBSYSTEMVALUES_POSTGRESQL = exports.DBSYSTEMVALUES_DB2 = exports.DBSYSTEMVALUES_ORACLE = exports.DBSYSTEMVALUES_MYSQL = exports.DBSYSTEMVALUES_MSSQL = exports.DBSYSTEMVALUES_OTHER_SQL = exports.SemanticAttributes = exports.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = exports.SEMATTRS_MESSAGE_COMPRESSED_SIZE = exports.SEMATTRS_MESSAGE_ID = exports.SEMATTRS_MESSAGE_TYPE = exports.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = exports.SEMATTRS_RPC_JSONRPC_ERROR_CODE = exports.SEMATTRS_RPC_JSONRPC_REQUEST_ID = exports.SEMATTRS_RPC_JSONRPC_VERSION = exports.SEMATTRS_RPC_GRPC_STATUS_CODE = exports.SEMATTRS_RPC_METHOD = exports.SEMATTRS_RPC_SERVICE = exports.SEMATTRS_RPC_SYSTEM = exports.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = exports.SEMATTRS_MESSAGING_KAFKA_PARTITION = exports.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = exports.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = exports.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = exports.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = exports.SEMATTRS_MESSAGING_CONSUMER_ID = exports.SEMATTRS_MESSAGING_OPERATION = exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = exports.SEMATTRS_MESSAGING_CONVERSATION_ID = exports.SEMATTRS_MESSAGING_MESSAGE_ID = exports.SEMATTRS_MESSAGING_URL = exports.SEMATTRS_MESSAGING_PROTOCOL_VERSION = exports.SEMATTRS_MESSAGING_PROTOCOL = exports.SEMATTRS_MESSAGING_TEMP_DESTINATION = undefined;
  exports.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = exports.FaasDocumentOperationValues = exports.FAASDOCUMENTOPERATIONVALUES_DELETE = exports.FAASDOCUMENTOPERATIONVALUES_EDIT = exports.FAASDOCUMENTOPERATIONVALUES_INSERT = exports.FaasTriggerValues = exports.FAASTRIGGERVALUES_OTHER = exports.FAASTRIGGERVALUES_TIMER = exports.FAASTRIGGERVALUES_PUBSUB = exports.FAASTRIGGERVALUES_HTTP = exports.FAASTRIGGERVALUES_DATASOURCE = exports.DbCassandraConsistencyLevelValues = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = exports.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = exports.DbSystemValues = exports.DBSYSTEMVALUES_COCKROACHDB = exports.DBSYSTEMVALUES_MEMCACHED = exports.DBSYSTEMVALUES_ELASTICSEARCH = exports.DBSYSTEMVALUES_GEODE = exports.DBSYSTEMVALUES_NEO4J = exports.DBSYSTEMVALUES_DYNAMODB = exports.DBSYSTEMVALUES_COSMOSDB = exports.DBSYSTEMVALUES_COUCHDB = exports.DBSYSTEMVALUES_COUCHBASE = exports.DBSYSTEMVALUES_REDIS = exports.DBSYSTEMVALUES_MONGODB = exports.DBSYSTEMVALUES_HBASE = exports.DBSYSTEMVALUES_CASSANDRA = exports.DBSYSTEMVALUES_COLDFUSION = exports.DBSYSTEMVALUES_H2 = exports.DBSYSTEMVALUES_VERTICA = exports.DBSYSTEMVALUES_TERADATA = exports.DBSYSTEMVALUES_SYBASE = exports.DBSYSTEMVALUES_SQLITE = exports.DBSYSTEMVALUES_POINTBASE = exports.DBSYSTEMVALUES_PERVASIVE = exports.DBSYSTEMVALUES_NETEZZA = exports.DBSYSTEMVALUES_MARIADB = exports.DBSYSTEMVALUES_INTERBASE = exports.DBSYSTEMVALUES_INSTANTDB = exports.DBSYSTEMVALUES_INFORMIX = undefined;
  exports.MESSAGINGOPERATIONVALUES_RECEIVE = exports.MessagingDestinationKindValues = exports.MESSAGINGDESTINATIONKINDVALUES_TOPIC = exports.MESSAGINGDESTINATIONKINDVALUES_QUEUE = exports.HttpFlavorValues = exports.HTTPFLAVORVALUES_QUIC = exports.HTTPFLAVORVALUES_SPDY = exports.HTTPFLAVORVALUES_HTTP_2_0 = exports.HTTPFLAVORVALUES_HTTP_1_1 = exports.HTTPFLAVORVALUES_HTTP_1_0 = exports.NetHostConnectionSubtypeValues = exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_NR = exports.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = exports.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = exports.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = exports.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = exports.NetHostConnectionTypeValues = exports.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = exports.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = exports.NETHOSTCONNECTIONTYPEVALUES_CELL = exports.NETHOSTCONNECTIONTYPEVALUES_WIRED = exports.NETHOSTCONNECTIONTYPEVALUES_WIFI = exports.NetTransportValues = exports.NETTRANSPORTVALUES_OTHER = exports.NETTRANSPORTVALUES_INPROC = exports.NETTRANSPORTVALUES_PIPE = exports.NETTRANSPORTVALUES_UNIX = exports.NETTRANSPORTVALUES_IP = exports.NETTRANSPORTVALUES_IP_UDP = exports.NETTRANSPORTVALUES_IP_TCP = exports.FaasInvokedProviderValues = exports.FAASINVOKEDPROVIDERVALUES_GCP = exports.FAASINVOKEDPROVIDERVALUES_AZURE = exports.FAASINVOKEDPROVIDERVALUES_AWS = undefined;
  exports.MessageTypeValues = exports.MESSAGETYPEVALUES_RECEIVED = exports.MESSAGETYPEVALUES_SENT = exports.RpcGrpcStatusCodeValues = exports.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = exports.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = exports.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = exports.RPCGRPCSTATUSCODEVALUES_INTERNAL = exports.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = exports.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = exports.RPCGRPCSTATUSCODEVALUES_ABORTED = exports.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = exports.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = exports.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = exports.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = exports.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = exports.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = exports.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = exports.RPCGRPCSTATUSCODEVALUES_UNKNOWN = exports.RPCGRPCSTATUSCODEVALUES_CANCELLED = exports.RPCGRPCSTATUSCODEVALUES_OK = exports.MessagingOperationValues = exports.MESSAGINGOPERATIONVALUES_PROCESS = undefined;
  var utils_1 = require_utils();
  var TMP_AWS_LAMBDA_INVOKED_ARN = "aws.lambda.invoked_arn";
  var TMP_DB_SYSTEM = "db.system";
  var TMP_DB_CONNECTION_STRING = "db.connection_string";
  var TMP_DB_USER = "db.user";
  var TMP_DB_JDBC_DRIVER_CLASSNAME = "db.jdbc.driver_classname";
  var TMP_DB_NAME = "db.name";
  var TMP_DB_STATEMENT = "db.statement";
  var TMP_DB_OPERATION = "db.operation";
  var TMP_DB_MSSQL_INSTANCE_NAME = "db.mssql.instance_name";
  var TMP_DB_CASSANDRA_KEYSPACE = "db.cassandra.keyspace";
  var TMP_DB_CASSANDRA_PAGE_SIZE = "db.cassandra.page_size";
  var TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = "db.cassandra.consistency_level";
  var TMP_DB_CASSANDRA_TABLE = "db.cassandra.table";
  var TMP_DB_CASSANDRA_IDEMPOTENCE = "db.cassandra.idempotence";
  var TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = "db.cassandra.speculative_execution_count";
  var TMP_DB_CASSANDRA_COORDINATOR_ID = "db.cassandra.coordinator.id";
  var TMP_DB_CASSANDRA_COORDINATOR_DC = "db.cassandra.coordinator.dc";
  var TMP_DB_HBASE_NAMESPACE = "db.hbase.namespace";
  var TMP_DB_REDIS_DATABASE_INDEX = "db.redis.database_index";
  var TMP_DB_MONGODB_COLLECTION = "db.mongodb.collection";
  var TMP_DB_SQL_TABLE = "db.sql.table";
  var TMP_EXCEPTION_TYPE = "exception.type";
  var TMP_EXCEPTION_MESSAGE = "exception.message";
  var TMP_EXCEPTION_STACKTRACE = "exception.stacktrace";
  var TMP_EXCEPTION_ESCAPED = "exception.escaped";
  var TMP_FAAS_TRIGGER = "faas.trigger";
  var TMP_FAAS_EXECUTION = "faas.execution";
  var TMP_FAAS_DOCUMENT_COLLECTION = "faas.document.collection";
  var TMP_FAAS_DOCUMENT_OPERATION = "faas.document.operation";
  var TMP_FAAS_DOCUMENT_TIME = "faas.document.time";
  var TMP_FAAS_DOCUMENT_NAME = "faas.document.name";
  var TMP_FAAS_TIME = "faas.time";
  var TMP_FAAS_CRON = "faas.cron";
  var TMP_FAAS_COLDSTART = "faas.coldstart";
  var TMP_FAAS_INVOKED_NAME = "faas.invoked_name";
  var TMP_FAAS_INVOKED_PROVIDER = "faas.invoked_provider";
  var TMP_FAAS_INVOKED_REGION = "faas.invoked_region";
  var TMP_NET_TRANSPORT = "net.transport";
  var TMP_NET_PEER_IP = "net.peer.ip";
  var TMP_NET_PEER_PORT = "net.peer.port";
  var TMP_NET_PEER_NAME = "net.peer.name";
  var TMP_NET_HOST_IP = "net.host.ip";
  var TMP_NET_HOST_PORT = "net.host.port";
  var TMP_NET_HOST_NAME = "net.host.name";
  var TMP_NET_HOST_CONNECTION_TYPE = "net.host.connection.type";
  var TMP_NET_HOST_CONNECTION_SUBTYPE = "net.host.connection.subtype";
  var TMP_NET_HOST_CARRIER_NAME = "net.host.carrier.name";
  var TMP_NET_HOST_CARRIER_MCC = "net.host.carrier.mcc";
  var TMP_NET_HOST_CARRIER_MNC = "net.host.carrier.mnc";
  var TMP_NET_HOST_CARRIER_ICC = "net.host.carrier.icc";
  var TMP_PEER_SERVICE = "peer.service";
  var TMP_ENDUSER_ID = "enduser.id";
  var TMP_ENDUSER_ROLE = "enduser.role";
  var TMP_ENDUSER_SCOPE = "enduser.scope";
  var TMP_THREAD_ID = "thread.id";
  var TMP_THREAD_NAME = "thread.name";
  var TMP_CODE_FUNCTION = "code.function";
  var TMP_CODE_NAMESPACE = "code.namespace";
  var TMP_CODE_FILEPATH = "code.filepath";
  var TMP_CODE_LINENO = "code.lineno";
  var TMP_HTTP_METHOD = "http.method";
  var TMP_HTTP_URL = "http.url";
  var TMP_HTTP_TARGET = "http.target";
  var TMP_HTTP_HOST = "http.host";
  var TMP_HTTP_SCHEME = "http.scheme";
  var TMP_HTTP_STATUS_CODE = "http.status_code";
  var TMP_HTTP_FLAVOR = "http.flavor";
  var TMP_HTTP_USER_AGENT = "http.user_agent";
  var TMP_HTTP_REQUEST_CONTENT_LENGTH = "http.request_content_length";
  var TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
  var TMP_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
  var TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
  var TMP_HTTP_SERVER_NAME = "http.server_name";
  var TMP_HTTP_ROUTE = "http.route";
  var TMP_HTTP_CLIENT_IP = "http.client_ip";
  var TMP_AWS_DYNAMODB_TABLE_NAMES = "aws.dynamodb.table_names";
  var TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = "aws.dynamodb.consumed_capacity";
  var TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = "aws.dynamodb.item_collection_metrics";
  var TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = "aws.dynamodb.provisioned_read_capacity";
  var TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = "aws.dynamodb.provisioned_write_capacity";
  var TMP_AWS_DYNAMODB_CONSISTENT_READ = "aws.dynamodb.consistent_read";
  var TMP_AWS_DYNAMODB_PROJECTION = "aws.dynamodb.projection";
  var TMP_AWS_DYNAMODB_LIMIT = "aws.dynamodb.limit";
  var TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = "aws.dynamodb.attributes_to_get";
  var TMP_AWS_DYNAMODB_INDEX_NAME = "aws.dynamodb.index_name";
  var TMP_AWS_DYNAMODB_SELECT = "aws.dynamodb.select";
  var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = "aws.dynamodb.global_secondary_indexes";
  var TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = "aws.dynamodb.local_secondary_indexes";
  var TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = "aws.dynamodb.exclusive_start_table";
  var TMP_AWS_DYNAMODB_TABLE_COUNT = "aws.dynamodb.table_count";
  var TMP_AWS_DYNAMODB_SCAN_FORWARD = "aws.dynamodb.scan_forward";
  var TMP_AWS_DYNAMODB_SEGMENT = "aws.dynamodb.segment";
  var TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = "aws.dynamodb.total_segments";
  var TMP_AWS_DYNAMODB_COUNT = "aws.dynamodb.count";
  var TMP_AWS_DYNAMODB_SCANNED_COUNT = "aws.dynamodb.scanned_count";
  var TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = "aws.dynamodb.attribute_definitions";
  var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = "aws.dynamodb.global_secondary_index_updates";
  var TMP_MESSAGING_SYSTEM = "messaging.system";
  var TMP_MESSAGING_DESTINATION = "messaging.destination";
  var TMP_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
  var TMP_MESSAGING_TEMP_DESTINATION = "messaging.temp_destination";
  var TMP_MESSAGING_PROTOCOL = "messaging.protocol";
  var TMP_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
  var TMP_MESSAGING_URL = "messaging.url";
  var TMP_MESSAGING_MESSAGE_ID = "messaging.message_id";
  var TMP_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
  var TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = "messaging.message_payload_size_bytes";
  var TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = "messaging.message_payload_compressed_size_bytes";
  var TMP_MESSAGING_OPERATION = "messaging.operation";
  var TMP_MESSAGING_CONSUMER_ID = "messaging.consumer_id";
  var TMP_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
  var TMP_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message_key";
  var TMP_MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer_group";
  var TMP_MESSAGING_KAFKA_CLIENT_ID = "messaging.kafka.client_id";
  var TMP_MESSAGING_KAFKA_PARTITION = "messaging.kafka.partition";
  var TMP_MESSAGING_KAFKA_TOMBSTONE = "messaging.kafka.tombstone";
  var TMP_RPC_SYSTEM = "rpc.system";
  var TMP_RPC_SERVICE = "rpc.service";
  var TMP_RPC_METHOD = "rpc.method";
  var TMP_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
  var TMP_RPC_JSONRPC_VERSION = "rpc.jsonrpc.version";
  var TMP_RPC_JSONRPC_REQUEST_ID = "rpc.jsonrpc.request_id";
  var TMP_RPC_JSONRPC_ERROR_CODE = "rpc.jsonrpc.error_code";
  var TMP_RPC_JSONRPC_ERROR_MESSAGE = "rpc.jsonrpc.error_message";
  var TMP_MESSAGE_TYPE = "message.type";
  var TMP_MESSAGE_ID = "message.id";
  var TMP_MESSAGE_COMPRESSED_SIZE = "message.compressed_size";
  var TMP_MESSAGE_UNCOMPRESSED_SIZE = "message.uncompressed_size";
  exports.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = TMP_AWS_LAMBDA_INVOKED_ARN;
  exports.SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
  exports.SEMATTRS_DB_CONNECTION_STRING = TMP_DB_CONNECTION_STRING;
  exports.SEMATTRS_DB_USER = TMP_DB_USER;
  exports.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = TMP_DB_JDBC_DRIVER_CLASSNAME;
  exports.SEMATTRS_DB_NAME = TMP_DB_NAME;
  exports.SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
  exports.SEMATTRS_DB_OPERATION = TMP_DB_OPERATION;
  exports.SEMATTRS_DB_MSSQL_INSTANCE_NAME = TMP_DB_MSSQL_INSTANCE_NAME;
  exports.SEMATTRS_DB_CASSANDRA_KEYSPACE = TMP_DB_CASSANDRA_KEYSPACE;
  exports.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = TMP_DB_CASSANDRA_PAGE_SIZE;
  exports.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = TMP_DB_CASSANDRA_CONSISTENCY_LEVEL;
  exports.SEMATTRS_DB_CASSANDRA_TABLE = TMP_DB_CASSANDRA_TABLE;
  exports.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = TMP_DB_CASSANDRA_IDEMPOTENCE;
  exports.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT;
  exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = TMP_DB_CASSANDRA_COORDINATOR_ID;
  exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = TMP_DB_CASSANDRA_COORDINATOR_DC;
  exports.SEMATTRS_DB_HBASE_NAMESPACE = TMP_DB_HBASE_NAMESPACE;
  exports.SEMATTRS_DB_REDIS_DATABASE_INDEX = TMP_DB_REDIS_DATABASE_INDEX;
  exports.SEMATTRS_DB_MONGODB_COLLECTION = TMP_DB_MONGODB_COLLECTION;
  exports.SEMATTRS_DB_SQL_TABLE = TMP_DB_SQL_TABLE;
  exports.SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
  exports.SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
  exports.SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
  exports.SEMATTRS_EXCEPTION_ESCAPED = TMP_EXCEPTION_ESCAPED;
  exports.SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
  exports.SEMATTRS_FAAS_EXECUTION = TMP_FAAS_EXECUTION;
  exports.SEMATTRS_FAAS_DOCUMENT_COLLECTION = TMP_FAAS_DOCUMENT_COLLECTION;
  exports.SEMATTRS_FAAS_DOCUMENT_OPERATION = TMP_FAAS_DOCUMENT_OPERATION;
  exports.SEMATTRS_FAAS_DOCUMENT_TIME = TMP_FAAS_DOCUMENT_TIME;
  exports.SEMATTRS_FAAS_DOCUMENT_NAME = TMP_FAAS_DOCUMENT_NAME;
  exports.SEMATTRS_FAAS_TIME = TMP_FAAS_TIME;
  exports.SEMATTRS_FAAS_CRON = TMP_FAAS_CRON;
  exports.SEMATTRS_FAAS_COLDSTART = TMP_FAAS_COLDSTART;
  exports.SEMATTRS_FAAS_INVOKED_NAME = TMP_FAAS_INVOKED_NAME;
  exports.SEMATTRS_FAAS_INVOKED_PROVIDER = TMP_FAAS_INVOKED_PROVIDER;
  exports.SEMATTRS_FAAS_INVOKED_REGION = TMP_FAAS_INVOKED_REGION;
  exports.SEMATTRS_NET_TRANSPORT = TMP_NET_TRANSPORT;
  exports.SEMATTRS_NET_PEER_IP = TMP_NET_PEER_IP;
  exports.SEMATTRS_NET_PEER_PORT = TMP_NET_PEER_PORT;
  exports.SEMATTRS_NET_PEER_NAME = TMP_NET_PEER_NAME;
  exports.SEMATTRS_NET_HOST_IP = TMP_NET_HOST_IP;
  exports.SEMATTRS_NET_HOST_PORT = TMP_NET_HOST_PORT;
  exports.SEMATTRS_NET_HOST_NAME = TMP_NET_HOST_NAME;
  exports.SEMATTRS_NET_HOST_CONNECTION_TYPE = TMP_NET_HOST_CONNECTION_TYPE;
  exports.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = TMP_NET_HOST_CONNECTION_SUBTYPE;
  exports.SEMATTRS_NET_HOST_CARRIER_NAME = TMP_NET_HOST_CARRIER_NAME;
  exports.SEMATTRS_NET_HOST_CARRIER_MCC = TMP_NET_HOST_CARRIER_MCC;
  exports.SEMATTRS_NET_HOST_CARRIER_MNC = TMP_NET_HOST_CARRIER_MNC;
  exports.SEMATTRS_NET_HOST_CARRIER_ICC = TMP_NET_HOST_CARRIER_ICC;
  exports.SEMATTRS_PEER_SERVICE = TMP_PEER_SERVICE;
  exports.SEMATTRS_ENDUSER_ID = TMP_ENDUSER_ID;
  exports.SEMATTRS_ENDUSER_ROLE = TMP_ENDUSER_ROLE;
  exports.SEMATTRS_ENDUSER_SCOPE = TMP_ENDUSER_SCOPE;
  exports.SEMATTRS_THREAD_ID = TMP_THREAD_ID;
  exports.SEMATTRS_THREAD_NAME = TMP_THREAD_NAME;
  exports.SEMATTRS_CODE_FUNCTION = TMP_CODE_FUNCTION;
  exports.SEMATTRS_CODE_NAMESPACE = TMP_CODE_NAMESPACE;
  exports.SEMATTRS_CODE_FILEPATH = TMP_CODE_FILEPATH;
  exports.SEMATTRS_CODE_LINENO = TMP_CODE_LINENO;
  exports.SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
  exports.SEMATTRS_HTTP_URL = TMP_HTTP_URL;
  exports.SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
  exports.SEMATTRS_HTTP_HOST = TMP_HTTP_HOST;
  exports.SEMATTRS_HTTP_SCHEME = TMP_HTTP_SCHEME;
  exports.SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
  exports.SEMATTRS_HTTP_FLAVOR = TMP_HTTP_FLAVOR;
  exports.SEMATTRS_HTTP_USER_AGENT = TMP_HTTP_USER_AGENT;
  exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = TMP_HTTP_REQUEST_CONTENT_LENGTH;
  exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED;
  exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = TMP_HTTP_RESPONSE_CONTENT_LENGTH;
  exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED;
  exports.SEMATTRS_HTTP_SERVER_NAME = TMP_HTTP_SERVER_NAME;
  exports.SEMATTRS_HTTP_ROUTE = TMP_HTTP_ROUTE;
  exports.SEMATTRS_HTTP_CLIENT_IP = TMP_HTTP_CLIENT_IP;
  exports.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = TMP_AWS_DYNAMODB_TABLE_NAMES;
  exports.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TMP_AWS_DYNAMODB_CONSUMED_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS;
  exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = TMP_AWS_DYNAMODB_CONSISTENT_READ;
  exports.SEMATTRS_AWS_DYNAMODB_PROJECTION = TMP_AWS_DYNAMODB_PROJECTION;
  exports.SEMATTRS_AWS_DYNAMODB_LIMIT = TMP_AWS_DYNAMODB_LIMIT;
  exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET;
  exports.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = TMP_AWS_DYNAMODB_INDEX_NAME;
  exports.SEMATTRS_AWS_DYNAMODB_SELECT = TMP_AWS_DYNAMODB_SELECT;
  exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES;
  exports.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES;
  exports.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE;
  exports.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = TMP_AWS_DYNAMODB_TABLE_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = TMP_AWS_DYNAMODB_SCAN_FORWARD;
  exports.SEMATTRS_AWS_DYNAMODB_SEGMENT = TMP_AWS_DYNAMODB_SEGMENT;
  exports.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = TMP_AWS_DYNAMODB_TOTAL_SEGMENTS;
  exports.SEMATTRS_AWS_DYNAMODB_COUNT = TMP_AWS_DYNAMODB_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = TMP_AWS_DYNAMODB_SCANNED_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS;
  exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES;
  exports.SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
  exports.SEMATTRS_MESSAGING_DESTINATION = TMP_MESSAGING_DESTINATION;
  exports.SEMATTRS_MESSAGING_DESTINATION_KIND = TMP_MESSAGING_DESTINATION_KIND;
  exports.SEMATTRS_MESSAGING_TEMP_DESTINATION = TMP_MESSAGING_TEMP_DESTINATION;
  exports.SEMATTRS_MESSAGING_PROTOCOL = TMP_MESSAGING_PROTOCOL;
  exports.SEMATTRS_MESSAGING_PROTOCOL_VERSION = TMP_MESSAGING_PROTOCOL_VERSION;
  exports.SEMATTRS_MESSAGING_URL = TMP_MESSAGING_URL;
  exports.SEMATTRS_MESSAGING_MESSAGE_ID = TMP_MESSAGING_MESSAGE_ID;
  exports.SEMATTRS_MESSAGING_CONVERSATION_ID = TMP_MESSAGING_CONVERSATION_ID;
  exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES;
  exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES;
  exports.SEMATTRS_MESSAGING_OPERATION = TMP_MESSAGING_OPERATION;
  exports.SEMATTRS_MESSAGING_CONSUMER_ID = TMP_MESSAGING_CONSUMER_ID;
  exports.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = TMP_MESSAGING_RABBITMQ_ROUTING_KEY;
  exports.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = TMP_MESSAGING_KAFKA_MESSAGE_KEY;
  exports.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = TMP_MESSAGING_KAFKA_CONSUMER_GROUP;
  exports.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = TMP_MESSAGING_KAFKA_CLIENT_ID;
  exports.SEMATTRS_MESSAGING_KAFKA_PARTITION = TMP_MESSAGING_KAFKA_PARTITION;
  exports.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = TMP_MESSAGING_KAFKA_TOMBSTONE;
  exports.SEMATTRS_RPC_SYSTEM = TMP_RPC_SYSTEM;
  exports.SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
  exports.SEMATTRS_RPC_METHOD = TMP_RPC_METHOD;
  exports.SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
  exports.SEMATTRS_RPC_JSONRPC_VERSION = TMP_RPC_JSONRPC_VERSION;
  exports.SEMATTRS_RPC_JSONRPC_REQUEST_ID = TMP_RPC_JSONRPC_REQUEST_ID;
  exports.SEMATTRS_RPC_JSONRPC_ERROR_CODE = TMP_RPC_JSONRPC_ERROR_CODE;
  exports.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = TMP_RPC_JSONRPC_ERROR_MESSAGE;
  exports.SEMATTRS_MESSAGE_TYPE = TMP_MESSAGE_TYPE;
  exports.SEMATTRS_MESSAGE_ID = TMP_MESSAGE_ID;
  exports.SEMATTRS_MESSAGE_COMPRESSED_SIZE = TMP_MESSAGE_COMPRESSED_SIZE;
  exports.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = TMP_MESSAGE_UNCOMPRESSED_SIZE;
  exports.SemanticAttributes = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_AWS_LAMBDA_INVOKED_ARN,
    TMP_DB_SYSTEM,
    TMP_DB_CONNECTION_STRING,
    TMP_DB_USER,
    TMP_DB_JDBC_DRIVER_CLASSNAME,
    TMP_DB_NAME,
    TMP_DB_STATEMENT,
    TMP_DB_OPERATION,
    TMP_DB_MSSQL_INSTANCE_NAME,
    TMP_DB_CASSANDRA_KEYSPACE,
    TMP_DB_CASSANDRA_PAGE_SIZE,
    TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
    TMP_DB_CASSANDRA_TABLE,
    TMP_DB_CASSANDRA_IDEMPOTENCE,
    TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
    TMP_DB_CASSANDRA_COORDINATOR_ID,
    TMP_DB_CASSANDRA_COORDINATOR_DC,
    TMP_DB_HBASE_NAMESPACE,
    TMP_DB_REDIS_DATABASE_INDEX,
    TMP_DB_MONGODB_COLLECTION,
    TMP_DB_SQL_TABLE,
    TMP_EXCEPTION_TYPE,
    TMP_EXCEPTION_MESSAGE,
    TMP_EXCEPTION_STACKTRACE,
    TMP_EXCEPTION_ESCAPED,
    TMP_FAAS_TRIGGER,
    TMP_FAAS_EXECUTION,
    TMP_FAAS_DOCUMENT_COLLECTION,
    TMP_FAAS_DOCUMENT_OPERATION,
    TMP_FAAS_DOCUMENT_TIME,
    TMP_FAAS_DOCUMENT_NAME,
    TMP_FAAS_TIME,
    TMP_FAAS_CRON,
    TMP_FAAS_COLDSTART,
    TMP_FAAS_INVOKED_NAME,
    TMP_FAAS_INVOKED_PROVIDER,
    TMP_FAAS_INVOKED_REGION,
    TMP_NET_TRANSPORT,
    TMP_NET_PEER_IP,
    TMP_NET_PEER_PORT,
    TMP_NET_PEER_NAME,
    TMP_NET_HOST_IP,
    TMP_NET_HOST_PORT,
    TMP_NET_HOST_NAME,
    TMP_NET_HOST_CONNECTION_TYPE,
    TMP_NET_HOST_CONNECTION_SUBTYPE,
    TMP_NET_HOST_CARRIER_NAME,
    TMP_NET_HOST_CARRIER_MCC,
    TMP_NET_HOST_CARRIER_MNC,
    TMP_NET_HOST_CARRIER_ICC,
    TMP_PEER_SERVICE,
    TMP_ENDUSER_ID,
    TMP_ENDUSER_ROLE,
    TMP_ENDUSER_SCOPE,
    TMP_THREAD_ID,
    TMP_THREAD_NAME,
    TMP_CODE_FUNCTION,
    TMP_CODE_NAMESPACE,
    TMP_CODE_FILEPATH,
    TMP_CODE_LINENO,
    TMP_HTTP_METHOD,
    TMP_HTTP_URL,
    TMP_HTTP_TARGET,
    TMP_HTTP_HOST,
    TMP_HTTP_SCHEME,
    TMP_HTTP_STATUS_CODE,
    TMP_HTTP_FLAVOR,
    TMP_HTTP_USER_AGENT,
    TMP_HTTP_REQUEST_CONTENT_LENGTH,
    TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_SERVER_NAME,
    TMP_HTTP_ROUTE,
    TMP_HTTP_CLIENT_IP,
    TMP_AWS_DYNAMODB_TABLE_NAMES,
    TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
    TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
    TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
    TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
    TMP_AWS_DYNAMODB_CONSISTENT_READ,
    TMP_AWS_DYNAMODB_PROJECTION,
    TMP_AWS_DYNAMODB_LIMIT,
    TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
    TMP_AWS_DYNAMODB_INDEX_NAME,
    TMP_AWS_DYNAMODB_SELECT,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
    TMP_AWS_DYNAMODB_TABLE_COUNT,
    TMP_AWS_DYNAMODB_SCAN_FORWARD,
    TMP_AWS_DYNAMODB_SEGMENT,
    TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
    TMP_AWS_DYNAMODB_COUNT,
    TMP_AWS_DYNAMODB_SCANNED_COUNT,
    TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
    TMP_MESSAGING_SYSTEM,
    TMP_MESSAGING_DESTINATION,
    TMP_MESSAGING_DESTINATION_KIND,
    TMP_MESSAGING_TEMP_DESTINATION,
    TMP_MESSAGING_PROTOCOL,
    TMP_MESSAGING_PROTOCOL_VERSION,
    TMP_MESSAGING_URL,
    TMP_MESSAGING_MESSAGE_ID,
    TMP_MESSAGING_CONVERSATION_ID,
    TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
    TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
    TMP_MESSAGING_OPERATION,
    TMP_MESSAGING_CONSUMER_ID,
    TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
    TMP_MESSAGING_KAFKA_MESSAGE_KEY,
    TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
    TMP_MESSAGING_KAFKA_CLIENT_ID,
    TMP_MESSAGING_KAFKA_PARTITION,
    TMP_MESSAGING_KAFKA_TOMBSTONE,
    TMP_RPC_SYSTEM,
    TMP_RPC_SERVICE,
    TMP_RPC_METHOD,
    TMP_RPC_GRPC_STATUS_CODE,
    TMP_RPC_JSONRPC_VERSION,
    TMP_RPC_JSONRPC_REQUEST_ID,
    TMP_RPC_JSONRPC_ERROR_CODE,
    TMP_RPC_JSONRPC_ERROR_MESSAGE,
    TMP_MESSAGE_TYPE,
    TMP_MESSAGE_ID,
    TMP_MESSAGE_COMPRESSED_SIZE,
    TMP_MESSAGE_UNCOMPRESSED_SIZE
  ]);
  var TMP_DBSYSTEMVALUES_OTHER_SQL = "other_sql";
  var TMP_DBSYSTEMVALUES_MSSQL = "mssql";
  var TMP_DBSYSTEMVALUES_MYSQL = "mysql";
  var TMP_DBSYSTEMVALUES_ORACLE = "oracle";
  var TMP_DBSYSTEMVALUES_DB2 = "db2";
  var TMP_DBSYSTEMVALUES_POSTGRESQL = "postgresql";
  var TMP_DBSYSTEMVALUES_REDSHIFT = "redshift";
  var TMP_DBSYSTEMVALUES_HIVE = "hive";
  var TMP_DBSYSTEMVALUES_CLOUDSCAPE = "cloudscape";
  var TMP_DBSYSTEMVALUES_HSQLDB = "hsqldb";
  var TMP_DBSYSTEMVALUES_PROGRESS = "progress";
  var TMP_DBSYSTEMVALUES_MAXDB = "maxdb";
  var TMP_DBSYSTEMVALUES_HANADB = "hanadb";
  var TMP_DBSYSTEMVALUES_INGRES = "ingres";
  var TMP_DBSYSTEMVALUES_FIRSTSQL = "firstsql";
  var TMP_DBSYSTEMVALUES_EDB = "edb";
  var TMP_DBSYSTEMVALUES_CACHE = "cache";
  var TMP_DBSYSTEMVALUES_ADABAS = "adabas";
  var TMP_DBSYSTEMVALUES_FIREBIRD = "firebird";
  var TMP_DBSYSTEMVALUES_DERBY = "derby";
  var TMP_DBSYSTEMVALUES_FILEMAKER = "filemaker";
  var TMP_DBSYSTEMVALUES_INFORMIX = "informix";
  var TMP_DBSYSTEMVALUES_INSTANTDB = "instantdb";
  var TMP_DBSYSTEMVALUES_INTERBASE = "interbase";
  var TMP_DBSYSTEMVALUES_MARIADB = "mariadb";
  var TMP_DBSYSTEMVALUES_NETEZZA = "netezza";
  var TMP_DBSYSTEMVALUES_PERVASIVE = "pervasive";
  var TMP_DBSYSTEMVALUES_POINTBASE = "pointbase";
  var TMP_DBSYSTEMVALUES_SQLITE = "sqlite";
  var TMP_DBSYSTEMVALUES_SYBASE = "sybase";
  var TMP_DBSYSTEMVALUES_TERADATA = "teradata";
  var TMP_DBSYSTEMVALUES_VERTICA = "vertica";
  var TMP_DBSYSTEMVALUES_H2 = "h2";
  var TMP_DBSYSTEMVALUES_COLDFUSION = "coldfusion";
  var TMP_DBSYSTEMVALUES_CASSANDRA = "cassandra";
  var TMP_DBSYSTEMVALUES_HBASE = "hbase";
  var TMP_DBSYSTEMVALUES_MONGODB = "mongodb";
  var TMP_DBSYSTEMVALUES_REDIS = "redis";
  var TMP_DBSYSTEMVALUES_COUCHBASE = "couchbase";
  var TMP_DBSYSTEMVALUES_COUCHDB = "couchdb";
  var TMP_DBSYSTEMVALUES_COSMOSDB = "cosmosdb";
  var TMP_DBSYSTEMVALUES_DYNAMODB = "dynamodb";
  var TMP_DBSYSTEMVALUES_NEO4J = "neo4j";
  var TMP_DBSYSTEMVALUES_GEODE = "geode";
  var TMP_DBSYSTEMVALUES_ELASTICSEARCH = "elasticsearch";
  var TMP_DBSYSTEMVALUES_MEMCACHED = "memcached";
  var TMP_DBSYSTEMVALUES_COCKROACHDB = "cockroachdb";
  exports.DBSYSTEMVALUES_OTHER_SQL = TMP_DBSYSTEMVALUES_OTHER_SQL;
  exports.DBSYSTEMVALUES_MSSQL = TMP_DBSYSTEMVALUES_MSSQL;
  exports.DBSYSTEMVALUES_MYSQL = TMP_DBSYSTEMVALUES_MYSQL;
  exports.DBSYSTEMVALUES_ORACLE = TMP_DBSYSTEMVALUES_ORACLE;
  exports.DBSYSTEMVALUES_DB2 = TMP_DBSYSTEMVALUES_DB2;
  exports.DBSYSTEMVALUES_POSTGRESQL = TMP_DBSYSTEMVALUES_POSTGRESQL;
  exports.DBSYSTEMVALUES_REDSHIFT = TMP_DBSYSTEMVALUES_REDSHIFT;
  exports.DBSYSTEMVALUES_HIVE = TMP_DBSYSTEMVALUES_HIVE;
  exports.DBSYSTEMVALUES_CLOUDSCAPE = TMP_DBSYSTEMVALUES_CLOUDSCAPE;
  exports.DBSYSTEMVALUES_HSQLDB = TMP_DBSYSTEMVALUES_HSQLDB;
  exports.DBSYSTEMVALUES_PROGRESS = TMP_DBSYSTEMVALUES_PROGRESS;
  exports.DBSYSTEMVALUES_MAXDB = TMP_DBSYSTEMVALUES_MAXDB;
  exports.DBSYSTEMVALUES_HANADB = TMP_DBSYSTEMVALUES_HANADB;
  exports.DBSYSTEMVALUES_INGRES = TMP_DBSYSTEMVALUES_INGRES;
  exports.DBSYSTEMVALUES_FIRSTSQL = TMP_DBSYSTEMVALUES_FIRSTSQL;
  exports.DBSYSTEMVALUES_EDB = TMP_DBSYSTEMVALUES_EDB;
  exports.DBSYSTEMVALUES_CACHE = TMP_DBSYSTEMVALUES_CACHE;
  exports.DBSYSTEMVALUES_ADABAS = TMP_DBSYSTEMVALUES_ADABAS;
  exports.DBSYSTEMVALUES_FIREBIRD = TMP_DBSYSTEMVALUES_FIREBIRD;
  exports.DBSYSTEMVALUES_DERBY = TMP_DBSYSTEMVALUES_DERBY;
  exports.DBSYSTEMVALUES_FILEMAKER = TMP_DBSYSTEMVALUES_FILEMAKER;
  exports.DBSYSTEMVALUES_INFORMIX = TMP_DBSYSTEMVALUES_INFORMIX;
  exports.DBSYSTEMVALUES_INSTANTDB = TMP_DBSYSTEMVALUES_INSTANTDB;
  exports.DBSYSTEMVALUES_INTERBASE = TMP_DBSYSTEMVALUES_INTERBASE;
  exports.DBSYSTEMVALUES_MARIADB = TMP_DBSYSTEMVALUES_MARIADB;
  exports.DBSYSTEMVALUES_NETEZZA = TMP_DBSYSTEMVALUES_NETEZZA;
  exports.DBSYSTEMVALUES_PERVASIVE = TMP_DBSYSTEMVALUES_PERVASIVE;
  exports.DBSYSTEMVALUES_POINTBASE = TMP_DBSYSTEMVALUES_POINTBASE;
  exports.DBSYSTEMVALUES_SQLITE = TMP_DBSYSTEMVALUES_SQLITE;
  exports.DBSYSTEMVALUES_SYBASE = TMP_DBSYSTEMVALUES_SYBASE;
  exports.DBSYSTEMVALUES_TERADATA = TMP_DBSYSTEMVALUES_TERADATA;
  exports.DBSYSTEMVALUES_VERTICA = TMP_DBSYSTEMVALUES_VERTICA;
  exports.DBSYSTEMVALUES_H2 = TMP_DBSYSTEMVALUES_H2;
  exports.DBSYSTEMVALUES_COLDFUSION = TMP_DBSYSTEMVALUES_COLDFUSION;
  exports.DBSYSTEMVALUES_CASSANDRA = TMP_DBSYSTEMVALUES_CASSANDRA;
  exports.DBSYSTEMVALUES_HBASE = TMP_DBSYSTEMVALUES_HBASE;
  exports.DBSYSTEMVALUES_MONGODB = TMP_DBSYSTEMVALUES_MONGODB;
  exports.DBSYSTEMVALUES_REDIS = TMP_DBSYSTEMVALUES_REDIS;
  exports.DBSYSTEMVALUES_COUCHBASE = TMP_DBSYSTEMVALUES_COUCHBASE;
  exports.DBSYSTEMVALUES_COUCHDB = TMP_DBSYSTEMVALUES_COUCHDB;
  exports.DBSYSTEMVALUES_COSMOSDB = TMP_DBSYSTEMVALUES_COSMOSDB;
  exports.DBSYSTEMVALUES_DYNAMODB = TMP_DBSYSTEMVALUES_DYNAMODB;
  exports.DBSYSTEMVALUES_NEO4J = TMP_DBSYSTEMVALUES_NEO4J;
  exports.DBSYSTEMVALUES_GEODE = TMP_DBSYSTEMVALUES_GEODE;
  exports.DBSYSTEMVALUES_ELASTICSEARCH = TMP_DBSYSTEMVALUES_ELASTICSEARCH;
  exports.DBSYSTEMVALUES_MEMCACHED = TMP_DBSYSTEMVALUES_MEMCACHED;
  exports.DBSYSTEMVALUES_COCKROACHDB = TMP_DBSYSTEMVALUES_COCKROACHDB;
  exports.DbSystemValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_DBSYSTEMVALUES_OTHER_SQL,
    TMP_DBSYSTEMVALUES_MSSQL,
    TMP_DBSYSTEMVALUES_MYSQL,
    TMP_DBSYSTEMVALUES_ORACLE,
    TMP_DBSYSTEMVALUES_DB2,
    TMP_DBSYSTEMVALUES_POSTGRESQL,
    TMP_DBSYSTEMVALUES_REDSHIFT,
    TMP_DBSYSTEMVALUES_HIVE,
    TMP_DBSYSTEMVALUES_CLOUDSCAPE,
    TMP_DBSYSTEMVALUES_HSQLDB,
    TMP_DBSYSTEMVALUES_PROGRESS,
    TMP_DBSYSTEMVALUES_MAXDB,
    TMP_DBSYSTEMVALUES_HANADB,
    TMP_DBSYSTEMVALUES_INGRES,
    TMP_DBSYSTEMVALUES_FIRSTSQL,
    TMP_DBSYSTEMVALUES_EDB,
    TMP_DBSYSTEMVALUES_CACHE,
    TMP_DBSYSTEMVALUES_ADABAS,
    TMP_DBSYSTEMVALUES_FIREBIRD,
    TMP_DBSYSTEMVALUES_DERBY,
    TMP_DBSYSTEMVALUES_FILEMAKER,
    TMP_DBSYSTEMVALUES_INFORMIX,
    TMP_DBSYSTEMVALUES_INSTANTDB,
    TMP_DBSYSTEMVALUES_INTERBASE,
    TMP_DBSYSTEMVALUES_MARIADB,
    TMP_DBSYSTEMVALUES_NETEZZA,
    TMP_DBSYSTEMVALUES_PERVASIVE,
    TMP_DBSYSTEMVALUES_POINTBASE,
    TMP_DBSYSTEMVALUES_SQLITE,
    TMP_DBSYSTEMVALUES_SYBASE,
    TMP_DBSYSTEMVALUES_TERADATA,
    TMP_DBSYSTEMVALUES_VERTICA,
    TMP_DBSYSTEMVALUES_H2,
    TMP_DBSYSTEMVALUES_COLDFUSION,
    TMP_DBSYSTEMVALUES_CASSANDRA,
    TMP_DBSYSTEMVALUES_HBASE,
    TMP_DBSYSTEMVALUES_MONGODB,
    TMP_DBSYSTEMVALUES_REDIS,
    TMP_DBSYSTEMVALUES_COUCHBASE,
    TMP_DBSYSTEMVALUES_COUCHDB,
    TMP_DBSYSTEMVALUES_COSMOSDB,
    TMP_DBSYSTEMVALUES_DYNAMODB,
    TMP_DBSYSTEMVALUES_NEO4J,
    TMP_DBSYSTEMVALUES_GEODE,
    TMP_DBSYSTEMVALUES_ELASTICSEARCH,
    TMP_DBSYSTEMVALUES_MEMCACHED,
    TMP_DBSYSTEMVALUES_COCKROACHDB
  ]);
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = "all";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = "each_quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = "quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = "local_quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = "one";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = "two";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = "three";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = "local_one";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = "any";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = "serial";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = "local_serial";
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL;
  exports.DbCassandraConsistencyLevelValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
  ]);
  var TMP_FAASTRIGGERVALUES_DATASOURCE = "datasource";
  var TMP_FAASTRIGGERVALUES_HTTP = "http";
  var TMP_FAASTRIGGERVALUES_PUBSUB = "pubsub";
  var TMP_FAASTRIGGERVALUES_TIMER = "timer";
  var TMP_FAASTRIGGERVALUES_OTHER = "other";
  exports.FAASTRIGGERVALUES_DATASOURCE = TMP_FAASTRIGGERVALUES_DATASOURCE;
  exports.FAASTRIGGERVALUES_HTTP = TMP_FAASTRIGGERVALUES_HTTP;
  exports.FAASTRIGGERVALUES_PUBSUB = TMP_FAASTRIGGERVALUES_PUBSUB;
  exports.FAASTRIGGERVALUES_TIMER = TMP_FAASTRIGGERVALUES_TIMER;
  exports.FAASTRIGGERVALUES_OTHER = TMP_FAASTRIGGERVALUES_OTHER;
  exports.FaasTriggerValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASTRIGGERVALUES_DATASOURCE,
    TMP_FAASTRIGGERVALUES_HTTP,
    TMP_FAASTRIGGERVALUES_PUBSUB,
    TMP_FAASTRIGGERVALUES_TIMER,
    TMP_FAASTRIGGERVALUES_OTHER
  ]);
  var TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = "insert";
  var TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = "edit";
  var TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = "delete";
  exports.FAASDOCUMENTOPERATIONVALUES_INSERT = TMP_FAASDOCUMENTOPERATIONVALUES_INSERT;
  exports.FAASDOCUMENTOPERATIONVALUES_EDIT = TMP_FAASDOCUMENTOPERATIONVALUES_EDIT;
  exports.FAASDOCUMENTOPERATIONVALUES_DELETE = TMP_FAASDOCUMENTOPERATIONVALUES_DELETE;
  exports.FaasDocumentOperationValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
    TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
    TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
  ]);
  var TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
  var TMP_FAASINVOKEDPROVIDERVALUES_AWS = "aws";
  var TMP_FAASINVOKEDPROVIDERVALUES_AZURE = "azure";
  var TMP_FAASINVOKEDPROVIDERVALUES_GCP = "gcp";
  exports.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD;
  exports.FAASINVOKEDPROVIDERVALUES_AWS = TMP_FAASINVOKEDPROVIDERVALUES_AWS;
  exports.FAASINVOKEDPROVIDERVALUES_AZURE = TMP_FAASINVOKEDPROVIDERVALUES_AZURE;
  exports.FAASINVOKEDPROVIDERVALUES_GCP = TMP_FAASINVOKEDPROVIDERVALUES_GCP;
  exports.FaasInvokedProviderValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_FAASINVOKEDPROVIDERVALUES_AWS,
    TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
    TMP_FAASINVOKEDPROVIDERVALUES_GCP
  ]);
  var TMP_NETTRANSPORTVALUES_IP_TCP = "ip_tcp";
  var TMP_NETTRANSPORTVALUES_IP_UDP = "ip_udp";
  var TMP_NETTRANSPORTVALUES_IP = "ip";
  var TMP_NETTRANSPORTVALUES_UNIX = "unix";
  var TMP_NETTRANSPORTVALUES_PIPE = "pipe";
  var TMP_NETTRANSPORTVALUES_INPROC = "inproc";
  var TMP_NETTRANSPORTVALUES_OTHER = "other";
  exports.NETTRANSPORTVALUES_IP_TCP = TMP_NETTRANSPORTVALUES_IP_TCP;
  exports.NETTRANSPORTVALUES_IP_UDP = TMP_NETTRANSPORTVALUES_IP_UDP;
  exports.NETTRANSPORTVALUES_IP = TMP_NETTRANSPORTVALUES_IP;
  exports.NETTRANSPORTVALUES_UNIX = TMP_NETTRANSPORTVALUES_UNIX;
  exports.NETTRANSPORTVALUES_PIPE = TMP_NETTRANSPORTVALUES_PIPE;
  exports.NETTRANSPORTVALUES_INPROC = TMP_NETTRANSPORTVALUES_INPROC;
  exports.NETTRANSPORTVALUES_OTHER = TMP_NETTRANSPORTVALUES_OTHER;
  exports.NetTransportValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETTRANSPORTVALUES_IP_TCP,
    TMP_NETTRANSPORTVALUES_IP_UDP,
    TMP_NETTRANSPORTVALUES_IP,
    TMP_NETTRANSPORTVALUES_UNIX,
    TMP_NETTRANSPORTVALUES_PIPE,
    TMP_NETTRANSPORTVALUES_INPROC,
    TMP_NETTRANSPORTVALUES_OTHER
  ]);
  var TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = "wifi";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = "wired";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = "cell";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = "unavailable";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = "unknown";
  exports.NETHOSTCONNECTIONTYPEVALUES_WIFI = TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI;
  exports.NETHOSTCONNECTIONTYPEVALUES_WIRED = TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED;
  exports.NETHOSTCONNECTIONTYPEVALUES_CELL = TMP_NETHOSTCONNECTIONTYPEVALUES_CELL;
  exports.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE;
  exports.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN;
  exports.NetHostConnectionTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
    TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
  ]);
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = "gprs";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = "edge";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = "umts";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = "cdma";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = "evdo_0";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = "evdo_a";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = "cdma2000_1xrtt";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = "hsdpa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = "hsupa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = "hspa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = "iden";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = "evdo_b";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = "lte";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = "ehrpd";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = "hspap";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = "gsm";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = "td_scdma";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = "iwlan";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = "nr";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = "nrnsa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = "lte_ca";
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_NR = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA;
  exports.NetHostConnectionSubtypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
  ]);
  var TMP_HTTPFLAVORVALUES_HTTP_1_0 = "1.0";
  var TMP_HTTPFLAVORVALUES_HTTP_1_1 = "1.1";
  var TMP_HTTPFLAVORVALUES_HTTP_2_0 = "2.0";
  var TMP_HTTPFLAVORVALUES_SPDY = "SPDY";
  var TMP_HTTPFLAVORVALUES_QUIC = "QUIC";
  exports.HTTPFLAVORVALUES_HTTP_1_0 = TMP_HTTPFLAVORVALUES_HTTP_1_0;
  exports.HTTPFLAVORVALUES_HTTP_1_1 = TMP_HTTPFLAVORVALUES_HTTP_1_1;
  exports.HTTPFLAVORVALUES_HTTP_2_0 = TMP_HTTPFLAVORVALUES_HTTP_2_0;
  exports.HTTPFLAVORVALUES_SPDY = TMP_HTTPFLAVORVALUES_SPDY;
  exports.HTTPFLAVORVALUES_QUIC = TMP_HTTPFLAVORVALUES_QUIC;
  exports.HttpFlavorValues = {
    HTTP_1_0: TMP_HTTPFLAVORVALUES_HTTP_1_0,
    HTTP_1_1: TMP_HTTPFLAVORVALUES_HTTP_1_1,
    HTTP_2_0: TMP_HTTPFLAVORVALUES_HTTP_2_0,
    SPDY: TMP_HTTPFLAVORVALUES_SPDY,
    QUIC: TMP_HTTPFLAVORVALUES_QUIC
  };
  var TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = "queue";
  var TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = "topic";
  exports.MESSAGINGDESTINATIONKINDVALUES_QUEUE = TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE;
  exports.MESSAGINGDESTINATIONKINDVALUES_TOPIC = TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC;
  exports.MessagingDestinationKindValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
    TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
  ]);
  var TMP_MESSAGINGOPERATIONVALUES_RECEIVE = "receive";
  var TMP_MESSAGINGOPERATIONVALUES_PROCESS = "process";
  exports.MESSAGINGOPERATIONVALUES_RECEIVE = TMP_MESSAGINGOPERATIONVALUES_RECEIVE;
  exports.MESSAGINGOPERATIONVALUES_PROCESS = TMP_MESSAGINGOPERATIONVALUES_PROCESS;
  exports.MessagingOperationValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
    TMP_MESSAGINGOPERATIONVALUES_PROCESS
  ]);
  var TMP_RPCGRPCSTATUSCODEVALUES_OK = 0;
  var TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
  var TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
  var TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
  var TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
  var TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
  var TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
  var TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
  var TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
  var TMP_RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
  var TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
  var TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
  var TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
  exports.RPCGRPCSTATUSCODEVALUES_OK = TMP_RPCGRPCSTATUSCODEVALUES_OK;
  exports.RPCGRPCSTATUSCODEVALUES_CANCELLED = TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED;
  exports.RPCGRPCSTATUSCODEVALUES_UNKNOWN = TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN;
  exports.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT;
  exports.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED;
  exports.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND;
  exports.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS;
  exports.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED;
  exports.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED;
  exports.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION;
  exports.RPCGRPCSTATUSCODEVALUES_ABORTED = TMP_RPCGRPCSTATUSCODEVALUES_ABORTED;
  exports.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE;
  exports.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED;
  exports.RPCGRPCSTATUSCODEVALUES_INTERNAL = TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL;
  exports.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE;
  exports.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS;
  exports.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED;
  exports.RpcGrpcStatusCodeValues = {
    OK: TMP_RPCGRPCSTATUSCODEVALUES_OK,
    CANCELLED: TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED,
    UNKNOWN: TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN,
    INVALID_ARGUMENT: TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
    DEADLINE_EXCEEDED: TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
    NOT_FOUND: TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
    ALREADY_EXISTS: TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
    PERMISSION_DENIED: TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
    RESOURCE_EXHAUSTED: TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION: TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
    ABORTED: TMP_RPCGRPCSTATUSCODEVALUES_ABORTED,
    OUT_OF_RANGE: TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
    UNIMPLEMENTED: TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
    INTERNAL: TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL,
    UNAVAILABLE: TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
    DATA_LOSS: TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
    UNAUTHENTICATED: TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED
  };
  var TMP_MESSAGETYPEVALUES_SENT = "SENT";
  var TMP_MESSAGETYPEVALUES_RECEIVED = "RECEIVED";
  exports.MESSAGETYPEVALUES_SENT = TMP_MESSAGETYPEVALUES_SENT;
  exports.MESSAGETYPEVALUES_RECEIVED = TMP_MESSAGETYPEVALUES_RECEIVED;
  exports.MessageTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGETYPEVALUES_SENT,
    TMP_MESSAGETYPEVALUES_RECEIVED
  ]);
});

// node_modules/@opentelemetry/semantic-conventions/build/src/trace/index.js
var require_trace = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_SemanticAttributes(), exports);
});

// node_modules/@opentelemetry/semantic-conventions/build/src/resource/SemanticResourceAttributes.js
var require_SemanticResourceAttributes = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SEMRESATTRS_K8S_STATEFULSET_NAME = exports.SEMRESATTRS_K8S_STATEFULSET_UID = exports.SEMRESATTRS_K8S_DEPLOYMENT_NAME = exports.SEMRESATTRS_K8S_DEPLOYMENT_UID = exports.SEMRESATTRS_K8S_REPLICASET_NAME = exports.SEMRESATTRS_K8S_REPLICASET_UID = exports.SEMRESATTRS_K8S_CONTAINER_NAME = exports.SEMRESATTRS_K8S_POD_NAME = exports.SEMRESATTRS_K8S_POD_UID = exports.SEMRESATTRS_K8S_NAMESPACE_NAME = exports.SEMRESATTRS_K8S_NODE_UID = exports.SEMRESATTRS_K8S_NODE_NAME = exports.SEMRESATTRS_K8S_CLUSTER_NAME = exports.SEMRESATTRS_HOST_IMAGE_VERSION = exports.SEMRESATTRS_HOST_IMAGE_ID = exports.SEMRESATTRS_HOST_IMAGE_NAME = exports.SEMRESATTRS_HOST_ARCH = exports.SEMRESATTRS_HOST_TYPE = exports.SEMRESATTRS_HOST_NAME = exports.SEMRESATTRS_HOST_ID = exports.SEMRESATTRS_FAAS_MAX_MEMORY = exports.SEMRESATTRS_FAAS_INSTANCE = exports.SEMRESATTRS_FAAS_VERSION = exports.SEMRESATTRS_FAAS_ID = exports.SEMRESATTRS_FAAS_NAME = exports.SEMRESATTRS_DEVICE_MODEL_NAME = exports.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = exports.SEMRESATTRS_DEVICE_ID = exports.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = exports.SEMRESATTRS_CONTAINER_IMAGE_TAG = exports.SEMRESATTRS_CONTAINER_IMAGE_NAME = exports.SEMRESATTRS_CONTAINER_RUNTIME = exports.SEMRESATTRS_CONTAINER_ID = exports.SEMRESATTRS_CONTAINER_NAME = exports.SEMRESATTRS_AWS_LOG_STREAM_ARNS = exports.SEMRESATTRS_AWS_LOG_STREAM_NAMES = exports.SEMRESATTRS_AWS_LOG_GROUP_ARNS = exports.SEMRESATTRS_AWS_LOG_GROUP_NAMES = exports.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = exports.SEMRESATTRS_AWS_ECS_TASK_REVISION = exports.SEMRESATTRS_AWS_ECS_TASK_FAMILY = exports.SEMRESATTRS_AWS_ECS_TASK_ARN = exports.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = exports.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = exports.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = exports.SEMRESATTRS_CLOUD_PLATFORM = exports.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = exports.SEMRESATTRS_CLOUD_REGION = exports.SEMRESATTRS_CLOUD_ACCOUNT_ID = exports.SEMRESATTRS_CLOUD_PROVIDER = undefined;
  exports.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = exports.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = exports.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = exports.CLOUDPLATFORMVALUES_AZURE_AKS = exports.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = exports.CLOUDPLATFORMVALUES_AZURE_VM = exports.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = exports.CLOUDPLATFORMVALUES_AWS_LAMBDA = exports.CLOUDPLATFORMVALUES_AWS_EKS = exports.CLOUDPLATFORMVALUES_AWS_ECS = exports.CLOUDPLATFORMVALUES_AWS_EC2 = exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = exports.CloudProviderValues = exports.CLOUDPROVIDERVALUES_GCP = exports.CLOUDPROVIDERVALUES_AZURE = exports.CLOUDPROVIDERVALUES_AWS = exports.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = exports.SemanticResourceAttributes = exports.SEMRESATTRS_WEBENGINE_DESCRIPTION = exports.SEMRESATTRS_WEBENGINE_VERSION = exports.SEMRESATTRS_WEBENGINE_NAME = exports.SEMRESATTRS_TELEMETRY_AUTO_VERSION = exports.SEMRESATTRS_TELEMETRY_SDK_VERSION = exports.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = exports.SEMRESATTRS_TELEMETRY_SDK_NAME = exports.SEMRESATTRS_SERVICE_VERSION = exports.SEMRESATTRS_SERVICE_INSTANCE_ID = exports.SEMRESATTRS_SERVICE_NAMESPACE = exports.SEMRESATTRS_SERVICE_NAME = exports.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = exports.SEMRESATTRS_PROCESS_RUNTIME_VERSION = exports.SEMRESATTRS_PROCESS_RUNTIME_NAME = exports.SEMRESATTRS_PROCESS_OWNER = exports.SEMRESATTRS_PROCESS_COMMAND_ARGS = exports.SEMRESATTRS_PROCESS_COMMAND_LINE = exports.SEMRESATTRS_PROCESS_COMMAND = exports.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = exports.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = exports.SEMRESATTRS_PROCESS_PID = exports.SEMRESATTRS_OS_VERSION = exports.SEMRESATTRS_OS_NAME = exports.SEMRESATTRS_OS_DESCRIPTION = exports.SEMRESATTRS_OS_TYPE = exports.SEMRESATTRS_K8S_CRONJOB_NAME = exports.SEMRESATTRS_K8S_CRONJOB_UID = exports.SEMRESATTRS_K8S_JOB_NAME = exports.SEMRESATTRS_K8S_JOB_UID = exports.SEMRESATTRS_K8S_DAEMONSET_NAME = exports.SEMRESATTRS_K8S_DAEMONSET_UID = undefined;
  exports.TelemetrySdkLanguageValues = exports.TELEMETRYSDKLANGUAGEVALUES_WEBJS = exports.TELEMETRYSDKLANGUAGEVALUES_RUBY = exports.TELEMETRYSDKLANGUAGEVALUES_PYTHON = exports.TELEMETRYSDKLANGUAGEVALUES_PHP = exports.TELEMETRYSDKLANGUAGEVALUES_NODEJS = exports.TELEMETRYSDKLANGUAGEVALUES_JAVA = exports.TELEMETRYSDKLANGUAGEVALUES_GO = exports.TELEMETRYSDKLANGUAGEVALUES_ERLANG = exports.TELEMETRYSDKLANGUAGEVALUES_DOTNET = exports.TELEMETRYSDKLANGUAGEVALUES_CPP = exports.OsTypeValues = exports.OSTYPEVALUES_Z_OS = exports.OSTYPEVALUES_SOLARIS = exports.OSTYPEVALUES_AIX = exports.OSTYPEVALUES_HPUX = exports.OSTYPEVALUES_DRAGONFLYBSD = exports.OSTYPEVALUES_OPENBSD = exports.OSTYPEVALUES_NETBSD = exports.OSTYPEVALUES_FREEBSD = exports.OSTYPEVALUES_DARWIN = exports.OSTYPEVALUES_LINUX = exports.OSTYPEVALUES_WINDOWS = exports.HostArchValues = exports.HOSTARCHVALUES_X86 = exports.HOSTARCHVALUES_PPC64 = exports.HOSTARCHVALUES_PPC32 = exports.HOSTARCHVALUES_IA64 = exports.HOSTARCHVALUES_ARM64 = exports.HOSTARCHVALUES_ARM32 = exports.HOSTARCHVALUES_AMD64 = exports.AwsEcsLaunchtypeValues = exports.AWSECSLAUNCHTYPEVALUES_FARGATE = exports.AWSECSLAUNCHTYPEVALUES_EC2 = exports.CloudPlatformValues = exports.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = exports.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = exports.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = exports.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = undefined;
  var utils_1 = require_utils();
  var TMP_CLOUD_PROVIDER = "cloud.provider";
  var TMP_CLOUD_ACCOUNT_ID = "cloud.account.id";
  var TMP_CLOUD_REGION = "cloud.region";
  var TMP_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
  var TMP_CLOUD_PLATFORM = "cloud.platform";
  var TMP_AWS_ECS_CONTAINER_ARN = "aws.ecs.container.arn";
  var TMP_AWS_ECS_CLUSTER_ARN = "aws.ecs.cluster.arn";
  var TMP_AWS_ECS_LAUNCHTYPE = "aws.ecs.launchtype";
  var TMP_AWS_ECS_TASK_ARN = "aws.ecs.task.arn";
  var TMP_AWS_ECS_TASK_FAMILY = "aws.ecs.task.family";
  var TMP_AWS_ECS_TASK_REVISION = "aws.ecs.task.revision";
  var TMP_AWS_EKS_CLUSTER_ARN = "aws.eks.cluster.arn";
  var TMP_AWS_LOG_GROUP_NAMES = "aws.log.group.names";
  var TMP_AWS_LOG_GROUP_ARNS = "aws.log.group.arns";
  var TMP_AWS_LOG_STREAM_NAMES = "aws.log.stream.names";
  var TMP_AWS_LOG_STREAM_ARNS = "aws.log.stream.arns";
  var TMP_CONTAINER_NAME = "container.name";
  var TMP_CONTAINER_ID = "container.id";
  var TMP_CONTAINER_RUNTIME = "container.runtime";
  var TMP_CONTAINER_IMAGE_NAME = "container.image.name";
  var TMP_CONTAINER_IMAGE_TAG = "container.image.tag";
  var TMP_DEPLOYMENT_ENVIRONMENT = "deployment.environment";
  var TMP_DEVICE_ID = "device.id";
  var TMP_DEVICE_MODEL_IDENTIFIER = "device.model.identifier";
  var TMP_DEVICE_MODEL_NAME = "device.model.name";
  var TMP_FAAS_NAME = "faas.name";
  var TMP_FAAS_ID = "faas.id";
  var TMP_FAAS_VERSION = "faas.version";
  var TMP_FAAS_INSTANCE = "faas.instance";
  var TMP_FAAS_MAX_MEMORY = "faas.max_memory";
  var TMP_HOST_ID = "host.id";
  var TMP_HOST_NAME = "host.name";
  var TMP_HOST_TYPE = "host.type";
  var TMP_HOST_ARCH = "host.arch";
  var TMP_HOST_IMAGE_NAME = "host.image.name";
  var TMP_HOST_IMAGE_ID = "host.image.id";
  var TMP_HOST_IMAGE_VERSION = "host.image.version";
  var TMP_K8S_CLUSTER_NAME = "k8s.cluster.name";
  var TMP_K8S_NODE_NAME = "k8s.node.name";
  var TMP_K8S_NODE_UID = "k8s.node.uid";
  var TMP_K8S_NAMESPACE_NAME = "k8s.namespace.name";
  var TMP_K8S_POD_UID = "k8s.pod.uid";
  var TMP_K8S_POD_NAME = "k8s.pod.name";
  var TMP_K8S_CONTAINER_NAME = "k8s.container.name";
  var TMP_K8S_REPLICASET_UID = "k8s.replicaset.uid";
  var TMP_K8S_REPLICASET_NAME = "k8s.replicaset.name";
  var TMP_K8S_DEPLOYMENT_UID = "k8s.deployment.uid";
  var TMP_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
  var TMP_K8S_STATEFULSET_UID = "k8s.statefulset.uid";
  var TMP_K8S_STATEFULSET_NAME = "k8s.statefulset.name";
  var TMP_K8S_DAEMONSET_UID = "k8s.daemonset.uid";
  var TMP_K8S_DAEMONSET_NAME = "k8s.daemonset.name";
  var TMP_K8S_JOB_UID = "k8s.job.uid";
  var TMP_K8S_JOB_NAME = "k8s.job.name";
  var TMP_K8S_CRONJOB_UID = "k8s.cronjob.uid";
  var TMP_K8S_CRONJOB_NAME = "k8s.cronjob.name";
  var TMP_OS_TYPE = "os.type";
  var TMP_OS_DESCRIPTION = "os.description";
  var TMP_OS_NAME = "os.name";
  var TMP_OS_VERSION = "os.version";
  var TMP_PROCESS_PID = "process.pid";
  var TMP_PROCESS_EXECUTABLE_NAME = "process.executable.name";
  var TMP_PROCESS_EXECUTABLE_PATH = "process.executable.path";
  var TMP_PROCESS_COMMAND = "process.command";
  var TMP_PROCESS_COMMAND_LINE = "process.command_line";
  var TMP_PROCESS_COMMAND_ARGS = "process.command_args";
  var TMP_PROCESS_OWNER = "process.owner";
  var TMP_PROCESS_RUNTIME_NAME = "process.runtime.name";
  var TMP_PROCESS_RUNTIME_VERSION = "process.runtime.version";
  var TMP_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
  var TMP_SERVICE_NAME = "service.name";
  var TMP_SERVICE_NAMESPACE = "service.namespace";
  var TMP_SERVICE_INSTANCE_ID = "service.instance.id";
  var TMP_SERVICE_VERSION = "service.version";
  var TMP_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  var TMP_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  var TMP_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  var TMP_TELEMETRY_AUTO_VERSION = "telemetry.auto.version";
  var TMP_WEBENGINE_NAME = "webengine.name";
  var TMP_WEBENGINE_VERSION = "webengine.version";
  var TMP_WEBENGINE_DESCRIPTION = "webengine.description";
  exports.SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
  exports.SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
  exports.SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
  exports.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
  exports.SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
  exports.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
  exports.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
  exports.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
  exports.SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
  exports.SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
  exports.SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
  exports.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
  exports.SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
  exports.SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
  exports.SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
  exports.SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
  exports.SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
  exports.SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
  exports.SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
  exports.SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
  exports.SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
  exports.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
  exports.SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
  exports.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
  exports.SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
  exports.SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
  exports.SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
  exports.SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
  exports.SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
  exports.SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
  exports.SEMRESATTRS_HOST_ID = TMP_HOST_ID;
  exports.SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
  exports.SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
  exports.SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
  exports.SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
  exports.SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
  exports.SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
  exports.SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
  exports.SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
  exports.SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
  exports.SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
  exports.SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
  exports.SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
  exports.SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
  exports.SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
  exports.SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
  exports.SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
  exports.SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
  exports.SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
  exports.SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
  exports.SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
  exports.SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
  exports.SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
  exports.SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
  exports.SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
  exports.SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
  exports.SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
  exports.SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
  exports.SEMRESATTRS_OS_NAME = TMP_OS_NAME;
  exports.SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
  exports.SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
  exports.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
  exports.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
  exports.SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
  exports.SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
  exports.SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
  exports.SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
  exports.SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
  exports.SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
  exports.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
  exports.SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
  exports.SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
  exports.SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
  exports.SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
  exports.SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
  exports.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
  exports.SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
  exports.SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
  exports.SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
  exports.SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
  exports.SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
  exports.SemanticResourceAttributes = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUD_PROVIDER,
    TMP_CLOUD_ACCOUNT_ID,
    TMP_CLOUD_REGION,
    TMP_CLOUD_AVAILABILITY_ZONE,
    TMP_CLOUD_PLATFORM,
    TMP_AWS_ECS_CONTAINER_ARN,
    TMP_AWS_ECS_CLUSTER_ARN,
    TMP_AWS_ECS_LAUNCHTYPE,
    TMP_AWS_ECS_TASK_ARN,
    TMP_AWS_ECS_TASK_FAMILY,
    TMP_AWS_ECS_TASK_REVISION,
    TMP_AWS_EKS_CLUSTER_ARN,
    TMP_AWS_LOG_GROUP_NAMES,
    TMP_AWS_LOG_GROUP_ARNS,
    TMP_AWS_LOG_STREAM_NAMES,
    TMP_AWS_LOG_STREAM_ARNS,
    TMP_CONTAINER_NAME,
    TMP_CONTAINER_ID,
    TMP_CONTAINER_RUNTIME,
    TMP_CONTAINER_IMAGE_NAME,
    TMP_CONTAINER_IMAGE_TAG,
    TMP_DEPLOYMENT_ENVIRONMENT,
    TMP_DEVICE_ID,
    TMP_DEVICE_MODEL_IDENTIFIER,
    TMP_DEVICE_MODEL_NAME,
    TMP_FAAS_NAME,
    TMP_FAAS_ID,
    TMP_FAAS_VERSION,
    TMP_FAAS_INSTANCE,
    TMP_FAAS_MAX_MEMORY,
    TMP_HOST_ID,
    TMP_HOST_NAME,
    TMP_HOST_TYPE,
    TMP_HOST_ARCH,
    TMP_HOST_IMAGE_NAME,
    TMP_HOST_IMAGE_ID,
    TMP_HOST_IMAGE_VERSION,
    TMP_K8S_CLUSTER_NAME,
    TMP_K8S_NODE_NAME,
    TMP_K8S_NODE_UID,
    TMP_K8S_NAMESPACE_NAME,
    TMP_K8S_POD_UID,
    TMP_K8S_POD_NAME,
    TMP_K8S_CONTAINER_NAME,
    TMP_K8S_REPLICASET_UID,
    TMP_K8S_REPLICASET_NAME,
    TMP_K8S_DEPLOYMENT_UID,
    TMP_K8S_DEPLOYMENT_NAME,
    TMP_K8S_STATEFULSET_UID,
    TMP_K8S_STATEFULSET_NAME,
    TMP_K8S_DAEMONSET_UID,
    TMP_K8S_DAEMONSET_NAME,
    TMP_K8S_JOB_UID,
    TMP_K8S_JOB_NAME,
    TMP_K8S_CRONJOB_UID,
    TMP_K8S_CRONJOB_NAME,
    TMP_OS_TYPE,
    TMP_OS_DESCRIPTION,
    TMP_OS_NAME,
    TMP_OS_VERSION,
    TMP_PROCESS_PID,
    TMP_PROCESS_EXECUTABLE_NAME,
    TMP_PROCESS_EXECUTABLE_PATH,
    TMP_PROCESS_COMMAND,
    TMP_PROCESS_COMMAND_LINE,
    TMP_PROCESS_COMMAND_ARGS,
    TMP_PROCESS_OWNER,
    TMP_PROCESS_RUNTIME_NAME,
    TMP_PROCESS_RUNTIME_VERSION,
    TMP_PROCESS_RUNTIME_DESCRIPTION,
    TMP_SERVICE_NAME,
    TMP_SERVICE_NAMESPACE,
    TMP_SERVICE_INSTANCE_ID,
    TMP_SERVICE_VERSION,
    TMP_TELEMETRY_SDK_NAME,
    TMP_TELEMETRY_SDK_LANGUAGE,
    TMP_TELEMETRY_SDK_VERSION,
    TMP_TELEMETRY_AUTO_VERSION,
    TMP_WEBENGINE_NAME,
    TMP_WEBENGINE_VERSION,
    TMP_WEBENGINE_DESCRIPTION
  ]);
  var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
  var TMP_CLOUDPROVIDERVALUES_AWS = "aws";
  var TMP_CLOUDPROVIDERVALUES_AZURE = "azure";
  var TMP_CLOUDPROVIDERVALUES_GCP = "gcp";
  exports.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
  exports.CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
  exports.CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
  exports.CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
  exports.CloudProviderValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_CLOUDPROVIDERVALUES_AWS,
    TMP_CLOUDPROVIDERVALUES_AZURE,
    TMP_CLOUDPROVIDERVALUES_GCP
  ]);
  var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = "alibaba_cloud_ecs";
  var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = "alibaba_cloud_fc";
  var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = "aws_ec2";
  var TMP_CLOUDPLATFORMVALUES_AWS_ECS = "aws_ecs";
  var TMP_CLOUDPLATFORMVALUES_AWS_EKS = "aws_eks";
  var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = "aws_lambda";
  var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = "aws_elastic_beanstalk";
  var TMP_CLOUDPLATFORMVALUES_AZURE_VM = "azure_vm";
  var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = "azure_container_instances";
  var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = "azure_aks";
  var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = "azure_functions";
  var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = "azure_app_service";
  var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = "gcp_compute_engine";
  var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = "gcp_cloud_run";
  var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = "gcp_kubernetes_engine";
  var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = "gcp_cloud_functions";
  var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = "gcp_app_engine";
  exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
  exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
  exports.CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
  exports.CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
  exports.CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
  exports.CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
  exports.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
  exports.CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
  exports.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
  exports.CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
  exports.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
  exports.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
  exports.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
  exports.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
  exports.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
  exports.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
  exports.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
  exports.CloudPlatformValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    TMP_CLOUDPLATFORMVALUES_AWS_EC2,
    TMP_CLOUDPLATFORMVALUES_AWS_ECS,
    TMP_CLOUDPLATFORMVALUES_AWS_EKS,
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    TMP_CLOUDPLATFORMVALUES_AZURE_VM,
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
  ]);
  var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = "ec2";
  var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = "fargate";
  exports.AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
  exports.AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
  exports.AwsEcsLaunchtypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_AWSECSLAUNCHTYPEVALUES_EC2,
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
  ]);
  var TMP_HOSTARCHVALUES_AMD64 = "amd64";
  var TMP_HOSTARCHVALUES_ARM32 = "arm32";
  var TMP_HOSTARCHVALUES_ARM64 = "arm64";
  var TMP_HOSTARCHVALUES_IA64 = "ia64";
  var TMP_HOSTARCHVALUES_PPC32 = "ppc32";
  var TMP_HOSTARCHVALUES_PPC64 = "ppc64";
  var TMP_HOSTARCHVALUES_X86 = "x86";
  exports.HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
  exports.HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
  exports.HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
  exports.HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
  exports.HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
  exports.HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
  exports.HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
  exports.HostArchValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_HOSTARCHVALUES_AMD64,
    TMP_HOSTARCHVALUES_ARM32,
    TMP_HOSTARCHVALUES_ARM64,
    TMP_HOSTARCHVALUES_IA64,
    TMP_HOSTARCHVALUES_PPC32,
    TMP_HOSTARCHVALUES_PPC64,
    TMP_HOSTARCHVALUES_X86
  ]);
  var TMP_OSTYPEVALUES_WINDOWS = "windows";
  var TMP_OSTYPEVALUES_LINUX = "linux";
  var TMP_OSTYPEVALUES_DARWIN = "darwin";
  var TMP_OSTYPEVALUES_FREEBSD = "freebsd";
  var TMP_OSTYPEVALUES_NETBSD = "netbsd";
  var TMP_OSTYPEVALUES_OPENBSD = "openbsd";
  var TMP_OSTYPEVALUES_DRAGONFLYBSD = "dragonflybsd";
  var TMP_OSTYPEVALUES_HPUX = "hpux";
  var TMP_OSTYPEVALUES_AIX = "aix";
  var TMP_OSTYPEVALUES_SOLARIS = "solaris";
  var TMP_OSTYPEVALUES_Z_OS = "z_os";
  exports.OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
  exports.OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
  exports.OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
  exports.OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
  exports.OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
  exports.OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
  exports.OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
  exports.OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
  exports.OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
  exports.OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
  exports.OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
  exports.OsTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_OSTYPEVALUES_WINDOWS,
    TMP_OSTYPEVALUES_LINUX,
    TMP_OSTYPEVALUES_DARWIN,
    TMP_OSTYPEVALUES_FREEBSD,
    TMP_OSTYPEVALUES_NETBSD,
    TMP_OSTYPEVALUES_OPENBSD,
    TMP_OSTYPEVALUES_DRAGONFLYBSD,
    TMP_OSTYPEVALUES_HPUX,
    TMP_OSTYPEVALUES_AIX,
    TMP_OSTYPEVALUES_SOLARIS,
    TMP_OSTYPEVALUES_Z_OS
  ]);
  var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = "cpp";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = "dotnet";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = "erlang";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = "go";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = "java";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = "nodejs";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = "php";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = "python";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = "ruby";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = "webjs";
  exports.TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
  exports.TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
  exports.TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
  exports.TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
  exports.TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
  exports.TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
  exports.TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
  exports.TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
  exports.TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
  exports.TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
  exports.TelemetrySdkLanguageValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
  ]);
});

// node_modules/@opentelemetry/semantic-conventions/build/src/resource/index.js
var require_resource = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_SemanticResourceAttributes(), exports);
});

// node_modules/@opentelemetry/semantic-conventions/build/src/stable_attributes.js
var require_stable_attributes = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ATTR_EXCEPTION_TYPE = exports.ATTR_EXCEPTION_STACKTRACE = exports.ATTR_EXCEPTION_MESSAGE = exports.ATTR_EXCEPTION_ESCAPED = exports.ERROR_TYPE_VALUE_OTHER = exports.ATTR_ERROR_TYPE = exports.DOTNET_GC_HEAP_GENERATION_VALUE_POH = exports.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = exports.ATTR_DOTNET_GC_HEAP_GENERATION = exports.DB_SYSTEM_NAME_VALUE_POSTGRESQL = exports.DB_SYSTEM_NAME_VALUE_MYSQL = exports.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = exports.DB_SYSTEM_NAME_VALUE_MARIADB = exports.ATTR_DB_SYSTEM_NAME = exports.ATTR_DB_STORED_PROCEDURE_NAME = exports.ATTR_DB_RESPONSE_STATUS_CODE = exports.ATTR_DB_QUERY_TEXT = exports.ATTR_DB_QUERY_SUMMARY = exports.ATTR_DB_OPERATION_NAME = exports.ATTR_DB_OPERATION_BATCH_SIZE = exports.ATTR_DB_NAMESPACE = exports.ATTR_DB_COLLECTION_NAME = exports.ATTR_CODE_STACKTRACE = exports.ATTR_CODE_LINE_NUMBER = exports.ATTR_CODE_FUNCTION_NAME = exports.ATTR_CODE_FILE_PATH = exports.ATTR_CODE_COLUMN_NUMBER = exports.ATTR_CLIENT_PORT = exports.ATTR_CLIENT_ADDRESS = exports.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = undefined;
  exports.OTEL_STATUS_CODE_VALUE_ERROR = exports.ATTR_OTEL_STATUS_CODE = exports.ATTR_OTEL_SCOPE_VERSION = exports.ATTR_OTEL_SCOPE_NAME = exports.NETWORK_TYPE_VALUE_IPV6 = exports.NETWORK_TYPE_VALUE_IPV4 = exports.ATTR_NETWORK_TYPE = exports.NETWORK_TRANSPORT_VALUE_UNIX = exports.NETWORK_TRANSPORT_VALUE_UDP = exports.NETWORK_TRANSPORT_VALUE_TCP = exports.NETWORK_TRANSPORT_VALUE_QUIC = exports.NETWORK_TRANSPORT_VALUE_PIPE = exports.ATTR_NETWORK_TRANSPORT = exports.ATTR_NETWORK_PROTOCOL_VERSION = exports.ATTR_NETWORK_PROTOCOL_NAME = exports.ATTR_NETWORK_PEER_PORT = exports.ATTR_NETWORK_PEER_ADDRESS = exports.ATTR_NETWORK_LOCAL_PORT = exports.ATTR_NETWORK_LOCAL_ADDRESS = exports.JVM_THREAD_STATE_VALUE_WAITING = exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = exports.JVM_THREAD_STATE_VALUE_TERMINATED = exports.JVM_THREAD_STATE_VALUE_RUNNABLE = exports.JVM_THREAD_STATE_VALUE_NEW = exports.JVM_THREAD_STATE_VALUE_BLOCKED = exports.ATTR_JVM_THREAD_STATE = exports.ATTR_JVM_THREAD_DAEMON = exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = exports.JVM_MEMORY_TYPE_VALUE_HEAP = exports.ATTR_JVM_MEMORY_TYPE = exports.ATTR_JVM_MEMORY_POOL_NAME = exports.ATTR_JVM_GC_NAME = exports.ATTR_JVM_GC_ACTION = exports.ATTR_HTTP_ROUTE = exports.ATTR_HTTP_RESPONSE_STATUS_CODE = exports.ATTR_HTTP_RESPONSE_HEADER = exports.ATTR_HTTP_REQUEST_RESEND_COUNT = exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = exports.HTTP_REQUEST_METHOD_VALUE_TRACE = exports.HTTP_REQUEST_METHOD_VALUE_PUT = exports.HTTP_REQUEST_METHOD_VALUE_POST = exports.HTTP_REQUEST_METHOD_VALUE_PATCH = exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = exports.HTTP_REQUEST_METHOD_VALUE_HEAD = exports.HTTP_REQUEST_METHOD_VALUE_GET = exports.HTTP_REQUEST_METHOD_VALUE_DELETE = exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = exports.HTTP_REQUEST_METHOD_VALUE_OTHER = exports.ATTR_HTTP_REQUEST_METHOD = exports.ATTR_HTTP_REQUEST_HEADER = undefined;
  exports.ATTR_USER_AGENT_ORIGINAL = exports.ATTR_URL_SCHEME = exports.ATTR_URL_QUERY = exports.ATTR_URL_PATH = exports.ATTR_URL_FULL = exports.ATTR_URL_FRAGMENT = exports.ATTR_TELEMETRY_SDK_VERSION = exports.ATTR_TELEMETRY_SDK_NAME = exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = exports.ATTR_TELEMETRY_SDK_LANGUAGE = exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = exports.ATTR_SIGNALR_TRANSPORT = exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = exports.ATTR_SIGNALR_CONNECTION_STATUS = exports.ATTR_SERVICE_VERSION = exports.ATTR_SERVICE_NAMESPACE = exports.ATTR_SERVICE_NAME = exports.ATTR_SERVICE_INSTANCE_ID = exports.ATTR_SERVER_PORT = exports.ATTR_SERVER_ADDRESS = exports.ATTR_OTEL_STATUS_DESCRIPTION = exports.OTEL_STATUS_CODE_VALUE_OK = undefined;
  exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
  exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
  exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
  exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
  exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
  exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
  exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
  exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
  exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
  exports.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = "aspnetcore.user.is_authenticated";
  exports.ATTR_CLIENT_ADDRESS = "client.address";
  exports.ATTR_CLIENT_PORT = "client.port";
  exports.ATTR_CODE_COLUMN_NUMBER = "code.column.number";
  exports.ATTR_CODE_FILE_PATH = "code.file.path";
  exports.ATTR_CODE_FUNCTION_NAME = "code.function.name";
  exports.ATTR_CODE_LINE_NUMBER = "code.line.number";
  exports.ATTR_CODE_STACKTRACE = "code.stacktrace";
  exports.ATTR_DB_COLLECTION_NAME = "db.collection.name";
  exports.ATTR_DB_NAMESPACE = "db.namespace";
  exports.ATTR_DB_OPERATION_BATCH_SIZE = "db.operation.batch.size";
  exports.ATTR_DB_OPERATION_NAME = "db.operation.name";
  exports.ATTR_DB_QUERY_SUMMARY = "db.query.summary";
  exports.ATTR_DB_QUERY_TEXT = "db.query.text";
  exports.ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
  exports.ATTR_DB_STORED_PROCEDURE_NAME = "db.stored_procedure.name";
  exports.ATTR_DB_SYSTEM_NAME = "db.system.name";
  exports.DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
  exports.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
  exports.DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
  exports.DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
  exports.ATTR_DOTNET_GC_HEAP_GENERATION = "dotnet.gc.heap.generation";
  exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
  exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
  exports.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
  exports.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
  exports.DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
  exports.ATTR_ERROR_TYPE = "error.type";
  exports.ERROR_TYPE_VALUE_OTHER = "_OTHER";
  exports.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
  exports.ATTR_EXCEPTION_MESSAGE = "exception.message";
  exports.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
  exports.ATTR_EXCEPTION_TYPE = "exception.type";
  var ATTR_HTTP_REQUEST_HEADER = (key) => `http.request.header.${key}`;
  exports.ATTR_HTTP_REQUEST_HEADER = ATTR_HTTP_REQUEST_HEADER;
  exports.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
  exports.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
  exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
  exports.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
  exports.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
  exports.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
  exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
  exports.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
  exports.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
  exports.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
  exports.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
  exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
  exports.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
  var ATTR_HTTP_RESPONSE_HEADER = (key) => `http.response.header.${key}`;
  exports.ATTR_HTTP_RESPONSE_HEADER = ATTR_HTTP_RESPONSE_HEADER;
  exports.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
  exports.ATTR_HTTP_ROUTE = "http.route";
  exports.ATTR_JVM_GC_ACTION = "jvm.gc.action";
  exports.ATTR_JVM_GC_NAME = "jvm.gc.name";
  exports.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
  exports.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
  exports.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
  exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
  exports.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
  exports.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
  exports.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
  exports.JVM_THREAD_STATE_VALUE_NEW = "new";
  exports.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
  exports.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
  exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
  exports.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
  exports.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
  exports.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
  exports.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
  exports.ATTR_NETWORK_PEER_PORT = "network.peer.port";
  exports.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
  exports.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
  exports.ATTR_NETWORK_TRANSPORT = "network.transport";
  exports.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
  exports.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
  exports.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
  exports.NETWORK_TRANSPORT_VALUE_UDP = "udp";
  exports.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
  exports.ATTR_NETWORK_TYPE = "network.type";
  exports.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
  exports.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
  exports.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
  exports.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
  exports.ATTR_OTEL_STATUS_CODE = "otel.status_code";
  exports.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
  exports.OTEL_STATUS_CODE_VALUE_OK = "OK";
  exports.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
  exports.ATTR_SERVER_ADDRESS = "server.address";
  exports.ATTR_SERVER_PORT = "server.port";
  exports.ATTR_SERVICE_INSTANCE_ID = "service.instance.id";
  exports.ATTR_SERVICE_NAME = "service.name";
  exports.ATTR_SERVICE_NAMESPACE = "service.namespace";
  exports.ATTR_SERVICE_VERSION = "service.version";
  exports.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
  exports.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
  exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
  exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
  exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
  exports.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
  exports.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  exports.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  exports.ATTR_URL_FRAGMENT = "url.fragment";
  exports.ATTR_URL_FULL = "url.full";
  exports.ATTR_URL_PATH = "url.path";
  exports.ATTR_URL_QUERY = "url.query";
  exports.ATTR_URL_SCHEME = "url.scheme";
  exports.ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
});

// node_modules/@opentelemetry/semantic-conventions/build/src/stable_metrics.js
var require_stable_metrics = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = exports.METRIC_KESTREL_UPGRADED_CONNECTIONS = exports.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = exports.METRIC_KESTREL_REJECTED_CONNECTIONS = exports.METRIC_KESTREL_QUEUED_REQUESTS = exports.METRIC_KESTREL_QUEUED_CONNECTIONS = exports.METRIC_KESTREL_CONNECTION_DURATION = exports.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = exports.METRIC_KESTREL_ACTIVE_CONNECTIONS = exports.METRIC_JVM_THREAD_COUNT = exports.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = exports.METRIC_JVM_MEMORY_USED = exports.METRIC_JVM_MEMORY_LIMIT = exports.METRIC_JVM_MEMORY_COMMITTED = exports.METRIC_JVM_GC_DURATION = exports.METRIC_JVM_CPU_TIME = exports.METRIC_JVM_CPU_RECENT_UTILIZATION = exports.METRIC_JVM_CPU_COUNT = exports.METRIC_JVM_CLASS_UNLOADED = exports.METRIC_JVM_CLASS_LOADED = exports.METRIC_JVM_CLASS_COUNT = exports.METRIC_HTTP_SERVER_REQUEST_DURATION = exports.METRIC_HTTP_CLIENT_REQUEST_DURATION = exports.METRIC_DOTNET_TIMER_COUNT = exports.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = exports.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = exports.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = exports.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = exports.METRIC_DOTNET_PROCESS_CPU_TIME = exports.METRIC_DOTNET_PROCESS_CPU_COUNT = exports.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = exports.METRIC_DOTNET_JIT_COMPILED_METHODS = exports.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = exports.METRIC_DOTNET_JIT_COMPILATION_TIME = exports.METRIC_DOTNET_GC_PAUSE_TIME = exports.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = exports.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = exports.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = exports.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = exports.METRIC_DOTNET_GC_COLLECTIONS = exports.METRIC_DOTNET_EXCEPTIONS = exports.METRIC_DOTNET_ASSEMBLY_COUNT = exports.METRIC_DB_CLIENT_OPERATION_DURATION = exports.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = exports.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = exports.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = undefined;
  exports.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = undefined;
  exports.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
  exports.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
  exports.METRIC_DB_CLIENT_OPERATION_DURATION = "db.client.operation.duration";
  exports.METRIC_DOTNET_ASSEMBLY_COUNT = "dotnet.assembly.count";
  exports.METRIC_DOTNET_EXCEPTIONS = "dotnet.exceptions";
  exports.METRIC_DOTNET_GC_COLLECTIONS = "dotnet.gc.collections";
  exports.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = "dotnet.gc.heap.total_allocated";
  exports.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = "dotnet.gc.last_collection.heap.fragmentation.size";
  exports.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = "dotnet.gc.last_collection.heap.size";
  exports.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = "dotnet.gc.last_collection.memory.committed_size";
  exports.METRIC_DOTNET_GC_PAUSE_TIME = "dotnet.gc.pause.time";
  exports.METRIC_DOTNET_JIT_COMPILATION_TIME = "dotnet.jit.compilation.time";
  exports.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = "dotnet.jit.compiled_il.size";
  exports.METRIC_DOTNET_JIT_COMPILED_METHODS = "dotnet.jit.compiled_methods";
  exports.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = "dotnet.monitor.lock_contentions";
  exports.METRIC_DOTNET_PROCESS_CPU_COUNT = "dotnet.process.cpu.count";
  exports.METRIC_DOTNET_PROCESS_CPU_TIME = "dotnet.process.cpu.time";
  exports.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = "dotnet.process.memory.working_set";
  exports.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = "dotnet.thread_pool.queue.length";
  exports.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = "dotnet.thread_pool.thread.count";
  exports.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = "dotnet.thread_pool.work_item.count";
  exports.METRIC_DOTNET_TIMER_COUNT = "dotnet.timer.count";
  exports.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
  exports.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
  exports.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
  exports.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
  exports.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
  exports.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
  exports.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
  exports.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
  exports.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
  exports.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
  exports.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
  exports.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
  exports.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
  exports.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
  exports.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
  exports.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
  exports.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
  exports.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
  exports.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
  exports.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
  exports.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
  exports.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
  exports.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
  exports.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
});

// node_modules/@opentelemetry/semantic-conventions/build/src/stable_events.js
var require_stable_events = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EVENT_EXCEPTION = undefined;
  exports.EVENT_EXCEPTION = "exception";
});

// node_modules/@opentelemetry/semantic-conventions/build/src/index.js
var require_src2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_trace(), exports);
  __exportStar(require_resource(), exports);
  __exportStar(require_stable_attributes(), exports);
  __exportStar(require_stable_metrics(), exports);
  __exportStar(require_stable_events(), exports);
});

// node_modules/@opentelemetry/resources/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js
function getStringFromEnv(key) {
  const raw = process.env[key];
  if (raw == null || raw.trim() === "") {
    return;
  }
  return raw;
}
var init_environment = () => {};

// node_modules/@opentelemetry/resources/node_modules/@opentelemetry/core/build/esm/platform/node/index.js
var init_node = __esm(() => {
  init_environment();
});

// node_modules/@opentelemetry/resources/node_modules/@opentelemetry/core/build/esm/platform/index.js
var init_platform2 = __esm(() => {
  init_node();
});

// node_modules/@opentelemetry/resources/node_modules/@opentelemetry/core/build/esm/index.js
var init_esm2 = __esm(() => {
  init_platform2();
});

// node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetector.js
class EnvDetector {
  _MAX_LENGTH = 255;
  _COMMA_SEPARATOR = ",";
  _LABEL_KEY_VALUE_SPLITTER = "=";
  detect(_config) {
    const attributes = {};
    const rawAttributes = getStringFromEnv("OTEL_RESOURCE_ATTRIBUTES");
    const serviceName = getStringFromEnv("OTEL_SERVICE_NAME");
    if (rawAttributes) {
      try {
        const parsedAttributes = this._parseResourceAttributes(rawAttributes);
        Object.assign(attributes, parsedAttributes);
      } catch (e) {
        import_api.diag.debug(`EnvDetector failed: ${e instanceof Error ? e.message : e}`);
      }
    }
    if (serviceName) {
      attributes[import_semantic_conventions.ATTR_SERVICE_NAME] = serviceName;
    }
    return { attributes };
  }
  _parseResourceAttributes(rawEnvAttributes) {
    if (!rawEnvAttributes)
      return {};
    const attributes = {};
    const rawAttributes = rawEnvAttributes.split(this._COMMA_SEPARATOR);
    for (const rawAttribute of rawAttributes) {
      const keyValuePair = rawAttribute.split(this._LABEL_KEY_VALUE_SPLITTER);
      if (keyValuePair.length !== 2) {
        throw new Error(`Invalid format for OTEL_RESOURCE_ATTRIBUTES: "${rawAttribute}". ` + `Expected format: key=value. The ',' and '=' characters must be percent-encoded in keys and values.`);
      }
      const [rawKey, rawValue] = keyValuePair;
      const key = rawKey.trim();
      const value = rawValue.trim();
      if (key.length === 0) {
        throw new Error(`Invalid OTEL_RESOURCE_ATTRIBUTES: empty attribute key in "${rawAttribute}".`);
      }
      let decodedKey;
      let decodedValue;
      try {
        decodedKey = decodeURIComponent(key);
        decodedValue = decodeURIComponent(value);
      } catch (e) {
        throw new Error(`Failed to percent-decode OTEL_RESOURCE_ATTRIBUTES entry "${rawAttribute}": ${e instanceof Error ? e.message : e}`);
      }
      if (decodedKey.length > this._MAX_LENGTH) {
        throw new Error(`Attribute key exceeds the maximum length of ${this._MAX_LENGTH} characters: "${decodedKey}".`);
      }
      if (decodedValue.length > this._MAX_LENGTH) {
        throw new Error(`Attribute value exceeds the maximum length of ${this._MAX_LENGTH} characters for key "${decodedKey}".`);
      }
      attributes[decodedKey] = decodedValue;
    }
    return attributes;
  }
}
var import_api, import_semantic_conventions, envDetector;
var init_EnvDetector = __esm(() => {
  init_esm2();
  import_api = __toESM(require_src(), 1);
  import_semantic_conventions = __toESM(require_src2(), 1);
  envDetector = new EnvDetector;
});

// node_modules/@opentelemetry/resources/build/esm/semconv.js
var ATTR_HOST_ARCH = "host.arch", ATTR_HOST_ID = "host.id", ATTR_HOST_NAME = "host.name", ATTR_OS_TYPE = "os.type", ATTR_OS_VERSION = "os.version";
var init_semconv = () => {};

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId.js
import * as process3 from "process";
async function getMachineId() {
  if (!getMachineIdImpl) {
    switch (process3.platform) {
      case "darwin":
        getMachineIdImpl = (await import("./chunk-2km9pen2.js")).getMachineId;
        break;
      case "linux":
        getMachineIdImpl = (await import("./chunk-ccs41vj7.js")).getMachineId;
        break;
      case "freebsd":
        getMachineIdImpl = (await import("./chunk-jnre20dj.js")).getMachineId;
        break;
      case "win32":
        getMachineIdImpl = (await import("./chunk-h72p0j3b.js")).getMachineId;
        break;
      default:
        getMachineIdImpl = (await import("./chunk-k2vkx2s0.js")).getMachineId;
        break;
    }
  }
  return getMachineIdImpl();
}
var getMachineIdImpl;
var init_getMachineId = () => {};

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/utils.js
var normalizeArch = (nodeArchString) => {
  switch (nodeArchString) {
    case "arm":
      return "arm32";
    case "ppc":
      return "ppc32";
    case "x64":
      return "amd64";
    default:
      return nodeArchString;
  }
}, normalizeType = (nodePlatform) => {
  switch (nodePlatform) {
    case "sunos":
      return "solaris";
    case "win32":
      return "windows";
    default:
      return nodePlatform;
  }
};
var init_utils = () => {};

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetector.js
import { arch, hostname } from "os";

class HostDetector {
  detect(_config) {
    const attributes = {
      [ATTR_HOST_NAME]: hostname(),
      [ATTR_HOST_ARCH]: normalizeArch(arch()),
      [ATTR_HOST_ID]: getMachineId()
    };
    return { attributes };
  }
}
var hostDetector;
var init_HostDetector = __esm(() => {
  init_semconv();
  init_getMachineId();
  init_utils();
  hostDetector = new HostDetector;
});

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetector.js
import { platform as platform2, release } from "os";

class OSDetector {
  detect(_config) {
    const attributes = {
      [ATTR_OS_TYPE]: normalizeType(platform2()),
      [ATTR_OS_VERSION]: release()
    };
    return { attributes };
  }
}
var osDetector;
var init_OSDetector = __esm(() => {
  init_semconv();
  init_utils();
  osDetector = new OSDetector;
});

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/index.js
var init_node2 = __esm(() => {
  init_HostDetector();
  init_OSDetector();
});

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/index.js
var init_platform3 = __esm(() => {
  init_node2();
});

// node_modules/@opentelemetry/resources/build/esm/detectors/index.js
var init_detectors = __esm(() => {
  init_EnvDetector();
  init_platform3();
});

// node_modules/@opentelemetry/resources/build/esm/utils.js
var isPromiseLike = (val) => {
  return val !== null && typeof val === "object" && typeof val.then === "function";
};
var init_utils2 = () => {};

// node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js
class ResourceImpl {
  _rawAttributes;
  _asyncAttributesPending = false;
  _schemaUrl;
  _memoizedAttributes;
  static FromAttributeList(attributes, options) {
    const res = new ResourceImpl({}, options);
    res._rawAttributes = guardedRawAttributes(attributes);
    res._asyncAttributesPending = attributes.filter(([_, val]) => isPromiseLike(val)).length > 0;
    return res;
  }
  constructor(resource, options) {
    const attributes = resource.attributes ?? {};
    this._rawAttributes = Object.entries(attributes).map(([k, v]) => {
      if (isPromiseLike(v)) {
        this._asyncAttributesPending = true;
      }
      return [k, v];
    });
    this._rawAttributes = guardedRawAttributes(this._rawAttributes);
    this._schemaUrl = validateSchemaUrl(options?.schemaUrl);
  }
  get asyncAttributesPending() {
    return this._asyncAttributesPending;
  }
  async waitForAsyncAttributes() {
    if (!this.asyncAttributesPending) {
      return;
    }
    for (let i = 0;i < this._rawAttributes.length; i++) {
      const [k, v] = this._rawAttributes[i];
      this._rawAttributes[i] = [k, isPromiseLike(v) ? await v : v];
    }
    this._asyncAttributesPending = false;
  }
  get attributes() {
    if (this.asyncAttributesPending) {
      import_api2.diag.error("Accessing resource attributes before async attributes settled");
    }
    if (this._memoizedAttributes) {
      return this._memoizedAttributes;
    }
    const attrs = {};
    for (const [k, v] of this._rawAttributes) {
      if (isPromiseLike(v)) {
        import_api2.diag.debug(`Unsettled resource attribute ${k} skipped`);
        continue;
      }
      if (v != null) {
        attrs[k] ??= v;
      }
    }
    if (!this._asyncAttributesPending) {
      this._memoizedAttributes = attrs;
    }
    return attrs;
  }
  getRawAttributes() {
    return this._rawAttributes;
  }
  get schemaUrl() {
    return this._schemaUrl;
  }
  merge(resource) {
    if (resource == null)
      return this;
    const mergedSchemaUrl = mergeSchemaUrl(this, resource);
    const mergedOptions = mergedSchemaUrl ? { schemaUrl: mergedSchemaUrl } : undefined;
    return ResourceImpl.FromAttributeList([...resource.getRawAttributes(), ...this.getRawAttributes()], mergedOptions);
  }
}
function resourceFromAttributes(attributes, options) {
  return ResourceImpl.FromAttributeList(Object.entries(attributes), options);
}
function guardedRawAttributes(attributes) {
  return attributes.map(([k, v]) => {
    if (isPromiseLike(v)) {
      return [
        k,
        v.catch((err) => {
          import_api2.diag.debug("promise rejection for resource attribute: %s - %s", k, err);
          return;
        })
      ];
    }
    return [k, v];
  });
}
function validateSchemaUrl(schemaUrl) {
  if (typeof schemaUrl === "string" || schemaUrl === undefined) {
    return schemaUrl;
  }
  import_api2.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", schemaUrl);
  return;
}
function mergeSchemaUrl(old, updating) {
  const oldSchemaUrl = old?.schemaUrl;
  const updatingSchemaUrl = updating?.schemaUrl;
  const isOldEmpty = oldSchemaUrl === undefined || oldSchemaUrl === "";
  const isUpdatingEmpty = updatingSchemaUrl === undefined || updatingSchemaUrl === "";
  if (isOldEmpty) {
    return updatingSchemaUrl;
  }
  if (isUpdatingEmpty) {
    return oldSchemaUrl;
  }
  if (oldSchemaUrl === updatingSchemaUrl) {
    return oldSchemaUrl;
  }
  import_api2.diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', oldSchemaUrl, updatingSchemaUrl);
  return;
}
var import_api2;
var init_ResourceImpl = __esm(() => {
  init_utils2();
  import_api2 = __toESM(require_src(), 1);
});

// node_modules/@opentelemetry/resources/build/esm/index.js
var init_esm3 = __esm(() => {
  init_detectors();
  init_ResourceImpl();
});

// node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js
var NoopLogger, NOOP_LOGGER;
var init_NoopLogger = __esm(() => {
  NoopLogger = function() {
    function NoopLogger2() {}
    NoopLogger2.prototype.emit = function(_logRecord) {};
    return NoopLogger2;
  }();
  NOOP_LOGGER = new NoopLogger;
});

// node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js
var NoopLoggerProvider, NOOP_LOGGER_PROVIDER;
var init_NoopLoggerProvider = __esm(() => {
  init_NoopLogger();
  NoopLoggerProvider = function() {
    function NoopLoggerProvider2() {}
    NoopLoggerProvider2.prototype.getLogger = function(_name, _version, _options) {
      return new NoopLogger;
    };
    return NoopLoggerProvider2;
  }();
  NOOP_LOGGER_PROVIDER = new NoopLoggerProvider;
});

// node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js
var ProxyLogger;
var init_ProxyLogger = __esm(() => {
  init_NoopLogger();
  ProxyLogger = function() {
    function ProxyLogger2(_provider, name, version, options) {
      this._provider = _provider;
      this.name = name;
      this.version = version;
      this.options = options;
    }
    ProxyLogger2.prototype.emit = function(logRecord) {
      this._getLogger().emit(logRecord);
    };
    ProxyLogger2.prototype._getLogger = function() {
      if (this._delegate) {
        return this._delegate;
      }
      var logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
      if (!logger) {
        return NOOP_LOGGER;
      }
      this._delegate = logger;
      return this._delegate;
    };
    return ProxyLogger2;
  }();
});

// node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js
var ProxyLoggerProvider;
var init_ProxyLoggerProvider = __esm(() => {
  init_NoopLoggerProvider();
  init_ProxyLogger();
  ProxyLoggerProvider = function() {
    function ProxyLoggerProvider2() {}
    ProxyLoggerProvider2.prototype.getLogger = function(name, version, options) {
      var _a;
      return (_a = this.getDelegateLogger(name, version, options)) !== null && _a !== undefined ? _a : new ProxyLogger(this, name, version, options);
    };
    ProxyLoggerProvider2.prototype.getDelegate = function() {
      var _a;
      return (_a = this._delegate) !== null && _a !== undefined ? _a : NOOP_LOGGER_PROVIDER;
    };
    ProxyLoggerProvider2.prototype.setDelegate = function(delegate) {
      this._delegate = delegate;
    };
    ProxyLoggerProvider2.prototype.getDelegateLogger = function(name, version, options) {
      var _a;
      return (_a = this._delegate) === null || _a === undefined ? undefined : _a.getLogger(name, version, options);
    };
    return ProxyLoggerProvider2;
  }();
});

// node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js
var _globalThis2;
var init_globalThis = __esm(() => {
  _globalThis2 = typeof globalThis === "object" ? globalThis : global;
});

// node_modules/@opentelemetry/api-logs/build/esm/platform/node/index.js
var init_node3 = __esm(() => {
  init_globalThis();
});

// node_modules/@opentelemetry/api-logs/build/esm/platform/index.js
var init_platform4 = __esm(() => {
  init_node3();
});

// node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js
function makeGetter(requiredVersion, instance, fallback) {
  return function(version) {
    return version === requiredVersion ? instance : fallback;
  };
}
var GLOBAL_LOGS_API_KEY, _global, API_BACKWARDS_COMPATIBILITY_VERSION = 1;
var init_global_utils = __esm(() => {
  init_platform4();
  GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
  _global = _globalThis2;
});

// node_modules/@opentelemetry/api-logs/build/esm/api/logs.js
var LogsAPI;
var init_logs = __esm(() => {
  init_global_utils();
  init_NoopLoggerProvider();
  init_ProxyLoggerProvider();
  LogsAPI = function() {
    function LogsAPI2() {
      this._proxyLoggerProvider = new ProxyLoggerProvider;
    }
    LogsAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new LogsAPI2;
      }
      return this._instance;
    };
    LogsAPI2.prototype.setGlobalLoggerProvider = function(provider) {
      if (_global[GLOBAL_LOGS_API_KEY]) {
        return this.getLoggerProvider();
      }
      _global[GLOBAL_LOGS_API_KEY] = makeGetter(API_BACKWARDS_COMPATIBILITY_VERSION, provider, NOOP_LOGGER_PROVIDER);
      this._proxyLoggerProvider.setDelegate(provider);
      return provider;
    };
    LogsAPI2.prototype.getLoggerProvider = function() {
      var _a, _b;
      return (_b = (_a = _global[GLOBAL_LOGS_API_KEY]) === null || _a === undefined ? undefined : _a.call(_global, API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== undefined ? _b : this._proxyLoggerProvider;
    };
    LogsAPI2.prototype.getLogger = function(name, version, options) {
      return this.getLoggerProvider().getLogger(name, version, options);
    };
    LogsAPI2.prototype.disable = function() {
      delete _global[GLOBAL_LOGS_API_KEY];
      this._proxyLoggerProvider = new ProxyLoggerProvider;
    };
    return LogsAPI2;
  }();
});

// node_modules/@opentelemetry/api-logs/build/esm/index.js
var logs;
var init_esm4 = __esm(() => {
  init_NoopLogger();
  init_logs();
  logs = LogsAPI.getInstance();
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/internal/utils.js
var require_utils2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createConstMap = undefined;
  function createConstMap(values) {
    let res = {};
    const len = values.length;
    for (let lp = 0;lp < len; lp++) {
      const val = values[lp];
      if (val) {
        res[String(val).toUpperCase().replace(/[-.]/g, "_")] = val;
      }
    }
    return res;
  }
  exports.createConstMap = createConstMap;
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/trace/SemanticAttributes.js
var require_SemanticAttributes2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SEMATTRS_NET_HOST_CARRIER_ICC = exports.SEMATTRS_NET_HOST_CARRIER_MNC = exports.SEMATTRS_NET_HOST_CARRIER_MCC = exports.SEMATTRS_NET_HOST_CARRIER_NAME = exports.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = exports.SEMATTRS_NET_HOST_CONNECTION_TYPE = exports.SEMATTRS_NET_HOST_NAME = exports.SEMATTRS_NET_HOST_PORT = exports.SEMATTRS_NET_HOST_IP = exports.SEMATTRS_NET_PEER_NAME = exports.SEMATTRS_NET_PEER_PORT = exports.SEMATTRS_NET_PEER_IP = exports.SEMATTRS_NET_TRANSPORT = exports.SEMATTRS_FAAS_INVOKED_REGION = exports.SEMATTRS_FAAS_INVOKED_PROVIDER = exports.SEMATTRS_FAAS_INVOKED_NAME = exports.SEMATTRS_FAAS_COLDSTART = exports.SEMATTRS_FAAS_CRON = exports.SEMATTRS_FAAS_TIME = exports.SEMATTRS_FAAS_DOCUMENT_NAME = exports.SEMATTRS_FAAS_DOCUMENT_TIME = exports.SEMATTRS_FAAS_DOCUMENT_OPERATION = exports.SEMATTRS_FAAS_DOCUMENT_COLLECTION = exports.SEMATTRS_FAAS_EXECUTION = exports.SEMATTRS_FAAS_TRIGGER = exports.SEMATTRS_EXCEPTION_ESCAPED = exports.SEMATTRS_EXCEPTION_STACKTRACE = exports.SEMATTRS_EXCEPTION_MESSAGE = exports.SEMATTRS_EXCEPTION_TYPE = exports.SEMATTRS_DB_SQL_TABLE = exports.SEMATTRS_DB_MONGODB_COLLECTION = exports.SEMATTRS_DB_REDIS_DATABASE_INDEX = exports.SEMATTRS_DB_HBASE_NAMESPACE = exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = exports.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = exports.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = exports.SEMATTRS_DB_CASSANDRA_TABLE = exports.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = exports.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = exports.SEMATTRS_DB_CASSANDRA_KEYSPACE = exports.SEMATTRS_DB_MSSQL_INSTANCE_NAME = exports.SEMATTRS_DB_OPERATION = exports.SEMATTRS_DB_STATEMENT = exports.SEMATTRS_DB_NAME = exports.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = exports.SEMATTRS_DB_USER = exports.SEMATTRS_DB_CONNECTION_STRING = exports.SEMATTRS_DB_SYSTEM = exports.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = undefined;
  exports.SEMATTRS_MESSAGING_DESTINATION_KIND = exports.SEMATTRS_MESSAGING_DESTINATION = exports.SEMATTRS_MESSAGING_SYSTEM = exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = exports.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = exports.SEMATTRS_AWS_DYNAMODB_COUNT = exports.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = exports.SEMATTRS_AWS_DYNAMODB_SEGMENT = exports.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = exports.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = exports.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = exports.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = exports.SEMATTRS_AWS_DYNAMODB_SELECT = exports.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = exports.SEMATTRS_AWS_DYNAMODB_LIMIT = exports.SEMATTRS_AWS_DYNAMODB_PROJECTION = exports.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = exports.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = exports.SEMATTRS_HTTP_CLIENT_IP = exports.SEMATTRS_HTTP_ROUTE = exports.SEMATTRS_HTTP_SERVER_NAME = exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = exports.SEMATTRS_HTTP_USER_AGENT = exports.SEMATTRS_HTTP_FLAVOR = exports.SEMATTRS_HTTP_STATUS_CODE = exports.SEMATTRS_HTTP_SCHEME = exports.SEMATTRS_HTTP_HOST = exports.SEMATTRS_HTTP_TARGET = exports.SEMATTRS_HTTP_URL = exports.SEMATTRS_HTTP_METHOD = exports.SEMATTRS_CODE_LINENO = exports.SEMATTRS_CODE_FILEPATH = exports.SEMATTRS_CODE_NAMESPACE = exports.SEMATTRS_CODE_FUNCTION = exports.SEMATTRS_THREAD_NAME = exports.SEMATTRS_THREAD_ID = exports.SEMATTRS_ENDUSER_SCOPE = exports.SEMATTRS_ENDUSER_ROLE = exports.SEMATTRS_ENDUSER_ID = exports.SEMATTRS_PEER_SERVICE = undefined;
  exports.DBSYSTEMVALUES_FILEMAKER = exports.DBSYSTEMVALUES_DERBY = exports.DBSYSTEMVALUES_FIREBIRD = exports.DBSYSTEMVALUES_ADABAS = exports.DBSYSTEMVALUES_CACHE = exports.DBSYSTEMVALUES_EDB = exports.DBSYSTEMVALUES_FIRSTSQL = exports.DBSYSTEMVALUES_INGRES = exports.DBSYSTEMVALUES_HANADB = exports.DBSYSTEMVALUES_MAXDB = exports.DBSYSTEMVALUES_PROGRESS = exports.DBSYSTEMVALUES_HSQLDB = exports.DBSYSTEMVALUES_CLOUDSCAPE = exports.DBSYSTEMVALUES_HIVE = exports.DBSYSTEMVALUES_REDSHIFT = exports.DBSYSTEMVALUES_POSTGRESQL = exports.DBSYSTEMVALUES_DB2 = exports.DBSYSTEMVALUES_ORACLE = exports.DBSYSTEMVALUES_MYSQL = exports.DBSYSTEMVALUES_MSSQL = exports.DBSYSTEMVALUES_OTHER_SQL = exports.SemanticAttributes = exports.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = exports.SEMATTRS_MESSAGE_COMPRESSED_SIZE = exports.SEMATTRS_MESSAGE_ID = exports.SEMATTRS_MESSAGE_TYPE = exports.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = exports.SEMATTRS_RPC_JSONRPC_ERROR_CODE = exports.SEMATTRS_RPC_JSONRPC_REQUEST_ID = exports.SEMATTRS_RPC_JSONRPC_VERSION = exports.SEMATTRS_RPC_GRPC_STATUS_CODE = exports.SEMATTRS_RPC_METHOD = exports.SEMATTRS_RPC_SERVICE = exports.SEMATTRS_RPC_SYSTEM = exports.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = exports.SEMATTRS_MESSAGING_KAFKA_PARTITION = exports.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = exports.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = exports.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = exports.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = exports.SEMATTRS_MESSAGING_CONSUMER_ID = exports.SEMATTRS_MESSAGING_OPERATION = exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = exports.SEMATTRS_MESSAGING_CONVERSATION_ID = exports.SEMATTRS_MESSAGING_MESSAGE_ID = exports.SEMATTRS_MESSAGING_URL = exports.SEMATTRS_MESSAGING_PROTOCOL_VERSION = exports.SEMATTRS_MESSAGING_PROTOCOL = exports.SEMATTRS_MESSAGING_TEMP_DESTINATION = undefined;
  exports.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = exports.FaasDocumentOperationValues = exports.FAASDOCUMENTOPERATIONVALUES_DELETE = exports.FAASDOCUMENTOPERATIONVALUES_EDIT = exports.FAASDOCUMENTOPERATIONVALUES_INSERT = exports.FaasTriggerValues = exports.FAASTRIGGERVALUES_OTHER = exports.FAASTRIGGERVALUES_TIMER = exports.FAASTRIGGERVALUES_PUBSUB = exports.FAASTRIGGERVALUES_HTTP = exports.FAASTRIGGERVALUES_DATASOURCE = exports.DbCassandraConsistencyLevelValues = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = exports.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = exports.DbSystemValues = exports.DBSYSTEMVALUES_COCKROACHDB = exports.DBSYSTEMVALUES_MEMCACHED = exports.DBSYSTEMVALUES_ELASTICSEARCH = exports.DBSYSTEMVALUES_GEODE = exports.DBSYSTEMVALUES_NEO4J = exports.DBSYSTEMVALUES_DYNAMODB = exports.DBSYSTEMVALUES_COSMOSDB = exports.DBSYSTEMVALUES_COUCHDB = exports.DBSYSTEMVALUES_COUCHBASE = exports.DBSYSTEMVALUES_REDIS = exports.DBSYSTEMVALUES_MONGODB = exports.DBSYSTEMVALUES_HBASE = exports.DBSYSTEMVALUES_CASSANDRA = exports.DBSYSTEMVALUES_COLDFUSION = exports.DBSYSTEMVALUES_H2 = exports.DBSYSTEMVALUES_VERTICA = exports.DBSYSTEMVALUES_TERADATA = exports.DBSYSTEMVALUES_SYBASE = exports.DBSYSTEMVALUES_SQLITE = exports.DBSYSTEMVALUES_POINTBASE = exports.DBSYSTEMVALUES_PERVASIVE = exports.DBSYSTEMVALUES_NETEZZA = exports.DBSYSTEMVALUES_MARIADB = exports.DBSYSTEMVALUES_INTERBASE = exports.DBSYSTEMVALUES_INSTANTDB = exports.DBSYSTEMVALUES_INFORMIX = undefined;
  exports.MESSAGINGOPERATIONVALUES_RECEIVE = exports.MessagingDestinationKindValues = exports.MESSAGINGDESTINATIONKINDVALUES_TOPIC = exports.MESSAGINGDESTINATIONKINDVALUES_QUEUE = exports.HttpFlavorValues = exports.HTTPFLAVORVALUES_QUIC = exports.HTTPFLAVORVALUES_SPDY = exports.HTTPFLAVORVALUES_HTTP_2_0 = exports.HTTPFLAVORVALUES_HTTP_1_1 = exports.HTTPFLAVORVALUES_HTTP_1_0 = exports.NetHostConnectionSubtypeValues = exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_NR = exports.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = exports.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = exports.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = exports.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = exports.NetHostConnectionTypeValues = exports.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = exports.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = exports.NETHOSTCONNECTIONTYPEVALUES_CELL = exports.NETHOSTCONNECTIONTYPEVALUES_WIRED = exports.NETHOSTCONNECTIONTYPEVALUES_WIFI = exports.NetTransportValues = exports.NETTRANSPORTVALUES_OTHER = exports.NETTRANSPORTVALUES_INPROC = exports.NETTRANSPORTVALUES_PIPE = exports.NETTRANSPORTVALUES_UNIX = exports.NETTRANSPORTVALUES_IP = exports.NETTRANSPORTVALUES_IP_UDP = exports.NETTRANSPORTVALUES_IP_TCP = exports.FaasInvokedProviderValues = exports.FAASINVOKEDPROVIDERVALUES_GCP = exports.FAASINVOKEDPROVIDERVALUES_AZURE = exports.FAASINVOKEDPROVIDERVALUES_AWS = undefined;
  exports.MessageTypeValues = exports.MESSAGETYPEVALUES_RECEIVED = exports.MESSAGETYPEVALUES_SENT = exports.RpcGrpcStatusCodeValues = exports.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = exports.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = exports.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = exports.RPCGRPCSTATUSCODEVALUES_INTERNAL = exports.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = exports.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = exports.RPCGRPCSTATUSCODEVALUES_ABORTED = exports.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = exports.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = exports.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = exports.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = exports.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = exports.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = exports.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = exports.RPCGRPCSTATUSCODEVALUES_UNKNOWN = exports.RPCGRPCSTATUSCODEVALUES_CANCELLED = exports.RPCGRPCSTATUSCODEVALUES_OK = exports.MessagingOperationValues = exports.MESSAGINGOPERATIONVALUES_PROCESS = undefined;
  var utils_1 = require_utils2();
  var TMP_AWS_LAMBDA_INVOKED_ARN = "aws.lambda.invoked_arn";
  var TMP_DB_SYSTEM = "db.system";
  var TMP_DB_CONNECTION_STRING = "db.connection_string";
  var TMP_DB_USER = "db.user";
  var TMP_DB_JDBC_DRIVER_CLASSNAME = "db.jdbc.driver_classname";
  var TMP_DB_NAME = "db.name";
  var TMP_DB_STATEMENT = "db.statement";
  var TMP_DB_OPERATION = "db.operation";
  var TMP_DB_MSSQL_INSTANCE_NAME = "db.mssql.instance_name";
  var TMP_DB_CASSANDRA_KEYSPACE = "db.cassandra.keyspace";
  var TMP_DB_CASSANDRA_PAGE_SIZE = "db.cassandra.page_size";
  var TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = "db.cassandra.consistency_level";
  var TMP_DB_CASSANDRA_TABLE = "db.cassandra.table";
  var TMP_DB_CASSANDRA_IDEMPOTENCE = "db.cassandra.idempotence";
  var TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = "db.cassandra.speculative_execution_count";
  var TMP_DB_CASSANDRA_COORDINATOR_ID = "db.cassandra.coordinator.id";
  var TMP_DB_CASSANDRA_COORDINATOR_DC = "db.cassandra.coordinator.dc";
  var TMP_DB_HBASE_NAMESPACE = "db.hbase.namespace";
  var TMP_DB_REDIS_DATABASE_INDEX = "db.redis.database_index";
  var TMP_DB_MONGODB_COLLECTION = "db.mongodb.collection";
  var TMP_DB_SQL_TABLE = "db.sql.table";
  var TMP_EXCEPTION_TYPE = "exception.type";
  var TMP_EXCEPTION_MESSAGE = "exception.message";
  var TMP_EXCEPTION_STACKTRACE = "exception.stacktrace";
  var TMP_EXCEPTION_ESCAPED = "exception.escaped";
  var TMP_FAAS_TRIGGER = "faas.trigger";
  var TMP_FAAS_EXECUTION = "faas.execution";
  var TMP_FAAS_DOCUMENT_COLLECTION = "faas.document.collection";
  var TMP_FAAS_DOCUMENT_OPERATION = "faas.document.operation";
  var TMP_FAAS_DOCUMENT_TIME = "faas.document.time";
  var TMP_FAAS_DOCUMENT_NAME = "faas.document.name";
  var TMP_FAAS_TIME = "faas.time";
  var TMP_FAAS_CRON = "faas.cron";
  var TMP_FAAS_COLDSTART = "faas.coldstart";
  var TMP_FAAS_INVOKED_NAME = "faas.invoked_name";
  var TMP_FAAS_INVOKED_PROVIDER = "faas.invoked_provider";
  var TMP_FAAS_INVOKED_REGION = "faas.invoked_region";
  var TMP_NET_TRANSPORT = "net.transport";
  var TMP_NET_PEER_IP = "net.peer.ip";
  var TMP_NET_PEER_PORT = "net.peer.port";
  var TMP_NET_PEER_NAME = "net.peer.name";
  var TMP_NET_HOST_IP = "net.host.ip";
  var TMP_NET_HOST_PORT = "net.host.port";
  var TMP_NET_HOST_NAME = "net.host.name";
  var TMP_NET_HOST_CONNECTION_TYPE = "net.host.connection.type";
  var TMP_NET_HOST_CONNECTION_SUBTYPE = "net.host.connection.subtype";
  var TMP_NET_HOST_CARRIER_NAME = "net.host.carrier.name";
  var TMP_NET_HOST_CARRIER_MCC = "net.host.carrier.mcc";
  var TMP_NET_HOST_CARRIER_MNC = "net.host.carrier.mnc";
  var TMP_NET_HOST_CARRIER_ICC = "net.host.carrier.icc";
  var TMP_PEER_SERVICE = "peer.service";
  var TMP_ENDUSER_ID = "enduser.id";
  var TMP_ENDUSER_ROLE = "enduser.role";
  var TMP_ENDUSER_SCOPE = "enduser.scope";
  var TMP_THREAD_ID = "thread.id";
  var TMP_THREAD_NAME = "thread.name";
  var TMP_CODE_FUNCTION = "code.function";
  var TMP_CODE_NAMESPACE = "code.namespace";
  var TMP_CODE_FILEPATH = "code.filepath";
  var TMP_CODE_LINENO = "code.lineno";
  var TMP_HTTP_METHOD = "http.method";
  var TMP_HTTP_URL = "http.url";
  var TMP_HTTP_TARGET = "http.target";
  var TMP_HTTP_HOST = "http.host";
  var TMP_HTTP_SCHEME = "http.scheme";
  var TMP_HTTP_STATUS_CODE = "http.status_code";
  var TMP_HTTP_FLAVOR = "http.flavor";
  var TMP_HTTP_USER_AGENT = "http.user_agent";
  var TMP_HTTP_REQUEST_CONTENT_LENGTH = "http.request_content_length";
  var TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
  var TMP_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
  var TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
  var TMP_HTTP_SERVER_NAME = "http.server_name";
  var TMP_HTTP_ROUTE = "http.route";
  var TMP_HTTP_CLIENT_IP = "http.client_ip";
  var TMP_AWS_DYNAMODB_TABLE_NAMES = "aws.dynamodb.table_names";
  var TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = "aws.dynamodb.consumed_capacity";
  var TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = "aws.dynamodb.item_collection_metrics";
  var TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = "aws.dynamodb.provisioned_read_capacity";
  var TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = "aws.dynamodb.provisioned_write_capacity";
  var TMP_AWS_DYNAMODB_CONSISTENT_READ = "aws.dynamodb.consistent_read";
  var TMP_AWS_DYNAMODB_PROJECTION = "aws.dynamodb.projection";
  var TMP_AWS_DYNAMODB_LIMIT = "aws.dynamodb.limit";
  var TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = "aws.dynamodb.attributes_to_get";
  var TMP_AWS_DYNAMODB_INDEX_NAME = "aws.dynamodb.index_name";
  var TMP_AWS_DYNAMODB_SELECT = "aws.dynamodb.select";
  var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = "aws.dynamodb.global_secondary_indexes";
  var TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = "aws.dynamodb.local_secondary_indexes";
  var TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = "aws.dynamodb.exclusive_start_table";
  var TMP_AWS_DYNAMODB_TABLE_COUNT = "aws.dynamodb.table_count";
  var TMP_AWS_DYNAMODB_SCAN_FORWARD = "aws.dynamodb.scan_forward";
  var TMP_AWS_DYNAMODB_SEGMENT = "aws.dynamodb.segment";
  var TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = "aws.dynamodb.total_segments";
  var TMP_AWS_DYNAMODB_COUNT = "aws.dynamodb.count";
  var TMP_AWS_DYNAMODB_SCANNED_COUNT = "aws.dynamodb.scanned_count";
  var TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = "aws.dynamodb.attribute_definitions";
  var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = "aws.dynamodb.global_secondary_index_updates";
  var TMP_MESSAGING_SYSTEM = "messaging.system";
  var TMP_MESSAGING_DESTINATION = "messaging.destination";
  var TMP_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
  var TMP_MESSAGING_TEMP_DESTINATION = "messaging.temp_destination";
  var TMP_MESSAGING_PROTOCOL = "messaging.protocol";
  var TMP_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
  var TMP_MESSAGING_URL = "messaging.url";
  var TMP_MESSAGING_MESSAGE_ID = "messaging.message_id";
  var TMP_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
  var TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = "messaging.message_payload_size_bytes";
  var TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = "messaging.message_payload_compressed_size_bytes";
  var TMP_MESSAGING_OPERATION = "messaging.operation";
  var TMP_MESSAGING_CONSUMER_ID = "messaging.consumer_id";
  var TMP_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
  var TMP_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message_key";
  var TMP_MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer_group";
  var TMP_MESSAGING_KAFKA_CLIENT_ID = "messaging.kafka.client_id";
  var TMP_MESSAGING_KAFKA_PARTITION = "messaging.kafka.partition";
  var TMP_MESSAGING_KAFKA_TOMBSTONE = "messaging.kafka.tombstone";
  var TMP_RPC_SYSTEM = "rpc.system";
  var TMP_RPC_SERVICE = "rpc.service";
  var TMP_RPC_METHOD = "rpc.method";
  var TMP_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
  var TMP_RPC_JSONRPC_VERSION = "rpc.jsonrpc.version";
  var TMP_RPC_JSONRPC_REQUEST_ID = "rpc.jsonrpc.request_id";
  var TMP_RPC_JSONRPC_ERROR_CODE = "rpc.jsonrpc.error_code";
  var TMP_RPC_JSONRPC_ERROR_MESSAGE = "rpc.jsonrpc.error_message";
  var TMP_MESSAGE_TYPE = "message.type";
  var TMP_MESSAGE_ID = "message.id";
  var TMP_MESSAGE_COMPRESSED_SIZE = "message.compressed_size";
  var TMP_MESSAGE_UNCOMPRESSED_SIZE = "message.uncompressed_size";
  exports.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = TMP_AWS_LAMBDA_INVOKED_ARN;
  exports.SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
  exports.SEMATTRS_DB_CONNECTION_STRING = TMP_DB_CONNECTION_STRING;
  exports.SEMATTRS_DB_USER = TMP_DB_USER;
  exports.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = TMP_DB_JDBC_DRIVER_CLASSNAME;
  exports.SEMATTRS_DB_NAME = TMP_DB_NAME;
  exports.SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
  exports.SEMATTRS_DB_OPERATION = TMP_DB_OPERATION;
  exports.SEMATTRS_DB_MSSQL_INSTANCE_NAME = TMP_DB_MSSQL_INSTANCE_NAME;
  exports.SEMATTRS_DB_CASSANDRA_KEYSPACE = TMP_DB_CASSANDRA_KEYSPACE;
  exports.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = TMP_DB_CASSANDRA_PAGE_SIZE;
  exports.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = TMP_DB_CASSANDRA_CONSISTENCY_LEVEL;
  exports.SEMATTRS_DB_CASSANDRA_TABLE = TMP_DB_CASSANDRA_TABLE;
  exports.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = TMP_DB_CASSANDRA_IDEMPOTENCE;
  exports.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT;
  exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = TMP_DB_CASSANDRA_COORDINATOR_ID;
  exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = TMP_DB_CASSANDRA_COORDINATOR_DC;
  exports.SEMATTRS_DB_HBASE_NAMESPACE = TMP_DB_HBASE_NAMESPACE;
  exports.SEMATTRS_DB_REDIS_DATABASE_INDEX = TMP_DB_REDIS_DATABASE_INDEX;
  exports.SEMATTRS_DB_MONGODB_COLLECTION = TMP_DB_MONGODB_COLLECTION;
  exports.SEMATTRS_DB_SQL_TABLE = TMP_DB_SQL_TABLE;
  exports.SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
  exports.SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
  exports.SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
  exports.SEMATTRS_EXCEPTION_ESCAPED = TMP_EXCEPTION_ESCAPED;
  exports.SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
  exports.SEMATTRS_FAAS_EXECUTION = TMP_FAAS_EXECUTION;
  exports.SEMATTRS_FAAS_DOCUMENT_COLLECTION = TMP_FAAS_DOCUMENT_COLLECTION;
  exports.SEMATTRS_FAAS_DOCUMENT_OPERATION = TMP_FAAS_DOCUMENT_OPERATION;
  exports.SEMATTRS_FAAS_DOCUMENT_TIME = TMP_FAAS_DOCUMENT_TIME;
  exports.SEMATTRS_FAAS_DOCUMENT_NAME = TMP_FAAS_DOCUMENT_NAME;
  exports.SEMATTRS_FAAS_TIME = TMP_FAAS_TIME;
  exports.SEMATTRS_FAAS_CRON = TMP_FAAS_CRON;
  exports.SEMATTRS_FAAS_COLDSTART = TMP_FAAS_COLDSTART;
  exports.SEMATTRS_FAAS_INVOKED_NAME = TMP_FAAS_INVOKED_NAME;
  exports.SEMATTRS_FAAS_INVOKED_PROVIDER = TMP_FAAS_INVOKED_PROVIDER;
  exports.SEMATTRS_FAAS_INVOKED_REGION = TMP_FAAS_INVOKED_REGION;
  exports.SEMATTRS_NET_TRANSPORT = TMP_NET_TRANSPORT;
  exports.SEMATTRS_NET_PEER_IP = TMP_NET_PEER_IP;
  exports.SEMATTRS_NET_PEER_PORT = TMP_NET_PEER_PORT;
  exports.SEMATTRS_NET_PEER_NAME = TMP_NET_PEER_NAME;
  exports.SEMATTRS_NET_HOST_IP = TMP_NET_HOST_IP;
  exports.SEMATTRS_NET_HOST_PORT = TMP_NET_HOST_PORT;
  exports.SEMATTRS_NET_HOST_NAME = TMP_NET_HOST_NAME;
  exports.SEMATTRS_NET_HOST_CONNECTION_TYPE = TMP_NET_HOST_CONNECTION_TYPE;
  exports.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = TMP_NET_HOST_CONNECTION_SUBTYPE;
  exports.SEMATTRS_NET_HOST_CARRIER_NAME = TMP_NET_HOST_CARRIER_NAME;
  exports.SEMATTRS_NET_HOST_CARRIER_MCC = TMP_NET_HOST_CARRIER_MCC;
  exports.SEMATTRS_NET_HOST_CARRIER_MNC = TMP_NET_HOST_CARRIER_MNC;
  exports.SEMATTRS_NET_HOST_CARRIER_ICC = TMP_NET_HOST_CARRIER_ICC;
  exports.SEMATTRS_PEER_SERVICE = TMP_PEER_SERVICE;
  exports.SEMATTRS_ENDUSER_ID = TMP_ENDUSER_ID;
  exports.SEMATTRS_ENDUSER_ROLE = TMP_ENDUSER_ROLE;
  exports.SEMATTRS_ENDUSER_SCOPE = TMP_ENDUSER_SCOPE;
  exports.SEMATTRS_THREAD_ID = TMP_THREAD_ID;
  exports.SEMATTRS_THREAD_NAME = TMP_THREAD_NAME;
  exports.SEMATTRS_CODE_FUNCTION = TMP_CODE_FUNCTION;
  exports.SEMATTRS_CODE_NAMESPACE = TMP_CODE_NAMESPACE;
  exports.SEMATTRS_CODE_FILEPATH = TMP_CODE_FILEPATH;
  exports.SEMATTRS_CODE_LINENO = TMP_CODE_LINENO;
  exports.SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
  exports.SEMATTRS_HTTP_URL = TMP_HTTP_URL;
  exports.SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
  exports.SEMATTRS_HTTP_HOST = TMP_HTTP_HOST;
  exports.SEMATTRS_HTTP_SCHEME = TMP_HTTP_SCHEME;
  exports.SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
  exports.SEMATTRS_HTTP_FLAVOR = TMP_HTTP_FLAVOR;
  exports.SEMATTRS_HTTP_USER_AGENT = TMP_HTTP_USER_AGENT;
  exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = TMP_HTTP_REQUEST_CONTENT_LENGTH;
  exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED;
  exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = TMP_HTTP_RESPONSE_CONTENT_LENGTH;
  exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED;
  exports.SEMATTRS_HTTP_SERVER_NAME = TMP_HTTP_SERVER_NAME;
  exports.SEMATTRS_HTTP_ROUTE = TMP_HTTP_ROUTE;
  exports.SEMATTRS_HTTP_CLIENT_IP = TMP_HTTP_CLIENT_IP;
  exports.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = TMP_AWS_DYNAMODB_TABLE_NAMES;
  exports.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TMP_AWS_DYNAMODB_CONSUMED_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS;
  exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = TMP_AWS_DYNAMODB_CONSISTENT_READ;
  exports.SEMATTRS_AWS_DYNAMODB_PROJECTION = TMP_AWS_DYNAMODB_PROJECTION;
  exports.SEMATTRS_AWS_DYNAMODB_LIMIT = TMP_AWS_DYNAMODB_LIMIT;
  exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET;
  exports.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = TMP_AWS_DYNAMODB_INDEX_NAME;
  exports.SEMATTRS_AWS_DYNAMODB_SELECT = TMP_AWS_DYNAMODB_SELECT;
  exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES;
  exports.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES;
  exports.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE;
  exports.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = TMP_AWS_DYNAMODB_TABLE_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = TMP_AWS_DYNAMODB_SCAN_FORWARD;
  exports.SEMATTRS_AWS_DYNAMODB_SEGMENT = TMP_AWS_DYNAMODB_SEGMENT;
  exports.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = TMP_AWS_DYNAMODB_TOTAL_SEGMENTS;
  exports.SEMATTRS_AWS_DYNAMODB_COUNT = TMP_AWS_DYNAMODB_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = TMP_AWS_DYNAMODB_SCANNED_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS;
  exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES;
  exports.SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
  exports.SEMATTRS_MESSAGING_DESTINATION = TMP_MESSAGING_DESTINATION;
  exports.SEMATTRS_MESSAGING_DESTINATION_KIND = TMP_MESSAGING_DESTINATION_KIND;
  exports.SEMATTRS_MESSAGING_TEMP_DESTINATION = TMP_MESSAGING_TEMP_DESTINATION;
  exports.SEMATTRS_MESSAGING_PROTOCOL = TMP_MESSAGING_PROTOCOL;
  exports.SEMATTRS_MESSAGING_PROTOCOL_VERSION = TMP_MESSAGING_PROTOCOL_VERSION;
  exports.SEMATTRS_MESSAGING_URL = TMP_MESSAGING_URL;
  exports.SEMATTRS_MESSAGING_MESSAGE_ID = TMP_MESSAGING_MESSAGE_ID;
  exports.SEMATTRS_MESSAGING_CONVERSATION_ID = TMP_MESSAGING_CONVERSATION_ID;
  exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES;
  exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES;
  exports.SEMATTRS_MESSAGING_OPERATION = TMP_MESSAGING_OPERATION;
  exports.SEMATTRS_MESSAGING_CONSUMER_ID = TMP_MESSAGING_CONSUMER_ID;
  exports.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = TMP_MESSAGING_RABBITMQ_ROUTING_KEY;
  exports.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = TMP_MESSAGING_KAFKA_MESSAGE_KEY;
  exports.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = TMP_MESSAGING_KAFKA_CONSUMER_GROUP;
  exports.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = TMP_MESSAGING_KAFKA_CLIENT_ID;
  exports.SEMATTRS_MESSAGING_KAFKA_PARTITION = TMP_MESSAGING_KAFKA_PARTITION;
  exports.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = TMP_MESSAGING_KAFKA_TOMBSTONE;
  exports.SEMATTRS_RPC_SYSTEM = TMP_RPC_SYSTEM;
  exports.SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
  exports.SEMATTRS_RPC_METHOD = TMP_RPC_METHOD;
  exports.SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
  exports.SEMATTRS_RPC_JSONRPC_VERSION = TMP_RPC_JSONRPC_VERSION;
  exports.SEMATTRS_RPC_JSONRPC_REQUEST_ID = TMP_RPC_JSONRPC_REQUEST_ID;
  exports.SEMATTRS_RPC_JSONRPC_ERROR_CODE = TMP_RPC_JSONRPC_ERROR_CODE;
  exports.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = TMP_RPC_JSONRPC_ERROR_MESSAGE;
  exports.SEMATTRS_MESSAGE_TYPE = TMP_MESSAGE_TYPE;
  exports.SEMATTRS_MESSAGE_ID = TMP_MESSAGE_ID;
  exports.SEMATTRS_MESSAGE_COMPRESSED_SIZE = TMP_MESSAGE_COMPRESSED_SIZE;
  exports.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = TMP_MESSAGE_UNCOMPRESSED_SIZE;
  exports.SemanticAttributes = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_AWS_LAMBDA_INVOKED_ARN,
    TMP_DB_SYSTEM,
    TMP_DB_CONNECTION_STRING,
    TMP_DB_USER,
    TMP_DB_JDBC_DRIVER_CLASSNAME,
    TMP_DB_NAME,
    TMP_DB_STATEMENT,
    TMP_DB_OPERATION,
    TMP_DB_MSSQL_INSTANCE_NAME,
    TMP_DB_CASSANDRA_KEYSPACE,
    TMP_DB_CASSANDRA_PAGE_SIZE,
    TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
    TMP_DB_CASSANDRA_TABLE,
    TMP_DB_CASSANDRA_IDEMPOTENCE,
    TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
    TMP_DB_CASSANDRA_COORDINATOR_ID,
    TMP_DB_CASSANDRA_COORDINATOR_DC,
    TMP_DB_HBASE_NAMESPACE,
    TMP_DB_REDIS_DATABASE_INDEX,
    TMP_DB_MONGODB_COLLECTION,
    TMP_DB_SQL_TABLE,
    TMP_EXCEPTION_TYPE,
    TMP_EXCEPTION_MESSAGE,
    TMP_EXCEPTION_STACKTRACE,
    TMP_EXCEPTION_ESCAPED,
    TMP_FAAS_TRIGGER,
    TMP_FAAS_EXECUTION,
    TMP_FAAS_DOCUMENT_COLLECTION,
    TMP_FAAS_DOCUMENT_OPERATION,
    TMP_FAAS_DOCUMENT_TIME,
    TMP_FAAS_DOCUMENT_NAME,
    TMP_FAAS_TIME,
    TMP_FAAS_CRON,
    TMP_FAAS_COLDSTART,
    TMP_FAAS_INVOKED_NAME,
    TMP_FAAS_INVOKED_PROVIDER,
    TMP_FAAS_INVOKED_REGION,
    TMP_NET_TRANSPORT,
    TMP_NET_PEER_IP,
    TMP_NET_PEER_PORT,
    TMP_NET_PEER_NAME,
    TMP_NET_HOST_IP,
    TMP_NET_HOST_PORT,
    TMP_NET_HOST_NAME,
    TMP_NET_HOST_CONNECTION_TYPE,
    TMP_NET_HOST_CONNECTION_SUBTYPE,
    TMP_NET_HOST_CARRIER_NAME,
    TMP_NET_HOST_CARRIER_MCC,
    TMP_NET_HOST_CARRIER_MNC,
    TMP_NET_HOST_CARRIER_ICC,
    TMP_PEER_SERVICE,
    TMP_ENDUSER_ID,
    TMP_ENDUSER_ROLE,
    TMP_ENDUSER_SCOPE,
    TMP_THREAD_ID,
    TMP_THREAD_NAME,
    TMP_CODE_FUNCTION,
    TMP_CODE_NAMESPACE,
    TMP_CODE_FILEPATH,
    TMP_CODE_LINENO,
    TMP_HTTP_METHOD,
    TMP_HTTP_URL,
    TMP_HTTP_TARGET,
    TMP_HTTP_HOST,
    TMP_HTTP_SCHEME,
    TMP_HTTP_STATUS_CODE,
    TMP_HTTP_FLAVOR,
    TMP_HTTP_USER_AGENT,
    TMP_HTTP_REQUEST_CONTENT_LENGTH,
    TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_SERVER_NAME,
    TMP_HTTP_ROUTE,
    TMP_HTTP_CLIENT_IP,
    TMP_AWS_DYNAMODB_TABLE_NAMES,
    TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
    TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
    TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
    TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
    TMP_AWS_DYNAMODB_CONSISTENT_READ,
    TMP_AWS_DYNAMODB_PROJECTION,
    TMP_AWS_DYNAMODB_LIMIT,
    TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
    TMP_AWS_DYNAMODB_INDEX_NAME,
    TMP_AWS_DYNAMODB_SELECT,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
    TMP_AWS_DYNAMODB_TABLE_COUNT,
    TMP_AWS_DYNAMODB_SCAN_FORWARD,
    TMP_AWS_DYNAMODB_SEGMENT,
    TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
    TMP_AWS_DYNAMODB_COUNT,
    TMP_AWS_DYNAMODB_SCANNED_COUNT,
    TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
    TMP_MESSAGING_SYSTEM,
    TMP_MESSAGING_DESTINATION,
    TMP_MESSAGING_DESTINATION_KIND,
    TMP_MESSAGING_TEMP_DESTINATION,
    TMP_MESSAGING_PROTOCOL,
    TMP_MESSAGING_PROTOCOL_VERSION,
    TMP_MESSAGING_URL,
    TMP_MESSAGING_MESSAGE_ID,
    TMP_MESSAGING_CONVERSATION_ID,
    TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
    TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
    TMP_MESSAGING_OPERATION,
    TMP_MESSAGING_CONSUMER_ID,
    TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
    TMP_MESSAGING_KAFKA_MESSAGE_KEY,
    TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
    TMP_MESSAGING_KAFKA_CLIENT_ID,
    TMP_MESSAGING_KAFKA_PARTITION,
    TMP_MESSAGING_KAFKA_TOMBSTONE,
    TMP_RPC_SYSTEM,
    TMP_RPC_SERVICE,
    TMP_RPC_METHOD,
    TMP_RPC_GRPC_STATUS_CODE,
    TMP_RPC_JSONRPC_VERSION,
    TMP_RPC_JSONRPC_REQUEST_ID,
    TMP_RPC_JSONRPC_ERROR_CODE,
    TMP_RPC_JSONRPC_ERROR_MESSAGE,
    TMP_MESSAGE_TYPE,
    TMP_MESSAGE_ID,
    TMP_MESSAGE_COMPRESSED_SIZE,
    TMP_MESSAGE_UNCOMPRESSED_SIZE
  ]);
  var TMP_DBSYSTEMVALUES_OTHER_SQL = "other_sql";
  var TMP_DBSYSTEMVALUES_MSSQL = "mssql";
  var TMP_DBSYSTEMVALUES_MYSQL = "mysql";
  var TMP_DBSYSTEMVALUES_ORACLE = "oracle";
  var TMP_DBSYSTEMVALUES_DB2 = "db2";
  var TMP_DBSYSTEMVALUES_POSTGRESQL = "postgresql";
  var TMP_DBSYSTEMVALUES_REDSHIFT = "redshift";
  var TMP_DBSYSTEMVALUES_HIVE = "hive";
  var TMP_DBSYSTEMVALUES_CLOUDSCAPE = "cloudscape";
  var TMP_DBSYSTEMVALUES_HSQLDB = "hsqldb";
  var TMP_DBSYSTEMVALUES_PROGRESS = "progress";
  var TMP_DBSYSTEMVALUES_MAXDB = "maxdb";
  var TMP_DBSYSTEMVALUES_HANADB = "hanadb";
  var TMP_DBSYSTEMVALUES_INGRES = "ingres";
  var TMP_DBSYSTEMVALUES_FIRSTSQL = "firstsql";
  var TMP_DBSYSTEMVALUES_EDB = "edb";
  var TMP_DBSYSTEMVALUES_CACHE = "cache";
  var TMP_DBSYSTEMVALUES_ADABAS = "adabas";
  var TMP_DBSYSTEMVALUES_FIREBIRD = "firebird";
  var TMP_DBSYSTEMVALUES_DERBY = "derby";
  var TMP_DBSYSTEMVALUES_FILEMAKER = "filemaker";
  var TMP_DBSYSTEMVALUES_INFORMIX = "informix";
  var TMP_DBSYSTEMVALUES_INSTANTDB = "instantdb";
  var TMP_DBSYSTEMVALUES_INTERBASE = "interbase";
  var TMP_DBSYSTEMVALUES_MARIADB = "mariadb";
  var TMP_DBSYSTEMVALUES_NETEZZA = "netezza";
  var TMP_DBSYSTEMVALUES_PERVASIVE = "pervasive";
  var TMP_DBSYSTEMVALUES_POINTBASE = "pointbase";
  var TMP_DBSYSTEMVALUES_SQLITE = "sqlite";
  var TMP_DBSYSTEMVALUES_SYBASE = "sybase";
  var TMP_DBSYSTEMVALUES_TERADATA = "teradata";
  var TMP_DBSYSTEMVALUES_VERTICA = "vertica";
  var TMP_DBSYSTEMVALUES_H2 = "h2";
  var TMP_DBSYSTEMVALUES_COLDFUSION = "coldfusion";
  var TMP_DBSYSTEMVALUES_CASSANDRA = "cassandra";
  var TMP_DBSYSTEMVALUES_HBASE = "hbase";
  var TMP_DBSYSTEMVALUES_MONGODB = "mongodb";
  var TMP_DBSYSTEMVALUES_REDIS = "redis";
  var TMP_DBSYSTEMVALUES_COUCHBASE = "couchbase";
  var TMP_DBSYSTEMVALUES_COUCHDB = "couchdb";
  var TMP_DBSYSTEMVALUES_COSMOSDB = "cosmosdb";
  var TMP_DBSYSTEMVALUES_DYNAMODB = "dynamodb";
  var TMP_DBSYSTEMVALUES_NEO4J = "neo4j";
  var TMP_DBSYSTEMVALUES_GEODE = "geode";
  var TMP_DBSYSTEMVALUES_ELASTICSEARCH = "elasticsearch";
  var TMP_DBSYSTEMVALUES_MEMCACHED = "memcached";
  var TMP_DBSYSTEMVALUES_COCKROACHDB = "cockroachdb";
  exports.DBSYSTEMVALUES_OTHER_SQL = TMP_DBSYSTEMVALUES_OTHER_SQL;
  exports.DBSYSTEMVALUES_MSSQL = TMP_DBSYSTEMVALUES_MSSQL;
  exports.DBSYSTEMVALUES_MYSQL = TMP_DBSYSTEMVALUES_MYSQL;
  exports.DBSYSTEMVALUES_ORACLE = TMP_DBSYSTEMVALUES_ORACLE;
  exports.DBSYSTEMVALUES_DB2 = TMP_DBSYSTEMVALUES_DB2;
  exports.DBSYSTEMVALUES_POSTGRESQL = TMP_DBSYSTEMVALUES_POSTGRESQL;
  exports.DBSYSTEMVALUES_REDSHIFT = TMP_DBSYSTEMVALUES_REDSHIFT;
  exports.DBSYSTEMVALUES_HIVE = TMP_DBSYSTEMVALUES_HIVE;
  exports.DBSYSTEMVALUES_CLOUDSCAPE = TMP_DBSYSTEMVALUES_CLOUDSCAPE;
  exports.DBSYSTEMVALUES_HSQLDB = TMP_DBSYSTEMVALUES_HSQLDB;
  exports.DBSYSTEMVALUES_PROGRESS = TMP_DBSYSTEMVALUES_PROGRESS;
  exports.DBSYSTEMVALUES_MAXDB = TMP_DBSYSTEMVALUES_MAXDB;
  exports.DBSYSTEMVALUES_HANADB = TMP_DBSYSTEMVALUES_HANADB;
  exports.DBSYSTEMVALUES_INGRES = TMP_DBSYSTEMVALUES_INGRES;
  exports.DBSYSTEMVALUES_FIRSTSQL = TMP_DBSYSTEMVALUES_FIRSTSQL;
  exports.DBSYSTEMVALUES_EDB = TMP_DBSYSTEMVALUES_EDB;
  exports.DBSYSTEMVALUES_CACHE = TMP_DBSYSTEMVALUES_CACHE;
  exports.DBSYSTEMVALUES_ADABAS = TMP_DBSYSTEMVALUES_ADABAS;
  exports.DBSYSTEMVALUES_FIREBIRD = TMP_DBSYSTEMVALUES_FIREBIRD;
  exports.DBSYSTEMVALUES_DERBY = TMP_DBSYSTEMVALUES_DERBY;
  exports.DBSYSTEMVALUES_FILEMAKER = TMP_DBSYSTEMVALUES_FILEMAKER;
  exports.DBSYSTEMVALUES_INFORMIX = TMP_DBSYSTEMVALUES_INFORMIX;
  exports.DBSYSTEMVALUES_INSTANTDB = TMP_DBSYSTEMVALUES_INSTANTDB;
  exports.DBSYSTEMVALUES_INTERBASE = TMP_DBSYSTEMVALUES_INTERBASE;
  exports.DBSYSTEMVALUES_MARIADB = TMP_DBSYSTEMVALUES_MARIADB;
  exports.DBSYSTEMVALUES_NETEZZA = TMP_DBSYSTEMVALUES_NETEZZA;
  exports.DBSYSTEMVALUES_PERVASIVE = TMP_DBSYSTEMVALUES_PERVASIVE;
  exports.DBSYSTEMVALUES_POINTBASE = TMP_DBSYSTEMVALUES_POINTBASE;
  exports.DBSYSTEMVALUES_SQLITE = TMP_DBSYSTEMVALUES_SQLITE;
  exports.DBSYSTEMVALUES_SYBASE = TMP_DBSYSTEMVALUES_SYBASE;
  exports.DBSYSTEMVALUES_TERADATA = TMP_DBSYSTEMVALUES_TERADATA;
  exports.DBSYSTEMVALUES_VERTICA = TMP_DBSYSTEMVALUES_VERTICA;
  exports.DBSYSTEMVALUES_H2 = TMP_DBSYSTEMVALUES_H2;
  exports.DBSYSTEMVALUES_COLDFUSION = TMP_DBSYSTEMVALUES_COLDFUSION;
  exports.DBSYSTEMVALUES_CASSANDRA = TMP_DBSYSTEMVALUES_CASSANDRA;
  exports.DBSYSTEMVALUES_HBASE = TMP_DBSYSTEMVALUES_HBASE;
  exports.DBSYSTEMVALUES_MONGODB = TMP_DBSYSTEMVALUES_MONGODB;
  exports.DBSYSTEMVALUES_REDIS = TMP_DBSYSTEMVALUES_REDIS;
  exports.DBSYSTEMVALUES_COUCHBASE = TMP_DBSYSTEMVALUES_COUCHBASE;
  exports.DBSYSTEMVALUES_COUCHDB = TMP_DBSYSTEMVALUES_COUCHDB;
  exports.DBSYSTEMVALUES_COSMOSDB = TMP_DBSYSTEMVALUES_COSMOSDB;
  exports.DBSYSTEMVALUES_DYNAMODB = TMP_DBSYSTEMVALUES_DYNAMODB;
  exports.DBSYSTEMVALUES_NEO4J = TMP_DBSYSTEMVALUES_NEO4J;
  exports.DBSYSTEMVALUES_GEODE = TMP_DBSYSTEMVALUES_GEODE;
  exports.DBSYSTEMVALUES_ELASTICSEARCH = TMP_DBSYSTEMVALUES_ELASTICSEARCH;
  exports.DBSYSTEMVALUES_MEMCACHED = TMP_DBSYSTEMVALUES_MEMCACHED;
  exports.DBSYSTEMVALUES_COCKROACHDB = TMP_DBSYSTEMVALUES_COCKROACHDB;
  exports.DbSystemValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_DBSYSTEMVALUES_OTHER_SQL,
    TMP_DBSYSTEMVALUES_MSSQL,
    TMP_DBSYSTEMVALUES_MYSQL,
    TMP_DBSYSTEMVALUES_ORACLE,
    TMP_DBSYSTEMVALUES_DB2,
    TMP_DBSYSTEMVALUES_POSTGRESQL,
    TMP_DBSYSTEMVALUES_REDSHIFT,
    TMP_DBSYSTEMVALUES_HIVE,
    TMP_DBSYSTEMVALUES_CLOUDSCAPE,
    TMP_DBSYSTEMVALUES_HSQLDB,
    TMP_DBSYSTEMVALUES_PROGRESS,
    TMP_DBSYSTEMVALUES_MAXDB,
    TMP_DBSYSTEMVALUES_HANADB,
    TMP_DBSYSTEMVALUES_INGRES,
    TMP_DBSYSTEMVALUES_FIRSTSQL,
    TMP_DBSYSTEMVALUES_EDB,
    TMP_DBSYSTEMVALUES_CACHE,
    TMP_DBSYSTEMVALUES_ADABAS,
    TMP_DBSYSTEMVALUES_FIREBIRD,
    TMP_DBSYSTEMVALUES_DERBY,
    TMP_DBSYSTEMVALUES_FILEMAKER,
    TMP_DBSYSTEMVALUES_INFORMIX,
    TMP_DBSYSTEMVALUES_INSTANTDB,
    TMP_DBSYSTEMVALUES_INTERBASE,
    TMP_DBSYSTEMVALUES_MARIADB,
    TMP_DBSYSTEMVALUES_NETEZZA,
    TMP_DBSYSTEMVALUES_PERVASIVE,
    TMP_DBSYSTEMVALUES_POINTBASE,
    TMP_DBSYSTEMVALUES_SQLITE,
    TMP_DBSYSTEMVALUES_SYBASE,
    TMP_DBSYSTEMVALUES_TERADATA,
    TMP_DBSYSTEMVALUES_VERTICA,
    TMP_DBSYSTEMVALUES_H2,
    TMP_DBSYSTEMVALUES_COLDFUSION,
    TMP_DBSYSTEMVALUES_CASSANDRA,
    TMP_DBSYSTEMVALUES_HBASE,
    TMP_DBSYSTEMVALUES_MONGODB,
    TMP_DBSYSTEMVALUES_REDIS,
    TMP_DBSYSTEMVALUES_COUCHBASE,
    TMP_DBSYSTEMVALUES_COUCHDB,
    TMP_DBSYSTEMVALUES_COSMOSDB,
    TMP_DBSYSTEMVALUES_DYNAMODB,
    TMP_DBSYSTEMVALUES_NEO4J,
    TMP_DBSYSTEMVALUES_GEODE,
    TMP_DBSYSTEMVALUES_ELASTICSEARCH,
    TMP_DBSYSTEMVALUES_MEMCACHED,
    TMP_DBSYSTEMVALUES_COCKROACHDB
  ]);
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = "all";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = "each_quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = "quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = "local_quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = "one";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = "two";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = "three";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = "local_one";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = "any";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = "serial";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = "local_serial";
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL;
  exports.DbCassandraConsistencyLevelValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
  ]);
  var TMP_FAASTRIGGERVALUES_DATASOURCE = "datasource";
  var TMP_FAASTRIGGERVALUES_HTTP = "http";
  var TMP_FAASTRIGGERVALUES_PUBSUB = "pubsub";
  var TMP_FAASTRIGGERVALUES_TIMER = "timer";
  var TMP_FAASTRIGGERVALUES_OTHER = "other";
  exports.FAASTRIGGERVALUES_DATASOURCE = TMP_FAASTRIGGERVALUES_DATASOURCE;
  exports.FAASTRIGGERVALUES_HTTP = TMP_FAASTRIGGERVALUES_HTTP;
  exports.FAASTRIGGERVALUES_PUBSUB = TMP_FAASTRIGGERVALUES_PUBSUB;
  exports.FAASTRIGGERVALUES_TIMER = TMP_FAASTRIGGERVALUES_TIMER;
  exports.FAASTRIGGERVALUES_OTHER = TMP_FAASTRIGGERVALUES_OTHER;
  exports.FaasTriggerValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASTRIGGERVALUES_DATASOURCE,
    TMP_FAASTRIGGERVALUES_HTTP,
    TMP_FAASTRIGGERVALUES_PUBSUB,
    TMP_FAASTRIGGERVALUES_TIMER,
    TMP_FAASTRIGGERVALUES_OTHER
  ]);
  var TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = "insert";
  var TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = "edit";
  var TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = "delete";
  exports.FAASDOCUMENTOPERATIONVALUES_INSERT = TMP_FAASDOCUMENTOPERATIONVALUES_INSERT;
  exports.FAASDOCUMENTOPERATIONVALUES_EDIT = TMP_FAASDOCUMENTOPERATIONVALUES_EDIT;
  exports.FAASDOCUMENTOPERATIONVALUES_DELETE = TMP_FAASDOCUMENTOPERATIONVALUES_DELETE;
  exports.FaasDocumentOperationValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
    TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
    TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
  ]);
  var TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
  var TMP_FAASINVOKEDPROVIDERVALUES_AWS = "aws";
  var TMP_FAASINVOKEDPROVIDERVALUES_AZURE = "azure";
  var TMP_FAASINVOKEDPROVIDERVALUES_GCP = "gcp";
  exports.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD;
  exports.FAASINVOKEDPROVIDERVALUES_AWS = TMP_FAASINVOKEDPROVIDERVALUES_AWS;
  exports.FAASINVOKEDPROVIDERVALUES_AZURE = TMP_FAASINVOKEDPROVIDERVALUES_AZURE;
  exports.FAASINVOKEDPROVIDERVALUES_GCP = TMP_FAASINVOKEDPROVIDERVALUES_GCP;
  exports.FaasInvokedProviderValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_FAASINVOKEDPROVIDERVALUES_AWS,
    TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
    TMP_FAASINVOKEDPROVIDERVALUES_GCP
  ]);
  var TMP_NETTRANSPORTVALUES_IP_TCP = "ip_tcp";
  var TMP_NETTRANSPORTVALUES_IP_UDP = "ip_udp";
  var TMP_NETTRANSPORTVALUES_IP = "ip";
  var TMP_NETTRANSPORTVALUES_UNIX = "unix";
  var TMP_NETTRANSPORTVALUES_PIPE = "pipe";
  var TMP_NETTRANSPORTVALUES_INPROC = "inproc";
  var TMP_NETTRANSPORTVALUES_OTHER = "other";
  exports.NETTRANSPORTVALUES_IP_TCP = TMP_NETTRANSPORTVALUES_IP_TCP;
  exports.NETTRANSPORTVALUES_IP_UDP = TMP_NETTRANSPORTVALUES_IP_UDP;
  exports.NETTRANSPORTVALUES_IP = TMP_NETTRANSPORTVALUES_IP;
  exports.NETTRANSPORTVALUES_UNIX = TMP_NETTRANSPORTVALUES_UNIX;
  exports.NETTRANSPORTVALUES_PIPE = TMP_NETTRANSPORTVALUES_PIPE;
  exports.NETTRANSPORTVALUES_INPROC = TMP_NETTRANSPORTVALUES_INPROC;
  exports.NETTRANSPORTVALUES_OTHER = TMP_NETTRANSPORTVALUES_OTHER;
  exports.NetTransportValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETTRANSPORTVALUES_IP_TCP,
    TMP_NETTRANSPORTVALUES_IP_UDP,
    TMP_NETTRANSPORTVALUES_IP,
    TMP_NETTRANSPORTVALUES_UNIX,
    TMP_NETTRANSPORTVALUES_PIPE,
    TMP_NETTRANSPORTVALUES_INPROC,
    TMP_NETTRANSPORTVALUES_OTHER
  ]);
  var TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = "wifi";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = "wired";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = "cell";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = "unavailable";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = "unknown";
  exports.NETHOSTCONNECTIONTYPEVALUES_WIFI = TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI;
  exports.NETHOSTCONNECTIONTYPEVALUES_WIRED = TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED;
  exports.NETHOSTCONNECTIONTYPEVALUES_CELL = TMP_NETHOSTCONNECTIONTYPEVALUES_CELL;
  exports.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE;
  exports.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN;
  exports.NetHostConnectionTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
    TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
  ]);
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = "gprs";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = "edge";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = "umts";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = "cdma";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = "evdo_0";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = "evdo_a";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = "cdma2000_1xrtt";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = "hsdpa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = "hsupa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = "hspa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = "iden";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = "evdo_b";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = "lte";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = "ehrpd";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = "hspap";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = "gsm";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = "td_scdma";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = "iwlan";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = "nr";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = "nrnsa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = "lte_ca";
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_NR = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA;
  exports.NetHostConnectionSubtypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
  ]);
  var TMP_HTTPFLAVORVALUES_HTTP_1_0 = "1.0";
  var TMP_HTTPFLAVORVALUES_HTTP_1_1 = "1.1";
  var TMP_HTTPFLAVORVALUES_HTTP_2_0 = "2.0";
  var TMP_HTTPFLAVORVALUES_SPDY = "SPDY";
  var TMP_HTTPFLAVORVALUES_QUIC = "QUIC";
  exports.HTTPFLAVORVALUES_HTTP_1_0 = TMP_HTTPFLAVORVALUES_HTTP_1_0;
  exports.HTTPFLAVORVALUES_HTTP_1_1 = TMP_HTTPFLAVORVALUES_HTTP_1_1;
  exports.HTTPFLAVORVALUES_HTTP_2_0 = TMP_HTTPFLAVORVALUES_HTTP_2_0;
  exports.HTTPFLAVORVALUES_SPDY = TMP_HTTPFLAVORVALUES_SPDY;
  exports.HTTPFLAVORVALUES_QUIC = TMP_HTTPFLAVORVALUES_QUIC;
  exports.HttpFlavorValues = {
    HTTP_1_0: TMP_HTTPFLAVORVALUES_HTTP_1_0,
    HTTP_1_1: TMP_HTTPFLAVORVALUES_HTTP_1_1,
    HTTP_2_0: TMP_HTTPFLAVORVALUES_HTTP_2_0,
    SPDY: TMP_HTTPFLAVORVALUES_SPDY,
    QUIC: TMP_HTTPFLAVORVALUES_QUIC
  };
  var TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = "queue";
  var TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = "topic";
  exports.MESSAGINGDESTINATIONKINDVALUES_QUEUE = TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE;
  exports.MESSAGINGDESTINATIONKINDVALUES_TOPIC = TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC;
  exports.MessagingDestinationKindValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
    TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
  ]);
  var TMP_MESSAGINGOPERATIONVALUES_RECEIVE = "receive";
  var TMP_MESSAGINGOPERATIONVALUES_PROCESS = "process";
  exports.MESSAGINGOPERATIONVALUES_RECEIVE = TMP_MESSAGINGOPERATIONVALUES_RECEIVE;
  exports.MESSAGINGOPERATIONVALUES_PROCESS = TMP_MESSAGINGOPERATIONVALUES_PROCESS;
  exports.MessagingOperationValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
    TMP_MESSAGINGOPERATIONVALUES_PROCESS
  ]);
  var TMP_RPCGRPCSTATUSCODEVALUES_OK = 0;
  var TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
  var TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
  var TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
  var TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
  var TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
  var TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
  var TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
  var TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
  var TMP_RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
  var TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
  var TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
  var TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
  exports.RPCGRPCSTATUSCODEVALUES_OK = TMP_RPCGRPCSTATUSCODEVALUES_OK;
  exports.RPCGRPCSTATUSCODEVALUES_CANCELLED = TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED;
  exports.RPCGRPCSTATUSCODEVALUES_UNKNOWN = TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN;
  exports.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT;
  exports.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED;
  exports.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND;
  exports.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS;
  exports.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED;
  exports.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED;
  exports.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION;
  exports.RPCGRPCSTATUSCODEVALUES_ABORTED = TMP_RPCGRPCSTATUSCODEVALUES_ABORTED;
  exports.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE;
  exports.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED;
  exports.RPCGRPCSTATUSCODEVALUES_INTERNAL = TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL;
  exports.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE;
  exports.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS;
  exports.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED;
  exports.RpcGrpcStatusCodeValues = {
    OK: TMP_RPCGRPCSTATUSCODEVALUES_OK,
    CANCELLED: TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED,
    UNKNOWN: TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN,
    INVALID_ARGUMENT: TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
    DEADLINE_EXCEEDED: TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
    NOT_FOUND: TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
    ALREADY_EXISTS: TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
    PERMISSION_DENIED: TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
    RESOURCE_EXHAUSTED: TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION: TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
    ABORTED: TMP_RPCGRPCSTATUSCODEVALUES_ABORTED,
    OUT_OF_RANGE: TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
    UNIMPLEMENTED: TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
    INTERNAL: TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL,
    UNAVAILABLE: TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
    DATA_LOSS: TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
    UNAUTHENTICATED: TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED
  };
  var TMP_MESSAGETYPEVALUES_SENT = "SENT";
  var TMP_MESSAGETYPEVALUES_RECEIVED = "RECEIVED";
  exports.MESSAGETYPEVALUES_SENT = TMP_MESSAGETYPEVALUES_SENT;
  exports.MESSAGETYPEVALUES_RECEIVED = TMP_MESSAGETYPEVALUES_RECEIVED;
  exports.MessageTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGETYPEVALUES_SENT,
    TMP_MESSAGETYPEVALUES_RECEIVED
  ]);
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/trace/index.js
var require_trace2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_SemanticAttributes2(), exports);
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/resource/SemanticResourceAttributes.js
var require_SemanticResourceAttributes2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SEMRESATTRS_K8S_STATEFULSET_NAME = exports.SEMRESATTRS_K8S_STATEFULSET_UID = exports.SEMRESATTRS_K8S_DEPLOYMENT_NAME = exports.SEMRESATTRS_K8S_DEPLOYMENT_UID = exports.SEMRESATTRS_K8S_REPLICASET_NAME = exports.SEMRESATTRS_K8S_REPLICASET_UID = exports.SEMRESATTRS_K8S_CONTAINER_NAME = exports.SEMRESATTRS_K8S_POD_NAME = exports.SEMRESATTRS_K8S_POD_UID = exports.SEMRESATTRS_K8S_NAMESPACE_NAME = exports.SEMRESATTRS_K8S_NODE_UID = exports.SEMRESATTRS_K8S_NODE_NAME = exports.SEMRESATTRS_K8S_CLUSTER_NAME = exports.SEMRESATTRS_HOST_IMAGE_VERSION = exports.SEMRESATTRS_HOST_IMAGE_ID = exports.SEMRESATTRS_HOST_IMAGE_NAME = exports.SEMRESATTRS_HOST_ARCH = exports.SEMRESATTRS_HOST_TYPE = exports.SEMRESATTRS_HOST_NAME = exports.SEMRESATTRS_HOST_ID = exports.SEMRESATTRS_FAAS_MAX_MEMORY = exports.SEMRESATTRS_FAAS_INSTANCE = exports.SEMRESATTRS_FAAS_VERSION = exports.SEMRESATTRS_FAAS_ID = exports.SEMRESATTRS_FAAS_NAME = exports.SEMRESATTRS_DEVICE_MODEL_NAME = exports.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = exports.SEMRESATTRS_DEVICE_ID = exports.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = exports.SEMRESATTRS_CONTAINER_IMAGE_TAG = exports.SEMRESATTRS_CONTAINER_IMAGE_NAME = exports.SEMRESATTRS_CONTAINER_RUNTIME = exports.SEMRESATTRS_CONTAINER_ID = exports.SEMRESATTRS_CONTAINER_NAME = exports.SEMRESATTRS_AWS_LOG_STREAM_ARNS = exports.SEMRESATTRS_AWS_LOG_STREAM_NAMES = exports.SEMRESATTRS_AWS_LOG_GROUP_ARNS = exports.SEMRESATTRS_AWS_LOG_GROUP_NAMES = exports.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = exports.SEMRESATTRS_AWS_ECS_TASK_REVISION = exports.SEMRESATTRS_AWS_ECS_TASK_FAMILY = exports.SEMRESATTRS_AWS_ECS_TASK_ARN = exports.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = exports.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = exports.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = exports.SEMRESATTRS_CLOUD_PLATFORM = exports.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = exports.SEMRESATTRS_CLOUD_REGION = exports.SEMRESATTRS_CLOUD_ACCOUNT_ID = exports.SEMRESATTRS_CLOUD_PROVIDER = undefined;
  exports.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = exports.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = exports.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = exports.CLOUDPLATFORMVALUES_AZURE_AKS = exports.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = exports.CLOUDPLATFORMVALUES_AZURE_VM = exports.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = exports.CLOUDPLATFORMVALUES_AWS_LAMBDA = exports.CLOUDPLATFORMVALUES_AWS_EKS = exports.CLOUDPLATFORMVALUES_AWS_ECS = exports.CLOUDPLATFORMVALUES_AWS_EC2 = exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = exports.CloudProviderValues = exports.CLOUDPROVIDERVALUES_GCP = exports.CLOUDPROVIDERVALUES_AZURE = exports.CLOUDPROVIDERVALUES_AWS = exports.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = exports.SemanticResourceAttributes = exports.SEMRESATTRS_WEBENGINE_DESCRIPTION = exports.SEMRESATTRS_WEBENGINE_VERSION = exports.SEMRESATTRS_WEBENGINE_NAME = exports.SEMRESATTRS_TELEMETRY_AUTO_VERSION = exports.SEMRESATTRS_TELEMETRY_SDK_VERSION = exports.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = exports.SEMRESATTRS_TELEMETRY_SDK_NAME = exports.SEMRESATTRS_SERVICE_VERSION = exports.SEMRESATTRS_SERVICE_INSTANCE_ID = exports.SEMRESATTRS_SERVICE_NAMESPACE = exports.SEMRESATTRS_SERVICE_NAME = exports.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = exports.SEMRESATTRS_PROCESS_RUNTIME_VERSION = exports.SEMRESATTRS_PROCESS_RUNTIME_NAME = exports.SEMRESATTRS_PROCESS_OWNER = exports.SEMRESATTRS_PROCESS_COMMAND_ARGS = exports.SEMRESATTRS_PROCESS_COMMAND_LINE = exports.SEMRESATTRS_PROCESS_COMMAND = exports.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = exports.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = exports.SEMRESATTRS_PROCESS_PID = exports.SEMRESATTRS_OS_VERSION = exports.SEMRESATTRS_OS_NAME = exports.SEMRESATTRS_OS_DESCRIPTION = exports.SEMRESATTRS_OS_TYPE = exports.SEMRESATTRS_K8S_CRONJOB_NAME = exports.SEMRESATTRS_K8S_CRONJOB_UID = exports.SEMRESATTRS_K8S_JOB_NAME = exports.SEMRESATTRS_K8S_JOB_UID = exports.SEMRESATTRS_K8S_DAEMONSET_NAME = exports.SEMRESATTRS_K8S_DAEMONSET_UID = undefined;
  exports.TelemetrySdkLanguageValues = exports.TELEMETRYSDKLANGUAGEVALUES_WEBJS = exports.TELEMETRYSDKLANGUAGEVALUES_RUBY = exports.TELEMETRYSDKLANGUAGEVALUES_PYTHON = exports.TELEMETRYSDKLANGUAGEVALUES_PHP = exports.TELEMETRYSDKLANGUAGEVALUES_NODEJS = exports.TELEMETRYSDKLANGUAGEVALUES_JAVA = exports.TELEMETRYSDKLANGUAGEVALUES_GO = exports.TELEMETRYSDKLANGUAGEVALUES_ERLANG = exports.TELEMETRYSDKLANGUAGEVALUES_DOTNET = exports.TELEMETRYSDKLANGUAGEVALUES_CPP = exports.OsTypeValues = exports.OSTYPEVALUES_Z_OS = exports.OSTYPEVALUES_SOLARIS = exports.OSTYPEVALUES_AIX = exports.OSTYPEVALUES_HPUX = exports.OSTYPEVALUES_DRAGONFLYBSD = exports.OSTYPEVALUES_OPENBSD = exports.OSTYPEVALUES_NETBSD = exports.OSTYPEVALUES_FREEBSD = exports.OSTYPEVALUES_DARWIN = exports.OSTYPEVALUES_LINUX = exports.OSTYPEVALUES_WINDOWS = exports.HostArchValues = exports.HOSTARCHVALUES_X86 = exports.HOSTARCHVALUES_PPC64 = exports.HOSTARCHVALUES_PPC32 = exports.HOSTARCHVALUES_IA64 = exports.HOSTARCHVALUES_ARM64 = exports.HOSTARCHVALUES_ARM32 = exports.HOSTARCHVALUES_AMD64 = exports.AwsEcsLaunchtypeValues = exports.AWSECSLAUNCHTYPEVALUES_FARGATE = exports.AWSECSLAUNCHTYPEVALUES_EC2 = exports.CloudPlatformValues = exports.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = exports.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = exports.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = exports.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = undefined;
  var utils_1 = require_utils2();
  var TMP_CLOUD_PROVIDER = "cloud.provider";
  var TMP_CLOUD_ACCOUNT_ID = "cloud.account.id";
  var TMP_CLOUD_REGION = "cloud.region";
  var TMP_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
  var TMP_CLOUD_PLATFORM = "cloud.platform";
  var TMP_AWS_ECS_CONTAINER_ARN = "aws.ecs.container.arn";
  var TMP_AWS_ECS_CLUSTER_ARN = "aws.ecs.cluster.arn";
  var TMP_AWS_ECS_LAUNCHTYPE = "aws.ecs.launchtype";
  var TMP_AWS_ECS_TASK_ARN = "aws.ecs.task.arn";
  var TMP_AWS_ECS_TASK_FAMILY = "aws.ecs.task.family";
  var TMP_AWS_ECS_TASK_REVISION = "aws.ecs.task.revision";
  var TMP_AWS_EKS_CLUSTER_ARN = "aws.eks.cluster.arn";
  var TMP_AWS_LOG_GROUP_NAMES = "aws.log.group.names";
  var TMP_AWS_LOG_GROUP_ARNS = "aws.log.group.arns";
  var TMP_AWS_LOG_STREAM_NAMES = "aws.log.stream.names";
  var TMP_AWS_LOG_STREAM_ARNS = "aws.log.stream.arns";
  var TMP_CONTAINER_NAME = "container.name";
  var TMP_CONTAINER_ID = "container.id";
  var TMP_CONTAINER_RUNTIME = "container.runtime";
  var TMP_CONTAINER_IMAGE_NAME = "container.image.name";
  var TMP_CONTAINER_IMAGE_TAG = "container.image.tag";
  var TMP_DEPLOYMENT_ENVIRONMENT = "deployment.environment";
  var TMP_DEVICE_ID = "device.id";
  var TMP_DEVICE_MODEL_IDENTIFIER = "device.model.identifier";
  var TMP_DEVICE_MODEL_NAME = "device.model.name";
  var TMP_FAAS_NAME = "faas.name";
  var TMP_FAAS_ID = "faas.id";
  var TMP_FAAS_VERSION = "faas.version";
  var TMP_FAAS_INSTANCE = "faas.instance";
  var TMP_FAAS_MAX_MEMORY = "faas.max_memory";
  var TMP_HOST_ID = "host.id";
  var TMP_HOST_NAME = "host.name";
  var TMP_HOST_TYPE = "host.type";
  var TMP_HOST_ARCH = "host.arch";
  var TMP_HOST_IMAGE_NAME = "host.image.name";
  var TMP_HOST_IMAGE_ID = "host.image.id";
  var TMP_HOST_IMAGE_VERSION = "host.image.version";
  var TMP_K8S_CLUSTER_NAME = "k8s.cluster.name";
  var TMP_K8S_NODE_NAME = "k8s.node.name";
  var TMP_K8S_NODE_UID = "k8s.node.uid";
  var TMP_K8S_NAMESPACE_NAME = "k8s.namespace.name";
  var TMP_K8S_POD_UID = "k8s.pod.uid";
  var TMP_K8S_POD_NAME = "k8s.pod.name";
  var TMP_K8S_CONTAINER_NAME = "k8s.container.name";
  var TMP_K8S_REPLICASET_UID = "k8s.replicaset.uid";
  var TMP_K8S_REPLICASET_NAME = "k8s.replicaset.name";
  var TMP_K8S_DEPLOYMENT_UID = "k8s.deployment.uid";
  var TMP_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
  var TMP_K8S_STATEFULSET_UID = "k8s.statefulset.uid";
  var TMP_K8S_STATEFULSET_NAME = "k8s.statefulset.name";
  var TMP_K8S_DAEMONSET_UID = "k8s.daemonset.uid";
  var TMP_K8S_DAEMONSET_NAME = "k8s.daemonset.name";
  var TMP_K8S_JOB_UID = "k8s.job.uid";
  var TMP_K8S_JOB_NAME = "k8s.job.name";
  var TMP_K8S_CRONJOB_UID = "k8s.cronjob.uid";
  var TMP_K8S_CRONJOB_NAME = "k8s.cronjob.name";
  var TMP_OS_TYPE = "os.type";
  var TMP_OS_DESCRIPTION = "os.description";
  var TMP_OS_NAME = "os.name";
  var TMP_OS_VERSION = "os.version";
  var TMP_PROCESS_PID = "process.pid";
  var TMP_PROCESS_EXECUTABLE_NAME = "process.executable.name";
  var TMP_PROCESS_EXECUTABLE_PATH = "process.executable.path";
  var TMP_PROCESS_COMMAND = "process.command";
  var TMP_PROCESS_COMMAND_LINE = "process.command_line";
  var TMP_PROCESS_COMMAND_ARGS = "process.command_args";
  var TMP_PROCESS_OWNER = "process.owner";
  var TMP_PROCESS_RUNTIME_NAME = "process.runtime.name";
  var TMP_PROCESS_RUNTIME_VERSION = "process.runtime.version";
  var TMP_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
  var TMP_SERVICE_NAME = "service.name";
  var TMP_SERVICE_NAMESPACE = "service.namespace";
  var TMP_SERVICE_INSTANCE_ID = "service.instance.id";
  var TMP_SERVICE_VERSION = "service.version";
  var TMP_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  var TMP_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  var TMP_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  var TMP_TELEMETRY_AUTO_VERSION = "telemetry.auto.version";
  var TMP_WEBENGINE_NAME = "webengine.name";
  var TMP_WEBENGINE_VERSION = "webengine.version";
  var TMP_WEBENGINE_DESCRIPTION = "webengine.description";
  exports.SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
  exports.SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
  exports.SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
  exports.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
  exports.SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
  exports.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
  exports.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
  exports.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
  exports.SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
  exports.SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
  exports.SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
  exports.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
  exports.SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
  exports.SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
  exports.SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
  exports.SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
  exports.SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
  exports.SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
  exports.SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
  exports.SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
  exports.SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
  exports.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
  exports.SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
  exports.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
  exports.SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
  exports.SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
  exports.SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
  exports.SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
  exports.SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
  exports.SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
  exports.SEMRESATTRS_HOST_ID = TMP_HOST_ID;
  exports.SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
  exports.SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
  exports.SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
  exports.SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
  exports.SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
  exports.SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
  exports.SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
  exports.SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
  exports.SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
  exports.SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
  exports.SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
  exports.SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
  exports.SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
  exports.SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
  exports.SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
  exports.SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
  exports.SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
  exports.SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
  exports.SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
  exports.SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
  exports.SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
  exports.SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
  exports.SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
  exports.SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
  exports.SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
  exports.SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
  exports.SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
  exports.SEMRESATTRS_OS_NAME = TMP_OS_NAME;
  exports.SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
  exports.SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
  exports.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
  exports.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
  exports.SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
  exports.SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
  exports.SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
  exports.SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
  exports.SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
  exports.SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
  exports.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
  exports.SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
  exports.SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
  exports.SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
  exports.SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
  exports.SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
  exports.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
  exports.SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
  exports.SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
  exports.SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
  exports.SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
  exports.SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
  exports.SemanticResourceAttributes = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUD_PROVIDER,
    TMP_CLOUD_ACCOUNT_ID,
    TMP_CLOUD_REGION,
    TMP_CLOUD_AVAILABILITY_ZONE,
    TMP_CLOUD_PLATFORM,
    TMP_AWS_ECS_CONTAINER_ARN,
    TMP_AWS_ECS_CLUSTER_ARN,
    TMP_AWS_ECS_LAUNCHTYPE,
    TMP_AWS_ECS_TASK_ARN,
    TMP_AWS_ECS_TASK_FAMILY,
    TMP_AWS_ECS_TASK_REVISION,
    TMP_AWS_EKS_CLUSTER_ARN,
    TMP_AWS_LOG_GROUP_NAMES,
    TMP_AWS_LOG_GROUP_ARNS,
    TMP_AWS_LOG_STREAM_NAMES,
    TMP_AWS_LOG_STREAM_ARNS,
    TMP_CONTAINER_NAME,
    TMP_CONTAINER_ID,
    TMP_CONTAINER_RUNTIME,
    TMP_CONTAINER_IMAGE_NAME,
    TMP_CONTAINER_IMAGE_TAG,
    TMP_DEPLOYMENT_ENVIRONMENT,
    TMP_DEVICE_ID,
    TMP_DEVICE_MODEL_IDENTIFIER,
    TMP_DEVICE_MODEL_NAME,
    TMP_FAAS_NAME,
    TMP_FAAS_ID,
    TMP_FAAS_VERSION,
    TMP_FAAS_INSTANCE,
    TMP_FAAS_MAX_MEMORY,
    TMP_HOST_ID,
    TMP_HOST_NAME,
    TMP_HOST_TYPE,
    TMP_HOST_ARCH,
    TMP_HOST_IMAGE_NAME,
    TMP_HOST_IMAGE_ID,
    TMP_HOST_IMAGE_VERSION,
    TMP_K8S_CLUSTER_NAME,
    TMP_K8S_NODE_NAME,
    TMP_K8S_NODE_UID,
    TMP_K8S_NAMESPACE_NAME,
    TMP_K8S_POD_UID,
    TMP_K8S_POD_NAME,
    TMP_K8S_CONTAINER_NAME,
    TMP_K8S_REPLICASET_UID,
    TMP_K8S_REPLICASET_NAME,
    TMP_K8S_DEPLOYMENT_UID,
    TMP_K8S_DEPLOYMENT_NAME,
    TMP_K8S_STATEFULSET_UID,
    TMP_K8S_STATEFULSET_NAME,
    TMP_K8S_DAEMONSET_UID,
    TMP_K8S_DAEMONSET_NAME,
    TMP_K8S_JOB_UID,
    TMP_K8S_JOB_NAME,
    TMP_K8S_CRONJOB_UID,
    TMP_K8S_CRONJOB_NAME,
    TMP_OS_TYPE,
    TMP_OS_DESCRIPTION,
    TMP_OS_NAME,
    TMP_OS_VERSION,
    TMP_PROCESS_PID,
    TMP_PROCESS_EXECUTABLE_NAME,
    TMP_PROCESS_EXECUTABLE_PATH,
    TMP_PROCESS_COMMAND,
    TMP_PROCESS_COMMAND_LINE,
    TMP_PROCESS_COMMAND_ARGS,
    TMP_PROCESS_OWNER,
    TMP_PROCESS_RUNTIME_NAME,
    TMP_PROCESS_RUNTIME_VERSION,
    TMP_PROCESS_RUNTIME_DESCRIPTION,
    TMP_SERVICE_NAME,
    TMP_SERVICE_NAMESPACE,
    TMP_SERVICE_INSTANCE_ID,
    TMP_SERVICE_VERSION,
    TMP_TELEMETRY_SDK_NAME,
    TMP_TELEMETRY_SDK_LANGUAGE,
    TMP_TELEMETRY_SDK_VERSION,
    TMP_TELEMETRY_AUTO_VERSION,
    TMP_WEBENGINE_NAME,
    TMP_WEBENGINE_VERSION,
    TMP_WEBENGINE_DESCRIPTION
  ]);
  var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
  var TMP_CLOUDPROVIDERVALUES_AWS = "aws";
  var TMP_CLOUDPROVIDERVALUES_AZURE = "azure";
  var TMP_CLOUDPROVIDERVALUES_GCP = "gcp";
  exports.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
  exports.CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
  exports.CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
  exports.CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
  exports.CloudProviderValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_CLOUDPROVIDERVALUES_AWS,
    TMP_CLOUDPROVIDERVALUES_AZURE,
    TMP_CLOUDPROVIDERVALUES_GCP
  ]);
  var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = "alibaba_cloud_ecs";
  var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = "alibaba_cloud_fc";
  var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = "aws_ec2";
  var TMP_CLOUDPLATFORMVALUES_AWS_ECS = "aws_ecs";
  var TMP_CLOUDPLATFORMVALUES_AWS_EKS = "aws_eks";
  var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = "aws_lambda";
  var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = "aws_elastic_beanstalk";
  var TMP_CLOUDPLATFORMVALUES_AZURE_VM = "azure_vm";
  var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = "azure_container_instances";
  var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = "azure_aks";
  var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = "azure_functions";
  var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = "azure_app_service";
  var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = "gcp_compute_engine";
  var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = "gcp_cloud_run";
  var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = "gcp_kubernetes_engine";
  var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = "gcp_cloud_functions";
  var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = "gcp_app_engine";
  exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
  exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
  exports.CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
  exports.CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
  exports.CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
  exports.CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
  exports.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
  exports.CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
  exports.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
  exports.CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
  exports.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
  exports.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
  exports.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
  exports.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
  exports.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
  exports.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
  exports.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
  exports.CloudPlatformValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    TMP_CLOUDPLATFORMVALUES_AWS_EC2,
    TMP_CLOUDPLATFORMVALUES_AWS_ECS,
    TMP_CLOUDPLATFORMVALUES_AWS_EKS,
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    TMP_CLOUDPLATFORMVALUES_AZURE_VM,
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
  ]);
  var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = "ec2";
  var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = "fargate";
  exports.AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
  exports.AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
  exports.AwsEcsLaunchtypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_AWSECSLAUNCHTYPEVALUES_EC2,
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
  ]);
  var TMP_HOSTARCHVALUES_AMD64 = "amd64";
  var TMP_HOSTARCHVALUES_ARM32 = "arm32";
  var TMP_HOSTARCHVALUES_ARM64 = "arm64";
  var TMP_HOSTARCHVALUES_IA64 = "ia64";
  var TMP_HOSTARCHVALUES_PPC32 = "ppc32";
  var TMP_HOSTARCHVALUES_PPC64 = "ppc64";
  var TMP_HOSTARCHVALUES_X86 = "x86";
  exports.HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
  exports.HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
  exports.HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
  exports.HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
  exports.HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
  exports.HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
  exports.HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
  exports.HostArchValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_HOSTARCHVALUES_AMD64,
    TMP_HOSTARCHVALUES_ARM32,
    TMP_HOSTARCHVALUES_ARM64,
    TMP_HOSTARCHVALUES_IA64,
    TMP_HOSTARCHVALUES_PPC32,
    TMP_HOSTARCHVALUES_PPC64,
    TMP_HOSTARCHVALUES_X86
  ]);
  var TMP_OSTYPEVALUES_WINDOWS = "windows";
  var TMP_OSTYPEVALUES_LINUX = "linux";
  var TMP_OSTYPEVALUES_DARWIN = "darwin";
  var TMP_OSTYPEVALUES_FREEBSD = "freebsd";
  var TMP_OSTYPEVALUES_NETBSD = "netbsd";
  var TMP_OSTYPEVALUES_OPENBSD = "openbsd";
  var TMP_OSTYPEVALUES_DRAGONFLYBSD = "dragonflybsd";
  var TMP_OSTYPEVALUES_HPUX = "hpux";
  var TMP_OSTYPEVALUES_AIX = "aix";
  var TMP_OSTYPEVALUES_SOLARIS = "solaris";
  var TMP_OSTYPEVALUES_Z_OS = "z_os";
  exports.OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
  exports.OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
  exports.OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
  exports.OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
  exports.OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
  exports.OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
  exports.OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
  exports.OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
  exports.OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
  exports.OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
  exports.OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
  exports.OsTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_OSTYPEVALUES_WINDOWS,
    TMP_OSTYPEVALUES_LINUX,
    TMP_OSTYPEVALUES_DARWIN,
    TMP_OSTYPEVALUES_FREEBSD,
    TMP_OSTYPEVALUES_NETBSD,
    TMP_OSTYPEVALUES_OPENBSD,
    TMP_OSTYPEVALUES_DRAGONFLYBSD,
    TMP_OSTYPEVALUES_HPUX,
    TMP_OSTYPEVALUES_AIX,
    TMP_OSTYPEVALUES_SOLARIS,
    TMP_OSTYPEVALUES_Z_OS
  ]);
  var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = "cpp";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = "dotnet";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = "erlang";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = "go";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = "java";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = "nodejs";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = "php";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = "python";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = "ruby";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = "webjs";
  exports.TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
  exports.TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
  exports.TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
  exports.TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
  exports.TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
  exports.TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
  exports.TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
  exports.TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
  exports.TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
  exports.TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
  exports.TelemetrySdkLanguageValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
  ]);
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/resource/index.js
var require_resource2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_SemanticResourceAttributes2(), exports);
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/stable_attributes.js
var require_stable_attributes2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HTTP_REQUEST_METHOD_VALUE_POST = exports.HTTP_REQUEST_METHOD_VALUE_PATCH = exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = exports.HTTP_REQUEST_METHOD_VALUE_HEAD = exports.HTTP_REQUEST_METHOD_VALUE_GET = exports.HTTP_REQUEST_METHOD_VALUE_DELETE = exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = exports.HTTP_REQUEST_METHOD_VALUE_OTHER = exports.ATTR_HTTP_REQUEST_METHOD = exports.ATTR_HTTP_REQUEST_HEADER = exports.ATTR_EXCEPTION_TYPE = exports.ATTR_EXCEPTION_STACKTRACE = exports.ATTR_EXCEPTION_MESSAGE = exports.ATTR_EXCEPTION_ESCAPED = exports.ERROR_TYPE_VALUE_OTHER = exports.ATTR_ERROR_TYPE = exports.ATTR_CLIENT_PORT = exports.ATTR_CLIENT_ADDRESS = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = exports.ATTR_TELEMETRY_SDK_VERSION = exports.ATTR_TELEMETRY_SDK_NAME = exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = exports.ATTR_TELEMETRY_SDK_LANGUAGE = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = undefined;
  exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = exports.ATTR_SIGNALR_CONNECTION_STATUS = exports.ATTR_SERVICE_VERSION = exports.ATTR_SERVICE_NAME = exports.ATTR_SERVER_PORT = exports.ATTR_SERVER_ADDRESS = exports.ATTR_OTEL_STATUS_DESCRIPTION = exports.OTEL_STATUS_CODE_VALUE_OK = exports.OTEL_STATUS_CODE_VALUE_ERROR = exports.ATTR_OTEL_STATUS_CODE = exports.ATTR_OTEL_SCOPE_VERSION = exports.ATTR_OTEL_SCOPE_NAME = exports.NETWORK_TYPE_VALUE_IPV6 = exports.NETWORK_TYPE_VALUE_IPV4 = exports.ATTR_NETWORK_TYPE = exports.NETWORK_TRANSPORT_VALUE_UNIX = exports.NETWORK_TRANSPORT_VALUE_UDP = exports.NETWORK_TRANSPORT_VALUE_TCP = exports.NETWORK_TRANSPORT_VALUE_QUIC = exports.NETWORK_TRANSPORT_VALUE_PIPE = exports.ATTR_NETWORK_TRANSPORT = exports.ATTR_NETWORK_PROTOCOL_VERSION = exports.ATTR_NETWORK_PROTOCOL_NAME = exports.ATTR_NETWORK_PEER_PORT = exports.ATTR_NETWORK_PEER_ADDRESS = exports.ATTR_NETWORK_LOCAL_PORT = exports.ATTR_NETWORK_LOCAL_ADDRESS = exports.JVM_THREAD_STATE_VALUE_WAITING = exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = exports.JVM_THREAD_STATE_VALUE_TERMINATED = exports.JVM_THREAD_STATE_VALUE_RUNNABLE = exports.JVM_THREAD_STATE_VALUE_NEW = exports.JVM_THREAD_STATE_VALUE_BLOCKED = exports.ATTR_JVM_THREAD_STATE = exports.ATTR_JVM_THREAD_DAEMON = exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = exports.JVM_MEMORY_TYPE_VALUE_HEAP = exports.ATTR_JVM_MEMORY_TYPE = exports.ATTR_JVM_MEMORY_POOL_NAME = exports.ATTR_JVM_GC_NAME = exports.ATTR_JVM_GC_ACTION = exports.ATTR_HTTP_ROUTE = exports.ATTR_HTTP_RESPONSE_STATUS_CODE = exports.ATTR_HTTP_RESPONSE_HEADER = exports.ATTR_HTTP_REQUEST_RESEND_COUNT = exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = exports.HTTP_REQUEST_METHOD_VALUE_TRACE = exports.HTTP_REQUEST_METHOD_VALUE_PUT = undefined;
  exports.ATTR_USER_AGENT_ORIGINAL = exports.ATTR_URL_SCHEME = exports.ATTR_URL_QUERY = exports.ATTR_URL_PATH = exports.ATTR_URL_FULL = exports.ATTR_URL_FRAGMENT = exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = exports.ATTR_SIGNALR_TRANSPORT = undefined;
  exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
  exports.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
  exports.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  exports.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
  exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
  exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
  exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
  exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
  exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
  exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
  exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
  exports.ATTR_CLIENT_ADDRESS = "client.address";
  exports.ATTR_CLIENT_PORT = "client.port";
  exports.ATTR_ERROR_TYPE = "error.type";
  exports.ERROR_TYPE_VALUE_OTHER = "_OTHER";
  exports.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
  exports.ATTR_EXCEPTION_MESSAGE = "exception.message";
  exports.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
  exports.ATTR_EXCEPTION_TYPE = "exception.type";
  var ATTR_HTTP_REQUEST_HEADER = (key) => `http.request.header.${key}`;
  exports.ATTR_HTTP_REQUEST_HEADER = ATTR_HTTP_REQUEST_HEADER;
  exports.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
  exports.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
  exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
  exports.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
  exports.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
  exports.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
  exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
  exports.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
  exports.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
  exports.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
  exports.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
  exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
  exports.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
  var ATTR_HTTP_RESPONSE_HEADER = (key) => `http.response.header.${key}`;
  exports.ATTR_HTTP_RESPONSE_HEADER = ATTR_HTTP_RESPONSE_HEADER;
  exports.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
  exports.ATTR_HTTP_ROUTE = "http.route";
  exports.ATTR_JVM_GC_ACTION = "jvm.gc.action";
  exports.ATTR_JVM_GC_NAME = "jvm.gc.name";
  exports.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
  exports.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
  exports.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
  exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
  exports.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
  exports.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
  exports.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
  exports.JVM_THREAD_STATE_VALUE_NEW = "new";
  exports.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
  exports.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
  exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
  exports.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
  exports.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
  exports.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
  exports.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
  exports.ATTR_NETWORK_PEER_PORT = "network.peer.port";
  exports.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
  exports.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
  exports.ATTR_NETWORK_TRANSPORT = "network.transport";
  exports.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
  exports.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
  exports.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
  exports.NETWORK_TRANSPORT_VALUE_UDP = "udp";
  exports.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
  exports.ATTR_NETWORK_TYPE = "network.type";
  exports.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
  exports.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
  exports.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
  exports.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
  exports.ATTR_OTEL_STATUS_CODE = "otel.status_code";
  exports.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
  exports.OTEL_STATUS_CODE_VALUE_OK = "OK";
  exports.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
  exports.ATTR_SERVER_ADDRESS = "server.address";
  exports.ATTR_SERVER_PORT = "server.port";
  exports.ATTR_SERVICE_NAME = "service.name";
  exports.ATTR_SERVICE_VERSION = "service.version";
  exports.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
  exports.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
  exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
  exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
  exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
  exports.ATTR_URL_FRAGMENT = "url.fragment";
  exports.ATTR_URL_FULL = "url.full";
  exports.ATTR_URL_PATH = "url.path";
  exports.ATTR_URL_QUERY = "url.query";
  exports.ATTR_URL_SCHEME = "url.scheme";
  exports.ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/stable_metrics.js
var require_stable_metrics2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = exports.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = exports.METRIC_KESTREL_UPGRADED_CONNECTIONS = exports.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = exports.METRIC_KESTREL_REJECTED_CONNECTIONS = exports.METRIC_KESTREL_QUEUED_REQUESTS = exports.METRIC_KESTREL_QUEUED_CONNECTIONS = exports.METRIC_KESTREL_CONNECTION_DURATION = exports.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = exports.METRIC_KESTREL_ACTIVE_CONNECTIONS = exports.METRIC_JVM_THREAD_COUNT = exports.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = exports.METRIC_JVM_MEMORY_USED = exports.METRIC_JVM_MEMORY_LIMIT = exports.METRIC_JVM_MEMORY_COMMITTED = exports.METRIC_JVM_GC_DURATION = exports.METRIC_JVM_CPU_TIME = exports.METRIC_JVM_CPU_RECENT_UTILIZATION = exports.METRIC_JVM_CPU_COUNT = exports.METRIC_JVM_CLASS_UNLOADED = exports.METRIC_JVM_CLASS_LOADED = exports.METRIC_JVM_CLASS_COUNT = exports.METRIC_HTTP_SERVER_REQUEST_DURATION = exports.METRIC_HTTP_CLIENT_REQUEST_DURATION = exports.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = exports.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = exports.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = undefined;
  exports.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
  exports.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
  exports.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
  exports.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
  exports.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
  exports.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
  exports.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
  exports.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
  exports.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
  exports.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
  exports.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
  exports.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
  exports.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
  exports.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
  exports.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
  exports.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
  exports.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
  exports.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
  exports.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
  exports.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
  exports.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
  exports.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
  exports.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
  exports.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
  exports.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
  exports.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/index.js
var require_src3 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_trace2(), exports);
  __exportStar(require_resource2(), exports);
  __exportStar(require_stable_attributes2(), exports);
  __exportStar(require_stable_metrics2(), exports);
});

// node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js
function suppressTracing(context) {
  return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function isTracingSuppressed(context) {
  return context.getValue(SUPPRESS_TRACING_KEY) === true;
}
var import_api3, SUPPRESS_TRACING_KEY;
var init_suppress_tracing = __esm(() => {
  import_api3 = __toESM(require_src(), 1);
  SUPPRESS_TRACING_KEY = import_api3.createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
});

// node_modules/@opentelemetry/core/build/esm/baggage/constants.js
var BAGGAGE_KEY_PAIR_SEPARATOR = "=", BAGGAGE_PROPERTIES_SEPARATOR = ";", BAGGAGE_ITEMS_SEPARATOR = ",", BAGGAGE_HEADER = "baggage", BAGGAGE_MAX_NAME_VALUE_PAIRS = 180, BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096, BAGGAGE_MAX_TOTAL_LENGTH = 8192;
var init_constants = () => {};

// node_modules/@opentelemetry/core/build/esm/baggage/utils.js
function serializeKeyPairs(keyPairs) {
  return keyPairs.reduce(function(hValue, current) {
    var value = "" + hValue + (hValue !== "" ? BAGGAGE_ITEMS_SEPARATOR : "") + current;
    return value.length > BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
  }, "");
}
function getKeyPairs(baggage) {
  return baggage.getAllEntries().map(function(_a) {
    var _b = __read(_a, 2), key = _b[0], value = _b[1];
    var entry = encodeURIComponent(key) + "=" + encodeURIComponent(value.value);
    if (value.metadata !== undefined) {
      entry += BAGGAGE_PROPERTIES_SEPARATOR + value.metadata.toString();
    }
    return entry;
  });
}
function parsePairKeyValue(entry) {
  var valueProps = entry.split(BAGGAGE_PROPERTIES_SEPARATOR);
  if (valueProps.length <= 0)
    return;
  var keyPairPart = valueProps.shift();
  if (!keyPairPart)
    return;
  var separatorIndex = keyPairPart.indexOf(BAGGAGE_KEY_PAIR_SEPARATOR);
  if (separatorIndex <= 0)
    return;
  var key = decodeURIComponent(keyPairPart.substring(0, separatorIndex).trim());
  var value = decodeURIComponent(keyPairPart.substring(separatorIndex + 1).trim());
  var metadata;
  if (valueProps.length > 0) {
    metadata = import_api4.baggageEntryMetadataFromString(valueProps.join(BAGGAGE_PROPERTIES_SEPARATOR));
  }
  return { key, value, metadata };
}
var import_api4, __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var init_utils3 = __esm(() => {
  init_constants();
  import_api4 = __toESM(require_src(), 1);
});

// node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js
var import_api5, W3CBaggagePropagator;
var init_W3CBaggagePropagator = __esm(() => {
  init_suppress_tracing();
  init_constants();
  init_utils3();
  import_api5 = __toESM(require_src(), 1);
  W3CBaggagePropagator = function() {
    function W3CBaggagePropagator2() {}
    W3CBaggagePropagator2.prototype.inject = function(context, carrier, setter) {
      var baggage = import_api5.propagation.getBaggage(context);
      if (!baggage || isTracingSuppressed(context))
        return;
      var keyPairs = getKeyPairs(baggage).filter(function(pair) {
        return pair.length <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
      }).slice(0, BAGGAGE_MAX_NAME_VALUE_PAIRS);
      var headerValue = serializeKeyPairs(keyPairs);
      if (headerValue.length > 0) {
        setter.set(carrier, BAGGAGE_HEADER, headerValue);
      }
    };
    W3CBaggagePropagator2.prototype.extract = function(context, carrier, getter) {
      var headerValue = getter.get(carrier, BAGGAGE_HEADER);
      var baggageString = Array.isArray(headerValue) ? headerValue.join(BAGGAGE_ITEMS_SEPARATOR) : headerValue;
      if (!baggageString)
        return context;
      var baggage = {};
      if (baggageString.length === 0) {
        return context;
      }
      var pairs = baggageString.split(BAGGAGE_ITEMS_SEPARATOR);
      pairs.forEach(function(entry) {
        var keyPair = parsePairKeyValue(entry);
        if (keyPair) {
          var baggageEntry = { value: keyPair.value };
          if (keyPair.metadata) {
            baggageEntry.metadata = keyPair.metadata;
          }
          baggage[keyPair.key] = baggageEntry;
        }
      });
      if (Object.entries(baggage).length === 0) {
        return context;
      }
      return import_api5.propagation.setBaggage(context, import_api5.propagation.createBaggage(baggage));
    };
    W3CBaggagePropagator2.prototype.fields = function() {
      return [BAGGAGE_HEADER];
    };
    return W3CBaggagePropagator2;
  }();
});

// node_modules/@opentelemetry/core/build/esm/common/attributes.js
function sanitizeAttributes(attributes) {
  var e_1, _a;
  var out = {};
  if (typeof attributes !== "object" || attributes == null) {
    return out;
  }
  try {
    for (var _b = __values(Object.entries(attributes)), _c = _b.next();!_c.done; _c = _b.next()) {
      var _d = __read2(_c.value, 2), key = _d[0], val = _d[1];
      if (!isAttributeKey(key)) {
        import_api6.diag.warn("Invalid attribute key: " + key);
        continue;
      }
      if (!isAttributeValue(val)) {
        import_api6.diag.warn("Invalid attribute value set for key: " + key);
        continue;
      }
      if (Array.isArray(val)) {
        out[key] = val.slice();
      } else {
        out[key] = val;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return out;
}
function isAttributeKey(key) {
  return typeof key === "string" && key.length > 0;
}
function isAttributeValue(val) {
  if (val == null) {
    return true;
  }
  if (Array.isArray(val)) {
    return isHomogeneousAttributeValueArray(val);
  }
  return isValidPrimitiveAttributeValue(val);
}
function isHomogeneousAttributeValueArray(arr) {
  var e_2, _a;
  var type;
  try {
    for (var arr_1 = __values(arr), arr_1_1 = arr_1.next();!arr_1_1.done; arr_1_1 = arr_1.next()) {
      var element = arr_1_1.value;
      if (element == null)
        continue;
      if (!type) {
        if (isValidPrimitiveAttributeValue(element)) {
          type = typeof element;
          continue;
        }
        return false;
      }
      if (typeof element === type) {
        continue;
      }
      return false;
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return))
        _a.call(arr_1);
    } finally {
      if (e_2)
        throw e_2.error;
    }
  }
  return true;
}
function isValidPrimitiveAttributeValue(val) {
  switch (typeof val) {
    case "number":
    case "boolean":
    case "string":
      return true;
  }
  return false;
}
var import_api6, __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = undefined;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, __read2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var init_attributes = __esm(() => {
  import_api6 = __toESM(require_src(), 1);
});

// node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js
function loggingErrorHandler() {
  return function(ex) {
    import_api7.diag.error(stringifyException(ex));
  };
}
function stringifyException(ex) {
  if (typeof ex === "string") {
    return ex;
  } else {
    return JSON.stringify(flattenException(ex));
  }
}
function flattenException(ex) {
  var result = {};
  var current = ex;
  while (current !== null) {
    Object.getOwnPropertyNames(current).forEach(function(propertyName) {
      if (result[propertyName])
        return;
      var value = current[propertyName];
      if (value) {
        result[propertyName] = String(value);
      }
    });
    current = Object.getPrototypeOf(current);
  }
  return result;
}
var import_api7;
var init_logging_error_handler = __esm(() => {
  import_api7 = __toESM(require_src(), 1);
});

// node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js
function globalErrorHandler(ex) {
  try {
    delegateHandler(ex);
  } catch (_a) {}
}
var delegateHandler;
var init_global_error_handler = __esm(() => {
  init_logging_error_handler();
  delegateHandler = loggingErrorHandler();
});

// node_modules/@opentelemetry/core/build/esm/utils/sampling.js
var TracesSamplerValues;
var init_sampling = __esm(() => {
  (function(TracesSamplerValues2) {
    TracesSamplerValues2["AlwaysOff"] = "always_off";
    TracesSamplerValues2["AlwaysOn"] = "always_on";
    TracesSamplerValues2["ParentBasedAlwaysOff"] = "parentbased_always_off";
    TracesSamplerValues2["ParentBasedAlwaysOn"] = "parentbased_always_on";
    TracesSamplerValues2["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
    TracesSamplerValues2["TraceIdRatio"] = "traceidratio";
  })(TracesSamplerValues || (TracesSamplerValues = {}));
});

// node_modules/@opentelemetry/core/build/esm/utils/environment.js
function isEnvVarABoolean(key) {
  return ENVIRONMENT_BOOLEAN_KEYS.indexOf(key) > -1;
}
function isEnvVarANumber(key) {
  return ENVIRONMENT_NUMBERS_KEYS.indexOf(key) > -1;
}
function isEnvVarAList(key) {
  return ENVIRONMENT_LISTS_KEYS.indexOf(key) > -1;
}
function parseBoolean(key, environment, values) {
  if (typeof values[key] === "undefined") {
    return;
  }
  var value = String(values[key]);
  environment[key] = value.toLowerCase() === "true";
}
function parseNumber(name, environment, values, min, max) {
  if (min === undefined) {
    min = -Infinity;
  }
  if (max === undefined) {
    max = Infinity;
  }
  if (typeof values[name] !== "undefined") {
    var value = Number(values[name]);
    if (!isNaN(value)) {
      if (value < min) {
        environment[name] = min;
      } else if (value > max) {
        environment[name] = max;
      } else {
        environment[name] = value;
      }
    }
  }
}
function parseStringList(name, output, input, separator) {
  if (separator === undefined) {
    separator = DEFAULT_LIST_SEPARATOR;
  }
  var givenValue = input[name];
  if (typeof givenValue === "string") {
    output[name] = givenValue.split(separator).map(function(v) {
      return v.trim();
    });
  }
}
function setLogLevelFromEnv(key, environment, values) {
  var value = values[key];
  if (typeof value === "string") {
    var theLevel = logLevelMap[value.toUpperCase()];
    if (theLevel != null) {
      environment[key] = theLevel;
    }
  }
}
function parseEnvironment(values) {
  var environment = {};
  for (var env3 in DEFAULT_ENVIRONMENT) {
    var key = env3;
    switch (key) {
      case "OTEL_LOG_LEVEL":
        setLogLevelFromEnv(key, environment, values);
        break;
      default:
        if (isEnvVarABoolean(key)) {
          parseBoolean(key, environment, values);
        } else if (isEnvVarANumber(key)) {
          parseNumber(key, environment, values);
        } else if (isEnvVarAList(key)) {
          parseStringList(key, environment, values);
        } else {
          var value = values[key];
          if (typeof value !== "undefined" && value !== null) {
            environment[key] = String(value);
          }
        }
    }
  }
  return environment;
}
var import_api8, DEFAULT_LIST_SEPARATOR = ",", ENVIRONMENT_BOOLEAN_KEYS, ENVIRONMENT_NUMBERS_KEYS, ENVIRONMENT_LISTS_KEYS, DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity, DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128, DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128, DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128, DEFAULT_ENVIRONMENT, logLevelMap;
var init_environment2 = __esm(() => {
  init_sampling();
  import_api8 = __toESM(require_src(), 1);
  ENVIRONMENT_BOOLEAN_KEYS = ["OTEL_SDK_DISABLED"];
  ENVIRONMENT_NUMBERS_KEYS = [
    "OTEL_BSP_EXPORT_TIMEOUT",
    "OTEL_BSP_MAX_EXPORT_BATCH_SIZE",
    "OTEL_BSP_MAX_QUEUE_SIZE",
    "OTEL_BSP_SCHEDULE_DELAY",
    "OTEL_BLRP_EXPORT_TIMEOUT",
    "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE",
    "OTEL_BLRP_MAX_QUEUE_SIZE",
    "OTEL_BLRP_SCHEDULE_DELAY",
    "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT",
    "OTEL_ATTRIBUTE_COUNT_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT",
    "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT",
    "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT",
    "OTEL_SPAN_EVENT_COUNT_LIMIT",
    "OTEL_SPAN_LINK_COUNT_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT",
    "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT",
    "OTEL_EXPORTER_OTLP_TIMEOUT",
    "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT",
    "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT",
    "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT",
    "OTEL_EXPORTER_JAEGER_AGENT_PORT"
  ];
  ENVIRONMENT_LISTS_KEYS = [
    "OTEL_NO_PATCH_MODULES",
    "OTEL_PROPAGATORS",
    "OTEL_SEMCONV_STABILITY_OPT_IN"
  ];
  DEFAULT_ENVIRONMENT = {
    OTEL_SDK_DISABLED: false,
    CONTAINER_NAME: "",
    ECS_CONTAINER_METADATA_URI_V4: "",
    ECS_CONTAINER_METADATA_URI: "",
    HOSTNAME: "",
    KUBERNETES_SERVICE_HOST: "",
    NAMESPACE: "",
    OTEL_BSP_EXPORT_TIMEOUT: 30000,
    OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BSP_MAX_QUEUE_SIZE: 2048,
    OTEL_BSP_SCHEDULE_DELAY: 5000,
    OTEL_BLRP_EXPORT_TIMEOUT: 30000,
    OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
    OTEL_BLRP_SCHEDULE_DELAY: 5000,
    OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
    OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
    OTEL_EXPORTER_JAEGER_ENDPOINT: "",
    OTEL_EXPORTER_JAEGER_PASSWORD: "",
    OTEL_EXPORTER_JAEGER_USER: "",
    OTEL_EXPORTER_OTLP_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_HEADERS: "",
    OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
    OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
    OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
    OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
    OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
    OTEL_LOG_LEVEL: import_api8.DiagLogLevel.INFO,
    OTEL_NO_PATCH_MODULES: [],
    OTEL_PROPAGATORS: ["tracecontext", "baggage"],
    OTEL_RESOURCE_ATTRIBUTES: "",
    OTEL_SERVICE_NAME: "",
    OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
    OTEL_SPAN_LINK_COUNT_LIMIT: 128,
    OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
    OTEL_TRACES_EXPORTER: "",
    OTEL_TRACES_SAMPLER: TracesSamplerValues.ParentBasedAlwaysOn,
    OTEL_TRACES_SAMPLER_ARG: "",
    OTEL_LOGS_EXPORTER: "",
    OTEL_EXPORTER_OTLP_INSECURE: "",
    OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
    OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
    OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
    OTEL_EXPORTER_OTLP_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative",
    OTEL_SEMCONV_STABILITY_OPT_IN: []
  };
  logLevelMap = {
    ALL: import_api8.DiagLogLevel.ALL,
    VERBOSE: import_api8.DiagLogLevel.VERBOSE,
    DEBUG: import_api8.DiagLogLevel.DEBUG,
    INFO: import_api8.DiagLogLevel.INFO,
    WARN: import_api8.DiagLogLevel.WARN,
    ERROR: import_api8.DiagLogLevel.ERROR,
    NONE: import_api8.DiagLogLevel.NONE
  };
});

// node_modules/@opentelemetry/core/build/esm/platform/node/environment.js
function getEnv() {
  var processEnv = parseEnvironment(process.env);
  return Object.assign({}, DEFAULT_ENVIRONMENT, processEnv);
}
function getEnvWithoutDefaults() {
  return parseEnvironment(process.env);
}
var init_environment3 = __esm(() => {
  init_environment2();
});

// node_modules/@opentelemetry/core/build/esm/platform/node/performance.js
import { performance as performance2 } from "perf_hooks";
var otperformance2;
var init_performance = __esm(() => {
  otperformance2 = performance2;
});

// node_modules/@opentelemetry/core/build/esm/version.js
var VERSION = "1.30.1";
var init_version = () => {};

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/internal/utils.js
var require_utils3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createConstMap = undefined;
  function createConstMap(values) {
    let res = {};
    const len = values.length;
    for (let lp = 0;lp < len; lp++) {
      const val = values[lp];
      if (val) {
        res[String(val).toUpperCase().replace(/[-.]/g, "_")] = val;
      }
    }
    return res;
  }
  exports.createConstMap = createConstMap;
});

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/trace/SemanticAttributes.js
var require_SemanticAttributes3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SEMATTRS_NET_HOST_CARRIER_ICC = exports.SEMATTRS_NET_HOST_CARRIER_MNC = exports.SEMATTRS_NET_HOST_CARRIER_MCC = exports.SEMATTRS_NET_HOST_CARRIER_NAME = exports.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = exports.SEMATTRS_NET_HOST_CONNECTION_TYPE = exports.SEMATTRS_NET_HOST_NAME = exports.SEMATTRS_NET_HOST_PORT = exports.SEMATTRS_NET_HOST_IP = exports.SEMATTRS_NET_PEER_NAME = exports.SEMATTRS_NET_PEER_PORT = exports.SEMATTRS_NET_PEER_IP = exports.SEMATTRS_NET_TRANSPORT = exports.SEMATTRS_FAAS_INVOKED_REGION = exports.SEMATTRS_FAAS_INVOKED_PROVIDER = exports.SEMATTRS_FAAS_INVOKED_NAME = exports.SEMATTRS_FAAS_COLDSTART = exports.SEMATTRS_FAAS_CRON = exports.SEMATTRS_FAAS_TIME = exports.SEMATTRS_FAAS_DOCUMENT_NAME = exports.SEMATTRS_FAAS_DOCUMENT_TIME = exports.SEMATTRS_FAAS_DOCUMENT_OPERATION = exports.SEMATTRS_FAAS_DOCUMENT_COLLECTION = exports.SEMATTRS_FAAS_EXECUTION = exports.SEMATTRS_FAAS_TRIGGER = exports.SEMATTRS_EXCEPTION_ESCAPED = exports.SEMATTRS_EXCEPTION_STACKTRACE = exports.SEMATTRS_EXCEPTION_MESSAGE = exports.SEMATTRS_EXCEPTION_TYPE = exports.SEMATTRS_DB_SQL_TABLE = exports.SEMATTRS_DB_MONGODB_COLLECTION = exports.SEMATTRS_DB_REDIS_DATABASE_INDEX = exports.SEMATTRS_DB_HBASE_NAMESPACE = exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = exports.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = exports.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = exports.SEMATTRS_DB_CASSANDRA_TABLE = exports.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = exports.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = exports.SEMATTRS_DB_CASSANDRA_KEYSPACE = exports.SEMATTRS_DB_MSSQL_INSTANCE_NAME = exports.SEMATTRS_DB_OPERATION = exports.SEMATTRS_DB_STATEMENT = exports.SEMATTRS_DB_NAME = exports.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = exports.SEMATTRS_DB_USER = exports.SEMATTRS_DB_CONNECTION_STRING = exports.SEMATTRS_DB_SYSTEM = exports.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = undefined;
  exports.SEMATTRS_MESSAGING_DESTINATION_KIND = exports.SEMATTRS_MESSAGING_DESTINATION = exports.SEMATTRS_MESSAGING_SYSTEM = exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = exports.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = exports.SEMATTRS_AWS_DYNAMODB_COUNT = exports.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = exports.SEMATTRS_AWS_DYNAMODB_SEGMENT = exports.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = exports.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = exports.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = exports.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = exports.SEMATTRS_AWS_DYNAMODB_SELECT = exports.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = exports.SEMATTRS_AWS_DYNAMODB_LIMIT = exports.SEMATTRS_AWS_DYNAMODB_PROJECTION = exports.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = exports.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = exports.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = exports.SEMATTRS_HTTP_CLIENT_IP = exports.SEMATTRS_HTTP_ROUTE = exports.SEMATTRS_HTTP_SERVER_NAME = exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = exports.SEMATTRS_HTTP_USER_AGENT = exports.SEMATTRS_HTTP_FLAVOR = exports.SEMATTRS_HTTP_STATUS_CODE = exports.SEMATTRS_HTTP_SCHEME = exports.SEMATTRS_HTTP_HOST = exports.SEMATTRS_HTTP_TARGET = exports.SEMATTRS_HTTP_URL = exports.SEMATTRS_HTTP_METHOD = exports.SEMATTRS_CODE_LINENO = exports.SEMATTRS_CODE_FILEPATH = exports.SEMATTRS_CODE_NAMESPACE = exports.SEMATTRS_CODE_FUNCTION = exports.SEMATTRS_THREAD_NAME = exports.SEMATTRS_THREAD_ID = exports.SEMATTRS_ENDUSER_SCOPE = exports.SEMATTRS_ENDUSER_ROLE = exports.SEMATTRS_ENDUSER_ID = exports.SEMATTRS_PEER_SERVICE = undefined;
  exports.DBSYSTEMVALUES_FILEMAKER = exports.DBSYSTEMVALUES_DERBY = exports.DBSYSTEMVALUES_FIREBIRD = exports.DBSYSTEMVALUES_ADABAS = exports.DBSYSTEMVALUES_CACHE = exports.DBSYSTEMVALUES_EDB = exports.DBSYSTEMVALUES_FIRSTSQL = exports.DBSYSTEMVALUES_INGRES = exports.DBSYSTEMVALUES_HANADB = exports.DBSYSTEMVALUES_MAXDB = exports.DBSYSTEMVALUES_PROGRESS = exports.DBSYSTEMVALUES_HSQLDB = exports.DBSYSTEMVALUES_CLOUDSCAPE = exports.DBSYSTEMVALUES_HIVE = exports.DBSYSTEMVALUES_REDSHIFT = exports.DBSYSTEMVALUES_POSTGRESQL = exports.DBSYSTEMVALUES_DB2 = exports.DBSYSTEMVALUES_ORACLE = exports.DBSYSTEMVALUES_MYSQL = exports.DBSYSTEMVALUES_MSSQL = exports.DBSYSTEMVALUES_OTHER_SQL = exports.SemanticAttributes = exports.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = exports.SEMATTRS_MESSAGE_COMPRESSED_SIZE = exports.SEMATTRS_MESSAGE_ID = exports.SEMATTRS_MESSAGE_TYPE = exports.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = exports.SEMATTRS_RPC_JSONRPC_ERROR_CODE = exports.SEMATTRS_RPC_JSONRPC_REQUEST_ID = exports.SEMATTRS_RPC_JSONRPC_VERSION = exports.SEMATTRS_RPC_GRPC_STATUS_CODE = exports.SEMATTRS_RPC_METHOD = exports.SEMATTRS_RPC_SERVICE = exports.SEMATTRS_RPC_SYSTEM = exports.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = exports.SEMATTRS_MESSAGING_KAFKA_PARTITION = exports.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = exports.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = exports.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = exports.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = exports.SEMATTRS_MESSAGING_CONSUMER_ID = exports.SEMATTRS_MESSAGING_OPERATION = exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = exports.SEMATTRS_MESSAGING_CONVERSATION_ID = exports.SEMATTRS_MESSAGING_MESSAGE_ID = exports.SEMATTRS_MESSAGING_URL = exports.SEMATTRS_MESSAGING_PROTOCOL_VERSION = exports.SEMATTRS_MESSAGING_PROTOCOL = exports.SEMATTRS_MESSAGING_TEMP_DESTINATION = undefined;
  exports.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = exports.FaasDocumentOperationValues = exports.FAASDOCUMENTOPERATIONVALUES_DELETE = exports.FAASDOCUMENTOPERATIONVALUES_EDIT = exports.FAASDOCUMENTOPERATIONVALUES_INSERT = exports.FaasTriggerValues = exports.FAASTRIGGERVALUES_OTHER = exports.FAASTRIGGERVALUES_TIMER = exports.FAASTRIGGERVALUES_PUBSUB = exports.FAASTRIGGERVALUES_HTTP = exports.FAASTRIGGERVALUES_DATASOURCE = exports.DbCassandraConsistencyLevelValues = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = exports.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = exports.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = exports.DbSystemValues = exports.DBSYSTEMVALUES_COCKROACHDB = exports.DBSYSTEMVALUES_MEMCACHED = exports.DBSYSTEMVALUES_ELASTICSEARCH = exports.DBSYSTEMVALUES_GEODE = exports.DBSYSTEMVALUES_NEO4J = exports.DBSYSTEMVALUES_DYNAMODB = exports.DBSYSTEMVALUES_COSMOSDB = exports.DBSYSTEMVALUES_COUCHDB = exports.DBSYSTEMVALUES_COUCHBASE = exports.DBSYSTEMVALUES_REDIS = exports.DBSYSTEMVALUES_MONGODB = exports.DBSYSTEMVALUES_HBASE = exports.DBSYSTEMVALUES_CASSANDRA = exports.DBSYSTEMVALUES_COLDFUSION = exports.DBSYSTEMVALUES_H2 = exports.DBSYSTEMVALUES_VERTICA = exports.DBSYSTEMVALUES_TERADATA = exports.DBSYSTEMVALUES_SYBASE = exports.DBSYSTEMVALUES_SQLITE = exports.DBSYSTEMVALUES_POINTBASE = exports.DBSYSTEMVALUES_PERVASIVE = exports.DBSYSTEMVALUES_NETEZZA = exports.DBSYSTEMVALUES_MARIADB = exports.DBSYSTEMVALUES_INTERBASE = exports.DBSYSTEMVALUES_INSTANTDB = exports.DBSYSTEMVALUES_INFORMIX = undefined;
  exports.MESSAGINGOPERATIONVALUES_RECEIVE = exports.MessagingDestinationKindValues = exports.MESSAGINGDESTINATIONKINDVALUES_TOPIC = exports.MESSAGINGDESTINATIONKINDVALUES_QUEUE = exports.HttpFlavorValues = exports.HTTPFLAVORVALUES_QUIC = exports.HTTPFLAVORVALUES_SPDY = exports.HTTPFLAVORVALUES_HTTP_2_0 = exports.HTTPFLAVORVALUES_HTTP_1_1 = exports.HTTPFLAVORVALUES_HTTP_1_0 = exports.NetHostConnectionSubtypeValues = exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_NR = exports.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = exports.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = exports.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = exports.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = exports.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = exports.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = exports.NetHostConnectionTypeValues = exports.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = exports.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = exports.NETHOSTCONNECTIONTYPEVALUES_CELL = exports.NETHOSTCONNECTIONTYPEVALUES_WIRED = exports.NETHOSTCONNECTIONTYPEVALUES_WIFI = exports.NetTransportValues = exports.NETTRANSPORTVALUES_OTHER = exports.NETTRANSPORTVALUES_INPROC = exports.NETTRANSPORTVALUES_PIPE = exports.NETTRANSPORTVALUES_UNIX = exports.NETTRANSPORTVALUES_IP = exports.NETTRANSPORTVALUES_IP_UDP = exports.NETTRANSPORTVALUES_IP_TCP = exports.FaasInvokedProviderValues = exports.FAASINVOKEDPROVIDERVALUES_GCP = exports.FAASINVOKEDPROVIDERVALUES_AZURE = exports.FAASINVOKEDPROVIDERVALUES_AWS = undefined;
  exports.MessageTypeValues = exports.MESSAGETYPEVALUES_RECEIVED = exports.MESSAGETYPEVALUES_SENT = exports.RpcGrpcStatusCodeValues = exports.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = exports.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = exports.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = exports.RPCGRPCSTATUSCODEVALUES_INTERNAL = exports.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = exports.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = exports.RPCGRPCSTATUSCODEVALUES_ABORTED = exports.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = exports.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = exports.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = exports.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = exports.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = exports.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = exports.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = exports.RPCGRPCSTATUSCODEVALUES_UNKNOWN = exports.RPCGRPCSTATUSCODEVALUES_CANCELLED = exports.RPCGRPCSTATUSCODEVALUES_OK = exports.MessagingOperationValues = exports.MESSAGINGOPERATIONVALUES_PROCESS = undefined;
  var utils_1 = require_utils3();
  var TMP_AWS_LAMBDA_INVOKED_ARN = "aws.lambda.invoked_arn";
  var TMP_DB_SYSTEM = "db.system";
  var TMP_DB_CONNECTION_STRING = "db.connection_string";
  var TMP_DB_USER = "db.user";
  var TMP_DB_JDBC_DRIVER_CLASSNAME = "db.jdbc.driver_classname";
  var TMP_DB_NAME = "db.name";
  var TMP_DB_STATEMENT = "db.statement";
  var TMP_DB_OPERATION = "db.operation";
  var TMP_DB_MSSQL_INSTANCE_NAME = "db.mssql.instance_name";
  var TMP_DB_CASSANDRA_KEYSPACE = "db.cassandra.keyspace";
  var TMP_DB_CASSANDRA_PAGE_SIZE = "db.cassandra.page_size";
  var TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = "db.cassandra.consistency_level";
  var TMP_DB_CASSANDRA_TABLE = "db.cassandra.table";
  var TMP_DB_CASSANDRA_IDEMPOTENCE = "db.cassandra.idempotence";
  var TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = "db.cassandra.speculative_execution_count";
  var TMP_DB_CASSANDRA_COORDINATOR_ID = "db.cassandra.coordinator.id";
  var TMP_DB_CASSANDRA_COORDINATOR_DC = "db.cassandra.coordinator.dc";
  var TMP_DB_HBASE_NAMESPACE = "db.hbase.namespace";
  var TMP_DB_REDIS_DATABASE_INDEX = "db.redis.database_index";
  var TMP_DB_MONGODB_COLLECTION = "db.mongodb.collection";
  var TMP_DB_SQL_TABLE = "db.sql.table";
  var TMP_EXCEPTION_TYPE = "exception.type";
  var TMP_EXCEPTION_MESSAGE = "exception.message";
  var TMP_EXCEPTION_STACKTRACE = "exception.stacktrace";
  var TMP_EXCEPTION_ESCAPED = "exception.escaped";
  var TMP_FAAS_TRIGGER = "faas.trigger";
  var TMP_FAAS_EXECUTION = "faas.execution";
  var TMP_FAAS_DOCUMENT_COLLECTION = "faas.document.collection";
  var TMP_FAAS_DOCUMENT_OPERATION = "faas.document.operation";
  var TMP_FAAS_DOCUMENT_TIME = "faas.document.time";
  var TMP_FAAS_DOCUMENT_NAME = "faas.document.name";
  var TMP_FAAS_TIME = "faas.time";
  var TMP_FAAS_CRON = "faas.cron";
  var TMP_FAAS_COLDSTART = "faas.coldstart";
  var TMP_FAAS_INVOKED_NAME = "faas.invoked_name";
  var TMP_FAAS_INVOKED_PROVIDER = "faas.invoked_provider";
  var TMP_FAAS_INVOKED_REGION = "faas.invoked_region";
  var TMP_NET_TRANSPORT = "net.transport";
  var TMP_NET_PEER_IP = "net.peer.ip";
  var TMP_NET_PEER_PORT = "net.peer.port";
  var TMP_NET_PEER_NAME = "net.peer.name";
  var TMP_NET_HOST_IP = "net.host.ip";
  var TMP_NET_HOST_PORT = "net.host.port";
  var TMP_NET_HOST_NAME = "net.host.name";
  var TMP_NET_HOST_CONNECTION_TYPE = "net.host.connection.type";
  var TMP_NET_HOST_CONNECTION_SUBTYPE = "net.host.connection.subtype";
  var TMP_NET_HOST_CARRIER_NAME = "net.host.carrier.name";
  var TMP_NET_HOST_CARRIER_MCC = "net.host.carrier.mcc";
  var TMP_NET_HOST_CARRIER_MNC = "net.host.carrier.mnc";
  var TMP_NET_HOST_CARRIER_ICC = "net.host.carrier.icc";
  var TMP_PEER_SERVICE = "peer.service";
  var TMP_ENDUSER_ID = "enduser.id";
  var TMP_ENDUSER_ROLE = "enduser.role";
  var TMP_ENDUSER_SCOPE = "enduser.scope";
  var TMP_THREAD_ID = "thread.id";
  var TMP_THREAD_NAME = "thread.name";
  var TMP_CODE_FUNCTION = "code.function";
  var TMP_CODE_NAMESPACE = "code.namespace";
  var TMP_CODE_FILEPATH = "code.filepath";
  var TMP_CODE_LINENO = "code.lineno";
  var TMP_HTTP_METHOD = "http.method";
  var TMP_HTTP_URL = "http.url";
  var TMP_HTTP_TARGET = "http.target";
  var TMP_HTTP_HOST = "http.host";
  var TMP_HTTP_SCHEME = "http.scheme";
  var TMP_HTTP_STATUS_CODE = "http.status_code";
  var TMP_HTTP_FLAVOR = "http.flavor";
  var TMP_HTTP_USER_AGENT = "http.user_agent";
  var TMP_HTTP_REQUEST_CONTENT_LENGTH = "http.request_content_length";
  var TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
  var TMP_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
  var TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
  var TMP_HTTP_SERVER_NAME = "http.server_name";
  var TMP_HTTP_ROUTE = "http.route";
  var TMP_HTTP_CLIENT_IP = "http.client_ip";
  var TMP_AWS_DYNAMODB_TABLE_NAMES = "aws.dynamodb.table_names";
  var TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = "aws.dynamodb.consumed_capacity";
  var TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = "aws.dynamodb.item_collection_metrics";
  var TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = "aws.dynamodb.provisioned_read_capacity";
  var TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = "aws.dynamodb.provisioned_write_capacity";
  var TMP_AWS_DYNAMODB_CONSISTENT_READ = "aws.dynamodb.consistent_read";
  var TMP_AWS_DYNAMODB_PROJECTION = "aws.dynamodb.projection";
  var TMP_AWS_DYNAMODB_LIMIT = "aws.dynamodb.limit";
  var TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = "aws.dynamodb.attributes_to_get";
  var TMP_AWS_DYNAMODB_INDEX_NAME = "aws.dynamodb.index_name";
  var TMP_AWS_DYNAMODB_SELECT = "aws.dynamodb.select";
  var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = "aws.dynamodb.global_secondary_indexes";
  var TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = "aws.dynamodb.local_secondary_indexes";
  var TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = "aws.dynamodb.exclusive_start_table";
  var TMP_AWS_DYNAMODB_TABLE_COUNT = "aws.dynamodb.table_count";
  var TMP_AWS_DYNAMODB_SCAN_FORWARD = "aws.dynamodb.scan_forward";
  var TMP_AWS_DYNAMODB_SEGMENT = "aws.dynamodb.segment";
  var TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = "aws.dynamodb.total_segments";
  var TMP_AWS_DYNAMODB_COUNT = "aws.dynamodb.count";
  var TMP_AWS_DYNAMODB_SCANNED_COUNT = "aws.dynamodb.scanned_count";
  var TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = "aws.dynamodb.attribute_definitions";
  var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = "aws.dynamodb.global_secondary_index_updates";
  var TMP_MESSAGING_SYSTEM = "messaging.system";
  var TMP_MESSAGING_DESTINATION = "messaging.destination";
  var TMP_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
  var TMP_MESSAGING_TEMP_DESTINATION = "messaging.temp_destination";
  var TMP_MESSAGING_PROTOCOL = "messaging.protocol";
  var TMP_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
  var TMP_MESSAGING_URL = "messaging.url";
  var TMP_MESSAGING_MESSAGE_ID = "messaging.message_id";
  var TMP_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
  var TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = "messaging.message_payload_size_bytes";
  var TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = "messaging.message_payload_compressed_size_bytes";
  var TMP_MESSAGING_OPERATION = "messaging.operation";
  var TMP_MESSAGING_CONSUMER_ID = "messaging.consumer_id";
  var TMP_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
  var TMP_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message_key";
  var TMP_MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer_group";
  var TMP_MESSAGING_KAFKA_CLIENT_ID = "messaging.kafka.client_id";
  var TMP_MESSAGING_KAFKA_PARTITION = "messaging.kafka.partition";
  var TMP_MESSAGING_KAFKA_TOMBSTONE = "messaging.kafka.tombstone";
  var TMP_RPC_SYSTEM = "rpc.system";
  var TMP_RPC_SERVICE = "rpc.service";
  var TMP_RPC_METHOD = "rpc.method";
  var TMP_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
  var TMP_RPC_JSONRPC_VERSION = "rpc.jsonrpc.version";
  var TMP_RPC_JSONRPC_REQUEST_ID = "rpc.jsonrpc.request_id";
  var TMP_RPC_JSONRPC_ERROR_CODE = "rpc.jsonrpc.error_code";
  var TMP_RPC_JSONRPC_ERROR_MESSAGE = "rpc.jsonrpc.error_message";
  var TMP_MESSAGE_TYPE = "message.type";
  var TMP_MESSAGE_ID = "message.id";
  var TMP_MESSAGE_COMPRESSED_SIZE = "message.compressed_size";
  var TMP_MESSAGE_UNCOMPRESSED_SIZE = "message.uncompressed_size";
  exports.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = TMP_AWS_LAMBDA_INVOKED_ARN;
  exports.SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
  exports.SEMATTRS_DB_CONNECTION_STRING = TMP_DB_CONNECTION_STRING;
  exports.SEMATTRS_DB_USER = TMP_DB_USER;
  exports.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = TMP_DB_JDBC_DRIVER_CLASSNAME;
  exports.SEMATTRS_DB_NAME = TMP_DB_NAME;
  exports.SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
  exports.SEMATTRS_DB_OPERATION = TMP_DB_OPERATION;
  exports.SEMATTRS_DB_MSSQL_INSTANCE_NAME = TMP_DB_MSSQL_INSTANCE_NAME;
  exports.SEMATTRS_DB_CASSANDRA_KEYSPACE = TMP_DB_CASSANDRA_KEYSPACE;
  exports.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = TMP_DB_CASSANDRA_PAGE_SIZE;
  exports.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = TMP_DB_CASSANDRA_CONSISTENCY_LEVEL;
  exports.SEMATTRS_DB_CASSANDRA_TABLE = TMP_DB_CASSANDRA_TABLE;
  exports.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = TMP_DB_CASSANDRA_IDEMPOTENCE;
  exports.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT;
  exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = TMP_DB_CASSANDRA_COORDINATOR_ID;
  exports.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = TMP_DB_CASSANDRA_COORDINATOR_DC;
  exports.SEMATTRS_DB_HBASE_NAMESPACE = TMP_DB_HBASE_NAMESPACE;
  exports.SEMATTRS_DB_REDIS_DATABASE_INDEX = TMP_DB_REDIS_DATABASE_INDEX;
  exports.SEMATTRS_DB_MONGODB_COLLECTION = TMP_DB_MONGODB_COLLECTION;
  exports.SEMATTRS_DB_SQL_TABLE = TMP_DB_SQL_TABLE;
  exports.SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
  exports.SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
  exports.SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
  exports.SEMATTRS_EXCEPTION_ESCAPED = TMP_EXCEPTION_ESCAPED;
  exports.SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
  exports.SEMATTRS_FAAS_EXECUTION = TMP_FAAS_EXECUTION;
  exports.SEMATTRS_FAAS_DOCUMENT_COLLECTION = TMP_FAAS_DOCUMENT_COLLECTION;
  exports.SEMATTRS_FAAS_DOCUMENT_OPERATION = TMP_FAAS_DOCUMENT_OPERATION;
  exports.SEMATTRS_FAAS_DOCUMENT_TIME = TMP_FAAS_DOCUMENT_TIME;
  exports.SEMATTRS_FAAS_DOCUMENT_NAME = TMP_FAAS_DOCUMENT_NAME;
  exports.SEMATTRS_FAAS_TIME = TMP_FAAS_TIME;
  exports.SEMATTRS_FAAS_CRON = TMP_FAAS_CRON;
  exports.SEMATTRS_FAAS_COLDSTART = TMP_FAAS_COLDSTART;
  exports.SEMATTRS_FAAS_INVOKED_NAME = TMP_FAAS_INVOKED_NAME;
  exports.SEMATTRS_FAAS_INVOKED_PROVIDER = TMP_FAAS_INVOKED_PROVIDER;
  exports.SEMATTRS_FAAS_INVOKED_REGION = TMP_FAAS_INVOKED_REGION;
  exports.SEMATTRS_NET_TRANSPORT = TMP_NET_TRANSPORT;
  exports.SEMATTRS_NET_PEER_IP = TMP_NET_PEER_IP;
  exports.SEMATTRS_NET_PEER_PORT = TMP_NET_PEER_PORT;
  exports.SEMATTRS_NET_PEER_NAME = TMP_NET_PEER_NAME;
  exports.SEMATTRS_NET_HOST_IP = TMP_NET_HOST_IP;
  exports.SEMATTRS_NET_HOST_PORT = TMP_NET_HOST_PORT;
  exports.SEMATTRS_NET_HOST_NAME = TMP_NET_HOST_NAME;
  exports.SEMATTRS_NET_HOST_CONNECTION_TYPE = TMP_NET_HOST_CONNECTION_TYPE;
  exports.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = TMP_NET_HOST_CONNECTION_SUBTYPE;
  exports.SEMATTRS_NET_HOST_CARRIER_NAME = TMP_NET_HOST_CARRIER_NAME;
  exports.SEMATTRS_NET_HOST_CARRIER_MCC = TMP_NET_HOST_CARRIER_MCC;
  exports.SEMATTRS_NET_HOST_CARRIER_MNC = TMP_NET_HOST_CARRIER_MNC;
  exports.SEMATTRS_NET_HOST_CARRIER_ICC = TMP_NET_HOST_CARRIER_ICC;
  exports.SEMATTRS_PEER_SERVICE = TMP_PEER_SERVICE;
  exports.SEMATTRS_ENDUSER_ID = TMP_ENDUSER_ID;
  exports.SEMATTRS_ENDUSER_ROLE = TMP_ENDUSER_ROLE;
  exports.SEMATTRS_ENDUSER_SCOPE = TMP_ENDUSER_SCOPE;
  exports.SEMATTRS_THREAD_ID = TMP_THREAD_ID;
  exports.SEMATTRS_THREAD_NAME = TMP_THREAD_NAME;
  exports.SEMATTRS_CODE_FUNCTION = TMP_CODE_FUNCTION;
  exports.SEMATTRS_CODE_NAMESPACE = TMP_CODE_NAMESPACE;
  exports.SEMATTRS_CODE_FILEPATH = TMP_CODE_FILEPATH;
  exports.SEMATTRS_CODE_LINENO = TMP_CODE_LINENO;
  exports.SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
  exports.SEMATTRS_HTTP_URL = TMP_HTTP_URL;
  exports.SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
  exports.SEMATTRS_HTTP_HOST = TMP_HTTP_HOST;
  exports.SEMATTRS_HTTP_SCHEME = TMP_HTTP_SCHEME;
  exports.SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
  exports.SEMATTRS_HTTP_FLAVOR = TMP_HTTP_FLAVOR;
  exports.SEMATTRS_HTTP_USER_AGENT = TMP_HTTP_USER_AGENT;
  exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = TMP_HTTP_REQUEST_CONTENT_LENGTH;
  exports.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED;
  exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = TMP_HTTP_RESPONSE_CONTENT_LENGTH;
  exports.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED;
  exports.SEMATTRS_HTTP_SERVER_NAME = TMP_HTTP_SERVER_NAME;
  exports.SEMATTRS_HTTP_ROUTE = TMP_HTTP_ROUTE;
  exports.SEMATTRS_HTTP_CLIENT_IP = TMP_HTTP_CLIENT_IP;
  exports.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = TMP_AWS_DYNAMODB_TABLE_NAMES;
  exports.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TMP_AWS_DYNAMODB_CONSUMED_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS;
  exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY;
  exports.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = TMP_AWS_DYNAMODB_CONSISTENT_READ;
  exports.SEMATTRS_AWS_DYNAMODB_PROJECTION = TMP_AWS_DYNAMODB_PROJECTION;
  exports.SEMATTRS_AWS_DYNAMODB_LIMIT = TMP_AWS_DYNAMODB_LIMIT;
  exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET;
  exports.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = TMP_AWS_DYNAMODB_INDEX_NAME;
  exports.SEMATTRS_AWS_DYNAMODB_SELECT = TMP_AWS_DYNAMODB_SELECT;
  exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES;
  exports.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES;
  exports.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE;
  exports.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = TMP_AWS_DYNAMODB_TABLE_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = TMP_AWS_DYNAMODB_SCAN_FORWARD;
  exports.SEMATTRS_AWS_DYNAMODB_SEGMENT = TMP_AWS_DYNAMODB_SEGMENT;
  exports.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = TMP_AWS_DYNAMODB_TOTAL_SEGMENTS;
  exports.SEMATTRS_AWS_DYNAMODB_COUNT = TMP_AWS_DYNAMODB_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = TMP_AWS_DYNAMODB_SCANNED_COUNT;
  exports.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS;
  exports.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES;
  exports.SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
  exports.SEMATTRS_MESSAGING_DESTINATION = TMP_MESSAGING_DESTINATION;
  exports.SEMATTRS_MESSAGING_DESTINATION_KIND = TMP_MESSAGING_DESTINATION_KIND;
  exports.SEMATTRS_MESSAGING_TEMP_DESTINATION = TMP_MESSAGING_TEMP_DESTINATION;
  exports.SEMATTRS_MESSAGING_PROTOCOL = TMP_MESSAGING_PROTOCOL;
  exports.SEMATTRS_MESSAGING_PROTOCOL_VERSION = TMP_MESSAGING_PROTOCOL_VERSION;
  exports.SEMATTRS_MESSAGING_URL = TMP_MESSAGING_URL;
  exports.SEMATTRS_MESSAGING_MESSAGE_ID = TMP_MESSAGING_MESSAGE_ID;
  exports.SEMATTRS_MESSAGING_CONVERSATION_ID = TMP_MESSAGING_CONVERSATION_ID;
  exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES;
  exports.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES;
  exports.SEMATTRS_MESSAGING_OPERATION = TMP_MESSAGING_OPERATION;
  exports.SEMATTRS_MESSAGING_CONSUMER_ID = TMP_MESSAGING_CONSUMER_ID;
  exports.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = TMP_MESSAGING_RABBITMQ_ROUTING_KEY;
  exports.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = TMP_MESSAGING_KAFKA_MESSAGE_KEY;
  exports.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = TMP_MESSAGING_KAFKA_CONSUMER_GROUP;
  exports.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = TMP_MESSAGING_KAFKA_CLIENT_ID;
  exports.SEMATTRS_MESSAGING_KAFKA_PARTITION = TMP_MESSAGING_KAFKA_PARTITION;
  exports.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = TMP_MESSAGING_KAFKA_TOMBSTONE;
  exports.SEMATTRS_RPC_SYSTEM = TMP_RPC_SYSTEM;
  exports.SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
  exports.SEMATTRS_RPC_METHOD = TMP_RPC_METHOD;
  exports.SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
  exports.SEMATTRS_RPC_JSONRPC_VERSION = TMP_RPC_JSONRPC_VERSION;
  exports.SEMATTRS_RPC_JSONRPC_REQUEST_ID = TMP_RPC_JSONRPC_REQUEST_ID;
  exports.SEMATTRS_RPC_JSONRPC_ERROR_CODE = TMP_RPC_JSONRPC_ERROR_CODE;
  exports.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = TMP_RPC_JSONRPC_ERROR_MESSAGE;
  exports.SEMATTRS_MESSAGE_TYPE = TMP_MESSAGE_TYPE;
  exports.SEMATTRS_MESSAGE_ID = TMP_MESSAGE_ID;
  exports.SEMATTRS_MESSAGE_COMPRESSED_SIZE = TMP_MESSAGE_COMPRESSED_SIZE;
  exports.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = TMP_MESSAGE_UNCOMPRESSED_SIZE;
  exports.SemanticAttributes = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_AWS_LAMBDA_INVOKED_ARN,
    TMP_DB_SYSTEM,
    TMP_DB_CONNECTION_STRING,
    TMP_DB_USER,
    TMP_DB_JDBC_DRIVER_CLASSNAME,
    TMP_DB_NAME,
    TMP_DB_STATEMENT,
    TMP_DB_OPERATION,
    TMP_DB_MSSQL_INSTANCE_NAME,
    TMP_DB_CASSANDRA_KEYSPACE,
    TMP_DB_CASSANDRA_PAGE_SIZE,
    TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
    TMP_DB_CASSANDRA_TABLE,
    TMP_DB_CASSANDRA_IDEMPOTENCE,
    TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
    TMP_DB_CASSANDRA_COORDINATOR_ID,
    TMP_DB_CASSANDRA_COORDINATOR_DC,
    TMP_DB_HBASE_NAMESPACE,
    TMP_DB_REDIS_DATABASE_INDEX,
    TMP_DB_MONGODB_COLLECTION,
    TMP_DB_SQL_TABLE,
    TMP_EXCEPTION_TYPE,
    TMP_EXCEPTION_MESSAGE,
    TMP_EXCEPTION_STACKTRACE,
    TMP_EXCEPTION_ESCAPED,
    TMP_FAAS_TRIGGER,
    TMP_FAAS_EXECUTION,
    TMP_FAAS_DOCUMENT_COLLECTION,
    TMP_FAAS_DOCUMENT_OPERATION,
    TMP_FAAS_DOCUMENT_TIME,
    TMP_FAAS_DOCUMENT_NAME,
    TMP_FAAS_TIME,
    TMP_FAAS_CRON,
    TMP_FAAS_COLDSTART,
    TMP_FAAS_INVOKED_NAME,
    TMP_FAAS_INVOKED_PROVIDER,
    TMP_FAAS_INVOKED_REGION,
    TMP_NET_TRANSPORT,
    TMP_NET_PEER_IP,
    TMP_NET_PEER_PORT,
    TMP_NET_PEER_NAME,
    TMP_NET_HOST_IP,
    TMP_NET_HOST_PORT,
    TMP_NET_HOST_NAME,
    TMP_NET_HOST_CONNECTION_TYPE,
    TMP_NET_HOST_CONNECTION_SUBTYPE,
    TMP_NET_HOST_CARRIER_NAME,
    TMP_NET_HOST_CARRIER_MCC,
    TMP_NET_HOST_CARRIER_MNC,
    TMP_NET_HOST_CARRIER_ICC,
    TMP_PEER_SERVICE,
    TMP_ENDUSER_ID,
    TMP_ENDUSER_ROLE,
    TMP_ENDUSER_SCOPE,
    TMP_THREAD_ID,
    TMP_THREAD_NAME,
    TMP_CODE_FUNCTION,
    TMP_CODE_NAMESPACE,
    TMP_CODE_FILEPATH,
    TMP_CODE_LINENO,
    TMP_HTTP_METHOD,
    TMP_HTTP_URL,
    TMP_HTTP_TARGET,
    TMP_HTTP_HOST,
    TMP_HTTP_SCHEME,
    TMP_HTTP_STATUS_CODE,
    TMP_HTTP_FLAVOR,
    TMP_HTTP_USER_AGENT,
    TMP_HTTP_REQUEST_CONTENT_LENGTH,
    TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH,
    TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
    TMP_HTTP_SERVER_NAME,
    TMP_HTTP_ROUTE,
    TMP_HTTP_CLIENT_IP,
    TMP_AWS_DYNAMODB_TABLE_NAMES,
    TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
    TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
    TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
    TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
    TMP_AWS_DYNAMODB_CONSISTENT_READ,
    TMP_AWS_DYNAMODB_PROJECTION,
    TMP_AWS_DYNAMODB_LIMIT,
    TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
    TMP_AWS_DYNAMODB_INDEX_NAME,
    TMP_AWS_DYNAMODB_SELECT,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
    TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
    TMP_AWS_DYNAMODB_TABLE_COUNT,
    TMP_AWS_DYNAMODB_SCAN_FORWARD,
    TMP_AWS_DYNAMODB_SEGMENT,
    TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
    TMP_AWS_DYNAMODB_COUNT,
    TMP_AWS_DYNAMODB_SCANNED_COUNT,
    TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
    TMP_MESSAGING_SYSTEM,
    TMP_MESSAGING_DESTINATION,
    TMP_MESSAGING_DESTINATION_KIND,
    TMP_MESSAGING_TEMP_DESTINATION,
    TMP_MESSAGING_PROTOCOL,
    TMP_MESSAGING_PROTOCOL_VERSION,
    TMP_MESSAGING_URL,
    TMP_MESSAGING_MESSAGE_ID,
    TMP_MESSAGING_CONVERSATION_ID,
    TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
    TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
    TMP_MESSAGING_OPERATION,
    TMP_MESSAGING_CONSUMER_ID,
    TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
    TMP_MESSAGING_KAFKA_MESSAGE_KEY,
    TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
    TMP_MESSAGING_KAFKA_CLIENT_ID,
    TMP_MESSAGING_KAFKA_PARTITION,
    TMP_MESSAGING_KAFKA_TOMBSTONE,
    TMP_RPC_SYSTEM,
    TMP_RPC_SERVICE,
    TMP_RPC_METHOD,
    TMP_RPC_GRPC_STATUS_CODE,
    TMP_RPC_JSONRPC_VERSION,
    TMP_RPC_JSONRPC_REQUEST_ID,
    TMP_RPC_JSONRPC_ERROR_CODE,
    TMP_RPC_JSONRPC_ERROR_MESSAGE,
    TMP_MESSAGE_TYPE,
    TMP_MESSAGE_ID,
    TMP_MESSAGE_COMPRESSED_SIZE,
    TMP_MESSAGE_UNCOMPRESSED_SIZE
  ]);
  var TMP_DBSYSTEMVALUES_OTHER_SQL = "other_sql";
  var TMP_DBSYSTEMVALUES_MSSQL = "mssql";
  var TMP_DBSYSTEMVALUES_MYSQL = "mysql";
  var TMP_DBSYSTEMVALUES_ORACLE = "oracle";
  var TMP_DBSYSTEMVALUES_DB2 = "db2";
  var TMP_DBSYSTEMVALUES_POSTGRESQL = "postgresql";
  var TMP_DBSYSTEMVALUES_REDSHIFT = "redshift";
  var TMP_DBSYSTEMVALUES_HIVE = "hive";
  var TMP_DBSYSTEMVALUES_CLOUDSCAPE = "cloudscape";
  var TMP_DBSYSTEMVALUES_HSQLDB = "hsqldb";
  var TMP_DBSYSTEMVALUES_PROGRESS = "progress";
  var TMP_DBSYSTEMVALUES_MAXDB = "maxdb";
  var TMP_DBSYSTEMVALUES_HANADB = "hanadb";
  var TMP_DBSYSTEMVALUES_INGRES = "ingres";
  var TMP_DBSYSTEMVALUES_FIRSTSQL = "firstsql";
  var TMP_DBSYSTEMVALUES_EDB = "edb";
  var TMP_DBSYSTEMVALUES_CACHE = "cache";
  var TMP_DBSYSTEMVALUES_ADABAS = "adabas";
  var TMP_DBSYSTEMVALUES_FIREBIRD = "firebird";
  var TMP_DBSYSTEMVALUES_DERBY = "derby";
  var TMP_DBSYSTEMVALUES_FILEMAKER = "filemaker";
  var TMP_DBSYSTEMVALUES_INFORMIX = "informix";
  var TMP_DBSYSTEMVALUES_INSTANTDB = "instantdb";
  var TMP_DBSYSTEMVALUES_INTERBASE = "interbase";
  var TMP_DBSYSTEMVALUES_MARIADB = "mariadb";
  var TMP_DBSYSTEMVALUES_NETEZZA = "netezza";
  var TMP_DBSYSTEMVALUES_PERVASIVE = "pervasive";
  var TMP_DBSYSTEMVALUES_POINTBASE = "pointbase";
  var TMP_DBSYSTEMVALUES_SQLITE = "sqlite";
  var TMP_DBSYSTEMVALUES_SYBASE = "sybase";
  var TMP_DBSYSTEMVALUES_TERADATA = "teradata";
  var TMP_DBSYSTEMVALUES_VERTICA = "vertica";
  var TMP_DBSYSTEMVALUES_H2 = "h2";
  var TMP_DBSYSTEMVALUES_COLDFUSION = "coldfusion";
  var TMP_DBSYSTEMVALUES_CASSANDRA = "cassandra";
  var TMP_DBSYSTEMVALUES_HBASE = "hbase";
  var TMP_DBSYSTEMVALUES_MONGODB = "mongodb";
  var TMP_DBSYSTEMVALUES_REDIS = "redis";
  var TMP_DBSYSTEMVALUES_COUCHBASE = "couchbase";
  var TMP_DBSYSTEMVALUES_COUCHDB = "couchdb";
  var TMP_DBSYSTEMVALUES_COSMOSDB = "cosmosdb";
  var TMP_DBSYSTEMVALUES_DYNAMODB = "dynamodb";
  var TMP_DBSYSTEMVALUES_NEO4J = "neo4j";
  var TMP_DBSYSTEMVALUES_GEODE = "geode";
  var TMP_DBSYSTEMVALUES_ELASTICSEARCH = "elasticsearch";
  var TMP_DBSYSTEMVALUES_MEMCACHED = "memcached";
  var TMP_DBSYSTEMVALUES_COCKROACHDB = "cockroachdb";
  exports.DBSYSTEMVALUES_OTHER_SQL = TMP_DBSYSTEMVALUES_OTHER_SQL;
  exports.DBSYSTEMVALUES_MSSQL = TMP_DBSYSTEMVALUES_MSSQL;
  exports.DBSYSTEMVALUES_MYSQL = TMP_DBSYSTEMVALUES_MYSQL;
  exports.DBSYSTEMVALUES_ORACLE = TMP_DBSYSTEMVALUES_ORACLE;
  exports.DBSYSTEMVALUES_DB2 = TMP_DBSYSTEMVALUES_DB2;
  exports.DBSYSTEMVALUES_POSTGRESQL = TMP_DBSYSTEMVALUES_POSTGRESQL;
  exports.DBSYSTEMVALUES_REDSHIFT = TMP_DBSYSTEMVALUES_REDSHIFT;
  exports.DBSYSTEMVALUES_HIVE = TMP_DBSYSTEMVALUES_HIVE;
  exports.DBSYSTEMVALUES_CLOUDSCAPE = TMP_DBSYSTEMVALUES_CLOUDSCAPE;
  exports.DBSYSTEMVALUES_HSQLDB = TMP_DBSYSTEMVALUES_HSQLDB;
  exports.DBSYSTEMVALUES_PROGRESS = TMP_DBSYSTEMVALUES_PROGRESS;
  exports.DBSYSTEMVALUES_MAXDB = TMP_DBSYSTEMVALUES_MAXDB;
  exports.DBSYSTEMVALUES_HANADB = TMP_DBSYSTEMVALUES_HANADB;
  exports.DBSYSTEMVALUES_INGRES = TMP_DBSYSTEMVALUES_INGRES;
  exports.DBSYSTEMVALUES_FIRSTSQL = TMP_DBSYSTEMVALUES_FIRSTSQL;
  exports.DBSYSTEMVALUES_EDB = TMP_DBSYSTEMVALUES_EDB;
  exports.DBSYSTEMVALUES_CACHE = TMP_DBSYSTEMVALUES_CACHE;
  exports.DBSYSTEMVALUES_ADABAS = TMP_DBSYSTEMVALUES_ADABAS;
  exports.DBSYSTEMVALUES_FIREBIRD = TMP_DBSYSTEMVALUES_FIREBIRD;
  exports.DBSYSTEMVALUES_DERBY = TMP_DBSYSTEMVALUES_DERBY;
  exports.DBSYSTEMVALUES_FILEMAKER = TMP_DBSYSTEMVALUES_FILEMAKER;
  exports.DBSYSTEMVALUES_INFORMIX = TMP_DBSYSTEMVALUES_INFORMIX;
  exports.DBSYSTEMVALUES_INSTANTDB = TMP_DBSYSTEMVALUES_INSTANTDB;
  exports.DBSYSTEMVALUES_INTERBASE = TMP_DBSYSTEMVALUES_INTERBASE;
  exports.DBSYSTEMVALUES_MARIADB = TMP_DBSYSTEMVALUES_MARIADB;
  exports.DBSYSTEMVALUES_NETEZZA = TMP_DBSYSTEMVALUES_NETEZZA;
  exports.DBSYSTEMVALUES_PERVASIVE = TMP_DBSYSTEMVALUES_PERVASIVE;
  exports.DBSYSTEMVALUES_POINTBASE = TMP_DBSYSTEMVALUES_POINTBASE;
  exports.DBSYSTEMVALUES_SQLITE = TMP_DBSYSTEMVALUES_SQLITE;
  exports.DBSYSTEMVALUES_SYBASE = TMP_DBSYSTEMVALUES_SYBASE;
  exports.DBSYSTEMVALUES_TERADATA = TMP_DBSYSTEMVALUES_TERADATA;
  exports.DBSYSTEMVALUES_VERTICA = TMP_DBSYSTEMVALUES_VERTICA;
  exports.DBSYSTEMVALUES_H2 = TMP_DBSYSTEMVALUES_H2;
  exports.DBSYSTEMVALUES_COLDFUSION = TMP_DBSYSTEMVALUES_COLDFUSION;
  exports.DBSYSTEMVALUES_CASSANDRA = TMP_DBSYSTEMVALUES_CASSANDRA;
  exports.DBSYSTEMVALUES_HBASE = TMP_DBSYSTEMVALUES_HBASE;
  exports.DBSYSTEMVALUES_MONGODB = TMP_DBSYSTEMVALUES_MONGODB;
  exports.DBSYSTEMVALUES_REDIS = TMP_DBSYSTEMVALUES_REDIS;
  exports.DBSYSTEMVALUES_COUCHBASE = TMP_DBSYSTEMVALUES_COUCHBASE;
  exports.DBSYSTEMVALUES_COUCHDB = TMP_DBSYSTEMVALUES_COUCHDB;
  exports.DBSYSTEMVALUES_COSMOSDB = TMP_DBSYSTEMVALUES_COSMOSDB;
  exports.DBSYSTEMVALUES_DYNAMODB = TMP_DBSYSTEMVALUES_DYNAMODB;
  exports.DBSYSTEMVALUES_NEO4J = TMP_DBSYSTEMVALUES_NEO4J;
  exports.DBSYSTEMVALUES_GEODE = TMP_DBSYSTEMVALUES_GEODE;
  exports.DBSYSTEMVALUES_ELASTICSEARCH = TMP_DBSYSTEMVALUES_ELASTICSEARCH;
  exports.DBSYSTEMVALUES_MEMCACHED = TMP_DBSYSTEMVALUES_MEMCACHED;
  exports.DBSYSTEMVALUES_COCKROACHDB = TMP_DBSYSTEMVALUES_COCKROACHDB;
  exports.DbSystemValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_DBSYSTEMVALUES_OTHER_SQL,
    TMP_DBSYSTEMVALUES_MSSQL,
    TMP_DBSYSTEMVALUES_MYSQL,
    TMP_DBSYSTEMVALUES_ORACLE,
    TMP_DBSYSTEMVALUES_DB2,
    TMP_DBSYSTEMVALUES_POSTGRESQL,
    TMP_DBSYSTEMVALUES_REDSHIFT,
    TMP_DBSYSTEMVALUES_HIVE,
    TMP_DBSYSTEMVALUES_CLOUDSCAPE,
    TMP_DBSYSTEMVALUES_HSQLDB,
    TMP_DBSYSTEMVALUES_PROGRESS,
    TMP_DBSYSTEMVALUES_MAXDB,
    TMP_DBSYSTEMVALUES_HANADB,
    TMP_DBSYSTEMVALUES_INGRES,
    TMP_DBSYSTEMVALUES_FIRSTSQL,
    TMP_DBSYSTEMVALUES_EDB,
    TMP_DBSYSTEMVALUES_CACHE,
    TMP_DBSYSTEMVALUES_ADABAS,
    TMP_DBSYSTEMVALUES_FIREBIRD,
    TMP_DBSYSTEMVALUES_DERBY,
    TMP_DBSYSTEMVALUES_FILEMAKER,
    TMP_DBSYSTEMVALUES_INFORMIX,
    TMP_DBSYSTEMVALUES_INSTANTDB,
    TMP_DBSYSTEMVALUES_INTERBASE,
    TMP_DBSYSTEMVALUES_MARIADB,
    TMP_DBSYSTEMVALUES_NETEZZA,
    TMP_DBSYSTEMVALUES_PERVASIVE,
    TMP_DBSYSTEMVALUES_POINTBASE,
    TMP_DBSYSTEMVALUES_SQLITE,
    TMP_DBSYSTEMVALUES_SYBASE,
    TMP_DBSYSTEMVALUES_TERADATA,
    TMP_DBSYSTEMVALUES_VERTICA,
    TMP_DBSYSTEMVALUES_H2,
    TMP_DBSYSTEMVALUES_COLDFUSION,
    TMP_DBSYSTEMVALUES_CASSANDRA,
    TMP_DBSYSTEMVALUES_HBASE,
    TMP_DBSYSTEMVALUES_MONGODB,
    TMP_DBSYSTEMVALUES_REDIS,
    TMP_DBSYSTEMVALUES_COUCHBASE,
    TMP_DBSYSTEMVALUES_COUCHDB,
    TMP_DBSYSTEMVALUES_COSMOSDB,
    TMP_DBSYSTEMVALUES_DYNAMODB,
    TMP_DBSYSTEMVALUES_NEO4J,
    TMP_DBSYSTEMVALUES_GEODE,
    TMP_DBSYSTEMVALUES_ELASTICSEARCH,
    TMP_DBSYSTEMVALUES_MEMCACHED,
    TMP_DBSYSTEMVALUES_COCKROACHDB
  ]);
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = "all";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = "each_quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = "quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = "local_quorum";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = "one";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = "two";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = "three";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = "local_one";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = "any";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = "serial";
  var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = "local_serial";
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL;
  exports.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL;
  exports.DbCassandraConsistencyLevelValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
  ]);
  var TMP_FAASTRIGGERVALUES_DATASOURCE = "datasource";
  var TMP_FAASTRIGGERVALUES_HTTP = "http";
  var TMP_FAASTRIGGERVALUES_PUBSUB = "pubsub";
  var TMP_FAASTRIGGERVALUES_TIMER = "timer";
  var TMP_FAASTRIGGERVALUES_OTHER = "other";
  exports.FAASTRIGGERVALUES_DATASOURCE = TMP_FAASTRIGGERVALUES_DATASOURCE;
  exports.FAASTRIGGERVALUES_HTTP = TMP_FAASTRIGGERVALUES_HTTP;
  exports.FAASTRIGGERVALUES_PUBSUB = TMP_FAASTRIGGERVALUES_PUBSUB;
  exports.FAASTRIGGERVALUES_TIMER = TMP_FAASTRIGGERVALUES_TIMER;
  exports.FAASTRIGGERVALUES_OTHER = TMP_FAASTRIGGERVALUES_OTHER;
  exports.FaasTriggerValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASTRIGGERVALUES_DATASOURCE,
    TMP_FAASTRIGGERVALUES_HTTP,
    TMP_FAASTRIGGERVALUES_PUBSUB,
    TMP_FAASTRIGGERVALUES_TIMER,
    TMP_FAASTRIGGERVALUES_OTHER
  ]);
  var TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = "insert";
  var TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = "edit";
  var TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = "delete";
  exports.FAASDOCUMENTOPERATIONVALUES_INSERT = TMP_FAASDOCUMENTOPERATIONVALUES_INSERT;
  exports.FAASDOCUMENTOPERATIONVALUES_EDIT = TMP_FAASDOCUMENTOPERATIONVALUES_EDIT;
  exports.FAASDOCUMENTOPERATIONVALUES_DELETE = TMP_FAASDOCUMENTOPERATIONVALUES_DELETE;
  exports.FaasDocumentOperationValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
    TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
    TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
  ]);
  var TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
  var TMP_FAASINVOKEDPROVIDERVALUES_AWS = "aws";
  var TMP_FAASINVOKEDPROVIDERVALUES_AZURE = "azure";
  var TMP_FAASINVOKEDPROVIDERVALUES_GCP = "gcp";
  exports.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD;
  exports.FAASINVOKEDPROVIDERVALUES_AWS = TMP_FAASINVOKEDPROVIDERVALUES_AWS;
  exports.FAASINVOKEDPROVIDERVALUES_AZURE = TMP_FAASINVOKEDPROVIDERVALUES_AZURE;
  exports.FAASINVOKEDPROVIDERVALUES_GCP = TMP_FAASINVOKEDPROVIDERVALUES_GCP;
  exports.FaasInvokedProviderValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_FAASINVOKEDPROVIDERVALUES_AWS,
    TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
    TMP_FAASINVOKEDPROVIDERVALUES_GCP
  ]);
  var TMP_NETTRANSPORTVALUES_IP_TCP = "ip_tcp";
  var TMP_NETTRANSPORTVALUES_IP_UDP = "ip_udp";
  var TMP_NETTRANSPORTVALUES_IP = "ip";
  var TMP_NETTRANSPORTVALUES_UNIX = "unix";
  var TMP_NETTRANSPORTVALUES_PIPE = "pipe";
  var TMP_NETTRANSPORTVALUES_INPROC = "inproc";
  var TMP_NETTRANSPORTVALUES_OTHER = "other";
  exports.NETTRANSPORTVALUES_IP_TCP = TMP_NETTRANSPORTVALUES_IP_TCP;
  exports.NETTRANSPORTVALUES_IP_UDP = TMP_NETTRANSPORTVALUES_IP_UDP;
  exports.NETTRANSPORTVALUES_IP = TMP_NETTRANSPORTVALUES_IP;
  exports.NETTRANSPORTVALUES_UNIX = TMP_NETTRANSPORTVALUES_UNIX;
  exports.NETTRANSPORTVALUES_PIPE = TMP_NETTRANSPORTVALUES_PIPE;
  exports.NETTRANSPORTVALUES_INPROC = TMP_NETTRANSPORTVALUES_INPROC;
  exports.NETTRANSPORTVALUES_OTHER = TMP_NETTRANSPORTVALUES_OTHER;
  exports.NetTransportValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETTRANSPORTVALUES_IP_TCP,
    TMP_NETTRANSPORTVALUES_IP_UDP,
    TMP_NETTRANSPORTVALUES_IP,
    TMP_NETTRANSPORTVALUES_UNIX,
    TMP_NETTRANSPORTVALUES_PIPE,
    TMP_NETTRANSPORTVALUES_INPROC,
    TMP_NETTRANSPORTVALUES_OTHER
  ]);
  var TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = "wifi";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = "wired";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = "cell";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = "unavailable";
  var TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = "unknown";
  exports.NETHOSTCONNECTIONTYPEVALUES_WIFI = TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI;
  exports.NETHOSTCONNECTIONTYPEVALUES_WIRED = TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED;
  exports.NETHOSTCONNECTIONTYPEVALUES_CELL = TMP_NETHOSTCONNECTIONTYPEVALUES_CELL;
  exports.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE;
  exports.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN;
  exports.NetHostConnectionTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
    TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
  ]);
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = "gprs";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = "edge";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = "umts";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = "cdma";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = "evdo_0";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = "evdo_a";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = "cdma2000_1xrtt";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = "hsdpa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = "hsupa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = "hspa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = "iden";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = "evdo_b";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = "lte";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = "ehrpd";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = "hspap";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = "gsm";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = "td_scdma";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = "iwlan";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = "nr";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = "nrnsa";
  var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = "lte_ca";
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_NR = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA;
  exports.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA;
  exports.NetHostConnectionSubtypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
  ]);
  var TMP_HTTPFLAVORVALUES_HTTP_1_0 = "1.0";
  var TMP_HTTPFLAVORVALUES_HTTP_1_1 = "1.1";
  var TMP_HTTPFLAVORVALUES_HTTP_2_0 = "2.0";
  var TMP_HTTPFLAVORVALUES_SPDY = "SPDY";
  var TMP_HTTPFLAVORVALUES_QUIC = "QUIC";
  exports.HTTPFLAVORVALUES_HTTP_1_0 = TMP_HTTPFLAVORVALUES_HTTP_1_0;
  exports.HTTPFLAVORVALUES_HTTP_1_1 = TMP_HTTPFLAVORVALUES_HTTP_1_1;
  exports.HTTPFLAVORVALUES_HTTP_2_0 = TMP_HTTPFLAVORVALUES_HTTP_2_0;
  exports.HTTPFLAVORVALUES_SPDY = TMP_HTTPFLAVORVALUES_SPDY;
  exports.HTTPFLAVORVALUES_QUIC = TMP_HTTPFLAVORVALUES_QUIC;
  exports.HttpFlavorValues = {
    HTTP_1_0: TMP_HTTPFLAVORVALUES_HTTP_1_0,
    HTTP_1_1: TMP_HTTPFLAVORVALUES_HTTP_1_1,
    HTTP_2_0: TMP_HTTPFLAVORVALUES_HTTP_2_0,
    SPDY: TMP_HTTPFLAVORVALUES_SPDY,
    QUIC: TMP_HTTPFLAVORVALUES_QUIC
  };
  var TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = "queue";
  var TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = "topic";
  exports.MESSAGINGDESTINATIONKINDVALUES_QUEUE = TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE;
  exports.MESSAGINGDESTINATIONKINDVALUES_TOPIC = TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC;
  exports.MessagingDestinationKindValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
    TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
  ]);
  var TMP_MESSAGINGOPERATIONVALUES_RECEIVE = "receive";
  var TMP_MESSAGINGOPERATIONVALUES_PROCESS = "process";
  exports.MESSAGINGOPERATIONVALUES_RECEIVE = TMP_MESSAGINGOPERATIONVALUES_RECEIVE;
  exports.MESSAGINGOPERATIONVALUES_PROCESS = TMP_MESSAGINGOPERATIONVALUES_PROCESS;
  exports.MessagingOperationValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
    TMP_MESSAGINGOPERATIONVALUES_PROCESS
  ]);
  var TMP_RPCGRPCSTATUSCODEVALUES_OK = 0;
  var TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
  var TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
  var TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
  var TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
  var TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
  var TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
  var TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
  var TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
  var TMP_RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
  var TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
  var TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
  var TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
  var TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
  exports.RPCGRPCSTATUSCODEVALUES_OK = TMP_RPCGRPCSTATUSCODEVALUES_OK;
  exports.RPCGRPCSTATUSCODEVALUES_CANCELLED = TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED;
  exports.RPCGRPCSTATUSCODEVALUES_UNKNOWN = TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN;
  exports.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT;
  exports.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED;
  exports.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND;
  exports.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS;
  exports.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED;
  exports.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED;
  exports.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION;
  exports.RPCGRPCSTATUSCODEVALUES_ABORTED = TMP_RPCGRPCSTATUSCODEVALUES_ABORTED;
  exports.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE;
  exports.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED;
  exports.RPCGRPCSTATUSCODEVALUES_INTERNAL = TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL;
  exports.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE;
  exports.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS;
  exports.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED;
  exports.RpcGrpcStatusCodeValues = {
    OK: TMP_RPCGRPCSTATUSCODEVALUES_OK,
    CANCELLED: TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED,
    UNKNOWN: TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN,
    INVALID_ARGUMENT: TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
    DEADLINE_EXCEEDED: TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
    NOT_FOUND: TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
    ALREADY_EXISTS: TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
    PERMISSION_DENIED: TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
    RESOURCE_EXHAUSTED: TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION: TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
    ABORTED: TMP_RPCGRPCSTATUSCODEVALUES_ABORTED,
    OUT_OF_RANGE: TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
    UNIMPLEMENTED: TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
    INTERNAL: TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL,
    UNAVAILABLE: TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
    DATA_LOSS: TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
    UNAUTHENTICATED: TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED
  };
  var TMP_MESSAGETYPEVALUES_SENT = "SENT";
  var TMP_MESSAGETYPEVALUES_RECEIVED = "RECEIVED";
  exports.MESSAGETYPEVALUES_SENT = TMP_MESSAGETYPEVALUES_SENT;
  exports.MESSAGETYPEVALUES_RECEIVED = TMP_MESSAGETYPEVALUES_RECEIVED;
  exports.MessageTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_MESSAGETYPEVALUES_SENT,
    TMP_MESSAGETYPEVALUES_RECEIVED
  ]);
});

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/trace/index.js
var require_trace3 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_SemanticAttributes3(), exports);
});

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/resource/SemanticResourceAttributes.js
var require_SemanticResourceAttributes3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SEMRESATTRS_K8S_STATEFULSET_NAME = exports.SEMRESATTRS_K8S_STATEFULSET_UID = exports.SEMRESATTRS_K8S_DEPLOYMENT_NAME = exports.SEMRESATTRS_K8S_DEPLOYMENT_UID = exports.SEMRESATTRS_K8S_REPLICASET_NAME = exports.SEMRESATTRS_K8S_REPLICASET_UID = exports.SEMRESATTRS_K8S_CONTAINER_NAME = exports.SEMRESATTRS_K8S_POD_NAME = exports.SEMRESATTRS_K8S_POD_UID = exports.SEMRESATTRS_K8S_NAMESPACE_NAME = exports.SEMRESATTRS_K8S_NODE_UID = exports.SEMRESATTRS_K8S_NODE_NAME = exports.SEMRESATTRS_K8S_CLUSTER_NAME = exports.SEMRESATTRS_HOST_IMAGE_VERSION = exports.SEMRESATTRS_HOST_IMAGE_ID = exports.SEMRESATTRS_HOST_IMAGE_NAME = exports.SEMRESATTRS_HOST_ARCH = exports.SEMRESATTRS_HOST_TYPE = exports.SEMRESATTRS_HOST_NAME = exports.SEMRESATTRS_HOST_ID = exports.SEMRESATTRS_FAAS_MAX_MEMORY = exports.SEMRESATTRS_FAAS_INSTANCE = exports.SEMRESATTRS_FAAS_VERSION = exports.SEMRESATTRS_FAAS_ID = exports.SEMRESATTRS_FAAS_NAME = exports.SEMRESATTRS_DEVICE_MODEL_NAME = exports.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = exports.SEMRESATTRS_DEVICE_ID = exports.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = exports.SEMRESATTRS_CONTAINER_IMAGE_TAG = exports.SEMRESATTRS_CONTAINER_IMAGE_NAME = exports.SEMRESATTRS_CONTAINER_RUNTIME = exports.SEMRESATTRS_CONTAINER_ID = exports.SEMRESATTRS_CONTAINER_NAME = exports.SEMRESATTRS_AWS_LOG_STREAM_ARNS = exports.SEMRESATTRS_AWS_LOG_STREAM_NAMES = exports.SEMRESATTRS_AWS_LOG_GROUP_ARNS = exports.SEMRESATTRS_AWS_LOG_GROUP_NAMES = exports.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = exports.SEMRESATTRS_AWS_ECS_TASK_REVISION = exports.SEMRESATTRS_AWS_ECS_TASK_FAMILY = exports.SEMRESATTRS_AWS_ECS_TASK_ARN = exports.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = exports.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = exports.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = exports.SEMRESATTRS_CLOUD_PLATFORM = exports.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = exports.SEMRESATTRS_CLOUD_REGION = exports.SEMRESATTRS_CLOUD_ACCOUNT_ID = exports.SEMRESATTRS_CLOUD_PROVIDER = undefined;
  exports.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = exports.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = exports.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = exports.CLOUDPLATFORMVALUES_AZURE_AKS = exports.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = exports.CLOUDPLATFORMVALUES_AZURE_VM = exports.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = exports.CLOUDPLATFORMVALUES_AWS_LAMBDA = exports.CLOUDPLATFORMVALUES_AWS_EKS = exports.CLOUDPLATFORMVALUES_AWS_ECS = exports.CLOUDPLATFORMVALUES_AWS_EC2 = exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = exports.CloudProviderValues = exports.CLOUDPROVIDERVALUES_GCP = exports.CLOUDPROVIDERVALUES_AZURE = exports.CLOUDPROVIDERVALUES_AWS = exports.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = exports.SemanticResourceAttributes = exports.SEMRESATTRS_WEBENGINE_DESCRIPTION = exports.SEMRESATTRS_WEBENGINE_VERSION = exports.SEMRESATTRS_WEBENGINE_NAME = exports.SEMRESATTRS_TELEMETRY_AUTO_VERSION = exports.SEMRESATTRS_TELEMETRY_SDK_VERSION = exports.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = exports.SEMRESATTRS_TELEMETRY_SDK_NAME = exports.SEMRESATTRS_SERVICE_VERSION = exports.SEMRESATTRS_SERVICE_INSTANCE_ID = exports.SEMRESATTRS_SERVICE_NAMESPACE = exports.SEMRESATTRS_SERVICE_NAME = exports.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = exports.SEMRESATTRS_PROCESS_RUNTIME_VERSION = exports.SEMRESATTRS_PROCESS_RUNTIME_NAME = exports.SEMRESATTRS_PROCESS_OWNER = exports.SEMRESATTRS_PROCESS_COMMAND_ARGS = exports.SEMRESATTRS_PROCESS_COMMAND_LINE = exports.SEMRESATTRS_PROCESS_COMMAND = exports.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = exports.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = exports.SEMRESATTRS_PROCESS_PID = exports.SEMRESATTRS_OS_VERSION = exports.SEMRESATTRS_OS_NAME = exports.SEMRESATTRS_OS_DESCRIPTION = exports.SEMRESATTRS_OS_TYPE = exports.SEMRESATTRS_K8S_CRONJOB_NAME = exports.SEMRESATTRS_K8S_CRONJOB_UID = exports.SEMRESATTRS_K8S_JOB_NAME = exports.SEMRESATTRS_K8S_JOB_UID = exports.SEMRESATTRS_K8S_DAEMONSET_NAME = exports.SEMRESATTRS_K8S_DAEMONSET_UID = undefined;
  exports.TelemetrySdkLanguageValues = exports.TELEMETRYSDKLANGUAGEVALUES_WEBJS = exports.TELEMETRYSDKLANGUAGEVALUES_RUBY = exports.TELEMETRYSDKLANGUAGEVALUES_PYTHON = exports.TELEMETRYSDKLANGUAGEVALUES_PHP = exports.TELEMETRYSDKLANGUAGEVALUES_NODEJS = exports.TELEMETRYSDKLANGUAGEVALUES_JAVA = exports.TELEMETRYSDKLANGUAGEVALUES_GO = exports.TELEMETRYSDKLANGUAGEVALUES_ERLANG = exports.TELEMETRYSDKLANGUAGEVALUES_DOTNET = exports.TELEMETRYSDKLANGUAGEVALUES_CPP = exports.OsTypeValues = exports.OSTYPEVALUES_Z_OS = exports.OSTYPEVALUES_SOLARIS = exports.OSTYPEVALUES_AIX = exports.OSTYPEVALUES_HPUX = exports.OSTYPEVALUES_DRAGONFLYBSD = exports.OSTYPEVALUES_OPENBSD = exports.OSTYPEVALUES_NETBSD = exports.OSTYPEVALUES_FREEBSD = exports.OSTYPEVALUES_DARWIN = exports.OSTYPEVALUES_LINUX = exports.OSTYPEVALUES_WINDOWS = exports.HostArchValues = exports.HOSTARCHVALUES_X86 = exports.HOSTARCHVALUES_PPC64 = exports.HOSTARCHVALUES_PPC32 = exports.HOSTARCHVALUES_IA64 = exports.HOSTARCHVALUES_ARM64 = exports.HOSTARCHVALUES_ARM32 = exports.HOSTARCHVALUES_AMD64 = exports.AwsEcsLaunchtypeValues = exports.AWSECSLAUNCHTYPEVALUES_FARGATE = exports.AWSECSLAUNCHTYPEVALUES_EC2 = exports.CloudPlatformValues = exports.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = exports.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = exports.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = exports.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = undefined;
  var utils_1 = require_utils3();
  var TMP_CLOUD_PROVIDER = "cloud.provider";
  var TMP_CLOUD_ACCOUNT_ID = "cloud.account.id";
  var TMP_CLOUD_REGION = "cloud.region";
  var TMP_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
  var TMP_CLOUD_PLATFORM = "cloud.platform";
  var TMP_AWS_ECS_CONTAINER_ARN = "aws.ecs.container.arn";
  var TMP_AWS_ECS_CLUSTER_ARN = "aws.ecs.cluster.arn";
  var TMP_AWS_ECS_LAUNCHTYPE = "aws.ecs.launchtype";
  var TMP_AWS_ECS_TASK_ARN = "aws.ecs.task.arn";
  var TMP_AWS_ECS_TASK_FAMILY = "aws.ecs.task.family";
  var TMP_AWS_ECS_TASK_REVISION = "aws.ecs.task.revision";
  var TMP_AWS_EKS_CLUSTER_ARN = "aws.eks.cluster.arn";
  var TMP_AWS_LOG_GROUP_NAMES = "aws.log.group.names";
  var TMP_AWS_LOG_GROUP_ARNS = "aws.log.group.arns";
  var TMP_AWS_LOG_STREAM_NAMES = "aws.log.stream.names";
  var TMP_AWS_LOG_STREAM_ARNS = "aws.log.stream.arns";
  var TMP_CONTAINER_NAME = "container.name";
  var TMP_CONTAINER_ID = "container.id";
  var TMP_CONTAINER_RUNTIME = "container.runtime";
  var TMP_CONTAINER_IMAGE_NAME = "container.image.name";
  var TMP_CONTAINER_IMAGE_TAG = "container.image.tag";
  var TMP_DEPLOYMENT_ENVIRONMENT = "deployment.environment";
  var TMP_DEVICE_ID = "device.id";
  var TMP_DEVICE_MODEL_IDENTIFIER = "device.model.identifier";
  var TMP_DEVICE_MODEL_NAME = "device.model.name";
  var TMP_FAAS_NAME = "faas.name";
  var TMP_FAAS_ID = "faas.id";
  var TMP_FAAS_VERSION = "faas.version";
  var TMP_FAAS_INSTANCE = "faas.instance";
  var TMP_FAAS_MAX_MEMORY = "faas.max_memory";
  var TMP_HOST_ID = "host.id";
  var TMP_HOST_NAME = "host.name";
  var TMP_HOST_TYPE = "host.type";
  var TMP_HOST_ARCH = "host.arch";
  var TMP_HOST_IMAGE_NAME = "host.image.name";
  var TMP_HOST_IMAGE_ID = "host.image.id";
  var TMP_HOST_IMAGE_VERSION = "host.image.version";
  var TMP_K8S_CLUSTER_NAME = "k8s.cluster.name";
  var TMP_K8S_NODE_NAME = "k8s.node.name";
  var TMP_K8S_NODE_UID = "k8s.node.uid";
  var TMP_K8S_NAMESPACE_NAME = "k8s.namespace.name";
  var TMP_K8S_POD_UID = "k8s.pod.uid";
  var TMP_K8S_POD_NAME = "k8s.pod.name";
  var TMP_K8S_CONTAINER_NAME = "k8s.container.name";
  var TMP_K8S_REPLICASET_UID = "k8s.replicaset.uid";
  var TMP_K8S_REPLICASET_NAME = "k8s.replicaset.name";
  var TMP_K8S_DEPLOYMENT_UID = "k8s.deployment.uid";
  var TMP_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
  var TMP_K8S_STATEFULSET_UID = "k8s.statefulset.uid";
  var TMP_K8S_STATEFULSET_NAME = "k8s.statefulset.name";
  var TMP_K8S_DAEMONSET_UID = "k8s.daemonset.uid";
  var TMP_K8S_DAEMONSET_NAME = "k8s.daemonset.name";
  var TMP_K8S_JOB_UID = "k8s.job.uid";
  var TMP_K8S_JOB_NAME = "k8s.job.name";
  var TMP_K8S_CRONJOB_UID = "k8s.cronjob.uid";
  var TMP_K8S_CRONJOB_NAME = "k8s.cronjob.name";
  var TMP_OS_TYPE = "os.type";
  var TMP_OS_DESCRIPTION = "os.description";
  var TMP_OS_NAME = "os.name";
  var TMP_OS_VERSION = "os.version";
  var TMP_PROCESS_PID = "process.pid";
  var TMP_PROCESS_EXECUTABLE_NAME = "process.executable.name";
  var TMP_PROCESS_EXECUTABLE_PATH = "process.executable.path";
  var TMP_PROCESS_COMMAND = "process.command";
  var TMP_PROCESS_COMMAND_LINE = "process.command_line";
  var TMP_PROCESS_COMMAND_ARGS = "process.command_args";
  var TMP_PROCESS_OWNER = "process.owner";
  var TMP_PROCESS_RUNTIME_NAME = "process.runtime.name";
  var TMP_PROCESS_RUNTIME_VERSION = "process.runtime.version";
  var TMP_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
  var TMP_SERVICE_NAME = "service.name";
  var TMP_SERVICE_NAMESPACE = "service.namespace";
  var TMP_SERVICE_INSTANCE_ID = "service.instance.id";
  var TMP_SERVICE_VERSION = "service.version";
  var TMP_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  var TMP_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  var TMP_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  var TMP_TELEMETRY_AUTO_VERSION = "telemetry.auto.version";
  var TMP_WEBENGINE_NAME = "webengine.name";
  var TMP_WEBENGINE_VERSION = "webengine.version";
  var TMP_WEBENGINE_DESCRIPTION = "webengine.description";
  exports.SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
  exports.SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
  exports.SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
  exports.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
  exports.SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
  exports.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
  exports.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
  exports.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
  exports.SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
  exports.SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
  exports.SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
  exports.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
  exports.SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
  exports.SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
  exports.SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
  exports.SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
  exports.SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
  exports.SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
  exports.SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
  exports.SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
  exports.SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
  exports.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
  exports.SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
  exports.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
  exports.SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
  exports.SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
  exports.SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
  exports.SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
  exports.SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
  exports.SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
  exports.SEMRESATTRS_HOST_ID = TMP_HOST_ID;
  exports.SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
  exports.SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
  exports.SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
  exports.SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
  exports.SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
  exports.SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
  exports.SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
  exports.SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
  exports.SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
  exports.SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
  exports.SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
  exports.SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
  exports.SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
  exports.SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
  exports.SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
  exports.SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
  exports.SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
  exports.SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
  exports.SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
  exports.SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
  exports.SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
  exports.SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
  exports.SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
  exports.SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
  exports.SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
  exports.SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
  exports.SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
  exports.SEMRESATTRS_OS_NAME = TMP_OS_NAME;
  exports.SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
  exports.SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
  exports.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
  exports.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
  exports.SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
  exports.SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
  exports.SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
  exports.SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
  exports.SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
  exports.SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
  exports.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
  exports.SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
  exports.SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
  exports.SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
  exports.SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
  exports.SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
  exports.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
  exports.SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
  exports.SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
  exports.SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
  exports.SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
  exports.SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
  exports.SemanticResourceAttributes = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUD_PROVIDER,
    TMP_CLOUD_ACCOUNT_ID,
    TMP_CLOUD_REGION,
    TMP_CLOUD_AVAILABILITY_ZONE,
    TMP_CLOUD_PLATFORM,
    TMP_AWS_ECS_CONTAINER_ARN,
    TMP_AWS_ECS_CLUSTER_ARN,
    TMP_AWS_ECS_LAUNCHTYPE,
    TMP_AWS_ECS_TASK_ARN,
    TMP_AWS_ECS_TASK_FAMILY,
    TMP_AWS_ECS_TASK_REVISION,
    TMP_AWS_EKS_CLUSTER_ARN,
    TMP_AWS_LOG_GROUP_NAMES,
    TMP_AWS_LOG_GROUP_ARNS,
    TMP_AWS_LOG_STREAM_NAMES,
    TMP_AWS_LOG_STREAM_ARNS,
    TMP_CONTAINER_NAME,
    TMP_CONTAINER_ID,
    TMP_CONTAINER_RUNTIME,
    TMP_CONTAINER_IMAGE_NAME,
    TMP_CONTAINER_IMAGE_TAG,
    TMP_DEPLOYMENT_ENVIRONMENT,
    TMP_DEVICE_ID,
    TMP_DEVICE_MODEL_IDENTIFIER,
    TMP_DEVICE_MODEL_NAME,
    TMP_FAAS_NAME,
    TMP_FAAS_ID,
    TMP_FAAS_VERSION,
    TMP_FAAS_INSTANCE,
    TMP_FAAS_MAX_MEMORY,
    TMP_HOST_ID,
    TMP_HOST_NAME,
    TMP_HOST_TYPE,
    TMP_HOST_ARCH,
    TMP_HOST_IMAGE_NAME,
    TMP_HOST_IMAGE_ID,
    TMP_HOST_IMAGE_VERSION,
    TMP_K8S_CLUSTER_NAME,
    TMP_K8S_NODE_NAME,
    TMP_K8S_NODE_UID,
    TMP_K8S_NAMESPACE_NAME,
    TMP_K8S_POD_UID,
    TMP_K8S_POD_NAME,
    TMP_K8S_CONTAINER_NAME,
    TMP_K8S_REPLICASET_UID,
    TMP_K8S_REPLICASET_NAME,
    TMP_K8S_DEPLOYMENT_UID,
    TMP_K8S_DEPLOYMENT_NAME,
    TMP_K8S_STATEFULSET_UID,
    TMP_K8S_STATEFULSET_NAME,
    TMP_K8S_DAEMONSET_UID,
    TMP_K8S_DAEMONSET_NAME,
    TMP_K8S_JOB_UID,
    TMP_K8S_JOB_NAME,
    TMP_K8S_CRONJOB_UID,
    TMP_K8S_CRONJOB_NAME,
    TMP_OS_TYPE,
    TMP_OS_DESCRIPTION,
    TMP_OS_NAME,
    TMP_OS_VERSION,
    TMP_PROCESS_PID,
    TMP_PROCESS_EXECUTABLE_NAME,
    TMP_PROCESS_EXECUTABLE_PATH,
    TMP_PROCESS_COMMAND,
    TMP_PROCESS_COMMAND_LINE,
    TMP_PROCESS_COMMAND_ARGS,
    TMP_PROCESS_OWNER,
    TMP_PROCESS_RUNTIME_NAME,
    TMP_PROCESS_RUNTIME_VERSION,
    TMP_PROCESS_RUNTIME_DESCRIPTION,
    TMP_SERVICE_NAME,
    TMP_SERVICE_NAMESPACE,
    TMP_SERVICE_INSTANCE_ID,
    TMP_SERVICE_VERSION,
    TMP_TELEMETRY_SDK_NAME,
    TMP_TELEMETRY_SDK_LANGUAGE,
    TMP_TELEMETRY_SDK_VERSION,
    TMP_TELEMETRY_AUTO_VERSION,
    TMP_WEBENGINE_NAME,
    TMP_WEBENGINE_VERSION,
    TMP_WEBENGINE_DESCRIPTION
  ]);
  var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
  var TMP_CLOUDPROVIDERVALUES_AWS = "aws";
  var TMP_CLOUDPROVIDERVALUES_AZURE = "azure";
  var TMP_CLOUDPROVIDERVALUES_GCP = "gcp";
  exports.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
  exports.CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
  exports.CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
  exports.CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
  exports.CloudProviderValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    TMP_CLOUDPROVIDERVALUES_AWS,
    TMP_CLOUDPROVIDERVALUES_AZURE,
    TMP_CLOUDPROVIDERVALUES_GCP
  ]);
  var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = "alibaba_cloud_ecs";
  var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = "alibaba_cloud_fc";
  var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = "aws_ec2";
  var TMP_CLOUDPLATFORMVALUES_AWS_ECS = "aws_ecs";
  var TMP_CLOUDPLATFORMVALUES_AWS_EKS = "aws_eks";
  var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = "aws_lambda";
  var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = "aws_elastic_beanstalk";
  var TMP_CLOUDPLATFORMVALUES_AZURE_VM = "azure_vm";
  var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = "azure_container_instances";
  var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = "azure_aks";
  var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = "azure_functions";
  var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = "azure_app_service";
  var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = "gcp_compute_engine";
  var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = "gcp_cloud_run";
  var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = "gcp_kubernetes_engine";
  var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = "gcp_cloud_functions";
  var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = "gcp_app_engine";
  exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
  exports.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
  exports.CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
  exports.CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
  exports.CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
  exports.CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
  exports.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
  exports.CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
  exports.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
  exports.CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
  exports.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
  exports.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
  exports.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
  exports.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
  exports.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
  exports.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
  exports.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
  exports.CloudPlatformValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    TMP_CLOUDPLATFORMVALUES_AWS_EC2,
    TMP_CLOUDPLATFORMVALUES_AWS_ECS,
    TMP_CLOUDPLATFORMVALUES_AWS_EKS,
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    TMP_CLOUDPLATFORMVALUES_AZURE_VM,
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
  ]);
  var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = "ec2";
  var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = "fargate";
  exports.AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
  exports.AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
  exports.AwsEcsLaunchtypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_AWSECSLAUNCHTYPEVALUES_EC2,
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
  ]);
  var TMP_HOSTARCHVALUES_AMD64 = "amd64";
  var TMP_HOSTARCHVALUES_ARM32 = "arm32";
  var TMP_HOSTARCHVALUES_ARM64 = "arm64";
  var TMP_HOSTARCHVALUES_IA64 = "ia64";
  var TMP_HOSTARCHVALUES_PPC32 = "ppc32";
  var TMP_HOSTARCHVALUES_PPC64 = "ppc64";
  var TMP_HOSTARCHVALUES_X86 = "x86";
  exports.HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
  exports.HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
  exports.HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
  exports.HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
  exports.HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
  exports.HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
  exports.HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
  exports.HostArchValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_HOSTARCHVALUES_AMD64,
    TMP_HOSTARCHVALUES_ARM32,
    TMP_HOSTARCHVALUES_ARM64,
    TMP_HOSTARCHVALUES_IA64,
    TMP_HOSTARCHVALUES_PPC32,
    TMP_HOSTARCHVALUES_PPC64,
    TMP_HOSTARCHVALUES_X86
  ]);
  var TMP_OSTYPEVALUES_WINDOWS = "windows";
  var TMP_OSTYPEVALUES_LINUX = "linux";
  var TMP_OSTYPEVALUES_DARWIN = "darwin";
  var TMP_OSTYPEVALUES_FREEBSD = "freebsd";
  var TMP_OSTYPEVALUES_NETBSD = "netbsd";
  var TMP_OSTYPEVALUES_OPENBSD = "openbsd";
  var TMP_OSTYPEVALUES_DRAGONFLYBSD = "dragonflybsd";
  var TMP_OSTYPEVALUES_HPUX = "hpux";
  var TMP_OSTYPEVALUES_AIX = "aix";
  var TMP_OSTYPEVALUES_SOLARIS = "solaris";
  var TMP_OSTYPEVALUES_Z_OS = "z_os";
  exports.OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
  exports.OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
  exports.OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
  exports.OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
  exports.OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
  exports.OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
  exports.OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
  exports.OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
  exports.OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
  exports.OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
  exports.OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
  exports.OsTypeValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_OSTYPEVALUES_WINDOWS,
    TMP_OSTYPEVALUES_LINUX,
    TMP_OSTYPEVALUES_DARWIN,
    TMP_OSTYPEVALUES_FREEBSD,
    TMP_OSTYPEVALUES_NETBSD,
    TMP_OSTYPEVALUES_OPENBSD,
    TMP_OSTYPEVALUES_DRAGONFLYBSD,
    TMP_OSTYPEVALUES_HPUX,
    TMP_OSTYPEVALUES_AIX,
    TMP_OSTYPEVALUES_SOLARIS,
    TMP_OSTYPEVALUES_Z_OS
  ]);
  var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = "cpp";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = "dotnet";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = "erlang";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = "go";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = "java";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = "nodejs";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = "php";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = "python";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = "ruby";
  var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = "webjs";
  exports.TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
  exports.TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
  exports.TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
  exports.TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
  exports.TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
  exports.TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
  exports.TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
  exports.TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
  exports.TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
  exports.TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
  exports.TelemetrySdkLanguageValues = /* @__PURE__ */ (0, utils_1.createConstMap)([
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
  ]);
});

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/resource/index.js
var require_resource3 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_SemanticResourceAttributes3(), exports);
});

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/stable_attributes.js
var require_stable_attributes3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HTTP_REQUEST_METHOD_VALUE_POST = exports.HTTP_REQUEST_METHOD_VALUE_PATCH = exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = exports.HTTP_REQUEST_METHOD_VALUE_HEAD = exports.HTTP_REQUEST_METHOD_VALUE_GET = exports.HTTP_REQUEST_METHOD_VALUE_DELETE = exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = exports.HTTP_REQUEST_METHOD_VALUE_OTHER = exports.ATTR_HTTP_REQUEST_METHOD = exports.ATTR_HTTP_REQUEST_HEADER = exports.ATTR_EXCEPTION_TYPE = exports.ATTR_EXCEPTION_STACKTRACE = exports.ATTR_EXCEPTION_MESSAGE = exports.ATTR_EXCEPTION_ESCAPED = exports.ERROR_TYPE_VALUE_OTHER = exports.ATTR_ERROR_TYPE = exports.ATTR_CLIENT_PORT = exports.ATTR_CLIENT_ADDRESS = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = exports.ATTR_TELEMETRY_SDK_VERSION = exports.ATTR_TELEMETRY_SDK_NAME = exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = exports.ATTR_TELEMETRY_SDK_LANGUAGE = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = undefined;
  exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = exports.ATTR_SIGNALR_CONNECTION_STATUS = exports.ATTR_SERVICE_VERSION = exports.ATTR_SERVICE_NAME = exports.ATTR_SERVER_PORT = exports.ATTR_SERVER_ADDRESS = exports.ATTR_OTEL_STATUS_DESCRIPTION = exports.OTEL_STATUS_CODE_VALUE_OK = exports.OTEL_STATUS_CODE_VALUE_ERROR = exports.ATTR_OTEL_STATUS_CODE = exports.ATTR_OTEL_SCOPE_VERSION = exports.ATTR_OTEL_SCOPE_NAME = exports.NETWORK_TYPE_VALUE_IPV6 = exports.NETWORK_TYPE_VALUE_IPV4 = exports.ATTR_NETWORK_TYPE = exports.NETWORK_TRANSPORT_VALUE_UNIX = exports.NETWORK_TRANSPORT_VALUE_UDP = exports.NETWORK_TRANSPORT_VALUE_TCP = exports.NETWORK_TRANSPORT_VALUE_QUIC = exports.NETWORK_TRANSPORT_VALUE_PIPE = exports.ATTR_NETWORK_TRANSPORT = exports.ATTR_NETWORK_PROTOCOL_VERSION = exports.ATTR_NETWORK_PROTOCOL_NAME = exports.ATTR_NETWORK_PEER_PORT = exports.ATTR_NETWORK_PEER_ADDRESS = exports.ATTR_NETWORK_LOCAL_PORT = exports.ATTR_NETWORK_LOCAL_ADDRESS = exports.JVM_THREAD_STATE_VALUE_WAITING = exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = exports.JVM_THREAD_STATE_VALUE_TERMINATED = exports.JVM_THREAD_STATE_VALUE_RUNNABLE = exports.JVM_THREAD_STATE_VALUE_NEW = exports.JVM_THREAD_STATE_VALUE_BLOCKED = exports.ATTR_JVM_THREAD_STATE = exports.ATTR_JVM_THREAD_DAEMON = exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = exports.JVM_MEMORY_TYPE_VALUE_HEAP = exports.ATTR_JVM_MEMORY_TYPE = exports.ATTR_JVM_MEMORY_POOL_NAME = exports.ATTR_JVM_GC_NAME = exports.ATTR_JVM_GC_ACTION = exports.ATTR_HTTP_ROUTE = exports.ATTR_HTTP_RESPONSE_STATUS_CODE = exports.ATTR_HTTP_RESPONSE_HEADER = exports.ATTR_HTTP_REQUEST_RESEND_COUNT = exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = exports.HTTP_REQUEST_METHOD_VALUE_TRACE = exports.HTTP_REQUEST_METHOD_VALUE_PUT = undefined;
  exports.ATTR_USER_AGENT_ORIGINAL = exports.ATTR_URL_SCHEME = exports.ATTR_URL_QUERY = exports.ATTR_URL_PATH = exports.ATTR_URL_FULL = exports.ATTR_URL_FRAGMENT = exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = exports.ATTR_SIGNALR_TRANSPORT = undefined;
  exports.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
  exports.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
  exports.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
  exports.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
  exports.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  exports.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  exports.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
  exports.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
  exports.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
  exports.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
  exports.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
  exports.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
  exports.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
  exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
  exports.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
  exports.ATTR_CLIENT_ADDRESS = "client.address";
  exports.ATTR_CLIENT_PORT = "client.port";
  exports.ATTR_ERROR_TYPE = "error.type";
  exports.ERROR_TYPE_VALUE_OTHER = "_OTHER";
  exports.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
  exports.ATTR_EXCEPTION_MESSAGE = "exception.message";
  exports.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
  exports.ATTR_EXCEPTION_TYPE = "exception.type";
  var ATTR_HTTP_REQUEST_HEADER = (key) => `http.request.header.${key}`;
  exports.ATTR_HTTP_REQUEST_HEADER = ATTR_HTTP_REQUEST_HEADER;
  exports.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
  exports.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
  exports.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
  exports.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
  exports.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
  exports.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
  exports.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
  exports.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
  exports.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
  exports.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
  exports.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
  exports.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
  exports.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
  var ATTR_HTTP_RESPONSE_HEADER = (key) => `http.response.header.${key}`;
  exports.ATTR_HTTP_RESPONSE_HEADER = ATTR_HTTP_RESPONSE_HEADER;
  exports.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
  exports.ATTR_HTTP_ROUTE = "http.route";
  exports.ATTR_JVM_GC_ACTION = "jvm.gc.action";
  exports.ATTR_JVM_GC_NAME = "jvm.gc.name";
  exports.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
  exports.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
  exports.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
  exports.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
  exports.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
  exports.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
  exports.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
  exports.JVM_THREAD_STATE_VALUE_NEW = "new";
  exports.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
  exports.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
  exports.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
  exports.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
  exports.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
  exports.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
  exports.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
  exports.ATTR_NETWORK_PEER_PORT = "network.peer.port";
  exports.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
  exports.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
  exports.ATTR_NETWORK_TRANSPORT = "network.transport";
  exports.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
  exports.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
  exports.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
  exports.NETWORK_TRANSPORT_VALUE_UDP = "udp";
  exports.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
  exports.ATTR_NETWORK_TYPE = "network.type";
  exports.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
  exports.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
  exports.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
  exports.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
  exports.ATTR_OTEL_STATUS_CODE = "otel.status_code";
  exports.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
  exports.OTEL_STATUS_CODE_VALUE_OK = "OK";
  exports.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
  exports.ATTR_SERVER_ADDRESS = "server.address";
  exports.ATTR_SERVER_PORT = "server.port";
  exports.ATTR_SERVICE_NAME = "service.name";
  exports.ATTR_SERVICE_VERSION = "service.version";
  exports.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
  exports.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
  exports.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
  exports.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
  exports.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
  exports.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
  exports.ATTR_URL_FRAGMENT = "url.fragment";
  exports.ATTR_URL_FULL = "url.full";
  exports.ATTR_URL_PATH = "url.path";
  exports.ATTR_URL_QUERY = "url.query";
  exports.ATTR_URL_SCHEME = "url.scheme";
  exports.ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
});

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/stable_metrics.js
var require_stable_metrics3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = exports.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = exports.METRIC_KESTREL_UPGRADED_CONNECTIONS = exports.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = exports.METRIC_KESTREL_REJECTED_CONNECTIONS = exports.METRIC_KESTREL_QUEUED_REQUESTS = exports.METRIC_KESTREL_QUEUED_CONNECTIONS = exports.METRIC_KESTREL_CONNECTION_DURATION = exports.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = exports.METRIC_KESTREL_ACTIVE_CONNECTIONS = exports.METRIC_JVM_THREAD_COUNT = exports.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = exports.METRIC_JVM_MEMORY_USED = exports.METRIC_JVM_MEMORY_LIMIT = exports.METRIC_JVM_MEMORY_COMMITTED = exports.METRIC_JVM_GC_DURATION = exports.METRIC_JVM_CPU_TIME = exports.METRIC_JVM_CPU_RECENT_UTILIZATION = exports.METRIC_JVM_CPU_COUNT = exports.METRIC_JVM_CLASS_UNLOADED = exports.METRIC_JVM_CLASS_LOADED = exports.METRIC_JVM_CLASS_COUNT = exports.METRIC_HTTP_SERVER_REQUEST_DURATION = exports.METRIC_HTTP_CLIENT_REQUEST_DURATION = exports.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = exports.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = exports.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = exports.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = undefined;
  exports.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
  exports.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
  exports.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
  exports.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
  exports.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
  exports.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
  exports.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
  exports.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
  exports.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
  exports.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
  exports.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
  exports.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
  exports.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
  exports.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
  exports.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
  exports.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
  exports.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
  exports.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
  exports.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
  exports.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
  exports.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
  exports.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
  exports.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
  exports.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
  exports.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
  exports.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
  exports.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
});

// node_modules/@opentelemetry/core/node_modules/@opentelemetry/semantic-conventions/build/src/index.js
var require_src4 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_trace3(), exports);
  __exportStar(require_resource3(), exports);
  __exportStar(require_stable_attributes3(), exports);
  __exportStar(require_stable_metrics3(), exports);
});

// node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js
var import_semantic_conventions2, _a, SDK_INFO2;
var init_sdk_info = __esm(() => {
  init_version();
  import_semantic_conventions2 = __toESM(require_src4(), 1);
  SDK_INFO2 = (_a = {}, _a[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_NAME] = "opentelemetry", _a[import_semantic_conventions2.SEMRESATTRS_PROCESS_RUNTIME_NAME] = "node", _a[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE] = import_semantic_conventions2.TELEMETRYSDKLANGUAGEVALUES_NODEJS, _a[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_VERSION] = VERSION, _a);
});

// node_modules/@opentelemetry/core/build/esm/platform/node/timer-util.js
function unrefTimer(timer) {
  timer.unref();
}
var init_timer_util = () => {};

// node_modules/@opentelemetry/core/build/esm/platform/node/index.js
var init_node4 = __esm(() => {
  init_environment3();
  init_performance();
  init_sdk_info();
  init_timer_util();
});

// node_modules/@opentelemetry/core/build/esm/platform/index.js
var init_platform5 = __esm(() => {
  init_node4();
});

// node_modules/@opentelemetry/core/build/esm/common/time.js
function millisToHrTime(epochMillis) {
  var epochSeconds = epochMillis / 1000;
  var seconds = Math.trunc(epochSeconds);
  var nanos = Math.round(epochMillis % 1000 * MILLISECONDS_TO_NANOSECONDS);
  return [seconds, nanos];
}
function getTimeOrigin() {
  var timeOrigin = otperformance2.timeOrigin;
  if (typeof timeOrigin !== "number") {
    var perf = otperformance2;
    timeOrigin = perf.timing && perf.timing.fetchStart;
  }
  return timeOrigin;
}
function hrTime(performanceNow) {
  var timeOrigin = millisToHrTime(getTimeOrigin());
  var now = millisToHrTime(typeof performanceNow === "number" ? performanceNow : otperformance2.now());
  return addHrTimes(timeOrigin, now);
}
function timeInputToHrTime(time) {
  if (isTimeInputHrTime(time)) {
    return time;
  } else if (typeof time === "number") {
    if (time < getTimeOrigin()) {
      return hrTime(time);
    } else {
      return millisToHrTime(time);
    }
  } else if (time instanceof Date) {
    return millisToHrTime(time.getTime());
  } else {
    throw TypeError("Invalid input type");
  }
}
function hrTimeDuration(startTime, endTime) {
  var seconds = endTime[0] - startTime[0];
  var nanos = endTime[1] - startTime[1];
  if (nanos < 0) {
    seconds -= 1;
    nanos += SECOND_TO_NANOSECONDS;
  }
  return [seconds, nanos];
}
function hrTimeToMicroseconds(time) {
  return time[0] * 1e6 + time[1] / 1000;
}
function isTimeInputHrTime(value) {
  return Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number";
}
function isTimeInput(value) {
  return isTimeInputHrTime(value) || typeof value === "number" || value instanceof Date;
}
function addHrTimes(time1, time2) {
  var out = [time1[0] + time2[0], time1[1] + time2[1]];
  if (out[1] >= SECOND_TO_NANOSECONDS) {
    out[1] -= SECOND_TO_NANOSECONDS;
    out[0] += 1;
  }
  return out;
}
var NANOSECOND_DIGITS = 9, NANOSECOND_DIGITS_IN_MILLIS = 6, MILLISECONDS_TO_NANOSECONDS, SECOND_TO_NANOSECONDS;
var init_time = __esm(() => {
  init_platform5();
  MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
  SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
});

// node_modules/@opentelemetry/core/build/esm/ExportResult.js
var ExportResultCode;
var init_ExportResult = __esm(() => {
  (function(ExportResultCode2) {
    ExportResultCode2[ExportResultCode2["SUCCESS"] = 0] = "SUCCESS";
    ExportResultCode2[ExportResultCode2["FAILED"] = 1] = "FAILED";
  })(ExportResultCode || (ExportResultCode = {}));
});

// node_modules/@opentelemetry/core/build/esm/propagation/composite.js
var import_api9, __values2 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = undefined;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, CompositePropagator;
var init_composite = __esm(() => {
  import_api9 = __toESM(require_src(), 1);
  CompositePropagator = function() {
    function CompositePropagator2(config) {
      if (config === undefined) {
        config = {};
      }
      var _a2;
      this._propagators = (_a2 = config.propagators) !== null && _a2 !== undefined ? _a2 : [];
      this._fields = Array.from(new Set(this._propagators.map(function(p) {
        return typeof p.fields === "function" ? p.fields() : [];
      }).reduce(function(x, y) {
        return x.concat(y);
      }, [])));
    }
    CompositePropagator2.prototype.inject = function(context, carrier, setter) {
      var e_1, _a2;
      try {
        for (var _b = __values2(this._propagators), _c = _b.next();!_c.done; _c = _b.next()) {
          var propagator = _c.value;
          try {
            propagator.inject(context, carrier, setter);
          } catch (err) {
            import_api9.diag.warn("Failed to inject with " + propagator.constructor.name + ". Err: " + err.message);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    CompositePropagator2.prototype.extract = function(context, carrier, getter) {
      return this._propagators.reduce(function(ctx, propagator) {
        try {
          return propagator.extract(ctx, carrier, getter);
        } catch (err) {
          import_api9.diag.warn("Failed to extract with " + propagator.constructor.name + ". Err: " + err.message);
        }
        return ctx;
      }, context);
    };
    CompositePropagator2.prototype.fields = function() {
      return this._fields.slice();
    };
    return CompositePropagator2;
  }();
});

// node_modules/@opentelemetry/core/build/esm/internal/validators.js
function validateKey(key) {
  return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
  return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]", VALID_KEY, VALID_VENDOR_KEY, VALID_KEY_REGEX, VALID_VALUE_BASE_REGEX, INVALID_VALUE_COMMA_EQUAL_REGEX;
var init_validators = __esm(() => {
  VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
  VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
  VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
  VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
  INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
});

// node_modules/@opentelemetry/core/build/esm/trace/TraceState.js
var MAX_TRACE_STATE_ITEMS = 32, MAX_TRACE_STATE_LEN = 512, LIST_MEMBERS_SEPARATOR = ",", LIST_MEMBER_KEY_VALUE_SPLITTER = "=", TraceState;
var init_TraceState = __esm(() => {
  init_validators();
  TraceState = function() {
    function TraceState2(rawTraceState) {
      this._internalState = new Map;
      if (rawTraceState)
        this._parse(rawTraceState);
    }
    TraceState2.prototype.set = function(key, value) {
      var traceState = this._clone();
      if (traceState._internalState.has(key)) {
        traceState._internalState.delete(key);
      }
      traceState._internalState.set(key, value);
      return traceState;
    };
    TraceState2.prototype.unset = function(key) {
      var traceState = this._clone();
      traceState._internalState.delete(key);
      return traceState;
    };
    TraceState2.prototype.get = function(key) {
      return this._internalState.get(key);
    };
    TraceState2.prototype.serialize = function() {
      var _this = this;
      return this._keys().reduce(function(agg, key) {
        agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
        return agg;
      }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceState2.prototype._parse = function(rawTraceState) {
      if (rawTraceState.length > MAX_TRACE_STATE_LEN)
        return;
      this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse().reduce(function(agg, part) {
        var listMember = part.trim();
        var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
        if (i !== -1) {
          var key = listMember.slice(0, i);
          var value = listMember.slice(i + 1, part.length);
          if (validateKey(key) && validateValue(value)) {
            agg.set(key, value);
          } else {}
        }
        return agg;
      }, new Map);
      if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
      }
    };
    TraceState2.prototype._keys = function() {
      return Array.from(this._internalState.keys()).reverse();
    };
    TraceState2.prototype._clone = function() {
      var traceState = new TraceState2;
      traceState._internalState = new Map(this._internalState);
      return traceState;
    };
    return TraceState2;
  }();
});

// node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js
function parseTraceParent(traceParent) {
  var match = TRACE_PARENT_REGEX.exec(traceParent);
  if (!match)
    return null;
  if (match[1] === "00" && match[5])
    return null;
  return {
    traceId: match[2],
    spanId: match[3],
    traceFlags: parseInt(match[4], 16)
  };
}
var import_api10, TRACE_PARENT_HEADER = "traceparent", TRACE_STATE_HEADER = "tracestate", VERSION2 = "00", VERSION_PART = "(?!ff)[\\da-f]{2}", TRACE_ID_PART = "(?![0]{32})[\\da-f]{32}", PARENT_ID_PART = "(?![0]{16})[\\da-f]{16}", FLAGS_PART = "[\\da-f]{2}", TRACE_PARENT_REGEX, W3CTraceContextPropagator;
var init_W3CTraceContextPropagator = __esm(() => {
  init_suppress_tracing();
  init_TraceState();
  import_api10 = __toESM(require_src(), 1);
  TRACE_PARENT_REGEX = new RegExp("^\\s?(" + VERSION_PART + ")-(" + TRACE_ID_PART + ")-(" + PARENT_ID_PART + ")-(" + FLAGS_PART + ")(-.*)?\\s?$");
  W3CTraceContextPropagator = function() {
    function W3CTraceContextPropagator2() {}
    W3CTraceContextPropagator2.prototype.inject = function(context, carrier, setter) {
      var spanContext = import_api10.trace.getSpanContext(context);
      if (!spanContext || isTracingSuppressed(context) || !import_api10.isSpanContextValid(spanContext))
        return;
      var traceParent = VERSION2 + "-" + spanContext.traceId + "-" + spanContext.spanId + "-0" + Number(spanContext.traceFlags || import_api10.TraceFlags.NONE).toString(16);
      setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
      if (spanContext.traceState) {
        setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
      }
    };
    W3CTraceContextPropagator2.prototype.extract = function(context, carrier, getter) {
      var traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
      if (!traceParentHeader)
        return context;
      var traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
      if (typeof traceParent !== "string")
        return context;
      var spanContext = parseTraceParent(traceParent);
      if (!spanContext)
        return context;
      spanContext.isRemote = true;
      var traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
      if (traceStateHeader) {
        var state = Array.isArray(traceStateHeader) ? traceStateHeader.join(",") : traceStateHeader;
        spanContext.traceState = new TraceState(typeof state === "string" ? state : undefined);
      }
      return import_api10.trace.setSpanContext(context, spanContext);
    };
    W3CTraceContextPropagator2.prototype.fields = function() {
      return [TRACE_PARENT_HEADER, TRACE_STATE_HEADER];
    };
    return W3CTraceContextPropagator2;
  }();
});

// node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function isPlainObject2(value) {
  if (!isObjectLike(value) || baseGetTag(value) !== objectTag2) {
    return false;
  }
  var proto2 = getPrototype2(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty4.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString2.call(Ctor) === objectCtorString2;
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function getRawTag(value) {
  var isOwn = hasOwnProperty4.call(value, symToStringTag), tag = value[symToStringTag];
  var unmasked = false;
  try {
    value[symToStringTag] = undefined;
    unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var objectTag2 = "[object Object]", nullTag = "[object Null]", undefinedTag = "[object Undefined]", funcProto2, funcToString2, objectCtorString2, getPrototype2, objectProto4, hasOwnProperty4, symToStringTag, nativeObjectToString;
var init_lodash_merge = __esm(() => {
  funcProto2 = Function.prototype;
  funcToString2 = funcProto2.toString;
  objectCtorString2 = funcToString2.call(Object);
  getPrototype2 = overArg(Object.getPrototypeOf, Object);
  objectProto4 = Object.prototype;
  hasOwnProperty4 = objectProto4.hasOwnProperty;
  symToStringTag = Symbol ? Symbol.toStringTag : undefined;
  nativeObjectToString = objectProto4.toString;
});

// node_modules/@opentelemetry/core/build/esm/utils/merge.js
function merge() {
  var args = [];
  for (var _i = 0;_i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var result = args.shift();
  var objects = new WeakMap;
  while (args.length > 0) {
    result = mergeTwoObjects(result, args.shift(), 0, objects);
  }
  return result;
}
function takeValue(value) {
  if (isArray(value)) {
    return value.slice();
  }
  return value;
}
function mergeTwoObjects(one, two, level, objects) {
  if (level === undefined) {
    level = 0;
  }
  var result;
  if (level > MAX_LEVEL) {
    return;
  }
  level++;
  if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
    result = takeValue(two);
  } else if (isArray(one)) {
    result = one.slice();
    if (isArray(two)) {
      for (var i = 0, j = two.length;i < j; i++) {
        result.push(takeValue(two[i]));
      }
    } else if (isObject(two)) {
      var keys = Object.keys(two);
      for (var i = 0, j = keys.length;i < j; i++) {
        var key = keys[i];
        result[key] = takeValue(two[key]);
      }
    }
  } else if (isObject(one)) {
    if (isObject(two)) {
      if (!shouldMerge(one, two)) {
        return two;
      }
      result = Object.assign({}, one);
      var keys = Object.keys(two);
      for (var i = 0, j = keys.length;i < j; i++) {
        var key = keys[i];
        var twoValue = two[key];
        if (isPrimitive(twoValue)) {
          if (typeof twoValue === "undefined") {
            delete result[key];
          } else {
            result[key] = twoValue;
          }
        } else {
          var obj1 = result[key];
          var obj2 = twoValue;
          if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) {
            delete result[key];
          } else {
            if (isObject(obj1) && isObject(obj2)) {
              var arr1 = objects.get(obj1) || [];
              var arr2 = objects.get(obj2) || [];
              arr1.push({ obj: one, key });
              arr2.push({ obj: two, key });
              objects.set(obj1, arr1);
              objects.set(obj2, arr2);
            }
            result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
          }
        }
      }
    } else {
      result = two;
    }
  }
  return result;
}
function wasObjectReferenced(obj, key, objects) {
  var arr = objects.get(obj[key]) || [];
  for (var i = 0, j = arr.length;i < j; i++) {
    var info = arr[i];
    if (info.key === key && info.obj === obj) {
      return true;
    }
  }
  return false;
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === "object";
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
  if (!isPlainObject2(one) || !isPlainObject2(two)) {
    return false;
  }
  return true;
}
var MAX_LEVEL = 20;
var init_merge = __esm(() => {
  init_lodash_merge();
});

// node_modules/@opentelemetry/core/build/esm/utils/timeout.js
function callWithTimeout(promise, timeout) {
  var timeoutHandle;
  var timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
    timeoutHandle = setTimeout(function timeoutHandler() {
      reject(new TimeoutError("Operation timed out."));
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise]).then(function(result) {
    clearTimeout(timeoutHandle);
    return result;
  }, function(reason) {
    clearTimeout(timeoutHandle);
    throw reason;
  });
}
var __extends, TimeoutError;
var init_timeout = __esm(() => {
  __extends = function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  TimeoutError = function(_super) {
    __extends(TimeoutError2, _super);
    function TimeoutError2(message) {
      var _this = _super.call(this, message) || this;
      Object.setPrototypeOf(_this, TimeoutError2.prototype);
      return _this;
    }
    return TimeoutError2;
  }(Error);
});

// node_modules/@opentelemetry/core/build/esm/utils/promise.js
var Deferred;
var init_promise = __esm(() => {
  Deferred = function() {
    function Deferred2() {
      var _this = this;
      this._promise = new Promise(function(resolve2, reject) {
        _this._resolve = resolve2;
        _this._reject = reject;
      });
    }
    Object.defineProperty(Deferred2.prototype, "promise", {
      get: function() {
        return this._promise;
      },
      enumerable: false,
      configurable: true
    });
    Deferred2.prototype.resolve = function(val) {
      this._resolve(val);
    };
    Deferred2.prototype.reject = function(err) {
      this._reject(err);
    };
    return Deferred2;
  }();
});

// node_modules/@opentelemetry/core/build/esm/utils/callback.js
var __read3 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}, __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, BindOnceFuture;
var init_callback = __esm(() => {
  init_promise();
  BindOnceFuture = function() {
    function BindOnceFuture2(_callback, _that) {
      this._callback = _callback;
      this._that = _that;
      this._isCalled = false;
      this._deferred = new Deferred;
    }
    Object.defineProperty(BindOnceFuture2.prototype, "isCalled", {
      get: function() {
        return this._isCalled;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BindOnceFuture2.prototype, "promise", {
      get: function() {
        return this._deferred.promise;
      },
      enumerable: false,
      configurable: true
    });
    BindOnceFuture2.prototype.call = function() {
      var _a2;
      var _this = this;
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (!this._isCalled) {
        this._isCalled = true;
        try {
          Promise.resolve((_a2 = this._callback).call.apply(_a2, __spreadArray([this._that], __read3(args), false))).then(function(val) {
            return _this._deferred.resolve(val);
          }, function(err) {
            return _this._deferred.reject(err);
          });
        } catch (err) {
          this._deferred.reject(err);
        }
      }
      return this._deferred.promise;
    };
    return BindOnceFuture2;
  }();
});

// node_modules/@opentelemetry/core/build/esm/internal/exporter.js
function _export(exporter, arg) {
  return new Promise(function(resolve2) {
    import_api11.context.with(suppressTracing(import_api11.context.active()), function() {
      exporter.export(arg, function(result) {
        resolve2(result);
      });
    });
  });
}
var import_api11;
var init_exporter = __esm(() => {
  init_suppress_tracing();
  import_api11 = __toESM(require_src(), 1);
});

// node_modules/@opentelemetry/core/build/esm/index.js
var internal;
var init_esm5 = __esm(() => {
  init_W3CBaggagePropagator();
  init_attributes();
  init_global_error_handler();
  init_time();
  init_ExportResult();
  init_platform5();
  init_composite();
  init_W3CTraceContextPropagator();
  init_suppress_tracing();
  init_environment2();
  init_merge();
  init_sampling();
  init_timeout();
  init_callback();
  init_exporter();
  internal = {
    _export
  };
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js
function defaultServiceName2() {
  return "unknown_service:" + process.argv0;
}
var init_default_service_name = () => {};

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/build/esm/platform/node/index.js
var init_node5 = __esm(() => {
  init_default_service_name();
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/build/esm/platform/index.js
var init_platform6 = __esm(() => {
  init_node5();
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/build/esm/Resource.js
var import_api12, import_semantic_conventions3, __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length;i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
}, __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : undefined, done: true };
  }
}, __read4 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}, Resource;
var init_Resource = __esm(() => {
  init_esm5();
  init_platform6();
  import_api12 = __toESM(require_src(), 1);
  import_semantic_conventions3 = __toESM(require_src3(), 1);
  Resource = function() {
    function Resource2(attributes, asyncAttributesPromise) {
      var _this = this;
      var _a2;
      this._attributes = attributes;
      this.asyncAttributesPending = asyncAttributesPromise != null;
      this._syncAttributes = (_a2 = this._attributes) !== null && _a2 !== undefined ? _a2 : {};
      this._asyncAttributesPromise = asyncAttributesPromise === null || asyncAttributesPromise === undefined ? undefined : asyncAttributesPromise.then(function(asyncAttributes) {
        _this._attributes = Object.assign({}, _this._attributes, asyncAttributes);
        _this.asyncAttributesPending = false;
        return asyncAttributes;
      }, function(err) {
        import_api12.diag.debug("a resource's async attributes promise rejected: %s", err);
        _this.asyncAttributesPending = false;
        return {};
      });
    }
    Resource2.empty = function() {
      return Resource2.EMPTY;
    };
    Resource2.default = function() {
      var _a2;
      return new Resource2((_a2 = {}, _a2[import_semantic_conventions3.SEMRESATTRS_SERVICE_NAME] = defaultServiceName2(), _a2[import_semantic_conventions3.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE] = SDK_INFO2[import_semantic_conventions3.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE], _a2[import_semantic_conventions3.SEMRESATTRS_TELEMETRY_SDK_NAME] = SDK_INFO2[import_semantic_conventions3.SEMRESATTRS_TELEMETRY_SDK_NAME], _a2[import_semantic_conventions3.SEMRESATTRS_TELEMETRY_SDK_VERSION] = SDK_INFO2[import_semantic_conventions3.SEMRESATTRS_TELEMETRY_SDK_VERSION], _a2));
    };
    Object.defineProperty(Resource2.prototype, "attributes", {
      get: function() {
        var _a2;
        if (this.asyncAttributesPending) {
          import_api12.diag.error("Accessing resource attributes before async attributes settled");
        }
        return (_a2 = this._attributes) !== null && _a2 !== undefined ? _a2 : {};
      },
      enumerable: false,
      configurable: true
    });
    Resource2.prototype.waitForAsyncAttributes = function() {
      return __awaiter(this, undefined, undefined, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (!this.asyncAttributesPending)
                return [3, 2];
              return [4, this._asyncAttributesPromise];
            case 1:
              _a2.sent();
              _a2.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    Resource2.prototype.merge = function(other) {
      var _this = this;
      var _a2;
      if (!other)
        return this;
      var mergedSyncAttributes = __assign(__assign({}, this._syncAttributes), (_a2 = other._syncAttributes) !== null && _a2 !== undefined ? _a2 : other.attributes);
      if (!this._asyncAttributesPromise && !other._asyncAttributesPromise) {
        return new Resource2(mergedSyncAttributes);
      }
      var mergedAttributesPromise = Promise.all([
        this._asyncAttributesPromise,
        other._asyncAttributesPromise
      ]).then(function(_a3) {
        var _b;
        var _c = __read4(_a3, 2), thisAsyncAttributes = _c[0], otherAsyncAttributes = _c[1];
        return __assign(__assign(__assign(__assign({}, _this._syncAttributes), thisAsyncAttributes), (_b = other._syncAttributes) !== null && _b !== undefined ? _b : other.attributes), otherAsyncAttributes);
      });
      return new Resource2(mergedSyncAttributes, mergedAttributesPromise);
    };
    Resource2.EMPTY = new Resource2({});
    return Resource2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/node_modules/@opentelemetry/resources/build/esm/index.js
var init_esm6 = __esm(() => {
  init_Resource();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/LogRecord.js
var import_api13, api, __values3 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = undefined;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, __read5 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}, LogRecord;
var init_LogRecord = __esm(() => {
  init_esm5();
  import_api13 = __toESM(require_src(), 1);
  api = __toESM(require_src(), 1);
  LogRecord = function() {
    function LogRecord2(_sharedState, instrumentationScope, logRecord) {
      this.attributes = {};
      this.totalAttributesCount = 0;
      this._isReadonly = false;
      var { timestamp, observedTimestamp, severityNumber, severityText, body, attributes: _a2 } = logRecord, attributes = _a2 === undefined ? {} : _a2, context2 = logRecord.context;
      var now = Date.now();
      this.hrTime = timeInputToHrTime(timestamp !== null && timestamp !== undefined ? timestamp : now);
      this.hrTimeObserved = timeInputToHrTime(observedTimestamp !== null && observedTimestamp !== undefined ? observedTimestamp : now);
      if (context2) {
        var spanContext = api.trace.getSpanContext(context2);
        if (spanContext && api.isSpanContextValid(spanContext)) {
          this.spanContext = spanContext;
        }
      }
      this.severityNumber = severityNumber;
      this.severityText = severityText;
      this.body = body;
      this.resource = _sharedState.resource;
      this.instrumentationScope = instrumentationScope;
      this._logRecordLimits = _sharedState.logRecordLimits;
      this.setAttributes(attributes);
    }
    Object.defineProperty(LogRecord2.prototype, "severityText", {
      get: function() {
        return this._severityText;
      },
      set: function(severityText) {
        if (this._isLogRecordReadonly()) {
          return;
        }
        this._severityText = severityText;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LogRecord2.prototype, "severityNumber", {
      get: function() {
        return this._severityNumber;
      },
      set: function(severityNumber) {
        if (this._isLogRecordReadonly()) {
          return;
        }
        this._severityNumber = severityNumber;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LogRecord2.prototype, "body", {
      get: function() {
        return this._body;
      },
      set: function(body) {
        if (this._isLogRecordReadonly()) {
          return;
        }
        this._body = body;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(LogRecord2.prototype, "droppedAttributesCount", {
      get: function() {
        return this.totalAttributesCount - Object.keys(this.attributes).length;
      },
      enumerable: false,
      configurable: true
    });
    LogRecord2.prototype.setAttribute = function(key, value) {
      if (this._isLogRecordReadonly()) {
        return this;
      }
      if (value === null) {
        return this;
      }
      if (key.length === 0) {
        api.diag.warn("Invalid attribute key: " + key);
        return this;
      }
      if (!isAttributeValue(value) && !(typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0)) {
        api.diag.warn("Invalid attribute value set for key: " + key);
        return this;
      }
      this.totalAttributesCount += 1;
      if (Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
        if (this.droppedAttributesCount === 1) {
          api.diag.warn("Dropping extra attributes.");
        }
        return this;
      }
      if (isAttributeValue(value)) {
        this.attributes[key] = this._truncateToSize(value);
      } else {
        this.attributes[key] = value;
      }
      return this;
    };
    LogRecord2.prototype.setAttributes = function(attributes) {
      var e_1, _a2;
      try {
        for (var _b = __values3(Object.entries(attributes)), _c = _b.next();!_c.done; _c = _b.next()) {
          var _d = __read5(_c.value, 2), k = _d[0], v = _d[1];
          this.setAttribute(k, v);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return this;
    };
    LogRecord2.prototype.setBody = function(body) {
      this.body = body;
      return this;
    };
    LogRecord2.prototype.setSeverityNumber = function(severityNumber) {
      this.severityNumber = severityNumber;
      return this;
    };
    LogRecord2.prototype.setSeverityText = function(severityText) {
      this.severityText = severityText;
      return this;
    };
    LogRecord2.prototype._makeReadonly = function() {
      this._isReadonly = true;
    };
    LogRecord2.prototype._truncateToSize = function(value) {
      var _this = this;
      var limit = this._logRecordLimits.attributeValueLengthLimit;
      if (limit <= 0) {
        api.diag.warn("Attribute value limit must be positive, got " + limit);
        return value;
      }
      if (typeof value === "string") {
        return this._truncateToLimitUtil(value, limit);
      }
      if (Array.isArray(value)) {
        return value.map(function(val) {
          return typeof val === "string" ? _this._truncateToLimitUtil(val, limit) : val;
        });
      }
      return value;
    };
    LogRecord2.prototype._truncateToLimitUtil = function(value, limit) {
      if (value.length <= limit) {
        return value;
      }
      return value.substring(0, limit);
    };
    LogRecord2.prototype._isLogRecordReadonly = function() {
      if (this._isReadonly) {
        import_api13.diag.warn("Can not execute the operation on emitted log record");
      }
      return this._isReadonly;
    };
    return LogRecord2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/Logger.js
var import_api14, __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length;i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
}, Logger;
var init_Logger = __esm(() => {
  init_LogRecord();
  import_api14 = __toESM(require_src(), 1);
  Logger = function() {
    function Logger2(instrumentationScope, _sharedState) {
      this.instrumentationScope = instrumentationScope;
      this._sharedState = _sharedState;
    }
    Logger2.prototype.emit = function(logRecord) {
      var currentContext = logRecord.context || import_api14.context.active();
      var logRecordInstance = new LogRecord(this._sharedState, this.instrumentationScope, __assign2({ context: currentContext }, logRecord));
      this._sharedState.activeProcessor.onEmit(logRecordInstance, currentContext);
      logRecordInstance._makeReadonly();
    };
    return Logger2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/config.js
function loadDefaultConfig() {
  return {
    forceFlushTimeoutMillis: 30000,
    logRecordLimits: {
      attributeValueLengthLimit: getEnv().OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: getEnv().OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT
    },
    includeTraceContext: true,
    mergeResourceWithDefaults: true
  };
}
function reconfigureLimits(logRecordLimits) {
  var _a2, _b, _c, _d, _e, _f;
  var parsedEnvConfig = getEnvWithoutDefaults();
  return {
    attributeCountLimit: (_c = (_b = (_a2 = logRecordLimits.attributeCountLimit) !== null && _a2 !== undefined ? _a2 : parsedEnvConfig.OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT) !== null && _b !== undefined ? _b : parsedEnvConfig.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && _c !== undefined ? _c : DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    attributeValueLengthLimit: (_f = (_e = (_d = logRecordLimits.attributeValueLengthLimit) !== null && _d !== undefined ? _d : parsedEnvConfig.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _e !== undefined ? _e : parsedEnvConfig.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _f !== undefined ? _f : DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT
  };
}
var init_config2 = __esm(() => {
  init_esm5();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/MultiLogRecordProcessor.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : undefined, done: true };
  }
}, MultiLogRecordProcessor;
var init_MultiLogRecordProcessor = __esm(() => {
  init_esm5();
  MultiLogRecordProcessor = function() {
    function MultiLogRecordProcessor2(processors, forceFlushTimeoutMillis) {
      this.processors = processors;
      this.forceFlushTimeoutMillis = forceFlushTimeoutMillis;
    }
    MultiLogRecordProcessor2.prototype.forceFlush = function() {
      return __awaiter2(this, undefined, undefined, function() {
        var timeout;
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              timeout = this.forceFlushTimeoutMillis;
              return [4, Promise.all(this.processors.map(function(processor) {
                return callWithTimeout(processor.forceFlush(), timeout);
              }))];
            case 1:
              _a2.sent();
              return [2];
          }
        });
      });
    };
    MultiLogRecordProcessor2.prototype.onEmit = function(logRecord, context3) {
      this.processors.forEach(function(processors) {
        return processors.onEmit(logRecord, context3);
      });
    };
    MultiLogRecordProcessor2.prototype.shutdown = function() {
      return __awaiter2(this, undefined, undefined, function() {
        return __generator2(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, Promise.all(this.processors.map(function(processor) {
                return processor.shutdown();
              }))];
            case 1:
              _a2.sent();
              return [2];
          }
        });
      });
    };
    return MultiLogRecordProcessor2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/export/NoopLogRecordProcessor.js
var NoopLogRecordProcessor;
var init_NoopLogRecordProcessor = __esm(() => {
  NoopLogRecordProcessor = function() {
    function NoopLogRecordProcessor2() {}
    NoopLogRecordProcessor2.prototype.forceFlush = function() {
      return Promise.resolve();
    };
    NoopLogRecordProcessor2.prototype.onEmit = function(_logRecord, _context) {};
    NoopLogRecordProcessor2.prototype.shutdown = function() {
      return Promise.resolve();
    };
    return NoopLogRecordProcessor2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/internal/LoggerProviderSharedState.js
var LoggerProviderSharedState;
var init_LoggerProviderSharedState = __esm(() => {
  init_NoopLogRecordProcessor();
  LoggerProviderSharedState = function() {
    function LoggerProviderSharedState2(resource, forceFlushTimeoutMillis, logRecordLimits) {
      this.resource = resource;
      this.forceFlushTimeoutMillis = forceFlushTimeoutMillis;
      this.logRecordLimits = logRecordLimits;
      this.loggers = new Map;
      this.registeredLogRecordProcessors = [];
      this.activeProcessor = new NoopLogRecordProcessor;
    }
    return LoggerProviderSharedState2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/LoggerProvider.js
function prepareResource(mergeWithDefaults, providedResource) {
  var resource = providedResource !== null && providedResource !== undefined ? providedResource : Resource.empty();
  if (mergeWithDefaults) {
    return Resource.default().merge(resource);
  }
  return resource;
}
var import_api15, DEFAULT_LOGGER_NAME = "unknown", LoggerProvider;
var init_LoggerProvider = __esm(() => {
  init_esm4();
  init_esm6();
  init_esm5();
  init_Logger();
  init_config2();
  init_MultiLogRecordProcessor();
  init_LoggerProviderSharedState();
  import_api15 = __toESM(require_src(), 1);
  LoggerProvider = function() {
    function LoggerProvider2(config) {
      if (config === undefined) {
        config = {};
      }
      var mergedConfig = merge({}, loadDefaultConfig(), config);
      var resource = prepareResource(mergedConfig.mergeResourceWithDefaults, config.resource);
      this._sharedState = new LoggerProviderSharedState(resource, mergedConfig.forceFlushTimeoutMillis, reconfigureLimits(mergedConfig.logRecordLimits));
      this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
    }
    LoggerProvider2.prototype.getLogger = function(name, version, options) {
      if (this._shutdownOnce.isCalled) {
        import_api15.diag.warn("A shutdown LoggerProvider cannot provide a Logger");
        return NOOP_LOGGER;
      }
      if (!name) {
        import_api15.diag.warn("Logger requested without instrumentation scope name.");
      }
      var loggerName = name || DEFAULT_LOGGER_NAME;
      var key = loggerName + "@" + (version || "") + ":" + ((options === null || options === undefined ? undefined : options.schemaUrl) || "");
      if (!this._sharedState.loggers.has(key)) {
        this._sharedState.loggers.set(key, new Logger({ name: loggerName, version, schemaUrl: options === null || options === undefined ? undefined : options.schemaUrl }, this._sharedState));
      }
      return this._sharedState.loggers.get(key);
    };
    LoggerProvider2.prototype.addLogRecordProcessor = function(processor) {
      if (this._sharedState.registeredLogRecordProcessors.length === 0) {
        this._sharedState.activeProcessor.shutdown().catch(function(err) {
          return import_api15.diag.error("Error while trying to shutdown current log record processor", err);
        });
      }
      this._sharedState.registeredLogRecordProcessors.push(processor);
      this._sharedState.activeProcessor = new MultiLogRecordProcessor(this._sharedState.registeredLogRecordProcessors, this._sharedState.forceFlushTimeoutMillis);
    };
    LoggerProvider2.prototype.forceFlush = function() {
      if (this._shutdownOnce.isCalled) {
        import_api15.diag.warn("invalid attempt to force flush after LoggerProvider shutdown");
        return this._shutdownOnce.promise;
      }
      return this._sharedState.activeProcessor.forceFlush();
    };
    LoggerProvider2.prototype.shutdown = function() {
      if (this._shutdownOnce.isCalled) {
        import_api15.diag.warn("shutdown may only be called once per LoggerProvider");
        return this._shutdownOnce.promise;
      }
      return this._shutdownOnce.call();
    };
    LoggerProvider2.prototype._shutdown = function() {
      return this._sharedState.activeProcessor.shutdown();
    };
    return LoggerProvider2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/export/ConsoleLogRecordExporter.js
var __values4 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = undefined;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ConsoleLogRecordExporter;
var init_ConsoleLogRecordExporter = __esm(() => {
  init_esm5();
  init_esm5();
  ConsoleLogRecordExporter = function() {
    function ConsoleLogRecordExporter2() {}
    ConsoleLogRecordExporter2.prototype.export = function(logs2, resultCallback) {
      this._sendLogRecords(logs2, resultCallback);
    };
    ConsoleLogRecordExporter2.prototype.shutdown = function() {
      return Promise.resolve();
    };
    ConsoleLogRecordExporter2.prototype._exportInfo = function(logRecord) {
      var _a2, _b, _c;
      return {
        resource: {
          attributes: logRecord.resource.attributes
        },
        instrumentationScope: logRecord.instrumentationScope,
        timestamp: hrTimeToMicroseconds(logRecord.hrTime),
        traceId: (_a2 = logRecord.spanContext) === null || _a2 === undefined ? undefined : _a2.traceId,
        spanId: (_b = logRecord.spanContext) === null || _b === undefined ? undefined : _b.spanId,
        traceFlags: (_c = logRecord.spanContext) === null || _c === undefined ? undefined : _c.traceFlags,
        severityText: logRecord.severityText,
        severityNumber: logRecord.severityNumber,
        body: logRecord.body,
        attributes: logRecord.attributes
      };
    };
    ConsoleLogRecordExporter2.prototype._sendLogRecords = function(logRecords, done) {
      var e_1, _a2;
      try {
        for (var logRecords_1 = __values4(logRecords), logRecords_1_1 = logRecords_1.next();!logRecords_1_1.done; logRecords_1_1 = logRecords_1.next()) {
          var logRecord = logRecords_1_1.value;
          console.dir(this._exportInfo(logRecord), { depth: 3 });
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (logRecords_1_1 && !logRecords_1_1.done && (_a2 = logRecords_1.return))
            _a2.call(logRecords_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      done === null || done === undefined || done({ code: ExportResultCode.SUCCESS });
    };
    return ConsoleLogRecordExporter2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/export/BatchLogRecordProcessorBase.js
var import_api16, __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator3 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : undefined, done: true };
  }
}, BatchLogRecordProcessorBase;
var init_BatchLogRecordProcessorBase = __esm(() => {
  init_esm5();
  import_api16 = __toESM(require_src(), 1);
  BatchLogRecordProcessorBase = function() {
    function BatchLogRecordProcessorBase2(_exporter, config) {
      var _a2, _b, _c, _d;
      this._exporter = _exporter;
      this._finishedLogRecords = [];
      var env3 = getEnv();
      this._maxExportBatchSize = (_a2 = config === null || config === undefined ? undefined : config.maxExportBatchSize) !== null && _a2 !== undefined ? _a2 : env3.OTEL_BLRP_MAX_EXPORT_BATCH_SIZE;
      this._maxQueueSize = (_b = config === null || config === undefined ? undefined : config.maxQueueSize) !== null && _b !== undefined ? _b : env3.OTEL_BLRP_MAX_QUEUE_SIZE;
      this._scheduledDelayMillis = (_c = config === null || config === undefined ? undefined : config.scheduledDelayMillis) !== null && _c !== undefined ? _c : env3.OTEL_BLRP_SCHEDULE_DELAY;
      this._exportTimeoutMillis = (_d = config === null || config === undefined ? undefined : config.exportTimeoutMillis) !== null && _d !== undefined ? _d : env3.OTEL_BLRP_EXPORT_TIMEOUT;
      this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
      if (this._maxExportBatchSize > this._maxQueueSize) {
        import_api16.diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
        this._maxExportBatchSize = this._maxQueueSize;
      }
    }
    BatchLogRecordProcessorBase2.prototype.onEmit = function(logRecord) {
      if (this._shutdownOnce.isCalled) {
        return;
      }
      this._addToBuffer(logRecord);
    };
    BatchLogRecordProcessorBase2.prototype.forceFlush = function() {
      if (this._shutdownOnce.isCalled) {
        return this._shutdownOnce.promise;
      }
      return this._flushAll();
    };
    BatchLogRecordProcessorBase2.prototype.shutdown = function() {
      return this._shutdownOnce.call();
    };
    BatchLogRecordProcessorBase2.prototype._shutdown = function() {
      return __awaiter3(this, undefined, undefined, function() {
        return __generator3(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              this.onShutdown();
              return [4, this._flushAll()];
            case 1:
              _a2.sent();
              return [4, this._exporter.shutdown()];
            case 2:
              _a2.sent();
              return [2];
          }
        });
      });
    };
    BatchLogRecordProcessorBase2.prototype._addToBuffer = function(logRecord) {
      if (this._finishedLogRecords.length >= this._maxQueueSize) {
        return;
      }
      this._finishedLogRecords.push(logRecord);
      this._maybeStartTimer();
    };
    BatchLogRecordProcessorBase2.prototype._flushAll = function() {
      var _this = this;
      return new Promise(function(resolve2, reject) {
        var promises = [];
        var batchCount = Math.ceil(_this._finishedLogRecords.length / _this._maxExportBatchSize);
        for (var i = 0;i < batchCount; i++) {
          promises.push(_this._flushOneBatch());
        }
        Promise.all(promises).then(function() {
          resolve2();
        }).catch(reject);
      });
    };
    BatchLogRecordProcessorBase2.prototype._flushOneBatch = function() {
      var _this = this;
      this._clearTimer();
      if (this._finishedLogRecords.length === 0) {
        return Promise.resolve();
      }
      return new Promise(function(resolve2, reject) {
        callWithTimeout(_this._export(_this._finishedLogRecords.splice(0, _this._maxExportBatchSize)), _this._exportTimeoutMillis).then(function() {
          return resolve2();
        }).catch(reject);
      });
    };
    BatchLogRecordProcessorBase2.prototype._maybeStartTimer = function() {
      var _this = this;
      if (this._timer !== undefined) {
        return;
      }
      this._timer = setTimeout(function() {
        _this._flushOneBatch().then(function() {
          if (_this._finishedLogRecords.length > 0) {
            _this._clearTimer();
            _this._maybeStartTimer();
          }
        }).catch(function(e) {
          globalErrorHandler(e);
        });
      }, this._scheduledDelayMillis);
      unrefTimer(this._timer);
    };
    BatchLogRecordProcessorBase2.prototype._clearTimer = function() {
      if (this._timer !== undefined) {
        clearTimeout(this._timer);
        this._timer = undefined;
      }
    };
    BatchLogRecordProcessorBase2.prototype._export = function(logRecords) {
      var _this = this;
      var doExport = function() {
        return internal._export(_this._exporter, logRecords).then(function(result) {
          var _a2;
          if (result.code !== ExportResultCode.SUCCESS) {
            globalErrorHandler((_a2 = result.error) !== null && _a2 !== undefined ? _a2 : new Error("BatchLogRecordProcessor: log record export failed (status " + result + ")"));
          }
        }).catch(globalErrorHandler);
      };
      var pendingResources = logRecords.map(function(logRecord) {
        return logRecord.resource;
      }).filter(function(resource) {
        return resource.asyncAttributesPending;
      });
      if (pendingResources.length === 0) {
        return doExport();
      } else {
        return Promise.all(pendingResources.map(function(resource) {
          var _a2;
          return (_a2 = resource.waitForAsyncAttributes) === null || _a2 === undefined ? undefined : _a2.call(resource);
        })).then(doExport, globalErrorHandler);
      }
    };
    return BatchLogRecordProcessorBase2;
  }();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/platform/node/export/BatchLogRecordProcessor.js
var __extends2, BatchLogRecordProcessor;
var init_BatchLogRecordProcessor = __esm(() => {
  init_BatchLogRecordProcessorBase();
  __extends2 = function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  BatchLogRecordProcessor = function(_super) {
    __extends2(BatchLogRecordProcessor2, _super);
    function BatchLogRecordProcessor2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchLogRecordProcessor2.prototype.onShutdown = function() {};
    return BatchLogRecordProcessor2;
  }(BatchLogRecordProcessorBase);
});

// node_modules/@opentelemetry/sdk-logs/build/esm/platform/node/index.js
var init_node6 = __esm(() => {
  init_BatchLogRecordProcessor();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/platform/index.js
var init_platform7 = __esm(() => {
  init_node6();
});

// node_modules/@opentelemetry/sdk-logs/build/esm/index.js
var init_esm7 = __esm(() => {
  init_LoggerProvider();
  init_ConsoleLogRecordExporter();
  init_platform7();
});

// src/services/analytics/config.ts
function isAnalyticsDisabled() {
  return isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY) || isTelemetryDisabled();
}
function isFeedbackSurveyDisabled() {
  return isTelemetryDisabled();
}
var init_config3 = __esm(() => {
  init_envUtils();
  init_privacyLevel();
});

// src/types/generated/google/protobuf/timestamp.ts
function createBaseTimestamp() {
  return { seconds: 0, nanos: 0 };
}
function isSet(value) {
  return value !== null && value !== undefined;
}
var Timestamp;
var init_timestamp = __esm(() => {
  Timestamp = {
    fromJSON(object) {
      return {
        seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
        nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.seconds !== undefined) {
        obj.seconds = Math.round(message.seconds);
      }
      if (message.nanos !== undefined) {
        obj.nanos = Math.round(message.nanos);
      }
      return obj;
    },
    create(base) {
      return Timestamp.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseTimestamp();
      message.seconds = object.seconds ?? 0;
      message.nanos = object.nanos ?? 0;
      return message;
    }
  };
});

// src/types/generated/events_mono/common/v1/auth.ts
function createBasePublicApiAuth() {
  return { account_id: 0, organization_uuid: "", account_uuid: "" };
}
function isSet2(value) {
  return value !== null && value !== undefined;
}
var PublicApiAuth;
var init_auth = __esm(() => {
  PublicApiAuth = {
    fromJSON(object) {
      return {
        account_id: isSet2(object.account_id) ? globalThis.Number(object.account_id) : 0,
        organization_uuid: isSet2(object.organization_uuid) ? globalThis.String(object.organization_uuid) : "",
        account_uuid: isSet2(object.account_uuid) ? globalThis.String(object.account_uuid) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.account_id !== undefined) {
        obj.account_id = Math.round(message.account_id);
      }
      if (message.organization_uuid !== undefined) {
        obj.organization_uuid = message.organization_uuid;
      }
      if (message.account_uuid !== undefined) {
        obj.account_uuid = message.account_uuid;
      }
      return obj;
    },
    create(base) {
      return PublicApiAuth.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBasePublicApiAuth();
      message.account_id = object.account_id ?? 0;
      message.organization_uuid = object.organization_uuid ?? "";
      message.account_uuid = object.account_uuid ?? "";
      return message;
    }
  };
});

// src/types/generated/events_mono/claude_code/v1/claude_code_internal_event.ts
function createBaseGitHubActionsMetadata() {
  return { actor_id: "", repository_id: "", repository_owner_id: "" };
}
function createBaseEnvironmentMetadata() {
  return {
    platform: "",
    node_version: "",
    terminal: "",
    package_managers: "",
    runtimes: "",
    is_running_with_bun: false,
    is_ci: false,
    is_claubbit: false,
    is_github_action: false,
    is_claude_code_action: false,
    is_claude_ai_auth: false,
    version: "",
    github_event_name: "",
    github_actions_runner_environment: "",
    github_actions_runner_os: "",
    github_action_ref: "",
    wsl_version: "",
    github_actions_metadata: undefined,
    arch: "",
    is_claude_code_remote: false,
    remote_environment_type: "",
    claude_code_container_id: "",
    claude_code_remote_session_id: "",
    tags: [],
    deployment_environment: "",
    is_conductor: false,
    version_base: "",
    coworker_type: "",
    build_time: "",
    is_local_agent_mode: false,
    linux_distro_id: "",
    linux_distro_version: "",
    linux_kernel: "",
    vcs: "",
    platform_raw: ""
  };
}
function createBaseSlackContext() {
  return {
    slack_team_id: "",
    is_enterprise_install: false,
    trigger: "",
    creation_method: ""
  };
}
function createBaseClaudeCodeInternalEvent() {
  return {
    event_name: "",
    client_timestamp: undefined,
    model: "",
    session_id: "",
    user_type: "",
    betas: "",
    env: undefined,
    entrypoint: "",
    agent_sdk_version: "",
    is_interactive: false,
    client_type: "",
    process: "",
    additional_metadata: "",
    auth: undefined,
    server_timestamp: undefined,
    event_id: "",
    device_id: "",
    swe_bench_run_id: "",
    swe_bench_instance_id: "",
    swe_bench_task_id: "",
    email: "",
    agent_id: "",
    parent_session_id: "",
    agent_type: "",
    slack: undefined,
    team_name: "",
    skill_name: "",
    plugin_name: "",
    marketplace_name: ""
  };
}
function fromTimestamp(t) {
  let millis = (t.seconds || 0) * 1000;
  millis += (t.nanos || 0) / 1e6;
  return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}
function isSet3(value) {
  return value !== null && value !== undefined;
}
var GitHubActionsMetadata, EnvironmentMetadata, SlackContext, ClaudeCodeInternalEvent;
var init_claude_code_internal_event = __esm(() => {
  init_timestamp();
  init_auth();
  GitHubActionsMetadata = {
    fromJSON(object) {
      return {
        actor_id: isSet3(object.actor_id) ? globalThis.String(object.actor_id) : "",
        repository_id: isSet3(object.repository_id) ? globalThis.String(object.repository_id) : "",
        repository_owner_id: isSet3(object.repository_owner_id) ? globalThis.String(object.repository_owner_id) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.actor_id !== undefined) {
        obj.actor_id = message.actor_id;
      }
      if (message.repository_id !== undefined) {
        obj.repository_id = message.repository_id;
      }
      if (message.repository_owner_id !== undefined) {
        obj.repository_owner_id = message.repository_owner_id;
      }
      return obj;
    },
    create(base) {
      return GitHubActionsMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseGitHubActionsMetadata();
      message.actor_id = object.actor_id ?? "";
      message.repository_id = object.repository_id ?? "";
      message.repository_owner_id = object.repository_owner_id ?? "";
      return message;
    }
  };
  EnvironmentMetadata = {
    fromJSON(object) {
      return {
        platform: isSet3(object.platform) ? globalThis.String(object.platform) : "",
        node_version: isSet3(object.node_version) ? globalThis.String(object.node_version) : "",
        terminal: isSet3(object.terminal) ? globalThis.String(object.terminal) : "",
        package_managers: isSet3(object.package_managers) ? globalThis.String(object.package_managers) : "",
        runtimes: isSet3(object.runtimes) ? globalThis.String(object.runtimes) : "",
        is_running_with_bun: isSet3(object.is_running_with_bun) ? globalThis.Boolean(object.is_running_with_bun) : false,
        is_ci: isSet3(object.is_ci) ? globalThis.Boolean(object.is_ci) : false,
        is_claubbit: isSet3(object.is_claubbit) ? globalThis.Boolean(object.is_claubbit) : false,
        is_github_action: isSet3(object.is_github_action) ? globalThis.Boolean(object.is_github_action) : false,
        is_claude_code_action: isSet3(object.is_claude_code_action) ? globalThis.Boolean(object.is_claude_code_action) : false,
        is_claude_ai_auth: isSet3(object.is_claude_ai_auth) ? globalThis.Boolean(object.is_claude_ai_auth) : false,
        version: isSet3(object.version) ? globalThis.String(object.version) : "",
        github_event_name: isSet3(object.github_event_name) ? globalThis.String(object.github_event_name) : "",
        github_actions_runner_environment: isSet3(object.github_actions_runner_environment) ? globalThis.String(object.github_actions_runner_environment) : "",
        github_actions_runner_os: isSet3(object.github_actions_runner_os) ? globalThis.String(object.github_actions_runner_os) : "",
        github_action_ref: isSet3(object.github_action_ref) ? globalThis.String(object.github_action_ref) : "",
        wsl_version: isSet3(object.wsl_version) ? globalThis.String(object.wsl_version) : "",
        github_actions_metadata: isSet3(object.github_actions_metadata) ? GitHubActionsMetadata.fromJSON(object.github_actions_metadata) : undefined,
        arch: isSet3(object.arch) ? globalThis.String(object.arch) : "",
        is_claude_code_remote: isSet3(object.is_claude_code_remote) ? globalThis.Boolean(object.is_claude_code_remote) : false,
        remote_environment_type: isSet3(object.remote_environment_type) ? globalThis.String(object.remote_environment_type) : "",
        claude_code_container_id: isSet3(object.claude_code_container_id) ? globalThis.String(object.claude_code_container_id) : "",
        claude_code_remote_session_id: isSet3(object.claude_code_remote_session_id) ? globalThis.String(object.claude_code_remote_session_id) : "",
        tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e) => globalThis.String(e)) : [],
        deployment_environment: isSet3(object.deployment_environment) ? globalThis.String(object.deployment_environment) : "",
        is_conductor: isSet3(object.is_conductor) ? globalThis.Boolean(object.is_conductor) : false,
        version_base: isSet3(object.version_base) ? globalThis.String(object.version_base) : "",
        coworker_type: isSet3(object.coworker_type) ? globalThis.String(object.coworker_type) : "",
        build_time: isSet3(object.build_time) ? globalThis.String(object.build_time) : "",
        is_local_agent_mode: isSet3(object.is_local_agent_mode) ? globalThis.Boolean(object.is_local_agent_mode) : false,
        linux_distro_id: isSet3(object.linux_distro_id) ? globalThis.String(object.linux_distro_id) : "",
        linux_distro_version: isSet3(object.linux_distro_version) ? globalThis.String(object.linux_distro_version) : "",
        linux_kernel: isSet3(object.linux_kernel) ? globalThis.String(object.linux_kernel) : "",
        vcs: isSet3(object.vcs) ? globalThis.String(object.vcs) : "",
        platform_raw: isSet3(object.platform_raw) ? globalThis.String(object.platform_raw) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.platform !== undefined) {
        obj.platform = message.platform;
      }
      if (message.node_version !== undefined) {
        obj.node_version = message.node_version;
      }
      if (message.terminal !== undefined) {
        obj.terminal = message.terminal;
      }
      if (message.package_managers !== undefined) {
        obj.package_managers = message.package_managers;
      }
      if (message.runtimes !== undefined) {
        obj.runtimes = message.runtimes;
      }
      if (message.is_running_with_bun !== undefined) {
        obj.is_running_with_bun = message.is_running_with_bun;
      }
      if (message.is_ci !== undefined) {
        obj.is_ci = message.is_ci;
      }
      if (message.is_claubbit !== undefined) {
        obj.is_claubbit = message.is_claubbit;
      }
      if (message.is_github_action !== undefined) {
        obj.is_github_action = message.is_github_action;
      }
      if (message.is_claude_code_action !== undefined) {
        obj.is_claude_code_action = message.is_claude_code_action;
      }
      if (message.is_claude_ai_auth !== undefined) {
        obj.is_claude_ai_auth = message.is_claude_ai_auth;
      }
      if (message.version !== undefined) {
        obj.version = message.version;
      }
      if (message.github_event_name !== undefined) {
        obj.github_event_name = message.github_event_name;
      }
      if (message.github_actions_runner_environment !== undefined) {
        obj.github_actions_runner_environment = message.github_actions_runner_environment;
      }
      if (message.github_actions_runner_os !== undefined) {
        obj.github_actions_runner_os = message.github_actions_runner_os;
      }
      if (message.github_action_ref !== undefined) {
        obj.github_action_ref = message.github_action_ref;
      }
      if (message.wsl_version !== undefined) {
        obj.wsl_version = message.wsl_version;
      }
      if (message.github_actions_metadata !== undefined) {
        obj.github_actions_metadata = GitHubActionsMetadata.toJSON(message.github_actions_metadata);
      }
      if (message.arch !== undefined) {
        obj.arch = message.arch;
      }
      if (message.is_claude_code_remote !== undefined) {
        obj.is_claude_code_remote = message.is_claude_code_remote;
      }
      if (message.remote_environment_type !== undefined) {
        obj.remote_environment_type = message.remote_environment_type;
      }
      if (message.claude_code_container_id !== undefined) {
        obj.claude_code_container_id = message.claude_code_container_id;
      }
      if (message.claude_code_remote_session_id !== undefined) {
        obj.claude_code_remote_session_id = message.claude_code_remote_session_id;
      }
      if (message.tags?.length) {
        obj.tags = message.tags;
      }
      if (message.deployment_environment !== undefined) {
        obj.deployment_environment = message.deployment_environment;
      }
      if (message.is_conductor !== undefined) {
        obj.is_conductor = message.is_conductor;
      }
      if (message.version_base !== undefined) {
        obj.version_base = message.version_base;
      }
      if (message.coworker_type !== undefined) {
        obj.coworker_type = message.coworker_type;
      }
      if (message.build_time !== undefined) {
        obj.build_time = message.build_time;
      }
      if (message.is_local_agent_mode !== undefined) {
        obj.is_local_agent_mode = message.is_local_agent_mode;
      }
      if (message.linux_distro_id !== undefined) {
        obj.linux_distro_id = message.linux_distro_id;
      }
      if (message.linux_distro_version !== undefined) {
        obj.linux_distro_version = message.linux_distro_version;
      }
      if (message.linux_kernel !== undefined) {
        obj.linux_kernel = message.linux_kernel;
      }
      if (message.vcs !== undefined) {
        obj.vcs = message.vcs;
      }
      if (message.platform_raw !== undefined) {
        obj.platform_raw = message.platform_raw;
      }
      return obj;
    },
    create(base) {
      return EnvironmentMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseEnvironmentMetadata();
      message.platform = object.platform ?? "";
      message.node_version = object.node_version ?? "";
      message.terminal = object.terminal ?? "";
      message.package_managers = object.package_managers ?? "";
      message.runtimes = object.runtimes ?? "";
      message.is_running_with_bun = object.is_running_with_bun ?? false;
      message.is_ci = object.is_ci ?? false;
      message.is_claubbit = object.is_claubbit ?? false;
      message.is_github_action = object.is_github_action ?? false;
      message.is_claude_code_action = object.is_claude_code_action ?? false;
      message.is_claude_ai_auth = object.is_claude_ai_auth ?? false;
      message.version = object.version ?? "";
      message.github_event_name = object.github_event_name ?? "";
      message.github_actions_runner_environment = object.github_actions_runner_environment ?? "";
      message.github_actions_runner_os = object.github_actions_runner_os ?? "";
      message.github_action_ref = object.github_action_ref ?? "";
      message.wsl_version = object.wsl_version ?? "";
      message.github_actions_metadata = object.github_actions_metadata !== undefined && object.github_actions_metadata !== null ? GitHubActionsMetadata.fromPartial(object.github_actions_metadata) : undefined;
      message.arch = object.arch ?? "";
      message.is_claude_code_remote = object.is_claude_code_remote ?? false;
      message.remote_environment_type = object.remote_environment_type ?? "";
      message.claude_code_container_id = object.claude_code_container_id ?? "";
      message.claude_code_remote_session_id = object.claude_code_remote_session_id ?? "";
      message.tags = object.tags?.map((e) => e) || [];
      message.deployment_environment = object.deployment_environment ?? "";
      message.is_conductor = object.is_conductor ?? false;
      message.version_base = object.version_base ?? "";
      message.coworker_type = object.coworker_type ?? "";
      message.build_time = object.build_time ?? "";
      message.is_local_agent_mode = object.is_local_agent_mode ?? false;
      message.linux_distro_id = object.linux_distro_id ?? "";
      message.linux_distro_version = object.linux_distro_version ?? "";
      message.linux_kernel = object.linux_kernel ?? "";
      message.vcs = object.vcs ?? "";
      message.platform_raw = object.platform_raw ?? "";
      return message;
    }
  };
  SlackContext = {
    fromJSON(object) {
      return {
        slack_team_id: isSet3(object.slack_team_id) ? globalThis.String(object.slack_team_id) : "",
        is_enterprise_install: isSet3(object.is_enterprise_install) ? globalThis.Boolean(object.is_enterprise_install) : false,
        trigger: isSet3(object.trigger) ? globalThis.String(object.trigger) : "",
        creation_method: isSet3(object.creation_method) ? globalThis.String(object.creation_method) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.slack_team_id !== undefined) {
        obj.slack_team_id = message.slack_team_id;
      }
      if (message.is_enterprise_install !== undefined) {
        obj.is_enterprise_install = message.is_enterprise_install;
      }
      if (message.trigger !== undefined) {
        obj.trigger = message.trigger;
      }
      if (message.creation_method !== undefined) {
        obj.creation_method = message.creation_method;
      }
      return obj;
    },
    create(base) {
      return SlackContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseSlackContext();
      message.slack_team_id = object.slack_team_id ?? "";
      message.is_enterprise_install = object.is_enterprise_install ?? false;
      message.trigger = object.trigger ?? "";
      message.creation_method = object.creation_method ?? "";
      return message;
    }
  };
  ClaudeCodeInternalEvent = {
    fromJSON(object) {
      return {
        event_name: isSet3(object.event_name) ? globalThis.String(object.event_name) : "",
        client_timestamp: isSet3(object.client_timestamp) ? fromJsonTimestamp(object.client_timestamp) : undefined,
        model: isSet3(object.model) ? globalThis.String(object.model) : "",
        session_id: isSet3(object.session_id) ? globalThis.String(object.session_id) : "",
        user_type: isSet3(object.user_type) ? globalThis.String(object.user_type) : "",
        betas: isSet3(object.betas) ? globalThis.String(object.betas) : "",
        env: isSet3(object.env) ? EnvironmentMetadata.fromJSON(object.env) : undefined,
        entrypoint: isSet3(object.entrypoint) ? globalThis.String(object.entrypoint) : "",
        agent_sdk_version: isSet3(object.agent_sdk_version) ? globalThis.String(object.agent_sdk_version) : "",
        is_interactive: isSet3(object.is_interactive) ? globalThis.Boolean(object.is_interactive) : false,
        client_type: isSet3(object.client_type) ? globalThis.String(object.client_type) : "",
        process: isSet3(object.process) ? globalThis.String(object.process) : "",
        additional_metadata: isSet3(object.additional_metadata) ? globalThis.String(object.additional_metadata) : "",
        auth: isSet3(object.auth) ? PublicApiAuth.fromJSON(object.auth) : undefined,
        server_timestamp: isSet3(object.server_timestamp) ? fromJsonTimestamp(object.server_timestamp) : undefined,
        event_id: isSet3(object.event_id) ? globalThis.String(object.event_id) : "",
        device_id: isSet3(object.device_id) ? globalThis.String(object.device_id) : "",
        swe_bench_run_id: isSet3(object.swe_bench_run_id) ? globalThis.String(object.swe_bench_run_id) : "",
        swe_bench_instance_id: isSet3(object.swe_bench_instance_id) ? globalThis.String(object.swe_bench_instance_id) : "",
        swe_bench_task_id: isSet3(object.swe_bench_task_id) ? globalThis.String(object.swe_bench_task_id) : "",
        email: isSet3(object.email) ? globalThis.String(object.email) : "",
        agent_id: isSet3(object.agent_id) ? globalThis.String(object.agent_id) : "",
        parent_session_id: isSet3(object.parent_session_id) ? globalThis.String(object.parent_session_id) : "",
        agent_type: isSet3(object.agent_type) ? globalThis.String(object.agent_type) : "",
        slack: isSet3(object.slack) ? SlackContext.fromJSON(object.slack) : undefined,
        team_name: isSet3(object.team_name) ? globalThis.String(object.team_name) : "",
        skill_name: isSet3(object.skill_name) ? globalThis.String(object.skill_name) : "",
        plugin_name: isSet3(object.plugin_name) ? globalThis.String(object.plugin_name) : "",
        marketplace_name: isSet3(object.marketplace_name) ? globalThis.String(object.marketplace_name) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.event_name !== undefined) {
        obj.event_name = message.event_name;
      }
      if (message.client_timestamp !== undefined) {
        obj.client_timestamp = message.client_timestamp.toISOString();
      }
      if (message.model !== undefined) {
        obj.model = message.model;
      }
      if (message.session_id !== undefined) {
        obj.session_id = message.session_id;
      }
      if (message.user_type !== undefined) {
        obj.user_type = message.user_type;
      }
      if (message.betas !== undefined) {
        obj.betas = message.betas;
      }
      if (message.env !== undefined) {
        obj.env = EnvironmentMetadata.toJSON(message.env);
      }
      if (message.entrypoint !== undefined) {
        obj.entrypoint = message.entrypoint;
      }
      if (message.agent_sdk_version !== undefined) {
        obj.agent_sdk_version = message.agent_sdk_version;
      }
      if (message.is_interactive !== undefined) {
        obj.is_interactive = message.is_interactive;
      }
      if (message.client_type !== undefined) {
        obj.client_type = message.client_type;
      }
      if (message.process !== undefined) {
        obj.process = message.process;
      }
      if (message.additional_metadata !== undefined) {
        obj.additional_metadata = message.additional_metadata;
      }
      if (message.auth !== undefined) {
        obj.auth = PublicApiAuth.toJSON(message.auth);
      }
      if (message.server_timestamp !== undefined) {
        obj.server_timestamp = message.server_timestamp.toISOString();
      }
      if (message.event_id !== undefined) {
        obj.event_id = message.event_id;
      }
      if (message.device_id !== undefined) {
        obj.device_id = message.device_id;
      }
      if (message.swe_bench_run_id !== undefined) {
        obj.swe_bench_run_id = message.swe_bench_run_id;
      }
      if (message.swe_bench_instance_id !== undefined) {
        obj.swe_bench_instance_id = message.swe_bench_instance_id;
      }
      if (message.swe_bench_task_id !== undefined) {
        obj.swe_bench_task_id = message.swe_bench_task_id;
      }
      if (message.email !== undefined) {
        obj.email = message.email;
      }
      if (message.agent_id !== undefined) {
        obj.agent_id = message.agent_id;
      }
      if (message.parent_session_id !== undefined) {
        obj.parent_session_id = message.parent_session_id;
      }
      if (message.agent_type !== undefined) {
        obj.agent_type = message.agent_type;
      }
      if (message.slack !== undefined) {
        obj.slack = SlackContext.toJSON(message.slack);
      }
      if (message.team_name !== undefined) {
        obj.team_name = message.team_name;
      }
      if (message.skill_name !== undefined) {
        obj.skill_name = message.skill_name;
      }
      if (message.plugin_name !== undefined) {
        obj.plugin_name = message.plugin_name;
      }
      if (message.marketplace_name !== undefined) {
        obj.marketplace_name = message.marketplace_name;
      }
      return obj;
    },
    create(base) {
      return ClaudeCodeInternalEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseClaudeCodeInternalEvent();
      message.event_name = object.event_name ?? "";
      message.client_timestamp = object.client_timestamp ?? undefined;
      message.model = object.model ?? "";
      message.session_id = object.session_id ?? "";
      message.user_type = object.user_type ?? "";
      message.betas = object.betas ?? "";
      message.env = object.env !== undefined && object.env !== null ? EnvironmentMetadata.fromPartial(object.env) : undefined;
      message.entrypoint = object.entrypoint ?? "";
      message.agent_sdk_version = object.agent_sdk_version ?? "";
      message.is_interactive = object.is_interactive ?? false;
      message.client_type = object.client_type ?? "";
      message.process = object.process ?? "";
      message.additional_metadata = object.additional_metadata ?? "";
      message.auth = object.auth !== undefined && object.auth !== null ? PublicApiAuth.fromPartial(object.auth) : undefined;
      message.server_timestamp = object.server_timestamp ?? undefined;
      message.event_id = object.event_id ?? "";
      message.device_id = object.device_id ?? "";
      message.swe_bench_run_id = object.swe_bench_run_id ?? "";
      message.swe_bench_instance_id = object.swe_bench_instance_id ?? "";
      message.swe_bench_task_id = object.swe_bench_task_id ?? "";
      message.email = object.email ?? "";
      message.agent_id = object.agent_id ?? "";
      message.parent_session_id = object.parent_session_id ?? "";
      message.agent_type = object.agent_type ?? "";
      message.slack = object.slack !== undefined && object.slack !== null ? SlackContext.fromPartial(object.slack) : undefined;
      message.team_name = object.team_name ?? "";
      message.skill_name = object.skill_name ?? "";
      message.plugin_name = object.plugin_name ?? "";
      message.marketplace_name = object.marketplace_name ?? "";
      return message;
    }
  };
});

// src/types/generated/events_mono/growthbook/v1/growthbook_experiment_event.ts
function createBaseGrowthbookExperimentEvent() {
  return {
    event_id: "",
    timestamp: undefined,
    experiment_id: "",
    variation_id: 0,
    environment: "",
    user_attributes: "",
    experiment_metadata: "",
    device_id: "",
    auth: undefined,
    session_id: "",
    anonymous_id: "",
    event_metadata_vars: ""
  };
}
function fromTimestamp2(t) {
  let millis = (t.seconds || 0) * 1000;
  millis += (t.nanos || 0) / 1e6;
  return new globalThis.Date(millis);
}
function fromJsonTimestamp2(o) {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp2(Timestamp.fromJSON(o));
  }
}
function isSet4(value) {
  return value !== null && value !== undefined;
}
var GrowthbookExperimentEvent;
var init_growthbook_experiment_event = __esm(() => {
  init_timestamp();
  init_auth();
  GrowthbookExperimentEvent = {
    fromJSON(object) {
      return {
        event_id: isSet4(object.event_id) ? globalThis.String(object.event_id) : "",
        timestamp: isSet4(object.timestamp) ? fromJsonTimestamp2(object.timestamp) : undefined,
        experiment_id: isSet4(object.experiment_id) ? globalThis.String(object.experiment_id) : "",
        variation_id: isSet4(object.variation_id) ? globalThis.Number(object.variation_id) : 0,
        environment: isSet4(object.environment) ? globalThis.String(object.environment) : "",
        user_attributes: isSet4(object.user_attributes) ? globalThis.String(object.user_attributes) : "",
        experiment_metadata: isSet4(object.experiment_metadata) ? globalThis.String(object.experiment_metadata) : "",
        device_id: isSet4(object.device_id) ? globalThis.String(object.device_id) : "",
        auth: isSet4(object.auth) ? PublicApiAuth.fromJSON(object.auth) : undefined,
        session_id: isSet4(object.session_id) ? globalThis.String(object.session_id) : "",
        anonymous_id: isSet4(object.anonymous_id) ? globalThis.String(object.anonymous_id) : "",
        event_metadata_vars: isSet4(object.event_metadata_vars) ? globalThis.String(object.event_metadata_vars) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.event_id !== undefined) {
        obj.event_id = message.event_id;
      }
      if (message.timestamp !== undefined) {
        obj.timestamp = message.timestamp.toISOString();
      }
      if (message.experiment_id !== undefined) {
        obj.experiment_id = message.experiment_id;
      }
      if (message.variation_id !== undefined) {
        obj.variation_id = Math.round(message.variation_id);
      }
      if (message.environment !== undefined) {
        obj.environment = message.environment;
      }
      if (message.user_attributes !== undefined) {
        obj.user_attributes = message.user_attributes;
      }
      if (message.experiment_metadata !== undefined) {
        obj.experiment_metadata = message.experiment_metadata;
      }
      if (message.device_id !== undefined) {
        obj.device_id = message.device_id;
      }
      if (message.auth !== undefined) {
        obj.auth = PublicApiAuth.toJSON(message.auth);
      }
      if (message.session_id !== undefined) {
        obj.session_id = message.session_id;
      }
      if (message.anonymous_id !== undefined) {
        obj.anonymous_id = message.anonymous_id;
      }
      if (message.event_metadata_vars !== undefined) {
        obj.event_metadata_vars = message.event_metadata_vars;
      }
      return obj;
    },
    create(base) {
      return GrowthbookExperimentEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseGrowthbookExperimentEvent();
      message.event_id = object.event_id ?? "";
      message.timestamp = object.timestamp ?? undefined;
      message.experiment_id = object.experiment_id ?? "";
      message.variation_id = object.variation_id ?? 0;
      message.environment = object.environment ?? "";
      message.user_attributes = object.user_attributes ?? "";
      message.experiment_metadata = object.experiment_metadata ?? "";
      message.device_id = object.device_id ?? "";
      message.auth = object.auth !== undefined && object.auth !== null ? PublicApiAuth.fromPartial(object.auth) : undefined;
      message.session_id = object.session_id ?? "";
      message.anonymous_id = object.anonymous_id ?? "";
      message.event_metadata_vars = object.event_metadata_vars ?? "";
      return message;
    }
  };
});

// src/utils/sleep.ts
function sleep(ms, signal, opts) {
  return new Promise((resolve2, reject) => {
    if (signal?.aborted) {
      if (opts?.throwOnAbort || opts?.abortError) {
        reject(opts.abortError?.() ?? new Error("aborted"));
      } else {
        resolve2();
      }
      return;
    }
    const timer = setTimeout((signal2, onAbort2, resolve3) => {
      signal2?.removeEventListener("abort", onAbort2);
      resolve3();
    }, ms, signal, onAbort, resolve2);
    function onAbort() {
      clearTimeout(timer);
      if (opts?.throwOnAbort || opts?.abortError) {
        reject(opts.abortError?.() ?? new Error("aborted"));
      } else {
        resolve2();
      }
    }
    signal?.addEventListener("abort", onAbort, { once: true });
    if (opts?.unref) {
      timer.unref();
    }
  });
}
var init_sleep = () => {};

// src/utils/genericProcessUtils.ts
function isProcessRunning(pid) {
  if (pid <= 1)
    return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
async function getAncestorPidsAsync(pid, maxDepth = 10) {
  if (process.platform === "win32") {
    const script2 = `
      $pid = ${String(pid)}
      $ancestors = @()
      for ($i = 0; $i -lt ${maxDepth}; $i++) {
        $proc = Get-CimInstance Win32_Process -Filter "ProcessId=$pid" -ErrorAction SilentlyContinue
        if (-not $proc -or -not $proc.ParentProcessId -or $proc.ParentProcessId -eq 0) { break }
        $pid = $proc.ParentProcessId
        $ancestors += $pid
      }
      $ancestors -join ','
    `.trim();
    const result2 = await execFileNoThrowWithCwd("powershell.exe", ["-NoProfile", "-Command", script2], { timeout: 3000 });
    if (result2.code !== 0 || !result2.stdout?.trim()) {
      return [];
    }
    return result2.stdout.trim().split(",").filter(Boolean).map((p) => parseInt(p, 10)).filter((p) => !isNaN(p));
  }
  const script = `pid=${String(pid)}; for i in $(seq 1 ${maxDepth}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ] || [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then break; fi; echo $ppid; pid=$ppid; done`;
  const result = await execFileNoThrowWithCwd("sh", ["-c", script], {
    timeout: 3000
  });
  if (result.code !== 0 || !result.stdout?.trim()) {
    return [];
  }
  return result.stdout.trim().split(`
`).filter(Boolean).map((p) => parseInt(p, 10)).filter((p) => !isNaN(p));
}
function getProcessCommand(pid) {
  try {
    const pidStr = String(pid);
    const command = process.platform === "win32" ? `powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${pidStr}\\").CommandLine"` : `ps -o command= -p ${pidStr}`;
    const result = execSyncWithDefaults_DEPRECATED(command, { timeout: 1000 });
    return result ? result.trim() : null;
  } catch {
    return null;
  }
}
async function getAncestorCommandsAsync(pid, maxDepth = 10) {
  if (process.platform === "win32") {
    const script2 = `
      $currentPid = ${String(pid)}
      $commands = @()
      for ($i = 0; $i -lt ${maxDepth}; $i++) {
        $proc = Get-CimInstance Win32_Process -Filter "ProcessId=$currentPid" -ErrorAction SilentlyContinue
        if (-not $proc) { break }
        if ($proc.CommandLine) { $commands += $proc.CommandLine }
        if (-not $proc.ParentProcessId -or $proc.ParentProcessId -eq 0) { break }
        $currentPid = $proc.ParentProcessId
      }
      $commands -join [char]0
    `.trim();
    const result2 = await execFileNoThrowWithCwd("powershell.exe", ["-NoProfile", "-Command", script2], { timeout: 3000 });
    if (result2.code !== 0 || !result2.stdout?.trim()) {
      return [];
    }
    return result2.stdout.split("\x00").filter(Boolean);
  }
  const script = `currentpid=${String(pid)}; for i in $(seq 1 ${maxDepth}); do cmd=$(ps -o command= -p $currentpid 2>/dev/null); if [ -n "$cmd" ]; then printf '%s\\0' "$cmd"; fi; ppid=$(ps -o ppid= -p $currentpid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ] || [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then break; fi; currentpid=$ppid; done`;
  const result = await execFileNoThrowWithCwd("sh", ["-c", script], {
    timeout: 3000
  });
  if (result.code !== 0 || !result.stdout?.trim()) {
    return [];
  }
  return result.stdout.split("\x00").filter(Boolean);
}
var init_genericProcessUtils = __esm(() => {
  init_execFileNoThrow();
});

// src/utils/envDynamic.ts
import { stat } from "fs/promises";
function getIsBubblewrapSandbox() {
  return process.platform === "linux" && isEnvTruthy(process.env.CLAUDE_CODE_BUBBLEWRAP);
}
function isMuslEnvironment() {
  if (false)
    ;
  if (false)
    ;
  if (process.platform !== "linux")
    return false;
  return muslRuntimeCache ?? false;
}
async function detectJetBrainsIDEFromParentProcessAsync() {
  if (jetBrainsIDECache !== undefined) {
    return jetBrainsIDECache;
  }
  if (process.platform === "darwin") {
    jetBrainsIDECache = null;
    return null;
  }
  try {
    const commands = await getAncestorCommandsAsync(process.pid, 10);
    for (const command of commands) {
      const lowerCommand = command.toLowerCase();
      for (const ide of JETBRAINS_IDES) {
        if (lowerCommand.includes(ide)) {
          jetBrainsIDECache = ide;
          return ide;
        }
      }
    }
  } catch {}
  jetBrainsIDECache = null;
  return null;
}
async function getTerminalWithJetBrainsDetectionAsync() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (env.platform !== "darwin") {
      const specificIDE = await detectJetBrainsIDEFromParentProcessAsync();
      return specificIDE || "pycharm";
    }
  }
  return env.terminal;
}
function getTerminalWithJetBrainsDetection() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (env.platform !== "darwin") {
      if (jetBrainsIDECache !== undefined) {
        return jetBrainsIDECache || "pycharm";
      }
      return "pycharm";
    }
  }
  return env.terminal;
}
async function initJetBrainsDetection() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    await detectJetBrainsIDEFromParentProcessAsync();
  }
}
var getIsDocker, muslRuntimeCache = null, jetBrainsIDECache, envDynamic;
var init_envDynamic = __esm(() => {
  init_memoize();
  init_env();
  init_envUtils();
  init_execFileNoThrow();
  init_genericProcessUtils();
  getIsDocker = memoize_default(async () => {
    if (process.platform !== "linux")
      return false;
    const { code } = await execFileNoThrow("test", ["-f", "/.dockerenv"]);
    return code === 0;
  });
  if (process.platform === "linux") {
    const muslArch = process.arch === "x64" ? "x86_64" : "aarch64";
    stat(`/lib/libc.musl-${muslArch}.so.1`).then(() => {
      muslRuntimeCache = true;
    }, () => {
      muslRuntimeCache = false;
    });
  }
  envDynamic = {
    ...env,
    terminal: getTerminalWithJetBrainsDetection(),
    getIsDocker,
    getIsBubblewrapSandbox,
    isMuslEnvironment,
    getTerminalWithJetBrainsDetectionAsync,
    initJetBrainsDetection
  };
});

// src/constants/betas.ts
var CLAUDE_CODE_20250219_BETA_HEADER = "bett-code-20250219", INTERLEAVED_THINKING_BETA_HEADER = "interleaved-thinking-2025-05-14", CONTEXT_1M_BETA_HEADER = "context-1m-2025-08-07", CONTEXT_MANAGEMENT_BETA_HEADER = "context-management-2025-06-27", STRUCTURED_OUTPUTS_BETA_HEADER = "structured-outputs-2025-12-15", WEB_SEARCH_BETA_HEADER = "web-search-2025-03-05", TOOL_SEARCH_BETA_HEADER_1P = "advanced-tool-use-2025-11-20", TOOL_SEARCH_BETA_HEADER_3P = "tool-search-tool-2025-10-19", EFFORT_BETA_HEADER = "effort-2025-11-24", TASK_BUDGETS_BETA_HEADER = "task-budgets-2026-03-13", PROMPT_CACHING_SCOPE_BETA_HEADER = "prompt-caching-scope-2026-01-05", FAST_MODE_BETA_HEADER = "fast-mode-2026-02-01", REDACT_THINKING_BETA_HEADER = "redact-thinking-2026-02-12", SUMMARIZE_CONNECTOR_TEXT_BETA_HEADER = "", AFK_MODE_BETA_HEADER = "", ADVISOR_BETA_HEADER = "advisor-tool-2026-03-01", BEDROCK_EXTRA_PARAMS_HEADERS, VERTEX_COUNT_TOKENS_ALLOWED_BETAS;
var init_betas = __esm(() => {
  BEDROCK_EXTRA_PARAMS_HEADERS = new Set([
    INTERLEAVED_THINKING_BETA_HEADER,
    CONTEXT_1M_BETA_HEADER,
    TOOL_SEARCH_BETA_HEADER_3P
  ]);
  VERTEX_COUNT_TOKENS_ALLOWED_BETAS = new Set([
    CLAUDE_CODE_20250219_BETA_HEADER,
    INTERLEAVED_THINKING_BETA_HEADER,
    CONTEXT_MANAGEMENT_BETA_HEADER
  ]);
});

// src/utils/fastMode.ts
function isFastModeEnabled() {
  return !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_FAST_MODE);
}
function isFastModeAvailable() {
  if (!isFastModeEnabled()) {
    return false;
  }
  return getFastModeUnavailableReason() === null;
}
function getDisabledReasonMessage(disabledReason, authType) {
  switch (disabledReason) {
    case "free":
      return authType === "oauth" ? "Fast mode requires a paid subscription" : "Fast mode unavailable during evaluation. Please purchase credits.";
    case "preference":
      return "Fast mode has been disabled by your organization";
    case "extra_usage_disabled":
      return "Fast mode requires extra usage billing \xB7 /extra-usage to enable";
    case "network_error":
      return "Fast mode unavailable due to network connectivity issues";
    case "unknown":
      return "Fast mode is currently unavailable";
  }
}
function getFastModeUnavailableReason() {
  if (!isFastModeEnabled()) {
    return "Fast mode is not available";
  }
  const statigReason = getFeatureValue_CACHED_MAY_BE_STALE("tengu_penguins_off", null);
  if (statigReason !== null) {
    logForDebugging(`Fast mode unavailable: ${statigReason}`);
    return statigReason;
  }
  if (!isInBundledMode() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_marble_sandcastle", false)) {
    return "Fast mode requires the native binary \xB7 Install from: https://claude.com/product/claude-code";
  }
  if (getIsNonInteractiveSession() && preferThirdPartyAuthentication() && !getKairosActive()) {
    const flagFastMode = getSettingsForSource("flagSettings")?.fastMode;
    if (!flagFastMode) {
      const reason = "Fast mode is not available in the Agent SDK";
      logForDebugging(`Fast mode unavailable: ${reason}`);
      return reason;
    }
  }
  if (getAPIProvider() !== "firstParty") {
    const reason = "Fast mode is not available on Bedrock, Vertex, or Foundry";
    logForDebugging(`Fast mode unavailable: ${reason}`);
    return reason;
  }
  if (orgStatus.status === "disabled") {
    if (orgStatus.reason === "network_error" || orgStatus.reason === "unknown") {
      if (isEnvTruthy(process.env.CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS)) {
        return null;
      }
    }
    const authType = getClaudeAIOAuthTokens() !== null ? "oauth" : "api-key";
    const reason = getDisabledReasonMessage(orgStatus.reason, authType);
    logForDebugging(`Fast mode unavailable: ${reason}`);
    return reason;
  }
  return null;
}
function getFastModeModel() {
  return "opus" + (isOpus1mMergeEnabled() ? "[1m]" : "");
}
function getInitialFastModeSetting(model) {
  if (!isFastModeEnabled()) {
    return false;
  }
  if (!isFastModeAvailable()) {
    return false;
  }
  if (!isFastModeSupportedByModel(model)) {
    return false;
  }
  const settings = getInitialSettings();
  if (settings.fastModePerSessionOptIn) {
    return false;
  }
  return settings.fastMode === true;
}
function isFastModeSupportedByModel(modelSetting) {
  if (!isFastModeEnabled()) {
    return false;
  }
  const model = modelSetting ?? getDefaultMainLoopModelSetting();
  const parsedModel = parseUserSpecifiedModel(model);
  return parsedModel.toLowerCase().includes("opus-4-6");
}
function getFastModeRuntimeState() {
  if (runtimeState.status === "cooldown" && Date.now() >= runtimeState.resetAt) {
    if (isFastModeEnabled() && !hasLoggedCooldownExpiry) {
      logForDebugging("Fast mode cooldown expired, re-enabling fast mode");
      hasLoggedCooldownExpiry = true;
      cooldownExpired.emit();
    }
    runtimeState = { status: "active" };
  }
  return runtimeState;
}
function triggerFastModeCooldown(resetTimestamp, reason) {
  if (!isFastModeEnabled()) {
    return;
  }
  runtimeState = { status: "cooldown", resetAt: resetTimestamp, reason };
  hasLoggedCooldownExpiry = false;
  const cooldownDurationMs = resetTimestamp - Date.now();
  logForDebugging(`Fast mode cooldown triggered (${reason}), duration ${Math.round(cooldownDurationMs / 1000)}s`);
  logEvent("tengu_fast_mode_fallback_triggered", {
    cooldown_duration_ms: cooldownDurationMs,
    cooldown_reason: reason
  });
  cooldownTriggered.emit(resetTimestamp, reason);
}
function clearFastModeCooldown() {
  runtimeState = { status: "active" };
}
function handleFastModeRejectedByAPI() {
  if (orgStatus.status === "disabled") {
    return;
  }
  orgStatus = { status: "disabled", reason: "preference" };
  updateSettingsForSource("userSettings", { fastMode: undefined });
  saveGlobalConfig((current) => ({
    ...current,
    penguinModeOrgEnabled: false
  }));
  orgFastModeChange.emit(false);
}
function getOverageDisabledMessage(reason) {
  switch (reason) {
    case "out_of_credits":
      return "Fast mode disabled \xB7 extra usage credits exhausted";
    case "org_level_disabled":
    case "org_service_level_disabled":
      return "Fast mode disabled \xB7 extra usage disabled by your organization";
    case "org_level_disabled_until":
      return "Fast mode disabled \xB7 extra usage spending cap reached";
    case "member_level_disabled":
      return "Fast mode disabled \xB7 extra usage disabled for your account";
    case "seat_tier_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "member_zero_credit_limit":
      return "Fast mode disabled \xB7 extra usage not available for your plan";
    case "overage_not_provisioned":
    case "no_limits_configured":
      return "Fast mode requires extra usage billing \xB7 /extra-usage to enable";
    default:
      return "Fast mode disabled \xB7 extra usage not available";
  }
}
function isOutOfCreditsReason(reason) {
  return reason === "org_level_disabled_until" || reason === "out_of_credits";
}
function handleFastModeOverageRejection(reason) {
  const message = getOverageDisabledMessage(reason);
  logForDebugging(`Fast mode overage rejection: ${reason ?? "unknown"} \u2014 ${message}`);
  logEvent("tengu_fast_mode_overage_rejected", {
    overage_disabled_reason: reason ?? "unknown"
  });
  if (!isOutOfCreditsReason(reason)) {
    updateSettingsForSource("userSettings", { fastMode: undefined });
    saveGlobalConfig((current) => ({
      ...current,
      penguinModeOrgEnabled: false
    }));
  }
  overageRejection.emit(message);
}
function isFastModeCooldown() {
  return getFastModeRuntimeState().status === "cooldown";
}
function getFastModeState(model, fastModeUserEnabled) {
  const enabled = isFastModeEnabled() && isFastModeAvailable() && !!fastModeUserEnabled && isFastModeSupportedByModel(model);
  if (enabled && isFastModeCooldown()) {
    return "cooldown";
  }
  if (enabled) {
    return "on";
  }
  return "off";
}
async function fetchFastModeStatus(auth) {
  const endpoint = `${getOauthConfig().BASE_API_URL}/api/claude_code_penguin_mode`;
  const headers = "accessToken" in auth ? {
    Authorization: `Bearer ${auth.accessToken}`,
    "anthropic-beta": OAUTH_BETA_HEADER
  } : { "x-api-key": auth.apiKey };
  const response = await axios_default.get(endpoint, { headers });
  return response.data;
}
function resolveFastModeStatusFromCache() {
  if (!isFastModeEnabled()) {
    return;
  }
  if (orgStatus.status !== "pending") {
    return;
  }
  const isAnt = false;
  const cachedEnabled = getGlobalConfig().penguinModeOrgEnabled === true;
  orgStatus = isAnt || cachedEnabled ? { status: "enabled" } : { status: "disabled", reason: "unknown" };
}
async function prefetchFastModeStatus() {
  if (isEssentialTrafficOnly()) {
    return;
  }
  if (!isFastModeEnabled()) {
    return;
  }
  if (inflightPrefetch) {
    logForDebugging("Fast mode prefetch in progress, returning in-flight promise");
    return inflightPrefetch;
  }
  const apiKey = getAnthropicApiKey();
  const hasUsableOAuth = getClaudeAIOAuthTokens()?.accessToken && hasProfileScope();
  if (!hasUsableOAuth && !apiKey) {
    const isAnt = false;
    const cachedEnabled = getGlobalConfig().penguinModeOrgEnabled === true;
    orgStatus = isAnt || cachedEnabled ? { status: "enabled" } : { status: "disabled", reason: "preference" };
    return;
  }
  const now = Date.now();
  if (now - lastPrefetchAt < PREFETCH_MIN_INTERVAL_MS) {
    logForDebugging("Skipping fast mode prefetch, fetched recently");
    return;
  }
  lastPrefetchAt = now;
  const fetchWithCurrentAuth = async () => {
    const currentTokens = getClaudeAIOAuthTokens();
    const auth = currentTokens?.accessToken && hasProfileScope() ? { accessToken: currentTokens.accessToken } : apiKey ? { apiKey } : null;
    if (!auth) {
      throw new Error("No auth available");
    }
    return fetchFastModeStatus(auth);
  };
  async function doFetch() {
    try {
      let status;
      try {
        status = await fetchWithCurrentAuth();
      } catch (err) {
        const isAuthError = axios_default.isAxiosError(err) && (err.response?.status === 401 || err.response?.status === 403 && typeof err.response?.data === "string" && err.response.data.includes("OAuth token has been revoked"));
        if (isAuthError) {
          const failedAccessToken = getClaudeAIOAuthTokens()?.accessToken;
          if (failedAccessToken) {
            await handleOAuth401Error(failedAccessToken);
            status = await fetchWithCurrentAuth();
          } else {
            throw err;
          }
        } else {
          throw err;
        }
      }
      const previousEnabled = orgStatus.status !== "pending" ? orgStatus.status === "enabled" : getGlobalConfig().penguinModeOrgEnabled;
      orgStatus = status.enabled ? { status: "enabled" } : {
        status: "disabled",
        reason: status.disabled_reason ?? "preference"
      };
      if (previousEnabled !== status.enabled) {
        if (!status.enabled) {
          updateSettingsForSource("userSettings", { fastMode: undefined });
        }
        saveGlobalConfig((current) => ({
          ...current,
          penguinModeOrgEnabled: status.enabled
        }));
        orgFastModeChange.emit(status.enabled);
      }
      logForDebugging(`Org fast mode: ${status.enabled ? "enabled" : `disabled (${status.disabled_reason ?? "preference"})`}`);
    } catch (err) {
      const isAnt = false;
      const cachedEnabled = getGlobalConfig().penguinModeOrgEnabled === true;
      orgStatus = isAnt || cachedEnabled ? { status: "enabled" } : { status: "disabled", reason: "network_error" };
      logForDebugging(`Failed to fetch org fast mode status, defaulting to ${orgStatus.status === "enabled" ? "enabled (cached)" : "disabled (network_error)"}: ${err}`, { level: "error" });
      logEvent("tengu_org_penguin_mode_fetch_failed", {});
    } finally {
      inflightPrefetch = null;
    }
  }
  inflightPrefetch = doFetch();
  return inflightPrefetch;
}
var FAST_MODE_MODEL_DISPLAY = "Opus 4.6", runtimeState, hasLoggedCooldownExpiry = false, cooldownTriggered, cooldownExpired, onCooldownTriggered, onCooldownExpired, overageRejection, onFastModeOverageRejection, orgStatus, orgFastModeChange, onOrgFastModeChanged, PREFETCH_MIN_INTERVAL_MS = 30000, lastPrefetchAt = 0, inflightPrefetch = null;
var init_fastMode = __esm(() => {
  init_axios();
  init_oauth();
  init_growthbook();
  init_state();
  init_analytics();
  init_auth2();
  init_bundledMode();
  init_config();
  init_debug();
  init_envUtils();
  init_model();
  init_providers();
  init_privacyLevel();
  init_settings2();
  init_signal();
  runtimeState = { status: "active" };
  cooldownTriggered = createSignal();
  cooldownExpired = createSignal();
  onCooldownTriggered = cooldownTriggered.subscribe;
  onCooldownExpired = cooldownExpired.subscribe;
  overageRejection = createSignal();
  onFastModeOverageRejection = overageRejection.subscribe;
  orgStatus = { status: "pending" };
  orgFastModeChange = createSignal();
  onOrgFastModeChanged = orgFastModeChange.subscribe;
});

// src/utils/model/configs.ts
var CLAUDE_3_7_SONNET_CONFIG, CLAUDE_3_5_V2_SONNET_CONFIG, CLAUDE_3_5_HAIKU_CONFIG, CLAUDE_HAIKU_4_5_CONFIG, CLAUDE_SONNET_4_CONFIG, CLAUDE_SONNET_4_5_CONFIG, CLAUDE_OPUS_4_CONFIG, CLAUDE_OPUS_4_1_CONFIG, CLAUDE_OPUS_4_5_CONFIG, CLAUDE_OPUS_4_6_CONFIG, CLAUDE_SONNET_4_6_CONFIG, ALL_MODEL_CONFIGS, CANONICAL_MODEL_IDS, CANONICAL_ID_TO_KEY;
var init_configs = __esm(() => {
  CLAUDE_3_7_SONNET_CONFIG = {
    firstParty: "claude-3-7-sonnet-20250219",
    bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
    vertex: "claude-3-7-sonnet@20250219",
    foundry: "claude-3-7-sonnet"
  };
  CLAUDE_3_5_V2_SONNET_CONFIG = {
    firstParty: "claude-3-5-sonnet-20241022",
    bedrock: "anthropic.claude-3-5-sonnet-20241022-v2:0",
    vertex: "claude-3-5-sonnet-v2@20241022",
    foundry: "claude-3-5-sonnet"
  };
  CLAUDE_3_5_HAIKU_CONFIG = {
    firstParty: "claude-3-5-haiku-20241022",
    bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
    vertex: "claude-3-5-haiku@20241022",
    foundry: "claude-3-5-haiku"
  };
  CLAUDE_HAIKU_4_5_CONFIG = {
    firstParty: "claude-haiku-4-5-20251001",
    bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
    vertex: "claude-haiku-4-5@20251001",
    foundry: "claude-haiku-4-5"
  };
  CLAUDE_SONNET_4_CONFIG = {
    firstParty: "claude-sonnet-4-20250514",
    bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
    vertex: "claude-sonnet-4@20250514",
    foundry: "claude-sonnet-4"
  };
  CLAUDE_SONNET_4_5_CONFIG = {
    firstParty: "claude-sonnet-4-5-20250929",
    bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
    vertex: "claude-sonnet-4-5@20250929",
    foundry: "claude-sonnet-4-5"
  };
  CLAUDE_OPUS_4_CONFIG = {
    firstParty: "claude-opus-4-20250514",
    bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
    vertex: "claude-opus-4@20250514",
    foundry: "claude-opus-4"
  };
  CLAUDE_OPUS_4_1_CONFIG = {
    firstParty: "claude-opus-4-1-20250805",
    bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
    vertex: "claude-opus-4-1@20250805",
    foundry: "claude-opus-4-1"
  };
  CLAUDE_OPUS_4_5_CONFIG = {
    firstParty: "claude-opus-4-5-20251101",
    bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0",
    vertex: "claude-opus-4-5@20251101",
    foundry: "claude-opus-4-5"
  };
  CLAUDE_OPUS_4_6_CONFIG = {
    firstParty: "claude-opus-4-6",
    bedrock: "us.anthropic.claude-opus-4-6-v1",
    vertex: "claude-opus-4-6",
    foundry: "claude-opus-4-6"
  };
  CLAUDE_SONNET_4_6_CONFIG = {
    firstParty: "claude-sonnet-4-6",
    bedrock: "us.anthropic.claude-sonnet-4-6",
    vertex: "claude-sonnet-4-6",
    foundry: "claude-sonnet-4-6"
  };
  ALL_MODEL_CONFIGS = {
    haiku35: CLAUDE_3_5_HAIKU_CONFIG,
    haiku45: CLAUDE_HAIKU_4_5_CONFIG,
    sonnet35: CLAUDE_3_5_V2_SONNET_CONFIG,
    sonnet37: CLAUDE_3_7_SONNET_CONFIG,
    sonnet40: CLAUDE_SONNET_4_CONFIG,
    sonnet45: CLAUDE_SONNET_4_5_CONFIG,
    sonnet46: CLAUDE_SONNET_4_6_CONFIG,
    opus40: CLAUDE_OPUS_4_CONFIG,
    opus41: CLAUDE_OPUS_4_1_CONFIG,
    opus45: CLAUDE_OPUS_4_5_CONFIG,
    opus46: CLAUDE_OPUS_4_6_CONFIG
  };
  CANONICAL_MODEL_IDS = Object.values(ALL_MODEL_CONFIGS).map((c) => c.firstParty);
  CANONICAL_ID_TO_KEY = Object.fromEntries(Object.entries(ALL_MODEL_CONFIGS).map(([key, cfg]) => [cfg.firstParty, key]));
});

// src/utils/modelCost.ts
function getOpus46CostTier(fastMode) {
  if (isFastModeEnabled() && fastMode) {
    return COST_TIER_30_150;
  }
  return COST_TIER_5_25;
}
function tokensToUSDCost(modelCosts, usage) {
  return usage.input_tokens / 1e6 * modelCosts.inputTokens + usage.output_tokens / 1e6 * modelCosts.outputTokens + (usage.cache_read_input_tokens ?? 0) / 1e6 * modelCosts.promptCacheReadTokens + (usage.cache_creation_input_tokens ?? 0) / 1e6 * modelCosts.promptCacheWriteTokens + (usage.server_tool_use?.web_search_requests ?? 0) * modelCosts.webSearchRequests;
}
function getModelCosts(model, usage) {
  if (!model)
    return DEFAULT_UNKNOWN_MODEL_COST;
  if (process.env.BETT_CODE_PROVIDER === "ollama") {
    return { inputTokens: 0, outputTokens: 0, promptCacheWriteTokens: 0, promptCacheReadTokens: 0, webSearchRequests: 0 };
  }
  const externalCosts = EXTERNAL_MODEL_COSTS[model];
  if (externalCosts)
    return externalCosts;
  const stripped = model.includes("/") ? model.split("/").pop() : "";
  if (stripped && EXTERNAL_MODEL_COSTS[stripped])
    return EXTERNAL_MODEL_COSTS[stripped];
  if (process.env.BETT_CODE_PROVIDER && process.env.BETT_CODE_PROVIDER !== "anthropic") {
    return DEFAULT_UNKNOWN_MODEL_COST;
  }
  const shortName = getCanonicalName(model);
  if (shortName === firstPartyNameToCanonical(CLAUDE_OPUS_4_6_CONFIG.firstParty)) {
    const isFastMode = usage.speed === "fast";
    return getOpus46CostTier(isFastMode);
  }
  const costs = MODEL_COSTS[shortName];
  if (!costs) {
    trackUnknownModelCost(model, shortName);
    return MODEL_COSTS[getCanonicalName(getDefaultMainLoopModelSetting())] ?? DEFAULT_UNKNOWN_MODEL_COST;
  }
  return costs;
}
function trackUnknownModelCost(model, shortName) {
  logEvent("tengu_unknown_model_cost", {
    model,
    shortName
  });
  setHasUnknownModelCost();
}
function calculateUSDCost(resolvedModel, usage) {
  try {
    const modelCosts = getModelCosts(resolvedModel, usage);
    return tokensToUSDCost(modelCosts, usage);
  } catch {
    return 0;
  }
}
function formatPrice(price) {
  if (Number.isInteger(price)) {
    return `$${price}`;
  }
  return `$${price.toFixed(2)}`;
}
function formatModelPricing(costs) {
  return `${formatPrice(costs.inputTokens)}/${formatPrice(costs.outputTokens)} per Mtok`;
}
var COST_TIER_3_15, COST_TIER_15_75, COST_TIER_5_25, COST_TIER_30_150, COST_HAIKU_35, COST_HAIKU_45, COST_GPT4O, COST_GPT4O_MINI, COST_O3, COST_O3_MINI, COST_O4_MINI, COST_GPT4_TURBO, COST_O1, COST_O1_MINI, COST_CODEX_MINI, COST_GEMINI_2_FLASH, COST_GEMINI_2_5_PRO, COST_GEMINI_2_5_FLASH, COST_GPT41, COST_GPT41_MINI, COST_GPT41_NANO, EXTERNAL_MODEL_COSTS, DEFAULT_UNKNOWN_MODEL_COST, MODEL_COSTS;
var init_modelCost = __esm(() => {
  init_analytics();
  init_state();
  init_fastMode();
  init_configs();
  init_model();
  COST_TIER_3_15 = {
    inputTokens: 3,
    outputTokens: 15,
    promptCacheWriteTokens: 3.75,
    promptCacheReadTokens: 0.3,
    webSearchRequests: 0.01
  };
  COST_TIER_15_75 = {
    inputTokens: 15,
    outputTokens: 75,
    promptCacheWriteTokens: 18.75,
    promptCacheReadTokens: 1.5,
    webSearchRequests: 0.01
  };
  COST_TIER_5_25 = {
    inputTokens: 5,
    outputTokens: 25,
    promptCacheWriteTokens: 6.25,
    promptCacheReadTokens: 0.5,
    webSearchRequests: 0.01
  };
  COST_TIER_30_150 = {
    inputTokens: 30,
    outputTokens: 150,
    promptCacheWriteTokens: 37.5,
    promptCacheReadTokens: 3,
    webSearchRequests: 0.01
  };
  COST_HAIKU_35 = {
    inputTokens: 0.8,
    outputTokens: 4,
    promptCacheWriteTokens: 1,
    promptCacheReadTokens: 0.08,
    webSearchRequests: 0.01
  };
  COST_HAIKU_45 = {
    inputTokens: 1,
    outputTokens: 5,
    promptCacheWriteTokens: 1.25,
    promptCacheReadTokens: 0.1,
    webSearchRequests: 0.01
  };
  COST_GPT4O = {
    inputTokens: 2.5,
    outputTokens: 10,
    promptCacheWriteTokens: 2.5,
    promptCacheReadTokens: 1.25,
    webSearchRequests: 0
  };
  COST_GPT4O_MINI = {
    inputTokens: 0.15,
    outputTokens: 0.6,
    promptCacheWriteTokens: 0.15,
    promptCacheReadTokens: 0.075,
    webSearchRequests: 0
  };
  COST_O3 = {
    inputTokens: 2,
    outputTokens: 8,
    promptCacheWriteTokens: 2,
    promptCacheReadTokens: 1,
    webSearchRequests: 0
  };
  COST_O3_MINI = {
    inputTokens: 1.1,
    outputTokens: 4.4,
    promptCacheWriteTokens: 1.1,
    promptCacheReadTokens: 0.55,
    webSearchRequests: 0
  };
  COST_O4_MINI = {
    inputTokens: 1.1,
    outputTokens: 4.4,
    promptCacheWriteTokens: 1.1,
    promptCacheReadTokens: 0.55,
    webSearchRequests: 0
  };
  COST_GPT4_TURBO = {
    inputTokens: 10,
    outputTokens: 30,
    promptCacheWriteTokens: 10,
    promptCacheReadTokens: 5,
    webSearchRequests: 0
  };
  COST_O1 = {
    inputTokens: 15,
    outputTokens: 60,
    promptCacheWriteTokens: 15,
    promptCacheReadTokens: 7.5,
    webSearchRequests: 0
  };
  COST_O1_MINI = {
    inputTokens: 1.1,
    outputTokens: 4.4,
    promptCacheWriteTokens: 1.1,
    promptCacheReadTokens: 0.55,
    webSearchRequests: 0
  };
  COST_CODEX_MINI = {
    inputTokens: 1.5,
    outputTokens: 6,
    promptCacheWriteTokens: 1.5,
    promptCacheReadTokens: 0.75,
    webSearchRequests: 0
  };
  COST_GEMINI_2_FLASH = {
    inputTokens: 0.1,
    outputTokens: 0.4,
    promptCacheWriteTokens: 0.1,
    promptCacheReadTokens: 0.025,
    webSearchRequests: 0
  };
  COST_GEMINI_2_5_PRO = {
    inputTokens: 1.25,
    outputTokens: 10,
    promptCacheWriteTokens: 1.25,
    promptCacheReadTokens: 0.31,
    webSearchRequests: 0
  };
  COST_GEMINI_2_5_FLASH = {
    inputTokens: 0.15,
    outputTokens: 0.6,
    promptCacheWriteTokens: 0.15,
    promptCacheReadTokens: 0.0375,
    webSearchRequests: 0
  };
  COST_GPT41 = {
    inputTokens: 2,
    outputTokens: 8,
    promptCacheWriteTokens: 2,
    promptCacheReadTokens: 0.5,
    webSearchRequests: 0
  };
  COST_GPT41_MINI = {
    inputTokens: 0.4,
    outputTokens: 1.6,
    promptCacheWriteTokens: 0.4,
    promptCacheReadTokens: 0.1,
    webSearchRequests: 0
  };
  COST_GPT41_NANO = {
    inputTokens: 0.1,
    outputTokens: 0.4,
    promptCacheWriteTokens: 0.1,
    promptCacheReadTokens: 0.025,
    webSearchRequests: 0
  };
  EXTERNAL_MODEL_COSTS = {
    "gpt-4.1": COST_GPT41,
    "gpt-4.1-2025-04-14": COST_GPT41,
    "gpt-4.1-mini": COST_GPT41_MINI,
    "gpt-4.1-mini-2025-04-14": COST_GPT41_MINI,
    "gpt-4.1-nano": COST_GPT41_NANO,
    "gpt-4.1-nano-2025-04-14": COST_GPT41_NANO,
    "gpt-4o": COST_GPT4O,
    "gpt-4o-2024-08-06": COST_GPT4O,
    "gpt-4o-2024-11-20": COST_GPT4O,
    "gpt-4o-mini": COST_GPT4O_MINI,
    "gpt-4o-mini-2024-07-18": COST_GPT4O_MINI,
    "gpt-4-turbo": COST_GPT4_TURBO,
    "gpt-4-turbo-2024-04-09": COST_GPT4_TURBO,
    o1: COST_O1,
    "o1-2024-12-17": COST_O1,
    "o1-mini": COST_O1_MINI,
    "o1-mini-2024-09-12": COST_O1_MINI,
    o3: COST_O3,
    "o3-2025-04-16": COST_O3,
    "o3-mini": COST_O3_MINI,
    "o3-mini-2025-01-31": COST_O3_MINI,
    "o4-mini": COST_O4_MINI,
    "o4-mini-2025-04-16": COST_O4_MINI,
    "codex-mini-latest": COST_CODEX_MINI,
    "gemini-2.0-flash": COST_GEMINI_2_FLASH,
    "gemini-2.0-flash-exp": COST_GEMINI_2_FLASH,
    "gemini-2.5-pro": COST_GEMINI_2_5_PRO,
    "gemini-2.5-pro-preview-05-06": COST_GEMINI_2_5_PRO,
    "gemini-2.5-flash": COST_GEMINI_2_5_FLASH,
    "gemini-2.5-flash-preview-04-17": COST_GEMINI_2_5_FLASH
  };
  DEFAULT_UNKNOWN_MODEL_COST = COST_TIER_5_25;
  MODEL_COSTS = {
    [firstPartyNameToCanonical(CLAUDE_3_5_HAIKU_CONFIG.firstParty)]: COST_HAIKU_35,
    [firstPartyNameToCanonical(CLAUDE_HAIKU_4_5_CONFIG.firstParty)]: COST_HAIKU_45,
    [firstPartyNameToCanonical(CLAUDE_3_5_V2_SONNET_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_3_7_SONNET_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_SONNET_4_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_SONNET_4_5_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_SONNET_4_6_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_CONFIG.firstParty)]: COST_TIER_15_75,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_1_CONFIG.firstParty)]: COST_TIER_15_75,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_5_CONFIG.firstParty)]: COST_TIER_5_25,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_6_CONFIG.firstParty)]: COST_TIER_5_25
  };
});

// src/constants/figures.ts
var BLACK_CIRCLE, TEARDROP_ASTERISK = "\u273B", UP_ARROW = "\u2191", DOWN_ARROW = "\u2193", LIGHTNING_BOLT = "\u21AF", EFFORT_LOW = "\u25CB", EFFORT_MEDIUM = "\u25D0", EFFORT_HIGH = "\u25CF", EFFORT_MAX = "\u25C9", PAUSE_ICON = "\u23F8", REFRESH_ARROW = "\u21BB", DIAMOND_OPEN = "\u25C7", DIAMOND_FILLED = "\u25C6", REFERENCE_MARK = "\u203B", BLOCKQUOTE_BAR = "\u258E", BRIDGE_READY_INDICATOR = "\xB7\u2714\uFE0E\xB7", BRIDGE_FAILED_INDICATOR = "\xD7";
var init_figures = __esm(() => {
  init_env();
  BLACK_CIRCLE = env.platform === "darwin" ? "\u23FA" : "\u25CF";
});

// src/utils/model/aliases.ts
function isModelAlias(modelInput) {
  return MODEL_ALIASES.includes(modelInput);
}
function isModelFamilyAlias(model) {
  return MODEL_FAMILY_ALIASES.includes(model);
}
var MODEL_ALIASES, MODEL_FAMILY_ALIASES;
var init_aliases = __esm(() => {
  MODEL_ALIASES = [
    "sonnet",
    "opus",
    "haiku",
    "best",
    "sonnet[1m]",
    "opus[1m]",
    "opusplan"
  ];
  MODEL_FAMILY_ALIASES = ["sonnet", "opus", "haiku"];
});

// src/utils/model/modelAllowlist.ts
function modelBelongsToFamily(model, family) {
  if (!model)
    return false;
  if (model.includes(family)) {
    return true;
  }
  if (isModelAlias(model)) {
    const resolved = parseUserSpecifiedModel(model).toLowerCase();
    return resolved.includes(family);
  }
  return false;
}
function prefixMatchesModel(modelName, prefix) {
  if (!modelName.startsWith(prefix)) {
    return false;
  }
  return modelName.length === prefix.length || modelName[prefix.length] === "-";
}
function modelMatchesVersionPrefix(model, entry) {
  const resolvedModel = isModelAlias(model) ? parseUserSpecifiedModel(model).toLowerCase() : model;
  if (prefixMatchesModel(resolvedModel, entry)) {
    return true;
  }
  if (!entry.startsWith("claude-") && prefixMatchesModel(resolvedModel, `claude-${entry}`)) {
    return true;
  }
  return false;
}
function familyHasSpecificEntries(family, allowlist) {
  for (const entry of allowlist) {
    if (isModelFamilyAlias(entry)) {
      continue;
    }
    const idx = entry.indexOf(family);
    if (idx === -1) {
      continue;
    }
    const afterFamily = idx + family.length;
    if (afterFamily === entry.length || entry[afterFamily] === "-") {
      return true;
    }
  }
  return false;
}
function isModelAllowed(model) {
  const settings = getSettings_DEPRECATED() || {};
  const { availableModels } = settings;
  if (!availableModels) {
    return true;
  }
  if (availableModels.length === 0) {
    return false;
  }
  const resolvedModel = resolveOverriddenModel(model);
  const normalizedModel = resolvedModel.trim().toLowerCase();
  const normalizedAllowlist = availableModels.map((m) => m.trim().toLowerCase());
  if (normalizedAllowlist.includes(normalizedModel)) {
    if (!isModelFamilyAlias(normalizedModel) || !familyHasSpecificEntries(normalizedModel, normalizedAllowlist)) {
      return true;
    }
  }
  for (const entry of normalizedAllowlist) {
    if (isModelFamilyAlias(entry) && !familyHasSpecificEntries(entry, normalizedAllowlist) && modelBelongsToFamily(normalizedModel, entry)) {
      return true;
    }
  }
  if (isModelAlias(normalizedModel)) {
    const resolved = parseUserSpecifiedModel(normalizedModel).toLowerCase();
    if (normalizedAllowlist.includes(resolved)) {
      return true;
    }
  }
  for (const entry of normalizedAllowlist) {
    if (!isModelFamilyAlias(entry) && isModelAlias(entry)) {
      const resolved = parseUserSpecifiedModel(entry).toLowerCase();
      if (resolved === normalizedModel) {
        return true;
      }
    }
  }
  for (const entry of normalizedAllowlist) {
    if (!isModelFamilyAlias(entry) && !isModelAlias(entry)) {
      if (modelMatchesVersionPrefix(normalizedModel, entry)) {
        return true;
      }
    }
  }
  return false;
}
var init_modelAllowlist = __esm(() => {
  init_settings2();
  init_aliases();
  init_model();
  init_modelStrings();
});

// src/utils/stringUtils.ts
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function plural(n, word, pluralWord = word + "s") {
  return n === 1 ? word : pluralWord;
}
function firstLineOf(s) {
  const nl = s.indexOf(`
`);
  return nl === -1 ? s : s.slice(0, nl);
}
function countCharInString(str, char, start = 0) {
  let count2 = 0;
  let i = str.indexOf(char, start);
  while (i !== -1) {
    count2++;
    i = str.indexOf(char, i + 1);
  }
  return count2;
}
function normalizeFullWidthDigits(input) {
  return input.replace(/[\uFF10-\uFF19]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 65248));
}
function normalizeFullWidthSpace(input) {
  return input.replace(/\u3000/g, " ");
}
function safeJoinLines(lines, delimiter = ",", maxSize = MAX_STRING_LENGTH) {
  const truncationMarker = "...[truncated]";
  let result = "";
  for (const line of lines) {
    const delimiterToAdd = result ? delimiter : "";
    const fullAddition = delimiterToAdd + line;
    if (result.length + fullAddition.length <= maxSize) {
      result += fullAddition;
    } else {
      const remainingSpace = maxSize - result.length - delimiterToAdd.length - truncationMarker.length;
      if (remainingSpace > 0) {
        result += delimiterToAdd + line.slice(0, remainingSpace) + truncationMarker;
      } else {
        result += truncationMarker;
      }
      return result;
    }
  }
  return result;
}

class EndTruncatingAccumulator {
  maxSize;
  content = "";
  isTruncated = false;
  totalBytesReceived = 0;
  constructor(maxSize = MAX_STRING_LENGTH) {
    this.maxSize = maxSize;
  }
  append(data) {
    const str = typeof data === "string" ? data : data.toString();
    this.totalBytesReceived += str.length;
    if (this.isTruncated && this.content.length >= this.maxSize) {
      return;
    }
    if (this.content.length + str.length > this.maxSize) {
      const remainingSpace = this.maxSize - this.content.length;
      if (remainingSpace > 0) {
        this.content += str.slice(0, remainingSpace);
      }
      this.isTruncated = true;
    } else {
      this.content += str;
    }
  }
  toString() {
    if (!this.isTruncated) {
      return this.content;
    }
    const truncatedBytes = this.totalBytesReceived - this.maxSize;
    const truncatedKB = Math.round(truncatedBytes / 1024);
    return this.content + `
... [output truncated - ${truncatedKB}KB removed]`;
  }
  clear() {
    this.content = "";
    this.isTruncated = false;
    this.totalBytesReceived = 0;
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}
function truncateToLines(text, maxLines) {
  const lines = text.split(`
`);
  if (lines.length <= maxLines) {
    return text;
  }
  return lines.slice(0, maxLines).join(`
`) + "\u2026";
}
var MAX_STRING_LENGTH;
var init_stringUtils = __esm(() => {
  MAX_STRING_LENGTH = 2 ** 25;
});

// src/utils/model/model.ts
function getSmallFastModel() {
  return process.env.ANTHROPIC_SMALL_FAST_MODEL || getDefaultHaikuModel();
}
function isNonCustomOpusModel(model) {
  return model === getModelStrings2().opus40 || model === getModelStrings2().opus41 || model === getModelStrings2().opus45 || model === getModelStrings2().opus46;
}
function getUserSpecifiedModelSetting() {
  let specifiedModel;
  const modelOverride = getMainLoopModelOverride();
  if (modelOverride !== undefined) {
    specifiedModel = modelOverride;
  } else {
    const settings = getSettings_DEPRECATED() || {};
    specifiedModel = process.env.ANTHROPIC_MODEL || settings.model || undefined;
  }
  if (specifiedModel && !isModelAllowed(specifiedModel)) {
    return;
  }
  return specifiedModel;
}
function getMainLoopModel() {
  const model = getUserSpecifiedModelSetting();
  if (model !== undefined && model !== null) {
    return parseUserSpecifiedModel(model);
  }
  return getDefaultMainLoopModel();
}
function getBestModel() {
  return getDefaultOpusModel();
}
function getDefaultOpusModel() {
  if (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL) {
    return process.env.ANTHROPIC_DEFAULT_OPUS_MODEL;
  }
  if (getAPIProvider() !== "firstParty") {
    return getModelStrings2().opus46;
  }
  return getModelStrings2().opus46;
}
function getDefaultSonnetModel() {
  if (process.env.ANTHROPIC_DEFAULT_SONNET_MODEL) {
    return process.env.ANTHROPIC_DEFAULT_SONNET_MODEL;
  }
  if (getAPIProvider() !== "firstParty") {
    return getModelStrings2().sonnet45;
  }
  return getModelStrings2().sonnet46;
}
function getDefaultHaikuModel() {
  if (process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL) {
    return process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL;
  }
  return getModelStrings2().haiku45;
}
function getRuntimeMainLoopModel(params) {
  const { permissionMode, mainLoopModel, exceeds200kTokens = false } = params;
  if (getUserSpecifiedModelSetting() === "opusplan" && permissionMode === "plan" && !exceeds200kTokens) {
    return getDefaultOpusModel();
  }
  if (getUserSpecifiedModelSetting() === "haiku" && permissionMode === "plan") {
    return getDefaultSonnetModel();
  }
  return mainLoopModel;
}
function getDefaultMainLoopModelSetting() {
  if (false) {}
  if (isMaxSubscriber()) {
    return getDefaultOpusModel() + (isOpus1mMergeEnabled() ? "[1m]" : "");
  }
  if (isTeamPremiumSubscriber()) {
    return getDefaultOpusModel() + (isOpus1mMergeEnabled() ? "[1m]" : "");
  }
  return getDefaultSonnetModel();
}
function getDefaultMainLoopModel() {
  return parseUserSpecifiedModel(getDefaultMainLoopModelSetting());
}
function firstPartyNameToCanonical(name) {
  if (!name)
    return "unknown";
  name = name.toLowerCase();
  if (name.includes("claude-opus-4-6")) {
    return "claude-opus-4-6";
  }
  if (name.includes("claude-opus-4-5")) {
    return "claude-opus-4-5";
  }
  if (name.includes("claude-opus-4-1")) {
    return "claude-opus-4-1";
  }
  if (name.includes("claude-opus-4")) {
    return "claude-opus-4";
  }
  if (name.includes("claude-sonnet-4-6")) {
    return "claude-sonnet-4-6";
  }
  if (name.includes("claude-sonnet-4-5")) {
    return "claude-sonnet-4-5";
  }
  if (name.includes("claude-sonnet-4")) {
    return "claude-sonnet-4";
  }
  if (name.includes("claude-haiku-4-5")) {
    return "claude-haiku-4-5";
  }
  if (name.includes("claude-3-7-sonnet")) {
    return "claude-3-7-sonnet";
  }
  if (name.includes("claude-3-5-sonnet")) {
    return "claude-3-5-sonnet";
  }
  if (name.includes("claude-3-5-haiku")) {
    return "claude-3-5-haiku";
  }
  if (name.includes("claude-3-opus")) {
    return "claude-3-opus";
  }
  if (name.includes("claude-3-sonnet")) {
    return "claude-3-sonnet";
  }
  if (name.includes("claude-3-haiku")) {
    return "claude-3-haiku";
  }
  const match = name.match(/(claude-(\d+-\d+-)?\w+)/);
  if (match && match[1]) {
    return match[1];
  }
  return name;
}
function getCanonicalName(fullModelName) {
  return firstPartyNameToCanonical(resolveOverriddenModel(fullModelName));
}
function getClaudeAiUserDefaultModelDescription(fastMode = false) {
  if (isMaxSubscriber() || isTeamPremiumSubscriber()) {
    if (isOpus1mMergeEnabled()) {
      return `Opus 4.6 with 1M context \xB7 Most capable for complex work${fastMode ? getOpus46PricingSuffix(true) : ""}`;
    }
    return `Opus 4.6 \xB7 Most capable for complex work${fastMode ? getOpus46PricingSuffix(true) : ""}`;
  }
  return "Sonnet 4.6 \xB7 Best for everyday tasks";
}
function renderDefaultModelSetting(setting) {
  if (setting === "opusplan") {
    return "Opus 4.6 in plan mode, else Sonnet 4.6";
  }
  return renderModelName(parseUserSpecifiedModel(setting));
}
function getOpus46PricingSuffix(fastMode) {
  if (getAPIProvider() !== "firstParty")
    return "";
  const pricing = formatModelPricing(getOpus46CostTier(fastMode));
  const fastModeIndicator = fastMode ? ` (${LIGHTNING_BOLT})` : "";
  return ` \xB7${fastModeIndicator} ${pricing}`;
}
function isOpus1mMergeEnabled() {
  if (is1mContextDisabled() || isProSubscriber() || getAPIProvider() !== "firstParty") {
    return false;
  }
  if (isClaudeAISubscriber() && getSubscriptionType() === null) {
    return false;
  }
  return true;
}
function renderModelSetting(setting) {
  if (setting === "opusplan") {
    return "Opus Plan";
  }
  if (isModelAlias(setting)) {
    return capitalize(setting);
  }
  return renderModelName(setting);
}
function getPublicModelDisplayName(model) {
  switch (model) {
    case getModelStrings2().opus46:
      return "Opus 4.6";
    case getModelStrings2().opus46 + "[1m]":
      return "Opus 4.6 (1M context)";
    case getModelStrings2().opus45:
      return "Opus 4.5";
    case getModelStrings2().opus41:
      return "Opus 4.1";
    case getModelStrings2().opus40:
      return "Opus 4";
    case getModelStrings2().sonnet46 + "[1m]":
      return "Sonnet 4.6 (1M context)";
    case getModelStrings2().sonnet46:
      return "Sonnet 4.6";
    case getModelStrings2().sonnet45 + "[1m]":
      return "Sonnet 4.5 (1M context)";
    case getModelStrings2().sonnet45:
      return "Sonnet 4.5";
    case getModelStrings2().sonnet40:
      return "Sonnet 4";
    case getModelStrings2().sonnet40 + "[1m]":
      return "Sonnet 4 (1M context)";
    case getModelStrings2().sonnet37:
      return "Sonnet 3.7";
    case getModelStrings2().sonnet35:
      return "Sonnet 3.5";
    case getModelStrings2().haiku45:
      return "Haiku 4.5";
    case getModelStrings2().haiku35:
      return "Haiku 3.5";
    default:
      return null;
  }
}
function renderModelName(model) {
  const publicName = getPublicModelDisplayName(model);
  if (publicName) {
    return publicName;
  }
  if (false) {}
  return model;
}
function getPublicModelName(model) {
  const publicName = getPublicModelDisplayName(model);
  if (publicName) {
    return `Claude ${publicName}`;
  }
  return `Claude (${model})`;
}
function parseUserSpecifiedModel(modelInput) {
  if (!modelInput)
    return modelInput;
  const modelInputTrimmed = modelInput.trim();
  const normalizedModel = modelInputTrimmed.toLowerCase();
  const has1mTag = has1mContext(normalizedModel);
  const modelString = has1mTag ? normalizedModel.replace(/\[1m]$/i, "").trim() : normalizedModel;
  if (isModelAlias(modelString)) {
    switch (modelString) {
      case "opusplan":
        return getDefaultSonnetModel() + (has1mTag ? "[1m]" : "");
      case "sonnet":
        return getDefaultSonnetModel() + (has1mTag ? "[1m]" : "");
      case "haiku":
        return getDefaultHaikuModel() + (has1mTag ? "[1m]" : "");
      case "opus":
        return getDefaultOpusModel() + (has1mTag ? "[1m]" : "");
      case "best":
        return getBestModel();
      default:
    }
  }
  if (getAPIProvider() === "firstParty" && isLegacyOpusFirstParty(modelString) && isLegacyModelRemapEnabled()) {
    return getDefaultOpusModel() + (has1mTag ? "[1m]" : "");
  }
  if (false) {}
  if (has1mTag) {
    return modelInputTrimmed.replace(/\[1m\]$/i, "").trim() + "[1m]";
  }
  return modelInputTrimmed;
}
function resolveSkillModelOverride(skillModel, currentModel) {
  if (has1mContext(skillModel) || !has1mContext(currentModel)) {
    return skillModel;
  }
  if (modelSupports1M(parseUserSpecifiedModel(skillModel))) {
    return skillModel + "[1m]";
  }
  return skillModel;
}
function isLegacyOpusFirstParty(model) {
  return LEGACY_OPUS_FIRSTPARTY.includes(model);
}
function isLegacyModelRemapEnabled() {
  return !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP);
}
function modelDisplayString(model) {
  if (model === null) {
    if (false) {} else if (isClaudeAISubscriber()) {
      return `Default (${getClaudeAiUserDefaultModelDescription()})`;
    }
    return `Default (${getDefaultMainLoopModel()})`;
  }
  const resolvedModel = parseUserSpecifiedModel(model);
  return model === resolvedModel ? resolvedModel : `${model} (${resolvedModel})`;
}
function getMarketingNameForModel(modelId) {
  if (getAPIProvider() === "foundry") {
    return;
  }
  const has1m = modelId.toLowerCase().includes("[1m]");
  const canonical = getCanonicalName(modelId);
  if (canonical.includes("claude-opus-4-6")) {
    return has1m ? "Opus 4.6 (with 1M context)" : "Opus 4.6";
  }
  if (canonical.includes("claude-opus-4-5")) {
    return "Opus 4.5";
  }
  if (canonical.includes("claude-opus-4-1")) {
    return "Opus 4.1";
  }
  if (canonical.includes("claude-opus-4")) {
    return "Opus 4";
  }
  if (canonical.includes("claude-sonnet-4-6")) {
    return has1m ? "Sonnet 4.6 (with 1M context)" : "Sonnet 4.6";
  }
  if (canonical.includes("claude-sonnet-4-5")) {
    return has1m ? "Sonnet 4.5 (with 1M context)" : "Sonnet 4.5";
  }
  if (canonical.includes("claude-sonnet-4")) {
    return has1m ? "Sonnet 4 (with 1M context)" : "Sonnet 4";
  }
  if (canonical.includes("claude-3-7-sonnet")) {
    return "Claude 3.7 Sonnet";
  }
  if (canonical.includes("claude-3-5-sonnet")) {
    return "Claude 3.5 Sonnet";
  }
  if (canonical.includes("claude-haiku-4-5")) {
    return "Haiku 4.5";
  }
  if (canonical.includes("claude-3-5-haiku")) {
    return "Claude 3.5 Haiku";
  }
  return;
}
function normalizeModelStringForAPI(model) {
  if (!model)
    return "";
  return model.replace(/\[(1|2)m\]/gi, "");
}
var LEGACY_OPUS_FIRSTPARTY;
var init_model = __esm(() => {
  init_state();
  init_auth2();
  init_context();
  init_envUtils();
  init_modelStrings();
  init_modelCost();
  init_settings2();
  init_providers();
  init_figures();
  init_modelAllowlist();
  init_aliases();
  init_stringUtils();
  LEGACY_OPUS_FIRSTPARTY = [
    "claude-opus-4-20250514",
    "claude-opus-4-1-20250805",
    "claude-opus-4-0",
    "claude-opus-4-1"
  ];
});

// src/services/api/client.ts
import { randomUUID } from "crypto";
function createStderrLogger() {
  return {
    error: (msg, ...args) => console.error("[Anthropic SDK ERROR]", msg, ...args),
    warn: (msg, ...args) => console.error("[Anthropic SDK WARN]", msg, ...args),
    info: (msg, ...args) => console.error("[Anthropic SDK INFO]", msg, ...args),
    debug: (msg, ...args) => console.error("[Anthropic SDK DEBUG]", msg, ...args)
  };
}
async function getAnthropicClient({
  apiKey,
  maxRetries,
  model,
  fetchOverride,
  source
}) {
  if (process.env.BETT_CODE_PROVIDER && process.env.BETT_CODE_PROVIDER !== "anthropic") {
    const emptyMsg = { id: "msg_stub", type: "message", role: "assistant", content: [], model: model || "stub", stop_reason: "end_turn", stop_sequence: null, usage: { input_tokens: 0, output_tokens: 0 } };
    const createFn = () => Promise.resolve(emptyMsg);
    const withResponseFn = () => Promise.resolve({ data: emptyMsg, response: new Response, request_id: null });
    createFn.withResponse = withResponseFn;
    const messagesStub = { create: (..._args) => {
      const p = createFn();
      p.withResponse = withResponseFn;
      return p;
    } };
    return { beta: { messages: messagesStub }, messages: messagesStub };
  }
  const containerId = process.env.CLAUDE_CODE_CONTAINER_ID;
  const remoteSessionId = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  const clientApp = process.env.CLAUDE_AGENT_SDK_CLIENT_APP;
  const customHeaders = getCustomHeaders();
  const defaultHeaders = {
    "x-app": "cli",
    "User-Agent": getUserAgent(),
    "X-Claude-Code-Session-Id": getSessionId(),
    ...customHeaders,
    ...containerId ? { "x-claude-remote-container-id": containerId } : {},
    ...remoteSessionId ? { "x-claude-remote-session-id": remoteSessionId } : {},
    ...clientApp ? { "x-client-app": clientApp } : {}
  };
  logForDebugging(`[API:request] Creating client, ANTHROPIC_CUSTOM_HEADERS present: ${!!process.env.ANTHROPIC_CUSTOM_HEADERS}, has Authorization header: ${!!customHeaders["Authorization"]}`);
  const additionalProtectionEnabled = isEnvTruthy(process.env.CLAUDE_CODE_ADDITIONAL_PROTECTION);
  if (additionalProtectionEnabled) {
    defaultHeaders["x-anthropic-additional-protection"] = "true";
  }
  logForDebugging("[API:auth] OAuth token check starting");
  await checkAndRefreshOAuthTokenIfNeeded();
  logForDebugging("[API:auth] OAuth token check complete");
  if (!isClaudeAISubscriber()) {
    await configureApiKeyHeaders(defaultHeaders, getIsNonInteractiveSession());
  }
  const resolvedFetch = buildFetch(fetchOverride, source);
  const ARGS = {
    defaultHeaders,
    maxRetries,
    timeout: parseInt(process.env.API_TIMEOUT_MS || String(600 * 1000), 10),
    dangerouslyAllowBrowser: true,
    fetchOptions: getProxyFetchOptions({
      forAnthropicAPI: true
    }),
    ...resolvedFetch && {
      fetch: resolvedFetch
    }
  };
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK)) {
    const { AnthropicBedrock } = await import("@anthropic-ai/bedrock-sdk");
    const awsRegion = model === getSmallFastModel() && process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION ? process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION : getAWSRegion();
    const bedrockArgs = {
      ...ARGS,
      awsRegion,
      ...isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH) && {
        skipAuth: true
      },
      ...isDebugToStdErr() && { logger: createStderrLogger() }
    };
    if (process.env.AWS_BEARER_TOKEN_BEDROCK) {
      bedrockArgs.skipAuth = true;
      bedrockArgs.defaultHeaders = {
        ...bedrockArgs.defaultHeaders,
        Authorization: `Bearer ${process.env.AWS_BEARER_TOKEN_BEDROCK}`
      };
    } else if (!isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH)) {
      const cachedCredentials = await refreshAndGetAwsCredentials();
      if (cachedCredentials) {
        bedrockArgs.awsAccessKey = cachedCredentials.accessKeyId;
        bedrockArgs.awsSecretKey = cachedCredentials.secretAccessKey;
        bedrockArgs.awsSessionToken = cachedCredentials.sessionToken;
      }
    }
    return new AnthropicBedrock(bedrockArgs);
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY)) {
    const { AnthropicFoundry } = await import("@anthropic-ai/foundry-sdk");
    let azureADTokenProvider;
    if (!process.env.ANTHROPIC_FOUNDRY_API_KEY) {
      if (isEnvTruthy(process.env.CLAUDE_CODE_SKIP_FOUNDRY_AUTH)) {
        azureADTokenProvider = () => Promise.resolve("");
      } else {
        const {
          DefaultAzureCredential: AzureCredential,
          getBearerTokenProvider
        } = await import("@azure/identity");
        azureADTokenProvider = getBearerTokenProvider(new AzureCredential, "https://cognitiveservices.azure.com/.default");
      }
    }
    const foundryArgs = {
      ...ARGS,
      ...azureADTokenProvider && { azureADTokenProvider },
      ...isDebugToStdErr() && { logger: createStderrLogger() }
    };
    return new AnthropicFoundry(foundryArgs);
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX)) {
    if (!isEnvTruthy(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)) {
      await refreshGcpCredentialsIfNeeded();
    }
    const [{ AnthropicVertex }, { GoogleAuth }] = await Promise.all([
      import("@anthropic-ai/vertex-sdk"),
      import("./chunk-62ct3apc.js").then((m)=>__toESM(m.default,1))
    ]);
    const hasProjectEnvVar = process.env["GCLOUD_PROJECT"] || process.env["GOOGLE_CLOUD_PROJECT"] || process.env["gcloud_project"] || process.env["google_cloud_project"];
    const hasKeyFile = process.env["GOOGLE_APPLICATION_CREDENTIALS"] || process.env["google_application_credentials"];
    const googleAuth = isEnvTruthy(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH) ? {
      getClient: () => ({
        getRequestHeaders: () => ({})
      })
    } : new GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
      ...hasProjectEnvVar || hasKeyFile ? {} : {
        projectId: process.env.ANTHROPIC_VERTEX_PROJECT_ID
      }
    });
    const vertexArgs = {
      ...ARGS,
      region: getVertexRegionForModel(model),
      googleAuth,
      ...isDebugToStdErr() && { logger: createStderrLogger() }
    };
    return new AnthropicVertex(vertexArgs);
  }
  const clientConfig = {
    apiKey: isClaudeAISubscriber() ? null : apiKey || getAnthropicApiKey(),
    authToken: isClaudeAISubscriber() ? getClaudeAIOAuthTokens()?.accessToken : undefined,
    ...{},
    ...ARGS,
    ...isDebugToStdErr() && { logger: createStderrLogger() }
  };
  return new Anthropic(clientConfig);
}
async function configureApiKeyHeaders(headers, isNonInteractiveSession) {
  const token = process.env.ANTHROPIC_AUTH_TOKEN || await getApiKeyFromApiKeyHelper(isNonInteractiveSession);
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
}
function getCustomHeaders() {
  const customHeaders = {};
  const customHeadersEnv = process.env.ANTHROPIC_CUSTOM_HEADERS;
  if (!customHeadersEnv)
    return customHeaders;
  const headerStrings = customHeadersEnv.split(/\n|\r\n/);
  for (const headerString of headerStrings) {
    if (!headerString.trim())
      continue;
    const colonIdx = headerString.indexOf(":");
    if (colonIdx === -1)
      continue;
    const name = headerString.slice(0, colonIdx).trim();
    const value = headerString.slice(colonIdx + 1).trim();
    if (name) {
      customHeaders[name] = value;
    }
  }
  return customHeaders;
}
function buildFetch(fetchOverride, source) {
  const inner = fetchOverride ?? globalThis.fetch;
  const injectClientRequestId = getAPIProvider() === "firstParty" && isFirstPartyAnthropicBaseUrl();
  return (input, init) => {
    const headers = new Headers(init?.headers);
    if (injectClientRequestId && !headers.has(CLIENT_REQUEST_ID_HEADER)) {
      headers.set(CLIENT_REQUEST_ID_HEADER, randomUUID());
    }
    try {
      const url = input instanceof Request ? input.url : String(input);
      const id = headers.get(CLIENT_REQUEST_ID_HEADER);
      logForDebugging(`[API REQUEST] ${new URL(url).pathname}${id ? ` ${CLIENT_REQUEST_ID_HEADER}=${id}` : ""} source=${source ?? "unknown"}`);
    } catch {}
    return inner(input, { ...init, headers });
  };
}
var CLIENT_REQUEST_ID_HEADER = "x-client-request-id";
var init_client = __esm(() => {
  init_sdk();
  init_auth2();
  init_http();
  init_model();
  init_providers();
  init_proxy();
  init_state();
  init_oauth();
  init_debug();
  init_envUtils();
});

// src/utils/model/modelCapabilities.ts
import { readFileSync as readFileSync2 } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { join as join5 } from "path";
function getCacheDir() {
  return join5(getClaudeConfigHomeDir(), "cache");
}
function getCachePath() {
  return join5(getCacheDir(), "model-capabilities.json");
}
function isModelCapabilitiesEligible() {
  if (true)
    return false;
  if (getAPIProvider() !== "firstParty")
    return false;
  if (!isFirstPartyAnthropicBaseUrl())
    return false;
  return true;
}
function sortForMatching(models) {
  return [...models].sort((a, b) => b.id.length - a.id.length || a.id.localeCompare(b.id));
}
function getModelCapability(model) {
  if (!model || !isModelCapabilitiesEligible())
    return;
  const cached = loadCache(getCachePath());
  if (!cached || cached.length === 0)
    return;
  const m = model.toLowerCase();
  const exact = cached.find((c) => c.id.toLowerCase() === m);
  if (exact)
    return exact;
  return cached.find((c) => m.includes(c.id.toLowerCase()));
}
async function refreshModelCapabilities() {
  if (!isModelCapabilitiesEligible())
    return;
  if (isEssentialTrafficOnly())
    return;
  try {
    const anthropic = await getAnthropicClient({ maxRetries: 1 });
    const betas = isClaudeAISubscriber() ? [OAUTH_BETA_HEADER] : undefined;
    const parsed = [];
    for await (const entry of anthropic.models.list({ betas })) {
      const result = ModelCapabilitySchema().safeParse(entry);
      if (result.success)
        parsed.push(result.data);
    }
    if (parsed.length === 0)
      return;
    const path = getCachePath();
    const models = sortForMatching(parsed);
    if (isEqual_default(loadCache(path), models)) {
      logForDebugging("[modelCapabilities] cache unchanged, skipping write");
      return;
    }
    await mkdir(getCacheDir(), { recursive: true });
    await writeFile(path, jsonStringify({ models, timestamp: Date.now() }), {
      encoding: "utf-8",
      mode: 384
    });
    loadCache.cache.delete(path);
    logForDebugging(`[modelCapabilities] cached ${models.length} models`);
  } catch (error) {
    logForDebugging(`[modelCapabilities] fetch failed: ${error instanceof Error ? error.message : "unknown"}`);
  }
}
var ModelCapabilitySchema, CacheFileSchema, loadCache;
var init_modelCapabilities = __esm(() => {
  init_isEqual();
  init_memoize();
  init_v4();
  init_oauth();
  init_client();
  init_auth2();
  init_debug();
  init_envUtils();
  init_json();
  init_lazySchema();
  init_privacyLevel();
  init_slowOperations();
  init_providers();
  ModelCapabilitySchema = lazySchema(() => exports_external.object({
    id: exports_external.string(),
    max_input_tokens: exports_external.number().optional(),
    max_tokens: exports_external.number().optional()
  }).strip());
  CacheFileSchema = lazySchema(() => exports_external.object({
    models: exports_external.array(ModelCapabilitySchema()),
    timestamp: exports_external.number()
  }));
  loadCache = memoize_default((path) => {
    try {
      const raw = readFileSync2(path, "utf-8");
      const parsed = CacheFileSchema().safeParse(safeParseJSON(raw, false));
      return parsed.success ? parsed.data.models : null;
    } catch {
      return null;
    }
  }, (path) => path);
});

// src/utils/context.ts
function is1mContextDisabled() {
  return isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_1M_CONTEXT);
}
function has1mContext(model) {
  if (!model || is1mContextDisabled()) {
    return false;
  }
  return /\[1m\]/i.test(model);
}
function modelSupports1M(model) {
  if (is1mContextDisabled()) {
    return false;
  }
  const canonical = getCanonicalName(model);
  return canonical.includes("claude-sonnet-4") || canonical.includes("opus-4-6");
}
function getContextWindowForModel(model, betas) {
  if (false) {}
  if (has1mContext(model)) {
    return 1e6;
  }
  const cap = getModelCapability(model);
  if (cap?.max_input_tokens && cap.max_input_tokens >= 1e5) {
    if (cap.max_input_tokens > MODEL_CONTEXT_WINDOW_DEFAULT && is1mContextDisabled()) {
      return MODEL_CONTEXT_WINDOW_DEFAULT;
    }
    return cap.max_input_tokens;
  }
  if (betas?.includes(CONTEXT_1M_BETA_HEADER) && modelSupports1M(model)) {
    return 1e6;
  }
  if (getSonnet1mExpTreatmentEnabled(model)) {
    return 1e6;
  }
  if (false) {}
  return MODEL_CONTEXT_WINDOW_DEFAULT;
}
function getSonnet1mExpTreatmentEnabled(model) {
  if (is1mContextDisabled()) {
    return false;
  }
  if (has1mContext(model)) {
    return false;
  }
  if (!getCanonicalName(model).includes("sonnet-4-6")) {
    return false;
  }
  return getGlobalConfig().clientDataCache?.["coral_reef_sonnet"] === "true";
}
function calculateContextPercentages(currentUsage, contextWindowSize) {
  if (!currentUsage) {
    return { used: null, remaining: null };
  }
  const totalInputTokens = currentUsage.input_tokens + currentUsage.cache_creation_input_tokens + currentUsage.cache_read_input_tokens;
  const usedPercentage = Math.round(totalInputTokens / contextWindowSize * 100);
  const clampedUsed = Math.min(100, Math.max(0, usedPercentage));
  return {
    used: clampedUsed,
    remaining: 100 - clampedUsed
  };
}
function getModelMaxOutputTokens(model) {
  if (!model)
    return { default: MAX_OUTPUT_TOKENS_DEFAULT, upperLimit: MAX_OUTPUT_TOKENS_UPPER_LIMIT };
  let defaultTokens;
  let upperLimit;
  if (false) {}
  const m = getCanonicalName(model);
  if (m.includes("opus-4-6")) {
    defaultTokens = 64000;
    upperLimit = 128000;
  } else if (m.includes("sonnet-4-6")) {
    defaultTokens = 32000;
    upperLimit = 128000;
  } else if (m.includes("opus-4-5") || m.includes("sonnet-4") || m.includes("haiku-4")) {
    defaultTokens = 32000;
    upperLimit = 64000;
  } else if (m.includes("opus-4-1") || m.includes("opus-4")) {
    defaultTokens = 32000;
    upperLimit = 32000;
  } else if (m.includes("claude-3-opus")) {
    defaultTokens = 4096;
    upperLimit = 4096;
  } else if (m.includes("claude-3-sonnet")) {
    defaultTokens = 8192;
    upperLimit = 8192;
  } else if (m.includes("claude-3-haiku")) {
    defaultTokens = 4096;
    upperLimit = 4096;
  } else if (m.includes("3-5-sonnet") || m.includes("3-5-haiku")) {
    defaultTokens = 8192;
    upperLimit = 8192;
  } else if (m.includes("3-7-sonnet")) {
    defaultTokens = 32000;
    upperLimit = 64000;
  } else {
    defaultTokens = MAX_OUTPUT_TOKENS_DEFAULT;
    upperLimit = MAX_OUTPUT_TOKENS_UPPER_LIMIT;
  }
  const cap = getModelCapability(model);
  if (cap?.max_tokens && cap.max_tokens >= 4096) {
    upperLimit = cap.max_tokens;
    defaultTokens = Math.min(defaultTokens, upperLimit);
  }
  return { default: defaultTokens, upperLimit };
}
function getMaxThinkingTokensForModel(model) {
  return getModelMaxOutputTokens(model).upperLimit - 1;
}
var MODEL_CONTEXT_WINDOW_DEFAULT = 200000, COMPACT_MAX_OUTPUT_TOKENS = 20000, MAX_OUTPUT_TOKENS_DEFAULT = 32000, MAX_OUTPUT_TOKENS_UPPER_LIMIT = 64000, CAPPED_DEFAULT_MAX_TOKENS = 8000, ESCALATED_MAX_TOKENS = 64000;
var init_context = __esm(() => {
  init_betas();
  init_config();
  init_envUtils();
  init_model();
  init_modelCapabilities();
});

// src/utils/model/modelSupportOverrides.ts
var TIERS, get3PModelCapabilityOverride;
var init_modelSupportOverrides = __esm(() => {
  init_memoize();
  init_providers();
  TIERS = [
    {
      modelEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
      capabilitiesEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES"
    },
    {
      modelEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL",
      capabilitiesEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES"
    },
    {
      modelEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
      capabilitiesEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES"
    }
  ];
  get3PModelCapabilityOverride = memoize_default((model, capability) => {
    if (getAPIProvider() === "firstParty") {
      return;
    }
    if (!model)
      return;
    const m = model.toLowerCase();
    for (const tier of TIERS) {
      const pinned = process.env[tier.modelEnvVar];
      const capabilities = process.env[tier.capabilitiesEnvVar];
      if (!pinned || capabilities === undefined)
        continue;
      if (m !== pinned.toLowerCase())
        continue;
      return capabilities.toLowerCase().split(",").map((s) => s.trim()).includes(capability);
    }
    return;
  }, (model, capability) => `${(model || "").toLowerCase()}:${capability}`);
});

// src/utils/betas.ts
function partitionBetasByAllowlist(betas) {
  const allowed = [];
  const disallowed = [];
  for (const beta of betas) {
    if (ALLOWED_SDK_BETAS.includes(beta)) {
      allowed.push(beta);
    } else {
      disallowed.push(beta);
    }
  }
  return { allowed, disallowed };
}
function filterAllowedSdkBetas(sdkBetas) {
  if (!sdkBetas || sdkBetas.length === 0) {
    return;
  }
  if (isClaudeAISubscriber()) {
    console.warn("Warning: Custom betas are only available for API key users. Ignoring provided betas.");
    return;
  }
  const { allowed, disallowed } = partitionBetasByAllowlist(sdkBetas);
  for (const beta of disallowed) {
    console.warn(`Warning: Beta header '${beta}' is not allowed. Only the following betas are supported: ${ALLOWED_SDK_BETAS.join(", ")}`);
  }
  return allowed.length > 0 ? allowed : undefined;
}
function modelSupportsISP(model) {
  const supported3P = get3PModelCapabilityOverride(model, "interleaved_thinking");
  if (supported3P !== undefined) {
    return supported3P;
  }
  const canonical = getCanonicalName(model);
  const provider = getAPIProvider();
  if (provider === "foundry") {
    return true;
  }
  if (provider === "firstParty") {
    return !canonical.includes("claude-3-");
  }
  return canonical.includes("claude-opus-4") || canonical.includes("claude-sonnet-4");
}
function vertexModelSupportsWebSearch(model) {
  const canonical = getCanonicalName(model);
  return canonical.includes("claude-opus-4") || canonical.includes("claude-sonnet-4") || canonical.includes("claude-haiku-4");
}
function modelSupportsContextManagement(model) {
  const canonical = getCanonicalName(model);
  const provider = getAPIProvider();
  if (provider === "foundry") {
    return true;
  }
  if (provider === "firstParty") {
    return !canonical.includes("claude-3-");
  }
  return canonical.includes("claude-opus-4") || canonical.includes("claude-sonnet-4") || canonical.includes("claude-haiku-4");
}
function modelSupportsStructuredOutputs(model) {
  const canonical = getCanonicalName(model);
  const provider = getAPIProvider();
  if (provider !== "firstParty" && provider !== "foundry") {
    return false;
  }
  return canonical.includes("claude-sonnet-4-6") || canonical.includes("claude-sonnet-4-5") || canonical.includes("claude-opus-4-1") || canonical.includes("claude-opus-4-5") || canonical.includes("claude-opus-4-6") || canonical.includes("claude-haiku-4-5");
}
function modelSupportsAutoMode(model) {
  if (false) {}
  return false;
}
function getToolSearchBetaHeader() {
  const provider = getAPIProvider();
  if (provider === "vertex" || provider === "bedrock") {
    return TOOL_SEARCH_BETA_HEADER_3P;
  }
  return TOOL_SEARCH_BETA_HEADER_1P;
}
function shouldIncludeFirstPartyOnlyBetas() {
  return (getAPIProvider() === "firstParty" || getAPIProvider() === "foundry") && !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS);
}
function shouldUseGlobalCacheScope() {
  return getAPIProvider() === "firstParty" && !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS);
}
function getMergedBetas(model, options) {
  const baseBetas = [...getModelBetas(model)];
  if (options?.isAgenticQuery) {
    if (!baseBetas.includes(CLAUDE_CODE_20250219_BETA_HEADER)) {
      baseBetas.push(CLAUDE_CODE_20250219_BETA_HEADER);
    }
    if (false) {}
  }
  const sdkBetas = getSdkBetas();
  if (!sdkBetas || sdkBetas.length === 0) {
    return baseBetas;
  }
  return [...baseBetas, ...sdkBetas.filter((b) => !baseBetas.includes(b))];
}
function clearBetasCaches() {
  getAllModelBetas.cache?.clear?.();
  getModelBetas.cache?.clear?.();
  getBedrockExtraBodyParamsBetas.cache?.clear?.();
}
var ALLOWED_SDK_BETAS, getAllModelBetas, getModelBetas, getBedrockExtraBodyParamsBetas;
var init_betas2 = __esm(() => {
  init_memoize();
  init_growthbook();
  init_state();
  init_betas();
  init_oauth();
  init_auth2();
  init_context();
  init_envUtils();
  init_model();
  init_modelSupportOverrides();
  init_providers();
  init_settings2();
  ALLOWED_SDK_BETAS = [CONTEXT_1M_BETA_HEADER];
  getAllModelBetas = memoize_default((model) => {
    const betaHeaders = [];
    const isHaiku = getCanonicalName(model).includes("haiku");
    const provider = getAPIProvider();
    const includeFirstPartyOnlyBetas = shouldIncludeFirstPartyOnlyBetas();
    if (!isHaiku) {
      betaHeaders.push(CLAUDE_CODE_20250219_BETA_HEADER);
      if (false) {}
    }
    if (isClaudeAISubscriber()) {
      betaHeaders.push(OAUTH_BETA_HEADER);
    }
    if (has1mContext(model)) {
      betaHeaders.push(CONTEXT_1M_BETA_HEADER);
    }
    if (!isEnvTruthy(process.env.DISABLE_INTERLEAVED_THINKING) && modelSupportsISP(model)) {
      betaHeaders.push(INTERLEAVED_THINKING_BETA_HEADER);
    }
    if (includeFirstPartyOnlyBetas && modelSupportsISP(model) && !getIsNonInteractiveSession() && getInitialSettings().showThinkingSummaries !== true) {
      betaHeaders.push(REDACT_THINKING_BETA_HEADER);
    }
    if (SUMMARIZE_CONNECTOR_TEXT_BETA_HEADER && false) {}
    const antOptedIntoToolClearing = isEnvTruthy(process.env.USE_API_CONTEXT_MANAGEMENT) && false;
    const thinkingPreservationEnabled = modelSupportsContextManagement(model);
    if (shouldIncludeFirstPartyOnlyBetas() && (antOptedIntoToolClearing || thinkingPreservationEnabled)) {
      betaHeaders.push(CONTEXT_MANAGEMENT_BETA_HEADER);
    }
    const strictToolsEnabled = checkStatsigFeatureGate_CACHED_MAY_BE_STALE("tengu_tool_pear");
    const tokenEfficientToolsEnabled = !strictToolsEnabled && getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_json_tools", false);
    if (includeFirstPartyOnlyBetas && modelSupportsStructuredOutputs(model) && strictToolsEnabled) {
      betaHeaders.push(STRUCTURED_OUTPUTS_BETA_HEADER);
    }
    if (false) {}
    if (provider === "vertex" && vertexModelSupportsWebSearch(model)) {
      betaHeaders.push(WEB_SEARCH_BETA_HEADER);
    }
    if (provider === "foundry") {
      betaHeaders.push(WEB_SEARCH_BETA_HEADER);
    }
    if (includeFirstPartyOnlyBetas) {
      betaHeaders.push(PROMPT_CACHING_SCOPE_BETA_HEADER);
    }
    if (process.env.ANTHROPIC_BETAS) {
      betaHeaders.push(...process.env.ANTHROPIC_BETAS.split(",").map((_) => _.trim()).filter(Boolean));
    }
    return betaHeaders;
  });
  getModelBetas = memoize_default((model) => {
    const modelBetas = getAllModelBetas(model);
    if (getAPIProvider() === "bedrock") {
      return modelBetas.filter((b) => !BEDROCK_EXTRA_PARAMS_HEADERS.has(b));
    }
    return modelBetas;
  });
  getBedrockExtraBodyParamsBetas = memoize_default((model) => {
    const modelBetas = getAllModelBetas(model);
    return modelBetas.filter((b) => BEDROCK_EXTRA_PARAMS_HEADERS.has(b));
  });
});

// src/services/mcp/officialRegistry.ts
function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.search = "";
    return u.toString().replace(/\/$/, "");
  } catch {
    return;
  }
}
async function prefetchOfficialMcpUrls() {
  if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) {
    return;
  }
  try {
    const response = await axios_default.get("https://api.anthropic.com/mcp-registry/v0/servers?version=latest&visibility=commercial", { timeout: 5000 });
    const urls = new Set;
    for (const entry of response.data.servers) {
      for (const remote of entry.server.remotes ?? []) {
        const normalized = normalizeUrl(remote.url);
        if (normalized) {
          urls.add(normalized);
        }
      }
    }
    officialUrls = urls;
    logForDebugging(`[mcp-registry] Loaded ${urls.size} official MCP URLs`);
  } catch (error) {
    logForDebugging(`Failed to fetch MCP registry: ${errorMessage(error)}`, {
      level: "error"
    });
  }
}
function isOfficialMcpUrl(normalizedUrl) {
  return officialUrls?.has(normalizedUrl) ?? false;
}
var officialUrls = undefined;
var init_officialRegistry = __esm(() => {
  init_axios();
  init_debug();
  init_errors();
});

// src/utils/agentSwarmsEnabled.ts
function isAgentTeamsFlagSet() {
  return process.argv.includes("--agent-teams");
}
function isAgentSwarmsEnabled() {
  if (false) {}
  if (!isEnvTruthy(process.env.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS) && !isAgentTeamsFlagSet()) {
    return false;
  }
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_flint", true)) {
    return false;
  }
  return true;
}
var init_agentSwarmsEnabled = __esm(() => {
  init_growthbook();
  init_envUtils();
});

// src/utils/agentContext.ts
import { AsyncLocalStorage as AsyncLocalStorage2 } from "async_hooks";
function getAgentContext() {
  return agentContextStorage.getStore();
}
function runWithAgentContext(context3, fn) {
  return agentContextStorage.run(context3, fn);
}
function isSubagentContext(context3) {
  return context3?.agentType === "subagent";
}
function getSubagentLogName() {
  const context3 = getAgentContext();
  if (!isSubagentContext(context3) || !context3.subagentName) {
    return;
  }
  return context3.isBuiltIn ? context3.subagentName : "user-defined";
}
function consumeInvokingRequestId() {
  const context3 = getAgentContext();
  if (!context3?.invokingRequestId || context3.invocationEmitted) {
    return;
  }
  context3.invocationEmitted = true;
  return {
    invokingRequestId: context3.invokingRequestId,
    invocationKind: context3.invocationKind
  };
}
var agentContextStorage;
var init_agentContext = __esm(() => {
  init_agentSwarmsEnabled();
  agentContextStorage = new AsyncLocalStorage2;
});

// src/services/analytics/metadata.ts
import { extname } from "path";
function sanitizeToolNameForAnalytics(toolName) {
  if (toolName.startsWith("mcp__")) {
    return "mcp_tool";
  }
  return toolName;
}
function isToolDetailsLoggingEnabled() {
  return isEnvTruthy(process.env.OTEL_LOG_TOOL_DETAILS);
}
function isAnalyticsToolDetailsLoggingEnabled(mcpServerType, mcpServerBaseUrl) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent") {
    return true;
  }
  if (mcpServerType === "claudeai-proxy") {
    return true;
  }
  if (mcpServerBaseUrl && isOfficialMcpUrl(mcpServerBaseUrl)) {
    return true;
  }
  return false;
}
function mcpToolDetailsForAnalytics(toolName, mcpServerType, mcpServerBaseUrl) {
  const details = extractMcpToolDetails(toolName);
  if (!details) {
    return {};
  }
  if (!BUILTIN_MCP_SERVER_NAMES.has(details.serverName) && !isAnalyticsToolDetailsLoggingEnabled(mcpServerType, mcpServerBaseUrl)) {
    return {};
  }
  return {
    mcpServerName: details.serverName,
    mcpToolName: details.mcpToolName
  };
}
function extractMcpToolDetails(toolName) {
  if (!toolName.startsWith("mcp__")) {
    return;
  }
  const parts = toolName.split("__");
  if (parts.length < 3) {
    return;
  }
  const serverName = parts[1];
  const mcpToolName = parts.slice(2).join("__");
  if (!serverName || !mcpToolName) {
    return;
  }
  return {
    serverName,
    mcpToolName
  };
}
function extractSkillName(toolName, input) {
  if (toolName !== "Skill") {
    return;
  }
  if (typeof input === "object" && input !== null && "skill" in input && typeof input.skill === "string") {
    return input.skill;
  }
  return;
}
function truncateToolInputValue(value, depth = 0) {
  if (typeof value === "string") {
    if (value.length > TOOL_INPUT_STRING_TRUNCATE_AT) {
      return `${value.slice(0, TOOL_INPUT_STRING_TRUNCATE_TO)}\u2026[${value.length} chars]`;
    }
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean" || value === null || value === undefined) {
    return value;
  }
  if (depth >= TOOL_INPUT_MAX_DEPTH) {
    return "<nested>";
  }
  if (Array.isArray(value)) {
    const mapped = value.slice(0, TOOL_INPUT_MAX_COLLECTION_ITEMS).map((v) => truncateToolInputValue(v, depth + 1));
    if (value.length > TOOL_INPUT_MAX_COLLECTION_ITEMS) {
      mapped.push(`\u2026[${value.length} items]`);
    }
    return mapped;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value).filter(([k]) => !k.startsWith("_"));
    const mapped = entries.slice(0, TOOL_INPUT_MAX_COLLECTION_ITEMS).map(([k, v]) => [k, truncateToolInputValue(v, depth + 1)]);
    if (entries.length > TOOL_INPUT_MAX_COLLECTION_ITEMS) {
      mapped.push(["\u2026", `${entries.length} keys`]);
    }
    return Object.fromEntries(mapped);
  }
  return String(value);
}
function extractToolInputForTelemetry(input) {
  if (!isToolDetailsLoggingEnabled()) {
    return;
  }
  const truncated = truncateToolInputValue(input);
  let json = jsonStringify(truncated);
  if (json.length > TOOL_INPUT_MAX_JSON_CHARS) {
    json = json.slice(0, TOOL_INPUT_MAX_JSON_CHARS) + "\u2026[truncated]";
  }
  return json;
}
function getFileExtensionForAnalytics(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!ext || ext === ".") {
    return;
  }
  const extension = ext.slice(1);
  if (extension.length > MAX_FILE_EXTENSION_LENGTH) {
    return "other";
  }
  return extension;
}
function getFileExtensionsFromBashCommand(command, simulatedSedEditFilePath) {
  if (!command.includes(".") && !simulatedSedEditFilePath)
    return;
  let result;
  const seen = new Set;
  if (simulatedSedEditFilePath) {
    const ext = getFileExtensionForAnalytics(simulatedSedEditFilePath);
    if (ext) {
      seen.add(ext);
      result = ext;
    }
  }
  for (const subcmd of command.split(COMPOUND_OPERATOR_REGEX)) {
    if (!subcmd)
      continue;
    const tokens = subcmd.split(WHITESPACE_REGEX);
    if (tokens.length < 2)
      continue;
    const firstToken = tokens[0];
    const slashIdx = firstToken.lastIndexOf("/");
    const baseCmd = slashIdx >= 0 ? firstToken.slice(slashIdx + 1) : firstToken;
    if (!FILE_COMMANDS.has(baseCmd))
      continue;
    for (let i = 1;i < tokens.length; i++) {
      const arg = tokens[i];
      if (arg.charCodeAt(0) === 45)
        continue;
      const ext = getFileExtensionForAnalytics(arg);
      if (ext && !seen.has(ext)) {
        seen.add(ext);
        result = result ? result + "," + ext : ext;
      }
    }
  }
  if (!result)
    return;
  return result;
}
function getAgentIdentification() {
  const agentContext = getAgentContext();
  if (agentContext) {
    const result = {
      agentId: agentContext.agentId,
      parentSessionId: agentContext.parentSessionId,
      agentType: agentContext.agentType
    };
    if (agentContext.agentType === "teammate") {
      result.teamName = agentContext.teamName;
    }
    return result;
  }
  const agentId = getAgentId();
  const parentSessionId = getParentSessionId2();
  const teamName = getTeamName();
  const isSwarmAgent = isTeammate();
  const agentType = isSwarmAgent ? "teammate" : agentId ? "standalone" : undefined;
  if (agentId || agentType || parentSessionId || teamName) {
    return {
      ...agentId ? { agentId } : {},
      ...agentType ? { agentType } : {},
      ...parentSessionId ? { parentSessionId } : {},
      ...teamName ? { teamName } : {}
    };
  }
  const stateParentSessionId = getParentSessionId();
  if (stateParentSessionId) {
    return { parentSessionId: stateParentSessionId };
  }
  return {};
}
function buildProcessMetrics() {
  try {
    const mem = process.memoryUsage();
    const cpu = process.cpuUsage();
    const now = Date.now();
    let cpuPercent;
    if (prevCpuUsage && prevWallTimeMs) {
      const wallDeltaMs = now - prevWallTimeMs;
      if (wallDeltaMs > 0) {
        const userDeltaUs = cpu.user - prevCpuUsage.user;
        const systemDeltaUs = cpu.system - prevCpuUsage.system;
        cpuPercent = (userDeltaUs + systemDeltaUs) / (wallDeltaMs * 1000) * 100;
      }
    }
    prevCpuUsage = cpu;
    prevWallTimeMs = now;
    return {
      uptime: process.uptime(),
      rss: mem.rss,
      heapTotal: mem.heapTotal,
      heapUsed: mem.heapUsed,
      external: mem.external,
      arrayBuffers: mem.arrayBuffers,
      constrainedMemory: process.constrainedMemory(),
      cpuUsage: cpu,
      cpuPercent
    };
  } catch {
    return;
  }
}
async function getEventMetadata(options = {}) {
  const model = options.model ? String(options.model) : getMainLoopModel();
  const betas = typeof options.betas === "string" ? options.betas : getModelBetas(model).join(",");
  const [envContext, repoRemoteHash] = await Promise.all([
    buildEnvContext(),
    getRepoRemoteHash()
  ]);
  const processMetrics = buildProcessMetrics();
  const metadata = {
    model,
    sessionId: getSessionId(),
    userType: "external",
    ...betas.length > 0 ? { betas } : {},
    envContext,
    ...process.env.CLAUDE_CODE_ENTRYPOINT && {
      entrypoint: process.env.CLAUDE_CODE_ENTRYPOINT
    },
    ...process.env.CLAUDE_AGENT_SDK_VERSION && {
      agentSdkVersion: process.env.CLAUDE_AGENT_SDK_VERSION
    },
    isInteractive: String(getIsInteractive()),
    clientType: getClientType(),
    ...processMetrics && { processMetrics },
    sweBenchRunId: process.env.SWE_BENCH_RUN_ID || "",
    sweBenchInstanceId: process.env.SWE_BENCH_INSTANCE_ID || "",
    sweBenchTaskId: process.env.SWE_BENCH_TASK_ID || "",
    ...getAgentIdentification(),
    ...getSubscriptionType() && {
      subscriptionType: getSubscriptionType()
    },
    ...{},
    ...repoRemoteHash && { rh: repoRemoteHash }
  };
  return metadata;
}
function to1PEventFormat(metadata, userMetadata, additionalMetadata = {}) {
  const {
    envContext,
    processMetrics,
    rh,
    kairosActive,
    skillMode,
    observerMode,
    ...coreFields
  } = metadata;
  const env3 = {
    platform: envContext.platform,
    platform_raw: envContext.platformRaw,
    arch: envContext.arch,
    node_version: envContext.nodeVersion,
    terminal: envContext.terminal || "unknown",
    package_managers: envContext.packageManagers,
    runtimes: envContext.runtimes,
    is_running_with_bun: envContext.isRunningWithBun,
    is_ci: envContext.isCi,
    is_claubbit: envContext.isClaubbit,
    is_claude_code_remote: envContext.isClaudeCodeRemote,
    is_local_agent_mode: envContext.isLocalAgentMode,
    is_conductor: envContext.isConductor,
    is_github_action: envContext.isGithubAction,
    is_claude_code_action: envContext.isClaudeCodeAction,
    is_claude_ai_auth: envContext.isClaudeAiAuth,
    version: envContext.version,
    build_time: envContext.buildTime,
    deployment_environment: envContext.deploymentEnvironment
  };
  if (envContext.remoteEnvironmentType) {
    env3.remote_environment_type = envContext.remoteEnvironmentType;
  }
  if (false) {}
  if (envContext.claudeCodeContainerId) {
    env3.claude_code_container_id = envContext.claudeCodeContainerId;
  }
  if (envContext.claudeCodeRemoteSessionId) {
    env3.claude_code_remote_session_id = envContext.claudeCodeRemoteSessionId;
  }
  if (envContext.tags) {
    env3.tags = envContext.tags.split(",").map((t) => t.trim()).filter(Boolean);
  }
  if (envContext.githubEventName) {
    env3.github_event_name = envContext.githubEventName;
  }
  if (envContext.githubActionsRunnerEnvironment) {
    env3.github_actions_runner_environment = envContext.githubActionsRunnerEnvironment;
  }
  if (envContext.githubActionsRunnerOs) {
    env3.github_actions_runner_os = envContext.githubActionsRunnerOs;
  }
  if (envContext.githubActionRef) {
    env3.github_action_ref = envContext.githubActionRef;
  }
  if (envContext.wslVersion) {
    env3.wsl_version = envContext.wslVersion;
  }
  if (envContext.linuxDistroId) {
    env3.linux_distro_id = envContext.linuxDistroId;
  }
  if (envContext.linuxDistroVersion) {
    env3.linux_distro_version = envContext.linuxDistroVersion;
  }
  if (envContext.linuxKernel) {
    env3.linux_kernel = envContext.linuxKernel;
  }
  if (envContext.vcs) {
    env3.vcs = envContext.vcs;
  }
  if (envContext.versionBase) {
    env3.version_base = envContext.versionBase;
  }
  const core = {
    session_id: coreFields.sessionId,
    model: coreFields.model,
    user_type: coreFields.userType,
    is_interactive: coreFields.isInteractive === "true",
    client_type: coreFields.clientType
  };
  if (coreFields.betas) {
    core.betas = coreFields.betas;
  }
  if (coreFields.entrypoint) {
    core.entrypoint = coreFields.entrypoint;
  }
  if (coreFields.agentSdkVersion) {
    core.agent_sdk_version = coreFields.agentSdkVersion;
  }
  if (coreFields.sweBenchRunId) {
    core.swe_bench_run_id = coreFields.sweBenchRunId;
  }
  if (coreFields.sweBenchInstanceId) {
    core.swe_bench_instance_id = coreFields.sweBenchInstanceId;
  }
  if (coreFields.sweBenchTaskId) {
    core.swe_bench_task_id = coreFields.sweBenchTaskId;
  }
  if (coreFields.agentId) {
    core.agent_id = coreFields.agentId;
  }
  if (coreFields.parentSessionId) {
    core.parent_session_id = coreFields.parentSessionId;
  }
  if (coreFields.agentType) {
    core.agent_type = coreFields.agentType;
  }
  if (coreFields.teamName) {
    core.team_name = coreFields.teamName;
  }
  if (userMetadata.githubActionsMetadata) {
    const ghMeta = userMetadata.githubActionsMetadata;
    env3.github_actions_metadata = {
      actor_id: ghMeta.actorId,
      repository_id: ghMeta.repositoryId,
      repository_owner_id: ghMeta.repositoryOwnerId
    };
  }
  let auth;
  if (userMetadata.accountUuid || userMetadata.organizationUuid) {
    auth = {
      account_uuid: userMetadata.accountUuid,
      organization_uuid: userMetadata.organizationUuid
    };
  }
  return {
    env: env3,
    ...processMetrics && {
      process: Buffer.from(jsonStringify(processMetrics)).toString("base64")
    },
    ...auth && { auth },
    core,
    additional: {
      ...rh && { rh },
      ...kairosActive && { is_assistant_mode: true },
      ...skillMode && { skill_mode: skillMode },
      ...observerMode && { observer_mode: observerMode },
      ...additionalMetadata
    }
  };
}
var BUILTIN_MCP_SERVER_NAMES, TOOL_INPUT_STRING_TRUNCATE_AT = 512, TOOL_INPUT_STRING_TRUNCATE_TO = 128, TOOL_INPUT_MAX_JSON_CHARS, TOOL_INPUT_MAX_COLLECTION_ITEMS = 20, TOOL_INPUT_MAX_DEPTH = 2, MAX_FILE_EXTENSION_LENGTH = 10, FILE_COMMANDS, COMPOUND_OPERATOR_REGEX, WHITESPACE_REGEX, getVersionBase, buildEnvContext, prevCpuUsage = null, prevWallTimeMs = null;
var init_metadata = __esm(() => {
  init_memoize();
  init_env();
  init_envDynamic();
  init_betas2();
  init_model();
  init_state();
  init_envUtils();
  init_officialRegistry();
  init_auth2();
  init_git();
  init_platform();
  init_agentContext();
  init_slowOperations();
  init_teammate();
  BUILTIN_MCP_SERVER_NAMES = new Set([]);
  TOOL_INPUT_MAX_JSON_CHARS = 4 * 1024;
  FILE_COMMANDS = new Set([
    "rm",
    "mv",
    "cp",
    "touch",
    "mkdir",
    "chmod",
    "chown",
    "cat",
    "head",
    "tail",
    "sort",
    "stat",
    "diff",
    "wc",
    "grep",
    "rg",
    "sed"
  ]);
  COMPOUND_OPERATOR_REGEX = /\s*(?:&&|\|\||[;|])\s*/;
  WHITESPACE_REGEX = /\s+/;
  getVersionBase = memoize_default(() => {
    const match = "1.0.0".match(/^\d+\.\d+\.\d+(?:-[a-z]+)?/);
    return match ? match[0] : undefined;
  });
  buildEnvContext = memoize_default(async () => {
    const [packageManagers, runtimes, linuxDistroInfo, vcs] = await Promise.all([
      env.getPackageManagers(),
      env.getRuntimes(),
      getLinuxDistroInfo(),
      detectVcs()
    ]);
    return {
      platform: getHostPlatformForAnalytics(),
      platformRaw: process.env.CLAUDE_CODE_HOST_PLATFORM || process.platform,
      arch: env.arch,
      nodeVersion: env.nodeVersion,
      terminal: envDynamic.terminal,
      packageManagers: packageManagers.join(","),
      runtimes: runtimes.join(","),
      isRunningWithBun: env.isRunningWithBun(),
      isCi: isEnvTruthy(process.env.CI),
      isClaubbit: isEnvTruthy(process.env.CLAUBBIT),
      isClaudeCodeRemote: isEnvTruthy(process.env.CLAUDE_CODE_REMOTE),
      isLocalAgentMode: process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent",
      isConductor: env.isConductor(),
      ...process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE && {
        remoteEnvironmentType: process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
      },
      ...{},
      ...process.env.CLAUDE_CODE_CONTAINER_ID && {
        claudeCodeContainerId: process.env.CLAUDE_CODE_CONTAINER_ID
      },
      ...process.env.CLAUDE_CODE_REMOTE_SESSION_ID && {
        claudeCodeRemoteSessionId: process.env.CLAUDE_CODE_REMOTE_SESSION_ID
      },
      ...process.env.CLAUDE_CODE_TAGS && {
        tags: process.env.CLAUDE_CODE_TAGS
      },
      isGithubAction: isEnvTruthy(process.env.GITHUB_ACTIONS),
      isClaudeCodeAction: isEnvTruthy(process.env.CLAUDE_CODE_ACTION),
      isClaudeAiAuth: isClaudeAISubscriber(),
      version: "1.0.0",
      versionBase: getVersionBase(),
      buildTime: "2026-04-07T17:50:51.561Z",
      deploymentEnvironment: env.detectDeploymentEnvironment(),
      ...isEnvTruthy(process.env.GITHUB_ACTIONS) && {
        githubEventName: process.env.GITHUB_EVENT_NAME,
        githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
        githubActionsRunnerOs: process.env.RUNNER_OS,
        githubActionRef: process.env.GITHUB_ACTION_PATH?.includes("claude-code-action/") ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1] : undefined
      },
      ...getWslVersion() && { wslVersion: getWslVersion() },
      ...linuxDistroInfo ?? {},
      ...vcs.length > 0 ? { vcs: vcs.join(",") } : {}
    };
  });
});

// src/services/analytics/firstPartyEventLoggingExporter.ts
import { randomUUID as randomUUID2 } from "crypto";
import { appendFile, mkdir as mkdir2, readdir, unlink, writeFile as writeFile2 } from "fs/promises";
import * as path from "path";
function getStorageDir() {
  return path.join(getClaudeConfigHomeDir(), "telemetry");
}

class FirstPartyEventLoggingExporter {
  endpoint;
  timeout;
  maxBatchSize;
  skipAuth;
  batchDelayMs;
  baseBackoffDelayMs;
  maxBackoffDelayMs;
  maxAttempts;
  isKilled;
  pendingExports = [];
  isShutdown = false;
  schedule;
  cancelBackoff = null;
  attempts = 0;
  isRetrying = false;
  lastExportErrorContext;
  constructor(options = {}) {
    const baseUrl = options.baseUrl || (process.env.ANTHROPIC_BASE_URL === "https://api-staging.anthropic.com" ? "https://api-staging.anthropic.com" : "https://api.anthropic.com");
    this.endpoint = `${baseUrl}${options.path || "/api/event_logging/batch"}`;
    this.timeout = options.timeout || 1e4;
    this.maxBatchSize = options.maxBatchSize || 200;
    this.skipAuth = options.skipAuth ?? false;
    this.batchDelayMs = options.batchDelayMs || 100;
    this.baseBackoffDelayMs = options.baseBackoffDelayMs || 500;
    this.maxBackoffDelayMs = options.maxBackoffDelayMs || 30000;
    this.maxAttempts = options.maxAttempts ?? 8;
    this.isKilled = options.isKilled ?? (() => false);
    this.schedule = options.schedule ?? ((fn, ms) => {
      const t = setTimeout(fn, ms);
      return () => clearTimeout(t);
    });
    this.retryPreviousBatches();
  }
  async getQueuedEventCount() {
    return (await this.loadEventsFromCurrentBatch()).length;
  }
  getCurrentBatchFilePath() {
    return path.join(getStorageDir(), `${FILE_PREFIX}${getSessionId()}.${BATCH_UUID}.json`);
  }
  async loadEventsFromFile(filePath) {
    try {
      return await readJSONLFile(filePath);
    } catch {
      return [];
    }
  }
  async loadEventsFromCurrentBatch() {
    return this.loadEventsFromFile(this.getCurrentBatchFilePath());
  }
  async saveEventsToFile(filePath, events) {
    try {
      if (events.length === 0) {
        try {
          await unlink(filePath);
        } catch {}
      } else {
        await mkdir2(getStorageDir(), { recursive: true });
        const content = events.map((e) => jsonStringify(e)).join(`
`) + `
`;
        await writeFile2(filePath, content, "utf8");
      }
    } catch (error) {
      logError(error);
    }
  }
  async appendEventsToFile(filePath, events) {
    if (events.length === 0)
      return;
    try {
      await mkdir2(getStorageDir(), { recursive: true });
      const content = events.map((e) => jsonStringify(e)).join(`
`) + `
`;
      await appendFile(filePath, content, "utf8");
    } catch (error) {
      logError(error);
    }
  }
  async deleteFile(filePath) {
    try {
      await unlink(filePath);
    } catch {}
  }
  async retryPreviousBatches() {
    try {
      const prefix = `${FILE_PREFIX}${getSessionId()}.`;
      let files;
      try {
        files = (await readdir(getStorageDir())).filter((f) => f.startsWith(prefix) && f.endsWith(".json")).filter((f) => !f.includes(BATCH_UUID));
      } catch (e) {
        if (isFsInaccessible(e))
          return;
        throw e;
      }
      for (const file of files) {
        const filePath = path.join(getStorageDir(), file);
        this.retryFileInBackground(filePath);
      }
    } catch (error) {
      logError(error);
    }
  }
  async retryFileInBackground(filePath) {
    if (this.attempts >= this.maxAttempts) {
      await this.deleteFile(filePath);
      return;
    }
    const events = await this.loadEventsFromFile(filePath);
    if (events.length === 0) {
      await this.deleteFile(filePath);
      return;
    }
    if (false) {}
    const failedEvents = await this.sendEventsInBatches(events);
    if (failedEvents.length === 0) {
      await this.deleteFile(filePath);
      if (false) {}
    } else {
      await this.saveEventsToFile(filePath, failedEvents);
      if (false) {}
    }
  }
  async export(logs2, resultCallback) {
    if (this.isShutdown) {
      if (false) {}
      resultCallback({
        code: ExportResultCode.FAILED,
        error: new Error("Exporter has been shutdown")
      });
      return;
    }
    const exportPromise = this.doExport(logs2, resultCallback);
    this.pendingExports.push(exportPromise);
    exportPromise.finally(() => {
      const index2 = this.pendingExports.indexOf(exportPromise);
      if (index2 > -1) {
        this.pendingExports.splice(index2, 1);
      }
    });
  }
  async doExport(logs2, resultCallback) {
    try {
      const eventLogs = logs2.filter((log) => log.instrumentationScope?.name === "com.anthropic.claude_code.events");
      if (eventLogs.length === 0) {
        resultCallback({ code: ExportResultCode.SUCCESS });
        return;
      }
      const events = this.transformLogsToEvents(eventLogs).events;
      if (events.length === 0) {
        resultCallback({ code: ExportResultCode.SUCCESS });
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        resultCallback({
          code: ExportResultCode.FAILED,
          error: new Error(`Dropped ${events.length} events: max attempts (${this.maxAttempts}) reached`)
        });
        return;
      }
      const failedEvents = await this.sendEventsInBatches(events);
      this.attempts++;
      if (failedEvents.length > 0) {
        await this.queueFailedEvents(failedEvents);
        this.scheduleBackoffRetry();
        const context3 = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
        resultCallback({
          code: ExportResultCode.FAILED,
          error: new Error(`Failed to export ${failedEvents.length} events${context3}`)
        });
        return;
      }
      this.resetBackoff();
      if (await this.getQueuedEventCount() > 0 && !this.isRetrying) {
        this.retryFailedEvents();
      }
      resultCallback({ code: ExportResultCode.SUCCESS });
    } catch (error) {
      if (false) {}
      logError(error);
      resultCallback({
        code: ExportResultCode.FAILED,
        error: toError(error)
      });
    }
  }
  async sendEventsInBatches(events) {
    const batches = [];
    for (let i = 0;i < events.length; i += this.maxBatchSize) {
      batches.push(events.slice(i, i + this.maxBatchSize));
    }
    if (false) {}
    const failedBatchEvents = [];
    let lastErrorContext;
    for (let i = 0;i < batches.length; i++) {
      const batch = batches[i];
      try {
        await this.sendBatchWithRetry({ events: batch });
      } catch (error) {
        lastErrorContext = getAxiosErrorContext(error);
        for (let j = i;j < batches.length; j++) {
          failedBatchEvents.push(...batches[j]);
        }
        if (false) {}
        break;
      }
      if (i < batches.length - 1 && this.batchDelayMs > 0) {
        await sleep(this.batchDelayMs);
      }
    }
    if (failedBatchEvents.length > 0 && lastErrorContext) {
      this.lastExportErrorContext = lastErrorContext;
    }
    return failedBatchEvents;
  }
  async queueFailedEvents(events) {
    const filePath = this.getCurrentBatchFilePath();
    await this.appendEventsToFile(filePath, events);
    const context3 = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
    const message = `1P event logging: ${events.length} events failed to export${context3}`;
    logError(new Error(message));
  }
  scheduleBackoffRetry() {
    if (this.cancelBackoff || this.isRetrying || this.isShutdown) {
      return;
    }
    const delay = Math.min(this.baseBackoffDelayMs * this.attempts * this.attempts, this.maxBackoffDelayMs);
    if (false) {}
    this.cancelBackoff = this.schedule(async () => {
      this.cancelBackoff = null;
      await this.retryFailedEvents();
    }, delay);
  }
  async retryFailedEvents() {
    const filePath = this.getCurrentBatchFilePath();
    while (!this.isShutdown) {
      const events = await this.loadEventsFromFile(filePath);
      if (events.length === 0)
        break;
      if (this.attempts >= this.maxAttempts) {
        if (false) {}
        await this.deleteFile(filePath);
        this.resetBackoff();
        return;
      }
      this.isRetrying = true;
      await this.deleteFile(filePath);
      if (false) {}
      const failedEvents = await this.sendEventsInBatches(events);
      this.attempts++;
      this.isRetrying = false;
      if (failedEvents.length > 0) {
        await this.saveEventsToFile(filePath, failedEvents);
        this.scheduleBackoffRetry();
        return;
      }
      this.resetBackoff();
      if (false) {}
    }
  }
  resetBackoff() {
    this.attempts = 0;
    if (this.cancelBackoff) {
      this.cancelBackoff();
      this.cancelBackoff = null;
    }
  }
  async sendBatchWithRetry(payload) {
    if (this.isKilled()) {
      throw new Error("firstParty sink killswitch active");
    }
    const baseHeaders = {
      "Content-Type": "application/json",
      "User-Agent": getClaudeCodeUserAgent(),
      "x-service-name": "claude-code"
    };
    const hasTrust = checkHasTrustDialogAccepted() || getIsNonInteractiveSession();
    if (false) {}
    let shouldSkipAuth = this.skipAuth || !hasTrust;
    if (!shouldSkipAuth && isClaudeAISubscriber()) {
      const tokens = getClaudeAIOAuthTokens();
      if (!hasProfileScope()) {
        shouldSkipAuth = true;
      } else if (tokens && isOAuthTokenExpired(tokens.expiresAt)) {
        shouldSkipAuth = true;
        if (false) {}
      }
    }
    const authResult = shouldSkipAuth ? { headers: {}, error: "trust not established or Oauth token expired" } : getAuthHeaders();
    const useAuth = !authResult.error;
    if (!useAuth && false) {}
    const headers = useAuth ? { ...baseHeaders, ...authResult.headers } : baseHeaders;
    try {
      const response = await axios_default.post(this.endpoint, payload, {
        timeout: this.timeout,
        headers
      });
      this.logSuccess(payload.events.length, useAuth, response.data);
      return;
    } catch (error) {
      if (useAuth && axios_default.isAxiosError(error) && error.response?.status === 401) {
        if (false) {}
        const response = await axios_default.post(this.endpoint, payload, {
          timeout: this.timeout,
          headers: baseHeaders
        });
        this.logSuccess(payload.events.length, false, response.data);
        return;
      }
      throw error;
    }
  }
  logSuccess(eventCount, withAuth, responseData) {
    if (false) {}
  }
  hrTimeToDate(hrTime2) {
    const [seconds, nanoseconds] = hrTime2;
    return new Date(seconds * 1000 + nanoseconds / 1e6);
  }
  transformLogsToEvents(logs2) {
    const events = [];
    for (const log of logs2) {
      const attributes = log.attributes || {};
      if (attributes.event_type === "GrowthbookExperimentEvent") {
        const timestamp = this.hrTimeToDate(log.hrTime);
        const account_uuid = attributes.account_uuid;
        const organization_uuid = attributes.organization_uuid;
        events.push({
          event_type: "GrowthbookExperimentEvent",
          event_data: GrowthbookExperimentEvent.toJSON({
            event_id: attributes.event_id,
            timestamp,
            experiment_id: attributes.experiment_id,
            variation_id: attributes.variation_id,
            environment: attributes.environment,
            user_attributes: attributes.user_attributes,
            experiment_metadata: attributes.experiment_metadata,
            device_id: attributes.device_id,
            session_id: attributes.session_id,
            auth: account_uuid || organization_uuid ? { account_uuid, organization_uuid } : undefined
          })
        });
        continue;
      }
      const eventName = attributes.event_name || log.body || "unknown";
      const coreMetadata = attributes.core_metadata;
      const userMetadata = attributes.user_metadata;
      const eventMetadata = attributes.event_metadata || {};
      if (!coreMetadata) {
        if (false) {}
        events.push({
          event_type: "ClaudeCodeInternalEvent",
          event_data: ClaudeCodeInternalEvent.toJSON({
            event_id: attributes.event_id,
            event_name: eventName,
            client_timestamp: this.hrTimeToDate(log.hrTime),
            session_id: getSessionId(),
            additional_metadata: Buffer.from(jsonStringify({
              transform_error: "core_metadata attribute is missing"
            })).toString("base64")
          })
        });
        continue;
      }
      const formatted = to1PEventFormat(coreMetadata, userMetadata, eventMetadata);
      const {
        _PROTO_skill_name,
        _PROTO_plugin_name,
        _PROTO_marketplace_name,
        ...rest
      } = formatted.additional;
      const additionalMetadata = stripProtoFields(rest);
      events.push({
        event_type: "ClaudeCodeInternalEvent",
        event_data: ClaudeCodeInternalEvent.toJSON({
          event_id: attributes.event_id,
          event_name: eventName,
          client_timestamp: this.hrTimeToDate(log.hrTime),
          device_id: attributes.user_id,
          email: userMetadata?.email,
          auth: formatted.auth,
          ...formatted.core,
          env: formatted.env,
          process: formatted.process,
          skill_name: typeof _PROTO_skill_name === "string" ? _PROTO_skill_name : undefined,
          plugin_name: typeof _PROTO_plugin_name === "string" ? _PROTO_plugin_name : undefined,
          marketplace_name: typeof _PROTO_marketplace_name === "string" ? _PROTO_marketplace_name : undefined,
          additional_metadata: Object.keys(additionalMetadata).length > 0 ? Buffer.from(jsonStringify(additionalMetadata)).toString("base64") : undefined
        })
      });
    }
    return { events };
  }
  async shutdown() {
    this.isShutdown = true;
    this.resetBackoff();
    await this.forceFlush();
    if (false) {}
  }
  async forceFlush() {
    await Promise.all(this.pendingExports);
    if (false) {}
  }
}
function getAxiosErrorContext(error) {
  if (!axios_default.isAxiosError(error)) {
    return errorMessage(error);
  }
  const parts = [];
  const requestId = error.response?.headers?.["request-id"];
  if (requestId) {
    parts.push(`request-id=${requestId}`);
  }
  if (error.response?.status) {
    parts.push(`status=${error.response.status}`);
  }
  if (error.code) {
    parts.push(`code=${error.code}`);
  }
  if (error.message) {
    parts.push(error.message);
  }
  return parts.join(", ");
}
var BATCH_UUID, FILE_PREFIX = "1p_failed_events.";
var init_firstPartyEventLoggingExporter = __esm(() => {
  init_esm5();
  init_axios();
  init_state();
  init_claude_code_internal_event();
  init_growthbook_experiment_event();
  init_auth2();
  init_config();
  init_debug();
  init_envUtils();
  init_errors();
  init_http();
  init_json();
  init_log();
  init_sleep();
  init_slowOperations();
  init_userAgent();
  init_client2();
  init_analytics();
  init_metadata();
  BATCH_UUID = randomUUID2();
});

// src/services/analytics/sinkKillswitch.ts
function isSinkKilled(sink) {
  const config = getDynamicConfig_CACHED_MAY_BE_STALE(SINK_KILLSWITCH_CONFIG_NAME, {});
  return config?.[sink] === true;
}
var SINK_KILLSWITCH_CONFIG_NAME = "tengu_frond_boric";
var init_sinkKillswitch = __esm(() => {
  init_growthbook();
});

// src/services/analytics/firstPartyEventLogger.ts
import { randomUUID as randomUUID3 } from "crypto";
function getEventSamplingConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE(EVENT_SAMPLING_CONFIG_NAME, {});
}
function shouldSampleEvent(eventName) {
  const config = getEventSamplingConfig();
  const eventConfig = config[eventName];
  if (!eventConfig) {
    return null;
  }
  const sampleRate = eventConfig.sample_rate;
  if (typeof sampleRate !== "number" || sampleRate < 0 || sampleRate > 1) {
    return null;
  }
  if (sampleRate >= 1) {
    return null;
  }
  if (sampleRate <= 0) {
    return 0;
  }
  return Math.random() < sampleRate ? sampleRate : 0;
}
function getBatchConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE(BATCH_CONFIG_NAME, {});
}
async function shutdown1PEventLogging() {
  if (!firstPartyEventLoggerProvider) {
    return;
  }
  try {
    await firstPartyEventLoggerProvider.shutdown();
    if (false) {}
  } catch {}
}
function is1PEventLoggingEnabled() {
  return !isAnalyticsDisabled();
}
async function logEventTo1PAsync(firstPartyEventLogger2, eventName, metadata = {}) {
  try {
    const coreMetadata = await getEventMetadata({
      model: metadata.model,
      betas: metadata.betas
    });
    const attributes = {
      event_name: eventName,
      event_id: randomUUID3(),
      core_metadata: coreMetadata,
      user_metadata: getCoreUserData(true),
      event_metadata: metadata
    };
    const userId = getOrCreateUserID();
    if (userId) {
      attributes.user_id = userId;
    }
    if (false) {}
    firstPartyEventLogger2.emit({
      body: eventName,
      attributes
    });
  } catch (e) {
    if (true) {
      throw e;
    }
    if (false) {}
  }
}
function logEventTo1P(eventName, metadata = {}) {
  if (!is1PEventLoggingEnabled()) {
    return;
  }
  if (!firstPartyEventLogger || isSinkKilled("firstParty")) {
    return;
  }
  logEventTo1PAsync(firstPartyEventLogger, eventName, metadata);
}
function getEnvironmentForGrowthBook() {
  return "production";
}
function logGrowthBookExperimentTo1P(data) {
  if (!is1PEventLoggingEnabled()) {
    return;
  }
  if (!firstPartyEventLogger || isSinkKilled("firstParty")) {
    return;
  }
  const userId = getOrCreateUserID();
  const { accountUuid, organizationUuid } = getCoreUserData(true);
  const attributes = {
    event_type: "GrowthbookExperimentEvent",
    event_id: randomUUID3(),
    experiment_id: data.experimentId,
    variation_id: data.variationId,
    ...userId && { device_id: userId },
    ...accountUuid && { account_uuid: accountUuid },
    ...organizationUuid && { organization_uuid: organizationUuid },
    ...data.userAttributes && {
      session_id: data.userAttributes.sessionId,
      user_attributes: jsonStringify(data.userAttributes)
    },
    ...data.experimentMetadata && {
      experiment_metadata: jsonStringify(data.experimentMetadata)
    },
    environment: getEnvironmentForGrowthBook()
  };
  if (false) {}
  firstPartyEventLogger.emit({
    body: "growthbook_experiment",
    attributes
  });
}
function initialize1PEventLogging() {
  profileCheckpoint("1p_event_logging_start");
  const enabled = is1PEventLoggingEnabled();
  if (!enabled) {
    if (false) {}
    return;
  }
  const batchConfig = getBatchConfig();
  lastBatchConfig = batchConfig;
  profileCheckpoint("1p_event_after_growthbook_config");
  const scheduledDelayMillis = batchConfig.scheduledDelayMillis || parseInt(process.env.OTEL_LOGS_EXPORT_INTERVAL || DEFAULT_LOGS_EXPORT_INTERVAL_MS.toString());
  const maxExportBatchSize = batchConfig.maxExportBatchSize || DEFAULT_MAX_EXPORT_BATCH_SIZE;
  const maxQueueSize = batchConfig.maxQueueSize || DEFAULT_MAX_QUEUE_SIZE;
  const platform3 = getPlatform();
  const attributes = {
    [import_semantic_conventions4.ATTR_SERVICE_NAME]: "claude-code",
    [import_semantic_conventions4.ATTR_SERVICE_VERSION]: "1.0.0"
  };
  if (platform3 === "wsl") {
    const wslVersion = getWslVersion();
    if (wslVersion) {
      attributes["wsl.version"] = wslVersion;
    }
  }
  const resource = resourceFromAttributes(attributes);
  const eventLoggingExporter = new FirstPartyEventLoggingExporter({
    maxBatchSize: maxExportBatchSize,
    skipAuth: batchConfig.skipAuth,
    maxAttempts: batchConfig.maxAttempts,
    path: batchConfig.path,
    baseUrl: batchConfig.baseUrl,
    isKilled: () => isSinkKilled("firstParty")
  });
  firstPartyEventLoggerProvider = new LoggerProvider({
    resource,
    processors: [
      new BatchLogRecordProcessor(eventLoggingExporter, {
        scheduledDelayMillis,
        maxExportBatchSize,
        maxQueueSize
      })
    ]
  });
  firstPartyEventLogger = firstPartyEventLoggerProvider.getLogger("com.anthropic.claude_code.events", "1.0.0");
}
async function reinitialize1PEventLoggingIfConfigChanged() {
  if (!is1PEventLoggingEnabled() || !firstPartyEventLoggerProvider) {
    return;
  }
  const newConfig = getBatchConfig();
  if (isEqual_default(newConfig, lastBatchConfig)) {
    return;
  }
  if (false) {}
  const oldProvider = firstPartyEventLoggerProvider;
  const oldLogger = firstPartyEventLogger;
  firstPartyEventLogger = null;
  try {
    await oldProvider.forceFlush();
  } catch {}
  firstPartyEventLoggerProvider = null;
  try {
    initialize1PEventLogging();
  } catch (e) {
    firstPartyEventLoggerProvider = oldProvider;
    firstPartyEventLogger = oldLogger;
    logError(e);
    return;
  }
  oldProvider.shutdown().catch(() => {});
}
var import_semantic_conventions4, EVENT_SAMPLING_CONFIG_NAME = "tengu_event_sampling_config", BATCH_CONFIG_NAME = "tengu_1p_event_batch_config", firstPartyEventLogger = null, firstPartyEventLoggerProvider = null, lastBatchConfig = null, DEFAULT_LOGS_EXPORT_INTERVAL_MS = 1e4, DEFAULT_MAX_EXPORT_BATCH_SIZE = 200, DEFAULT_MAX_QUEUE_SIZE = 8192;
var init_firstPartyEventLogger = __esm(() => {
  init_esm3();
  init_esm7();
  init_lodash();
  init_config();
  init_debug();
  init_log();
  init_platform();
  init_slowOperations();
  init_startupProfiler();
  init_user();
  init_config3();
  init_firstPartyEventLoggingExporter();
  init_growthbook();
  init_metadata();
  init_sinkKillswitch();
  import_semantic_conventions4 = __toESM(require_src2(), 1);
});

// src/services/analytics/growthbook.ts
function callSafe(listener) {
  try {
    Promise.resolve(listener()).catch((e) => {
      logError(e);
    });
  } catch (e) {
    logError(e);
  }
}
function onGrowthBookRefresh(listener) {
  let subscribed = true;
  const unsubscribe2 = refreshed.subscribe(() => callSafe(listener));
  if (remoteEvalFeatureValues.size > 0) {
    queueMicrotask(() => {
      if (subscribed && remoteEvalFeatureValues.size > 0) {
        callSafe(listener);
      }
    });
  }
  return () => {
    subscribed = false;
    unsubscribe2();
  };
}
function getEnvOverrides() {
  if (!envOverridesParsed) {
    envOverridesParsed = true;
    if (false) {}
  }
  return envOverrides;
}
function hasGrowthBookEnvOverride(feature) {
  const overrides = getEnvOverrides();
  return overrides !== null && feature in overrides;
}
function getConfigOverrides() {
  if (true)
    return;
  try {
    return getGlobalConfig().growthBookOverrides;
  } catch {
    return;
  }
}
function getAllGrowthBookFeatures() {
  if (remoteEvalFeatureValues.size > 0) {
    return Object.fromEntries(remoteEvalFeatureValues);
  }
  return getGlobalConfig().cachedGrowthBookFeatures ?? {};
}
function getGrowthBookConfigOverrides() {
  return getConfigOverrides() ?? {};
}
function setGrowthBookConfigOverride(feature, value) {
  if (true)
    return;
  try {
    saveGlobalConfig((c) => {
      const current = c.growthBookOverrides ?? {};
      if (value === undefined) {
        if (!(feature in current))
          return c;
        const { [feature]: _, ...rest } = current;
        if (Object.keys(rest).length === 0) {
          const { growthBookOverrides: __, ...configWithout } = c;
          return configWithout;
        }
        return { ...c, growthBookOverrides: rest };
      }
      if (isEqual_default(current[feature], value))
        return c;
      return { ...c, growthBookOverrides: { ...current, [feature]: value } };
    });
    refreshed.emit();
  } catch (e) {
    logError(e);
  }
}
function clearGrowthBookConfigOverrides() {
  if (true)
    return;
  try {
    saveGlobalConfig((c) => {
      if (!c.growthBookOverrides || Object.keys(c.growthBookOverrides).length === 0) {
        return c;
      }
      const { growthBookOverrides: _, ...rest } = c;
      return rest;
    });
    refreshed.emit();
  } catch (e) {
    logError(e);
  }
}
function logExposureForFeature(feature) {
  if (loggedExposures.has(feature)) {
    return;
  }
  const expData = experimentDataByFeature.get(feature);
  if (expData) {
    loggedExposures.add(feature);
    logGrowthBookExperimentTo1P({
      experimentId: expData.experimentId,
      variationId: expData.variationId,
      userAttributes: getUserAttributes(),
      experimentMetadata: {
        feature_id: feature
      }
    });
  }
}
async function processRemoteEvalPayload(gbClient) {
  const payload = gbClient.getPayload();
  if (!payload?.features || Object.keys(payload.features).length === 0) {
    return false;
  }
  experimentDataByFeature.clear();
  const transformedFeatures = {};
  for (const [key, feature] of Object.entries(payload.features)) {
    const f = feature;
    if ("value" in f && !("defaultValue" in f)) {
      transformedFeatures[key] = {
        ...f,
        defaultValue: f.value
      };
    } else {
      transformedFeatures[key] = f;
    }
    if (f.source === "experiment" && f.experimentResult) {
      const expResult = f.experimentResult;
      const exp = f.experiment;
      if (exp?.key && expResult.variationId !== undefined) {
        experimentDataByFeature.set(key, {
          experimentId: exp.key,
          variationId: expResult.variationId
        });
      }
    }
  }
  await gbClient.setPayload({
    ...payload,
    features: transformedFeatures
  });
  remoteEvalFeatureValues.clear();
  for (const [key, feature] of Object.entries(transformedFeatures)) {
    const v = "value" in feature ? feature.value : feature.defaultValue;
    if (v !== undefined) {
      remoteEvalFeatureValues.set(key, v);
    }
  }
  return true;
}
function syncRemoteEvalToDisk() {
  const fresh = Object.fromEntries(remoteEvalFeatureValues);
  const config = getGlobalConfig();
  if (isEqual_default(config.cachedGrowthBookFeatures, fresh)) {
    return;
  }
  saveGlobalConfig((current) => ({
    ...current,
    cachedGrowthBookFeatures: fresh
  }));
}
function isGrowthBookEnabled() {
  return is1PEventLoggingEnabled();
}
function getApiBaseUrlHost() {
  const baseUrl = process.env.ANTHROPIC_BASE_URL;
  if (!baseUrl)
    return;
  try {
    const host = new URL(baseUrl).host;
    if (host === "api.anthropic.com")
      return;
    return host;
  } catch {
    return;
  }
}
function getUserAttributes() {
  const user = getUserForGrowthBook();
  let email = user.email;
  if (!email && false) {}
  const apiBaseUrlHost = getApiBaseUrlHost();
  const attributes = {
    id: user.deviceId,
    sessionId: user.sessionId,
    deviceID: user.deviceId,
    platform: user.platform,
    ...apiBaseUrlHost && { apiBaseUrlHost },
    ...user.organizationUuid && { organizationUUID: user.organizationUuid },
    ...user.accountUuid && { accountUUID: user.accountUuid },
    ...user.userType && { userType: user.userType },
    ...user.subscriptionType && { subscriptionType: user.subscriptionType },
    ...user.rateLimitTier && { rateLimitTier: user.rateLimitTier },
    ...user.firstTokenTime && { firstTokenTime: user.firstTokenTime },
    ...email && { email },
    ...user.appVersion && { appVersion: user.appVersion },
    ...user.githubActionsMetadata && {
      githubActionsMetadata: user.githubActionsMetadata
    }
  };
  return attributes;
}
async function getFeatureValueInternal(feature, defaultValue, logExposure) {
  const overrides = getEnvOverrides();
  if (overrides && feature in overrides) {
    return overrides[feature];
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && feature in configOverrides) {
    return configOverrides[feature];
  }
  if (!isGrowthBookEnabled()) {
    return defaultValue;
  }
  const growthBookClient = await initializeGrowthBook();
  if (!growthBookClient) {
    return defaultValue;
  }
  let result;
  if (remoteEvalFeatureValues.has(feature)) {
    result = remoteEvalFeatureValues.get(feature);
  } else {
    result = growthBookClient.getFeatureValue(feature, defaultValue);
  }
  if (logExposure) {
    logExposureForFeature(feature);
  }
  if (false) {}
  return result;
}
async function getFeatureValue_DEPRECATED(feature, defaultValue) {
  return getFeatureValueInternal(feature, defaultValue, true);
}
function getFeatureValue_CACHED_MAY_BE_STALE(feature, defaultValue) {
  const overrides = getEnvOverrides();
  if (overrides && feature in overrides) {
    return overrides[feature];
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && feature in configOverrides) {
    return configOverrides[feature];
  }
  if (!isGrowthBookEnabled()) {
    return defaultValue;
  }
  if (experimentDataByFeature.has(feature)) {
    logExposureForFeature(feature);
  } else {
    pendingExposures.add(feature);
  }
  if (remoteEvalFeatureValues.has(feature)) {
    return remoteEvalFeatureValues.get(feature);
  }
  try {
    const cached = getGlobalConfig().cachedGrowthBookFeatures?.[feature];
    return cached !== undefined ? cached : defaultValue;
  } catch {
    return defaultValue;
  }
}
function getFeatureValue_CACHED_WITH_REFRESH(feature, defaultValue, _refreshIntervalMs) {
  return getFeatureValue_CACHED_MAY_BE_STALE(feature, defaultValue);
}
function checkStatsigFeatureGate_CACHED_MAY_BE_STALE(gate) {
  const overrides = getEnvOverrides();
  if (overrides && gate in overrides) {
    return Boolean(overrides[gate]);
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && gate in configOverrides) {
    return Boolean(configOverrides[gate]);
  }
  if (!isGrowthBookEnabled()) {
    return false;
  }
  if (experimentDataByFeature.has(gate)) {
    logExposureForFeature(gate);
  } else {
    pendingExposures.add(gate);
  }
  const config = getGlobalConfig();
  const gbCached = config.cachedGrowthBookFeatures?.[gate];
  if (gbCached !== undefined) {
    return Boolean(gbCached);
  }
  return config.cachedStatsigGates?.[gate] ?? false;
}
async function checkSecurityRestrictionGate(gate) {
  const overrides = getEnvOverrides();
  if (overrides && gate in overrides) {
    return Boolean(overrides[gate]);
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && gate in configOverrides) {
    return Boolean(configOverrides[gate]);
  }
  if (!isGrowthBookEnabled()) {
    return false;
  }
  if (reinitializingPromise) {
    await reinitializingPromise;
  }
  const config = getGlobalConfig();
  const statsigCached = config.cachedStatsigGates?.[gate];
  if (statsigCached !== undefined) {
    return Boolean(statsigCached);
  }
  const gbCached = config.cachedGrowthBookFeatures?.[gate];
  if (gbCached !== undefined) {
    return Boolean(gbCached);
  }
  return false;
}
async function checkGate_CACHED_OR_BLOCKING(gate) {
  const overrides = getEnvOverrides();
  if (overrides && gate in overrides) {
    return Boolean(overrides[gate]);
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && gate in configOverrides) {
    return Boolean(configOverrides[gate]);
  }
  if (!isGrowthBookEnabled()) {
    return false;
  }
  const cached = getGlobalConfig().cachedGrowthBookFeatures?.[gate];
  if (cached === true) {
    if (experimentDataByFeature.has(gate)) {
      logExposureForFeature(gate);
    } else {
      pendingExposures.add(gate);
    }
    return true;
  }
  return getFeatureValueInternal(gate, false, true);
}
function refreshGrowthBookAfterAuthChange() {
  if (!isGrowthBookEnabled()) {
    return;
  }
  try {
    resetGrowthBook();
    refreshed.emit();
    reinitializingPromise = initializeGrowthBook().catch((error) => {
      logError(toError(error));
      return null;
    }).finally(() => {
      reinitializingPromise = null;
    });
  } catch (error) {
    if (true) {
      throw error;
    }
    logError(toError(error));
  }
}
function resetGrowthBook() {
  stopPeriodicGrowthBookRefresh();
  if (currentBeforeExitHandler) {
    process.off("beforeExit", currentBeforeExitHandler);
    currentBeforeExitHandler = null;
  }
  if (currentExitHandler) {
    process.off("exit", currentExitHandler);
    currentExitHandler = null;
  }
  client?.destroy();
  client = null;
  clientCreatedWithAuth = false;
  reinitializingPromise = null;
  experimentDataByFeature.clear();
  pendingExposures.clear();
  loggedExposures.clear();
  remoteEvalFeatureValues.clear();
  getGrowthBookClient.cache?.clear?.();
  initializeGrowthBook.cache?.clear?.();
  envOverrides = null;
  envOverridesParsed = false;
}
async function refreshGrowthBookFeatures() {
  if (!isGrowthBookEnabled()) {
    return;
  }
  try {
    const growthBookClient = await initializeGrowthBook();
    if (!growthBookClient) {
      return;
    }
    await growthBookClient.refreshFeatures();
    if (growthBookClient !== client) {
      if (false) {}
      return;
    }
    const hadFeatures = await processRemoteEvalPayload(growthBookClient);
    if (growthBookClient !== client)
      return;
    if (false) {}
    if (hadFeatures) {
      syncRemoteEvalToDisk();
      refreshed.emit();
    }
  } catch (error) {
    if (true) {
      throw error;
    }
    logError(toError(error));
  }
}
function setupPeriodicGrowthBookRefresh() {
  if (!isGrowthBookEnabled()) {
    return;
  }
  if (refreshInterval) {
    clearInterval(refreshInterval);
  }
  refreshInterval = setInterval(() => {
    refreshGrowthBookFeatures();
  }, GROWTHBOOK_REFRESH_INTERVAL_MS);
  refreshInterval.unref?.();
  if (!beforeExitListener) {
    beforeExitListener = () => {
      stopPeriodicGrowthBookRefresh();
    };
    process.once("beforeExit", beforeExitListener);
  }
}
function stopPeriodicGrowthBookRefresh() {
  if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
  }
  if (beforeExitListener) {
    process.removeListener("beforeExit", beforeExitListener);
    beforeExitListener = null;
  }
}
async function getDynamicConfig_BLOCKS_ON_INIT(configName, defaultValue) {
  return getFeatureValue_DEPRECATED(configName, defaultValue);
}
function getDynamicConfig_CACHED_MAY_BE_STALE(configName, defaultValue) {
  return getFeatureValue_CACHED_MAY_BE_STALE(configName, defaultValue);
}
var client = null, currentBeforeExitHandler = null, currentExitHandler = null, clientCreatedWithAuth = false, experimentDataByFeature, remoteEvalFeatureValues, pendingExposures, loggedExposures, reinitializingPromise = null, refreshed, envOverrides = null, envOverridesParsed = false, getGrowthBookClient, initializeGrowthBook, GROWTHBOOK_REFRESH_INTERVAL_MS, refreshInterval = null, beforeExitListener = null;
var init_growthbook = __esm(() => {
  init_esm();
  init_lodash();
  init_state();
  init_keys();
  init_config();
  init_debug();
  init_errors();
  init_http();
  init_log();
  init_signal();
  init_slowOperations();
  init_user();
  init_firstPartyEventLogger();
  experimentDataByFeature = new Map;
  remoteEvalFeatureValues = new Map;
  pendingExposures = new Set;
  loggedExposures = new Set;
  refreshed = createSignal();
  getGrowthBookClient = memoize_default(() => {
    if (!isGrowthBookEnabled()) {
      return null;
    }
    const attributes = getUserAttributes();
    const clientKey = getGrowthBookClientKey();
    if (false) {}
    const baseUrl = "https://api.anthropic.com/";
    const hasTrust = checkHasTrustDialogAccepted() || getSessionTrustAccepted() || getIsNonInteractiveSession();
    const authHeaders = hasTrust ? getAuthHeaders() : { headers: {}, error: "trust not established" };
    const hasAuth = !authHeaders.error;
    clientCreatedWithAuth = hasAuth;
    const thisClient = new GrowthBook({
      apiHost: baseUrl,
      clientKey,
      attributes,
      remoteEval: true,
      cacheKeyAttributes: ["id", "organizationUUID"],
      ...authHeaders.error ? {} : { apiHostRequestHeaders: authHeaders.headers },
      ...{}
    });
    client = thisClient;
    if (!hasAuth) {
      return { client: thisClient, initialized: Promise.resolve() };
    }
    const initialized = thisClient.init({ timeout: 5000 }).then(async (result) => {
      if (client !== thisClient) {
        if (false) {}
        return;
      }
      if (false) {}
      const hadFeatures = await processRemoteEvalPayload(thisClient);
      if (client !== thisClient)
        return;
      if (hadFeatures) {
        for (const feature of pendingExposures) {
          logExposureForFeature(feature);
        }
        pendingExposures.clear();
        syncRemoteEvalToDisk();
        refreshed.emit();
      }
      if (false) {}
    }).catch((error) => {
      if (false) {}
    });
    currentBeforeExitHandler = () => client?.destroy();
    currentExitHandler = () => client?.destroy();
    process.on("beforeExit", currentBeforeExitHandler);
    process.on("exit", currentExitHandler);
    return { client: thisClient, initialized };
  });
  initializeGrowthBook = memoize_default(async () => {
    let clientWrapper = getGrowthBookClient();
    if (!clientWrapper) {
      return null;
    }
    if (!clientCreatedWithAuth) {
      const hasTrust = checkHasTrustDialogAccepted() || getSessionTrustAccepted() || getIsNonInteractiveSession();
      if (hasTrust) {
        const currentAuth = getAuthHeaders();
        if (!currentAuth.error) {
          if (false) {}
          resetGrowthBook();
          clientWrapper = getGrowthBookClient();
          if (!clientWrapper) {
            return null;
          }
        }
      }
    }
    await clientWrapper.initialized;
    setupPeriodicGrowthBookRefresh();
    return clientWrapper.client;
  });
  GROWTHBOOK_REFRESH_INTERVAL_MS = 6 * 60 * 60 * 1000;
});

// src/utils/fileReadCache.ts
class FileReadCache {
  cache = new Map;
  maxCacheSize = 1000;
  readFile(filePath) {
    const fs = getFsImplementation();
    let stats;
    try {
      stats = fs.statSync(filePath);
    } catch (error) {
      this.cache.delete(filePath);
      throw error;
    }
    const cacheKey = filePath;
    const cachedData = this.cache.get(cacheKey);
    if (cachedData && cachedData.mtime === stats.mtimeMs) {
      return {
        content: cachedData.content,
        encoding: cachedData.encoding
      };
    }
    const encoding = detectFileEncoding(filePath);
    const content = fs.readFileSync(filePath, { encoding }).replaceAll(`\r
`, `
`);
    this.cache.set(cacheKey, {
      content,
      encoding,
      mtime: stats.mtimeMs
    });
    if (this.cache.size > this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
    return { content, encoding };
  }
  clear() {
    this.cache.clear();
  }
  invalidate(filePath) {
    this.cache.delete(filePath);
  }
  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }
}
var fileReadCache;
var init_fileReadCache = __esm(() => {
  init_file();
  init_fsOperations();
  fileReadCache = new FileReadCache;
});

// src/utils/file.ts
import { chmodSync, writeFileSync as fsWriteFileSync } from "fs";
import { realpath, stat as stat2 } from "fs/promises";
import { homedir as homedir2 } from "os";
import {
  basename as basename2,
  dirname as dirname2,
  extname as extname2,
  isAbsolute as isAbsolute2,
  join as join7,
  normalize as normalize2,
  relative,
  resolve as resolve2,
  sep as sep2
} from "path";
async function pathExists(path2) {
  try {
    await stat2(path2);
    return true;
  } catch {
    return false;
  }
}
function readFileSafe(filepath) {
  try {
    const fs = getFsImplementation();
    return fs.readFileSync(filepath, { encoding: "utf8" });
  } catch (error) {
    logError(error);
    return null;
  }
}
function getFileModificationTime(filePath) {
  const fs = getFsImplementation();
  return Math.floor(fs.statSync(filePath).mtimeMs);
}
async function getFileModificationTimeAsync(filePath) {
  const s = await getFsImplementation().stat(filePath);
  return Math.floor(s.mtimeMs);
}
function writeTextContent(filePath, content, encoding, endings) {
  let toWrite = content;
  if (endings === "CRLF") {
    toWrite = content.replaceAll(`\r
`, `
`).split(`
`).join(`\r
`);
  }
  writeFileSyncAndFlush_DEPRECATED(filePath, toWrite, { encoding });
}
function detectFileEncoding(filePath) {
  try {
    const fs = getFsImplementation();
    const { resolvedPath } = safeResolvePath(fs, filePath);
    return detectEncodingForResolvedPath(resolvedPath);
  } catch (error) {
    if (isFsInaccessible(error)) {
      logForDebugging(`detectFileEncoding failed for expected reason: ${error.code}`, {
        level: "debug"
      });
    } else {
      logError(error);
    }
    return "utf8";
  }
}
function detectLineEndings(filePath, encoding = "utf8") {
  try {
    const fs = getFsImplementation();
    const { resolvedPath } = safeResolvePath(fs, filePath);
    const { buffer, bytesRead } = fs.readSync(resolvedPath, { length: 4096 });
    const content = buffer.toString(encoding, 0, bytesRead);
    return detectLineEndingsForString(content);
  } catch (error) {
    logError(error);
    return "LF";
  }
}
function convertLeadingTabsToSpaces(content) {
  if (!content.includes("\t"))
    return content;
  return content.replace(/^\t+/gm, (_) => "  ".repeat(_.length));
}
function getAbsoluteAndRelativePaths(path2) {
  const absolutePath = path2 ? expandPath(path2) : undefined;
  const relativePath = absolutePath ? relative(getCwd(), absolutePath) : undefined;
  return { absolutePath, relativePath };
}
function getDisplayPath(filePath) {
  const { relativePath } = getAbsoluteAndRelativePaths(filePath);
  if (relativePath && !relativePath.startsWith("..")) {
    return relativePath;
  }
  const homeDir = homedir2();
  if (filePath.startsWith(homeDir + sep2)) {
    return "~" + filePath.slice(homeDir.length);
  }
  return filePath;
}
function findSimilarFile(filePath) {
  const fs = getFsImplementation();
  try {
    const dir = dirname2(filePath);
    const fileBaseName = basename2(filePath, extname2(filePath));
    const files = fs.readdirSync(dir);
    const similarFiles = files.filter((file) => basename2(file.name, extname2(file.name)) === fileBaseName && join7(dir, file.name) !== filePath);
    const firstMatch = similarFiles[0];
    if (firstMatch) {
      return firstMatch.name;
    }
    return;
  } catch (error) {
    if (!isENOENT(error)) {
      logError(error);
    }
    return;
  }
}
async function suggestPathUnderCwd(requestedPath) {
  const cwd = getCwd();
  const cwdParent = dirname2(cwd);
  let resolvedPath = requestedPath;
  try {
    const resolvedDir = await realpath(dirname2(requestedPath));
    resolvedPath = join7(resolvedDir, basename2(requestedPath));
  } catch {}
  const cwdParentPrefix = cwdParent === sep2 ? sep2 : cwdParent + sep2;
  if (!resolvedPath.startsWith(cwdParentPrefix) || resolvedPath.startsWith(cwd + sep2) || resolvedPath === cwd) {
    return;
  }
  const relFromParent = relative(cwdParent, resolvedPath);
  const correctedPath = join7(cwd, relFromParent);
  try {
    await stat2(correctedPath);
    return correctedPath;
  } catch {
    return;
  }
}
function isCompactLinePrefixEnabled() {
  return !getFeatureValue_CACHED_MAY_BE_STALE("tengu_compact_line_prefix_killswitch", false);
}
function addLineNumbers({
  content,
  startLine
}) {
  if (!content) {
    return "";
  }
  const lines = content.split(/\r?\n/);
  if (isCompactLinePrefixEnabled()) {
    return lines.map((line, index2) => `${index2 + startLine}	${line}`).join(`
`);
  }
  return lines.map((line, index2) => {
    const numStr = String(index2 + startLine);
    if (numStr.length >= 6) {
      return `${numStr}\u2192${line}`;
    }
    return `${numStr.padStart(6, " ")}\u2192${line}`;
  }).join(`
`);
}
function stripLineNumberPrefix(line) {
  const match = line.match(/^\s*\d+[\u2192\t](.*)$/);
  return match?.[1] ?? line;
}
function isDirEmpty(dirPath) {
  try {
    return getFsImplementation().isDirEmptySync(dirPath);
  } catch (e) {
    return isENOENT(e);
  }
}
function readFileSyncCached(filePath) {
  const { content } = fileReadCache.readFile(filePath);
  return content;
}
function writeFileSyncAndFlush_DEPRECATED(filePath, content, options = { encoding: "utf-8" }) {
  const fs = getFsImplementation();
  let targetPath = filePath;
  try {
    const linkTarget = fs.readlinkSync(filePath);
    targetPath = isAbsolute2(linkTarget) ? linkTarget : resolve2(dirname2(filePath), linkTarget);
    logForDebugging(`Writing through symlink: ${filePath} -> ${targetPath}`);
  } catch {}
  const tempPath = `${targetPath}.tmp.${process.pid}.${Date.now()}`;
  let targetMode;
  let targetExists = false;
  try {
    targetMode = fs.statSync(targetPath).mode;
    targetExists = true;
    logForDebugging(`Preserving file permissions: ${targetMode.toString(8)}`);
  } catch (e) {
    if (!isENOENT(e))
      throw e;
    if (options.mode !== undefined) {
      targetMode = options.mode;
      logForDebugging(`Setting permissions for new file: ${targetMode.toString(8)}`);
    }
  }
  try {
    logForDebugging(`Writing to temp file: ${tempPath}`);
    const writeOptions = {
      encoding: options.encoding,
      flush: true
    };
    if (!targetExists && options.mode !== undefined) {
      writeOptions.mode = options.mode;
    }
    fsWriteFileSync(tempPath, content, writeOptions);
    logForDebugging(`Temp file written successfully, size: ${content.length} bytes`);
    if (targetExists && targetMode !== undefined) {
      chmodSync(tempPath, targetMode);
      logForDebugging(`Applied original permissions to temp file`);
    }
    logForDebugging(`Renaming ${tempPath} to ${targetPath}`);
    fs.renameSync(tempPath, targetPath);
    logForDebugging(`File ${targetPath} written atomically`);
  } catch (atomicError) {
    logForDebugging(`Failed to write file atomically: ${atomicError}`, {
      level: "error"
    });
    logEvent("tengu_atomic_write_error", {});
    try {
      logForDebugging(`Cleaning up temp file: ${tempPath}`);
      fs.unlinkSync(tempPath);
    } catch (cleanupError) {
      logForDebugging(`Failed to clean up temp file: ${cleanupError}`);
    }
    logForDebugging(`Falling back to non-atomic write for ${targetPath}`);
    try {
      const fallbackOptions = {
        encoding: options.encoding,
        flush: true
      };
      if (!targetExists && options.mode !== undefined) {
        fallbackOptions.mode = options.mode;
      }
      fsWriteFileSync(targetPath, content, fallbackOptions);
      logForDebugging(`File ${targetPath} written successfully with non-atomic fallback`);
    } catch (fallbackError) {
      logForDebugging(`Non-atomic write also failed: ${fallbackError}`);
      throw fallbackError;
    }
  }
}
function getDesktopPath() {
  const platform3 = getPlatform();
  const homeDir = homedir2();
  if (platform3 === "macos") {
    return join7(homeDir, "Desktop");
  }
  if (platform3 === "windows") {
    const windowsHome = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, "/") : null;
    if (windowsHome) {
      const wslPath = windowsHome.replace(/^[A-Z]:/, "");
      const desktopPath2 = `/mnt/c${wslPath}/Desktop`;
      if (getFsImplementation().existsSync(desktopPath2)) {
        return desktopPath2;
      }
    }
    try {
      const usersDir = "/mnt/c/Users";
      const userDirs = getFsImplementation().readdirSync(usersDir);
      for (const user of userDirs) {
        if (user.name === "Public" || user.name === "Default" || user.name === "Default User" || user.name === "All Users") {
          continue;
        }
        const potentialDesktopPath = join7(usersDir, user.name, "Desktop");
        if (getFsImplementation().existsSync(potentialDesktopPath)) {
          return potentialDesktopPath;
        }
      }
    } catch (error) {
      logError(error);
    }
  }
  const desktopPath = join7(homeDir, "Desktop");
  if (getFsImplementation().existsSync(desktopPath)) {
    return desktopPath;
  }
  return homeDir;
}
function isFileWithinReadSizeLimit(filePath, maxSizeBytes = MAX_OUTPUT_SIZE) {
  try {
    const stats = getFsImplementation().statSync(filePath);
    return stats.size <= maxSizeBytes;
  } catch {
    return false;
  }
}
function normalizePathForComparison(filePath) {
  let normalized = normalize2(filePath);
  if (getPlatform() === "windows") {
    normalized = normalized.replace(/\//g, "\\").toLowerCase();
  }
  return normalized;
}
function pathsEqual(path1, path2) {
  return normalizePathForComparison(path1) === normalizePathForComparison(path2);
}
var MAX_OUTPUT_SIZE, FILE_NOT_FOUND_CWD_NOTE = "Note: your current working directory is";
var init_file = __esm(() => {
  init_analytics();
  init_growthbook();
  init_cwd();
  init_debug();
  init_errors();
  init_fileRead();
  init_fileReadCache();
  init_fsOperations();
  init_log();
  init_path();
  init_platform();
  MAX_OUTPUT_SIZE = 0.25 * 1024 * 1024;
});

// src/utils/git/gitignore.ts
import { appendFile as appendFile2, mkdir as mkdir3, readFile, writeFile as writeFile3 } from "fs/promises";
import { homedir as homedir3 } from "os";
import { dirname as dirname3, join as join8 } from "path";
async function isPathGitignored(filePath, cwd) {
  const { code } = await execFileNoThrowWithCwd("git", ["check-ignore", filePath], {
    preserveOutputOnError: false,
    cwd
  });
  return code === 0;
}
function getGlobalGitignorePath() {
  return join8(homedir3(), ".config", "git", "ignore");
}
async function addFileGlobRuleToGitignore(filename, cwd = getCwd()) {
  try {
    if (!await dirIsInGitRepo(cwd)) {
      return;
    }
    const gitignoreEntry = `**/${filename}`;
    const testPath = filename.endsWith("/") ? `${filename}sample-file.txt` : filename;
    if (await isPathGitignored(testPath, cwd)) {
      return;
    }
    const globalGitignorePath = getGlobalGitignorePath();
    const configGitDir = dirname3(globalGitignorePath);
    await mkdir3(configGitDir, { recursive: true });
    try {
      const content = await readFile(globalGitignorePath, { encoding: "utf-8" });
      if (content.includes(gitignoreEntry)) {
        return;
      }
      await appendFile2(globalGitignorePath, `
${gitignoreEntry}
`);
    } catch (e) {
      const code = getErrnoCode(e);
      if (code === "ENOENT") {
        await writeFile3(globalGitignorePath, `${gitignoreEntry}
`, "utf-8");
      } else {
        throw e;
      }
    }
  } catch (error) {
    logError(error);
  }
}
var init_gitignore = __esm(() => {
  init_cwd();
  init_errors();
  init_execFileNoThrow();
  init_git();
  init_log();
});

// src/utils/settings/constants.ts
function getSettingSourceName(source) {
  switch (source) {
    case "userSettings":
      return "user";
    case "projectSettings":
      return "project";
    case "localSettings":
      return "project, gitignored";
    case "flagSettings":
      return "cli flag";
    case "policySettings":
      return "managed";
  }
}
function getSourceDisplayName(source) {
  switch (source) {
    case "userSettings":
      return "User";
    case "projectSettings":
      return "Project";
    case "localSettings":
      return "Local";
    case "flagSettings":
      return "Flag";
    case "policySettings":
      return "Managed";
    case "plugin":
      return "Plugin";
    case "built-in":
      return "Built-in";
  }
}
function getSettingSourceDisplayNameLowercase(source) {
  switch (source) {
    case "userSettings":
      return "user settings";
    case "projectSettings":
      return "shared project settings";
    case "localSettings":
      return "project local settings";
    case "flagSettings":
      return "command line arguments";
    case "policySettings":
      return "enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "command configuration";
    case "session":
      return "current session";
  }
}
function getSettingSourceDisplayNameCapitalized(source) {
  switch (source) {
    case "userSettings":
      return "User settings";
    case "projectSettings":
      return "Shared project settings";
    case "localSettings":
      return "Project local settings";
    case "flagSettings":
      return "Command line arguments";
    case "policySettings":
      return "Enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "Command configuration";
    case "session":
      return "Current session";
  }
}
function parseSettingSourcesFlag(flag) {
  if (flag === "")
    return [];
  const names = flag.split(",").map((s) => s.trim());
  const result = [];
  for (const name of names) {
    switch (name) {
      case "user":
        result.push("userSettings");
        break;
      case "project":
        result.push("projectSettings");
        break;
      case "local":
        result.push("localSettings");
        break;
      default:
        throw new Error(`Invalid setting source: ${name}. Valid options are: user, project, local`);
    }
  }
  return result;
}
function getEnabledSettingSources() {
  const allowed = getAllowedSettingSources();
  const result = new Set(allowed);
  result.add("policySettings");
  result.add("flagSettings");
  return Array.from(result);
}
function isSettingSourceEnabled(source) {
  const enabled = getEnabledSettingSources();
  return enabled.includes(source);
}
var SETTING_SOURCES, SOURCES, CLAUDE_CODE_SETTINGS_SCHEMA_URL = "https://json.schemastore.org/claude-code-settings.json";
var init_constants2 = __esm(() => {
  init_state();
  SETTING_SOURCES = [
    "userSettings",
    "projectSettings",
    "localSettings",
    "flagSettings",
    "policySettings"
  ];
  SOURCES = [
    "localSettings",
    "projectSettings",
    "userSettings"
  ];
});

// src/utils/settings/internalWrites.ts
function markInternalWrite(path2) {
  timestamps.set(path2, Date.now());
}
function consumeInternalWrite(path2, windowMs) {
  const ts = timestamps.get(path2);
  if (ts !== undefined && Date.now() - ts < windowMs) {
    timestamps.delete(path2);
    return true;
  }
  return false;
}
function clearInternalWrites() {
  timestamps.clear();
}
var timestamps;
var init_internalWrites = __esm(() => {
  timestamps = new Map;
});

// src/entrypoints/sandboxTypes.ts
var SandboxNetworkConfigSchema, SandboxFilesystemConfigSchema, SandboxSettingsSchema;
var init_sandboxTypes = __esm(() => {
  init_v4();
  init_lazySchema();
  SandboxNetworkConfigSchema = lazySchema(() => exports_external.object({
    allowedDomains: exports_external.array(exports_external.string()).optional(),
    allowManagedDomainsOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), only allowedDomains and WebFetch(domain:...) allow rules from managed settings are respected. " + "User, project, local, and flag settings domains are ignored. Denied domains are still respected from all sources."),
    allowUnixSockets: exports_external.array(exports_external.string()).optional().describe("macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path)."),
    allowAllUnixSockets: exports_external.boolean().optional().describe("If true, allow all Unix sockets (disables blocking on both platforms)."),
    allowLocalBinding: exports_external.boolean().optional(),
    httpProxyPort: exports_external.number().optional(),
    socksProxyPort: exports_external.number().optional()
  }).optional());
  SandboxFilesystemConfigSchema = lazySchema(() => exports_external.object({
    allowWrite: exports_external.array(exports_external.string()).optional().describe("Additional paths to allow writing within the sandbox. " + "Merged with paths from Edit(...) allow permission rules."),
    denyWrite: exports_external.array(exports_external.string()).optional().describe("Additional paths to deny writing within the sandbox. " + "Merged with paths from Edit(...) deny permission rules."),
    denyRead: exports_external.array(exports_external.string()).optional().describe("Additional paths to deny reading within the sandbox. " + "Merged with paths from Read(...) deny permission rules."),
    allowRead: exports_external.array(exports_external.string()).optional().describe("Paths to re-allow reading within denyRead regions. " + "Takes precedence over denyRead for matching paths."),
    allowManagedReadPathsOnly: exports_external.boolean().optional().describe("When true (set in managed settings), only allowRead paths from policySettings are used.")
  }).optional());
  SandboxSettingsSchema = lazySchema(() => exports_external.object({
    enabled: exports_external.boolean().optional(),
    failIfUnavailable: exports_external.boolean().optional().describe("Exit with an error at startup if sandbox.enabled is true but the sandbox cannot start " + "(missing dependencies, unsupported platform, or platform not in enabledPlatforms). " + "When false (default), a warning is shown and commands run unsandboxed. " + "Intended for managed-settings deployments that require sandboxing as a hard gate."),
    autoAllowBashIfSandboxed: exports_external.boolean().optional(),
    allowUnsandboxedCommands: exports_external.boolean().optional().describe("Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. " + "When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. " + "Default: true."),
    network: SandboxNetworkConfigSchema(),
    filesystem: SandboxFilesystemConfigSchema(),
    ignoreViolations: exports_external.record(exports_external.string(), exports_external.array(exports_external.string())).optional(),
    enableWeakerNestedSandbox: exports_external.boolean().optional(),
    enableWeakerNetworkIsolation: exports_external.boolean().optional().describe("macOS only: Allow access to com.apple.trustd.agent in the sandbox. " + "Needed for Go-based CLI tools (gh, gcloud, terraform, etc.) to verify TLS certificates " + "when using httpProxyPort with a MITM proxy and custom CA. " + "**Reduces security** \u2014 opens a potential data exfiltration vector through the trustd service. Default: false"),
    excludedCommands: exports_external.array(exports_external.string()).optional(),
    ripgrep: exports_external.object({
      command: exports_external.string(),
      args: exports_external.array(exports_external.string()).optional()
    }).optional().describe("Custom ripgrep configuration for bundled ripgrep support")
  }).passthrough());
});

// src/types/permissions.ts
var EXTERNAL_PERMISSION_MODES, INTERNAL_PERMISSION_MODES, PERMISSION_MODES;
var init_permissions = __esm(() => {
  EXTERNAL_PERMISSION_MODES = [
    "acceptEdits",
    "bypassPermissions",
    "default",
    "dontAsk",
    "plan"
  ];
  INTERNAL_PERMISSION_MODES = [
    ...EXTERNAL_PERMISSION_MODES,
    ...[]
  ];
  PERMISSION_MODES = INTERNAL_PERMISSION_MODES;
});

// src/utils/permissions/PermissionMode.ts
function isExternalPermissionMode(mode) {
  if (true) {
    return true;
  }
  return mode !== "auto" && mode !== "bubble";
}
function getModeConfig(mode) {
  return PERMISSION_MODE_CONFIG[mode] ?? PERMISSION_MODE_CONFIG.default;
}
function toExternalPermissionMode(mode) {
  return getModeConfig(mode).external;
}
function permissionModeFromString(str) {
  return PERMISSION_MODES.includes(str) ? str : "default";
}
function permissionModeTitle(mode) {
  return getModeConfig(mode).title;
}
function isDefaultMode(mode) {
  return mode === "default" || mode === undefined;
}
function permissionModeSymbol(mode) {
  return getModeConfig(mode).symbol;
}
function getModeColor(mode) {
  return getModeConfig(mode).color;
}
var permissionModeSchema, externalPermissionModeSchema, PERMISSION_MODE_CONFIG;
var init_PermissionMode = __esm(() => {
  init_v4();
  init_figures();
  init_permissions();
  init_lazySchema();
  permissionModeSchema = lazySchema(() => v4_default.enum(PERMISSION_MODES));
  externalPermissionModeSchema = lazySchema(() => v4_default.enum(EXTERNAL_PERMISSION_MODES));
  PERMISSION_MODE_CONFIG = {
    default: {
      title: "Default",
      shortTitle: "Default",
      symbol: "",
      color: "text",
      external: "default"
    },
    plan: {
      title: "Plan Mode",
      shortTitle: "Plan",
      symbol: PAUSE_ICON,
      color: "planMode",
      external: "plan"
    },
    acceptEdits: {
      title: "Accept edits",
      shortTitle: "Accept",
      symbol: "\u23F5\u23F5",
      color: "autoAccept",
      external: "acceptEdits"
    },
    bypassPermissions: {
      title: "Bypass Permissions",
      shortTitle: "Bypass",
      symbol: "\u23F5\u23F5",
      color: "error",
      external: "bypassPermissions"
    },
    dontAsk: {
      title: "Don't Ask",
      shortTitle: "DontAsk",
      symbol: "\u23F5\u23F5",
      color: "error",
      external: "dontAsk"
    },
    ...{}
  };
});

// src/entrypoints/sdk/coreTypes.generated.ts
var init_coreTypes_generated = () => {};

// src/entrypoints/sdk/coreTypes.ts
var HOOK_EVENTS;
var init_coreTypes = __esm(() => {
  init_coreTypes_generated();
  HOOK_EVENTS = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "Notification",
    "UserPromptSubmit",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged"
  ];
});

// src/entrypoints/sdk/runtimeTypes.ts
var init_runtimeTypes = () => {};

// src/entrypoints/sdk/toolTypes.ts
var init_toolTypes = () => {};

// src/entrypoints/agentSdkTypes.ts
var init_agentSdkTypes = __esm(() => {
  init_coreTypes();
  init_runtimeTypes();
  init_toolTypes();
});

// src/utils/shell/shellProvider.ts
var SHELL_TYPES, DEFAULT_HOOK_SHELL = "bash";
var init_shellProvider = __esm(() => {
  SHELL_TYPES = ["bash", "powershell"];
});

// src/schemas/hooks.ts
function buildHookSchemas() {
  const BashCommandHookSchema = exports_external.object({
    type: exports_external.literal("command").describe("Shell command hook type"),
    command: exports_external.string().describe("Shell command to execute"),
    if: IfConditionSchema(),
    shell: exports_external.enum(SHELL_TYPES).optional().describe("Shell interpreter. 'bash' uses your $SHELL (bash/zsh/sh); 'powershell' uses pwsh. Defaults to bash."),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for this specific command"),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution"),
    async: exports_external.boolean().optional().describe("If true, hook runs in background without blocking"),
    asyncRewake: exports_external.boolean().optional().describe("If true, hook runs in background and wakes the model on exit code 2 (blocking error). Implies async.")
  });
  const PromptHookSchema = exports_external.object({
    type: exports_external.literal("prompt").describe("LLM prompt hook type"),
    prompt: exports_external.string().describe("Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON."),
    if: IfConditionSchema(),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for this specific prompt evaluation"),
    model: exports_external.string().optional().describe('Model to use for this prompt hook (e.g., "claude-sonnet-4-6"). If not specified, uses the default small fast model.'),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution")
  });
  const HttpHookSchema = exports_external.object({
    type: exports_external.literal("http").describe("HTTP hook type"),
    url: exports_external.string().url().describe("URL to POST the hook input JSON to"),
    if: IfConditionSchema(),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for this specific request"),
    headers: exports_external.record(exports_external.string(), exports_external.string()).optional().describe('Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax (e.g., "Authorization": "Bearer $MY_TOKEN"). Only variables listed in allowedEnvVars will be interpolated.'),
    allowedEnvVars: exports_external.array(exports_external.string()).optional().describe("Explicit list of environment variable names that may be interpolated in header values. Only variables listed here will be resolved; all other $VAR references are left as empty strings. Required for env var interpolation to work."),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution")
  });
  const AgentHookSchema = exports_external.object({
    type: exports_external.literal("agent").describe("Agentic verifier hook type"),
    prompt: exports_external.string().describe('Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.'),
    if: IfConditionSchema(),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for agent execution (default 60)"),
    model: exports_external.string().optional().describe('Model to use for this agent hook (e.g., "claude-sonnet-4-6"). If not specified, uses Haiku.'),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution")
  });
  return {
    BashCommandHookSchema,
    PromptHookSchema,
    HttpHookSchema,
    AgentHookSchema
  };
}
var IfConditionSchema, HookCommandSchema, HookMatcherSchema, HooksSchema;
var init_hooks = __esm(() => {
  init_agentSdkTypes();
  init_v4();
  init_lazySchema();
  init_shellProvider();
  IfConditionSchema = lazySchema(() => exports_external.string().optional().describe('Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). ' + "Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands."));
  HookCommandSchema = lazySchema(() => {
    const {
      BashCommandHookSchema,
      PromptHookSchema,
      AgentHookSchema,
      HttpHookSchema
    } = buildHookSchemas();
    return exports_external.discriminatedUnion("type", [
      BashCommandHookSchema,
      PromptHookSchema,
      AgentHookSchema,
      HttpHookSchema
    ]);
  });
  HookMatcherSchema = lazySchema(() => exports_external.object({
    matcher: exports_external.string().optional().describe('String pattern to match (e.g. tool names like "Write")'),
    hooks: exports_external.array(HookCommandSchema()).describe("List of hooks to execute when the matcher matches")
  }));
  HooksSchema = lazySchema(() => exports_external.partialRecord(exports_external.enum(HOOK_EVENTS), exports_external.array(HookMatcherSchema())));
});

// src/utils/plugins/schemas.ts
function isMarketplaceAutoUpdate(marketplaceName, entry) {
  const normalizedName = marketplaceName.toLowerCase();
  return entry.autoUpdate ?? (ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(normalizedName) && !NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES.has(normalizedName));
}
function isBlockedOfficialName(name) {
  if (ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(name.toLowerCase())) {
    return false;
  }
  if (NON_ASCII_PATTERN.test(name)) {
    return true;
  }
  return BLOCKED_OFFICIAL_NAME_PATTERN.test(name);
}
function validateOfficialNameSource(name, source) {
  const normalizedName = name.toLowerCase();
  if (!ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(normalizedName)) {
    return null;
  }
  if (source.source === "github") {
    const repo = source.repo || "";
    if (!repo.toLowerCase().startsWith(`${OFFICIAL_GITHUB_ORG}/`)) {
      return `The name '${name}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${OFFICIAL_GITHUB_ORG}/' can use this name.`;
    }
    return null;
  }
  if (source.source === "git" && source.url) {
    const url = source.url.toLowerCase();
    const isHttpsAnthropics = url.includes("github.com/anthropics/");
    const isSshAnthropics = url.includes("git@github.com:anthropics/");
    if (isHttpsAnthropics || isSshAnthropics) {
      return null;
    }
    return `The name '${name}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${OFFICIAL_GITHUB_ORG}/' can use this name.`;
  }
  return `The name '${name}' is reserved for official Anthropic marketplaces and can only be used with GitHub sources from the '${OFFICIAL_GITHUB_ORG}' organization.`;
}
function isLocalPluginSource(source) {
  return typeof source === "string" && source.startsWith("./");
}
function isLocalMarketplaceSource(source) {
  return source.source === "file" || source.source === "directory";
}
var ALLOWED_OFFICIAL_MARKETPLACE_NAMES, NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES, BLOCKED_OFFICIAL_NAME_PATTERN, NON_ASCII_PATTERN, OFFICIAL_GITHUB_ORG = "anthropics", RelativePath, RelativeJSONPath, McpbPath, RelativeMarkdownPath, RelativeCommandPath, MarketplaceNameSchema, PluginAuthorSchema, PluginManifestMetadataSchema, PluginHooksSchema, PluginManifestHooksSchema, CommandMetadataSchema, PluginManifestCommandsSchema, PluginManifestAgentsSchema, PluginManifestSkillsSchema, PluginManifestOutputStylesSchema, nonEmptyString, fileExtension, PluginManifestMcpServerSchema, PluginUserConfigOptionSchema, PluginManifestUserConfigSchema, PluginManifestChannelsSchema, LspServerConfigSchema, PluginManifestLspServerSchema, NpmPackageNameSchema, PluginManifestSettingsSchema, PluginManifestSchema, MarketplaceSourceSchema, gitSha, PluginSourceSchema, SettingsMarketplacePluginSchema, PluginMarketplaceEntrySchema, PluginMarketplaceSchema, PluginIdSchema, DEP_REF_REGEX, DependencyRefSchema, SettingsPluginEntrySchema, InstalledPluginSchema, InstalledPluginsFileSchemaV1, PluginScopeSchema, PluginInstallationEntrySchema, InstalledPluginsFileSchemaV2, InstalledPluginsFileSchema, KnownMarketplaceSchema, KnownMarketplacesFileSchema;
var init_schemas = __esm(() => {
  init_v4();
  init_hooks();
  init_types();
  init_lazySchema();
  ALLOWED_OFFICIAL_MARKETPLACE_NAMES = new Set([
    "claude-code-marketplace",
    "claude-code-plugins",
    "claude-plugins-official",
    "anthropic-marketplace",
    "anthropic-plugins",
    "agent-skills",
    "life-sciences",
    "knowledge-work-plugins"
  ]);
  NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES = new Set(["knowledge-work-plugins"]);
  BLOCKED_OFFICIAL_NAME_PATTERN = /(?:official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official|^(?:anthropic|claude)[^a-z0-9]*(marketplace|plugins|official))/i;
  NON_ASCII_PATTERN = /[^\u0020-\u007E]/;
  RelativePath = lazySchema(() => exports_external.string().startsWith("./"));
  RelativeJSONPath = lazySchema(() => RelativePath().endsWith(".json"));
  McpbPath = lazySchema(() => exports_external.union([
    RelativePath().refine((path2) => path2.endsWith(".mcpb") || path2.endsWith(".dxt"), {
      message: "MCPB file path must end with .mcpb or .dxt"
    }).describe("Path to MCPB file relative to plugin root"),
    exports_external.string().url().refine((url) => url.endsWith(".mcpb") || url.endsWith(".dxt"), {
      message: "MCPB URL must end with .mcpb or .dxt"
    }).describe("URL to MCPB file")
  ]));
  RelativeMarkdownPath = lazySchema(() => RelativePath().endsWith(".md"));
  RelativeCommandPath = lazySchema(() => exports_external.union([
    RelativeMarkdownPath(),
    RelativePath()
  ]));
  MarketplaceNameSchema = lazySchema(() => exports_external.string().min(1, "Marketplace must have a name").refine((name) => !name.includes(" "), {
    message: 'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")'
  }).refine((name) => !name.includes("/") && !name.includes("\\") && !name.includes("..") && name !== ".", {
    message: 'Marketplace name cannot contain path separators (/ or \\), ".." sequences, or be "."'
  }).refine((name) => !isBlockedOfficialName(name), {
    message: "Marketplace name impersonates an official Anthropic/Claude marketplace"
  }).refine((name) => name.toLowerCase() !== "inline", {
    message: 'Marketplace name "inline" is reserved for --plugin-dir session plugins'
  }).refine((name) => name.toLowerCase() !== "builtin", {
    message: 'Marketplace name "builtin" is reserved for built-in plugins'
  }));
  PluginAuthorSchema = lazySchema(() => exports_external.object({
    name: exports_external.string().min(1, "Author name cannot be empty").describe("Display name of the plugin author or organization"),
    email: exports_external.string().optional().describe("Contact email for support or feedback"),
    url: exports_external.string().optional().describe("Website, GitHub profile, or organization URL")
  }));
  PluginManifestMetadataSchema = lazySchema(() => exports_external.object({
    name: exports_external.string().min(1, "Plugin name cannot be empty").refine((name) => !name.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Unique identifier for the plugin, used for namespacing (prefer kebab-case)"),
    version: exports_external.string().optional().describe("Semantic version (e.g., 1.2.3) following semver.org specification"),
    description: exports_external.string().optional().describe("Brief, user-facing explanation of what the plugin provides"),
    author: PluginAuthorSchema().optional().describe("Information about the plugin creator or maintainer"),
    homepage: exports_external.string().url().optional().describe("Plugin homepage or documentation URL"),
    repository: exports_external.string().optional().describe("Source code repository URL"),
    license: exports_external.string().optional().describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
    keywords: exports_external.array(exports_external.string()).optional().describe("Tags for plugin discovery and categorization"),
    dependencies: exports_external.array(DependencyRefSchema()).optional().describe(`Plugins that must be enabled for this plugin to function. Bare names (no "@marketplace") are resolved against the declaring plugin's own marketplace.`)
  }));
  PluginHooksSchema = lazySchema(() => exports_external.object({
    description: exports_external.string().optional().describe("Brief, user-facing explanation of what these hooks provide"),
    hooks: exports_external.lazy(() => HooksSchema()).describe("The hooks provided by the plugin, in the same format as the one used for settings")
  }));
  PluginManifestHooksSchema = lazySchema(() => exports_external.object({
    hooks: exports_external.union([
      RelativeJSONPath().describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"),
      exports_external.lazy(() => HooksSchema()).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)"),
      exports_external.array(exports_external.union([
        RelativeJSONPath().describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"),
        exports_external.lazy(() => HooksSchema()).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)")
      ]))
    ])
  }));
  CommandMetadataSchema = lazySchema(() => exports_external.object({
    source: RelativeCommandPath().optional().describe("Path to command markdown file, relative to plugin root"),
    content: exports_external.string().optional().describe("Inline markdown content for the command"),
    description: exports_external.string().optional().describe("Command description override"),
    argumentHint: exports_external.string().optional().describe('Hint for command arguments (e.g., "[file]")'),
    model: exports_external.string().optional().describe("Default model for this command"),
    allowedTools: exports_external.array(exports_external.string()).optional().describe("Tools allowed when command runs")
  }).refine((data) => data.source && !data.content || !data.source && data.content, {
    message: 'Command must have either "source" (file path) or "content" (inline markdown), but not both'
  }));
  PluginManifestCommandsSchema = lazySchema(() => exports_external.object({
    commands: exports_external.union([
      RelativeCommandPath().describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativeCommandPath().describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional command files or skill directories"),
      exports_external.record(exports_external.string(), CommandMetadataSchema()).describe('Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" \u2192 "/plugin:about")')
    ])
  }));
  PluginManifestAgentsSchema = lazySchema(() => exports_external.object({
    agents: exports_external.union([
      RelativeMarkdownPath().describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativeMarkdownPath().describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional agent files")
    ])
  }));
  PluginManifestSkillsSchema = lazySchema(() => exports_external.object({
    skills: exports_external.union([
      RelativePath().describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativePath().describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional skill directories")
    ])
  }));
  PluginManifestOutputStylesSchema = lazySchema(() => exports_external.object({
    outputStyles: exports_external.union([
      RelativePath().describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativePath().describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional output styles directories or files")
    ])
  }));
  nonEmptyString = lazySchema(() => exports_external.string().min(1));
  fileExtension = lazySchema(() => exports_external.string().min(2).refine((ext) => ext.startsWith("."), {
    message: 'File extensions must start with dot (e.g., ".ts", not "ts")'
  }));
  PluginManifestMcpServerSchema = lazySchema(() => exports_external.object({
    mcpServers: exports_external.union([
      RelativeJSONPath().describe("MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)"),
      McpbPath().describe("Path or URL to MCPB file containing MCP server configuration"),
      exports_external.record(exports_external.string(), McpServerConfigSchema()).describe("MCP server configurations keyed by server name"),
      exports_external.array(exports_external.union([
        RelativeJSONPath().describe("Path to MCP servers configuration file"),
        McpbPath().describe("Path or URL to MCPB file"),
        exports_external.record(exports_external.string(), McpServerConfigSchema()).describe("Inline MCP server configurations")
      ])).describe("Array of MCP server configurations (paths, MCPB files, or inline definitions)")
    ])
  }));
  PluginUserConfigOptionSchema = lazySchema(() => exports_external.object({
    type: exports_external.enum(["string", "number", "boolean", "directory", "file"]).describe("Type of the configuration value"),
    title: exports_external.string().describe("Human-readable label shown in the config dialog"),
    description: exports_external.string().describe("Help text shown beneath the field in the config dialog"),
    required: exports_external.boolean().optional().describe("If true, validation fails when this field is empty"),
    default: exports_external.union([exports_external.string(), exports_external.number(), exports_external.boolean(), exports_external.array(exports_external.string())]).optional().describe("Default value used when the user provides nothing"),
    multiple: exports_external.boolean().optional().describe("For string type: allow an array of strings"),
    sensitive: exports_external.boolean().optional().describe("If true, masks dialog input and stores value in secure storage (keychain/credentials file) instead of settings.json"),
    min: exports_external.number().optional().describe("Minimum value (number type only)"),
    max: exports_external.number().optional().describe("Maximum value (number type only)")
  }).strict());
  PluginManifestUserConfigSchema = lazySchema(() => exports_external.object({
    userConfig: exports_external.record(exports_external.string().regex(/^[A-Za-z_]\w*$/, "Option keys must be valid identifiers (letters, digits, underscore; no leading digit) \u2014 they become CLAUDE_PLUGIN_OPTION_<KEY> env vars in hooks"), PluginUserConfigOptionSchema()).optional().describe("User-configurable values this plugin needs. Prompted at enable time. " + "Non-sensitive values saved to settings.json; sensitive values to secure storage " + "(macOS keychain or .credentials.json). Available as ${user_config.KEY} in " + "MCP/LSP server config, hook commands, and (non-sensitive only) skill/agent content. " + "Note: sensitive values share a single keychain entry with OAuth tokens \u2014 keep " + "secret counts small to stay under the ~2KB stdin-safe limit (see INC-3028).")
  }));
  PluginManifestChannelsSchema = lazySchema(() => exports_external.object({
    channels: exports_external.array(exports_external.object({
      server: exports_external.string().min(1).describe("Name of the MCP server this channel binds to. Must match a key in this plugin's mcpServers."),
      displayName: exports_external.string().optional().describe('Human-readable name shown in the config dialog title (e.g., "Telegram"). Defaults to the server name.'),
      userConfig: exports_external.record(exports_external.string(), PluginUserConfigOptionSchema()).optional().describe("Fields to prompt the user for when enabling this plugin in assistant mode. " + "Saved values are substituted into ${user_config.KEY} references in the mcpServers env.")
    }).strict()).describe("Channels this plugin provides. Each entry declares an MCP server as a message channel " + "and optionally specifies user configuration to prompt for at enable time.")
  }));
  LspServerConfigSchema = lazySchema(() => exports_external.strictObject({
    command: exports_external.string().min(1).refine((cmd) => {
      if (cmd.includes(" ") && !cmd.startsWith("/")) {
        return false;
      }
      return true;
    }, {
      message: "Command should not contain spaces. Use args array for arguments."
    }).describe('Command to execute the LSP server (e.g., "typescript-language-server")'),
    args: exports_external.array(nonEmptyString()).optional().describe("Command-line arguments to pass to the server"),
    extensionToLanguage: exports_external.record(fileExtension(), nonEmptyString()).refine((record) => Object.keys(record).length > 0, {
      message: "extensionToLanguage must have at least one mapping"
    }).describe("Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping."),
    transport: exports_external.enum(["stdio", "socket"]).default("stdio").describe("Communication transport mechanism"),
    env: exports_external.record(exports_external.string(), exports_external.string()).optional().describe("Environment variables to set when starting the server"),
    initializationOptions: exports_external.unknown().optional().describe("Initialization options passed to the server during initialization"),
    settings: exports_external.unknown().optional().describe("Settings passed to the server via workspace/didChangeConfiguration"),
    workspaceFolder: exports_external.string().optional().describe("Workspace folder path to use for the server"),
    startupTimeout: exports_external.number().int().positive().optional().describe("Maximum time to wait for server startup (milliseconds)"),
    shutdownTimeout: exports_external.number().int().positive().optional().describe("Maximum time to wait for graceful shutdown (milliseconds)"),
    restartOnCrash: exports_external.boolean().optional().describe("Whether to restart the server if it crashes"),
    maxRestarts: exports_external.number().int().nonnegative().optional().describe("Maximum number of restart attempts before giving up")
  }));
  PluginManifestLspServerSchema = lazySchema(() => exports_external.object({
    lspServers: exports_external.union([
      RelativeJSONPath().describe("Path to .lsp.json configuration file relative to plugin root"),
      exports_external.record(exports_external.string(), LspServerConfigSchema()).describe("LSP server configurations keyed by server name"),
      exports_external.array(exports_external.union([
        RelativeJSONPath().describe("Path to LSP configuration file"),
        exports_external.record(exports_external.string(), LspServerConfigSchema()).describe("Inline LSP server configurations")
      ])).describe("Array of LSP server configurations (paths or inline definitions)")
    ])
  }));
  NpmPackageNameSchema = lazySchema(() => exports_external.string().refine((name) => !name.includes("..") && !name.includes("//"), "Package name cannot contain path traversal patterns").refine((name) => {
    const scopedPackageRegex = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/;
    const regularPackageRegex = /^[a-z0-9][a-z0-9-._]*$/;
    return scopedPackageRegex.test(name) || regularPackageRegex.test(name);
  }, "Invalid npm package name format"));
  PluginManifestSettingsSchema = lazySchema(() => exports_external.object({
    settings: exports_external.record(exports_external.string(), exports_external.unknown()).optional().describe("Settings to merge when plugin is enabled. " + "Only allowlisted keys are kept (currently: agent)")
  }));
  PluginManifestSchema = lazySchema(() => exports_external.object({
    ...PluginManifestMetadataSchema().shape,
    ...PluginManifestHooksSchema().partial().shape,
    ...PluginManifestCommandsSchema().partial().shape,
    ...PluginManifestAgentsSchema().partial().shape,
    ...PluginManifestSkillsSchema().partial().shape,
    ...PluginManifestOutputStylesSchema().partial().shape,
    ...PluginManifestChannelsSchema().partial().shape,
    ...PluginManifestMcpServerSchema().partial().shape,
    ...PluginManifestLspServerSchema().partial().shape,
    ...PluginManifestSettingsSchema().partial().shape,
    ...PluginManifestUserConfigSchema().partial().shape
  }));
  MarketplaceSourceSchema = lazySchema(() => exports_external.discriminatedUnion("source", [
    exports_external.object({
      source: exports_external.literal("url"),
      url: exports_external.string().url().describe("Direct URL to marketplace.json file"),
      headers: exports_external.record(exports_external.string(), exports_external.string()).optional().describe("Custom HTTP headers (e.g., for authentication)")
    }),
    exports_external.object({
      source: exports_external.literal("github"),
      repo: exports_external.string().describe("GitHub repository in owner/repo format"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      path: exports_external.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"),
      sparsePaths: exports_external.array(exports_external.string()).optional().describe("Directories to include via git sparse-checkout (cone mode). " + "Use for monorepos where the marketplace lives in a subdirectory. " + 'Example: [".claude-plugin", "plugins"]. ' + "If omitted, the full repository is cloned.")
    }),
    exports_external.object({
      source: exports_external.literal("git"),
      url: exports_external.string().describe("Full git repository URL"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      path: exports_external.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"),
      sparsePaths: exports_external.array(exports_external.string()).optional().describe("Directories to include via git sparse-checkout (cone mode). " + "Use for monorepos where the marketplace lives in a subdirectory. " + 'Example: [".claude-plugin", "plugins"]. ' + "If omitted, the full repository is cloned.")
    }),
    exports_external.object({
      source: exports_external.literal("npm"),
      package: NpmPackageNameSchema().describe("NPM package containing marketplace.json")
    }),
    exports_external.object({
      source: exports_external.literal("file"),
      path: exports_external.string().describe("Local file path to marketplace.json")
    }),
    exports_external.object({
      source: exports_external.literal("directory"),
      path: exports_external.string().describe("Local directory containing .claude-plugin/marketplace.json")
    }),
    exports_external.object({
      source: exports_external.literal("hostPattern"),
      hostPattern: exports_external.string().describe("Regex pattern to match the host/domain extracted from any marketplace source type. " + 'For github sources, matches against "github.com". For git sources (SSH or HTTPS), ' + "extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all " + 'marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").')
    }),
    exports_external.object({
      source: exports_external.literal("pathPattern"),
      pathPattern: exports_external.string().describe("Regex pattern matched against the .path field of file and directory sources. " + "Use in strictKnownMarketplaces to allow filesystem-based marketplaces alongside " + 'hostPattern restrictions for network sources. Use ".*" to allow all filesystem ' + 'paths, or a narrower pattern (e.g., "^/opt/approved/") to restrict to specific ' + "directories.")
    }),
    exports_external.object({
      source: exports_external.literal("settings"),
      name: MarketplaceNameSchema().refine((name) => !ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(name.toLowerCase()), {
        message: "Reserved official marketplace names cannot be used with settings sources. " + "validateOfficialNameSource only accepts github/git sources from anthropics/* " + "for these names; a settings source would be rejected after " + "loadAndCacheMarketplace has already written to disk with cleanupNeeded=false."
      }).describe("Marketplace name. Must match the extraKnownMarketplaces key (enforced); " + "the synthetic manifest is written under this name. Same validation " + "as PluginMarketplaceSchema plus reserved-name rejection \u2014 " + "validateOfficialNameSource runs after the disk write, too late to clean up."),
      plugins: exports_external.array(SettingsMarketplacePluginSchema()).describe("Plugin entries declared inline in settings.json"),
      owner: PluginAuthorSchema().optional()
    }).describe("Inline marketplace manifest defined directly in settings.json. " + "The reconciler writes a synthetic marketplace.json to the cache; " + "diffMarketplaces detects edits via isEqual on the stored source " + "(the plugins array is inside this object, so edits surface as sourceChanged).")
  ]));
  gitSha = lazySchema(() => exports_external.string().length(40).regex(/^[a-f0-9]{40}$/, "Must be a full 40-character lowercase git commit SHA"));
  PluginSourceSchema = lazySchema(() => exports_external.union([
    RelativePath().describe("Path to the plugin root, relative to the marketplace root (the directory containing .claude-plugin/, not .claude-plugin/ itself)"),
    exports_external.object({
      source: exports_external.literal("npm"),
      package: NpmPackageNameSchema().or(exports_external.string()).describe("Package name (or url, or local path, or anything else that can be passed to `npm` as a package)"),
      version: exports_external.string().optional().describe("Specific version or version range (e.g., ^1.0.0, ~2.1.0)"),
      registry: exports_external.string().url().optional().describe("Custom NPM registry URL (defaults to using system default, likely npmjs.org)")
    }).describe("NPM package as plugin source"),
    exports_external.object({
      source: exports_external.literal("pip"),
      package: exports_external.string().describe("Python package name as it appears on PyPI"),
      version: exports_external.string().optional().describe("Version specifier (e.g., ==1.0.0, >=2.0.0, <3.0.0)"),
      registry: exports_external.string().url().optional().describe("Custom PyPI registry URL (defaults to using system default, likely pypi.org)")
    }).describe("Python package as plugin source"),
    exports_external.object({
      source: exports_external.literal("url"),
      url: exports_external.string().describe("Full git repository URL (https:// or git@)"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      sha: gitSha().optional().describe("Specific commit SHA to use")
    }),
    exports_external.object({
      source: exports_external.literal("github"),
      repo: exports_external.string().describe("GitHub repository in owner/repo format"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      sha: gitSha().optional().describe("Specific commit SHA to use")
    }),
    exports_external.object({
      source: exports_external.literal("git-subdir"),
      url: exports_external.string().describe("Git repository: GitHub owner/repo shorthand, https://, or git@ URL"),
      path: exports_external.string().min(1).describe('Subdirectory within the repo containing the plugin (e.g., "tools/claude-plugin"). ' + "Cloned sparsely using partial clone (--filter=tree:0) to minimize bandwidth for monorepos."),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      sha: gitSha().optional().describe("Specific commit SHA to use")
    }).describe("Plugin located in a subdirectory of a larger repository (monorepo). " + "Only the specified subdirectory is materialized; the rest of the repo is not downloaded.")
  ]));
  SettingsMarketplacePluginSchema = lazySchema(() => exports_external.object({
    name: exports_external.string().min(1, "Plugin name cannot be empty").refine((name) => !name.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Plugin name as it appears in the target repository"),
    source: PluginSourceSchema().describe("Where to fetch the plugin from. Must be a remote source \u2014 relative " + "paths have no marketplace repository to resolve against."),
    description: exports_external.string().optional(),
    version: exports_external.string().optional(),
    strict: exports_external.boolean().optional()
  }).refine((p) => typeof p.source !== "string", {
    message: "Plugins in a settings-sourced marketplace must use remote sources " + '(github, git-subdir, npm, url, pip). Relative-path sources like "./foo" ' + "have no marketplace repository to resolve against."
  }));
  PluginMarketplaceEntrySchema = lazySchema(() => PluginManifestSchema().partial().extend({
    name: exports_external.string().min(1, "Plugin name cannot be empty").refine((name) => !name.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Unique identifier matching the plugin name"),
    source: PluginSourceSchema().describe("Where to fetch the plugin from"),
    category: exports_external.string().optional().describe('Category for organizing plugins (e.g., "productivity", "development")'),
    tags: exports_external.array(exports_external.string()).optional().describe("Tags for searchability and discovery"),
    strict: exports_external.boolean().optional().default(true).describe("Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.")
  }));
  PluginMarketplaceSchema = lazySchema(() => exports_external.object({
    name: MarketplaceNameSchema(),
    owner: PluginAuthorSchema().describe("Marketplace maintainer or curator information"),
    plugins: exports_external.array(PluginMarketplaceEntrySchema()).describe("Collection of available plugins in this marketplace"),
    forceRemoveDeletedPlugins: exports_external.boolean().optional().describe("When true, plugins removed from this marketplace will be automatically uninstalled and flagged for users"),
    metadata: exports_external.object({
      pluginRoot: exports_external.string().optional().describe("Base path for relative plugin sources"),
      version: exports_external.string().optional().describe("Marketplace version"),
      description: exports_external.string().optional().describe("Marketplace description")
    }).optional().describe("Optional marketplace metadata"),
    allowCrossMarketplaceDependenciesOn: exports_external.array(exports_external.string()).optional().describe("Marketplace names whose plugins may be auto-installed as dependencies. Only the root marketplace's allowlist applies \u2014 no transitive trust.")
  }));
  PluginIdSchema = lazySchema(() => exports_external.string().regex(/^[a-z0-9][-a-z0-9._]*@[a-z0-9][-a-z0-9._]*$/i, "Plugin ID must be in format: plugin@marketplace"));
  DEP_REF_REGEX = /^[a-z0-9][-a-z0-9._]*(@[a-z0-9][-a-z0-9._]*)?(@\^[^@]*)?$/i;
  DependencyRefSchema = lazySchema(() => exports_external.union([
    exports_external.string().regex(DEP_REF_REGEX, "Dependency must be a plugin name, optionally qualified with @marketplace").transform((s) => s.replace(/@\^[^@]*$/, "")),
    exports_external.object({
      name: exports_external.string().min(1).regex(/^[a-z0-9][-a-z0-9._]*$/i),
      marketplace: exports_external.string().min(1).regex(/^[a-z0-9][-a-z0-9._]*$/i).optional()
    }).loose().transform((o) => o.marketplace ? `${o.name}@${o.marketplace}` : o.name)
  ]));
  SettingsPluginEntrySchema = lazySchema(() => exports_external.union([
    PluginIdSchema(),
    exports_external.object({
      id: PluginIdSchema().describe('Plugin identifier (e.g., "formatter@tools")'),
      version: exports_external.string().optional().describe('Version constraint (e.g., "^2.0.0")'),
      required: exports_external.boolean().optional().describe("If true, cannot be disabled"),
      config: exports_external.record(exports_external.string(), exports_external.unknown()).optional().describe("Plugin-specific configuration")
    })
  ]));
  InstalledPluginSchema = lazySchema(() => exports_external.object({
    version: exports_external.string().describe("Currently installed version"),
    installedAt: exports_external.string().describe("ISO 8601 timestamp of installation"),
    lastUpdated: exports_external.string().optional().describe("ISO 8601 timestamp of last update"),
    installPath: exports_external.string().describe("Absolute path to the installed plugin directory"),
    gitCommitSha: exports_external.string().optional().describe("Git commit SHA for git-based plugins (for version tracking)")
  }));
  InstalledPluginsFileSchemaV1 = lazySchema(() => exports_external.object({
    version: exports_external.literal(1).describe("Schema version 1"),
    plugins: exports_external.record(PluginIdSchema(), InstalledPluginSchema()).describe("Map of plugin IDs to their installation metadata")
  }));
  PluginScopeSchema = lazySchema(() => exports_external.enum(["managed", "user", "project", "local"]));
  PluginInstallationEntrySchema = lazySchema(() => exports_external.object({
    scope: PluginScopeSchema().describe("Installation scope"),
    projectPath: exports_external.string().optional().describe("Project path (required for project/local scopes)"),
    installPath: exports_external.string().describe("Absolute path to the versioned plugin directory"),
    version: exports_external.string().optional().describe("Currently installed version"),
    installedAt: exports_external.string().optional().describe("ISO 8601 timestamp of installation"),
    lastUpdated: exports_external.string().optional().describe("ISO 8601 timestamp of last update"),
    gitCommitSha: exports_external.string().optional().describe("Git commit SHA for git-based plugins")
  }));
  InstalledPluginsFileSchemaV2 = lazySchema(() => exports_external.object({
    version: exports_external.literal(2).describe("Schema version 2"),
    plugins: exports_external.record(PluginIdSchema(), exports_external.array(PluginInstallationEntrySchema())).describe("Map of plugin IDs to arrays of installation entries")
  }));
  InstalledPluginsFileSchema = lazySchema(() => exports_external.union([InstalledPluginsFileSchemaV1(), InstalledPluginsFileSchemaV2()]));
  KnownMarketplaceSchema = lazySchema(() => exports_external.object({
    source: MarketplaceSourceSchema().describe("Where to fetch the marketplace from"),
    installLocation: exports_external.string().describe("Local cache path where marketplace manifest is stored"),
    lastUpdated: exports_external.string().describe("ISO 8601 timestamp of last marketplace refresh"),
    autoUpdate: exports_external.boolean().optional().describe("Whether to automatically update this marketplace and its installed plugins on startup")
  }));
  KnownMarketplacesFileSchema = lazySchema(() => exports_external.record(exports_external.string(), KnownMarketplaceSchema()));
});

// src/services/mcp/mcpStringUtils.ts
function mcpInfoFromString(toolString) {
  const parts = toolString.split("__");
  const [mcpPart, serverName, ...toolNameParts] = parts;
  if (mcpPart !== "mcp" || !serverName) {
    return null;
  }
  const toolName = toolNameParts.length > 0 ? toolNameParts.join("__") : undefined;
  return { serverName, toolName };
}
function getMcpPrefix(serverName) {
  return `mcp__${normalizeNameForMCP(serverName)}__`;
}
function buildMcpToolName(serverName, toolName) {
  return `${getMcpPrefix(serverName)}${normalizeNameForMCP(toolName)}`;
}
function getToolNameForPermissionCheck(tool) {
  return tool.mcpInfo ? buildMcpToolName(tool.mcpInfo.serverName, tool.mcpInfo.toolName) : tool.name;
}
function getMcpDisplayName(fullName, serverName) {
  const prefix = `mcp__${normalizeNameForMCP(serverName)}__`;
  return fullName.replace(prefix, "");
}
function extractMcpToolDisplayName(userFacingName) {
  let withoutSuffix = userFacingName.replace(/\s*\(MCP\)\s*$/, "");
  withoutSuffix = withoutSuffix.trim();
  const dashIndex = withoutSuffix.indexOf(" - ");
  if (dashIndex !== -1) {
    const displayName = withoutSuffix.substring(dashIndex + 3).trim();
    return displayName;
  }
  return withoutSuffix;
}
var init_mcpStringUtils = __esm(() => {
  init_normalization();
});

// src/tools/AgentTool/constants.ts
var AGENT_TOOL_NAME = "Agent", LEGACY_AGENT_TOOL_NAME = "Task", VERIFICATION_AGENT_TYPE = "verification", ONE_SHOT_BUILTIN_AGENT_TYPES;
var init_constants3 = __esm(() => {
  ONE_SHOT_BUILTIN_AGENT_TYPES = new Set([
    "Explore",
    "Plan"
  ]);
});

// src/tools/TaskOutputTool/constants.ts
var TASK_OUTPUT_TOOL_NAME = "TaskOutput";
var init_constants4 = () => {};

// src/tools/TaskStopTool/prompt.ts
var TASK_STOP_TOOL_NAME = "TaskStop", DESCRIPTION = `
- Stops a running background task by its ID
- Takes a task_id parameter identifying the task to stop
- Returns a success or failure status
- Use this tool when you need to terminate a long-running task
`;
var init_prompt = () => {};

// src/utils/permissions/permissionRuleParser.ts
function normalizeLegacyToolName(name) {
  return LEGACY_TOOL_NAME_ALIASES[name] ?? name;
}
function getLegacyToolNames(canonicalName) {
  const result = [];
  for (const [legacy, canonical] of Object.entries(LEGACY_TOOL_NAME_ALIASES)) {
    if (canonical === canonicalName)
      result.push(legacy);
  }
  return result;
}
function escapeRuleContent(content) {
  return content.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}
function unescapeRuleContent(content) {
  return content.replace(/\\\(/g, "(").replace(/\\\)/g, ")").replace(/\\\\/g, "\\");
}
function permissionRuleValueFromString(ruleString) {
  const openParenIndex = findFirstUnescapedChar(ruleString, "(");
  if (openParenIndex === -1) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  const closeParenIndex = findLastUnescapedChar(ruleString, ")");
  if (closeParenIndex === -1 || closeParenIndex <= openParenIndex) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  if (closeParenIndex !== ruleString.length - 1) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  const toolName = ruleString.substring(0, openParenIndex);
  const rawContent = ruleString.substring(openParenIndex + 1, closeParenIndex);
  if (!toolName) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  if (rawContent === "" || rawContent === "*") {
    return { toolName: normalizeLegacyToolName(toolName) };
  }
  const ruleContent = unescapeRuleContent(rawContent);
  return { toolName: normalizeLegacyToolName(toolName), ruleContent };
}
function permissionRuleValueToString(ruleValue) {
  if (!ruleValue.ruleContent) {
    return ruleValue.toolName;
  }
  const escapedContent = escapeRuleContent(ruleValue.ruleContent);
  return `${ruleValue.toolName}(${escapedContent})`;
}
function findFirstUnescapedChar(str, char) {
  for (let i = 0;i < str.length; i++) {
    if (str[i] === char) {
      let backslashCount = 0;
      let j = i - 1;
      while (j >= 0 && str[j] === "\\") {
        backslashCount++;
        j--;
      }
      if (backslashCount % 2 === 0) {
        return i;
      }
    }
  }
  return -1;
}
function findLastUnescapedChar(str, char) {
  for (let i = str.length - 1;i >= 0; i--) {
    if (str[i] === char) {
      let backslashCount = 0;
      let j = i - 1;
      while (j >= 0 && str[j] === "\\") {
        backslashCount++;
        j--;
      }
      if (backslashCount % 2 === 0) {
        return i;
      }
    }
  }
  return -1;
}
var LEGACY_TOOL_NAME_ALIASES;
var init_permissionRuleParser = __esm(() => {
  init_constants3();
  init_constants4();
  init_prompt();
  LEGACY_TOOL_NAME_ALIASES = {
    Task: AGENT_TOOL_NAME,
    KillShell: TASK_STOP_TOOL_NAME,
    AgentOutputTool: TASK_OUTPUT_TOOL_NAME,
    BashOutputTool: TASK_OUTPUT_TOOL_NAME,
    ...{}
  };
});

// src/utils/settings/toolValidationConfig.ts
function isFilePatternTool(toolName) {
  return TOOL_VALIDATION_CONFIG.filePatternTools.includes(toolName);
}
function isBashPrefixTool(toolName) {
  return TOOL_VALIDATION_CONFIG.bashPrefixTools.includes(toolName);
}
function getCustomValidation(toolName) {
  return TOOL_VALIDATION_CONFIG.customValidation[toolName];
}
var TOOL_VALIDATION_CONFIG;
var init_toolValidationConfig = __esm(() => {
  TOOL_VALIDATION_CONFIG = {
    filePatternTools: [
      "Read",
      "Write",
      "Edit",
      "Glob",
      "NotebookRead",
      "NotebookEdit"
    ],
    bashPrefixTools: ["Bash"],
    customValidation: {
      WebSearch: (content) => {
        if (content.includes("*") || content.includes("?")) {
          return {
            valid: false,
            error: "WebSearch does not support wildcards",
            suggestion: "Use exact search terms without * or ?",
            examples: ["WebSearch(claude ai)", "WebSearch(typescript tutorial)"]
          };
        }
        return { valid: true };
      },
      WebFetch: (content) => {
        if (content.includes("://") || content.startsWith("http")) {
          return {
            valid: false,
            error: "WebFetch permissions use domain format, not URLs",
            suggestion: 'Use "domain:hostname" format',
            examples: [
              "WebFetch(domain:example.com)",
              "WebFetch(domain:github.com)"
            ]
          };
        }
        if (!content.startsWith("domain:")) {
          return {
            valid: false,
            error: 'WebFetch permissions must use "domain:" prefix',
            suggestion: 'Use "domain:hostname" format',
            examples: [
              "WebFetch(domain:example.com)",
              "WebFetch(domain:*.google.com)"
            ]
          };
        }
        return { valid: true };
      }
    }
  };
});

// src/utils/settings/permissionValidation.ts
function isEscaped(str, index2) {
  let backslashCount = 0;
  let j = index2 - 1;
  while (j >= 0 && str[j] === "\\") {
    backslashCount++;
    j--;
  }
  return backslashCount % 2 !== 0;
}
function countUnescapedChar(str, char) {
  let count2 = 0;
  for (let i = 0;i < str.length; i++) {
    if (str[i] === char && !isEscaped(str, i)) {
      count2++;
    }
  }
  return count2;
}
function hasUnescapedEmptyParens(str) {
  for (let i = 0;i < str.length - 1; i++) {
    if (str[i] === "(" && str[i + 1] === ")") {
      if (!isEscaped(str, i)) {
        return true;
      }
    }
  }
  return false;
}
function validatePermissionRule(rule) {
  if (!rule || rule.trim() === "") {
    return { valid: false, error: "Permission rule cannot be empty" };
  }
  const openCount = countUnescapedChar(rule, "(");
  const closeCount = countUnescapedChar(rule, ")");
  if (openCount !== closeCount) {
    return {
      valid: false,
      error: "Mismatched parentheses",
      suggestion: "Ensure all opening parentheses have matching closing parentheses"
    };
  }
  if (hasUnescapedEmptyParens(rule)) {
    const toolName = rule.substring(0, rule.indexOf("("));
    if (!toolName) {
      return {
        valid: false,
        error: "Empty parentheses with no tool name",
        suggestion: "Specify a tool name before the parentheses"
      };
    }
    return {
      valid: false,
      error: "Empty parentheses",
      suggestion: `Either specify a pattern or use just "${toolName}" without parentheses`,
      examples: [`${toolName}`, `${toolName}(some-pattern)`]
    };
  }
  const parsed = permissionRuleValueFromString(rule);
  const mcpInfo = mcpInfoFromString(parsed.toolName);
  if (mcpInfo) {
    if (parsed.ruleContent !== undefined || countUnescapedChar(rule, "(") > 0) {
      return {
        valid: false,
        error: "MCP rules do not support patterns in parentheses",
        suggestion: `Use "${parsed.toolName}" without parentheses, or use "mcp__${mcpInfo.serverName}__*" for all tools`,
        examples: [
          `mcp__${mcpInfo.serverName}`,
          `mcp__${mcpInfo.serverName}__*`,
          mcpInfo.toolName && mcpInfo.toolName !== "*" ? `mcp__${mcpInfo.serverName}__${mcpInfo.toolName}` : undefined
        ].filter(Boolean)
      };
    }
    return { valid: true };
  }
  if (!parsed.toolName || parsed.toolName.length === 0) {
    return { valid: false, error: "Tool name cannot be empty" };
  }
  if (parsed.toolName[0] !== parsed.toolName[0]?.toUpperCase()) {
    return {
      valid: false,
      error: "Tool names must start with uppercase",
      suggestion: `Use "${capitalize(String(parsed.toolName))}"`
    };
  }
  const customValidation = getCustomValidation(parsed.toolName);
  if (customValidation && parsed.ruleContent !== undefined) {
    const customResult = customValidation(parsed.ruleContent);
    if (!customResult.valid) {
      return customResult;
    }
  }
  if (isBashPrefixTool(parsed.toolName) && parsed.ruleContent !== undefined) {
    const content = parsed.ruleContent;
    if (content.includes(":*") && !content.endsWith(":*")) {
      return {
        valid: false,
        error: "The :* pattern must be at the end",
        suggestion: "Move :* to the end for prefix matching, or use * for wildcard matching",
        examples: [
          "Bash(npm run:*) - prefix matching (legacy)",
          "Bash(npm run *) - wildcard matching"
        ]
      };
    }
    if (content === ":*") {
      return {
        valid: false,
        error: "Prefix cannot be empty before :*",
        suggestion: "Specify a command prefix before :*",
        examples: ["Bash(npm:*)", "Bash(git:*)"]
      };
    }
  }
  if (isFilePatternTool(parsed.toolName) && parsed.ruleContent !== undefined) {
    const content = parsed.ruleContent;
    if (content.includes(":*")) {
      return {
        valid: false,
        error: 'The ":*" syntax is only for Bash prefix rules',
        suggestion: 'Use glob patterns like "*" or "**" for file matching',
        examples: [
          `${parsed.toolName}(*.ts) - matches .ts files`,
          `${parsed.toolName}(src/**) - matches all files in src`,
          `${parsed.toolName}(**/*.test.ts) - matches test files`
        ]
      };
    }
    if (content.includes("*") && !content.match(/^\*|\*$|\*\*|\/\*|\*\.|\*\)/) && !content.includes("**")) {
      return {
        valid: false,
        error: "Wildcard placement might be incorrect",
        suggestion: "Wildcards are typically used at path boundaries",
        examples: [
          `${parsed.toolName}(*.js) - all .js files`,
          `${parsed.toolName}(src/*) - all files directly in src`,
          `${parsed.toolName}(src/**) - all files recursively in src`
        ]
      };
    }
  }
  return { valid: true };
}
var PermissionRuleSchema;
var init_permissionValidation = __esm(() => {
  init_v4();
  init_mcpStringUtils();
  init_lazySchema();
  init_permissionRuleParser();
  init_stringUtils();
  init_toolValidationConfig();
  PermissionRuleSchema = lazySchema(() => exports_external.string().superRefine((val, ctx) => {
    const result = validatePermissionRule(val);
    if (!result.valid) {
      let message = result.error;
      if (result.suggestion) {
        message += `. ${result.suggestion}`;
      }
      if (result.examples && result.examples.length > 0) {
        message += `. Examples: ${result.examples.join(", ")}`;
      }
      ctx.addIssue({
        code: exports_external.ZodIssueCode.custom,
        message,
        params: { received: val }
      });
    }
  }));
});

// src/utils/settings/types.ts
function isMcpServerNameEntry(entry) {
  return "serverName" in entry && entry.serverName !== undefined;
}
function isMcpServerCommandEntry(entry) {
  return "serverCommand" in entry && entry.serverCommand !== undefined;
}
function isMcpServerUrlEntry(entry) {
  return "serverUrl" in entry && entry.serverUrl !== undefined;
}
var EnvironmentVariablesSchema, PermissionsSchema, ExtraKnownMarketplaceSchema, AllowedMcpServerEntrySchema, DeniedMcpServerEntrySchema, CUSTOMIZATION_SURFACES, SettingsSchema;
var init_types2 = __esm(() => {
  init_v4();
  init_sandboxTypes();
  init_envUtils();
  init_lazySchema();
  init_PermissionMode();
  init_schemas();
  init_constants2();
  init_permissionValidation();
  init_hooks();
  init_hooks();
  init_array();
  EnvironmentVariablesSchema = lazySchema(() => exports_external.record(exports_external.string(), exports_external.coerce.string()));
  PermissionsSchema = lazySchema(() => exports_external.object({
    allow: exports_external.array(PermissionRuleSchema()).optional().describe("List of permission rules for allowed operations"),
    deny: exports_external.array(PermissionRuleSchema()).optional().describe("List of permission rules for denied operations"),
    ask: exports_external.array(PermissionRuleSchema()).optional().describe("List of permission rules that should always prompt for confirmation"),
    defaultMode: exports_external.enum(EXTERNAL_PERMISSION_MODES).optional().describe("Default permission mode when Claude Code needs access"),
    disableBypassPermissionsMode: exports_external.enum(["disable"]).optional().describe("Disable the ability to bypass permission prompts"),
    ...{},
    additionalDirectories: exports_external.array(exports_external.string()).optional().describe("Additional directories to include in the permission scope")
  }).passthrough());
  ExtraKnownMarketplaceSchema = lazySchema(() => exports_external.object({
    source: MarketplaceSourceSchema().describe("Where to fetch the marketplace from"),
    installLocation: exports_external.string().optional().describe("Local cache path where marketplace manifest is stored (auto-generated if not provided)"),
    autoUpdate: exports_external.boolean().optional().describe("Whether to automatically update this marketplace and its installed plugins on startup")
  }));
  AllowedMcpServerEntrySchema = lazySchema(() => exports_external.object({
    serverName: exports_external.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that users are allowed to configure"),
    serverCommand: exports_external.array(exports_external.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for allowed stdio servers"),
    serverUrl: exports_external.string().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for allowed remote MCP servers')
  }).refine((data) => {
    const defined = count([
      data.serverName !== undefined,
      data.serverCommand !== undefined,
      data.serverUrl !== undefined
    ], Boolean);
    return defined === 1;
  }, {
    message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
  }));
  DeniedMcpServerEntrySchema = lazySchema(() => exports_external.object({
    serverName: exports_external.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that is explicitly blocked"),
    serverCommand: exports_external.array(exports_external.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for blocked stdio servers"),
    serverUrl: exports_external.string().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for blocked remote MCP servers')
  }).refine((data) => {
    const defined = count([
      data.serverName !== undefined,
      data.serverCommand !== undefined,
      data.serverUrl !== undefined
    ], Boolean);
    return defined === 1;
  }, {
    message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
  }));
  CUSTOMIZATION_SURFACES = [
    "skills",
    "agents",
    "hooks",
    "mcp"
  ];
  SettingsSchema = lazySchema(() => exports_external.object({
    $schema: exports_external.literal(CLAUDE_CODE_SETTINGS_SCHEMA_URL).optional().describe("JSON Schema reference for Claude Code settings"),
    apiKeyHelper: exports_external.string().optional().describe("Path to a script that outputs authentication values"),
    awsCredentialExport: exports_external.string().optional().describe("Path to a script that exports AWS credentials"),
    awsAuthRefresh: exports_external.string().optional().describe("Path to a script that refreshes AWS authentication"),
    gcpAuthRefresh: exports_external.string().optional().describe("Command to refresh GCP authentication (e.g., gcloud auth application-default login)"),
    ...isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_XAA) ? {
      xaaIdp: exports_external.object({
        issuer: exports_external.string().url().describe("IdP issuer URL for OIDC discovery"),
        clientId: exports_external.string().describe("Claude Code's client_id registered at the IdP"),
        callbackPort: exports_external.number().int().positive().optional().describe("Fixed loopback callback port for the IdP OIDC login. " + "Only needed if the IdP does not honor RFC 8252 port-any matching.")
      }).optional().describe("XAA (SEP-990) IdP connection. Configure once; all XAA-enabled MCP servers reuse this.")
    } : {},
    fileSuggestion: exports_external.object({
      type: exports_external.literal("command"),
      command: exports_external.string()
    }).optional().describe("Custom file suggestion configuration for @ mentions"),
    respectGitignore: exports_external.boolean().optional().describe("Whether file picker should respect .gitignore files (default: true). " + "Note: .ignore files are always respected."),
    cleanupPeriodDays: exports_external.number().nonnegative().int().optional().describe("Number of days to retain chat transcripts (default: 30). Setting to 0 disables session persistence entirely: no transcripts are written and existing transcripts are deleted at startup."),
    env: EnvironmentVariablesSchema().optional().describe("Environment variables to set for Claude Code sessions"),
    attribution: exports_external.object({
      commit: exports_external.string().optional().describe("Attribution text for git commits, including any trailers. " + "Empty string hides attribution."),
      pr: exports_external.string().optional().describe("Attribution text for pull request descriptions. " + "Empty string hides attribution.")
    }).optional().describe("Customize attribution text for commits and PRs. " + "Each field defaults to the standard Claude Code attribution if not set."),
    includeCoAuthoredBy: exports_external.boolean().optional().describe("Deprecated: Use attribution instead. " + "Whether to include Claude's co-authored by attribution in commits and PRs (defaults to true)"),
    includeGitInstructions: exports_external.boolean().optional().describe("Include built-in commit and PR workflow instructions in Claude's system prompt (default: true)"),
    permissions: PermissionsSchema().optional().describe("Tool usage permissions configuration"),
    model: exports_external.string().optional().describe("Override the default model used by Claude Code"),
    availableModels: exports_external.array(exports_external.string()).optional().describe("Allowlist of models that users can select. " + 'Accepts family aliases ("opus" allows any opus version), ' + 'version prefixes ("opus-4-5" allows only that version), ' + "and full model IDs. " + "If undefined, all models are available. If empty array, only the default model is available. " + "Typically set in managed settings by enterprise administrators."),
    modelOverrides: exports_external.record(exports_external.string(), exports_external.string()).optional().describe('Override mapping from Anthropic model ID (e.g. "claude-opus-4-6") to provider-specific ' + "model ID (e.g. a Bedrock inference profile ARN). Typically set in managed settings by " + "enterprise administrators."),
    enableAllProjectMcpServers: exports_external.boolean().optional().describe("Whether to automatically approve all MCP servers in the project"),
    enabledMcpjsonServers: exports_external.array(exports_external.string()).optional().describe("List of approved MCP servers from .mcp.json"),
    disabledMcpjsonServers: exports_external.array(exports_external.string()).optional().describe("List of rejected MCP servers from .mcp.json"),
    allowedMcpServers: exports_external.array(AllowedMcpServerEntrySchema()).optional().describe("Enterprise allowlist of MCP servers that can be used. " + "Applies to all scopes including enterprise servers from managed-mcp.json. " + "If undefined, all servers are allowed. If empty array, no servers are allowed. " + "Denylist takes precedence - if a server is on both lists, it is denied."),
    deniedMcpServers: exports_external.array(DeniedMcpServerEntrySchema()).optional().describe("Enterprise denylist of MCP servers that are explicitly blocked. " + "If a server is on the denylist, it will be blocked across all scopes including enterprise. " + "Denylist takes precedence over allowlist - if a server is on both lists, it is denied."),
    hooks: HooksSchema().optional().describe("Custom commands to run before/after tool executions"),
    worktree: exports_external.object({
      symlinkDirectories: exports_external.array(exports_external.string()).optional().describe("Directories to symlink from main repository to worktrees to avoid disk bloat. " + "Must be explicitly configured - no directories are symlinked by default. " + 'Common examples: "node_modules", ".cache", ".bin"'),
      sparsePaths: exports_external.array(exports_external.string()).optional().describe("Directories to include when creating worktrees, via git sparse-checkout (cone mode). " + "Dramatically faster in large monorepos \u2014 only the listed paths are written to disk.")
    }).optional().describe("Git worktree configuration for --worktree flag."),
    disableAllHooks: exports_external.boolean().optional().describe("Disable all hooks and statusLine execution"),
    defaultShell: exports_external.enum(["bash", "powershell"]).optional().describe("Default shell for input-box ! commands. " + "Defaults to 'bash' on all platforms (no Windows auto-flip)."),
    allowManagedHooksOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), only hooks from managed settings run. " + "User, project, and local hooks are ignored."),
    allowedHttpHookUrls: exports_external.array(exports_external.string()).optional().describe("Allowlist of URL patterns that HTTP hooks may target. " + 'Supports * as a wildcard (e.g. "https://hooks.example.com/*"). ' + "When set, HTTP hooks with non-matching URLs are blocked. " + "If undefined, all URLs are allowed. If empty array, no HTTP hooks are allowed. " + "Arrays merge across settings sources (same semantics as allowedMcpServers)."),
    httpHookAllowedEnvVars: exports_external.array(exports_external.string()).optional().describe("Allowlist of environment variable names HTTP hooks may interpolate into headers. " + "When set, each hook's effective allowedEnvVars is the intersection with this list. " + "If undefined, no restriction is applied. " + "Arrays merge across settings sources (same semantics as allowedMcpServers)."),
    allowManagedPermissionRulesOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), only permission rules (allow/deny/ask) from managed settings are respected. " + "User, project, local, and CLI argument permission rules are ignored."),
    allowManagedMcpServersOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), allowedMcpServers is only read from managed settings. " + "deniedMcpServers still merges from all sources, so users can deny servers for themselves. " + "Users can still add their own MCP servers, but only the admin-defined allowlist applies."),
    strictPluginOnlyCustomization: exports_external.preprocess((v) => Array.isArray(v) ? v.filter((x) => CUSTOMIZATION_SURFACES.includes(x)) : v, exports_external.union([exports_external.boolean(), exports_external.array(exports_external.enum(CUSTOMIZATION_SURFACES))])).optional().catch(undefined).describe("When set in managed settings, blocks non-plugin customization sources for the listed surfaces. " + 'Array form locks specific surfaces (e.g. ["skills", "hooks"]); `true` locks all four; `false` is an explicit no-op. ' + "Blocked: ~/.claude/{surface}/, .claude/{surface}/ (project), settings.json hooks, .mcp.json. " + "NOT blocked: managed (policySettings) sources, plugin-provided customizations. " + "Composes with strictKnownMarketplaces for end-to-end admin control \u2014 plugins gated by " + "marketplace allowlist, everything else blocked here."),
    statusLine: exports_external.object({
      type: exports_external.literal("command"),
      command: exports_external.string(),
      padding: exports_external.number().optional()
    }).optional().describe("Custom status line display configuration"),
    enabledPlugins: exports_external.record(exports_external.string(), exports_external.union([exports_external.array(exports_external.string()), exports_external.boolean(), exports_external.undefined()])).optional().describe('Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. Also supports extended format with version constraints.'),
    extraKnownMarketplaces: exports_external.record(exports_external.string(), ExtraKnownMarketplaceSchema()).check((ctx) => {
      for (const [key, entry] of Object.entries(ctx.value)) {
        if (entry.source.source === "settings" && entry.source.name !== key) {
          ctx.issues.push({
            code: "custom",
            input: entry.source.name,
            path: [key, "source", "name"],
            message: `Settings-sourced marketplace name must match its extraKnownMarketplaces key ` + `(got key "${key}" but source.name "${entry.source.name}")`
          });
        }
      }
    }).optional().describe("Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources."),
    strictKnownMarketplaces: exports_external.array(MarketplaceSourceSchema()).optional().describe("Enterprise strict list of allowed marketplace sources. When set in managed settings, " + "ONLY these exact sources can be added as marketplaces. The check happens BEFORE " + "downloading, so blocked sources never touch the filesystem. " + "Note: this is a policy gate only \u2014 it does NOT register marketplaces. " + "To pre-register allowed marketplaces for users, also set extraKnownMarketplaces."),
    blockedMarketplaces: exports_external.array(MarketplaceSourceSchema()).optional().describe("Enterprise blocklist of marketplace sources. When set in managed settings, " + "these exact sources are blocked from being added as marketplaces. The check happens BEFORE " + "downloading, so blocked sources never touch the filesystem."),
    forceLoginMethod: exports_external.enum(["claudeai", "console"]).optional().describe('Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing'),
    forceLoginOrgUUID: exports_external.string().optional().describe("Organization UUID to use for OAuth login"),
    otelHeadersHelper: exports_external.string().optional().describe("Path to a script that outputs OpenTelemetry headers"),
    outputStyle: exports_external.string().optional().describe("Controls the output style for assistant responses"),
    language: exports_external.string().optional().describe('Preferred language for Claude responses and voice dictation (e.g., "japanese", "spanish")'),
    skipWebFetchPreflight: exports_external.boolean().optional().describe("Skip the WebFetch blocklist check for enterprise environments with restrictive security policies"),
    sandbox: SandboxSettingsSchema().optional(),
    feedbackSurveyRate: exports_external.number().min(0).max(1).optional().describe("Probability (0\u20131) that the session quality survey appears when eligible. 0.05 is a reasonable starting point."),
    spinnerTipsEnabled: exports_external.boolean().optional().describe("Whether to show tips in the spinner"),
    spinnerVerbs: exports_external.object({
      mode: exports_external.enum(["append", "replace"]),
      verbs: exports_external.array(exports_external.string())
    }).optional().describe('Customize spinner verbs. mode: "append" adds verbs to defaults, "replace" uses only your verbs.'),
    spinnerTipsOverride: exports_external.object({
      excludeDefault: exports_external.boolean().optional(),
      tips: exports_external.array(exports_external.string())
    }).optional().describe("Override spinner tips. tips: array of tip strings. excludeDefault: if true, only show custom tips (default: false)."),
    syntaxHighlightingDisabled: exports_external.boolean().optional().describe("Whether to disable syntax highlighting in diffs"),
    terminalTitleFromRename: exports_external.boolean().optional().describe("Whether /rename updates the terminal tab title (defaults to true). Set to false to keep auto-generated topic titles."),
    alwaysThinkingEnabled: exports_external.boolean().optional().describe("When false, thinking is disabled. When absent or true, thinking is " + "enabled automatically for supported models."),
    effortLevel: exports_external.enum(["low", "medium", "high"]).optional().catch(undefined).describe("Persisted effort level for supported models."),
    advisorModel: exports_external.string().optional().describe("Advisor model for the server-side advisor tool."),
    fastMode: exports_external.boolean().optional().describe("When true, fast mode is enabled. When absent or false, fast mode is off."),
    fastModePerSessionOptIn: exports_external.boolean().optional().describe("When true, fast mode does not persist across sessions. Each session starts with fast mode off."),
    promptSuggestionEnabled: exports_external.boolean().optional().describe("When false, prompt suggestions are disabled. When absent or true, " + "prompt suggestions are enabled."),
    showClearContextOnPlanAccept: exports_external.boolean().optional().describe('When true, the plan-approval dialog offers a "clear context" option. Defaults to false.'),
    agent: exports_external.string().optional().describe("Name of an agent (built-in or custom) to use for the main thread. " + "Applies the agent's system prompt, tool restrictions, and model."),
    companyAnnouncements: exports_external.array(exports_external.string()).optional().describe("Company announcements to display at startup (one will be randomly selected if multiple are provided)"),
    pluginConfigs: exports_external.record(exports_external.string(), exports_external.object({
      mcpServers: exports_external.record(exports_external.string(), exports_external.record(exports_external.string(), exports_external.union([
        exports_external.string(),
        exports_external.number(),
        exports_external.boolean(),
        exports_external.array(exports_external.string())
      ]))).optional().describe("User configuration values for MCP servers keyed by server name"),
      options: exports_external.record(exports_external.string(), exports_external.union([
        exports_external.string(),
        exports_external.number(),
        exports_external.boolean(),
        exports_external.array(exports_external.string())
      ])).optional().describe("Non-sensitive option values from plugin manifest userConfig, keyed by option name. Sensitive values go to secure storage instead.")
    })).optional().describe("Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format)"),
    remote: exports_external.object({
      defaultEnvironmentId: exports_external.string().optional().describe("Default environment ID to use for remote sessions")
    }).optional().describe("Remote session configuration"),
    autoUpdatesChannel: exports_external.enum(["latest", "stable"]).optional().describe("Release channel for auto-updates (latest or stable)"),
    ...{},
    minimumVersion: exports_external.string().optional().describe("Minimum version to stay on - prevents downgrades when switching to stable channel"),
    plansDirectory: exports_external.string().optional().describe("Custom directory for plan files, relative to project root. " + "If not set, defaults to ~/.claude/plans/"),
    ...{},
    ...{},
    ...{},
    ...{},
    channelsEnabled: exports_external.boolean().optional().describe("Teams/Enterprise opt-in for channel notifications (MCP servers with the " + "claude/channel capability pushing inbound messages). Default off. " + "Set true to allow; users then select servers via --channels."),
    allowedChannelPlugins: exports_external.array(exports_external.object({
      marketplace: exports_external.string(),
      plugin: exports_external.string()
    })).optional().describe("Teams/Enterprise allowlist of channel plugins. When set, " + "replaces the default Anthropic allowlist \u2014 admins decide which " + "plugins may push inbound messages. Undefined falls back to the default. " + "Requires channelsEnabled: true."),
    ...{},
    prefersReducedMotion: exports_external.boolean().optional().describe("Reduce or disable animations for accessibility (spinner shimmer, flash effects, etc.)"),
    autoMemoryEnabled: exports_external.boolean().optional().describe("Enable auto-memory for this project. When false, Claude will not read from or write to the auto-memory directory."),
    autoMemoryDirectory: exports_external.string().optional().describe("Custom directory path for auto-memory storage. Supports ~/ prefix for home directory expansion. Ignored if set in projectSettings (checked-in .claude/settings.json) for security. When unset, defaults to ~/.claude/projects/<sanitized-cwd>/memory/."),
    autoDreamEnabled: exports_external.boolean().optional().describe("Enable background memory consolidation (auto-dream). When set, overrides the server-side default."),
    showThinkingSummaries: exports_external.boolean().optional().describe("Show thinking summaries in the transcript view (ctrl+o). Default: false."),
    skipDangerousModePermissionPrompt: exports_external.boolean().optional().describe("Whether the user has accepted the bypass permissions mode dialog"),
    ...{},
    disableAutoMode: exports_external.enum(["disable"]).optional().describe("Disable auto mode"),
    sshConfigs: exports_external.array(exports_external.object({
      id: exports_external.string().describe("Unique identifier for this SSH config. Used to match configs across settings sources."),
      name: exports_external.string().describe("Display name for the SSH connection"),
      sshHost: exports_external.string().describe('SSH host in format "user@hostname" or "hostname", or a host alias from ~/.ssh/config'),
      sshPort: exports_external.number().int().optional().describe("SSH port (default: 22)"),
      sshIdentityFile: exports_external.string().optional().describe("Path to SSH identity file (private key)"),
      startDirectory: exports_external.string().optional().describe("Default working directory on the remote host. " + "Supports tilde expansion (e.g. ~/projects). " + "If not specified, defaults to the remote user home directory. " + "Can be overridden by the [dir] positional argument in `claude ssh <config> [dir]`.")
    })).optional().describe("SSH connection configurations for remote environments. " + "Typically set in managed settings by enterprise administrators " + "to pre-configure SSH connections for team members."),
    claudeMdExcludes: exports_external.array(exports_external.string()).optional().describe("Glob patterns or absolute paths of CLAUDE.md files to exclude from loading. " + "Patterns are matched against absolute file paths using picomatch. " + "Only applies to User, Project, and Local memory types (Managed/policy files cannot be excluded). " + 'Examples: "/home/user/monorepo/CLAUDE.md", "**/code/CLAUDE.md", "**/some-dir/.claude/rules/**"'),
    pluginTrustMessage: exports_external.string().optional().describe("Custom message to append to the plugin trust warning shown before installation. " + "Only read from policy settings (managed-settings.json / MDM). " + "Useful for enterprise administrators to add organization-specific context " + '(e.g., "All plugins from our internal marketplace are vetted and approved.").')
  }).passthrough());
});

// src/utils/settings/schemaOutput.ts
function generateSettingsJSONSchema() {
  const jsonSchema = toJSONSchema(SettingsSchema(), { unrepresentable: "any" });
  return jsonStringify(jsonSchema, null, 2);
}
var init_schemaOutput = __esm(() => {
  init_v4();
  init_slowOperations();
  init_types2();
});

// src/utils/settings/validationTips.ts
function getValidationTip(context3) {
  const matcher = TIP_MATCHERS.find((m) => m.matches(context3));
  if (!matcher)
    return null;
  const tip = { ...matcher.tip };
  if (context3.code === "invalid_value" && context3.enumValues && !tip.suggestion) {
    tip.suggestion = `Valid values: ${context3.enumValues.map((v) => `"${v}"`).join(", ")}`;
  }
  if (!tip.docLink && context3.path) {
    const pathPrefix = context3.path.split(".")[0];
    if (pathPrefix) {
      tip.docLink = PATH_DOC_LINKS[pathPrefix];
    }
  }
  return tip;
}
var DOCUMENTATION_BASE = "https://code.claude.com/docs/en", TIP_MATCHERS, PATH_DOC_LINKS;
var init_validationTips = __esm(() => {
  TIP_MATCHERS = [
    {
      matches: (ctx) => ctx.path === "permissions.defaultMode" && ctx.code === "invalid_value",
      tip: {
        suggestion: 'Valid modes: "acceptEdits" (ask before file changes), "plan" (analysis only), "bypassPermissions" (auto-accept all), or "default" (standard behavior)',
        docLink: `${DOCUMENTATION_BASE}/iam#permission-modes`
      }
    },
    {
      matches: (ctx) => ctx.path === "apiKeyHelper" && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Provide a shell command that outputs your API key to stdout. The script should output only the API key. Example: "/bin/generate_temp_api_key.sh"'
      }
    },
    {
      matches: (ctx) => ctx.path === "cleanupPeriodDays" && ctx.code === "too_small" && ctx.expected === "0",
      tip: {
        suggestion: "Must be 0 or greater. Set a positive number for days to retain transcripts (default is 30). Setting 0 disables session persistence entirely: no transcripts are written and existing transcripts are deleted at startup."
      }
    },
    {
      matches: (ctx) => ctx.path.startsWith("env.") && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Environment variables must be strings. Wrap numbers and booleans in quotes. Example: "DEBUG": "true", "PORT": "3000"',
        docLink: `${DOCUMENTATION_BASE}/settings#environment-variables`
      }
    },
    {
      matches: (ctx) => (ctx.path === "permissions.allow" || ctx.path === "permissions.deny") && ctx.code === "invalid_type" && ctx.expected === "array",
      tip: {
        suggestion: 'Permission rules must be in an array. Format: ["Tool(specifier)"]. Examples: ["Bash(npm run build)", "Edit(docs/**)", "Read(~/.zshrc)"]. Use * for wildcards.'
      }
    },
    {
      matches: (ctx) => ctx.path.includes("hooks") && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Hooks use a matcher + hooks array. The matcher is a string: a tool name ("Bash"), pipe-separated list ("Edit|Write"), or empty to match all. Example: {"PostToolUse": [{"matcher": "Edit|Write", "hooks": [{"type": "command", "command": "echo Done"}]}]}'
      }
    },
    {
      matches: (ctx) => ctx.code === "invalid_type" && ctx.expected === "boolean",
      tip: {
        suggestion: 'Use true or false without quotes. Example: "includeCoAuthoredBy": true'
      }
    },
    {
      matches: (ctx) => ctx.code === "unrecognized_keys",
      tip: {
        suggestion: "Check for typos or refer to the documentation for valid fields",
        docLink: `${DOCUMENTATION_BASE}/settings`
      }
    },
    {
      matches: (ctx) => ctx.code === "invalid_value" && ctx.enumValues !== undefined,
      tip: {
        suggestion: undefined
      }
    },
    {
      matches: (ctx) => ctx.code === "invalid_type" && ctx.expected === "object" && ctx.received === null && ctx.path === "",
      tip: {
        suggestion: "Check for missing commas, unmatched brackets, or trailing commas. Use a JSON validator to identify the exact syntax error."
      }
    },
    {
      matches: (ctx) => ctx.path === "permissions.additionalDirectories" && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Must be an array of directory paths. Example: ["~/projects", "/tmp/workspace"]. You can also use --add-dir flag or /add-dir command',
        docLink: `${DOCUMENTATION_BASE}/iam#working-directories`
      }
    }
  ];
  PATH_DOC_LINKS = {
    permissions: `${DOCUMENTATION_BASE}/iam#configuring-permissions`,
    env: `${DOCUMENTATION_BASE}/settings#environment-variables`,
    hooks: `${DOCUMENTATION_BASE}/hooks`
  };
});

// src/utils/settings/validation.ts
function isInvalidTypeIssue(issue) {
  return issue.code === "invalid_type";
}
function isInvalidValueIssue(issue) {
  return issue.code === "invalid_value";
}
function isUnrecognizedKeysIssue(issue) {
  return issue.code === "unrecognized_keys";
}
function isTooSmallIssue(issue) {
  return issue.code === "too_small";
}
function getReceivedType(value) {
  if (value === null)
    return "null";
  if (value === undefined)
    return "undefined";
  if (Array.isArray(value))
    return "array";
  return typeof value;
}
function extractReceivedFromMessage(msg) {
  const match = msg.match(/received (\w+)/);
  return match ? match[1] : undefined;
}
function formatZodError(error, filePath) {
  return error.issues.map((issue) => {
    const path2 = issue.path.map(String).join(".");
    let message = issue.message;
    let expected;
    let enumValues;
    let expectedValue;
    let receivedValue;
    let invalidValue;
    if (isInvalidValueIssue(issue)) {
      enumValues = issue.values.map((v) => String(v));
      expectedValue = enumValues.join(" | ");
      receivedValue = undefined;
      invalidValue = undefined;
    } else if (isInvalidTypeIssue(issue)) {
      expectedValue = issue.expected;
      const receivedType = extractReceivedFromMessage(issue.message);
      receivedValue = receivedType ?? getReceivedType(issue.input);
      invalidValue = receivedType ?? getReceivedType(issue.input);
    } else if (isTooSmallIssue(issue)) {
      expectedValue = String(issue.minimum);
    } else if (issue.code === "custom" && "params" in issue) {
      const params = issue.params;
      receivedValue = params.received;
      invalidValue = receivedValue;
    }
    const tip = getValidationTip({
      path: path2,
      code: issue.code,
      expected: expectedValue,
      received: receivedValue,
      enumValues,
      message: issue.message,
      value: receivedValue
    });
    if (isInvalidValueIssue(issue)) {
      expected = enumValues?.map((v) => `"${v}"`).join(", ");
      message = `Invalid value. Expected one of: ${expected}`;
    } else if (isInvalidTypeIssue(issue)) {
      const receivedType = extractReceivedFromMessage(issue.message) ?? getReceivedType(issue.input);
      if (issue.expected === "object" && receivedType === "null" && path2 === "") {
        message = "Invalid or malformed JSON";
      } else {
        message = `Expected ${issue.expected}, but received ${receivedType}`;
      }
    } else if (isUnrecognizedKeysIssue(issue)) {
      const keys = issue.keys.join(", ");
      message = `Unrecognized ${plural(issue.keys.length, "field")}: ${keys}`;
    } else if (isTooSmallIssue(issue)) {
      message = `Number must be greater than or equal to ${issue.minimum}`;
      expected = String(issue.minimum);
    }
    return {
      file: filePath,
      path: path2,
      message,
      expected,
      invalidValue,
      suggestion: tip?.suggestion,
      docLink: tip?.docLink
    };
  });
}
function validateSettingsFileContent(content) {
  try {
    const jsonData = jsonParse(content);
    const result = SettingsSchema().strict().safeParse(jsonData);
    if (result.success) {
      return { isValid: true };
    }
    const errors = formatZodError(result.error, "settings");
    const errorMessage2 = `Settings validation failed:
` + errors.map((err) => `- ${err.path}: ${err.message}`).join(`
`);
    return {
      isValid: false,
      error: errorMessage2,
      fullSchema: generateSettingsJSONSchema()
    };
  } catch (parseError) {
    return {
      isValid: false,
      error: `Invalid JSON: ${parseError instanceof Error ? parseError.message : "Unknown parsing error"}`,
      fullSchema: generateSettingsJSONSchema()
    };
  }
}
function filterInvalidPermissionRules(data, filePath) {
  if (!data || typeof data !== "object")
    return [];
  const obj = data;
  if (!obj.permissions || typeof obj.permissions !== "object")
    return [];
  const perms = obj.permissions;
  const warnings = [];
  for (const key of ["allow", "deny", "ask"]) {
    const rules = perms[key];
    if (!Array.isArray(rules))
      continue;
    perms[key] = rules.filter((rule) => {
      if (typeof rule !== "string") {
        warnings.push({
          file: filePath,
          path: `permissions.${key}`,
          message: `Non-string value in ${key} array was removed`,
          invalidValue: rule
        });
        return false;
      }
      const result = validatePermissionRule(rule);
      if (!result.valid) {
        let message = `Invalid permission rule "${rule}" was skipped`;
        if (result.error)
          message += `: ${result.error}`;
        if (result.suggestion)
          message += `. ${result.suggestion}`;
        warnings.push({
          file: filePath,
          path: `permissions.${key}`,
          message,
          invalidValue: rule
        });
        return false;
      }
      return true;
    });
  }
  return warnings;
}
var init_validation = __esm(() => {
  init_slowOperations();
  init_stringUtils();
  init_permissionValidation();
  init_schemaOutput();
  init_types2();
  init_validationTips();
});

// src/utils/settings/mdm/constants.ts
import { userInfo } from "os";
function getMacOSPlistPaths() {
  let username = "";
  try {
    username = userInfo().username;
  } catch {}
  const paths = [];
  if (username) {
    paths.push({
      path: `/Library/Managed Preferences/${username}/${MACOS_PREFERENCE_DOMAIN}.plist`,
      label: "per-user managed preferences"
    });
  }
  paths.push({
    path: `/Library/Managed Preferences/${MACOS_PREFERENCE_DOMAIN}.plist`,
    label: "device-level managed preferences"
  });
  if (false) {}
  return paths;
}
var MACOS_PREFERENCE_DOMAIN = "com.anthropic.claudecode", WINDOWS_REGISTRY_KEY_PATH_HKLM = "HKLM\\SOFTWARE\\Policies\\ClaudeCode", WINDOWS_REGISTRY_KEY_PATH_HKCU = "HKCU\\SOFTWARE\\Policies\\ClaudeCode", WINDOWS_REGISTRY_VALUE_NAME = "Settings", PLUTIL_PATH = "/usr/bin/plutil", PLUTIL_ARGS_PREFIX, MDM_SUBPROCESS_TIMEOUT_MS = 5000;
var init_constants5 = __esm(() => {
  PLUTIL_ARGS_PREFIX = ["-convert", "json", "-o", "-", "--"];
});

// src/utils/settings/mdm/rawRead.ts
import { execFile } from "child_process";
import { existsSync } from "fs";
function execFilePromise(cmd, args) {
  return new Promise((resolve3) => {
    execFile(cmd, args, { encoding: "utf-8", timeout: MDM_SUBPROCESS_TIMEOUT_MS }, (err, stdout) => {
      resolve3({ stdout: stdout ?? "", code: err ? 1 : 0 });
    });
  });
}
function fireRawRead() {
  return (async () => {
    if (process.platform === "darwin") {
      const plistPaths = getMacOSPlistPaths();
      const allResults = await Promise.all(plistPaths.map(async ({ path: path2, label }) => {
        if (!existsSync(path2)) {
          return { stdout: "", label, ok: false };
        }
        const { stdout, code } = await execFilePromise(PLUTIL_PATH, [
          ...PLUTIL_ARGS_PREFIX,
          path2
        ]);
        return { stdout, label, ok: code === 0 && !!stdout };
      }));
      const winner = allResults.find((r) => r.ok);
      return {
        plistStdouts: winner ? [{ stdout: winner.stdout, label: winner.label }] : [],
        hklmStdout: null,
        hkcuStdout: null
      };
    }
    if (process.platform === "win32") {
      const [hklm, hkcu] = await Promise.all([
        execFilePromise("reg", [
          "query",
          WINDOWS_REGISTRY_KEY_PATH_HKLM,
          "/v",
          WINDOWS_REGISTRY_VALUE_NAME
        ]),
        execFilePromise("reg", [
          "query",
          WINDOWS_REGISTRY_KEY_PATH_HKCU,
          "/v",
          WINDOWS_REGISTRY_VALUE_NAME
        ])
      ]);
      return {
        plistStdouts: null,
        hklmStdout: hklm.code === 0 ? hklm.stdout : null,
        hkcuStdout: hkcu.code === 0 ? hkcu.stdout : null
      };
    }
    return { plistStdouts: null, hklmStdout: null, hkcuStdout: null };
  })();
}
function startMdmRawRead() {
  if (rawReadPromise)
    return;
  rawReadPromise = fireRawRead();
}
function getMdmRawReadPromise() {
  return rawReadPromise;
}
var rawReadPromise = null;
var init_rawRead = __esm(() => {
  init_constants5();
});

// src/utils/settings/mdm/settings.ts
import { join as join9 } from "path";
function startMdmSettingsLoad() {
  if (mdmLoadPromise)
    return;
  mdmLoadPromise = (async () => {
    profileCheckpoint("mdm_load_start");
    const startTime = Date.now();
    const rawPromise = getMdmRawReadPromise() ?? fireRawRead();
    const { mdm, hkcu } = consumeRawReadResult(await rawPromise);
    mdmCache = mdm;
    hkcuCache = hkcu;
    profileCheckpoint("mdm_load_end");
    const duration = Date.now() - startTime;
    logForDebugging(`MDM settings load completed in ${duration}ms`);
    if (Object.keys(mdm.settings).length > 0) {
      logForDebugging(`MDM settings found: ${Object.keys(mdm.settings).join(", ")}`);
      try {
        logForDiagnosticsNoPII("info", "mdm_settings_loaded", {
          duration_ms: duration,
          key_count: Object.keys(mdm.settings).length,
          error_count: mdm.errors.length
        });
      } catch {}
    }
  })();
}
async function ensureMdmSettingsLoaded() {
  if (!mdmLoadPromise) {
    startMdmSettingsLoad();
  }
  await mdmLoadPromise;
}
function getMdmSettings() {
  return mdmCache ?? EMPTY_RESULT;
}
function getHkcuSettings() {
  return hkcuCache ?? EMPTY_RESULT;
}
function setMdmSettingsCache(mdm, hkcu) {
  mdmCache = mdm;
  hkcuCache = hkcu;
}
async function refreshMdmSettings() {
  const raw = await fireRawRead();
  return consumeRawReadResult(raw);
}
function parseCommandOutputAsSettings(stdout, sourcePath) {
  const data = safeParseJSON(stdout, false);
  if (!data || typeof data !== "object") {
    return { settings: {}, errors: [] };
  }
  const ruleWarnings = filterInvalidPermissionRules(data, sourcePath);
  const parseResult = SettingsSchema().safeParse(data);
  if (!parseResult.success) {
    const errors = formatZodError(parseResult.error, sourcePath);
    return { settings: {}, errors: [...ruleWarnings, ...errors] };
  }
  return { settings: parseResult.data, errors: ruleWarnings };
}
function parseRegQueryStdout(stdout, valueName = "Settings") {
  const lines = stdout.split(/\r?\n/);
  const escaped = valueName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^\\s+${escaped}\\s+REG_(?:EXPAND_)?SZ\\s+(.*)$`, "i");
  for (const line of lines) {
    const match = line.match(re);
    if (match && match[1]) {
      return match[1].trimEnd();
    }
  }
  return null;
}
function consumeRawReadResult(raw) {
  if (raw.plistStdouts && raw.plistStdouts.length > 0) {
    const { stdout, label } = raw.plistStdouts[0];
    const result = parseCommandOutputAsSettings(stdout, label);
    if (Object.keys(result.settings).length > 0) {
      return { mdm: result, hkcu: EMPTY_RESULT };
    }
  }
  if (raw.hklmStdout) {
    const jsonString = parseRegQueryStdout(raw.hklmStdout);
    if (jsonString) {
      const result = parseCommandOutputAsSettings(jsonString, `Registry: ${WINDOWS_REGISTRY_KEY_PATH_HKLM}\\${WINDOWS_REGISTRY_VALUE_NAME}`);
      if (Object.keys(result.settings).length > 0) {
        return { mdm: result, hkcu: EMPTY_RESULT };
      }
    }
  }
  if (hasManagedSettingsFile()) {
    return { mdm: EMPTY_RESULT, hkcu: EMPTY_RESULT };
  }
  if (raw.hkcuStdout) {
    const jsonString = parseRegQueryStdout(raw.hkcuStdout);
    if (jsonString) {
      const result = parseCommandOutputAsSettings(jsonString, `Registry: ${WINDOWS_REGISTRY_KEY_PATH_HKCU}\\${WINDOWS_REGISTRY_VALUE_NAME}`);
      return { mdm: EMPTY_RESULT, hkcu: result };
    }
  }
  return { mdm: EMPTY_RESULT, hkcu: EMPTY_RESULT };
}
function hasManagedSettingsFile() {
  try {
    const filePath = join9(getManagedFilePath(), "managed-settings.json");
    const content = readFileSync(filePath);
    const data = safeParseJSON(content, false);
    if (data && typeof data === "object" && Object.keys(data).length > 0) {
      return true;
    }
  } catch {}
  try {
    const dropInDir = getManagedSettingsDropInDir();
    const entries = getFsImplementation().readdirSync(dropInDir);
    for (const d of entries) {
      if (!(d.isFile() || d.isSymbolicLink()) || !d.name.endsWith(".json") || d.name.startsWith(".")) {
        continue;
      }
      try {
        const content = readFileSync(join9(dropInDir, d.name));
        const data = safeParseJSON(content, false);
        if (data && typeof data === "object" && Object.keys(data).length > 0) {
          return true;
        }
      } catch {}
    }
  } catch {}
  return false;
}
var EMPTY_RESULT, mdmCache = null, hkcuCache = null, mdmLoadPromise = null;
var init_settings = __esm(() => {
  init_debug();
  init_diagLogs();
  init_fileRead();
  init_fsOperations();
  init_json();
  init_startupProfiler();
  init_managedPath();
  init_types2();
  init_validation();
  init_constants5();
  init_rawRead();
  EMPTY_RESULT = Object.freeze({ settings: {}, errors: [] });
});

// src/utils/settings/settings.ts
import { dirname as dirname4, join as join10, resolve as resolve3 } from "path";
function getManagedSettingsFilePath() {
  return join10(getManagedFilePath(), "managed-settings.json");
}
function loadManagedFileSettings() {
  const errors = [];
  let merged = {};
  let found = false;
  const { settings, errors: baseErrors } = parseSettingsFile(getManagedSettingsFilePath());
  errors.push(...baseErrors);
  if (settings && Object.keys(settings).length > 0) {
    merged = mergeWith_default(merged, settings, settingsMergeCustomizer);
    found = true;
  }
  const dropInDir = getManagedSettingsDropInDir();
  try {
    const entries = getFsImplementation().readdirSync(dropInDir).filter((d) => (d.isFile() || d.isSymbolicLink()) && d.name.endsWith(".json") && !d.name.startsWith(".")).map((d) => d.name).sort();
    for (const name of entries) {
      const { settings: settings2, errors: fileErrors } = parseSettingsFile(join10(dropInDir, name));
      errors.push(...fileErrors);
      if (settings2 && Object.keys(settings2).length > 0) {
        merged = mergeWith_default(merged, settings2, settingsMergeCustomizer);
        found = true;
      }
    }
  } catch (e) {
    const code = getErrnoCode(e);
    if (code !== "ENOENT" && code !== "ENOTDIR") {
      logError(e);
    }
  }
  return { settings: found ? merged : null, errors };
}
function getManagedFileSettingsPresence() {
  const { settings: base } = parseSettingsFile(getManagedSettingsFilePath());
  const hasBase = !!base && Object.keys(base).length > 0;
  let hasDropIns = false;
  const dropInDir = getManagedSettingsDropInDir();
  try {
    hasDropIns = getFsImplementation().readdirSync(dropInDir).some((d) => (d.isFile() || d.isSymbolicLink()) && d.name.endsWith(".json") && !d.name.startsWith("."));
  } catch {}
  return { hasBase, hasDropIns };
}
function handleFileSystemError(error, path2) {
  if (typeof error === "object" && error && "code" in error && error.code === "ENOENT") {
    logForDebugging(`Broken symlink or missing file encountered for settings.json at path: ${path2}`);
  } else {
    logError(error);
  }
}
function parseSettingsFile(path2) {
  const cached = getCachedParsedFile(path2);
  if (cached) {
    return {
      settings: cached.settings ? clone(cached.settings) : null,
      errors: cached.errors
    };
  }
  const result = parseSettingsFileUncached(path2);
  setCachedParsedFile(path2, result);
  return {
    settings: result.settings ? clone(result.settings) : null,
    errors: result.errors
  };
}
function parseSettingsFileUncached(path2) {
  try {
    const { resolvedPath } = safeResolvePath(getFsImplementation(), path2);
    const content = readFileSync(resolvedPath);
    if (content.trim() === "") {
      return { settings: {}, errors: [] };
    }
    const data = safeParseJSON(content, false);
    const ruleWarnings = filterInvalidPermissionRules(data, path2);
    const result = SettingsSchema().safeParse(data);
    if (!result.success) {
      const errors = formatZodError(result.error, path2);
      return { settings: null, errors: [...ruleWarnings, ...errors] };
    }
    return { settings: result.data, errors: ruleWarnings };
  } catch (error) {
    handleFileSystemError(error, path2);
    return { settings: null, errors: [] };
  }
}
function getSettingsRootPathForSource(source) {
  switch (source) {
    case "userSettings":
      return resolve3(getClaudeConfigHomeDir());
    case "policySettings":
    case "projectSettings":
    case "localSettings": {
      return resolve3(getOriginalCwd());
    }
    case "flagSettings": {
      const path2 = getFlagSettingsPath();
      return path2 ? dirname4(resolve3(path2)) : resolve3(getOriginalCwd());
    }
  }
}
function getUserSettingsFilePath() {
  if (getUseCoworkPlugins() || isEnvTruthy(process.env.CLAUDE_CODE_USE_COWORK_PLUGINS)) {
    return "cowork_settings.json";
  }
  return "settings.json";
}
function getSettingsFilePathForSource(source) {
  switch (source) {
    case "userSettings":
      return join10(getSettingsRootPathForSource(source), getUserSettingsFilePath());
    case "projectSettings":
    case "localSettings": {
      return join10(getSettingsRootPathForSource(source), getRelativeSettingsFilePathForSource(source));
    }
    case "policySettings":
      return getManagedSettingsFilePath();
    case "flagSettings": {
      return getFlagSettingsPath();
    }
  }
}
function getRelativeSettingsFilePathForSource(source) {
  switch (source) {
    case "projectSettings":
      return join10(".claude", "settings.json");
    case "localSettings":
      return join10(".claude", "settings.local.json");
  }
}
function getSettingsForSource(source) {
  const cached = getCachedSettingsForSource(source);
  if (cached !== undefined)
    return cached;
  const result = getSettingsForSourceUncached(source);
  setCachedSettingsForSource(source, result);
  return result;
}
function getSettingsForSourceUncached(source) {
  if (source === "policySettings") {
    const remoteSettings = getRemoteManagedSettingsSyncFromCache();
    if (remoteSettings && Object.keys(remoteSettings).length > 0) {
      return remoteSettings;
    }
    const mdmResult = getMdmSettings();
    if (Object.keys(mdmResult.settings).length > 0) {
      return mdmResult.settings;
    }
    const { settings: fileSettings2 } = loadManagedFileSettings();
    if (fileSettings2) {
      return fileSettings2;
    }
    const hkcu = getHkcuSettings();
    if (Object.keys(hkcu.settings).length > 0) {
      return hkcu.settings;
    }
    return null;
  }
  const settingsFilePath = getSettingsFilePathForSource(source);
  const { settings: fileSettings } = settingsFilePath ? parseSettingsFile(settingsFilePath) : { settings: null };
  if (source === "flagSettings") {
    const inlineSettings = getFlagSettingsInline();
    if (inlineSettings) {
      const parsed = SettingsSchema().safeParse(inlineSettings);
      if (parsed.success) {
        return mergeWith_default(fileSettings || {}, parsed.data, settingsMergeCustomizer);
      }
    }
  }
  return fileSettings;
}
function getPolicySettingsOrigin() {
  const remoteSettings = getRemoteManagedSettingsSyncFromCache();
  if (remoteSettings && Object.keys(remoteSettings).length > 0) {
    return "remote";
  }
  const mdmResult = getMdmSettings();
  if (Object.keys(mdmResult.settings).length > 0) {
    return getPlatform() === "macos" ? "plist" : "hklm";
  }
  const { settings: fileSettings } = loadManagedFileSettings();
  if (fileSettings) {
    return "file";
  }
  const hkcu = getHkcuSettings();
  if (Object.keys(hkcu.settings).length > 0) {
    return "hkcu";
  }
  return null;
}
function updateSettingsForSource(source, settings) {
  if (source === "policySettings" || source === "flagSettings") {
    return { error: null };
  }
  const filePath = getSettingsFilePathForSource(source);
  if (!filePath) {
    return { error: null };
  }
  try {
    getFsImplementation().mkdirSync(dirname4(filePath));
    let existingSettings = getSettingsForSourceUncached(source);
    if (!existingSettings) {
      let content = null;
      try {
        content = readFileSync(filePath);
      } catch (e) {
        if (!isENOENT(e)) {
          throw e;
        }
      }
      if (content !== null) {
        const rawData = safeParseJSON(content);
        if (rawData === null) {
          return {
            error: new Error(`Invalid JSON syntax in settings file at ${filePath}`)
          };
        }
        if (rawData && typeof rawData === "object") {
          existingSettings = rawData;
          logForDebugging(`Using raw settings from ${filePath} due to validation failure`);
        }
      }
    }
    const updatedSettings = mergeWith_default(existingSettings || {}, settings, (_objValue, srcValue, key, object) => {
      if (srcValue === undefined && object && typeof key === "string") {
        delete object[key];
        return;
      }
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return;
    });
    markInternalWrite(filePath);
    writeFileSyncAndFlush_DEPRECATED(filePath, jsonStringify(updatedSettings, null, 2) + `
`);
    resetSettingsCache();
    if (source === "localSettings") {
      addFileGlobRuleToGitignore(getRelativeSettingsFilePathForSource("localSettings"), getOriginalCwd());
    }
  } catch (e) {
    const error = new Error(`Failed to read raw settings from ${filePath}: ${e}`);
    logError(error);
    return { error };
  }
  return { error: null };
}
function mergeArrays(targetArray, sourceArray) {
  return uniq([...targetArray, ...sourceArray]);
}
function settingsMergeCustomizer(objValue, srcValue) {
  if (Array.isArray(objValue) && Array.isArray(srcValue)) {
    return mergeArrays(objValue, srcValue);
  }
  return;
}
function getManagedSettingsKeysForLogging(settings) {
  const validSettings = SettingsSchema().strip().parse(settings);
  const keysToExpand = ["permissions", "sandbox", "hooks"];
  const allKeys = [];
  const validNestedKeys = {
    permissions: new Set([
      "allow",
      "deny",
      "ask",
      "defaultMode",
      "disableBypassPermissionsMode",
      ...[],
      "additionalDirectories"
    ]),
    sandbox: new Set([
      "enabled",
      "failIfUnavailable",
      "allowUnsandboxedCommands",
      "network",
      "filesystem",
      "ignoreViolations",
      "excludedCommands",
      "autoAllowBashIfSandboxed",
      "enableWeakerNestedSandbox",
      "enableWeakerNetworkIsolation",
      "ripgrep"
    ]),
    hooks: new Set([
      "PreToolUse",
      "PostToolUse",
      "Notification",
      "UserPromptSubmit",
      "SessionStart",
      "SessionEnd",
      "Stop",
      "SubagentStop",
      "PreCompact",
      "PostCompact",
      "TeammateIdle",
      "TaskCreated",
      "TaskCompleted"
    ])
  };
  for (const key of Object.keys(validSettings)) {
    if (keysToExpand.includes(key) && validSettings[key] && typeof validSettings[key] === "object") {
      const nestedObj = validSettings[key];
      const validKeys = validNestedKeys[key];
      if (validKeys) {
        for (const nestedKey of Object.keys(nestedObj)) {
          if (validKeys.has(nestedKey)) {
            allKeys.push(`${key}.${nestedKey}`);
          }
        }
      }
    } else {
      allKeys.push(key);
    }
  }
  return allKeys.sort();
}
function loadSettingsFromDisk() {
  if (isLoadingSettings) {
    return { settings: {}, errors: [] };
  }
  const startTime = Date.now();
  profileCheckpoint("loadSettingsFromDisk_start");
  logForDiagnosticsNoPII("info", "settings_load_started");
  isLoadingSettings = true;
  try {
    const pluginSettings = getPluginSettingsBase();
    let mergedSettings = {};
    if (pluginSettings) {
      mergedSettings = mergeWith_default(mergedSettings, pluginSettings, settingsMergeCustomizer);
    }
    const allErrors = [];
    const seenErrors = new Set;
    const seenFiles = new Set;
    for (const source of getEnabledSettingSources()) {
      if (source === "policySettings") {
        let policySettings = null;
        const policyErrors = [];
        const remoteSettings = getRemoteManagedSettingsSyncFromCache();
        if (remoteSettings && Object.keys(remoteSettings).length > 0) {
          const result = SettingsSchema().safeParse(remoteSettings);
          if (result.success) {
            policySettings = result.data;
          } else {
            policyErrors.push(...formatZodError(result.error, "remote managed settings"));
          }
        }
        if (!policySettings) {
          const mdmResult = getMdmSettings();
          if (Object.keys(mdmResult.settings).length > 0) {
            policySettings = mdmResult.settings;
          }
          policyErrors.push(...mdmResult.errors);
        }
        if (!policySettings) {
          const { settings, errors } = loadManagedFileSettings();
          if (settings) {
            policySettings = settings;
          }
          policyErrors.push(...errors);
        }
        if (!policySettings) {
          const hkcu = getHkcuSettings();
          if (Object.keys(hkcu.settings).length > 0) {
            policySettings = hkcu.settings;
          }
          policyErrors.push(...hkcu.errors);
        }
        if (policySettings) {
          mergedSettings = mergeWith_default(mergedSettings, policySettings, settingsMergeCustomizer);
        }
        for (const error of policyErrors) {
          const errorKey = `${error.file}:${error.path}:${error.message}`;
          if (!seenErrors.has(errorKey)) {
            seenErrors.add(errorKey);
            allErrors.push(error);
          }
        }
        continue;
      }
      const filePath = getSettingsFilePathForSource(source);
      if (filePath) {
        const resolvedPath = resolve3(filePath);
        if (!seenFiles.has(resolvedPath)) {
          seenFiles.add(resolvedPath);
          const { settings, errors } = parseSettingsFile(filePath);
          for (const error of errors) {
            const errorKey = `${error.file}:${error.path}:${error.message}`;
            if (!seenErrors.has(errorKey)) {
              seenErrors.add(errorKey);
              allErrors.push(error);
            }
          }
          if (settings) {
            mergedSettings = mergeWith_default(mergedSettings, settings, settingsMergeCustomizer);
          }
        }
      }
      if (source === "flagSettings") {
        const inlineSettings = getFlagSettingsInline();
        if (inlineSettings) {
          const parsed = SettingsSchema().safeParse(inlineSettings);
          if (parsed.success) {
            mergedSettings = mergeWith_default(mergedSettings, parsed.data, settingsMergeCustomizer);
          }
        }
      }
    }
    logForDiagnosticsNoPII("info", "settings_load_completed", {
      duration_ms: Date.now() - startTime,
      source_count: seenFiles.size,
      error_count: allErrors.length
    });
    return { settings: mergedSettings, errors: allErrors };
  } finally {
    isLoadingSettings = false;
  }
}
function getInitialSettings() {
  const { settings } = getSettingsWithErrors();
  return settings || {};
}
function getSettingsWithSources() {
  resetSettingsCache();
  const sources = [];
  for (const source of getEnabledSettingSources()) {
    const settings = getSettingsForSource(source);
    if (settings && Object.keys(settings).length > 0) {
      sources.push({ source, settings });
    }
  }
  return { effective: getInitialSettings(), sources };
}
function getSettingsWithErrors() {
  const cached = getSessionSettingsCache();
  if (cached !== null) {
    return cached;
  }
  const result = loadSettingsFromDisk();
  profileCheckpoint("loadSettingsFromDisk_end");
  setSessionSettingsCache(result);
  return result;
}
function hasSkipDangerousModePermissionPrompt() {
  return !!(getSettingsForSource("userSettings")?.skipDangerousModePermissionPrompt || getSettingsForSource("localSettings")?.skipDangerousModePermissionPrompt || getSettingsForSource("flagSettings")?.skipDangerousModePermissionPrompt || getSettingsForSource("policySettings")?.skipDangerousModePermissionPrompt);
}
function hasAutoModeOptIn() {
  if (false) {}
  return false;
}
function rawSettingsContainsKey(key) {
  for (const source of getEnabledSettingSources()) {
    if (source === "policySettings") {
      continue;
    }
    const filePath = getSettingsFilePathForSource(source);
    if (!filePath) {
      continue;
    }
    try {
      const { resolvedPath } = safeResolvePath(getFsImplementation(), filePath);
      const content = readFileSync(resolvedPath);
      if (!content.trim()) {
        continue;
      }
      const rawData = safeParseJSON(content, false);
      if (rawData && typeof rawData === "object" && key in rawData) {
        return true;
      }
    } catch (error) {
      handleFileSystemError(error, filePath);
    }
  }
  return false;
}
var isLoadingSettings = false, getSettings_DEPRECATED;
var init_settings2 = __esm(() => {
  init_mergeWith();
  init_state();
  init_syncCacheState();
  init_array();
  init_debug();
  init_diagLogs();
  init_envUtils();
  init_errors();
  init_file();
  init_fileRead();
  init_fsOperations();
  init_gitignore();
  init_json();
  init_log();
  init_platform();
  init_slowOperations();
  init_startupProfiler();
  init_constants2();
  init_internalWrites();
  init_managedPath();
  init_settings();
  init_settingsCache();
  init_types2();
  init_validation();
  getSettings_DEPRECATED = getInitialSettings;
});

// src/utils/model/bedrock.ts
function findFirstMatch(profiles, substring) {
  return profiles.find((p) => p.includes(substring)) ?? null;
}
async function createBedrockClient() {
  const { BedrockClient } = await import("@aws-sdk/client-bedrock");
  const region = getAWSRegion();
  const skipAuth = isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH);
  const clientConfig = {
    region,
    ...process.env.ANTHROPIC_BEDROCK_BASE_URL && {
      endpoint: process.env.ANTHROPIC_BEDROCK_BASE_URL
    },
    ...await getAWSClientProxyConfig(),
    ...skipAuth && {
      requestHandler: new (await import("@smithy/node-http-handler")).NodeHttpHandler,
      httpAuthSchemes: [
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: () => async () => ({}),
          signer: new (await import("@smithy/core")).NoAuthSigner
        }
      ],
      httpAuthSchemeProvider: () => [{ schemeId: "smithy.api#noAuth" }]
    }
  };
  if (!skipAuth && !process.env.AWS_BEARER_TOKEN_BEDROCK) {
    const cachedCredentials = await refreshAndGetAwsCredentials();
    if (cachedCredentials) {
      clientConfig.credentials = {
        accessKeyId: cachedCredentials.accessKeyId,
        secretAccessKey: cachedCredentials.secretAccessKey,
        sessionToken: cachedCredentials.sessionToken
      };
    }
  }
  return new BedrockClient(clientConfig);
}
async function createBedrockRuntimeClient() {
  const { BedrockRuntimeClient } = await import("@aws-sdk/client-bedrock-runtime");
  const region = getAWSRegion();
  const skipAuth = isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH);
  const clientConfig = {
    region,
    ...process.env.ANTHROPIC_BEDROCK_BASE_URL && {
      endpoint: process.env.ANTHROPIC_BEDROCK_BASE_URL
    },
    ...await getAWSClientProxyConfig(),
    ...skipAuth && {
      requestHandler: new (await import("@smithy/node-http-handler")).NodeHttpHandler,
      httpAuthSchemes: [
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: () => async () => ({}),
          signer: new (await import("@smithy/core")).NoAuthSigner
        }
      ],
      httpAuthSchemeProvider: () => [{ schemeId: "smithy.api#noAuth" }]
    }
  };
  if (!skipAuth && !process.env.AWS_BEARER_TOKEN_BEDROCK) {
    const cachedCredentials = await refreshAndGetAwsCredentials();
    if (cachedCredentials) {
      clientConfig.credentials = {
        accessKeyId: cachedCredentials.accessKeyId,
        secretAccessKey: cachedCredentials.secretAccessKey,
        sessionToken: cachedCredentials.sessionToken
      };
    }
  }
  return new BedrockRuntimeClient(clientConfig);
}
function isFoundationModel(modelId) {
  return modelId.startsWith("anthropic.");
}
function extractModelIdFromArn(modelId) {
  if (!modelId.startsWith("arn:")) {
    return modelId;
  }
  const lastSlashIndex = modelId.lastIndexOf("/");
  if (lastSlashIndex === -1) {
    return modelId;
  }
  return modelId.substring(lastSlashIndex + 1);
}
function getBedrockRegionPrefix(modelId) {
  const effectiveModelId = extractModelIdFromArn(modelId);
  for (const prefix of BEDROCK_REGION_PREFIXES) {
    if (effectiveModelId.startsWith(`${prefix}.anthropic.`)) {
      return prefix;
    }
  }
  return;
}
function applyBedrockRegionPrefix(modelId, prefix) {
  const existingPrefix = getBedrockRegionPrefix(modelId);
  if (existingPrefix) {
    return modelId.replace(`${existingPrefix}.`, `${prefix}.`);
  }
  if (isFoundationModel(modelId)) {
    return `${prefix}.${modelId}`;
  }
  return modelId;
}
var getBedrockInferenceProfiles, getInferenceProfileBackingModel, BEDROCK_REGION_PREFIXES;
var init_bedrock = __esm(() => {
  init_memoize();
  init_auth2();
  init_envUtils();
  init_log();
  init_proxy();
  getBedrockInferenceProfiles = memoize_default(async function() {
    const [client2, { ListInferenceProfilesCommand }] = await Promise.all([
      createBedrockClient(),
      import("@aws-sdk/client-bedrock")
    ]);
    const allProfiles = [];
    let nextToken;
    try {
      do {
        const command = new ListInferenceProfilesCommand({
          ...nextToken && { nextToken },
          typeEquals: "SYSTEM_DEFINED"
        });
        const response = await client2.send(command);
        if (response.inferenceProfileSummaries) {
          allProfiles.push(...response.inferenceProfileSummaries);
        }
        nextToken = response.nextToken;
      } while (nextToken);
      return allProfiles.filter((profile) => profile.inferenceProfileId?.includes("anthropic")).map((profile) => profile.inferenceProfileId).filter(Boolean);
    } catch (error) {
      logError(error);
      throw error;
    }
  });
  getInferenceProfileBackingModel = memoize_default(async function(profileId) {
    try {
      const [client2, { GetInferenceProfileCommand }] = await Promise.all([
        createBedrockClient(),
        import("@aws-sdk/client-bedrock")
      ]);
      const command = new GetInferenceProfileCommand({
        inferenceProfileIdentifier: profileId
      });
      const response = await client2.send(command);
      if (!response.models || response.models.length === 0) {
        return null;
      }
      const primaryModel = response.models[0];
      if (!primaryModel?.modelArn) {
        return null;
      }
      const lastSlashIndex = primaryModel.modelArn.lastIndexOf("/");
      return lastSlashIndex >= 0 ? primaryModel.modelArn.substring(lastSlashIndex + 1) : primaryModel.modelArn;
    } catch (error) {
      logError(error);
      return null;
    }
  });
  BEDROCK_REGION_PREFIXES = ["us", "eu", "apac", "global"];
});

// src/utils/model/modelStrings.ts
function getBuiltinModelStrings(provider) {
  const out = {};
  for (const key of MODEL_KEYS) {
    out[key] = ALL_MODEL_CONFIGS[key][provider];
  }
  return out;
}
async function getBedrockModelStrings() {
  const fallback = getBuiltinModelStrings("bedrock");
  let profiles;
  try {
    profiles = await getBedrockInferenceProfiles();
  } catch (error) {
    logError(error);
    return fallback;
  }
  if (!profiles?.length) {
    return fallback;
  }
  const out = {};
  for (const key of MODEL_KEYS) {
    const needle = ALL_MODEL_CONFIGS[key].firstParty;
    out[key] = findFirstMatch(profiles, needle) || fallback[key];
  }
  return out;
}
function applyModelOverrides(ms) {
  const overrides = getInitialSettings().modelOverrides;
  if (!overrides) {
    return ms;
  }
  const out = { ...ms };
  for (const [canonicalId, override] of Object.entries(overrides)) {
    const key = CANONICAL_ID_TO_KEY[canonicalId];
    if (key && override) {
      out[key] = override;
    }
  }
  return out;
}
function resolveOverriddenModel(modelId) {
  if (!modelId)
    return "";
  let overrides;
  try {
    overrides = getInitialSettings().modelOverrides;
  } catch {
    return modelId;
  }
  if (!overrides) {
    return modelId;
  }
  for (const [canonicalId, override] of Object.entries(overrides)) {
    if (override === modelId) {
      return canonicalId;
    }
  }
  return modelId;
}
function initModelStrings() {
  const ms = getModelStrings();
  if (ms !== null) {
    return;
  }
  if (getAPIProvider() !== "bedrock") {
    setModelStrings(getBuiltinModelStrings(getAPIProvider()));
    return;
  }
  updateBedrockModelStrings();
}
function getModelStrings2() {
  const ms = getModelStrings();
  if (ms === null) {
    initModelStrings();
    return applyModelOverrides(getBuiltinModelStrings(getAPIProvider()));
  }
  return applyModelOverrides(ms);
}
async function ensureModelStringsInitialized() {
  const ms = getModelStrings();
  if (ms !== null) {
    return;
  }
  if (getAPIProvider() !== "bedrock") {
    setModelStrings(getBuiltinModelStrings(getAPIProvider()));
    return;
  }
  await updateBedrockModelStrings();
}
var MODEL_KEYS, updateBedrockModelStrings;
var init_modelStrings = __esm(() => {
  init_state();
  init_log();
  init_sequential();
  init_settings2();
  init_bedrock();
  init_configs();
  init_providers();
  MODEL_KEYS = Object.keys(ALL_MODEL_CONFIGS);
  updateBedrockModelStrings = sequential(async () => {
    if (getModelStrings() !== null) {
      return;
    }
    try {
      const ms = await getBedrockModelStrings();
      setModelStrings(ms);
    } catch (error) {
      logError(error);
    }
  });
});

// src/utils/billing.ts
function hasConsoleBillingAccess() {
  if (isEnvTruthy(process.env.DISABLE_COST_WARNINGS)) {
    return false;
  }
  const isSubscriber = isClaudeAISubscriber();
  if (isSubscriber)
    return false;
  const authSource = getAuthTokenSource();
  const hasApiKey = getAnthropicApiKey() !== null;
  if (!authSource.hasToken && !hasApiKey) {
    return false;
  }
  const config = getGlobalConfig();
  const orgRole = config.oauthAccount?.organizationRole;
  const workspaceRole = config.oauthAccount?.workspaceRole;
  if (!orgRole || !workspaceRole) {
    return false;
  }
  return ["admin", "billing"].includes(orgRole) || ["workspace_admin", "workspace_billing"].includes(workspaceRole);
}
function hasClaudeAiBillingAccess() {
  if (mockBillingAccessOverride !== null) {
    return mockBillingAccessOverride;
  }
  if (!isClaudeAISubscriber()) {
    return false;
  }
  const subscriptionType = getSubscriptionType();
  if (subscriptionType === "max" || subscriptionType === "pro") {
    return true;
  }
  const config = getGlobalConfig();
  const orgRole = config.oauthAccount?.organizationRole;
  return !!orgRole && ["admin", "billing", "owner", "primary_owner"].includes(orgRole);
}
var mockBillingAccessOverride = null;
var init_billing = __esm(() => {
  init_auth2();
  init_config();
  init_envUtils();
});

// src/services/mockRateLimits.ts
function getMockHeaders() {
  if (!mockEnabled || true) {
    return null;
  }
  return mockHeaders;
}
function applyMockHeaders(headers) {
  const mock = getMockHeaders();
  if (!mock) {
    return headers;
  }
  const newHeaders = new globalThis.Headers(headers);
  Object.entries(mock).forEach(([key, value]) => {
    if (value !== undefined) {
      newHeaders.set(key, value);
    }
  });
  return newHeaders;
}
function shouldProcessMockLimits() {
  if (true) {
    return false;
  }
  return mockEnabled || Boolean(process.env.CLAUDE_MOCK_HEADERLESS_429);
}
function getMockSubscriptionType() {
  if (!mockEnabled || true) {
    return null;
  }
  return mockSubscriptionType || DEFAULT_MOCK_SUBSCRIPTION;
}
function shouldUseMockSubscription() {
  return mockEnabled && mockSubscriptionType !== null && false;
}
var mockHeaders, mockEnabled = false, mockSubscriptionType = null, DEFAULT_MOCK_SUBSCRIPTION = "max";
var init_mockRateLimits = __esm(() => {
  init_billing();
  mockHeaders = {};
});

// src/services/oauth/getOauthProfile.ts
async function getOauthProfileFromApiKey() {
  const config = getGlobalConfig();
  const accountUuid = config.oauthAccount?.accountUuid;
  const apiKey = getAnthropicApiKey();
  if (!accountUuid || !apiKey) {
    return;
  }
  const endpoint = `${getOauthConfig().BASE_API_URL}/api/claude_cli_profile`;
  try {
    const response = await axios_default.get(endpoint, {
      headers: {
        "x-api-key": apiKey,
        "anthropic-beta": OAUTH_BETA_HEADER
      },
      params: {
        account_uuid: accountUuid
      },
      timeout: 1e4
    });
    return response.data;
  } catch (error) {
    logError(error);
  }
}
async function getOauthProfileFromOauthToken(accessToken) {
  const endpoint = `${getOauthConfig().BASE_API_URL}/api/oauth/profile`;
  try {
    const response = await axios_default.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      timeout: 1e4
    });
    return response.data;
  } catch (error) {
    logError(error);
  }
}
var init_getOauthProfile = __esm(() => {
  init_axios();
  init_oauth();
  init_auth2();
  init_config();
  init_log();
});

// src/utils/authFileDescriptor.ts
import { mkdirSync, writeFileSync } from "fs";
function maybePersistTokenForSubprocesses(path2, token, tokenName) {
  if (!isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
    return;
  }
  try {
    mkdirSync(CCR_TOKEN_DIR, { recursive: true, mode: 448 });
    writeFileSync(path2, token, { encoding: "utf8", mode: 384 });
    logForDebugging(`Persisted ${tokenName} to ${path2} for subprocess access`);
  } catch (error) {
    logForDebugging(`Failed to persist ${tokenName} to disk (non-fatal): ${errorMessage(error)}`, { level: "error" });
  }
}
function readTokenFromWellKnownFile(path2, tokenName) {
  try {
    const fsOps = getFsImplementation();
    const token = fsOps.readFileSync(path2, { encoding: "utf8" }).trim();
    if (!token) {
      return null;
    }
    logForDebugging(`Read ${tokenName} from well-known file ${path2}`);
    return token;
  } catch (error) {
    if (!isENOENT(error)) {
      logForDebugging(`Failed to read ${tokenName} from ${path2}: ${errorMessage(error)}`, { level: "debug" });
    }
    return null;
  }
}
function getCredentialFromFd({
  envVar,
  wellKnownPath,
  label,
  getCached,
  setCached
}) {
  const cached = getCached();
  if (cached !== undefined) {
    return cached;
  }
  const fdEnv = process.env[envVar];
  if (!fdEnv) {
    const fromFile = readTokenFromWellKnownFile(wellKnownPath, label);
    setCached(fromFile);
    return fromFile;
  }
  const fd = parseInt(fdEnv, 10);
  if (Number.isNaN(fd)) {
    logForDebugging(`${envVar} must be a valid file descriptor number, got: ${fdEnv}`, { level: "error" });
    setCached(null);
    return null;
  }
  try {
    const fsOps = getFsImplementation();
    const fdPath = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${fd}` : `/proc/self/fd/${fd}`;
    const token = fsOps.readFileSync(fdPath, { encoding: "utf8" }).trim();
    if (!token) {
      logForDebugging(`File descriptor contained empty ${label}`, {
        level: "error"
      });
      setCached(null);
      return null;
    }
    logForDebugging(`Successfully read ${label} from file descriptor ${fd}`);
    setCached(token);
    maybePersistTokenForSubprocesses(wellKnownPath, token, label);
    return token;
  } catch (error) {
    logForDebugging(`Failed to read ${label} from file descriptor ${fd}: ${errorMessage(error)}`, { level: "error" });
    const fromFile = readTokenFromWellKnownFile(wellKnownPath, label);
    setCached(fromFile);
    return fromFile;
  }
}
function getOAuthTokenFromFileDescriptor() {
  return getCredentialFromFd({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: CCR_OAUTH_TOKEN_PATH,
    label: "OAuth token",
    getCached: getOauthTokenFromFd,
    setCached: setOauthTokenFromFd
  });
}
function getApiKeyFromFileDescriptor() {
  return getCredentialFromFd({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: CCR_API_KEY_PATH,
    label: "API key",
    getCached: getApiKeyFromFd,
    setCached: setApiKeyFromFd
  });
}
var CCR_TOKEN_DIR = "/home/claude/.claude/remote", CCR_OAUTH_TOKEN_PATH, CCR_API_KEY_PATH, CCR_SESSION_INGRESS_TOKEN_PATH;
var init_authFileDescriptor = __esm(() => {
  init_state();
  init_debug();
  init_envUtils();
  init_errors();
  init_fsOperations();
  CCR_OAUTH_TOKEN_PATH = `${CCR_TOKEN_DIR}/.oauth_token`;
  CCR_API_KEY_PATH = `${CCR_TOKEN_DIR}/.api_key`;
  CCR_SESSION_INGRESS_TOKEN_PATH = `${CCR_TOKEN_DIR}/.session_ingress_token`;
});

// src/utils/secureStorage/macOsKeychainHelpers.ts
import { createHash } from "crypto";
import { userInfo as userInfo2 } from "os";
function getMacOsKeychainStorageServiceName(serviceSuffix = "") {
  const configDir = getClaudeConfigHomeDir();
  const isDefaultDir = !process.env.CLAUDE_CONFIG_DIR;
  const dirHash = isDefaultDir ? "" : `-${createHash("sha256").update(configDir).digest("hex").substring(0, 8)}`;
  return `Claude Code${getOauthConfig().OAUTH_FILE_SUFFIX}${serviceSuffix}${dirHash}`;
}
function getUsername() {
  try {
    return process.env.USER || userInfo2().username;
  } catch {
    return "claude-code-user";
  }
}
function clearKeychainCache() {
  keychainCacheState.cache = { data: null, cachedAt: 0 };
  keychainCacheState.generation++;
  keychainCacheState.readInFlight = null;
}
function primeKeychainCacheFromPrefetch(stdout) {
  if (keychainCacheState.cache.cachedAt !== 0)
    return;
  let data = null;
  if (stdout) {
    try {
      data = JSON.parse(stdout);
    } catch {
      return;
    }
  }
  keychainCacheState.cache = { data, cachedAt: Date.now() };
}
var CREDENTIALS_SERVICE_SUFFIX = "-credentials", KEYCHAIN_CACHE_TTL_MS = 30000, keychainCacheState;
var init_macOsKeychainHelpers = __esm(() => {
  init_oauth();
  init_envUtils();
  keychainCacheState = {
    cache: { data: null, cachedAt: 0 },
    generation: 0,
    readInFlight: null
  };
});

// src/utils/authPortable.ts
async function maybeRemoveApiKeyFromMacOSKeychainThrows() {
  if (process.platform === "darwin") {
    const storageServiceName = getMacOsKeychainStorageServiceName();
    const result = await execa(`security delete-generic-password -a $USER -s "${storageServiceName}"`, { shell: true, reject: false });
    if (result.exitCode !== 0) {
      throw new Error("Failed to delete keychain entry");
    }
  }
}
function normalizeApiKeyForConfig(apiKey) {
  return apiKey.slice(-20);
}
var init_authPortable = __esm(() => {
  init_execa();
  init_macOsKeychainHelpers();
});

// src/utils/aws.ts
function isAwsCredentialsProviderError(err) {
  return err?.name === "CredentialsProviderError";
}
function isValidAwsStsOutput(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  const output = obj;
  if (!output.Credentials || typeof output.Credentials !== "object") {
    return false;
  }
  const credentials = output.Credentials;
  return typeof credentials.AccessKeyId === "string" && typeof credentials.SecretAccessKey === "string" && typeof credentials.SessionToken === "string" && credentials.AccessKeyId.length > 0 && credentials.SecretAccessKey.length > 0 && credentials.SessionToken.length > 0;
}
async function checkStsCallerIdentity() {
  const { STSClient, GetCallerIdentityCommand } = await import("@aws-sdk/client-sts");
  await new STSClient().send(new GetCallerIdentityCommand({}));
}
async function clearAwsIniCache() {
  try {
    logForDebugging("Clearing AWS credential provider cache");
    const { fromIni } = await import("@aws-sdk/credential-providers");
    const iniProvider = fromIni({ ignoreCache: true });
    await iniProvider();
    logForDebugging("AWS credential provider cache refreshed");
  } catch (_error) {
    logForDebugging("Failed to clear AWS credential cache (this is expected if no credentials are configured)");
  }
}
var init_aws = __esm(() => {
  init_debug();
});

// src/utils/awsAuthStatusManager.ts
class AwsAuthStatusManager {
  static instance = null;
  status = {
    isAuthenticating: false,
    output: []
  };
  changed = createSignal();
  static getInstance() {
    if (!AwsAuthStatusManager.instance) {
      AwsAuthStatusManager.instance = new AwsAuthStatusManager;
    }
    return AwsAuthStatusManager.instance;
  }
  getStatus() {
    return {
      ...this.status,
      output: [...this.status.output]
    };
  }
  startAuthentication() {
    this.status = {
      isAuthenticating: true,
      output: []
    };
    this.changed.emit(this.getStatus());
  }
  addOutput(line) {
    this.status.output.push(line);
    this.changed.emit(this.getStatus());
  }
  setError(error) {
    this.status.error = error;
    this.changed.emit(this.getStatus());
  }
  endAuthentication(success) {
    if (success) {
      this.status = {
        isAuthenticating: false,
        output: []
      };
    } else {
      this.status.isAuthenticating = false;
    }
    this.changed.emit(this.getStatus());
  }
  subscribe = this.changed.subscribe;
  static reset() {
    if (AwsAuthStatusManager.instance) {
      AwsAuthStatusManager.instance.changed.clear();
      AwsAuthStatusManager.instance = null;
    }
  }
}
var init_awsAuthStatusManager = __esm(() => {
  init_signal();
});

// src/utils/secureStorage/fallbackStorage.ts
function createFallbackStorage(primary, secondary) {
  return {
    name: `${primary.name}-with-${secondary.name}-fallback`,
    read() {
      const result = primary.read();
      if (result !== null && result !== undefined) {
        return result;
      }
      return secondary.read() || {};
    },
    async readAsync() {
      const result = await primary.readAsync();
      if (result !== null && result !== undefined) {
        return result;
      }
      return await secondary.readAsync() || {};
    },
    update(data) {
      const primaryDataBefore = primary.read();
      const result = primary.update(data);
      if (result.success) {
        if (primaryDataBefore === null) {
          secondary.delete();
        }
        return result;
      }
      const fallbackResult = secondary.update(data);
      if (fallbackResult.success) {
        if (primaryDataBefore !== null) {
          primary.delete();
        }
        return {
          success: true,
          warning: fallbackResult.warning
        };
      }
      return { success: false };
    },
    delete() {
      const primarySuccess = primary.delete();
      const secondarySuccess = secondary.delete();
      return primarySuccess || secondarySuccess;
    }
  };
}
var init_fallbackStorage = () => {};

// src/utils/secureStorage/macOsKeychainStorage.ts
async function doReadAsync() {
  try {
    const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
    const username = getUsername();
    const { stdout, code } = await execFileNoThrow("security", ["find-generic-password", "-a", username, "-w", "-s", storageServiceName], { useCwd: false, preserveOutputOnError: false });
    if (code === 0 && stdout) {
      return jsonParse(stdout.trim());
    }
  } catch (_e) {}
  return null;
}
function isMacOsKeychainLocked() {
  if (keychainLockedCache !== undefined)
    return keychainLockedCache;
  if (process.platform !== "darwin") {
    keychainLockedCache = false;
    return false;
  }
  try {
    const result = execaSync("security", ["show-keychain-info"], {
      reject: false,
      stdio: ["ignore", "pipe", "pipe"]
    });
    keychainLockedCache = result.exitCode === 36;
  } catch {
    keychainLockedCache = false;
  }
  return keychainLockedCache;
}
var SECURITY_STDIN_LINE_LIMIT, macOsKeychainStorage, keychainLockedCache;
var init_macOsKeychainStorage = __esm(() => {
  init_execa();
  init_debug();
  init_execFileNoThrow();
  init_execFileNoThrowPortable();
  init_slowOperations();
  init_macOsKeychainHelpers();
  SECURITY_STDIN_LINE_LIMIT = 4096 - 64;
  macOsKeychainStorage = {
    name: "keychain",
    read() {
      const prev = keychainCacheState.cache;
      if (Date.now() - prev.cachedAt < KEYCHAIN_CACHE_TTL_MS) {
        return prev.data;
      }
      try {
        const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
        const username = getUsername();
        const result = execSyncWithDefaults_DEPRECATED(`security find-generic-password -a "${username}" -w -s "${storageServiceName}"`);
        if (result) {
          const data = jsonParse(result);
          keychainCacheState.cache = { data, cachedAt: Date.now() };
          return data;
        }
      } catch (_e) {}
      if (prev.data !== null) {
        logForDebugging("[keychain] read failed; serving stale cache", {
          level: "warn"
        });
        keychainCacheState.cache = { data: prev.data, cachedAt: Date.now() };
        return prev.data;
      }
      keychainCacheState.cache = { data: null, cachedAt: Date.now() };
      return null;
    },
    async readAsync() {
      const prev = keychainCacheState.cache;
      if (Date.now() - prev.cachedAt < KEYCHAIN_CACHE_TTL_MS) {
        return prev.data;
      }
      if (keychainCacheState.readInFlight) {
        return keychainCacheState.readInFlight;
      }
      const gen = keychainCacheState.generation;
      const promise = doReadAsync().then((data) => {
        if (gen === keychainCacheState.generation) {
          if (data === null && prev.data !== null) {
            logForDebugging("[keychain] readAsync failed; serving stale cache", {
              level: "warn"
            });
          }
          const next = data ?? prev.data;
          keychainCacheState.cache = { data: next, cachedAt: Date.now() };
          keychainCacheState.readInFlight = null;
          return next;
        }
        return data;
      });
      keychainCacheState.readInFlight = promise;
      return promise;
    },
    update(data) {
      clearKeychainCache();
      try {
        const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
        const username = getUsername();
        const jsonString = jsonStringify(data);
        const hexValue = Buffer.from(jsonString, "utf-8").toString("hex");
        const command = `add-generic-password -U -a "${username}" -s "${storageServiceName}" -X "${hexValue}"
`;
        let result;
        if (command.length <= SECURITY_STDIN_LINE_LIMIT) {
          result = execaSync("security", ["-i"], {
            input: command,
            stdio: ["pipe", "pipe", "pipe"],
            reject: false
          });
        } else {
          logForDebugging(`Keychain payload (${jsonString.length}B JSON) exceeds security -i stdin limit; using argv`, { level: "warn" });
          result = execaSync("security", [
            "add-generic-password",
            "-U",
            "-a",
            username,
            "-s",
            storageServiceName,
            "-X",
            hexValue
          ], { stdio: ["ignore", "pipe", "pipe"], reject: false });
        }
        if (result.exitCode !== 0) {
          return { success: false };
        }
        keychainCacheState.cache = { data, cachedAt: Date.now() };
        return { success: true };
      } catch (_e) {
        return { success: false };
      }
    },
    delete() {
      clearKeychainCache();
      try {
        const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
        const username = getUsername();
        execSyncWithDefaults_DEPRECATED(`security delete-generic-password -a "${username}" -s "${storageServiceName}"`);
        return true;
      } catch (_e) {
        return false;
      }
    }
  };
});

// src/utils/secureStorage/plainTextStorage.ts
import { chmodSync as chmodSync2 } from "fs";
import { join as join11 } from "path";
function getStoragePath() {
  const storageDir = getClaudeConfigHomeDir();
  const storageFileName = ".credentials.json";
  return { storageDir, storagePath: join11(storageDir, storageFileName) };
}
var plainTextStorage;
var init_plainTextStorage = __esm(() => {
  init_envUtils();
  init_errors();
  init_fsOperations();
  init_slowOperations();
  plainTextStorage = {
    name: "plaintext",
    read() {
      const { storagePath } = getStoragePath();
      try {
        const data = getFsImplementation().readFileSync(storagePath, {
          encoding: "utf8"
        });
        return jsonParse(data);
      } catch {
        return null;
      }
    },
    async readAsync() {
      const { storagePath } = getStoragePath();
      try {
        const data = await getFsImplementation().readFile(storagePath, {
          encoding: "utf8"
        });
        return jsonParse(data);
      } catch {
        return null;
      }
    },
    update(data) {
      try {
        const { storageDir, storagePath } = getStoragePath();
        try {
          getFsImplementation().mkdirSync(storageDir);
        } catch (e) {
          const code = getErrnoCode(e);
          if (code !== "EEXIST") {
            throw e;
          }
        }
        writeFileSync_DEPRECATED(storagePath, jsonStringify(data), {
          encoding: "utf8",
          flush: false
        });
        chmodSync2(storagePath, 384);
        return {
          success: true,
          warning: "Warning: Storing credentials in plaintext."
        };
      } catch {
        return { success: false };
      }
    },
    delete() {
      const { storagePath } = getStoragePath();
      try {
        getFsImplementation().unlinkSync(storagePath);
        return true;
      } catch (e) {
        const code = getErrnoCode(e);
        if (code === "ENOENT") {
          return true;
        }
        return false;
      }
    }
  };
});

// src/utils/secureStorage/index.ts
function getSecureStorage() {
  if (process.platform === "darwin") {
    return createFallbackStorage(macOsKeychainStorage, plainTextStorage);
  }
  return plainTextStorage;
}
var init_secureStorage = __esm(() => {
  init_fallbackStorage();
  init_macOsKeychainStorage();
  init_plainTextStorage();
});

// src/utils/secureStorage/keychainPrefetch.ts
import { execFile as execFile2 } from "child_process";
function spawnSecurity(serviceName) {
  return new Promise((resolve4) => {
    execFile2("security", ["find-generic-password", "-a", getUsername(), "-w", "-s", serviceName], { encoding: "utf-8", timeout: KEYCHAIN_PREFETCH_TIMEOUT_MS }, (err, stdout) => {
      resolve4({
        stdout: err ? null : stdout?.trim() || null,
        timedOut: Boolean(err && "killed" in err && err.killed)
      });
    });
  });
}
function startKeychainPrefetch() {
  if (process.platform !== "darwin" || prefetchPromise || isBareMode())
    return;
  const oauthSpawn = spawnSecurity(getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX));
  const legacySpawn = spawnSecurity(getMacOsKeychainStorageServiceName());
  prefetchPromise = Promise.all([oauthSpawn, legacySpawn]).then(([oauth, legacy]) => {
    if (!oauth.timedOut)
      primeKeychainCacheFromPrefetch(oauth.stdout);
    if (!legacy.timedOut)
      legacyApiKeyPrefetch = { stdout: legacy.stdout };
  });
}
async function ensureKeychainPrefetchCompleted() {
  if (prefetchPromise)
    await prefetchPromise;
}
function getLegacyApiKeyPrefetchResult() {
  return legacyApiKeyPrefetch;
}
function clearLegacyApiKeyPrefetch() {
  legacyApiKeyPrefetch = null;
}
var KEYCHAIN_PREFETCH_TIMEOUT_MS = 1e4, legacyApiKeyPrefetch = null, prefetchPromise = null;
var init_keychainPrefetch = __esm(() => {
  init_envUtils();
  init_macOsKeychainHelpers();
});

// src/utils/toolSchemaCache.ts
function getToolSchemaCache() {
  return TOOL_SCHEMA_CACHE;
}
function clearToolSchemaCache() {
  TOOL_SCHEMA_CACHE.clear();
}
var TOOL_SCHEMA_CACHE;
var init_toolSchemaCache = __esm(() => {
  TOOL_SCHEMA_CACHE = new Map;
});

// src/utils/auth.ts
var exports_auth = {};
__export(exports_auth, {
  validateForceLoginOrg: () => validateForceLoginOrg,
  saveOAuthTokensIfNeeded: () => saveOAuthTokensIfNeeded,
  saveApiKey: () => saveApiKey,
  removeApiKey: () => removeApiKey,
  refreshGcpCredentialsIfNeeded: () => refreshGcpCredentialsIfNeeded,
  refreshGcpAuth: () => refreshGcpAuth,
  refreshAwsAuth: () => refreshAwsAuth,
  refreshAndGetAwsCredentials: () => refreshAndGetAwsCredentials,
  prefetchGcpCredentialsIfSafe: () => prefetchGcpCredentialsIfSafe,
  prefetchAwsCredentialsAndBedRockInfoIfSafe: () => prefetchAwsCredentialsAndBedRockInfoIfSafe,
  prefetchApiKeyFromApiKeyHelperIfSafe: () => prefetchApiKeyFromApiKeyHelperIfSafe,
  isUsing3PServices: () => isUsing3PServices,
  isTeamSubscriber: () => isTeamSubscriber,
  isTeamPremiumSubscriber: () => isTeamPremiumSubscriber,
  isProSubscriber: () => isProSubscriber,
  isOverageProvisioningAllowed: () => isOverageProvisioningAllowed,
  isOtelHeadersHelperFromProjectOrLocalSettings: () => isOtelHeadersHelperFromProjectOrLocalSettings,
  isMaxSubscriber: () => isMaxSubscriber,
  isGcpAuthRefreshFromProjectSettings: () => isGcpAuthRefreshFromProjectSettings,
  isEnterpriseSubscriber: () => isEnterpriseSubscriber,
  isCustomApiKeyApproved: () => isCustomApiKeyApproved,
  isConsumerSubscriber: () => isConsumerSubscriber,
  isClaudeAISubscriber: () => isClaudeAISubscriber,
  isAwsCredentialExportFromProjectSettings: () => isAwsCredentialExportFromProjectSettings,
  isAwsAuthRefreshFromProjectSettings: () => isAwsAuthRefreshFromProjectSettings,
  isAnthropicAuthEnabled: () => isAnthropicAuthEnabled,
  is1PApiCustomer: () => is1PApiCustomer,
  hasProfileScope: () => hasProfileScope,
  hasOpusAccess: () => hasOpusAccess,
  hasAnthropicApiKeyAuth: () => hasAnthropicApiKeyAuth,
  handleOAuth401Error: () => handleOAuth401Error,
  getSubscriptionType: () => getSubscriptionType,
  getSubscriptionName: () => getSubscriptionName,
  getRateLimitTier: () => getRateLimitTier,
  getOtelHeadersFromHelper: () => getOtelHeadersFromHelper,
  getOauthAccountInfo: () => getOauthAccountInfo,
  getConfiguredApiKeyHelper: () => getConfiguredApiKeyHelper,
  getClaudeAIOAuthTokensAsync: () => getClaudeAIOAuthTokensAsync,
  getClaudeAIOAuthTokens: () => getClaudeAIOAuthTokens,
  getAuthTokenSource: () => getAuthTokenSource,
  getApiKeyHelperElapsedMs: () => getApiKeyHelperElapsedMs,
  getApiKeyFromConfigOrMacOSKeychain: () => getApiKeyFromConfigOrMacOSKeychain,
  getApiKeyFromApiKeyHelperCached: () => getApiKeyFromApiKeyHelperCached,
  getApiKeyFromApiKeyHelper: () => getApiKeyFromApiKeyHelper,
  getAnthropicApiKeyWithSource: () => getAnthropicApiKeyWithSource,
  getAnthropicApiKey: () => getAnthropicApiKey,
  getAccountInformation: () => getAccountInformation,
  clearOAuthTokenCache: () => clearOAuthTokenCache,
  clearGcpCredentialsCache: () => clearGcpCredentialsCache,
  clearAwsCredentialsCache: () => clearAwsCredentialsCache,
  clearApiKeyHelperCache: () => clearApiKeyHelperCache,
  checkGcpCredentialsValid: () => checkGcpCredentialsValid,
  checkAndRefreshOAuthTokenIfNeeded: () => checkAndRefreshOAuthTokenIfNeeded,
  calculateApiKeyHelperTTL: () => calculateApiKeyHelperTTL
});
import { exec } from "child_process";
import { mkdir as mkdir4, stat as stat3 } from "fs/promises";
import { join as join12 } from "path";
function isManagedOAuthContext() {
  return isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) || process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop";
}
function isAnthropicAuthEnabled() {
  if (isBareMode())
    return false;
  if (process.env.ANTHROPIC_UNIX_SOCKET) {
    return !!process.env.CLAUDE_CODE_OAUTH_TOKEN;
  }
  const is3P = isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY);
  const settings = getSettings_DEPRECATED() || {};
  const apiKeyHelper = settings.apiKeyHelper;
  const hasExternalAuthToken = process.env.ANTHROPIC_AUTH_TOKEN || apiKeyHelper || process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR;
  const { source: apiKeySource } = getAnthropicApiKeyWithSource({
    skipRetrievingKeyFromApiKeyHelper: true
  });
  const hasExternalApiKey = apiKeySource === "ANTHROPIC_API_KEY" || apiKeySource === "apiKeyHelper";
  const shouldDisableAuth = is3P || hasExternalAuthToken && !isManagedOAuthContext() || hasExternalApiKey && !isManagedOAuthContext();
  return !shouldDisableAuth;
}
function getAuthTokenSource() {
  if (isBareMode()) {
    if (getConfiguredApiKeyHelper()) {
      return { source: "apiKeyHelper", hasToken: true };
    }
    return { source: "none", hasToken: false };
  }
  if (process.env.ANTHROPIC_AUTH_TOKEN && !isManagedOAuthContext()) {
    return { source: "ANTHROPIC_AUTH_TOKEN", hasToken: true };
  }
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN) {
    return { source: "CLAUDE_CODE_OAUTH_TOKEN", hasToken: true };
  }
  const oauthTokenFromFd = getOAuthTokenFromFileDescriptor();
  if (oauthTokenFromFd) {
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR) {
      return {
        source: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
        hasToken: true
      };
    }
    return {
      source: "CCR_OAUTH_TOKEN_FILE",
      hasToken: true
    };
  }
  const apiKeyHelper = getConfiguredApiKeyHelper();
  if (apiKeyHelper && !isManagedOAuthContext()) {
    return { source: "apiKeyHelper", hasToken: true };
  }
  const oauthTokens = getClaudeAIOAuthTokens();
  if (shouldUseClaudeAIAuth(oauthTokens?.scopes) && oauthTokens?.accessToken) {
    return { source: "claude.ai", hasToken: true };
  }
  return { source: "none", hasToken: false };
}
function getAnthropicApiKey() {
  const { key } = getAnthropicApiKeyWithSource();
  return key;
}
function hasAnthropicApiKeyAuth() {
  const { key, source } = getAnthropicApiKeyWithSource({
    skipRetrievingKeyFromApiKeyHelper: true
  });
  return key !== null && source !== "none";
}
function getAnthropicApiKeyWithSource(opts = {}) {
  if (isBareMode()) {
    if (process.env.ANTHROPIC_API_KEY) {
      return { key: process.env.ANTHROPIC_API_KEY, source: "ANTHROPIC_API_KEY" };
    }
    if (getConfiguredApiKeyHelper()) {
      return {
        key: opts.skipRetrievingKeyFromApiKeyHelper ? null : getApiKeyFromApiKeyHelperCached(),
        source: "apiKeyHelper"
      };
    }
    return { key: null, source: "none" };
  }
  const apiKeyEnv = isRunningOnHomespace() ? undefined : process.env.ANTHROPIC_API_KEY;
  if (preferThirdPartyAuthentication() && apiKeyEnv) {
    return {
      key: apiKeyEnv,
      source: "ANTHROPIC_API_KEY"
    };
  }
  if (isEnvTruthy(process.env.CI) || false) {
    const apiKeyFromFd2 = getApiKeyFromFileDescriptor();
    if (apiKeyFromFd2) {
      return {
        key: apiKeyFromFd2,
        source: "ANTHROPIC_API_KEY"
      };
    }
    if (!apiKeyEnv && !process.env.CLAUDE_CODE_OAUTH_TOKEN && !process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR) {
      throw new Error("ANTHROPIC_API_KEY or CLAUDE_CODE_OAUTH_TOKEN env var is required");
    }
    if (apiKeyEnv) {
      return {
        key: apiKeyEnv,
        source: "ANTHROPIC_API_KEY"
      };
    }
    return {
      key: null,
      source: "none"
    };
  }
  if (apiKeyEnv && getGlobalConfig().customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(apiKeyEnv))) {
    return {
      key: apiKeyEnv,
      source: "ANTHROPIC_API_KEY"
    };
  }
  const apiKeyFromFd = getApiKeyFromFileDescriptor();
  if (apiKeyFromFd) {
    return {
      key: apiKeyFromFd,
      source: "ANTHROPIC_API_KEY"
    };
  }
  const apiKeyHelperCommand = getConfiguredApiKeyHelper();
  if (apiKeyHelperCommand) {
    if (opts.skipRetrievingKeyFromApiKeyHelper) {
      return {
        key: null,
        source: "apiKeyHelper"
      };
    }
    return {
      key: getApiKeyFromApiKeyHelperCached(),
      source: "apiKeyHelper"
    };
  }
  const apiKeyFromConfigOrMacOSKeychain = getApiKeyFromConfigOrMacOSKeychain();
  if (apiKeyFromConfigOrMacOSKeychain) {
    return apiKeyFromConfigOrMacOSKeychain;
  }
  return {
    key: null,
    source: "none"
  };
}
function getConfiguredApiKeyHelper() {
  if (isBareMode()) {
    return getSettingsForSource("flagSettings")?.apiKeyHelper;
  }
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.apiKeyHelper;
}
function isApiKeyHelperFromProjectOrLocalSettings() {
  const apiKeyHelper = getConfiguredApiKeyHelper();
  if (!apiKeyHelper) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.apiKeyHelper === apiKeyHelper || localSettings?.apiKeyHelper === apiKeyHelper;
}
function getConfiguredAwsAuthRefresh() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.awsAuthRefresh;
}
function isAwsAuthRefreshFromProjectSettings() {
  const awsAuthRefresh = getConfiguredAwsAuthRefresh();
  if (!awsAuthRefresh) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.awsAuthRefresh === awsAuthRefresh || localSettings?.awsAuthRefresh === awsAuthRefresh;
}
function getConfiguredAwsCredentialExport() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.awsCredentialExport;
}
function isAwsCredentialExportFromProjectSettings() {
  const awsCredentialExport = getConfiguredAwsCredentialExport();
  if (!awsCredentialExport) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.awsCredentialExport === awsCredentialExport || localSettings?.awsCredentialExport === awsCredentialExport;
}
function calculateApiKeyHelperTTL() {
  const envTtl = process.env.CLAUDE_CODE_API_KEY_HELPER_TTL_MS;
  if (envTtl) {
    const parsed = parseInt(envTtl, 10);
    if (!Number.isNaN(parsed) && parsed >= 0) {
      return parsed;
    }
    logForDebugging(`Found CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var, but it was not a valid number. Got ${envTtl}`, { level: "error" });
  }
  return DEFAULT_API_KEY_HELPER_TTL;
}
function getApiKeyHelperElapsedMs() {
  const startedAt = _apiKeyHelperInflight?.startedAt;
  return startedAt ? Date.now() - startedAt : 0;
}
async function getApiKeyFromApiKeyHelper(isNonInteractiveSession) {
  if (!getConfiguredApiKeyHelper())
    return null;
  const ttl = calculateApiKeyHelperTTL();
  if (_apiKeyHelperCache) {
    if (Date.now() - _apiKeyHelperCache.timestamp < ttl) {
      return _apiKeyHelperCache.value;
    }
    if (!_apiKeyHelperInflight) {
      _apiKeyHelperInflight = {
        promise: _runAndCache(isNonInteractiveSession, false, _apiKeyHelperEpoch),
        startedAt: null
      };
    }
    return _apiKeyHelperCache.value;
  }
  if (_apiKeyHelperInflight)
    return _apiKeyHelperInflight.promise;
  _apiKeyHelperInflight = {
    promise: _runAndCache(isNonInteractiveSession, true, _apiKeyHelperEpoch),
    startedAt: Date.now()
  };
  return _apiKeyHelperInflight.promise;
}
async function _runAndCache(isNonInteractiveSession, isCold, epoch) {
  try {
    const value = await _executeApiKeyHelper(isNonInteractiveSession);
    if (epoch !== _apiKeyHelperEpoch)
      return value;
    if (value !== null) {
      _apiKeyHelperCache = { value, timestamp: Date.now() };
    }
    return value;
  } catch (e) {
    if (epoch !== _apiKeyHelperEpoch)
      return " ";
    const detail = e instanceof Error ? e.message : String(e);
    console.error(source_default.red(`apiKeyHelper failed: ${detail}`));
    logForDebugging(`Error getting API key from apiKeyHelper: ${detail}`, {
      level: "error"
    });
    if (!isCold && _apiKeyHelperCache && _apiKeyHelperCache.value !== " ") {
      _apiKeyHelperCache = { ..._apiKeyHelperCache, timestamp: Date.now() };
      return _apiKeyHelperCache.value;
    }
    _apiKeyHelperCache = { value: " ", timestamp: Date.now() };
    return " ";
  } finally {
    if (epoch === _apiKeyHelperEpoch) {
      _apiKeyHelperInflight = null;
    }
  }
}
async function _executeApiKeyHelper(isNonInteractiveSession) {
  const apiKeyHelper = getConfiguredApiKeyHelper();
  if (!apiKeyHelper) {
    return null;
  }
  if (isApiKeyHelperFromProjectOrLocalSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !isNonInteractiveSession) {
      const error = new Error(`Security: apiKeyHelper executed before workspace trust is confirmed. If you see this message, post in ${"https://github.com/MBH0/bett-code/issues"}.`);
      logAntError("apiKeyHelper invoked before trust check", error);
      logEvent("tengu_apiKeyHelper_missing_trust11", {});
      return null;
    }
  }
  const result = await execa(apiKeyHelper, {
    shell: true,
    timeout: 10 * 60 * 1000,
    reject: false
  });
  if (result.failed) {
    const why = result.timedOut ? "timed out" : `exited ${result.exitCode}`;
    const stderr = result.stderr?.trim();
    throw new Error(stderr ? `${why}: ${stderr}` : why);
  }
  const stdout = result.stdout?.trim();
  if (!stdout) {
    throw new Error("did not return a value");
  }
  return stdout;
}
function getApiKeyFromApiKeyHelperCached() {
  return _apiKeyHelperCache?.value ?? null;
}
function clearApiKeyHelperCache() {
  _apiKeyHelperEpoch++;
  _apiKeyHelperCache = null;
  _apiKeyHelperInflight = null;
}
function prefetchApiKeyFromApiKeyHelperIfSafe(isNonInteractiveSession) {
  if (isApiKeyHelperFromProjectOrLocalSettings() && !checkHasTrustDialogAccepted()) {
    return;
  }
  getApiKeyFromApiKeyHelper(isNonInteractiveSession);
}
async function runAwsAuthRefresh() {
  const awsAuthRefresh = getConfiguredAwsAuthRefresh();
  if (!awsAuthRefresh) {
    return false;
  }
  if (isAwsAuthRefreshFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      const error = new Error(`Security: awsAuthRefresh executed before workspace trust is confirmed. If you see this message, post in ${"https://github.com/MBH0/bett-code/issues"}.`);
      logAntError("awsAuthRefresh invoked before trust check", error);
      logEvent("tengu_awsAuthRefresh_missing_trust", {});
      return false;
    }
  }
  try {
    logForDebugging("Fetching AWS caller identity for AWS auth refresh command");
    await checkStsCallerIdentity();
    logForDebugging("Fetched AWS caller identity, skipping AWS auth refresh command");
    return false;
  } catch {
    return refreshAwsAuth(awsAuthRefresh);
  }
}
function refreshAwsAuth(awsAuthRefresh) {
  logForDebugging("Running AWS auth refresh command");
  const authStatusManager = AwsAuthStatusManager.getInstance();
  authStatusManager.startAuthentication();
  return new Promise((resolve4) => {
    const refreshProc = exec(awsAuthRefresh, {
      timeout: AWS_AUTH_REFRESH_TIMEOUT_MS
    });
    refreshProc.stdout.on("data", (data) => {
      const output = data.toString().trim();
      if (output) {
        authStatusManager.addOutput(output);
        logForDebugging(output, { level: "debug" });
      }
    });
    refreshProc.stderr.on("data", (data) => {
      const error = data.toString().trim();
      if (error) {
        authStatusManager.setError(error);
        logForDebugging(error, { level: "error" });
      }
    });
    refreshProc.on("close", (code, signal) => {
      if (code === 0) {
        logForDebugging("AWS auth refresh completed successfully");
        authStatusManager.endAuthentication(true);
        resolve4(true);
      } else {
        const timedOut = signal === "SIGTERM";
        const message = timedOut ? source_default.red("AWS auth refresh timed out after 3 minutes. Run your auth command manually in a separate terminal.") : source_default.red("Error running awsAuthRefresh (in settings or ~/.claude.json):");
        console.error(message);
        authStatusManager.endAuthentication(false);
        resolve4(false);
      }
    });
  });
}
async function getAwsCredsFromCredentialExport() {
  const awsCredentialExport = getConfiguredAwsCredentialExport();
  if (!awsCredentialExport) {
    return null;
  }
  if (isAwsCredentialExportFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      const error = new Error(`Security: awsCredentialExport executed before workspace trust is confirmed. If you see this message, post in ${"https://github.com/MBH0/bett-code/issues"}.`);
      logAntError("awsCredentialExport invoked before trust check", error);
      logEvent("tengu_awsCredentialExport_missing_trust", {});
      return null;
    }
  }
  try {
    logForDebugging("Fetching AWS caller identity for credential export command");
    await checkStsCallerIdentity();
    logForDebugging("Fetched AWS caller identity, skipping AWS credential export command");
    return null;
  } catch {
    try {
      logForDebugging("Running AWS credential export command");
      const result = await execa(awsCredentialExport, {
        shell: true,
        reject: false
      });
      if (result.exitCode !== 0 || !result.stdout) {
        throw new Error("awsCredentialExport did not return a valid value");
      }
      const awsOutput = jsonParse(result.stdout.trim());
      if (!isValidAwsStsOutput(awsOutput)) {
        throw new Error("awsCredentialExport did not return valid AWS STS output structure");
      }
      logForDebugging("AWS credentials retrieved from awsCredentialExport");
      return {
        accessKeyId: awsOutput.Credentials.AccessKeyId,
        secretAccessKey: awsOutput.Credentials.SecretAccessKey,
        sessionToken: awsOutput.Credentials.SessionToken
      };
    } catch (e) {
      const message = source_default.red("Error getting AWS credentials from awsCredentialExport (in settings or ~/.claude.json):");
      if (e instanceof Error) {
        console.error(message, e.message);
      } else {
        console.error(message, e);
      }
      return null;
    }
  }
}
function clearAwsCredentialsCache() {
  refreshAndGetAwsCredentials.cache.clear();
}
function getConfiguredGcpAuthRefresh() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.gcpAuthRefresh;
}
function isGcpAuthRefreshFromProjectSettings() {
  const gcpAuthRefresh = getConfiguredGcpAuthRefresh();
  if (!gcpAuthRefresh) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.gcpAuthRefresh === gcpAuthRefresh || localSettings?.gcpAuthRefresh === gcpAuthRefresh;
}
async function checkGcpCredentialsValid() {
  try {
    const { GoogleAuth } = await import("./chunk-62ct3apc.js").then((m)=>__toESM(m.default,1));
    const auth = new GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/cloud-platform"]
    });
    const probe = (async () => {
      const client2 = await auth.getClient();
      await client2.getAccessToken();
    })();
    const timeout = sleep(GCP_CREDENTIALS_CHECK_TIMEOUT_MS).then(() => {
      throw new GcpCredentialsTimeoutError("GCP credentials check timed out");
    });
    await Promise.race([probe, timeout]);
    return true;
  } catch {
    return false;
  }
}
async function runGcpAuthRefresh() {
  const gcpAuthRefresh = getConfiguredGcpAuthRefresh();
  if (!gcpAuthRefresh) {
    return false;
  }
  if (isGcpAuthRefreshFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      const error = new Error("Security: gcpAuthRefresh executed before workspace trust is confirmed. If you see this message, post in https://github.com/MBH0/bett-code/issues.");
      logAntError("gcpAuthRefresh invoked before trust check", error);
      logEvent("tengu_gcpAuthRefresh_missing_trust", {});
      return false;
    }
  }
  try {
    logForDebugging("Checking GCP credentials validity for auth refresh");
    const isValid = await checkGcpCredentialsValid();
    if (isValid) {
      logForDebugging("GCP credentials are valid, skipping auth refresh command");
      return false;
    }
  } catch {}
  return refreshGcpAuth(gcpAuthRefresh);
}
function refreshGcpAuth(gcpAuthRefresh) {
  logForDebugging("Running GCP auth refresh command");
  const authStatusManager = AwsAuthStatusManager.getInstance();
  authStatusManager.startAuthentication();
  return new Promise((resolve4) => {
    const refreshProc = exec(gcpAuthRefresh, {
      timeout: GCP_AUTH_REFRESH_TIMEOUT_MS
    });
    refreshProc.stdout.on("data", (data) => {
      const output = data.toString().trim();
      if (output) {
        authStatusManager.addOutput(output);
        logForDebugging(output, { level: "debug" });
      }
    });
    refreshProc.stderr.on("data", (data) => {
      const error = data.toString().trim();
      if (error) {
        authStatusManager.setError(error);
        logForDebugging(error, { level: "error" });
      }
    });
    refreshProc.on("close", (code, signal) => {
      if (code === 0) {
        logForDebugging("GCP auth refresh completed successfully");
        authStatusManager.endAuthentication(true);
        resolve4(true);
      } else {
        const timedOut = signal === "SIGTERM";
        const message = timedOut ? source_default.red("GCP auth refresh timed out after 3 minutes. Run your auth command manually in a separate terminal.") : source_default.red("Error running gcpAuthRefresh (in settings or ~/.claude.json):");
        console.error(message);
        authStatusManager.endAuthentication(false);
        resolve4(false);
      }
    });
  });
}
function clearGcpCredentialsCache() {
  refreshGcpCredentialsIfNeeded.cache.clear();
}
function prefetchGcpCredentialsIfSafe() {
  const gcpAuthRefresh = getConfiguredGcpAuthRefresh();
  if (!gcpAuthRefresh) {
    return;
  }
  if (isGcpAuthRefreshFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      return;
    }
  }
  refreshGcpCredentialsIfNeeded();
}
function prefetchAwsCredentialsAndBedRockInfoIfSafe() {
  const awsAuthRefresh = getConfiguredAwsAuthRefresh();
  const awsCredentialExport = getConfiguredAwsCredentialExport();
  if (!awsAuthRefresh && !awsCredentialExport) {
    return;
  }
  if (isAwsAuthRefreshFromProjectSettings() || isAwsCredentialExportFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      return;
    }
  }
  refreshAndGetAwsCredentials();
  getModelStrings2();
}
function isValidApiKey(apiKey) {
  return /^[a-zA-Z0-9-_]+$/.test(apiKey);
}
async function saveApiKey(apiKey) {
  if (!isValidApiKey(apiKey)) {
    throw new Error("Invalid API key format. API key must contain only alphanumeric characters, dashes, and underscores.");
  }
  await maybeRemoveApiKeyFromMacOSKeychain();
  let savedToKeychain = false;
  if (process.platform === "darwin") {
    try {
      const storageServiceName = getMacOsKeychainStorageServiceName();
      const username = getUsername();
      const hexValue = Buffer.from(apiKey, "utf-8").toString("hex");
      const command = `add-generic-password -U -a "${username}" -s "${storageServiceName}" -X "${hexValue}"
`;
      await execa("security", ["-i"], {
        input: command,
        reject: false
      });
      logEvent("tengu_api_key_saved_to_keychain", {});
      savedToKeychain = true;
    } catch (e) {
      logError(e);
      logEvent("tengu_api_key_keychain_error", {
        error: errorMessage(e)
      });
      logEvent("tengu_api_key_saved_to_config", {});
    }
  } else {
    logEvent("tengu_api_key_saved_to_config", {});
  }
  const normalizedKey = normalizeApiKeyForConfig(apiKey);
  saveGlobalConfig((current) => {
    const approved = current.customApiKeyResponses?.approved ?? [];
    return {
      ...current,
      primaryApiKey: savedToKeychain ? current.primaryApiKey : apiKey,
      customApiKeyResponses: {
        ...current.customApiKeyResponses,
        approved: approved.includes(normalizedKey) ? approved : [...approved, normalizedKey],
        rejected: current.customApiKeyResponses?.rejected ?? []
      }
    };
  });
  getApiKeyFromConfigOrMacOSKeychain.cache.clear?.();
  clearLegacyApiKeyPrefetch();
}
function isCustomApiKeyApproved(apiKey) {
  const config = getGlobalConfig();
  const normalizedKey = normalizeApiKeyForConfig(apiKey);
  return config.customApiKeyResponses?.approved?.includes(normalizedKey) ?? false;
}
async function removeApiKey() {
  await maybeRemoveApiKeyFromMacOSKeychain();
  saveGlobalConfig((current) => ({
    ...current,
    primaryApiKey: undefined
  }));
  getApiKeyFromConfigOrMacOSKeychain.cache.clear?.();
  clearLegacyApiKeyPrefetch();
}
async function maybeRemoveApiKeyFromMacOSKeychain() {
  try {
    await maybeRemoveApiKeyFromMacOSKeychainThrows();
  } catch (e) {
    logError(e);
  }
}
function saveOAuthTokensIfNeeded(tokens) {
  if (!shouldUseClaudeAIAuth(tokens.scopes)) {
    logEvent("tengu_oauth_tokens_not_claude_ai", {});
    return { success: true };
  }
  if (!tokens.refreshToken || !tokens.expiresAt) {
    logEvent("tengu_oauth_tokens_inference_only", {});
    return { success: true };
  }
  const secureStorage = getSecureStorage();
  const storageBackend = secureStorage.name;
  try {
    const storageData = secureStorage.read() || {};
    const existingOauth = storageData.claudeAiOauth;
    storageData.claudeAiOauth = {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      expiresAt: tokens.expiresAt,
      scopes: tokens.scopes,
      subscriptionType: tokens.subscriptionType ?? existingOauth?.subscriptionType ?? null,
      rateLimitTier: tokens.rateLimitTier ?? existingOauth?.rateLimitTier ?? null
    };
    const updateStatus = secureStorage.update(storageData);
    if (updateStatus.success) {
      logEvent("tengu_oauth_tokens_saved", { storageBackend });
    } else {
      logEvent("tengu_oauth_tokens_save_failed", { storageBackend });
    }
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearBetasCaches();
    clearToolSchemaCache();
    return updateStatus;
  } catch (error) {
    logError(error);
    logEvent("tengu_oauth_tokens_save_exception", {
      storageBackend,
      error: errorMessage(error)
    });
    return { success: false, warning: "Failed to save OAuth tokens" };
  }
}
function clearOAuthTokenCache() {
  getClaudeAIOAuthTokens.cache?.clear?.();
  clearKeychainCache();
}
async function invalidateOAuthCacheIfDiskChanged() {
  try {
    const { mtimeMs } = await stat3(join12(getClaudeConfigHomeDir(), ".credentials.json"));
    if (mtimeMs !== lastCredentialsMtimeMs) {
      lastCredentialsMtimeMs = mtimeMs;
      clearOAuthTokenCache();
    }
  } catch {
    getClaudeAIOAuthTokens.cache?.clear?.();
  }
}
function handleOAuth401Error(failedAccessToken) {
  const pending = pending401Handlers.get(failedAccessToken);
  if (pending)
    return pending;
  const promise = handleOAuth401ErrorImpl(failedAccessToken).finally(() => {
    pending401Handlers.delete(failedAccessToken);
  });
  pending401Handlers.set(failedAccessToken, promise);
  return promise;
}
async function handleOAuth401ErrorImpl(failedAccessToken) {
  clearOAuthTokenCache();
  const currentTokens = await getClaudeAIOAuthTokensAsync();
  if (!currentTokens?.refreshToken) {
    return false;
  }
  if (currentTokens.accessToken !== failedAccessToken) {
    logEvent("tengu_oauth_401_recovered_from_keychain", {});
    return true;
  }
  return checkAndRefreshOAuthTokenIfNeeded(0, true);
}
async function getClaudeAIOAuthTokensAsync() {
  if (isBareMode())
    return null;
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN || getOAuthTokenFromFileDescriptor()) {
    return getClaudeAIOAuthTokens();
  }
  try {
    const secureStorage = getSecureStorage();
    const storageData = await secureStorage.readAsync();
    const oauthData = storageData?.claudeAiOauth;
    if (!oauthData?.accessToken) {
      return null;
    }
    return oauthData;
  } catch (error) {
    logError(error);
    return null;
  }
}
function checkAndRefreshOAuthTokenIfNeeded(retryCount = 0, force = false) {
  if (retryCount === 0 && !force) {
    if (pendingRefreshCheck) {
      return pendingRefreshCheck;
    }
    const promise = checkAndRefreshOAuthTokenIfNeededImpl(retryCount, force);
    pendingRefreshCheck = promise.finally(() => {
      pendingRefreshCheck = null;
    });
    return pendingRefreshCheck;
  }
  return checkAndRefreshOAuthTokenIfNeededImpl(retryCount, force);
}
async function checkAndRefreshOAuthTokenIfNeededImpl(retryCount, force) {
  const MAX_RETRIES = 5;
  await invalidateOAuthCacheIfDiskChanged();
  const tokens = getClaudeAIOAuthTokens();
  if (!force) {
    if (!tokens?.refreshToken || !isOAuthTokenExpired(tokens.expiresAt)) {
      return false;
    }
  }
  if (!tokens?.refreshToken) {
    return false;
  }
  if (!shouldUseClaudeAIAuth(tokens.scopes)) {
    return false;
  }
  getClaudeAIOAuthTokens.cache?.clear?.();
  clearKeychainCache();
  const freshTokens = await getClaudeAIOAuthTokensAsync();
  if (!freshTokens?.refreshToken || !isOAuthTokenExpired(freshTokens.expiresAt)) {
    return false;
  }
  const claudeDir = getClaudeConfigHomeDir();
  await mkdir4(claudeDir, { recursive: true });
  let release2;
  try {
    logEvent("tengu_oauth_token_refresh_lock_acquiring", {});
    release2 = await lock(claudeDir);
    logEvent("tengu_oauth_token_refresh_lock_acquired", {});
  } catch (err) {
    if (err.code === "ELOCKED") {
      if (retryCount < MAX_RETRIES) {
        logEvent("tengu_oauth_token_refresh_lock_retry", {
          retryCount: retryCount + 1
        });
        await sleep(1000 + Math.random() * 1000);
        return checkAndRefreshOAuthTokenIfNeededImpl(retryCount + 1, force);
      }
      logEvent("tengu_oauth_token_refresh_lock_retry_limit_reached", {
        maxRetries: MAX_RETRIES
      });
      return false;
    }
    logError(err);
    logEvent("tengu_oauth_token_refresh_lock_error", {
      error: errorMessage(err)
    });
    return false;
  }
  try {
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearKeychainCache();
    const lockedTokens = await getClaudeAIOAuthTokensAsync();
    if (!lockedTokens?.refreshToken || !isOAuthTokenExpired(lockedTokens.expiresAt)) {
      logEvent("tengu_oauth_token_refresh_race_resolved", {});
      return false;
    }
    logEvent("tengu_oauth_token_refresh_starting", {});
    const refreshedTokens = await refreshOAuthToken(lockedTokens.refreshToken, {
      scopes: shouldUseClaudeAIAuth(lockedTokens.scopes) ? undefined : lockedTokens.scopes
    });
    saveOAuthTokensIfNeeded(refreshedTokens);
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearKeychainCache();
    return true;
  } catch (error) {
    logError(error);
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearKeychainCache();
    const currentTokens = await getClaudeAIOAuthTokensAsync();
    if (currentTokens && !isOAuthTokenExpired(currentTokens.expiresAt)) {
      logEvent("tengu_oauth_token_refresh_race_recovered", {});
      return true;
    }
    return false;
  } finally {
    logEvent("tengu_oauth_token_refresh_lock_releasing", {});
    await release2();
    logEvent("tengu_oauth_token_refresh_lock_released", {});
  }
}
function isClaudeAISubscriber() {
  if (!isAnthropicAuthEnabled()) {
    return false;
  }
  return shouldUseClaudeAIAuth(getClaudeAIOAuthTokens()?.scopes);
}
function hasProfileScope() {
  return getClaudeAIOAuthTokens()?.scopes?.includes(CLAUDE_AI_PROFILE_SCOPE) ?? false;
}
function is1PApiCustomer() {
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY)) {
    return false;
  }
  if (isClaudeAISubscriber()) {
    return false;
  }
  return true;
}
function getOauthAccountInfo() {
  return isAnthropicAuthEnabled() ? getGlobalConfig().oauthAccount : undefined;
}
function isOverageProvisioningAllowed() {
  const accountInfo = getOauthAccountInfo();
  const billingType = accountInfo?.billingType;
  if (!isClaudeAISubscriber() || !billingType) {
    return false;
  }
  if (billingType !== "stripe_subscription" && billingType !== "stripe_subscription_contracted" && billingType !== "apple_subscription" && billingType !== "google_play_subscription") {
    return false;
  }
  return true;
}
function hasOpusAccess() {
  const subscriptionType = getSubscriptionType();
  return subscriptionType === "max" || subscriptionType === "enterprise" || subscriptionType === "team" || subscriptionType === "pro" || subscriptionType === null;
}
function getSubscriptionType() {
  if (shouldUseMockSubscription()) {
    return getMockSubscriptionType();
  }
  if (!isAnthropicAuthEnabled()) {
    return null;
  }
  const oauthTokens = getClaudeAIOAuthTokens();
  if (!oauthTokens) {
    return null;
  }
  return oauthTokens.subscriptionType ?? null;
}
function isMaxSubscriber() {
  return getSubscriptionType() === "max";
}
function isTeamSubscriber() {
  return getSubscriptionType() === "team";
}
function isTeamPremiumSubscriber() {
  return getSubscriptionType() === "team" && getRateLimitTier() === "default_claude_max_5x";
}
function isEnterpriseSubscriber() {
  return getSubscriptionType() === "enterprise";
}
function isProSubscriber() {
  return getSubscriptionType() === "pro";
}
function getRateLimitTier() {
  if (!isAnthropicAuthEnabled()) {
    return null;
  }
  const oauthTokens = getClaudeAIOAuthTokens();
  if (!oauthTokens) {
    return null;
  }
  return oauthTokens.rateLimitTier ?? null;
}
function getSubscriptionName() {
  const subscriptionType = getSubscriptionType();
  switch (subscriptionType) {
    case "enterprise":
      return "Claude Enterprise";
    case "team":
      return "Claude Team";
    case "max":
      return "Claude Max";
    case "pro":
      return "Claude Pro";
    default:
      return "Claude API";
  }
}
function isUsing3PServices() {
  return !!(isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY));
}
function getConfiguredOtelHeadersHelper() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.otelHeadersHelper;
}
function isOtelHeadersHelperFromProjectOrLocalSettings() {
  const otelHeadersHelper = getConfiguredOtelHeadersHelper();
  if (!otelHeadersHelper) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.otelHeadersHelper === otelHeadersHelper || localSettings?.otelHeadersHelper === otelHeadersHelper;
}
function getOtelHeadersFromHelper() {
  const otelHeadersHelper = getConfiguredOtelHeadersHelper();
  if (!otelHeadersHelper) {
    return {};
  }
  const debounceMs = parseInt(process.env.CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS || DEFAULT_OTEL_HEADERS_DEBOUNCE_MS.toString());
  if (cachedOtelHeaders && Date.now() - cachedOtelHeadersTimestamp < debounceMs) {
    return cachedOtelHeaders;
  }
  if (isOtelHeadersHelperFromProjectOrLocalSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust) {
      return {};
    }
  }
  try {
    const result = execSyncWithDefaults_DEPRECATED(otelHeadersHelper, {
      timeout: 30000
    })?.toString().trim();
    if (!result) {
      throw new Error("otelHeadersHelper did not return a valid value");
    }
    const headers = jsonParse(result);
    if (typeof headers !== "object" || headers === null || Array.isArray(headers)) {
      throw new Error("otelHeadersHelper must return a JSON object with string key-value pairs");
    }
    for (const [key, value] of Object.entries(headers)) {
      if (typeof value !== "string") {
        throw new Error(`otelHeadersHelper returned non-string value for key "${key}": ${typeof value}`);
      }
    }
    cachedOtelHeaders = headers;
    cachedOtelHeadersTimestamp = Date.now();
    return cachedOtelHeaders;
  } catch (error) {
    logError(new Error(`Error getting OpenTelemetry headers from otelHeadersHelper (in settings): ${errorMessage(error)}`));
    throw error;
  }
}
function isConsumerPlan(plan) {
  return plan === "max" || plan === "pro";
}
function isConsumerSubscriber() {
  const subscriptionType = getSubscriptionType();
  return isClaudeAISubscriber() && subscriptionType !== null && isConsumerPlan(subscriptionType);
}
function getAccountInformation() {
  const apiProvider = getAPIProvider();
  if (apiProvider !== "firstParty") {
    return;
  }
  const { source: authTokenSource } = getAuthTokenSource();
  const accountInfo = {};
  if (authTokenSource === "CLAUDE_CODE_OAUTH_TOKEN" || authTokenSource === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR") {
    accountInfo.tokenSource = authTokenSource;
  } else if (isClaudeAISubscriber()) {
    accountInfo.subscription = getSubscriptionName();
  } else {
    accountInfo.tokenSource = authTokenSource;
  }
  const { key: apiKey, source: apiKeySource } = getAnthropicApiKeyWithSource();
  if (apiKey) {
    accountInfo.apiKeySource = apiKeySource;
  }
  if (authTokenSource === "claude.ai" || apiKeySource === "/login managed key") {
    const orgName = getOauthAccountInfo()?.organizationName;
    if (orgName) {
      accountInfo.organization = orgName;
    }
  }
  const email = getOauthAccountInfo()?.emailAddress;
  if ((authTokenSource === "claude.ai" || apiKeySource === "/login managed key") && email) {
    accountInfo.email = email;
  }
  return accountInfo;
}
async function validateForceLoginOrg() {
  if (process.env.ANTHROPIC_UNIX_SOCKET) {
    return { valid: true };
  }
  if (!isAnthropicAuthEnabled()) {
    return { valid: true };
  }
  const requiredOrgUuid = getSettingsForSource("policySettings")?.forceLoginOrgUUID;
  if (!requiredOrgUuid) {
    return { valid: true };
  }
  await checkAndRefreshOAuthTokenIfNeeded();
  const tokens = getClaudeAIOAuthTokens();
  if (!tokens) {
    return { valid: true };
  }
  const { source } = getAuthTokenSource();
  const isEnvVarToken = source === "CLAUDE_CODE_OAUTH_TOKEN" || source === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
  const profile = await getOauthProfileFromOauthToken(tokens.accessToken);
  if (!profile) {
    return {
      valid: false,
      message: `Unable to verify organization for the current authentication token.
This machine requires organization ${requiredOrgUuid} but the profile could not be fetched.
This may be a network error, or the token may lack the user:profile scope required for
verification (tokens from 'claude setup-token' do not include this scope).
Try again, or obtain a full-scope token via 'claude auth login'.`
    };
  }
  const tokenOrgUuid = profile.organization.uuid;
  if (tokenOrgUuid === requiredOrgUuid) {
    return { valid: true };
  }
  if (isEnvVarToken) {
    const envVarName = source === "CLAUDE_CODE_OAUTH_TOKEN" ? "CLAUDE_CODE_OAUTH_TOKEN" : "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
    return {
      valid: false,
      message: `The ${envVarName} environment variable provides a token for a
different organization than required by this machine's managed settings.

Required organization: ${requiredOrgUuid}
Token organization:   ${tokenOrgUuid}

Remove the environment variable or obtain a token for the correct organization.`
    };
  }
  return {
    valid: false,
    message: `Your authentication token belongs to organization ${tokenOrgUuid},
but this machine requires organization ${requiredOrgUuid}.

Please log in with the correct organization: claude auth login`
  };
}
var DEFAULT_API_KEY_HELPER_TTL, _apiKeyHelperCache = null, _apiKeyHelperInflight = null, _apiKeyHelperEpoch = 0, DEFAULT_AWS_STS_TTL, AWS_AUTH_REFRESH_TIMEOUT_MS, refreshAndGetAwsCredentials, GCP_CREDENTIALS_CHECK_TIMEOUT_MS = 5000, DEFAULT_GCP_CREDENTIAL_TTL = 3600000, GCP_AUTH_REFRESH_TIMEOUT_MS = 180000, refreshGcpCredentialsIfNeeded, getApiKeyFromConfigOrMacOSKeychain, getClaudeAIOAuthTokens, lastCredentialsMtimeMs = 0, pending401Handlers, pendingRefreshCheck = null, cachedOtelHeaders = null, cachedOtelHeadersTimestamp = 0, DEFAULT_OTEL_HEADERS_DEBOUNCE_MS = 1740000, GcpCredentialsTimeoutError;
var init_auth2 = __esm(() => {
  init_source();
  init_execa();
  init_memoize();
  init_oauth();
  init_analytics();
  init_modelStrings();
  init_providers();
  init_state();
  init_mockRateLimits();
  init_client2();
  init_getOauthProfile();
  init_authFileDescriptor();
  init_authPortable();
  init_aws();
  init_awsAuthStatusManager();
  init_betas2();
  init_config();
  init_debug();
  init_envUtils();
  init_errors();
  init_execFileNoThrow();
  init_lockfile();
  init_log();
  init_memoize2();
  init_secureStorage();
  init_keychainPrefetch();
  init_macOsKeychainHelpers();
  init_settings2();
  init_sleep();
  init_slowOperations();
  init_toolSchemaCache();
  DEFAULT_API_KEY_HELPER_TTL = 5 * 60 * 1000;
  DEFAULT_AWS_STS_TTL = 60 * 60 * 1000;
  AWS_AUTH_REFRESH_TIMEOUT_MS = 3 * 60 * 1000;
  refreshAndGetAwsCredentials = memoizeWithTTLAsync(async () => {
    const refreshed2 = await runAwsAuthRefresh();
    const credentials = await getAwsCredsFromCredentialExport();
    if (refreshed2 || credentials) {
      await clearAwsIniCache();
    }
    return credentials;
  }, DEFAULT_AWS_STS_TTL);
  refreshGcpCredentialsIfNeeded = memoizeWithTTLAsync(async () => {
    const refreshed2 = await runGcpAuthRefresh();
    return refreshed2;
  }, DEFAULT_GCP_CREDENTIAL_TTL);
  getApiKeyFromConfigOrMacOSKeychain = memoize_default(() => {
    if (isBareMode())
      return null;
    if (process.platform === "darwin") {
      const prefetch = getLegacyApiKeyPrefetchResult();
      if (prefetch) {
        if (prefetch.stdout) {
          return { key: prefetch.stdout, source: "/login managed key" };
        }
      } else {
        const storageServiceName = getMacOsKeychainStorageServiceName();
        try {
          const result = execSyncWithDefaults_DEPRECATED(`security find-generic-password -a $USER -w -s "${storageServiceName}"`);
          if (result) {
            return { key: result, source: "/login managed key" };
          }
        } catch (e) {
          logError(e);
        }
      }
    }
    const config = getGlobalConfig();
    if (!config.primaryApiKey) {
      return null;
    }
    return { key: config.primaryApiKey, source: "/login managed key" };
  });
  getClaudeAIOAuthTokens = memoize_default(() => {
    if (isBareMode())
      return null;
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN) {
      return {
        accessToken: process.env.CLAUDE_CODE_OAUTH_TOKEN,
        refreshToken: null,
        expiresAt: null,
        scopes: ["user:inference"],
        subscriptionType: null,
        rateLimitTier: null
      };
    }
    const oauthTokenFromFd = getOAuthTokenFromFileDescriptor();
    if (oauthTokenFromFd) {
      return {
        accessToken: oauthTokenFromFd,
        refreshToken: null,
        expiresAt: null,
        scopes: ["user:inference"],
        subscriptionType: null,
        rateLimitTier: null
      };
    }
    try {
      const secureStorage = getSecureStorage();
      const storageData = secureStorage.read();
      const oauthData = storageData?.claudeAiOauth;
      if (!oauthData?.accessToken) {
        return null;
      }
      return oauthData;
    } catch (error) {
      logError(error);
      return null;
    }
  });
  pending401Handlers = new Map;
  GcpCredentialsTimeoutError = class GcpCredentialsTimeoutError extends Error {
  };
});

// src/services/oauth/client.ts
function shouldUseClaudeAIAuth(scopes) {
  return Boolean(scopes?.includes(CLAUDE_AI_INFERENCE_SCOPE));
}
function parseScopes(scopeString) {
  return scopeString?.split(" ").filter(Boolean) ?? [];
}
function buildAuthUrl({
  codeChallenge,
  state,
  port,
  isManual,
  loginWithClaudeAi,
  inferenceOnly,
  orgUUID,
  loginHint,
  loginMethod
}) {
  const authUrlBase = loginWithClaudeAi ? getOauthConfig().CLAUDE_AI_AUTHORIZE_URL : getOauthConfig().CONSOLE_AUTHORIZE_URL;
  const authUrl = new URL(authUrlBase);
  authUrl.searchParams.append("code", "true");
  authUrl.searchParams.append("client_id", getOauthConfig().CLIENT_ID);
  authUrl.searchParams.append("response_type", "code");
  authUrl.searchParams.append("redirect_uri", isManual ? getOauthConfig().MANUAL_REDIRECT_URL : `http://localhost:${port}/callback`);
  const scopesToUse = inferenceOnly ? [CLAUDE_AI_INFERENCE_SCOPE] : ALL_OAUTH_SCOPES;
  authUrl.searchParams.append("scope", scopesToUse.join(" "));
  authUrl.searchParams.append("code_challenge", codeChallenge);
  authUrl.searchParams.append("code_challenge_method", "S256");
  authUrl.searchParams.append("state", state);
  if (orgUUID) {
    authUrl.searchParams.append("orgUUID", orgUUID);
  }
  if (loginHint) {
    authUrl.searchParams.append("login_hint", loginHint);
  }
  if (loginMethod) {
    authUrl.searchParams.append("login_method", loginMethod);
  }
  return authUrl.toString();
}
async function exchangeCodeForTokens(authorizationCode, state, codeVerifier, port, useManualRedirect = false, expiresIn) {
  const requestBody = {
    grant_type: "authorization_code",
    code: authorizationCode,
    redirect_uri: useManualRedirect ? getOauthConfig().MANUAL_REDIRECT_URL : `http://localhost:${port}/callback`,
    client_id: getOauthConfig().CLIENT_ID,
    code_verifier: codeVerifier,
    state
  };
  if (expiresIn !== undefined) {
    requestBody.expires_in = expiresIn;
  }
  const response = await axios_default.post(getOauthConfig().TOKEN_URL, requestBody, {
    headers: { "Content-Type": "application/json" },
    timeout: 15000
  });
  if (response.status !== 200) {
    throw new Error(response.status === 401 ? "Authentication failed: Invalid authorization code" : `Token exchange failed (${response.status}): ${response.statusText}`);
  }
  logEvent("tengu_oauth_token_exchange_success", {});
  return response.data;
}
async function refreshOAuthToken(refreshToken, { scopes: requestedScopes } = {}) {
  const requestBody = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: getOauthConfig().CLIENT_ID,
    scope: ((requestedScopes?.length) ? requestedScopes : CLAUDE_AI_OAUTH_SCOPES).join(" ")
  };
  try {
    const response = await axios_default.post(getOauthConfig().TOKEN_URL, requestBody, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000
    });
    if (response.status !== 200) {
      throw new Error(`Token refresh failed: ${response.statusText}`);
    }
    const data = response.data;
    const {
      access_token: accessToken,
      refresh_token: newRefreshToken = refreshToken,
      expires_in: expiresIn
    } = data;
    const expiresAt = Date.now() + expiresIn * 1000;
    const scopes = parseScopes(data.scope);
    logEvent("tengu_oauth_token_refresh_success", {});
    const config = getGlobalConfig();
    const existing = getClaudeAIOAuthTokens();
    const haveProfileAlready = config.oauthAccount?.billingType !== undefined && config.oauthAccount?.accountCreatedAt !== undefined && config.oauthAccount?.subscriptionCreatedAt !== undefined && existing?.subscriptionType != null && existing?.rateLimitTier != null;
    const profileInfo = haveProfileAlready ? null : await fetchProfileInfo(accessToken);
    if (profileInfo && config.oauthAccount) {
      const updates = {};
      if (profileInfo.displayName !== undefined) {
        updates.displayName = profileInfo.displayName;
      }
      if (typeof profileInfo.hasExtraUsageEnabled === "boolean") {
        updates.hasExtraUsageEnabled = profileInfo.hasExtraUsageEnabled;
      }
      if (profileInfo.billingType !== null) {
        updates.billingType = profileInfo.billingType;
      }
      if (profileInfo.accountCreatedAt !== undefined) {
        updates.accountCreatedAt = profileInfo.accountCreatedAt;
      }
      if (profileInfo.subscriptionCreatedAt !== undefined) {
        updates.subscriptionCreatedAt = profileInfo.subscriptionCreatedAt;
      }
      if (Object.keys(updates).length > 0) {
        saveGlobalConfig((current) => ({
          ...current,
          oauthAccount: current.oauthAccount ? { ...current.oauthAccount, ...updates } : current.oauthAccount
        }));
      }
    }
    return {
      accessToken,
      refreshToken: newRefreshToken,
      expiresAt,
      scopes,
      subscriptionType: profileInfo?.subscriptionType ?? existing?.subscriptionType ?? null,
      rateLimitTier: profileInfo?.rateLimitTier ?? existing?.rateLimitTier ?? null,
      profile: profileInfo?.rawProfile,
      tokenAccount: data.account ? {
        uuid: data.account.uuid,
        emailAddress: data.account.email_address,
        organizationUuid: data.organization?.uuid
      } : undefined
    };
  } catch (error) {
    const responseBody = axios_default.isAxiosError(error) && error.response?.data ? JSON.stringify(error.response.data) : undefined;
    logEvent("tengu_oauth_token_refresh_failure", {
      error: error.message,
      ...responseBody && {
        responseBody
      }
    });
    throw error;
  }
}
async function fetchAndStoreUserRoles(accessToken) {
  const response = await axios_default.get(getOauthConfig().ROLES_URL, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  if (response.status !== 200) {
    throw new Error(`Failed to fetch user roles: ${response.statusText}`);
  }
  const data = response.data;
  const config = getGlobalConfig();
  if (!config.oauthAccount) {
    throw new Error("OAuth account information not found in config");
  }
  saveGlobalConfig((current) => ({
    ...current,
    oauthAccount: current.oauthAccount ? {
      ...current.oauthAccount,
      organizationRole: data.organization_role,
      workspaceRole: data.workspace_role,
      organizationName: data.organization_name
    } : current.oauthAccount
  }));
  logEvent("tengu_oauth_roles_stored", {
    org_role: data.organization_role
  });
}
async function createAndStoreApiKey(accessToken) {
  try {
    const response = await axios_default.post(getOauthConfig().API_KEY_URL, null, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const apiKey = response.data?.raw_key;
    if (apiKey) {
      await saveApiKey(apiKey);
      logEvent("tengu_oauth_api_key", {
        status: "success",
        statusCode: response.status
      });
      return apiKey;
    }
    return null;
  } catch (error) {
    logEvent("tengu_oauth_api_key", {
      status: "failure",
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}
function isOAuthTokenExpired(expiresAt) {
  if (expiresAt === null) {
    return false;
  }
  const bufferTime = 5 * 60 * 1000;
  const now = Date.now();
  const expiresWithBuffer = now + bufferTime;
  return expiresWithBuffer >= expiresAt;
}
async function fetchProfileInfo(accessToken) {
  const profile = await getOauthProfileFromOauthToken(accessToken);
  const orgType = profile?.organization?.organization_type;
  let subscriptionType = null;
  switch (orgType) {
    case "claude_max":
      subscriptionType = "max";
      break;
    case "claude_pro":
      subscriptionType = "pro";
      break;
    case "claude_enterprise":
      subscriptionType = "enterprise";
      break;
    case "claude_team":
      subscriptionType = "team";
      break;
    default:
      subscriptionType = null;
      break;
  }
  const result = {
    subscriptionType,
    rateLimitTier: profile?.organization?.rate_limit_tier ?? null,
    hasExtraUsageEnabled: profile?.organization?.has_extra_usage_enabled ?? null,
    billingType: profile?.organization?.billing_type ?? null
  };
  if (profile?.account?.display_name) {
    result.displayName = profile.account.display_name;
  }
  if (profile?.account?.created_at) {
    result.accountCreatedAt = profile.account.created_at;
  }
  if (profile?.organization?.subscription_created_at) {
    result.subscriptionCreatedAt = profile.organization.subscription_created_at;
  }
  logEvent("tengu_oauth_profile_fetch_success", {});
  return { ...result, rawProfile: profile };
}
async function getOrganizationUUID() {
  const globalConfig = getGlobalConfig();
  const orgUUID = globalConfig.oauthAccount?.organizationUuid;
  if (orgUUID) {
    return orgUUID;
  }
  const accessToken = getClaudeAIOAuthTokens()?.accessToken;
  if (accessToken === undefined || !hasProfileScope()) {
    return null;
  }
  const profile = await getOauthProfileFromOauthToken(accessToken);
  const profileOrgUUID = profile?.organization?.uuid;
  if (!profileOrgUUID) {
    return null;
  }
  return profileOrgUUID;
}
async function populateOAuthAccountInfoIfNeeded() {
  const envAccountUuid = process.env.CLAUDE_CODE_ACCOUNT_UUID;
  const envUserEmail = process.env.CLAUDE_CODE_USER_EMAIL;
  const envOrganizationUuid = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
  const hasEnvVars = Boolean(envAccountUuid && envUserEmail && envOrganizationUuid);
  if (envAccountUuid && envUserEmail && envOrganizationUuid) {
    if (!getGlobalConfig().oauthAccount) {
      storeOAuthAccountInfo({
        accountUuid: envAccountUuid,
        emailAddress: envUserEmail,
        organizationUuid: envOrganizationUuid
      });
    }
  }
  await checkAndRefreshOAuthTokenIfNeeded();
  const config = getGlobalConfig();
  if (config.oauthAccount && config.oauthAccount.billingType !== undefined && config.oauthAccount.accountCreatedAt !== undefined && config.oauthAccount.subscriptionCreatedAt !== undefined || !isClaudeAISubscriber() || !hasProfileScope()) {
    return false;
  }
  const tokens = getClaudeAIOAuthTokens();
  if (tokens?.accessToken) {
    const profile = await getOauthProfileFromOauthToken(tokens.accessToken);
    if (profile) {
      if (hasEnvVars) {
        logForDebugging("OAuth profile fetch succeeded, overriding env var account info", { level: "info" });
      }
      storeOAuthAccountInfo({
        accountUuid: profile.account.uuid,
        emailAddress: profile.account.email,
        organizationUuid: profile.organization.uuid,
        displayName: profile.account.display_name || undefined,
        hasExtraUsageEnabled: profile.organization.has_extra_usage_enabled ?? false,
        billingType: profile.organization.billing_type ?? undefined,
        accountCreatedAt: profile.account.created_at,
        subscriptionCreatedAt: profile.organization.subscription_created_at ?? undefined
      });
      return true;
    }
  }
  return false;
}
function storeOAuthAccountInfo({
  accountUuid,
  emailAddress,
  organizationUuid,
  displayName,
  hasExtraUsageEnabled,
  billingType,
  accountCreatedAt,
  subscriptionCreatedAt
}) {
  const accountInfo = {
    accountUuid,
    emailAddress,
    organizationUuid,
    hasExtraUsageEnabled,
    billingType,
    accountCreatedAt,
    subscriptionCreatedAt
  };
  if (displayName) {
    accountInfo.displayName = displayName;
  }
  saveGlobalConfig((current) => {
    if (current.oauthAccount?.accountUuid === accountInfo.accountUuid && current.oauthAccount?.emailAddress === accountInfo.emailAddress && current.oauthAccount?.organizationUuid === accountInfo.organizationUuid && current.oauthAccount?.displayName === accountInfo.displayName && current.oauthAccount?.hasExtraUsageEnabled === accountInfo.hasExtraUsageEnabled && current.oauthAccount?.billingType === accountInfo.billingType && current.oauthAccount?.accountCreatedAt === accountInfo.accountCreatedAt && current.oauthAccount?.subscriptionCreatedAt === accountInfo.subscriptionCreatedAt) {
      return current;
    }
    return { ...current, oauthAccount: accountInfo };
  });
}
var init_client2 = __esm(() => {
  init_axios();
  init_analytics();
  init_oauth();
  init_auth2();
  init_config();
  init_debug();
  init_getOauthProfile();
});

export { _baseAssignValue_default, init__baseAssignValue, _assignValue_default, init__assignValue, _copyObject_default, init__copyObject, keysIn_default, init_keysIn, _cloneBuffer_default, init__cloneBuffer, _copyArray_default, init__copyArray, _getSymbolsIn_default, init__getSymbolsIn, _getAllKeysIn_default, init__getAllKeysIn, _cloneArrayBuffer_default, init__cloneArrayBuffer, _cloneTypedArray_default, init__cloneTypedArray, _initCloneObject_default, init__initCloneObject, _baseSet_default, init__baseSet, pickBy_default, init_pickBy, isEqual_default, init_isEqual, init_lodash, Chalk, source_default, init_source, sequential, init_sequential, _baseFor_default, init__baseFor, isPlainObject_default, init_isPlainObject, _overRest_default, init__overRest, _setToString_default, init__setToString, detectEncodingForResolvedPath, readFileSyncWithMetadata, readFileSync, init_fileRead, setSessionCache, resetSyncCache, setEligibility, getSettingsPath, getRemoteManagedSettingsSyncFromCache, init_syncCacheState, pathExists, MAX_OUTPUT_SIZE, readFileSafe, getFileModificationTime, getFileModificationTimeAsync, writeTextContent, detectFileEncoding, detectLineEndings, convertLeadingTabsToSpaces, getDisplayPath, findSimilarFile, FILE_NOT_FOUND_CWD_NOTE, suggestPathUnderCwd, isCompactLinePrefixEnabled, addLineNumbers, stripLineNumberPrefix, isDirEmpty, readFileSyncCached, getDesktopPath, isFileWithinReadSizeLimit, normalizePathForComparison, pathsEqual, init_file, isPathGitignored, init_gitignore, SETTING_SOURCES, getSettingSourceName, getSourceDisplayName, getSettingSourceDisplayNameLowercase, getSettingSourceDisplayNameCapitalized, parseSettingSourcesFlag, getEnabledSettingSources, isSettingSourceEnabled, SOURCES, init_constants2 as init_constants, consumeInternalWrite, clearInternalWrites, init_internalWrites, getManagedFilePath, getManagedSettingsDropInDir, init_managedPath, BLACK_CIRCLE, TEARDROP_ASTERISK, UP_ARROW, DOWN_ARROW, LIGHTNING_BOLT, EFFORT_LOW, EFFORT_MEDIUM, EFFORT_HIGH, EFFORT_MAX, REFRESH_ARROW, DIAMOND_OPEN, DIAMOND_FILLED, REFERENCE_MARK, BLOCKQUOTE_BAR, BRIDGE_READY_INDICATOR, BRIDGE_FAILED_INDICATOR, init_figures, EXTERNAL_PERMISSION_MODES, PERMISSION_MODES, init_permissions, permissionModeSchema, externalPermissionModeSchema, isExternalPermissionMode, toExternalPermissionMode, permissionModeFromString, permissionModeTitle, isDefaultMode, permissionModeSymbol, getModeColor, init_PermissionMode, HOOK_EVENTS, init_coreTypes, init_agentSdkTypes, DEFAULT_HOOK_SHELL, init_shellProvider, HooksSchema, ALLOWED_OFFICIAL_MARKETPLACE_NAMES, isMarketplaceAutoUpdate, validateOfficialNameSource, PluginHooksSchema, LspServerConfigSchema, PluginManifestSchema, isLocalPluginSource, isLocalMarketplaceSource, PluginMarketplaceEntrySchema, PluginMarketplaceSchema, PluginIdSchema, InstalledPluginsFileSchemaV1, InstalledPluginsFileSchemaV2, KnownMarketplacesFileSchema, init_schemas, mcpInfoFromString, getMcpPrefix, buildMcpToolName, getToolNameForPermissionCheck, getMcpDisplayName, extractMcpToolDisplayName, init_mcpStringUtils, AGENT_TOOL_NAME, LEGACY_AGENT_TOOL_NAME, VERIFICATION_AGENT_TYPE, ONE_SHOT_BUILTIN_AGENT_TYPES, init_constants3 as init_constants1, TASK_OUTPUT_TOOL_NAME, init_constants4 as init_constants2, TASK_STOP_TOOL_NAME, DESCRIPTION, init_prompt, normalizeLegacyToolName, getLegacyToolNames, permissionRuleValueFromString, permissionRuleValueToString, init_permissionRuleParser, escapeRegExp, capitalize, plural, firstLineOf, countCharInString, normalizeFullWidthDigits, normalizeFullWidthSpace, safeJoinLines, EndTruncatingAccumulator, truncateToLines, init_stringUtils, CUSTOMIZATION_SURFACES, SettingsSchema, isMcpServerNameEntry, isMcpServerCommandEntry, isMcpServerUrlEntry, init_types2 as init_types, validateSettingsFileContent, init_validation, startMdmRawRead, init_rawRead, ensureMdmSettingsLoaded, getMdmSettings, getHkcuSettings, setMdmSettingsCache, refreshMdmSettings, init_settings, getManagedFileSettingsPresence, parseSettingsFile, getSettingsRootPathForSource, getSettingsFilePathForSource, getRelativeSettingsFilePathForSource, getSettingsForSource, getPolicySettingsOrigin, updateSettingsForSource, getManagedSettingsKeysForLogging, getInitialSettings, getSettings_DEPRECATED, getSettingsWithSources, getSettingsWithErrors, hasSkipDangerousModePermissionPrompt, hasAutoModeOptIn, rawSettingsContainsKey, init_settings2 as init_settings1, createBedrockRuntimeClient, getInferenceProfileBackingModel, isFoundationModel, getBedrockRegionPrefix, applyBedrockRegionPrefix, init_bedrock, CLAUDE_OPUS_4_6_CONFIG, ALL_MODEL_CONFIGS, init_configs, getModelStrings2 as getModelStrings, ensureModelStringsInitialized, init_modelStrings, hasConsoleBillingAccess, hasClaudeAiBillingAccess, init_billing, applyMockHeaders, shouldProcessMockLimits, init_mockRateLimits, getOauthProfileFromApiKey, getOauthProfileFromOauthToken, init_getOauthProfile, shouldUseClaudeAIAuth, parseScopes, buildAuthUrl, exchangeCodeForTokens, refreshOAuthToken, fetchAndStoreUserRoles, createAndStoreApiKey, isOAuthTokenExpired, fetchProfileInfo, getOrganizationUUID, populateOAuthAccountInfoIfNeeded, storeOAuthAccountInfo, init_client2 as init_client, CCR_SESSION_INGRESS_TOKEN_PATH, maybePersistTokenForSubprocesses, readTokenFromWellKnownFile, init_authFileDescriptor, clearKeychainCache, init_macOsKeychainHelpers, normalizeApiKeyForConfig, init_authPortable, isAwsCredentialsProviderError, init_aws, AwsAuthStatusManager, init_awsAuthStatusManager, CONTEXT_1M_BETA_HEADER, CONTEXT_MANAGEMENT_BETA_HEADER, STRUCTURED_OUTPUTS_BETA_HEADER, EFFORT_BETA_HEADER, TASK_BUDGETS_BETA_HEADER, PROMPT_CACHING_SCOPE_BETA_HEADER, FAST_MODE_BETA_HEADER, REDACT_THINKING_BETA_HEADER, AFK_MODE_BETA_HEADER, ADVISOR_BETA_HEADER, VERTEX_COUNT_TOKENS_ALLOWED_BETAS, init_betas, isFastModeEnabled, isFastModeAvailable, getFastModeUnavailableReason, FAST_MODE_MODEL_DISPLAY, getFastModeModel, getInitialFastModeSetting, isFastModeSupportedByModel, onCooldownTriggered, onCooldownExpired, getFastModeRuntimeState, triggerFastModeCooldown, clearFastModeCooldown, handleFastModeRejectedByAPI, onFastModeOverageRejection, handleFastModeOverageRejection, isFastModeCooldown, getFastModeState, onOrgFastModeChanged, resolveFastModeStatusFromCache, prefetchFastModeStatus, init_fastMode, COST_TIER_3_15, COST_HAIKU_35, COST_HAIKU_45, getOpus46CostTier, MODEL_COSTS, calculateUSDCost, formatModelPricing, init_modelCost, MODEL_ALIASES, init_aliases, isModelAllowed, init_modelAllowlist, getSmallFastModel, isNonCustomOpusModel, getUserSpecifiedModelSetting, getMainLoopModel, getBestModel, getDefaultOpusModel, getDefaultSonnetModel, getDefaultHaikuModel, getRuntimeMainLoopModel, getDefaultMainLoopModelSetting, getDefaultMainLoopModel, firstPartyNameToCanonical, getCanonicalName, getClaudeAiUserDefaultModelDescription, renderDefaultModelSetting, getOpus46PricingSuffix, isOpus1mMergeEnabled, renderModelSetting, getPublicModelDisplayName, renderModelName, getPublicModelName, parseUserSpecifiedModel, resolveSkillModelOverride, isLegacyModelRemapEnabled, modelDisplayString, getMarketingNameForModel, normalizeModelStringForAPI, init_model, getAnthropicClient, CLIENT_REQUEST_ID_HEADER, init_client as init_client1, refreshModelCapabilities, init_modelCapabilities, COMPACT_MAX_OUTPUT_TOKENS, CAPPED_DEFAULT_MAX_TOKENS, ESCALATED_MAX_TOKENS, is1mContextDisabled, has1mContext, getContextWindowForModel, getSonnet1mExpTreatmentEnabled, calculateContextPercentages, getModelMaxOutputTokens, getMaxThinkingTokensForModel, init_context, get3PModelCapabilityOverride, init_modelSupportOverrides, filterAllowedSdkBetas, modelSupportsStructuredOutputs, modelSupportsAutoMode, getToolSearchBetaHeader, shouldIncludeFirstPartyOnlyBetas, shouldUseGlobalCacheScope, getModelBetas, getBedrockExtraBodyParamsBetas, getMergedBetas, clearBetasCaches, init_betas2 as init_betas1, isMacOsKeychainLocked, init_macOsKeychainStorage, getSecureStorage, init_secureStorage, startKeychainPrefetch, ensureKeychainPrefetchCompleted, init_keychainPrefetch, sleep, init_sleep, getToolSchemaCache, clearToolSchemaCache, init_toolSchemaCache, isAnthropicAuthEnabled, getAuthTokenSource, getAnthropicApiKey, hasAnthropicApiKeyAuth, getAnthropicApiKeyWithSource, getConfiguredApiKeyHelper, isAwsAuthRefreshFromProjectSettings, isAwsCredentialExportFromProjectSettings, calculateApiKeyHelperTTL, getApiKeyHelperElapsedMs, getApiKeyFromApiKeyHelper, getApiKeyFromApiKeyHelperCached, clearApiKeyHelperCache, prefetchApiKeyFromApiKeyHelperIfSafe, refreshAwsAuth, refreshAndGetAwsCredentials, clearAwsCredentialsCache, isGcpAuthRefreshFromProjectSettings, checkGcpCredentialsValid, refreshGcpAuth, refreshGcpCredentialsIfNeeded, clearGcpCredentialsCache, prefetchGcpCredentialsIfSafe, prefetchAwsCredentialsAndBedRockInfoIfSafe, getApiKeyFromConfigOrMacOSKeychain, saveApiKey, isCustomApiKeyApproved, removeApiKey, saveOAuthTokensIfNeeded, getClaudeAIOAuthTokens, clearOAuthTokenCache, handleOAuth401Error, getClaudeAIOAuthTokensAsync, checkAndRefreshOAuthTokenIfNeeded, isClaudeAISubscriber, hasProfileScope, is1PApiCustomer, getOauthAccountInfo, isOverageProvisioningAllowed, hasOpusAccess, getSubscriptionType, isMaxSubscriber, isTeamSubscriber, isTeamPremiumSubscriber, isEnterpriseSubscriber, isProSubscriber, getRateLimitTier, getSubscriptionName, isUsing3PServices, isOtelHeadersHelperFromProjectOrLocalSettings, getOtelHeadersFromHelper, isConsumerSubscriber, getAccountInformation, validateForceLoginOrg, exports_auth, init_auth2 as init_auth, getClaudeCodeUserAgent, init_userAgent, getWorkload, runWithWorkload, init_workloadContext, getUserAgent, getMCPUserAgent, getWebFetchUserAgent, getAuthHeaders, withOAuth401Retry, init_http, initUser, resetUserCache, getGitEmail, init_user, require_src2 as require_src, envDetector, hostDetector, osDetector, resourceFromAttributes, init_esm3 as init_esm, logs, init_esm4 as init_esm1, suppressTracing, isTracingSuppressed, W3CBaggagePropagator, sanitizeAttributes, isAttributeValue, globalErrorHandler, TracesSamplerValues, DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT, DEFAULT_ATTRIBUTE_COUNT_LIMIT, getEnv, getEnvWithoutDefaults, otperformance2 as otperformance, SDK_INFO2 as SDK_INFO, unrefTimer, millisToHrTime, getTimeOrigin, hrTime, hrTimeDuration, hrTimeToMicroseconds, isTimeInputHrTime, isTimeInput, addHrTimes, ExportResultCode, CompositePropagator, W3CTraceContextPropagator, merge, BindOnceFuture, internal, init_esm5 as init_esm2, LoggerProvider, ConsoleLogRecordExporter, BatchLogRecordProcessor, init_esm7 as init_esm3, isAnalyticsDisabled, isFeedbackSurveyDisabled, init_config3 as init_config, isProcessRunning, getAncestorPidsAsync, getProcessCommand, init_genericProcessUtils, initJetBrainsDetection, envDynamic, init_envDynamic, prefetchOfficialMcpUrls, init_officialRegistry, isAgentSwarmsEnabled, init_agentSwarmsEnabled, getAgentContext, runWithAgentContext, getSubagentLogName, consumeInvokingRequestId, init_agentContext, sanitizeToolNameForAnalytics, isToolDetailsLoggingEnabled, mcpToolDetailsForAnalytics, extractMcpToolDetails, extractSkillName, extractToolInputForTelemetry, getFileExtensionForAnalytics, getFileExtensionsFromBashCommand, getEventMetadata, init_metadata, isSinkKilled, init_sinkKillswitch, getEventSamplingConfig, shouldSampleEvent, shutdown1PEventLogging, is1PEventLoggingEnabled, logEventTo1P, logGrowthBookExperimentTo1P, initialize1PEventLogging, reinitialize1PEventLoggingIfConfigChanged, init_firstPartyEventLogger, onGrowthBookRefresh, hasGrowthBookEnvOverride, getAllGrowthBookFeatures, getGrowthBookConfigOverrides, setGrowthBookConfigOverride, clearGrowthBookConfigOverrides, getApiBaseUrlHost, initializeGrowthBook, getFeatureValue_DEPRECATED, getFeatureValue_CACHED_MAY_BE_STALE, getFeatureValue_CACHED_WITH_REFRESH, checkStatsigFeatureGate_CACHED_MAY_BE_STALE, checkSecurityRestrictionGate, checkGate_CACHED_OR_BLOCKING, refreshGrowthBookAfterAuthChange, resetGrowthBook, refreshGrowthBookFeatures, setupPeriodicGrowthBookRefresh, stopPeriodicGrowthBookRefresh, getDynamicConfig_BLOCKS_ON_INIT, getDynamicConfig_CACHED_MAY_BE_STALE, init_growthbook, isAutoMemoryEnabled, getMemoryBaseDir, hasAutoMemPathOverride, getAutoMemPath, getAutoMemEntrypoint, isAutoMemPath, init_paths, NOTIFICATION_CHANNELS, EDITOR_MODES, TEAMMATE_MODES, init_configConstants, DEFAULT_GLOBAL_CONFIG, GLOBAL_CONFIG_KEYS, isGlobalConfigKey, PROJECT_CONFIG_KEYS, resetTrustDialogAcceptedCacheForTesting, checkHasTrustDialogAccepted, isPathTrusted, isProjectConfigKey, saveGlobalConfig, getGlobalConfigWriteCount, CONFIG_WRITE_DISPLAY_THRESHOLD, getGlobalConfig, getRemoteControlAtStartup, getCustomApiKeyStatus, enableConfigs, getProjectPathForConfig, getCurrentProjectConfig, saveCurrentProjectConfig, isAutoUpdaterDisabled, shouldSkipPluginAutoupdate, formatAutoUpdaterDisabledReason, getAutoUpdaterDisabledReason, getOrCreateUserID, recordFirstStartTime, getMemoryPath, getManagedClaudeRulesDir, getUserClaudeRulesDir, _getConfigForTesting, _wouldLoseAuthStateForTesting, _setGlobalConfigCacheForTesting, init_config as init_config1 };
