// @bun
import {
  endInteractionSpan,
  init_betaSessionTracing,
  init_perfettoTracing,
  init_sessionTracing,
  initializePerfettoTracing,
  isBetaTracingEnabled,
  isEnhancedTelemetryEnabled
} from "./chunk-zta4dxph.js";
import {
  BatchLogRecordProcessor,
  BindOnceFuture,
  CompositePropagator,
  ConsoleLogRecordExporter,
  DEFAULT_ATTRIBUTE_COUNT_LIMIT,
  DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
  ExportResultCode,
  LoggerProvider,
  SDK_INFO,
  TracesSamplerValues,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
  addHrTimes,
  checkHasTrustDialogAccepted,
  envDetector,
  getAuthHeaders,
  getClaudeCodeUserAgent,
  getEnv,
  getEnvWithoutDefaults,
  getGlobalConfig,
  getOtelHeadersFromHelper,
  getSettings_DEPRECATED,
  getSubscriptionType,
  getTimeOrigin,
  globalErrorHandler,
  hasProfileScope,
  hostDetector,
  hrTime,
  hrTimeDuration,
  hrTimeToMicroseconds,
  init_auth,
  init_config1 as init_config,
  init_esm,
  init_esm1 as init_esm2,
  init_esm2 as init_esm3,
  init_esm3 as init_esm4,
  init_http,
  init_settings1 as init_settings,
  init_userAgent,
  internal,
  is1PApiCustomer,
  isAttributeValue,
  isClaudeAISubscriber,
  isTimeInput,
  isTimeInputHrTime,
  isTracingSuppressed,
  logs,
  merge,
  millisToHrTime,
  osDetector,
  otperformance,
  require_src as require_src2,
  resourceFromAttributes,
  sanitizeAttributes,
  saveGlobalConfig,
  suppressTracing,
  unrefTimer,
  withOAuth401Retry
} from "./chunk-0ybjyybr.js";
import"./chunk-acq8papb.js";
import"./chunk-k5yw79cx.js";
import"./chunk-5ajamnkb.js";
import {
  getCACertificates,
  getMTLSConfig,
  getProxyUrl,
  init_caCerts,
  init_mtls,
  init_proxy,
  shouldBypassProxy
} from "./chunk-4jqh9cde.js";
import"./chunk-xswm8fjv.js";
import"./chunk-r1gancj0.js";
import"./chunk-k5hep4qq.js";
import"./chunk-3c25bcsw.js";
import {
  getPlatform,
  getWslVersion,
  init_platform
} from "./chunk-63kzvq55.js";
import"./chunk-64c1avct.js";
import"./chunk-ypnebnty.js";
import"./chunk-egb62rk0.js";
import {
  init_startupProfiler,
  profileCheckpoint
} from "./chunk-wsj9bqwr.js";
import"./chunk-cdz5yb0r.js";
import"./chunk-paapvyzx.js";
import"./chunk-g1f9xvnd.js";
import {
  init_memoize,
  memoizeWithTTLAsync
} from "./chunk-202de3fk.js";
import"./chunk-vv49ky54.js";
import"./chunk-0hpnqvkf.js";
import"./chunk-hp13emx6.js";
import"./chunk-hhkbd8h1.js";
import {
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-rqbfd2rb.js";
import"./chunk-8tnsngw2.js";
import"./chunk-ya62xx2m.js";
import {
  errorMessage,
  getHasFormattedOutput,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup,
  toError
} from "./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-h3gry12w.js";
import {
  getIsNonInteractiveSession,
  getLoggerProvider,
  getMeterProvider,
  getTracerProvider,
  init_state,
  setEventLogger,
  setLoggerProvider,
  setMeterProvider,
  setTracerProvider
} from "./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import {
  axios_default,
  init_axios
} from "./chunk-3wk0tdmp.js";
import {
  require_dist
} from "./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import {
  require_src
} from "./chunk-64q1p7wf.js";
import {
  __commonJS,
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/AggregationTemporality.js
var AggregationTemporality;
var init_AggregationTemporality = __esm(() => {
  (function(AggregationTemporality2) {
    AggregationTemporality2[AggregationTemporality2["DELTA"] = 0] = "DELTA";
    AggregationTemporality2[AggregationTemporality2["CUMULATIVE"] = 1] = "CUMULATIVE";
  })(AggregationTemporality || (AggregationTemporality = {}));
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/utils.js
function isNotNullish(item) {
  return item !== undefined && item !== null;
}
function hashAttributes(attributes) {
  var keys = Object.keys(attributes);
  if (keys.length === 0)
    return "";
  keys = keys.sort();
  return JSON.stringify(keys.map(function(key) {
    return [key, attributes[key]];
  }));
}
function instrumentationScopeId(instrumentationScope) {
  var _a, _b;
  return instrumentationScope.name + ":" + ((_a = instrumentationScope.version) !== null && _a !== undefined ? _a : "") + ":" + ((_b = instrumentationScope.schemaUrl) !== null && _b !== undefined ? _b : "");
}
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
function PromiseAllSettled(promises) {
  return __awaiter(this, undefined, undefined, function() {
    var _this = this;
    return __generator(this, function(_a) {
      return [2, Promise.all(promises.map(function(p) {
        return __awaiter(_this, undefined, undefined, function() {
          var ret, e_1;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 2, , 3]);
                return [4, p];
              case 1:
                ret = _a2.sent();
                return [2, {
                  status: "fulfilled",
                  value: ret
                }];
              case 2:
                e_1 = _a2.sent();
                return [2, {
                  status: "rejected",
                  reason: e_1
                }];
              case 3:
                return [2];
            }
          });
        });
      }))];
    });
  });
}
function isPromiseAllSettledRejectionResult(it) {
  return it.status === "rejected";
}
function FlatMap(arr, fn) {
  var result = [];
  arr.forEach(function(it) {
    result.push.apply(result, __spreadArray([], __read(fn(it)), false));
  });
  return result;
}
function setEquals(lhs, rhs) {
  var e_2, _a;
  if (lhs.size !== rhs.size) {
    return false;
  }
  try {
    for (var lhs_1 = __values(lhs), lhs_1_1 = lhs_1.next();!lhs_1_1.done; lhs_1_1 = lhs_1.next()) {
      var item = lhs_1_1.value;
      if (!rhs.has(item)) {
        return false;
      }
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (lhs_1_1 && !lhs_1_1.done && (_a = lhs_1.return))
        _a.call(lhs_1);
    } finally {
      if (e_2)
        throw e_2.error;
    }
  }
  return true;
}
function binarySearchUB(arr, value) {
  var lo = 0;
  var hi = arr.length - 1;
  var ret = arr.length;
  while (hi >= lo) {
    var mid = lo + Math.trunc((hi - lo) / 2);
    if (arr[mid] < value) {
      lo = mid + 1;
    } else {
      ret = mid;
      hi = mid - 1;
    }
  }
  return ret;
}
function equalsCaseInsensitive(lhs, rhs) {
  return lhs.toLowerCase() === rhs.toLowerCase();
}
var __extends, __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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
}, __read = function(o, n) {
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
}, __values = function(o) {
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
}, TimeoutError;
var init_utils = __esm(() => {
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

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/types.js
var AggregatorKind;
var init_types = __esm(() => {
  (function(AggregatorKind2) {
    AggregatorKind2[AggregatorKind2["DROP"] = 0] = "DROP";
    AggregatorKind2[AggregatorKind2["SUM"] = 1] = "SUM";
    AggregatorKind2[AggregatorKind2["LAST_VALUE"] = 2] = "LAST_VALUE";
    AggregatorKind2[AggregatorKind2["HISTOGRAM"] = 3] = "HISTOGRAM";
    AggregatorKind2[AggregatorKind2["EXPONENTIAL_HISTOGRAM"] = 4] = "EXPONENTIAL_HISTOGRAM";
  })(AggregatorKind || (AggregatorKind = {}));
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Drop.js
var DropAggregator;
var init_Drop = __esm(() => {
  init_types();
  DropAggregator = function() {
    function DropAggregator2() {
      this.kind = AggregatorKind.DROP;
    }
    DropAggregator2.prototype.createAccumulation = function() {
      return;
    };
    DropAggregator2.prototype.merge = function(_previous, _delta) {
      return;
    };
    DropAggregator2.prototype.diff = function(_previous, _current) {
      return;
    };
    DropAggregator2.prototype.toMetricData = function(_descriptor, _aggregationTemporality, _accumulationByAttributes, _endTime) {
      return;
    };
    return DropAggregator2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/MetricData.js
var DataPointType;
var init_MetricData = __esm(() => {
  (function(DataPointType2) {
    DataPointType2[DataPointType2["HISTOGRAM"] = 0] = "HISTOGRAM";
    DataPointType2[DataPointType2["EXPONENTIAL_HISTOGRAM"] = 1] = "EXPONENTIAL_HISTOGRAM";
    DataPointType2[DataPointType2["GAUGE"] = 2] = "GAUGE";
    DataPointType2[DataPointType2["SUM"] = 3] = "SUM";
  })(DataPointType || (DataPointType = {}));
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/InstrumentDescriptor.js
function createInstrumentDescriptor(name, type, options) {
  var _a, _b, _c, _d;
  if (!isValidName(name)) {
    import_api.diag.warn('Invalid metric name: "' + name + '". The metric name should be a ASCII string with a length no greater than 255 characters.');
  }
  return {
    name,
    type,
    description: (_a = options === null || options === undefined ? undefined : options.description) !== null && _a !== undefined ? _a : "",
    unit: (_b = options === null || options === undefined ? undefined : options.unit) !== null && _b !== undefined ? _b : "",
    valueType: (_c = options === null || options === undefined ? undefined : options.valueType) !== null && _c !== undefined ? _c : import_api.ValueType.DOUBLE,
    advice: (_d = options === null || options === undefined ? undefined : options.advice) !== null && _d !== undefined ? _d : {}
  };
}
function createInstrumentDescriptorWithView(view, instrument) {
  var _a, _b;
  return {
    name: (_a = view.name) !== null && _a !== undefined ? _a : instrument.name,
    description: (_b = view.description) !== null && _b !== undefined ? _b : instrument.description,
    type: instrument.type,
    unit: instrument.unit,
    valueType: instrument.valueType,
    advice: instrument.advice
  };
}
function isDescriptorCompatibleWith(descriptor, otherDescriptor) {
  return equalsCaseInsensitive(descriptor.name, otherDescriptor.name) && descriptor.unit === otherDescriptor.unit && descriptor.type === otherDescriptor.type && descriptor.valueType === otherDescriptor.valueType;
}
function isValidName(name) {
  return name.match(NAME_REGEXP) != null;
}
var import_api, InstrumentType, NAME_REGEXP;
var init_InstrumentDescriptor = __esm(() => {
  init_utils();
  import_api = __toESM(require_src(), 1);
  (function(InstrumentType2) {
    InstrumentType2["COUNTER"] = "COUNTER";
    InstrumentType2["GAUGE"] = "GAUGE";
    InstrumentType2["HISTOGRAM"] = "HISTOGRAM";
    InstrumentType2["UP_DOWN_COUNTER"] = "UP_DOWN_COUNTER";
    InstrumentType2["OBSERVABLE_COUNTER"] = "OBSERVABLE_COUNTER";
    InstrumentType2["OBSERVABLE_GAUGE"] = "OBSERVABLE_GAUGE";
    InstrumentType2["OBSERVABLE_UP_DOWN_COUNTER"] = "OBSERVABLE_UP_DOWN_COUNTER";
  })(InstrumentType || (InstrumentType = {}));
  NAME_REGEXP = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Histogram.js
function createNewEmptyCheckpoint(boundaries) {
  var counts = boundaries.map(function() {
    return 0;
  });
  counts.push(0);
  return {
    buckets: {
      boundaries,
      counts
    },
    sum: 0,
    count: 0,
    hasMinMax: false,
    min: Infinity,
    max: -Infinity
  };
}
var __read2 = function(o, n) {
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
}, HistogramAccumulation, HistogramAggregator;
var init_Histogram = __esm(() => {
  init_types();
  init_MetricData();
  init_InstrumentDescriptor();
  init_utils();
  HistogramAccumulation = function() {
    function HistogramAccumulation2(startTime, _boundaries, _recordMinMax, _current) {
      if (_recordMinMax === undefined) {
        _recordMinMax = true;
      }
      if (_current === undefined) {
        _current = createNewEmptyCheckpoint(_boundaries);
      }
      this.startTime = startTime;
      this._boundaries = _boundaries;
      this._recordMinMax = _recordMinMax;
      this._current = _current;
    }
    HistogramAccumulation2.prototype.record = function(value) {
      if (Number.isNaN(value)) {
        return;
      }
      this._current.count += 1;
      this._current.sum += value;
      if (this._recordMinMax) {
        this._current.min = Math.min(value, this._current.min);
        this._current.max = Math.max(value, this._current.max);
        this._current.hasMinMax = true;
      }
      var idx = binarySearchUB(this._boundaries, value);
      this._current.buckets.counts[idx] += 1;
    };
    HistogramAccumulation2.prototype.setStartTime = function(startTime) {
      this.startTime = startTime;
    };
    HistogramAccumulation2.prototype.toPointValue = function() {
      return this._current;
    };
    return HistogramAccumulation2;
  }();
  HistogramAggregator = function() {
    function HistogramAggregator2(_boundaries, _recordMinMax) {
      this._boundaries = _boundaries;
      this._recordMinMax = _recordMinMax;
      this.kind = AggregatorKind.HISTOGRAM;
    }
    HistogramAggregator2.prototype.createAccumulation = function(startTime) {
      return new HistogramAccumulation(startTime, this._boundaries, this._recordMinMax);
    };
    HistogramAggregator2.prototype.merge = function(previous, delta) {
      var previousValue = previous.toPointValue();
      var deltaValue = delta.toPointValue();
      var previousCounts = previousValue.buckets.counts;
      var deltaCounts = deltaValue.buckets.counts;
      var mergedCounts = new Array(previousCounts.length);
      for (var idx = 0;idx < previousCounts.length; idx++) {
        mergedCounts[idx] = previousCounts[idx] + deltaCounts[idx];
      }
      var min = Infinity;
      var max = -Infinity;
      if (this._recordMinMax) {
        if (previousValue.hasMinMax && deltaValue.hasMinMax) {
          min = Math.min(previousValue.min, deltaValue.min);
          max = Math.max(previousValue.max, deltaValue.max);
        } else if (previousValue.hasMinMax) {
          min = previousValue.min;
          max = previousValue.max;
        } else if (deltaValue.hasMinMax) {
          min = deltaValue.min;
          max = deltaValue.max;
        }
      }
      return new HistogramAccumulation(previous.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: previousValue.buckets.boundaries,
          counts: mergedCounts
        },
        count: previousValue.count + deltaValue.count,
        sum: previousValue.sum + deltaValue.sum,
        hasMinMax: this._recordMinMax && (previousValue.hasMinMax || deltaValue.hasMinMax),
        min,
        max
      });
    };
    HistogramAggregator2.prototype.diff = function(previous, current) {
      var previousValue = previous.toPointValue();
      var currentValue = current.toPointValue();
      var previousCounts = previousValue.buckets.counts;
      var currentCounts = currentValue.buckets.counts;
      var diffedCounts = new Array(previousCounts.length);
      for (var idx = 0;idx < previousCounts.length; idx++) {
        diffedCounts[idx] = currentCounts[idx] - previousCounts[idx];
      }
      return new HistogramAccumulation(current.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: previousValue.buckets.boundaries,
          counts: diffedCounts
        },
        count: currentValue.count - previousValue.count,
        sum: currentValue.sum - previousValue.sum,
        hasMinMax: false,
        min: Infinity,
        max: -Infinity
      });
    };
    HistogramAggregator2.prototype.toMetricData = function(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: DataPointType.HISTOGRAM,
        dataPoints: accumulationByAttributes.map(function(_a) {
          var _b = __read2(_a, 2), attributes = _b[0], accumulation = _b[1];
          var pointValue = accumulation.toPointValue();
          var allowsNegativeValues = descriptor.type === InstrumentType.GAUGE || descriptor.type === InstrumentType.UP_DOWN_COUNTER || descriptor.type === InstrumentType.OBSERVABLE_GAUGE || descriptor.type === InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: {
              min: pointValue.hasMinMax ? pointValue.min : undefined,
              max: pointValue.hasMinMax ? pointValue.max : undefined,
              sum: !allowsNegativeValues ? pointValue.sum : undefined,
              buckets: pointValue.buckets,
              count: pointValue.count
            }
          };
        })
      };
    };
    return HistogramAggregator2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/Buckets.js
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
}, __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, Buckets, BucketsBacking;
var init_Buckets = __esm(() => {
  Buckets = function() {
    function Buckets2(backing, indexBase, indexStart, indexEnd) {
      if (backing === undefined) {
        backing = new BucketsBacking;
      }
      if (indexBase === undefined) {
        indexBase = 0;
      }
      if (indexStart === undefined) {
        indexStart = 0;
      }
      if (indexEnd === undefined) {
        indexEnd = 0;
      }
      this.backing = backing;
      this.indexBase = indexBase;
      this.indexStart = indexStart;
      this.indexEnd = indexEnd;
    }
    Object.defineProperty(Buckets2.prototype, "offset", {
      get: function() {
        return this.indexStart;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Buckets2.prototype, "length", {
      get: function() {
        if (this.backing.length === 0) {
          return 0;
        }
        if (this.indexEnd === this.indexStart && this.at(0) === 0) {
          return 0;
        }
        return this.indexEnd - this.indexStart + 1;
      },
      enumerable: false,
      configurable: true
    });
    Buckets2.prototype.counts = function() {
      var _this = this;
      return Array.from({ length: this.length }, function(_, i) {
        return _this.at(i);
      });
    };
    Buckets2.prototype.at = function(position) {
      var bias = this.indexBase - this.indexStart;
      if (position < bias) {
        position += this.backing.length;
      }
      position -= bias;
      return this.backing.countAt(position);
    };
    Buckets2.prototype.incrementBucket = function(bucketIndex, increment) {
      this.backing.increment(bucketIndex, increment);
    };
    Buckets2.prototype.decrementBucket = function(bucketIndex, decrement) {
      this.backing.decrement(bucketIndex, decrement);
    };
    Buckets2.prototype.trim = function() {
      for (var i = 0;i < this.length; i++) {
        if (this.at(i) !== 0) {
          this.indexStart += i;
          break;
        } else if (i === this.length - 1) {
          this.indexStart = this.indexEnd = this.indexBase = 0;
          return;
        }
      }
      for (var i = this.length - 1;i >= 0; i--) {
        if (this.at(i) !== 0) {
          this.indexEnd -= this.length - i - 1;
          break;
        }
      }
      this._rotate();
    };
    Buckets2.prototype.downscale = function(by) {
      this._rotate();
      var size = 1 + this.indexEnd - this.indexStart;
      var each = 1 << by;
      var inpos = 0;
      var outpos = 0;
      for (var pos = this.indexStart;pos <= this.indexEnd; ) {
        var mod = pos % each;
        if (mod < 0) {
          mod += each;
        }
        for (var i = mod;i < each && inpos < size; i++) {
          this._relocateBucket(outpos, inpos);
          inpos++;
          pos++;
        }
        outpos++;
      }
      this.indexStart >>= by;
      this.indexEnd >>= by;
      this.indexBase = this.indexStart;
    };
    Buckets2.prototype.clone = function() {
      return new Buckets2(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
    };
    Buckets2.prototype._rotate = function() {
      var bias = this.indexBase - this.indexStart;
      if (bias === 0) {
        return;
      } else if (bias > 0) {
        this.backing.reverse(0, this.backing.length);
        this.backing.reverse(0, bias);
        this.backing.reverse(bias, this.backing.length);
      } else {
        this.backing.reverse(0, this.backing.length);
        this.backing.reverse(0, this.backing.length + bias);
      }
      this.indexBase = this.indexStart;
    };
    Buckets2.prototype._relocateBucket = function(dest, src) {
      if (dest === src) {
        return;
      }
      this.incrementBucket(dest, this.backing.emptyBucket(src));
    };
    return Buckets2;
  }();
  BucketsBacking = function() {
    function BucketsBacking2(_counts) {
      if (_counts === undefined) {
        _counts = [0];
      }
      this._counts = _counts;
    }
    Object.defineProperty(BucketsBacking2.prototype, "length", {
      get: function() {
        return this._counts.length;
      },
      enumerable: false,
      configurable: true
    });
    BucketsBacking2.prototype.countAt = function(pos) {
      return this._counts[pos];
    };
    BucketsBacking2.prototype.growTo = function(newSize, oldPositiveLimit, newPositiveLimit) {
      var tmp = new Array(newSize).fill(0);
      tmp.splice.apply(tmp, __spreadArray2([
        newPositiveLimit,
        this._counts.length - oldPositiveLimit
      ], __read3(this._counts.slice(oldPositiveLimit)), false));
      tmp.splice.apply(tmp, __spreadArray2([0, oldPositiveLimit], __read3(this._counts.slice(0, oldPositiveLimit)), false));
      this._counts = tmp;
    };
    BucketsBacking2.prototype.reverse = function(from, limit) {
      var num = Math.floor((from + limit) / 2) - from;
      for (var i = 0;i < num; i++) {
        var tmp = this._counts[from + i];
        this._counts[from + i] = this._counts[limit - i - 1];
        this._counts[limit - i - 1] = tmp;
      }
    };
    BucketsBacking2.prototype.emptyBucket = function(src) {
      var tmp = this._counts[src];
      this._counts[src] = 0;
      return tmp;
    };
    BucketsBacking2.prototype.increment = function(bucketIndex, increment) {
      this._counts[bucketIndex] += increment;
    };
    BucketsBacking2.prototype.decrement = function(bucketIndex, decrement) {
      if (this._counts[bucketIndex] >= decrement) {
        this._counts[bucketIndex] -= decrement;
      } else {
        this._counts[bucketIndex] = 0;
      }
    };
    BucketsBacking2.prototype.clone = function() {
      return new BucketsBacking2(__spreadArray2([], __read3(this._counts), false));
    };
    return BucketsBacking2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/ieee754.js
function getNormalBase2(value) {
  var dv = new DataView(new ArrayBuffer(8));
  dv.setFloat64(0, value);
  var hiBits = dv.getUint32(0);
  var expBits = (hiBits & EXPONENT_MASK) >> 20;
  return expBits - EXPONENT_BIAS;
}
function getSignificand(value) {
  var dv = new DataView(new ArrayBuffer(8));
  dv.setFloat64(0, value);
  var hiBits = dv.getUint32(0);
  var loBits = dv.getUint32(4);
  var significandHiBits = (hiBits & SIGNIFICAND_MASK) * Math.pow(2, 32);
  return significandHiBits + loBits;
}
var SIGNIFICAND_WIDTH = 52, EXPONENT_MASK = 2146435072, SIGNIFICAND_MASK = 1048575, EXPONENT_BIAS = 1023, MIN_NORMAL_EXPONENT, MAX_NORMAL_EXPONENT, MIN_VALUE;
var init_ieee754 = __esm(() => {
  MIN_NORMAL_EXPONENT = -EXPONENT_BIAS + 1;
  MAX_NORMAL_EXPONENT = EXPONENT_BIAS;
  MIN_VALUE = Math.pow(2, -1022);
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/util.js
function ldexp(frac, exp) {
  if (frac === 0 || frac === Number.POSITIVE_INFINITY || frac === Number.NEGATIVE_INFINITY || Number.isNaN(frac)) {
    return frac;
  }
  return frac * Math.pow(2, exp);
}
function nextGreaterSquare(v) {
  v--;
  v |= v >> 1;
  v |= v >> 2;
  v |= v >> 4;
  v |= v >> 8;
  v |= v >> 16;
  v++;
  return v;
}
var init_util = () => {};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/types.js
var __extends2, MappingError;
var init_types2 = __esm(() => {
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
  MappingError = function(_super) {
    __extends2(MappingError2, _super);
    function MappingError2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return MappingError2;
  }(Error);
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/ExponentMapping.js
var ExponentMapping;
var init_ExponentMapping = __esm(() => {
  init_ieee754();
  init_util();
  init_types2();
  ExponentMapping = function() {
    function ExponentMapping2(scale) {
      this._shift = -scale;
    }
    ExponentMapping2.prototype.mapToIndex = function(value) {
      if (value < MIN_VALUE) {
        return this._minNormalLowerBoundaryIndex();
      }
      var exp = getNormalBase2(value);
      var correction = this._rightShift(getSignificand(value) - 1, SIGNIFICAND_WIDTH);
      return exp + correction >> this._shift;
    };
    ExponentMapping2.prototype.lowerBoundary = function(index) {
      var minIndex = this._minNormalLowerBoundaryIndex();
      if (index < minIndex) {
        throw new MappingError("underflow: " + index + " is < minimum lower boundary: " + minIndex);
      }
      var maxIndex = this._maxNormalLowerBoundaryIndex();
      if (index > maxIndex) {
        throw new MappingError("overflow: " + index + " is > maximum lower boundary: " + maxIndex);
      }
      return ldexp(1, index << this._shift);
    };
    Object.defineProperty(ExponentMapping2.prototype, "scale", {
      get: function() {
        if (this._shift === 0) {
          return 0;
        }
        return -this._shift;
      },
      enumerable: false,
      configurable: true
    });
    ExponentMapping2.prototype._minNormalLowerBoundaryIndex = function() {
      var index = MIN_NORMAL_EXPONENT >> this._shift;
      if (this._shift < 2) {
        index--;
      }
      return index;
    };
    ExponentMapping2.prototype._maxNormalLowerBoundaryIndex = function() {
      return MAX_NORMAL_EXPONENT >> this._shift;
    };
    ExponentMapping2.prototype._rightShift = function(value, shift) {
      return Math.floor(value * Math.pow(2, -shift));
    };
    return ExponentMapping2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/LogarithmMapping.js
var LogarithmMapping;
var init_LogarithmMapping = __esm(() => {
  init_ieee754();
  init_util();
  init_types2();
  LogarithmMapping = function() {
    function LogarithmMapping2(scale) {
      this._scale = scale;
      this._scaleFactor = ldexp(Math.LOG2E, scale);
      this._inverseFactor = ldexp(Math.LN2, -scale);
    }
    LogarithmMapping2.prototype.mapToIndex = function(value) {
      if (value <= MIN_VALUE) {
        return this._minNormalLowerBoundaryIndex() - 1;
      }
      if (getSignificand(value) === 0) {
        var exp = getNormalBase2(value);
        return (exp << this._scale) - 1;
      }
      var index = Math.floor(Math.log(value) * this._scaleFactor);
      var maxIndex = this._maxNormalLowerBoundaryIndex();
      if (index >= maxIndex) {
        return maxIndex;
      }
      return index;
    };
    LogarithmMapping2.prototype.lowerBoundary = function(index) {
      var maxIndex = this._maxNormalLowerBoundaryIndex();
      if (index >= maxIndex) {
        if (index === maxIndex) {
          return 2 * Math.exp((index - (1 << this._scale)) / this._scaleFactor);
        }
        throw new MappingError("overflow: " + index + " is > maximum lower boundary: " + maxIndex);
      }
      var minIndex = this._minNormalLowerBoundaryIndex();
      if (index <= minIndex) {
        if (index === minIndex) {
          return MIN_VALUE;
        } else if (index === minIndex - 1) {
          return Math.exp((index + (1 << this._scale)) / this._scaleFactor) / 2;
        }
        throw new MappingError("overflow: " + index + " is < minimum lower boundary: " + minIndex);
      }
      return Math.exp(index * this._inverseFactor);
    };
    Object.defineProperty(LogarithmMapping2.prototype, "scale", {
      get: function() {
        return this._scale;
      },
      enumerable: false,
      configurable: true
    });
    LogarithmMapping2.prototype._minNormalLowerBoundaryIndex = function() {
      return MIN_NORMAL_EXPONENT << this._scale;
    };
    LogarithmMapping2.prototype._maxNormalLowerBoundaryIndex = function() {
      return (MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
    };
    return LogarithmMapping2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/getMapping.js
function getMapping(scale) {
  if (scale > MAX_SCALE || scale < MIN_SCALE) {
    throw new MappingError("expected scale >= " + MIN_SCALE + " && <= " + MAX_SCALE + ", got: " + scale);
  }
  return PREBUILT_MAPPINGS[scale + 10];
}
var MIN_SCALE = -10, MAX_SCALE = 20, PREBUILT_MAPPINGS;
var init_getMapping = __esm(() => {
  init_ExponentMapping();
  init_LogarithmMapping();
  init_types2();
  PREBUILT_MAPPINGS = Array.from({ length: 31 }, function(_, i) {
    if (i > 10) {
      return new LogarithmMapping(i - 10);
    }
    return new ExponentMapping(i - 10);
  });
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/ExponentialHistogram.js
var import_api2, __read4 = function(o, n) {
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
}, HighLow, MAX_SCALE2 = 20, DEFAULT_MAX_SIZE = 160, MIN_MAX_SIZE = 2, ExponentialHistogramAccumulation, ExponentialHistogramAggregator;
var init_ExponentialHistogram = __esm(() => {
  init_types();
  init_MetricData();
  init_InstrumentDescriptor();
  init_Buckets();
  init_getMapping();
  init_util();
  import_api2 = __toESM(require_src(), 1);
  HighLow = function() {
    function HighLow2(low, high) {
      this.low = low;
      this.high = high;
    }
    HighLow2.combine = function(h1, h2) {
      return new HighLow2(Math.min(h1.low, h2.low), Math.max(h1.high, h2.high));
    };
    return HighLow2;
  }();
  ExponentialHistogramAccumulation = function() {
    function ExponentialHistogramAccumulation2(startTime, _maxSize, _recordMinMax, _sum, _count, _zeroCount, _min, _max, _positive, _negative, _mapping) {
      if (startTime === undefined) {
        startTime = startTime;
      }
      if (_maxSize === undefined) {
        _maxSize = DEFAULT_MAX_SIZE;
      }
      if (_recordMinMax === undefined) {
        _recordMinMax = true;
      }
      if (_sum === undefined) {
        _sum = 0;
      }
      if (_count === undefined) {
        _count = 0;
      }
      if (_zeroCount === undefined) {
        _zeroCount = 0;
      }
      if (_min === undefined) {
        _min = Number.POSITIVE_INFINITY;
      }
      if (_max === undefined) {
        _max = Number.NEGATIVE_INFINITY;
      }
      if (_positive === undefined) {
        _positive = new Buckets;
      }
      if (_negative === undefined) {
        _negative = new Buckets;
      }
      if (_mapping === undefined) {
        _mapping = getMapping(MAX_SCALE2);
      }
      this.startTime = startTime;
      this._maxSize = _maxSize;
      this._recordMinMax = _recordMinMax;
      this._sum = _sum;
      this._count = _count;
      this._zeroCount = _zeroCount;
      this._min = _min;
      this._max = _max;
      this._positive = _positive;
      this._negative = _negative;
      this._mapping = _mapping;
      if (this._maxSize < MIN_MAX_SIZE) {
        import_api2.diag.warn("Exponential Histogram Max Size set to " + this._maxSize + ",                 changing to the minimum size of: " + MIN_MAX_SIZE);
        this._maxSize = MIN_MAX_SIZE;
      }
    }
    ExponentialHistogramAccumulation2.prototype.record = function(value) {
      this.updateByIncrement(value, 1);
    };
    ExponentialHistogramAccumulation2.prototype.setStartTime = function(startTime) {
      this.startTime = startTime;
    };
    ExponentialHistogramAccumulation2.prototype.toPointValue = function() {
      return {
        hasMinMax: this._recordMinMax,
        min: this.min,
        max: this.max,
        sum: this.sum,
        positive: {
          offset: this.positive.offset,
          bucketCounts: this.positive.counts()
        },
        negative: {
          offset: this.negative.offset,
          bucketCounts: this.negative.counts()
        },
        count: this.count,
        scale: this.scale,
        zeroCount: this.zeroCount
      };
    };
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "sum", {
      get: function() {
        return this._sum;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "min", {
      get: function() {
        return this._min;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "max", {
      get: function() {
        return this._max;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "count", {
      get: function() {
        return this._count;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "zeroCount", {
      get: function() {
        return this._zeroCount;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "scale", {
      get: function() {
        if (this._count === this._zeroCount) {
          return 0;
        }
        return this._mapping.scale;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "positive", {
      get: function() {
        return this._positive;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ExponentialHistogramAccumulation2.prototype, "negative", {
      get: function() {
        return this._negative;
      },
      enumerable: false,
      configurable: true
    });
    ExponentialHistogramAccumulation2.prototype.updateByIncrement = function(value, increment) {
      if (Number.isNaN(value)) {
        return;
      }
      if (value > this._max) {
        this._max = value;
      }
      if (value < this._min) {
        this._min = value;
      }
      this._count += increment;
      if (value === 0) {
        this._zeroCount += increment;
        return;
      }
      this._sum += value * increment;
      if (value > 0) {
        this._updateBuckets(this._positive, value, increment);
      } else {
        this._updateBuckets(this._negative, -value, increment);
      }
    };
    ExponentialHistogramAccumulation2.prototype.merge = function(previous) {
      if (this._count === 0) {
        this._min = previous.min;
        this._max = previous.max;
      } else if (previous.count !== 0) {
        if (previous.min < this.min) {
          this._min = previous.min;
        }
        if (previous.max > this.max) {
          this._max = previous.max;
        }
      }
      this.startTime = previous.startTime;
      this._sum += previous.sum;
      this._count += previous.count;
      this._zeroCount += previous.zeroCount;
      var minScale = this._minScale(previous);
      this._downscale(this.scale - minScale);
      this._mergeBuckets(this.positive, previous, previous.positive, minScale);
      this._mergeBuckets(this.negative, previous, previous.negative, minScale);
    };
    ExponentialHistogramAccumulation2.prototype.diff = function(other) {
      this._min = Infinity;
      this._max = -Infinity;
      this._sum -= other.sum;
      this._count -= other.count;
      this._zeroCount -= other.zeroCount;
      var minScale = this._minScale(other);
      this._downscale(this.scale - minScale);
      this._diffBuckets(this.positive, other, other.positive, minScale);
      this._diffBuckets(this.negative, other, other.negative, minScale);
    };
    ExponentialHistogramAccumulation2.prototype.clone = function() {
      return new ExponentialHistogramAccumulation2(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
    };
    ExponentialHistogramAccumulation2.prototype._updateBuckets = function(buckets, value, increment) {
      var index = this._mapping.mapToIndex(value);
      var rescalingNeeded = false;
      var high = 0;
      var low = 0;
      if (buckets.length === 0) {
        buckets.indexStart = index;
        buckets.indexEnd = buckets.indexStart;
        buckets.indexBase = buckets.indexStart;
      } else if (index < buckets.indexStart && buckets.indexEnd - index >= this._maxSize) {
        rescalingNeeded = true;
        low = index;
        high = buckets.indexEnd;
      } else if (index > buckets.indexEnd && index - buckets.indexStart >= this._maxSize) {
        rescalingNeeded = true;
        low = buckets.indexStart;
        high = index;
      }
      if (rescalingNeeded) {
        var change = this._changeScale(high, low);
        this._downscale(change);
        index = this._mapping.mapToIndex(value);
      }
      this._incrementIndexBy(buckets, index, increment);
    };
    ExponentialHistogramAccumulation2.prototype._incrementIndexBy = function(buckets, index, increment) {
      if (increment === 0) {
        return;
      }
      if (buckets.length === 0) {
        buckets.indexStart = buckets.indexEnd = buckets.indexBase = index;
      }
      if (index < buckets.indexStart) {
        var span = buckets.indexEnd - index;
        if (span >= buckets.backing.length) {
          this._grow(buckets, span + 1);
        }
        buckets.indexStart = index;
      } else if (index > buckets.indexEnd) {
        var span = index - buckets.indexStart;
        if (span >= buckets.backing.length) {
          this._grow(buckets, span + 1);
        }
        buckets.indexEnd = index;
      }
      var bucketIndex = index - buckets.indexBase;
      if (bucketIndex < 0) {
        bucketIndex += buckets.backing.length;
      }
      buckets.incrementBucket(bucketIndex, increment);
    };
    ExponentialHistogramAccumulation2.prototype._grow = function(buckets, needed) {
      var size = buckets.backing.length;
      var bias = buckets.indexBase - buckets.indexStart;
      var oldPositiveLimit = size - bias;
      var newSize = nextGreaterSquare(needed);
      if (newSize > this._maxSize) {
        newSize = this._maxSize;
      }
      var newPositiveLimit = newSize - bias;
      buckets.backing.growTo(newSize, oldPositiveLimit, newPositiveLimit);
    };
    ExponentialHistogramAccumulation2.prototype._changeScale = function(high, low) {
      var change = 0;
      while (high - low >= this._maxSize) {
        high >>= 1;
        low >>= 1;
        change++;
      }
      return change;
    };
    ExponentialHistogramAccumulation2.prototype._downscale = function(change) {
      if (change === 0) {
        return;
      }
      if (change < 0) {
        throw new Error("impossible change of scale: " + this.scale);
      }
      var newScale = this._mapping.scale - change;
      this._positive.downscale(change);
      this._negative.downscale(change);
      this._mapping = getMapping(newScale);
    };
    ExponentialHistogramAccumulation2.prototype._minScale = function(other) {
      var minScale = Math.min(this.scale, other.scale);
      var highLowPos = HighLow.combine(this._highLowAtScale(this.positive, this.scale, minScale), this._highLowAtScale(other.positive, other.scale, minScale));
      var highLowNeg = HighLow.combine(this._highLowAtScale(this.negative, this.scale, minScale), this._highLowAtScale(other.negative, other.scale, minScale));
      return Math.min(minScale - this._changeScale(highLowPos.high, highLowPos.low), minScale - this._changeScale(highLowNeg.high, highLowNeg.low));
    };
    ExponentialHistogramAccumulation2.prototype._highLowAtScale = function(buckets, currentScale, newScale) {
      if (buckets.length === 0) {
        return new HighLow(0, -1);
      }
      var shift = currentScale - newScale;
      return new HighLow(buckets.indexStart >> shift, buckets.indexEnd >> shift);
    };
    ExponentialHistogramAccumulation2.prototype._mergeBuckets = function(ours, other, theirs, scale) {
      var theirOffset = theirs.offset;
      var theirChange = other.scale - scale;
      for (var i = 0;i < theirs.length; i++) {
        this._incrementIndexBy(ours, theirOffset + i >> theirChange, theirs.at(i));
      }
    };
    ExponentialHistogramAccumulation2.prototype._diffBuckets = function(ours, other, theirs, scale) {
      var theirOffset = theirs.offset;
      var theirChange = other.scale - scale;
      for (var i = 0;i < theirs.length; i++) {
        var ourIndex = theirOffset + i >> theirChange;
        var bucketIndex = ourIndex - ours.indexBase;
        if (bucketIndex < 0) {
          bucketIndex += ours.backing.length;
        }
        ours.decrementBucket(bucketIndex, theirs.at(i));
      }
      ours.trim();
    };
    return ExponentialHistogramAccumulation2;
  }();
  ExponentialHistogramAggregator = function() {
    function ExponentialHistogramAggregator2(_maxSize, _recordMinMax) {
      this._maxSize = _maxSize;
      this._recordMinMax = _recordMinMax;
      this.kind = AggregatorKind.EXPONENTIAL_HISTOGRAM;
    }
    ExponentialHistogramAggregator2.prototype.createAccumulation = function(startTime) {
      return new ExponentialHistogramAccumulation(startTime, this._maxSize, this._recordMinMax);
    };
    ExponentialHistogramAggregator2.prototype.merge = function(previous, delta) {
      var result = delta.clone();
      result.merge(previous);
      return result;
    };
    ExponentialHistogramAggregator2.prototype.diff = function(previous, current) {
      var result = current.clone();
      result.diff(previous);
      return result;
    };
    ExponentialHistogramAggregator2.prototype.toMetricData = function(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: DataPointType.EXPONENTIAL_HISTOGRAM,
        dataPoints: accumulationByAttributes.map(function(_a) {
          var _b = __read4(_a, 2), attributes = _b[0], accumulation = _b[1];
          var pointValue = accumulation.toPointValue();
          var allowsNegativeValues = descriptor.type === InstrumentType.GAUGE || descriptor.type === InstrumentType.UP_DOWN_COUNTER || descriptor.type === InstrumentType.OBSERVABLE_GAUGE || descriptor.type === InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: {
              min: pointValue.hasMinMax ? pointValue.min : undefined,
              max: pointValue.hasMinMax ? pointValue.max : undefined,
              sum: !allowsNegativeValues ? pointValue.sum : undefined,
              positive: {
                offset: pointValue.positive.offset,
                bucketCounts: pointValue.positive.bucketCounts
              },
              negative: {
                offset: pointValue.negative.offset,
                bucketCounts: pointValue.negative.bucketCounts
              },
              count: pointValue.count,
              scale: pointValue.scale,
              zeroCount: pointValue.zeroCount
            }
          };
        })
      };
    };
    return ExponentialHistogramAggregator2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/LastValue.js
var __read5 = function(o, n) {
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
}, LastValueAccumulation, LastValueAggregator;
var init_LastValue = __esm(() => {
  init_types();
  init_esm3();
  init_MetricData();
  LastValueAccumulation = function() {
    function LastValueAccumulation2(startTime, _current, sampleTime) {
      if (_current === undefined) {
        _current = 0;
      }
      if (sampleTime === undefined) {
        sampleTime = [0, 0];
      }
      this.startTime = startTime;
      this._current = _current;
      this.sampleTime = sampleTime;
    }
    LastValueAccumulation2.prototype.record = function(value) {
      this._current = value;
      this.sampleTime = millisToHrTime(Date.now());
    };
    LastValueAccumulation2.prototype.setStartTime = function(startTime) {
      this.startTime = startTime;
    };
    LastValueAccumulation2.prototype.toPointValue = function() {
      return this._current;
    };
    return LastValueAccumulation2;
  }();
  LastValueAggregator = function() {
    function LastValueAggregator2() {
      this.kind = AggregatorKind.LAST_VALUE;
    }
    LastValueAggregator2.prototype.createAccumulation = function(startTime) {
      return new LastValueAccumulation(startTime);
    };
    LastValueAggregator2.prototype.merge = function(previous, delta) {
      var latestAccumulation = hrTimeToMicroseconds(delta.sampleTime) >= hrTimeToMicroseconds(previous.sampleTime) ? delta : previous;
      return new LastValueAccumulation(previous.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
    };
    LastValueAggregator2.prototype.diff = function(previous, current) {
      var latestAccumulation = hrTimeToMicroseconds(current.sampleTime) >= hrTimeToMicroseconds(previous.sampleTime) ? current : previous;
      return new LastValueAccumulation(current.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
    };
    LastValueAggregator2.prototype.toMetricData = function(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: DataPointType.GAUGE,
        dataPoints: accumulationByAttributes.map(function(_a) {
          var _b = __read5(_a, 2), attributes = _b[0], accumulation = _b[1];
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: accumulation.toPointValue()
          };
        })
      };
    };
    return LastValueAggregator2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Sum.js
var __read6 = function(o, n) {
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
}, SumAccumulation, SumAggregator;
var init_Sum = __esm(() => {
  init_types();
  init_MetricData();
  SumAccumulation = function() {
    function SumAccumulation2(startTime, monotonic, _current, reset) {
      if (_current === undefined) {
        _current = 0;
      }
      if (reset === undefined) {
        reset = false;
      }
      this.startTime = startTime;
      this.monotonic = monotonic;
      this._current = _current;
      this.reset = reset;
    }
    SumAccumulation2.prototype.record = function(value) {
      if (this.monotonic && value < 0) {
        return;
      }
      this._current += value;
    };
    SumAccumulation2.prototype.setStartTime = function(startTime) {
      this.startTime = startTime;
    };
    SumAccumulation2.prototype.toPointValue = function() {
      return this._current;
    };
    return SumAccumulation2;
  }();
  SumAggregator = function() {
    function SumAggregator2(monotonic) {
      this.monotonic = monotonic;
      this.kind = AggregatorKind.SUM;
    }
    SumAggregator2.prototype.createAccumulation = function(startTime) {
      return new SumAccumulation(startTime, this.monotonic);
    };
    SumAggregator2.prototype.merge = function(previous, delta) {
      var prevPv = previous.toPointValue();
      var deltaPv = delta.toPointValue();
      if (delta.reset) {
        return new SumAccumulation(delta.startTime, this.monotonic, deltaPv, delta.reset);
      }
      return new SumAccumulation(previous.startTime, this.monotonic, prevPv + deltaPv);
    };
    SumAggregator2.prototype.diff = function(previous, current) {
      var prevPv = previous.toPointValue();
      var currPv = current.toPointValue();
      if (this.monotonic && prevPv > currPv) {
        return new SumAccumulation(current.startTime, this.monotonic, currPv, true);
      }
      return new SumAccumulation(current.startTime, this.monotonic, currPv - prevPv);
    };
    SumAggregator2.prototype.toMetricData = function(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: DataPointType.SUM,
        dataPoints: accumulationByAttributes.map(function(_a) {
          var _b = __read6(_a, 2), attributes = _b[0], accumulation = _b[1];
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: accumulation.toPointValue()
          };
        }),
        isMonotonic: this.monotonic
      };
    };
    return SumAggregator2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/index.js
var init_aggregator = __esm(() => {
  init_Drop();
  init_Histogram();
  init_ExponentialHistogram();
  init_LastValue();
  init_Sum();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/view/Aggregation.js
var api, __extends3, Aggregation, DropAggregation, SumAggregation, LastValueAggregation, HistogramAggregation, ExplicitBucketHistogramAggregation, ExponentialHistogramAggregation, DefaultAggregation, DROP_AGGREGATION, SUM_AGGREGATION, LAST_VALUE_AGGREGATION, HISTOGRAM_AGGREGATION, EXPONENTIAL_HISTOGRAM_AGGREGATION, DEFAULT_AGGREGATION;
var init_Aggregation = __esm(() => {
  init_aggregator();
  init_InstrumentDescriptor();
  api = __toESM(require_src(), 1);
  __extends3 = function() {
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
  Aggregation = function() {
    function Aggregation2() {}
    Aggregation2.Drop = function() {
      return DROP_AGGREGATION;
    };
    Aggregation2.Sum = function() {
      return SUM_AGGREGATION;
    };
    Aggregation2.LastValue = function() {
      return LAST_VALUE_AGGREGATION;
    };
    Aggregation2.Histogram = function() {
      return HISTOGRAM_AGGREGATION;
    };
    Aggregation2.ExponentialHistogram = function() {
      return EXPONENTIAL_HISTOGRAM_AGGREGATION;
    };
    Aggregation2.Default = function() {
      return DEFAULT_AGGREGATION;
    };
    return Aggregation2;
  }();
  DropAggregation = function(_super) {
    __extends3(DropAggregation2, _super);
    function DropAggregation2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DropAggregation2.prototype.createAggregator = function(_instrument) {
      return DropAggregation2.DEFAULT_INSTANCE;
    };
    DropAggregation2.DEFAULT_INSTANCE = new DropAggregator;
    return DropAggregation2;
  }(Aggregation);
  SumAggregation = function(_super) {
    __extends3(SumAggregation2, _super);
    function SumAggregation2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SumAggregation2.prototype.createAggregator = function(instrument) {
      switch (instrument.type) {
        case InstrumentType.COUNTER:
        case InstrumentType.OBSERVABLE_COUNTER:
        case InstrumentType.HISTOGRAM: {
          return SumAggregation2.MONOTONIC_INSTANCE;
        }
        default: {
          return SumAggregation2.NON_MONOTONIC_INSTANCE;
        }
      }
    };
    SumAggregation2.MONOTONIC_INSTANCE = new SumAggregator(true);
    SumAggregation2.NON_MONOTONIC_INSTANCE = new SumAggregator(false);
    return SumAggregation2;
  }(Aggregation);
  LastValueAggregation = function(_super) {
    __extends3(LastValueAggregation2, _super);
    function LastValueAggregation2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    LastValueAggregation2.prototype.createAggregator = function(_instrument) {
      return LastValueAggregation2.DEFAULT_INSTANCE;
    };
    LastValueAggregation2.DEFAULT_INSTANCE = new LastValueAggregator;
    return LastValueAggregation2;
  }(Aggregation);
  HistogramAggregation = function(_super) {
    __extends3(HistogramAggregation2, _super);
    function HistogramAggregation2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    HistogramAggregation2.prototype.createAggregator = function(_instrument) {
      return HistogramAggregation2.DEFAULT_INSTANCE;
    };
    HistogramAggregation2.DEFAULT_INSTANCE = new HistogramAggregator([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 1e4], true);
    return HistogramAggregation2;
  }(Aggregation);
  ExplicitBucketHistogramAggregation = function(_super) {
    __extends3(ExplicitBucketHistogramAggregation2, _super);
    function ExplicitBucketHistogramAggregation2(boundaries, _recordMinMax) {
      if (_recordMinMax === undefined) {
        _recordMinMax = true;
      }
      var _this = _super.call(this) || this;
      _this._recordMinMax = _recordMinMax;
      if (boundaries == null) {
        throw new Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
      }
      boundaries = boundaries.concat();
      boundaries = boundaries.sort(function(a, b) {
        return a - b;
      });
      var minusInfinityIndex = boundaries.lastIndexOf(-Infinity);
      var infinityIndex = boundaries.indexOf(Infinity);
      if (infinityIndex === -1) {
        infinityIndex = undefined;
      }
      _this._boundaries = boundaries.slice(minusInfinityIndex + 1, infinityIndex);
      return _this;
    }
    ExplicitBucketHistogramAggregation2.prototype.createAggregator = function(_instrument) {
      return new HistogramAggregator(this._boundaries, this._recordMinMax);
    };
    return ExplicitBucketHistogramAggregation2;
  }(Aggregation);
  ExponentialHistogramAggregation = function(_super) {
    __extends3(ExponentialHistogramAggregation2, _super);
    function ExponentialHistogramAggregation2(_maxSize, _recordMinMax) {
      if (_maxSize === undefined) {
        _maxSize = 160;
      }
      if (_recordMinMax === undefined) {
        _recordMinMax = true;
      }
      var _this = _super.call(this) || this;
      _this._maxSize = _maxSize;
      _this._recordMinMax = _recordMinMax;
      return _this;
    }
    ExponentialHistogramAggregation2.prototype.createAggregator = function(_instrument) {
      return new ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
    };
    return ExponentialHistogramAggregation2;
  }(Aggregation);
  DefaultAggregation = function(_super) {
    __extends3(DefaultAggregation2, _super);
    function DefaultAggregation2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultAggregation2.prototype._resolve = function(instrument) {
      switch (instrument.type) {
        case InstrumentType.COUNTER:
        case InstrumentType.UP_DOWN_COUNTER:
        case InstrumentType.OBSERVABLE_COUNTER:
        case InstrumentType.OBSERVABLE_UP_DOWN_COUNTER: {
          return SUM_AGGREGATION;
        }
        case InstrumentType.GAUGE:
        case InstrumentType.OBSERVABLE_GAUGE: {
          return LAST_VALUE_AGGREGATION;
        }
        case InstrumentType.HISTOGRAM: {
          if (instrument.advice.explicitBucketBoundaries) {
            return new ExplicitBucketHistogramAggregation(instrument.advice.explicitBucketBoundaries);
          }
          return HISTOGRAM_AGGREGATION;
        }
      }
      api.diag.warn("Unable to recognize instrument type: " + instrument.type);
      return DROP_AGGREGATION;
    };
    DefaultAggregation2.prototype.createAggregator = function(instrument) {
      return this._resolve(instrument).createAggregator(instrument);
    };
    return DefaultAggregation2;
  }(Aggregation);
  DROP_AGGREGATION = new DropAggregation;
  SUM_AGGREGATION = new SumAggregation;
  LAST_VALUE_AGGREGATION = new LastValueAggregation;
  HISTOGRAM_AGGREGATION = new HistogramAggregation;
  EXPONENTIAL_HISTOGRAM_AGGREGATION = new ExponentialHistogramAggregation;
  DEFAULT_AGGREGATION = new DefaultAggregation;
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/AggregationSelector.js
var DEFAULT_AGGREGATION_SELECTOR = function(_instrumentType) {
  return Aggregation.Default();
}, DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = function(_instrumentType) {
  return AggregationTemporality.CUMULATIVE;
};
var init_AggregationSelector = __esm(() => {
  init_Aggregation();
  init_AggregationTemporality();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/MetricReader.js
var api2, __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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
}, __read7 = function(o, n) {
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
}, __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, MetricReader;
var init_MetricReader = __esm(() => {
  init_utils();
  init_AggregationSelector();
  api2 = __toESM(require_src(), 1);
  MetricReader = function() {
    function MetricReader2(options) {
      var _a, _b, _c;
      this._shutdown = false;
      this._aggregationSelector = (_a = options === null || options === undefined ? undefined : options.aggregationSelector) !== null && _a !== undefined ? _a : DEFAULT_AGGREGATION_SELECTOR;
      this._aggregationTemporalitySelector = (_b = options === null || options === undefined ? undefined : options.aggregationTemporalitySelector) !== null && _b !== undefined ? _b : DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
      this._metricProducers = (_c = options === null || options === undefined ? undefined : options.metricProducers) !== null && _c !== undefined ? _c : [];
      this._cardinalitySelector = options === null || options === undefined ? undefined : options.cardinalitySelector;
    }
    MetricReader2.prototype.setMetricProducer = function(metricProducer) {
      if (this._sdkMetricProducer) {
        throw new Error("MetricReader can not be bound to a MeterProvider again.");
      }
      this._sdkMetricProducer = metricProducer;
      this.onInitialized();
    };
    MetricReader2.prototype.selectAggregation = function(instrumentType) {
      return this._aggregationSelector(instrumentType);
    };
    MetricReader2.prototype.selectAggregationTemporality = function(instrumentType) {
      return this._aggregationTemporalitySelector(instrumentType);
    };
    MetricReader2.prototype.selectCardinalityLimit = function(instrumentType) {
      return this._cardinalitySelector ? this._cardinalitySelector(instrumentType) : 2000;
    };
    MetricReader2.prototype.onInitialized = function() {};
    MetricReader2.prototype.collect = function(options) {
      return __awaiter2(this, undefined, undefined, function() {
        var _a, sdkCollectionResults, additionalCollectionResults, errors, resource, scopeMetrics;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (this._sdkMetricProducer === undefined) {
                throw new Error("MetricReader is not bound to a MetricProducer");
              }
              if (this._shutdown) {
                throw new Error("MetricReader is shutdown");
              }
              return [4, Promise.all(__spreadArray3([
                this._sdkMetricProducer.collect({
                  timeoutMillis: options === null || options === undefined ? undefined : options.timeoutMillis
                })
              ], __read7(this._metricProducers.map(function(producer) {
                return producer.collect({
                  timeoutMillis: options === null || options === undefined ? undefined : options.timeoutMillis
                });
              })), false))];
            case 1:
              _a = __read7.apply(undefined, [_b.sent()]), sdkCollectionResults = _a[0], additionalCollectionResults = _a.slice(1);
              errors = sdkCollectionResults.errors.concat(FlatMap(additionalCollectionResults, function(result) {
                return result.errors;
              }));
              resource = sdkCollectionResults.resourceMetrics.resource;
              scopeMetrics = sdkCollectionResults.resourceMetrics.scopeMetrics.concat(FlatMap(additionalCollectionResults, function(result) {
                return result.resourceMetrics.scopeMetrics;
              }));
              return [2, {
                resourceMetrics: {
                  resource,
                  scopeMetrics
                },
                errors
              }];
          }
        });
      });
    };
    MetricReader2.prototype.shutdown = function(options) {
      return __awaiter2(this, undefined, undefined, function() {
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this._shutdown) {
                api2.diag.error("Cannot call shutdown twice.");
                return [2];
              }
              if (!((options === null || options === undefined ? undefined : options.timeoutMillis) == null))
                return [3, 2];
              return [4, this.onShutdown()];
            case 1:
              _a.sent();
              return [3, 4];
            case 2:
              return [4, callWithTimeout(this.onShutdown(), options.timeoutMillis)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              this._shutdown = true;
              return [2];
          }
        });
      });
    };
    MetricReader2.prototype.forceFlush = function(options) {
      return __awaiter2(this, undefined, undefined, function() {
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this._shutdown) {
                api2.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
                return [2];
              }
              if (!((options === null || options === undefined ? undefined : options.timeoutMillis) == null))
                return [3, 2];
              return [4, this.onForceFlush()];
            case 1:
              _a.sent();
              return [2];
            case 2:
              return [4, callWithTimeout(this.onForceFlush(), options.timeoutMillis)];
            case 3:
              _a.sent();
              return [2];
          }
        });
      });
    };
    return MetricReader2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/PeriodicExportingMetricReader.js
var api3, __extends4, __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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
}, __read8 = function(o, n) {
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
}, __spreadArray4 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, PeriodicExportingMetricReader;
var init_PeriodicExportingMetricReader = __esm(() => {
  init_esm3();
  init_MetricReader();
  init_utils();
  api3 = __toESM(require_src(), 1);
  __extends4 = function() {
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
  PeriodicExportingMetricReader = function(_super) {
    __extends4(PeriodicExportingMetricReader2, _super);
    function PeriodicExportingMetricReader2(options) {
      var _a, _b, _c, _d;
      var _this = _super.call(this, {
        aggregationSelector: (_a = options.exporter.selectAggregation) === null || _a === undefined ? undefined : _a.bind(options.exporter),
        aggregationTemporalitySelector: (_b = options.exporter.selectAggregationTemporality) === null || _b === undefined ? undefined : _b.bind(options.exporter),
        metricProducers: options.metricProducers
      }) || this;
      if (options.exportIntervalMillis !== undefined && options.exportIntervalMillis <= 0) {
        throw Error("exportIntervalMillis must be greater than 0");
      }
      if (options.exportTimeoutMillis !== undefined && options.exportTimeoutMillis <= 0) {
        throw Error("exportTimeoutMillis must be greater than 0");
      }
      if (options.exportTimeoutMillis !== undefined && options.exportIntervalMillis !== undefined && options.exportIntervalMillis < options.exportTimeoutMillis) {
        throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
      }
      _this._exportInterval = (_c = options.exportIntervalMillis) !== null && _c !== undefined ? _c : 60000;
      _this._exportTimeout = (_d = options.exportTimeoutMillis) !== null && _d !== undefined ? _d : 30000;
      _this._exporter = options.exporter;
      return _this;
    }
    PeriodicExportingMetricReader2.prototype._runOnce = function() {
      return __awaiter3(this, undefined, undefined, function() {
        var err_1;
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4, callWithTimeout(this._doRun(), this._exportTimeout)];
            case 1:
              _a.sent();
              return [3, 3];
            case 2:
              err_1 = _a.sent();
              if (err_1 instanceof TimeoutError) {
                api3.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
                return [2];
              }
              globalErrorHandler(err_1);
              return [3, 3];
            case 3:
              return [2];
          }
        });
      });
    };
    PeriodicExportingMetricReader2.prototype._doRun = function() {
      var _a, _b;
      return __awaiter3(this, undefined, undefined, function() {
        var _c, resourceMetrics, errors, e_1, result;
        var _d;
        return __generator3(this, function(_e) {
          switch (_e.label) {
            case 0:
              return [4, this.collect({
                timeoutMillis: this._exportTimeout
              })];
            case 1:
              _c = _e.sent(), resourceMetrics = _c.resourceMetrics, errors = _c.errors;
              if (errors.length > 0) {
                (_d = api3.diag).error.apply(_d, __spreadArray4(["PeriodicExportingMetricReader: metrics collection errors"], __read8(errors), false));
              }
              if (!resourceMetrics.resource.asyncAttributesPending)
                return [3, 5];
              _e.label = 2;
            case 2:
              _e.trys.push([2, 4, , 5]);
              return [4, (_b = (_a = resourceMetrics.resource).waitForAsyncAttributes) === null || _b === undefined ? undefined : _b.call(_a)];
            case 3:
              _e.sent();
              return [3, 5];
            case 4:
              e_1 = _e.sent();
              api3.diag.debug("Error while resolving async portion of resource: ", e_1);
              globalErrorHandler(e_1);
              return [3, 5];
            case 5:
              if (resourceMetrics.scopeMetrics.length === 0) {
                return [2];
              }
              return [4, internal._export(this._exporter, resourceMetrics)];
            case 6:
              result = _e.sent();
              if (result.code !== ExportResultCode.SUCCESS) {
                throw new Error("PeriodicExportingMetricReader: metrics export failed (error " + result.error + ")");
              }
              return [2];
          }
        });
      });
    };
    PeriodicExportingMetricReader2.prototype.onInitialized = function() {
      var _this = this;
      this._interval = setInterval(function() {
        _this._runOnce();
      }, this._exportInterval);
      unrefTimer(this._interval);
    };
    PeriodicExportingMetricReader2.prototype.onForceFlush = function() {
      return __awaiter3(this, undefined, undefined, function() {
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._runOnce()];
            case 1:
              _a.sent();
              return [4, this._exporter.forceFlush()];
            case 2:
              _a.sent();
              return [2];
          }
        });
      });
    };
    PeriodicExportingMetricReader2.prototype.onShutdown = function() {
      return __awaiter3(this, undefined, undefined, function() {
        return __generator3(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this._interval) {
                clearInterval(this._interval);
              }
              return [4, this.onForceFlush()];
            case 1:
              _a.sent();
              return [4, this._exporter.shutdown()];
            case 2:
              _a.sent();
              return [2];
          }
        });
      });
    };
    return PeriodicExportingMetricReader2;
  }(MetricReader);
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/ConsoleMetricExporter.js
var __values2 = function(o) {
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
}, ConsoleMetricExporter;
var init_ConsoleMetricExporter = __esm(() => {
  init_esm3();
  init_AggregationSelector();
  ConsoleMetricExporter = function() {
    function ConsoleMetricExporter2(options) {
      var _a;
      this._shutdown = false;
      this._temporalitySelector = (_a = options === null || options === undefined ? undefined : options.temporalitySelector) !== null && _a !== undefined ? _a : DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
    }
    ConsoleMetricExporter2.prototype.export = function(metrics, resultCallback) {
      if (this._shutdown) {
        setImmediate(resultCallback, { code: ExportResultCode.FAILED });
        return;
      }
      return ConsoleMetricExporter2._sendMetrics(metrics, resultCallback);
    };
    ConsoleMetricExporter2.prototype.forceFlush = function() {
      return Promise.resolve();
    };
    ConsoleMetricExporter2.prototype.selectAggregationTemporality = function(_instrumentType) {
      return this._temporalitySelector(_instrumentType);
    };
    ConsoleMetricExporter2.prototype.shutdown = function() {
      this._shutdown = true;
      return Promise.resolve();
    };
    ConsoleMetricExporter2._sendMetrics = function(metrics, done) {
      var e_1, _a, e_2, _b;
      try {
        for (var _c = __values2(metrics.scopeMetrics), _d = _c.next();!_d.done; _d = _c.next()) {
          var scopeMetrics = _d.value;
          try {
            for (var _e = (e_2 = undefined, __values2(scopeMetrics.metrics)), _f = _e.next();!_f.done; _f = _e.next()) {
              var metric = _f.value;
              console.dir({
                descriptor: metric.descriptor,
                dataPointType: metric.dataPointType,
                dataPoints: metric.dataPoints
              }, { depth: null });
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return))
                _b.call(_e);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return))
            _a.call(_c);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      done({ code: ExportResultCode.SUCCESS });
    };
    return ConsoleMetricExporter2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/internal/utils.js
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

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/trace/SemanticAttributes.js
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

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/trace/index.js
var require_trace = __commonJS((exports) => {
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
  __exportStar(require_SemanticAttributes(), exports);
});

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/resource/SemanticResourceAttributes.js
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

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/resource/index.js
var require_resource = __commonJS((exports) => {
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
  __exportStar(require_SemanticResourceAttributes(), exports);
});

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/stable_attributes.js
var require_stable_attributes = __commonJS((exports) => {
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

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/stable_metrics.js
var require_stable_metrics = __commonJS((exports) => {
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

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/node_modules/@opentelemetry/semantic-conventions/build/src/index.js
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
  __exportStar(require_trace(), exports);
  __exportStar(require_resource(), exports);
  __exportStar(require_stable_attributes(), exports);
  __exportStar(require_stable_metrics(), exports);
});

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js
function defaultServiceName() {
  return "unknown_service:" + process.argv0;
}
var init_default_service_name = () => {};

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/platform/node/index.js
var init_node = __esm(() => {
  init_default_service_name();
});

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/platform/index.js
var init_platform2 = __esm(() => {
  init_node();
});

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/Resource.js
var import_api3, import_semantic_conventions, __assign = function() {
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
}, __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator4 = function(thisArg, body) {
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
}, __read9 = function(o, n) {
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
  init_esm3();
  init_platform2();
  import_api3 = __toESM(require_src(), 1);
  import_semantic_conventions = __toESM(require_src3(), 1);
  Resource = function() {
    function Resource2(attributes, asyncAttributesPromise) {
      var _this = this;
      var _a;
      this._attributes = attributes;
      this.asyncAttributesPending = asyncAttributesPromise != null;
      this._syncAttributes = (_a = this._attributes) !== null && _a !== undefined ? _a : {};
      this._asyncAttributesPromise = asyncAttributesPromise === null || asyncAttributesPromise === undefined ? undefined : asyncAttributesPromise.then(function(asyncAttributes) {
        _this._attributes = Object.assign({}, _this._attributes, asyncAttributes);
        _this.asyncAttributesPending = false;
        return asyncAttributes;
      }, function(err) {
        import_api3.diag.debug("a resource's async attributes promise rejected: %s", err);
        _this.asyncAttributesPending = false;
        return {};
      });
    }
    Resource2.empty = function() {
      return Resource2.EMPTY;
    };
    Resource2.default = function() {
      var _a;
      return new Resource2((_a = {}, _a[import_semantic_conventions.SEMRESATTRS_SERVICE_NAME] = defaultServiceName(), _a[import_semantic_conventions.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE] = SDK_INFO[import_semantic_conventions.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE], _a[import_semantic_conventions.SEMRESATTRS_TELEMETRY_SDK_NAME] = SDK_INFO[import_semantic_conventions.SEMRESATTRS_TELEMETRY_SDK_NAME], _a[import_semantic_conventions.SEMRESATTRS_TELEMETRY_SDK_VERSION] = SDK_INFO[import_semantic_conventions.SEMRESATTRS_TELEMETRY_SDK_VERSION], _a));
    };
    Object.defineProperty(Resource2.prototype, "attributes", {
      get: function() {
        var _a;
        if (this.asyncAttributesPending) {
          import_api3.diag.error("Accessing resource attributes before async attributes settled");
        }
        return (_a = this._attributes) !== null && _a !== undefined ? _a : {};
      },
      enumerable: false,
      configurable: true
    });
    Resource2.prototype.waitForAsyncAttributes = function() {
      return __awaiter4(this, undefined, undefined, function() {
        return __generator4(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.asyncAttributesPending)
                return [3, 2];
              return [4, this._asyncAttributesPromise];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    Resource2.prototype.merge = function(other) {
      var _this = this;
      var _a;
      if (!other)
        return this;
      var mergedSyncAttributes = __assign(__assign({}, this._syncAttributes), (_a = other._syncAttributes) !== null && _a !== undefined ? _a : other.attributes);
      if (!this._asyncAttributesPromise && !other._asyncAttributesPromise) {
        return new Resource2(mergedSyncAttributes);
      }
      var mergedAttributesPromise = Promise.all([
        this._asyncAttributesPromise,
        other._asyncAttributesPromise
      ]).then(function(_a2) {
        var _b;
        var _c = __read9(_a2, 2), thisAsyncAttributes = _c[0], otherAsyncAttributes = _c[1];
        return __assign(__assign(__assign(__assign({}, _this._syncAttributes), thisAsyncAttributes), (_b = other._syncAttributes) !== null && _b !== undefined ? _b : other.attributes), otherAsyncAttributes);
      });
      return new Resource2(mergedSyncAttributes, mergedAttributesPromise);
    };
    Resource2.EMPTY = new Resource2({});
    return Resource2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/index.js
var init_esm5 = __esm(() => {
  init_Resource();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/view/ViewRegistry.js
var ViewRegistry;
var init_ViewRegistry = __esm(() => {
  ViewRegistry = function() {
    function ViewRegistry2() {
      this._registeredViews = [];
    }
    ViewRegistry2.prototype.addView = function(view) {
      this._registeredViews.push(view);
    };
    ViewRegistry2.prototype.findViews = function(instrument, meter) {
      var _this = this;
      var views = this._registeredViews.filter(function(registeredView) {
        return _this._matchInstrument(registeredView.instrumentSelector, instrument) && _this._matchMeter(registeredView.meterSelector, meter);
      });
      return views;
    };
    ViewRegistry2.prototype._matchInstrument = function(selector, instrument) {
      return (selector.getType() === undefined || instrument.type === selector.getType()) && selector.getNameFilter().match(instrument.name) && selector.getUnitFilter().match(instrument.unit);
    };
    ViewRegistry2.prototype._matchMeter = function(selector, meter) {
      return selector.getNameFilter().match(meter.name) && (meter.version === undefined || selector.getVersionFilter().match(meter.version)) && (meter.schemaUrl === undefined || selector.getSchemaUrlFilter().match(meter.schemaUrl));
    };
    return ViewRegistry2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/Instruments.js
function isObservableInstrument(it) {
  return it instanceof ObservableInstrument;
}
var import_api4, __extends5, SyncInstrument, UpDownCounterInstrument, CounterInstrument, GaugeInstrument, HistogramInstrument, ObservableInstrument, ObservableCounterInstrument, ObservableGaugeInstrument, ObservableUpDownCounterInstrument;
var init_Instruments = __esm(() => {
  init_esm3();
  import_api4 = __toESM(require_src(), 1);
  __extends5 = function() {
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
  SyncInstrument = function() {
    function SyncInstrument2(_writableMetricStorage, _descriptor) {
      this._writableMetricStorage = _writableMetricStorage;
      this._descriptor = _descriptor;
    }
    SyncInstrument2.prototype._record = function(value, attributes, context) {
      if (attributes === undefined) {
        attributes = {};
      }
      if (context === undefined) {
        context = import_api4.context.active();
      }
      if (typeof value !== "number") {
        import_api4.diag.warn("non-number value provided to metric " + this._descriptor.name + ": " + value);
        return;
      }
      if (this._descriptor.valueType === import_api4.ValueType.INT && !Number.isInteger(value)) {
        import_api4.diag.warn("INT value type cannot accept a floating-point value for " + this._descriptor.name + ", ignoring the fractional digits.");
        value = Math.trunc(value);
        if (!Number.isInteger(value)) {
          return;
        }
      }
      this._writableMetricStorage.record(value, attributes, context, millisToHrTime(Date.now()));
    };
    return SyncInstrument2;
  }();
  UpDownCounterInstrument = function(_super) {
    __extends5(UpDownCounterInstrument2, _super);
    function UpDownCounterInstrument2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    UpDownCounterInstrument2.prototype.add = function(value, attributes, ctx) {
      this._record(value, attributes, ctx);
    };
    return UpDownCounterInstrument2;
  }(SyncInstrument);
  CounterInstrument = function(_super) {
    __extends5(CounterInstrument2, _super);
    function CounterInstrument2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CounterInstrument2.prototype.add = function(value, attributes, ctx) {
      if (value < 0) {
        import_api4.diag.warn("negative value provided to counter " + this._descriptor.name + ": " + value);
        return;
      }
      this._record(value, attributes, ctx);
    };
    return CounterInstrument2;
  }(SyncInstrument);
  GaugeInstrument = function(_super) {
    __extends5(GaugeInstrument2, _super);
    function GaugeInstrument2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GaugeInstrument2.prototype.record = function(value, attributes, ctx) {
      this._record(value, attributes, ctx);
    };
    return GaugeInstrument2;
  }(SyncInstrument);
  HistogramInstrument = function(_super) {
    __extends5(HistogramInstrument2, _super);
    function HistogramInstrument2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    HistogramInstrument2.prototype.record = function(value, attributes, ctx) {
      if (value < 0) {
        import_api4.diag.warn("negative value provided to histogram " + this._descriptor.name + ": " + value);
        return;
      }
      this._record(value, attributes, ctx);
    };
    return HistogramInstrument2;
  }(SyncInstrument);
  ObservableInstrument = function() {
    function ObservableInstrument2(descriptor, metricStorages, _observableRegistry) {
      this._observableRegistry = _observableRegistry;
      this._descriptor = descriptor;
      this._metricStorages = metricStorages;
    }
    ObservableInstrument2.prototype.addCallback = function(callback) {
      this._observableRegistry.addCallback(callback, this);
    };
    ObservableInstrument2.prototype.removeCallback = function(callback) {
      this._observableRegistry.removeCallback(callback, this);
    };
    return ObservableInstrument2;
  }();
  ObservableCounterInstrument = function(_super) {
    __extends5(ObservableCounterInstrument2, _super);
    function ObservableCounterInstrument2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return ObservableCounterInstrument2;
  }(ObservableInstrument);
  ObservableGaugeInstrument = function(_super) {
    __extends5(ObservableGaugeInstrument2, _super);
    function ObservableGaugeInstrument2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return ObservableGaugeInstrument2;
  }(ObservableInstrument);
  ObservableUpDownCounterInstrument = function(_super) {
    __extends5(ObservableUpDownCounterInstrument2, _super);
    function ObservableUpDownCounterInstrument2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return ObservableUpDownCounterInstrument2;
  }(ObservableInstrument);
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/Meter.js
var Meter;
var init_Meter = __esm(() => {
  init_InstrumentDescriptor();
  init_Instruments();
  Meter = function() {
    function Meter2(_meterSharedState) {
      this._meterSharedState = _meterSharedState;
    }
    Meter2.prototype.createGauge = function(name, options) {
      var descriptor = createInstrumentDescriptor(name, InstrumentType.GAUGE, options);
      var storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new GaugeInstrument(storage, descriptor);
    };
    Meter2.prototype.createHistogram = function(name, options) {
      var descriptor = createInstrumentDescriptor(name, InstrumentType.HISTOGRAM, options);
      var storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new HistogramInstrument(storage, descriptor);
    };
    Meter2.prototype.createCounter = function(name, options) {
      var descriptor = createInstrumentDescriptor(name, InstrumentType.COUNTER, options);
      var storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new CounterInstrument(storage, descriptor);
    };
    Meter2.prototype.createUpDownCounter = function(name, options) {
      var descriptor = createInstrumentDescriptor(name, InstrumentType.UP_DOWN_COUNTER, options);
      var storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new UpDownCounterInstrument(storage, descriptor);
    };
    Meter2.prototype.createObservableGauge = function(name, options) {
      var descriptor = createInstrumentDescriptor(name, InstrumentType.OBSERVABLE_GAUGE, options);
      var storages = this._meterSharedState.registerAsyncMetricStorage(descriptor);
      return new ObservableGaugeInstrument(descriptor, storages, this._meterSharedState.observableRegistry);
    };
    Meter2.prototype.createObservableCounter = function(name, options) {
      var descriptor = createInstrumentDescriptor(name, InstrumentType.OBSERVABLE_COUNTER, options);
      var storages = this._meterSharedState.registerAsyncMetricStorage(descriptor);
      return new ObservableCounterInstrument(descriptor, storages, this._meterSharedState.observableRegistry);
    };
    Meter2.prototype.createObservableUpDownCounter = function(name, options) {
      var descriptor = createInstrumentDescriptor(name, InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, options);
      var storages = this._meterSharedState.registerAsyncMetricStorage(descriptor);
      return new ObservableUpDownCounterInstrument(descriptor, storages, this._meterSharedState.observableRegistry);
    };
    Meter2.prototype.addBatchObservableCallback = function(callback, observables) {
      this._meterSharedState.observableRegistry.addBatchCallback(callback, observables);
    };
    Meter2.prototype.removeBatchObservableCallback = function(callback, observables) {
      this._meterSharedState.observableRegistry.removeBatchCallback(callback, observables);
    };
    return Meter2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/MetricStorage.js
var MetricStorage;
var init_MetricStorage = __esm(() => {
  init_InstrumentDescriptor();
  MetricStorage = function() {
    function MetricStorage2(_instrumentDescriptor) {
      this._instrumentDescriptor = _instrumentDescriptor;
    }
    MetricStorage2.prototype.getInstrumentDescriptor = function() {
      return this._instrumentDescriptor;
    };
    MetricStorage2.prototype.updateDescription = function(description) {
      this._instrumentDescriptor = createInstrumentDescriptor(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
        description,
        valueType: this._instrumentDescriptor.valueType,
        unit: this._instrumentDescriptor.unit,
        advice: this._instrumentDescriptor.advice
      });
    };
    return MetricStorage2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/HashMap.js
var __extends6, __generator5 = function(thisArg, body) {
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
}, HashMap, AttributeHashMap;
var init_HashMap = __esm(() => {
  init_utils();
  __extends6 = function() {
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
  HashMap = function() {
    function HashMap2(_hash) {
      this._hash = _hash;
      this._valueMap = new Map;
      this._keyMap = new Map;
    }
    HashMap2.prototype.get = function(key, hashCode) {
      hashCode !== null && hashCode !== undefined || (hashCode = this._hash(key));
      return this._valueMap.get(hashCode);
    };
    HashMap2.prototype.getOrDefault = function(key, defaultFactory) {
      var hash = this._hash(key);
      if (this._valueMap.has(hash)) {
        return this._valueMap.get(hash);
      }
      var val = defaultFactory();
      if (!this._keyMap.has(hash)) {
        this._keyMap.set(hash, key);
      }
      this._valueMap.set(hash, val);
      return val;
    };
    HashMap2.prototype.set = function(key, value, hashCode) {
      hashCode !== null && hashCode !== undefined || (hashCode = this._hash(key));
      if (!this._keyMap.has(hashCode)) {
        this._keyMap.set(hashCode, key);
      }
      this._valueMap.set(hashCode, value);
    };
    HashMap2.prototype.has = function(key, hashCode) {
      hashCode !== null && hashCode !== undefined || (hashCode = this._hash(key));
      return this._valueMap.has(hashCode);
    };
    HashMap2.prototype.keys = function() {
      var keyIterator, next;
      return __generator5(this, function(_a) {
        switch (_a.label) {
          case 0:
            keyIterator = this._keyMap.entries();
            next = keyIterator.next();
            _a.label = 1;
          case 1:
            if (!(next.done !== true))
              return [3, 3];
            return [4, [next.value[1], next.value[0]]];
          case 2:
            _a.sent();
            next = keyIterator.next();
            return [3, 1];
          case 3:
            return [2];
        }
      });
    };
    HashMap2.prototype.entries = function() {
      var valueIterator, next;
      return __generator5(this, function(_a) {
        switch (_a.label) {
          case 0:
            valueIterator = this._valueMap.entries();
            next = valueIterator.next();
            _a.label = 1;
          case 1:
            if (!(next.done !== true))
              return [3, 3];
            return [4, [this._keyMap.get(next.value[0]), next.value[1], next.value[0]]];
          case 2:
            _a.sent();
            next = valueIterator.next();
            return [3, 1];
          case 3:
            return [2];
        }
      });
    };
    Object.defineProperty(HashMap2.prototype, "size", {
      get: function() {
        return this._valueMap.size;
      },
      enumerable: false,
      configurable: true
    });
    return HashMap2;
  }();
  AttributeHashMap = function(_super) {
    __extends6(AttributeHashMap2, _super);
    function AttributeHashMap2() {
      return _super.call(this, hashAttributes) || this;
    }
    return AttributeHashMap2;
  }(HashMap);
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/DeltaMetricProcessor.js
var __read10 = function(o, n) {
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
}, DeltaMetricProcessor;
var init_DeltaMetricProcessor = __esm(() => {
  init_utils();
  init_HashMap();
  DeltaMetricProcessor = function() {
    function DeltaMetricProcessor2(_aggregator, aggregationCardinalityLimit) {
      this._aggregator = _aggregator;
      this._activeCollectionStorage = new AttributeHashMap;
      this._cumulativeMemoStorage = new AttributeHashMap;
      this._overflowAttributes = { "otel.metric.overflow": true };
      this._cardinalityLimit = (aggregationCardinalityLimit !== null && aggregationCardinalityLimit !== undefined ? aggregationCardinalityLimit : 2000) - 1;
      this._overflowHashCode = hashAttributes(this._overflowAttributes);
    }
    DeltaMetricProcessor2.prototype.record = function(value, attributes, _context, collectionTime) {
      var _this = this;
      var accumulation = this._activeCollectionStorage.get(attributes);
      if (!accumulation) {
        if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
          var overflowAccumulation = this._activeCollectionStorage.getOrDefault(this._overflowAttributes, function() {
            return _this._aggregator.createAccumulation(collectionTime);
          });
          overflowAccumulation === null || overflowAccumulation === undefined || overflowAccumulation.record(value);
          return;
        }
        accumulation = this._aggregator.createAccumulation(collectionTime);
        this._activeCollectionStorage.set(attributes, accumulation);
      }
      accumulation === null || accumulation === undefined || accumulation.record(value);
    };
    DeltaMetricProcessor2.prototype.batchCumulate = function(measurements, collectionTime) {
      var _this = this;
      Array.from(measurements.entries()).forEach(function(_a) {
        var _b = __read10(_a, 3), attributes = _b[0], value = _b[1], hashCode = _b[2];
        var accumulation = _this._aggregator.createAccumulation(collectionTime);
        accumulation === null || accumulation === undefined || accumulation.record(value);
        var delta = accumulation;
        if (_this._cumulativeMemoStorage.has(attributes, hashCode)) {
          var previous = _this._cumulativeMemoStorage.get(attributes, hashCode);
          delta = _this._aggregator.diff(previous, accumulation);
        } else {
          if (_this._cumulativeMemoStorage.size >= _this._cardinalityLimit) {
            attributes = _this._overflowAttributes;
            hashCode = _this._overflowHashCode;
            if (_this._cumulativeMemoStorage.has(attributes, hashCode)) {
              var previous = _this._cumulativeMemoStorage.get(attributes, hashCode);
              delta = _this._aggregator.diff(previous, accumulation);
            }
          }
        }
        if (_this._activeCollectionStorage.has(attributes, hashCode)) {
          var active = _this._activeCollectionStorage.get(attributes, hashCode);
          delta = _this._aggregator.merge(active, delta);
        }
        _this._cumulativeMemoStorage.set(attributes, accumulation, hashCode);
        _this._activeCollectionStorage.set(attributes, delta, hashCode);
      });
    };
    DeltaMetricProcessor2.prototype.collect = function() {
      var unreportedDelta = this._activeCollectionStorage;
      this._activeCollectionStorage = new AttributeHashMap;
      return unreportedDelta;
    };
    return DeltaMetricProcessor2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/TemporalMetricProcessor.js
function AttributesMapToAccumulationRecords(map) {
  return Array.from(map.entries());
}
var __values3 = function(o) {
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
}, __read11 = function(o, n) {
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
}, TemporalMetricProcessor;
var init_TemporalMetricProcessor = __esm(() => {
  init_AggregationTemporality();
  init_HashMap();
  TemporalMetricProcessor = function() {
    function TemporalMetricProcessor2(_aggregator, collectorHandles) {
      var _this = this;
      this._aggregator = _aggregator;
      this._unreportedAccumulations = new Map;
      this._reportHistory = new Map;
      collectorHandles.forEach(function(handle) {
        _this._unreportedAccumulations.set(handle, []);
      });
    }
    TemporalMetricProcessor2.prototype.buildMetrics = function(collector, instrumentDescriptor, currentAccumulations, collectionTime) {
      this._stashAccumulations(currentAccumulations);
      var unreportedAccumulations = this._getMergedUnreportedAccumulations(collector);
      var result = unreportedAccumulations;
      var aggregationTemporality;
      if (this._reportHistory.has(collector)) {
        var last = this._reportHistory.get(collector);
        var lastCollectionTime = last.collectionTime;
        aggregationTemporality = last.aggregationTemporality;
        if (aggregationTemporality === AggregationTemporality.CUMULATIVE) {
          result = TemporalMetricProcessor2.merge(last.accumulations, unreportedAccumulations, this._aggregator);
        } else {
          result = TemporalMetricProcessor2.calibrateStartTime(last.accumulations, unreportedAccumulations, lastCollectionTime);
        }
      } else {
        aggregationTemporality = collector.selectAggregationTemporality(instrumentDescriptor.type);
      }
      this._reportHistory.set(collector, {
        accumulations: result,
        collectionTime,
        aggregationTemporality
      });
      var accumulationRecords = AttributesMapToAccumulationRecords(result);
      if (accumulationRecords.length === 0) {
        return;
      }
      return this._aggregator.toMetricData(instrumentDescriptor, aggregationTemporality, accumulationRecords, collectionTime);
    };
    TemporalMetricProcessor2.prototype._stashAccumulations = function(currentAccumulation) {
      var e_1, _a;
      var registeredCollectors = this._unreportedAccumulations.keys();
      try {
        for (var registeredCollectors_1 = __values3(registeredCollectors), registeredCollectors_1_1 = registeredCollectors_1.next();!registeredCollectors_1_1.done; registeredCollectors_1_1 = registeredCollectors_1.next()) {
          var collector = registeredCollectors_1_1.value;
          var stash = this._unreportedAccumulations.get(collector);
          if (stash === undefined) {
            stash = [];
            this._unreportedAccumulations.set(collector, stash);
          }
          stash.push(currentAccumulation);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (registeredCollectors_1_1 && !registeredCollectors_1_1.done && (_a = registeredCollectors_1.return))
            _a.call(registeredCollectors_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    TemporalMetricProcessor2.prototype._getMergedUnreportedAccumulations = function(collector) {
      var e_2, _a;
      var result = new AttributeHashMap;
      var unreportedList = this._unreportedAccumulations.get(collector);
      this._unreportedAccumulations.set(collector, []);
      if (unreportedList === undefined) {
        return result;
      }
      try {
        for (var unreportedList_1 = __values3(unreportedList), unreportedList_1_1 = unreportedList_1.next();!unreportedList_1_1.done; unreportedList_1_1 = unreportedList_1.next()) {
          var it_1 = unreportedList_1_1.value;
          result = TemporalMetricProcessor2.merge(result, it_1, this._aggregator);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (unreportedList_1_1 && !unreportedList_1_1.done && (_a = unreportedList_1.return))
            _a.call(unreportedList_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      return result;
    };
    TemporalMetricProcessor2.merge = function(last, current, aggregator) {
      var result = last;
      var iterator = current.entries();
      var next = iterator.next();
      while (next.done !== true) {
        var _a = __read11(next.value, 3), key = _a[0], record = _a[1], hash = _a[2];
        if (last.has(key, hash)) {
          var lastAccumulation = last.get(key, hash);
          var accumulation = aggregator.merge(lastAccumulation, record);
          result.set(key, accumulation, hash);
        } else {
          result.set(key, record, hash);
        }
        next = iterator.next();
      }
      return result;
    };
    TemporalMetricProcessor2.calibrateStartTime = function(last, current, lastCollectionTime) {
      var e_3, _a;
      try {
        for (var _b = __values3(last.keys()), _c = _b.next();!_c.done; _c = _b.next()) {
          var _d = __read11(_c.value, 2), key = _d[0], hash = _d[1];
          var currentAccumulation = current.get(key, hash);
          currentAccumulation === null || currentAccumulation === undefined || currentAccumulation.setStartTime(lastCollectionTime);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      return current;
    };
    return TemporalMetricProcessor2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/AsyncMetricStorage.js
var __extends7, __read12 = function(o, n) {
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
}, AsyncMetricStorage;
var init_AsyncMetricStorage = __esm(() => {
  init_MetricStorage();
  init_DeltaMetricProcessor();
  init_TemporalMetricProcessor();
  init_HashMap();
  __extends7 = function() {
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
  AsyncMetricStorage = function(_super) {
    __extends7(AsyncMetricStorage2, _super);
    function AsyncMetricStorage2(_instrumentDescriptor, aggregator, _attributesProcessor, collectorHandles, _aggregationCardinalityLimit) {
      var _this = _super.call(this, _instrumentDescriptor) || this;
      _this._attributesProcessor = _attributesProcessor;
      _this._aggregationCardinalityLimit = _aggregationCardinalityLimit;
      _this._deltaMetricStorage = new DeltaMetricProcessor(aggregator, _this._aggregationCardinalityLimit);
      _this._temporalMetricStorage = new TemporalMetricProcessor(aggregator, collectorHandles);
      return _this;
    }
    AsyncMetricStorage2.prototype.record = function(measurements, observationTime) {
      var _this = this;
      var processed = new AttributeHashMap;
      Array.from(measurements.entries()).forEach(function(_a) {
        var _b = __read12(_a, 2), attributes = _b[0], value = _b[1];
        processed.set(_this._attributesProcessor.process(attributes), value);
      });
      this._deltaMetricStorage.batchCumulate(processed, observationTime);
    };
    AsyncMetricStorage2.prototype.collect = function(collector, collectionTime) {
      var accumulations = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(collector, this._instrumentDescriptor, accumulations, collectionTime);
    };
    return AsyncMetricStorage2;
  }(MetricStorage);
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/view/RegistrationConflicts.js
function getIncompatibilityDetails(existing, otherDescriptor) {
  var incompatibility = "";
  if (existing.unit !== otherDescriptor.unit) {
    incompatibility += "\t- Unit '" + existing.unit + "' does not match '" + otherDescriptor.unit + `'
`;
  }
  if (existing.type !== otherDescriptor.type) {
    incompatibility += "\t- Type '" + existing.type + "' does not match '" + otherDescriptor.type + `'
`;
  }
  if (existing.valueType !== otherDescriptor.valueType) {
    incompatibility += "\t- Value Type '" + existing.valueType + "' does not match '" + otherDescriptor.valueType + `'
`;
  }
  if (existing.description !== otherDescriptor.description) {
    incompatibility += "\t- Description '" + existing.description + "' does not match '" + otherDescriptor.description + `'
`;
  }
  return incompatibility;
}
function getValueTypeConflictResolutionRecipe(existing, otherDescriptor) {
  return "\t- use valueType '" + existing.valueType + "' on instrument creation or use an instrument name other than '" + otherDescriptor.name + "'";
}
function getUnitConflictResolutionRecipe(existing, otherDescriptor) {
  return "\t- use unit '" + existing.unit + "' on instrument creation or use an instrument name other than '" + otherDescriptor.name + "'";
}
function getTypeConflictResolutionRecipe(existing, otherDescriptor) {
  var selector = {
    name: otherDescriptor.name,
    type: otherDescriptor.type,
    unit: otherDescriptor.unit
  };
  var selectorString = JSON.stringify(selector);
  return "\t- create a new view with a name other than '" + existing.name + "' and InstrumentSelector '" + selectorString + "'";
}
function getDescriptionResolutionRecipe(existing, otherDescriptor) {
  var selector = {
    name: otherDescriptor.name,
    type: otherDescriptor.type,
    unit: otherDescriptor.unit
  };
  var selectorString = JSON.stringify(selector);
  return "\t- create a new view with a name other than '" + existing.name + "' and InstrumentSelector '" + selectorString + `'
    	- OR - create a new view with the name ` + existing.name + " and description '" + existing.description + "' and InstrumentSelector " + selectorString + `
    	- OR - create a new view with the name ` + otherDescriptor.name + " and description '" + existing.description + "' and InstrumentSelector " + selectorString;
}
function getConflictResolutionRecipe(existing, otherDescriptor) {
  if (existing.valueType !== otherDescriptor.valueType) {
    return getValueTypeConflictResolutionRecipe(existing, otherDescriptor);
  }
  if (existing.unit !== otherDescriptor.unit) {
    return getUnitConflictResolutionRecipe(existing, otherDescriptor);
  }
  if (existing.type !== otherDescriptor.type) {
    return getTypeConflictResolutionRecipe(existing, otherDescriptor);
  }
  if (existing.description !== otherDescriptor.description) {
    return getDescriptionResolutionRecipe(existing, otherDescriptor);
  }
  return "";
}
var init_RegistrationConflicts = () => {};

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/MetricStorageRegistry.js
var api4, __values4 = function(o) {
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
}, MetricStorageRegistry;
var init_MetricStorageRegistry = __esm(() => {
  init_InstrumentDescriptor();
  init_RegistrationConflicts();
  api4 = __toESM(require_src(), 1);
  MetricStorageRegistry = function() {
    function MetricStorageRegistry2() {
      this._sharedRegistry = new Map;
      this._perCollectorRegistry = new Map;
    }
    MetricStorageRegistry2.create = function() {
      return new MetricStorageRegistry2;
    };
    MetricStorageRegistry2.prototype.getStorages = function(collector) {
      var e_1, _a, e_2, _b;
      var storages = [];
      try {
        for (var _c = __values4(this._sharedRegistry.values()), _d = _c.next();!_d.done; _d = _c.next()) {
          var metricStorages = _d.value;
          storages = storages.concat(metricStorages);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return))
            _a.call(_c);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      var perCollectorStorages = this._perCollectorRegistry.get(collector);
      if (perCollectorStorages != null) {
        try {
          for (var _e = __values4(perCollectorStorages.values()), _f = _e.next();!_f.done; _f = _e.next()) {
            var metricStorages = _f.value;
            storages = storages.concat(metricStorages);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return))
              _b.call(_e);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      return storages;
    };
    MetricStorageRegistry2.prototype.register = function(storage) {
      this._registerStorage(storage, this._sharedRegistry);
    };
    MetricStorageRegistry2.prototype.registerForCollector = function(collector, storage) {
      var storageMap = this._perCollectorRegistry.get(collector);
      if (storageMap == null) {
        storageMap = new Map;
        this._perCollectorRegistry.set(collector, storageMap);
      }
      this._registerStorage(storage, storageMap);
    };
    MetricStorageRegistry2.prototype.findOrUpdateCompatibleStorage = function(expectedDescriptor) {
      var storages = this._sharedRegistry.get(expectedDescriptor.name);
      if (storages === undefined) {
        return null;
      }
      return this._findOrUpdateCompatibleStorage(expectedDescriptor, storages);
    };
    MetricStorageRegistry2.prototype.findOrUpdateCompatibleCollectorStorage = function(collector, expectedDescriptor) {
      var storageMap = this._perCollectorRegistry.get(collector);
      if (storageMap === undefined) {
        return null;
      }
      var storages = storageMap.get(expectedDescriptor.name);
      if (storages === undefined) {
        return null;
      }
      return this._findOrUpdateCompatibleStorage(expectedDescriptor, storages);
    };
    MetricStorageRegistry2.prototype._registerStorage = function(storage, storageMap) {
      var descriptor = storage.getInstrumentDescriptor();
      var storages = storageMap.get(descriptor.name);
      if (storages === undefined) {
        storageMap.set(descriptor.name, [storage]);
        return;
      }
      storages.push(storage);
    };
    MetricStorageRegistry2.prototype._findOrUpdateCompatibleStorage = function(expectedDescriptor, existingStorages) {
      var e_3, _a;
      var compatibleStorage = null;
      try {
        for (var existingStorages_1 = __values4(existingStorages), existingStorages_1_1 = existingStorages_1.next();!existingStorages_1_1.done; existingStorages_1_1 = existingStorages_1.next()) {
          var existingStorage = existingStorages_1_1.value;
          var existingDescriptor = existingStorage.getInstrumentDescriptor();
          if (isDescriptorCompatibleWith(existingDescriptor, expectedDescriptor)) {
            if (existingDescriptor.description !== expectedDescriptor.description) {
              if (expectedDescriptor.description.length > existingDescriptor.description.length) {
                existingStorage.updateDescription(expectedDescriptor.description);
              }
              api4.diag.warn("A view or instrument with the name ", expectedDescriptor.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, getIncompatibilityDetails(existingDescriptor, expectedDescriptor), `The longer description will be used.
To resolve the conflict:`, getConflictResolutionRecipe(existingDescriptor, expectedDescriptor));
            }
            compatibleStorage = existingStorage;
          } else {
            api4.diag.warn("A view or instrument with the name ", expectedDescriptor.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, getIncompatibilityDetails(existingDescriptor, expectedDescriptor), `To resolve the conflict:
`, getConflictResolutionRecipe(existingDescriptor, expectedDescriptor));
          }
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (existingStorages_1_1 && !existingStorages_1_1.done && (_a = existingStorages_1.return))
            _a.call(existingStorages_1);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      return compatibleStorage;
    };
    return MetricStorageRegistry2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/MultiWritableMetricStorage.js
var MultiMetricStorage;
var init_MultiWritableMetricStorage = __esm(() => {
  MultiMetricStorage = function() {
    function MultiMetricStorage2(_backingStorages) {
      this._backingStorages = _backingStorages;
    }
    MultiMetricStorage2.prototype.record = function(value, attributes, context, recordTime) {
      this._backingStorages.forEach(function(it) {
        it.record(value, attributes, context, recordTime);
      });
    };
    return MultiMetricStorage2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/ObservableResult.js
var import_api5, ObservableResultImpl, BatchObservableResultImpl;
var init_ObservableResult = __esm(() => {
  init_HashMap();
  init_Instruments();
  import_api5 = __toESM(require_src(), 1);
  ObservableResultImpl = function() {
    function ObservableResultImpl2(_instrumentName, _valueType) {
      this._instrumentName = _instrumentName;
      this._valueType = _valueType;
      this._buffer = new AttributeHashMap;
    }
    ObservableResultImpl2.prototype.observe = function(value, attributes) {
      if (attributes === undefined) {
        attributes = {};
      }
      if (typeof value !== "number") {
        import_api5.diag.warn("non-number value provided to metric " + this._instrumentName + ": " + value);
        return;
      }
      if (this._valueType === import_api5.ValueType.INT && !Number.isInteger(value)) {
        import_api5.diag.warn("INT value type cannot accept a floating-point value for " + this._instrumentName + ", ignoring the fractional digits.");
        value = Math.trunc(value);
        if (!Number.isInteger(value)) {
          return;
        }
      }
      this._buffer.set(attributes, value);
    };
    return ObservableResultImpl2;
  }();
  BatchObservableResultImpl = function() {
    function BatchObservableResultImpl2() {
      this._buffer = new Map;
    }
    BatchObservableResultImpl2.prototype.observe = function(metric, value, attributes) {
      if (attributes === undefined) {
        attributes = {};
      }
      if (!isObservableInstrument(metric)) {
        return;
      }
      var map = this._buffer.get(metric);
      if (map == null) {
        map = new AttributeHashMap;
        this._buffer.set(metric, map);
      }
      if (typeof value !== "number") {
        import_api5.diag.warn("non-number value provided to metric " + metric._descriptor.name + ": " + value);
        return;
      }
      if (metric._descriptor.valueType === import_api5.ValueType.INT && !Number.isInteger(value)) {
        import_api5.diag.warn("INT value type cannot accept a floating-point value for " + metric._descriptor.name + ", ignoring the fractional digits.");
        value = Math.trunc(value);
        if (!Number.isInteger(value)) {
          return;
        }
      }
      map.set(attributes, value);
    };
    return BatchObservableResultImpl2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/ObservableRegistry.js
var import_api6, __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator6 = function(thisArg, body) {
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
}, __read13 = function(o, n) {
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
}, __spreadArray5 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, ObservableRegistry;
var init_ObservableRegistry = __esm(() => {
  init_Instruments();
  init_ObservableResult();
  init_utils();
  import_api6 = __toESM(require_src(), 1);
  ObservableRegistry = function() {
    function ObservableRegistry2() {
      this._callbacks = [];
      this._batchCallbacks = [];
    }
    ObservableRegistry2.prototype.addCallback = function(callback, instrument) {
      var idx = this._findCallback(callback, instrument);
      if (idx >= 0) {
        return;
      }
      this._callbacks.push({ callback, instrument });
    };
    ObservableRegistry2.prototype.removeCallback = function(callback, instrument) {
      var idx = this._findCallback(callback, instrument);
      if (idx < 0) {
        return;
      }
      this._callbacks.splice(idx, 1);
    };
    ObservableRegistry2.prototype.addBatchCallback = function(callback, instruments) {
      var observableInstruments = new Set(instruments.filter(isObservableInstrument));
      if (observableInstruments.size === 0) {
        import_api6.diag.error("BatchObservableCallback is not associated with valid instruments", instruments);
        return;
      }
      var idx = this._findBatchCallback(callback, observableInstruments);
      if (idx >= 0) {
        return;
      }
      this._batchCallbacks.push({ callback, instruments: observableInstruments });
    };
    ObservableRegistry2.prototype.removeBatchCallback = function(callback, instruments) {
      var observableInstruments = new Set(instruments.filter(isObservableInstrument));
      var idx = this._findBatchCallback(callback, observableInstruments);
      if (idx < 0) {
        return;
      }
      this._batchCallbacks.splice(idx, 1);
    };
    ObservableRegistry2.prototype.observe = function(collectionTime, timeoutMillis) {
      return __awaiter5(this, undefined, undefined, function() {
        var callbackFutures, batchCallbackFutures, results, rejections;
        return __generator6(this, function(_a) {
          switch (_a.label) {
            case 0:
              callbackFutures = this._observeCallbacks(collectionTime, timeoutMillis);
              batchCallbackFutures = this._observeBatchCallbacks(collectionTime, timeoutMillis);
              return [4, PromiseAllSettled(__spreadArray5(__spreadArray5([], __read13(callbackFutures), false), __read13(batchCallbackFutures), false))];
            case 1:
              results = _a.sent();
              rejections = results.filter(isPromiseAllSettledRejectionResult).map(function(it) {
                return it.reason;
              });
              return [2, rejections];
          }
        });
      });
    };
    ObservableRegistry2.prototype._observeCallbacks = function(observationTime, timeoutMillis) {
      var _this = this;
      return this._callbacks.map(function(_a) {
        var { callback, instrument } = _a;
        return __awaiter5(_this, undefined, undefined, function() {
          var observableResult, callPromise;
          return __generator6(this, function(_b) {
            switch (_b.label) {
              case 0:
                observableResult = new ObservableResultImpl(instrument._descriptor.name, instrument._descriptor.valueType);
                callPromise = Promise.resolve(callback(observableResult));
                if (timeoutMillis != null) {
                  callPromise = callWithTimeout(callPromise, timeoutMillis);
                }
                return [4, callPromise];
              case 1:
                _b.sent();
                instrument._metricStorages.forEach(function(metricStorage) {
                  metricStorage.record(observableResult._buffer, observationTime);
                });
                return [2];
            }
          });
        });
      });
    };
    ObservableRegistry2.prototype._observeBatchCallbacks = function(observationTime, timeoutMillis) {
      var _this = this;
      return this._batchCallbacks.map(function(_a) {
        var { callback, instruments } = _a;
        return __awaiter5(_this, undefined, undefined, function() {
          var observableResult, callPromise;
          return __generator6(this, function(_b) {
            switch (_b.label) {
              case 0:
                observableResult = new BatchObservableResultImpl;
                callPromise = Promise.resolve(callback(observableResult));
                if (timeoutMillis != null) {
                  callPromise = callWithTimeout(callPromise, timeoutMillis);
                }
                return [4, callPromise];
              case 1:
                _b.sent();
                instruments.forEach(function(instrument) {
                  var buffer = observableResult._buffer.get(instrument);
                  if (buffer == null) {
                    return;
                  }
                  instrument._metricStorages.forEach(function(metricStorage) {
                    metricStorage.record(buffer, observationTime);
                  });
                });
                return [2];
            }
          });
        });
      });
    };
    ObservableRegistry2.prototype._findCallback = function(callback, instrument) {
      return this._callbacks.findIndex(function(record) {
        return record.callback === callback && record.instrument === instrument;
      });
    };
    ObservableRegistry2.prototype._findBatchCallback = function(callback, instruments) {
      return this._batchCallbacks.findIndex(function(record) {
        return record.callback === callback && setEquals(record.instruments, instruments);
      });
    };
    return ObservableRegistry2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/SyncMetricStorage.js
var __extends8, SyncMetricStorage;
var init_SyncMetricStorage = __esm(() => {
  init_MetricStorage();
  init_DeltaMetricProcessor();
  init_TemporalMetricProcessor();
  __extends8 = function() {
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
  SyncMetricStorage = function(_super) {
    __extends8(SyncMetricStorage2, _super);
    function SyncMetricStorage2(instrumentDescriptor, aggregator, _attributesProcessor, collectorHandles, _aggregationCardinalityLimit) {
      var _this = _super.call(this, instrumentDescriptor) || this;
      _this._attributesProcessor = _attributesProcessor;
      _this._aggregationCardinalityLimit = _aggregationCardinalityLimit;
      _this._deltaMetricStorage = new DeltaMetricProcessor(aggregator, _this._aggregationCardinalityLimit);
      _this._temporalMetricStorage = new TemporalMetricProcessor(aggregator, collectorHandles);
      return _this;
    }
    SyncMetricStorage2.prototype.record = function(value, attributes, context, recordTime) {
      attributes = this._attributesProcessor.process(attributes, context);
      this._deltaMetricStorage.record(value, attributes, context, recordTime);
    };
    SyncMetricStorage2.prototype.collect = function(collector, collectionTime) {
      var accumulations = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(collector, this._instrumentDescriptor, accumulations, collectionTime);
    };
    return SyncMetricStorage2;
  }(MetricStorage);
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/view/AttributesProcessor.js
var __extends9, AttributesProcessor, NoopAttributesProcessor, FilteringAttributesProcessor, NOOP;
var init_AttributesProcessor = __esm(() => {
  __extends9 = function() {
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
  AttributesProcessor = function() {
    function AttributesProcessor2() {}
    AttributesProcessor2.Noop = function() {
      return NOOP;
    };
    return AttributesProcessor2;
  }();
  NoopAttributesProcessor = function(_super) {
    __extends9(NoopAttributesProcessor2, _super);
    function NoopAttributesProcessor2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopAttributesProcessor2.prototype.process = function(incoming, _context) {
      return incoming;
    };
    return NoopAttributesProcessor2;
  }(AttributesProcessor);
  FilteringAttributesProcessor = function(_super) {
    __extends9(FilteringAttributesProcessor2, _super);
    function FilteringAttributesProcessor2(_allowedAttributeNames) {
      var _this = _super.call(this) || this;
      _this._allowedAttributeNames = _allowedAttributeNames;
      return _this;
    }
    FilteringAttributesProcessor2.prototype.process = function(incoming, _context) {
      var _this = this;
      var filteredAttributes = {};
      Object.keys(incoming).filter(function(attributeName) {
        return _this._allowedAttributeNames.includes(attributeName);
      }).forEach(function(attributeName) {
        return filteredAttributes[attributeName] = incoming[attributeName];
      });
      return filteredAttributes;
    };
    return FilteringAttributesProcessor2;
  }(AttributesProcessor);
  NOOP = new NoopAttributesProcessor;
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/MeterSharedState.js
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator7 = function(thisArg, body) {
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
}, __read14 = function(o, n) {
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
}, MeterSharedState;
var init_MeterSharedState = __esm(() => {
  init_InstrumentDescriptor();
  init_Meter();
  init_utils();
  init_AsyncMetricStorage();
  init_MetricStorageRegistry();
  init_MultiWritableMetricStorage();
  init_ObservableRegistry();
  init_SyncMetricStorage();
  init_AttributesProcessor();
  MeterSharedState = function() {
    function MeterSharedState2(_meterProviderSharedState, _instrumentationScope) {
      this._meterProviderSharedState = _meterProviderSharedState;
      this._instrumentationScope = _instrumentationScope;
      this.metricStorageRegistry = new MetricStorageRegistry;
      this.observableRegistry = new ObservableRegistry;
      this.meter = new Meter(this);
    }
    MeterSharedState2.prototype.registerMetricStorage = function(descriptor) {
      var storages = this._registerMetricStorage(descriptor, SyncMetricStorage);
      if (storages.length === 1) {
        return storages[0];
      }
      return new MultiMetricStorage(storages);
    };
    MeterSharedState2.prototype.registerAsyncMetricStorage = function(descriptor) {
      var storages = this._registerMetricStorage(descriptor, AsyncMetricStorage);
      return storages;
    };
    MeterSharedState2.prototype.collect = function(collector, collectionTime, options) {
      return __awaiter6(this, undefined, undefined, function() {
        var errors, storages, metricDataList;
        return __generator7(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.observableRegistry.observe(collectionTime, options === null || options === undefined ? undefined : options.timeoutMillis)];
            case 1:
              errors = _a.sent();
              storages = this.metricStorageRegistry.getStorages(collector);
              if (storages.length === 0) {
                return [2, null];
              }
              metricDataList = storages.map(function(metricStorage) {
                return metricStorage.collect(collector, collectionTime);
              }).filter(isNotNullish);
              if (metricDataList.length === 0) {
                return [2, { errors }];
              }
              return [2, {
                scopeMetrics: {
                  scope: this._instrumentationScope,
                  metrics: metricDataList
                },
                errors
              }];
          }
        });
      });
    };
    MeterSharedState2.prototype._registerMetricStorage = function(descriptor, MetricStorageType) {
      var _this = this;
      var views = this._meterProviderSharedState.viewRegistry.findViews(descriptor, this._instrumentationScope);
      var storages = views.map(function(view) {
        var viewDescriptor = createInstrumentDescriptorWithView(view, descriptor);
        var compatibleStorage = _this.metricStorageRegistry.findOrUpdateCompatibleStorage(viewDescriptor);
        if (compatibleStorage != null) {
          return compatibleStorage;
        }
        var aggregator = view.aggregation.createAggregator(viewDescriptor);
        var viewStorage = new MetricStorageType(viewDescriptor, aggregator, view.attributesProcessor, _this._meterProviderSharedState.metricCollectors, view.aggregationCardinalityLimit);
        _this.metricStorageRegistry.register(viewStorage);
        return viewStorage;
      });
      if (storages.length === 0) {
        var perCollectorAggregations = this._meterProviderSharedState.selectAggregations(descriptor.type);
        var collectorStorages = perCollectorAggregations.map(function(_a) {
          var _b = __read14(_a, 2), collector = _b[0], aggregation = _b[1];
          var compatibleStorage = _this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(collector, descriptor);
          if (compatibleStorage != null) {
            return compatibleStorage;
          }
          var aggregator = aggregation.createAggregator(descriptor);
          var cardinalityLimit = collector.selectCardinalityLimit(descriptor.type);
          var storage = new MetricStorageType(descriptor, aggregator, AttributesProcessor.Noop(), [collector], cardinalityLimit);
          _this.metricStorageRegistry.registerForCollector(collector, storage);
          return storage;
        });
        storages = storages.concat(collectorStorages);
      }
      return storages;
    };
    return MeterSharedState2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/MeterProviderSharedState.js
var __values5 = function(o) {
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
}, MeterProviderSharedState;
var init_MeterProviderSharedState = __esm(() => {
  init_utils();
  init_ViewRegistry();
  init_MeterSharedState();
  MeterProviderSharedState = function() {
    function MeterProviderSharedState2(resource) {
      this.resource = resource;
      this.viewRegistry = new ViewRegistry;
      this.metricCollectors = [];
      this.meterSharedStates = new Map;
    }
    MeterProviderSharedState2.prototype.getMeterSharedState = function(instrumentationScope) {
      var id = instrumentationScopeId(instrumentationScope);
      var meterSharedState = this.meterSharedStates.get(id);
      if (meterSharedState == null) {
        meterSharedState = new MeterSharedState(this, instrumentationScope);
        this.meterSharedStates.set(id, meterSharedState);
      }
      return meterSharedState;
    };
    MeterProviderSharedState2.prototype.selectAggregations = function(instrumentType) {
      var e_1, _a;
      var result = [];
      try {
        for (var _b = __values5(this.metricCollectors), _c = _b.next();!_c.done; _c = _b.next()) {
          var collector = _c.value;
          result.push([collector, collector.selectAggregation(instrumentType)]);
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
      return result;
    };
    return MeterProviderSharedState2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/state/MetricCollector.js
var __awaiter7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator8 = function(thisArg, body) {
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
}, __read15 = function(o, n) {
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
}, __spreadArray6 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, MetricCollector;
var init_MetricCollector = __esm(() => {
  init_esm3();
  MetricCollector = function() {
    function MetricCollector2(_sharedState, _metricReader) {
      this._sharedState = _sharedState;
      this._metricReader = _metricReader;
    }
    MetricCollector2.prototype.collect = function(options) {
      return __awaiter7(this, undefined, undefined, function() {
        var collectionTime, scopeMetrics, errors, meterCollectionPromises;
        var _this = this;
        return __generator8(this, function(_a) {
          switch (_a.label) {
            case 0:
              collectionTime = millisToHrTime(Date.now());
              scopeMetrics = [];
              errors = [];
              meterCollectionPromises = Array.from(this._sharedState.meterSharedStates.values()).map(function(meterSharedState) {
                return __awaiter7(_this, undefined, undefined, function() {
                  var current;
                  return __generator8(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        return [4, meterSharedState.collect(this, collectionTime, options)];
                      case 1:
                        current = _a2.sent();
                        if ((current === null || current === undefined ? undefined : current.scopeMetrics) != null) {
                          scopeMetrics.push(current.scopeMetrics);
                        }
                        if ((current === null || current === undefined ? undefined : current.errors) != null) {
                          errors.push.apply(errors, __spreadArray6([], __read15(current.errors), false));
                        }
                        return [2];
                    }
                  });
                });
              });
              return [4, Promise.all(meterCollectionPromises)];
            case 1:
              _a.sent();
              return [2, {
                resourceMetrics: {
                  resource: this._sharedState.resource,
                  scopeMetrics
                },
                errors
              }];
          }
        });
      });
    };
    MetricCollector2.prototype.forceFlush = function(options) {
      return __awaiter7(this, undefined, undefined, function() {
        return __generator8(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._metricReader.forceFlush(options)];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    };
    MetricCollector2.prototype.shutdown = function(options) {
      return __awaiter7(this, undefined, undefined, function() {
        return __generator8(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._metricReader.shutdown(options)];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    };
    MetricCollector2.prototype.selectAggregationTemporality = function(instrumentType) {
      return this._metricReader.selectAggregationTemporality(instrumentType);
    };
    MetricCollector2.prototype.selectAggregation = function(instrumentType) {
      return this._metricReader.selectAggregation(instrumentType);
    };
    MetricCollector2.prototype.selectCardinalityLimit = function(instrumentType) {
      var _a, _b, _c;
      return (_c = (_b = (_a = this._metricReader).selectCardinalityLimit) === null || _b === undefined ? undefined : _b.call(_a, instrumentType)) !== null && _c !== undefined ? _c : 2000;
    };
    return MetricCollector2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/MeterProvider.js
function prepareResource(mergeWithDefaults, providedResource) {
  var resource = providedResource !== null && providedResource !== undefined ? providedResource : Resource.empty();
  if (mergeWithDefaults) {
    return Resource.default().merge(resource);
  }
  return resource;
}
var import_api7, __awaiter8 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator9 = function(thisArg, body) {
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
}, __values6 = function(o) {
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
}, MeterProvider;
var init_MeterProvider = __esm(() => {
  init_esm5();
  init_MeterProviderSharedState();
  init_MetricCollector();
  import_api7 = __toESM(require_src(), 1);
  MeterProvider = function() {
    function MeterProvider2(options) {
      var e_1, _a, e_2, _b;
      var _c;
      this._shutdown = false;
      this._sharedState = new MeterProviderSharedState(prepareResource((_c = options === null || options === undefined ? undefined : options.mergeResourceWithDefaults) !== null && _c !== undefined ? _c : true, options === null || options === undefined ? undefined : options.resource));
      if ((options === null || options === undefined ? undefined : options.views) != null && options.views.length > 0) {
        try {
          for (var _d = __values6(options.views), _e = _d.next();!_e.done; _e = _d.next()) {
            var view = _e.value;
            this._sharedState.viewRegistry.addView(view);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d.return))
              _a.call(_d);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
      if ((options === null || options === undefined ? undefined : options.readers) != null && options.readers.length > 0) {
        try {
          for (var _f = __values6(options.readers), _g = _f.next();!_g.done; _g = _f.next()) {
            var metricReader = _g.value;
            this.addMetricReader(metricReader);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_g && !_g.done && (_b = _f.return))
              _b.call(_f);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
    }
    MeterProvider2.prototype.getMeter = function(name, version, options) {
      if (version === undefined) {
        version = "";
      }
      if (options === undefined) {
        options = {};
      }
      if (this._shutdown) {
        import_api7.diag.warn("A shutdown MeterProvider cannot provide a Meter");
        return import_api7.createNoopMeter();
      }
      return this._sharedState.getMeterSharedState({
        name,
        version,
        schemaUrl: options.schemaUrl
      }).meter;
    };
    MeterProvider2.prototype.addMetricReader = function(metricReader) {
      var collector = new MetricCollector(this._sharedState, metricReader);
      metricReader.setMetricProducer(collector);
      this._sharedState.metricCollectors.push(collector);
    };
    MeterProvider2.prototype.shutdown = function(options) {
      return __awaiter8(this, undefined, undefined, function() {
        return __generator9(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this._shutdown) {
                import_api7.diag.warn("shutdown may only be called once per MeterProvider");
                return [2];
              }
              this._shutdown = true;
              return [4, Promise.all(this._sharedState.metricCollectors.map(function(collector) {
                return collector.shutdown(options);
              }))];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    };
    MeterProvider2.prototype.forceFlush = function(options) {
      return __awaiter8(this, undefined, undefined, function() {
        return __generator9(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this._shutdown) {
                import_api7.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
                return [2];
              }
              return [4, Promise.all(this._sharedState.metricCollectors.map(function(collector) {
                return collector.forceFlush(options);
              }))];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    };
    return MeterProvider2;
  }();
});

// node_modules/@opentelemetry/sdk-metrics/build/esm/index.js
var init_esm6 = __esm(() => {
  init_AggregationTemporality();
  init_PeriodicExportingMetricReader();
  init_ConsoleMetricExporter();
  init_MeterProvider();
});

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/internal/utils.js
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

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/trace/SemanticAttributes.js
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

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/trace/index.js
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

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/resource/SemanticResourceAttributes.js
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

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/resource/index.js
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

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/stable_attributes.js
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

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/stable_metrics.js
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

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/semantic-conventions/build/src/index.js
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
  __exportStar(require_trace2(), exports);
  __exportStar(require_resource2(), exports);
  __exportStar(require_stable_attributes2(), exports);
  __exportStar(require_stable_metrics2(), exports);
});

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/resources/build/esm/platform/node/default-service-name.js
function defaultServiceName3() {
  return "unknown_service:" + process.argv0;
}
var init_default_service_name2 = () => {};

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/resources/build/esm/platform/node/index.js
var init_node2 = __esm(() => {
  init_default_service_name2();
});

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/resources/build/esm/platform/index.js
var init_platform3 = __esm(() => {
  init_node2();
});

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/resources/build/esm/Resource.js
var import_api8, import_semantic_conventions2, __assign2 = function() {
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
}, __awaiter9 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator10 = function(thisArg, body) {
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
}, __read16 = function(o, n) {
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
}, Resource2;
var init_Resource2 = __esm(() => {
  init_esm3();
  init_platform3();
  import_api8 = __toESM(require_src(), 1);
  import_semantic_conventions2 = __toESM(require_src4(), 1);
  Resource2 = function() {
    function Resource3(attributes, asyncAttributesPromise) {
      var _this = this;
      var _a;
      this._attributes = attributes;
      this.asyncAttributesPending = asyncAttributesPromise != null;
      this._syncAttributes = (_a = this._attributes) !== null && _a !== undefined ? _a : {};
      this._asyncAttributesPromise = asyncAttributesPromise === null || asyncAttributesPromise === undefined ? undefined : asyncAttributesPromise.then(function(asyncAttributes) {
        _this._attributes = Object.assign({}, _this._attributes, asyncAttributes);
        _this.asyncAttributesPending = false;
        return asyncAttributes;
      }, function(err) {
        import_api8.diag.debug("a resource's async attributes promise rejected: %s", err);
        _this.asyncAttributesPending = false;
        return {};
      });
    }
    Resource3.empty = function() {
      return Resource3.EMPTY;
    };
    Resource3.default = function() {
      var _a;
      return new Resource3((_a = {}, _a[import_semantic_conventions2.SEMRESATTRS_SERVICE_NAME] = defaultServiceName3(), _a[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE] = SDK_INFO[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE], _a[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_NAME] = SDK_INFO[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_NAME], _a[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_VERSION] = SDK_INFO[import_semantic_conventions2.SEMRESATTRS_TELEMETRY_SDK_VERSION], _a));
    };
    Object.defineProperty(Resource3.prototype, "attributes", {
      get: function() {
        var _a;
        if (this.asyncAttributesPending) {
          import_api8.diag.error("Accessing resource attributes before async attributes settled");
        }
        return (_a = this._attributes) !== null && _a !== undefined ? _a : {};
      },
      enumerable: false,
      configurable: true
    });
    Resource3.prototype.waitForAsyncAttributes = function() {
      return __awaiter9(this, undefined, undefined, function() {
        return __generator10(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.asyncAttributesPending)
                return [3, 2];
              return [4, this._asyncAttributesPromise];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    Resource3.prototype.merge = function(other) {
      var _this = this;
      var _a;
      if (!other)
        return this;
      var mergedSyncAttributes = __assign2(__assign2({}, this._syncAttributes), (_a = other._syncAttributes) !== null && _a !== undefined ? _a : other.attributes);
      if (!this._asyncAttributesPromise && !other._asyncAttributesPromise) {
        return new Resource3(mergedSyncAttributes);
      }
      var mergedAttributesPromise = Promise.all([
        this._asyncAttributesPromise,
        other._asyncAttributesPromise
      ]).then(function(_a2) {
        var _b;
        var _c = __read16(_a2, 2), thisAsyncAttributes = _c[0], otherAsyncAttributes = _c[1];
        return __assign2(__assign2(__assign2(__assign2({}, _this._syncAttributes), thisAsyncAttributes), (_b = other._syncAttributes) !== null && _b !== undefined ? _b : other.attributes), otherAsyncAttributes);
      });
      return new Resource3(mergedSyncAttributes, mergedAttributesPromise);
    };
    Resource3.EMPTY = new Resource3({});
    return Resource3;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/node_modules/@opentelemetry/resources/build/esm/index.js
var init_esm7 = __esm(() => {
  init_Resource2();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/enums.js
var ExceptionEventName = "exception";
var init_enums = () => {};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js
var import_api9, import_semantic_conventions3, __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length;i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
}, __values7 = function(o) {
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
}, __read17 = function(o, n) {
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
}, __spreadArray7 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, Span;
var init_Span = __esm(() => {
  init_esm3();
  init_enums();
  import_api9 = __toESM(require_src(), 1);
  import_semantic_conventions3 = __toESM(require_src4(), 1);
  Span = function() {
    function Span2(parentTracer, context, spanName, spanContext, kind, parentSpanId, links, startTime, _deprecatedClock, attributes) {
      if (links === undefined) {
        links = [];
      }
      this.attributes = {};
      this.links = [];
      this.events = [];
      this._droppedAttributesCount = 0;
      this._droppedEventsCount = 0;
      this._droppedLinksCount = 0;
      this.status = {
        code: import_api9.SpanStatusCode.UNSET
      };
      this.endTime = [0, 0];
      this._ended = false;
      this._duration = [-1, -1];
      this.name = spanName;
      this._spanContext = spanContext;
      this.parentSpanId = parentSpanId;
      this.kind = kind;
      this.links = links;
      var now = Date.now();
      this._performanceStartTime = otperformance.now();
      this._performanceOffset = now - (this._performanceStartTime + getTimeOrigin());
      this._startTimeProvided = startTime != null;
      this.startTime = this._getTime(startTime !== null && startTime !== undefined ? startTime : now);
      this.resource = parentTracer.resource;
      this.instrumentationLibrary = parentTracer.instrumentationLibrary;
      this._spanLimits = parentTracer.getSpanLimits();
      this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
      if (attributes != null) {
        this.setAttributes(attributes);
      }
      this._spanProcessor = parentTracer.getActiveSpanProcessor();
      this._spanProcessor.onStart(this, context);
    }
    Span2.prototype.spanContext = function() {
      return this._spanContext;
    };
    Span2.prototype.setAttribute = function(key, value) {
      if (value == null || this._isSpanEnded())
        return this;
      if (key.length === 0) {
        import_api9.diag.warn("Invalid attribute key: " + key);
        return this;
      }
      if (!isAttributeValue(value)) {
        import_api9.diag.warn("Invalid attribute value set for key: " + key);
        return this;
      }
      if (Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
        this._droppedAttributesCount++;
        return this;
      }
      this.attributes[key] = this._truncateToSize(value);
      return this;
    };
    Span2.prototype.setAttributes = function(attributes) {
      var e_1, _a;
      try {
        for (var _b = __values7(Object.entries(attributes)), _c = _b.next();!_c.done; _c = _b.next()) {
          var _d = __read17(_c.value, 2), k = _d[0], v = _d[1];
          this.setAttribute(k, v);
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
      return this;
    };
    Span2.prototype.addEvent = function(name, attributesOrStartTime, timeStamp) {
      if (this._isSpanEnded())
        return this;
      if (this._spanLimits.eventCountLimit === 0) {
        import_api9.diag.warn("No events allowed.");
        this._droppedEventsCount++;
        return this;
      }
      if (this.events.length >= this._spanLimits.eventCountLimit) {
        if (this._droppedEventsCount === 0) {
          import_api9.diag.debug("Dropping extra events.");
        }
        this.events.shift();
        this._droppedEventsCount++;
      }
      if (isTimeInput(attributesOrStartTime)) {
        if (!isTimeInput(timeStamp)) {
          timeStamp = attributesOrStartTime;
        }
        attributesOrStartTime = undefined;
      }
      var attributes = sanitizeAttributes(attributesOrStartTime);
      this.events.push({
        name,
        attributes,
        time: this._getTime(timeStamp),
        droppedAttributesCount: 0
      });
      return this;
    };
    Span2.prototype.addLink = function(link) {
      this.links.push(link);
      return this;
    };
    Span2.prototype.addLinks = function(links) {
      var _a;
      (_a = this.links).push.apply(_a, __spreadArray7([], __read17(links), false));
      return this;
    };
    Span2.prototype.setStatus = function(status) {
      if (this._isSpanEnded())
        return this;
      this.status = __assign3({}, status);
      if (this.status.message != null && typeof status.message !== "string") {
        import_api9.diag.warn("Dropping invalid status.message of type '" + typeof status.message + "', expected 'string'");
        delete this.status.message;
      }
      return this;
    };
    Span2.prototype.updateName = function(name) {
      if (this._isSpanEnded())
        return this;
      this.name = name;
      return this;
    };
    Span2.prototype.end = function(endTime) {
      if (this._isSpanEnded()) {
        import_api9.diag.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.");
        return;
      }
      this._ended = true;
      this.endTime = this._getTime(endTime);
      this._duration = hrTimeDuration(this.startTime, this.endTime);
      if (this._duration[0] < 0) {
        import_api9.diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime);
        this.endTime = this.startTime.slice();
        this._duration = [0, 0];
      }
      if (this._droppedEventsCount > 0) {
        import_api9.diag.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached");
      }
      this._spanProcessor.onEnd(this);
    };
    Span2.prototype._getTime = function(inp) {
      if (typeof inp === "number" && inp <= otperformance.now()) {
        return hrTime(inp + this._performanceOffset);
      }
      if (typeof inp === "number") {
        return millisToHrTime(inp);
      }
      if (inp instanceof Date) {
        return millisToHrTime(inp.getTime());
      }
      if (isTimeInputHrTime(inp)) {
        return inp;
      }
      if (this._startTimeProvided) {
        return millisToHrTime(Date.now());
      }
      var msDuration = otperformance.now() - this._performanceStartTime;
      return addHrTimes(this.startTime, millisToHrTime(msDuration));
    };
    Span2.prototype.isRecording = function() {
      return this._ended === false;
    };
    Span2.prototype.recordException = function(exception, time) {
      var attributes = {};
      if (typeof exception === "string") {
        attributes[import_semantic_conventions3.SEMATTRS_EXCEPTION_MESSAGE] = exception;
      } else if (exception) {
        if (exception.code) {
          attributes[import_semantic_conventions3.SEMATTRS_EXCEPTION_TYPE] = exception.code.toString();
        } else if (exception.name) {
          attributes[import_semantic_conventions3.SEMATTRS_EXCEPTION_TYPE] = exception.name;
        }
        if (exception.message) {
          attributes[import_semantic_conventions3.SEMATTRS_EXCEPTION_MESSAGE] = exception.message;
        }
        if (exception.stack) {
          attributes[import_semantic_conventions3.SEMATTRS_EXCEPTION_STACKTRACE] = exception.stack;
        }
      }
      if (attributes[import_semantic_conventions3.SEMATTRS_EXCEPTION_TYPE] || attributes[import_semantic_conventions3.SEMATTRS_EXCEPTION_MESSAGE]) {
        this.addEvent(ExceptionEventName, attributes, time);
      } else {
        import_api9.diag.warn("Failed to record an exception " + exception);
      }
    };
    Object.defineProperty(Span2.prototype, "duration", {
      get: function() {
        return this._duration;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "ended", {
      get: function() {
        return this._ended;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "droppedAttributesCount", {
      get: function() {
        return this._droppedAttributesCount;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "droppedEventsCount", {
      get: function() {
        return this._droppedEventsCount;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "droppedLinksCount", {
      get: function() {
        return this._droppedLinksCount;
      },
      enumerable: false,
      configurable: true
    });
    Span2.prototype._isSpanEnded = function() {
      if (this._ended) {
        import_api9.diag.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}");
      }
      return this._ended;
    };
    Span2.prototype._truncateToLimitUtil = function(value, limit) {
      if (value.length <= limit) {
        return value;
      }
      return value.substring(0, limit);
    };
    Span2.prototype._truncateToSize = function(value) {
      var _this = this;
      var limit = this._attributeValueLengthLimit;
      if (limit <= 0) {
        import_api9.diag.warn("Attribute value limit must be positive, got " + limit);
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
    return Span2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js
var SamplingDecision;
var init_Sampler = __esm(() => {
  (function(SamplingDecision2) {
    SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
    SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
    SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
  })(SamplingDecision || (SamplingDecision = {}));
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js
var AlwaysOffSampler;
var init_AlwaysOffSampler = __esm(() => {
  init_Sampler();
  AlwaysOffSampler = function() {
    function AlwaysOffSampler2() {}
    AlwaysOffSampler2.prototype.shouldSample = function() {
      return {
        decision: SamplingDecision.NOT_RECORD
      };
    };
    AlwaysOffSampler2.prototype.toString = function() {
      return "AlwaysOffSampler";
    };
    return AlwaysOffSampler2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js
var AlwaysOnSampler;
var init_AlwaysOnSampler = __esm(() => {
  init_Sampler();
  AlwaysOnSampler = function() {
    function AlwaysOnSampler2() {}
    AlwaysOnSampler2.prototype.shouldSample = function() {
      return {
        decision: SamplingDecision.RECORD_AND_SAMPLED
      };
    };
    AlwaysOnSampler2.prototype.toString = function() {
      return "AlwaysOnSampler";
    };
    return AlwaysOnSampler2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js
var import_api10, ParentBasedSampler;
var init_ParentBasedSampler = __esm(() => {
  init_esm3();
  init_AlwaysOffSampler();
  init_AlwaysOnSampler();
  import_api10 = __toESM(require_src(), 1);
  ParentBasedSampler = function() {
    function ParentBasedSampler2(config) {
      var _a, _b, _c, _d;
      this._root = config.root;
      if (!this._root) {
        globalErrorHandler(new Error("ParentBasedSampler must have a root sampler configured"));
        this._root = new AlwaysOnSampler;
      }
      this._remoteParentSampled = (_a = config.remoteParentSampled) !== null && _a !== undefined ? _a : new AlwaysOnSampler;
      this._remoteParentNotSampled = (_b = config.remoteParentNotSampled) !== null && _b !== undefined ? _b : new AlwaysOffSampler;
      this._localParentSampled = (_c = config.localParentSampled) !== null && _c !== undefined ? _c : new AlwaysOnSampler;
      this._localParentNotSampled = (_d = config.localParentNotSampled) !== null && _d !== undefined ? _d : new AlwaysOffSampler;
    }
    ParentBasedSampler2.prototype.shouldSample = function(context, traceId, spanName, spanKind, attributes, links) {
      var parentContext = import_api10.trace.getSpanContext(context);
      if (!parentContext || !import_api10.isSpanContextValid(parentContext)) {
        return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
      }
      if (parentContext.isRemote) {
        if (parentContext.traceFlags & import_api10.TraceFlags.SAMPLED) {
          return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
      }
      if (parentContext.traceFlags & import_api10.TraceFlags.SAMPLED) {
        return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
      }
      return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    };
    ParentBasedSampler2.prototype.toString = function() {
      return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
    };
    return ParentBasedSampler2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js
var import_api11, TraceIdRatioBasedSampler;
var init_TraceIdRatioBasedSampler = __esm(() => {
  init_Sampler();
  import_api11 = __toESM(require_src(), 1);
  TraceIdRatioBasedSampler = function() {
    function TraceIdRatioBasedSampler2(_ratio) {
      if (_ratio === undefined) {
        _ratio = 0;
      }
      this._ratio = _ratio;
      this._ratio = this._normalize(_ratio);
      this._upperBound = Math.floor(this._ratio * 4294967295);
    }
    TraceIdRatioBasedSampler2.prototype.shouldSample = function(context, traceId) {
      return {
        decision: import_api11.isValidTraceId(traceId) && this._accumulate(traceId) < this._upperBound ? SamplingDecision.RECORD_AND_SAMPLED : SamplingDecision.NOT_RECORD
      };
    };
    TraceIdRatioBasedSampler2.prototype.toString = function() {
      return "TraceIdRatioBased{" + this._ratio + "}";
    };
    TraceIdRatioBasedSampler2.prototype._normalize = function(ratio) {
      if (typeof ratio !== "number" || isNaN(ratio))
        return 0;
      return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    };
    TraceIdRatioBasedSampler2.prototype._accumulate = function(traceId) {
      var accumulation = 0;
      for (var i = 0;i < traceId.length / 8; i++) {
        var pos = i * 8;
        var part = parseInt(traceId.slice(pos, pos + 8), 16);
        accumulation = (accumulation ^ part) >>> 0;
      }
      return accumulation;
    };
    return TraceIdRatioBasedSampler2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js
function loadDefaultConfig() {
  var env = getEnv();
  return {
    sampler: buildSamplerFromEnv(env),
    forceFlushTimeoutMillis: 30000,
    generalLimits: {
      attributeValueLengthLimit: env.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: env.OTEL_ATTRIBUTE_COUNT_LIMIT
    },
    spanLimits: {
      attributeValueLengthLimit: env.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: env.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
      linkCountLimit: env.OTEL_SPAN_LINK_COUNT_LIMIT,
      eventCountLimit: env.OTEL_SPAN_EVENT_COUNT_LIMIT,
      attributePerEventCountLimit: env.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
      attributePerLinkCountLimit: env.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
    },
    mergeResourceWithDefaults: true
  };
}
function buildSamplerFromEnv(environment) {
  if (environment === undefined) {
    environment = getEnv();
  }
  switch (environment.OTEL_TRACES_SAMPLER) {
    case TracesSamplerValues.AlwaysOn:
      return new AlwaysOnSampler;
    case TracesSamplerValues.AlwaysOff:
      return new AlwaysOffSampler;
    case TracesSamplerValues.ParentBasedAlwaysOn:
      return new ParentBasedSampler({
        root: new AlwaysOnSampler
      });
    case TracesSamplerValues.ParentBasedAlwaysOff:
      return new ParentBasedSampler({
        root: new AlwaysOffSampler
      });
    case TracesSamplerValues.TraceIdRatio:
      return new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment));
    case TracesSamplerValues.ParentBasedTraceIdRatio:
      return new ParentBasedSampler({
        root: new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment))
      });
    default:
      import_api12.diag.error('OTEL_TRACES_SAMPLER value "' + environment.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + FALLBACK_OTEL_TRACES_SAMPLER + '".');
      return new AlwaysOnSampler;
  }
}
function getSamplerProbabilityFromEnv(environment) {
  if (environment.OTEL_TRACES_SAMPLER_ARG === undefined || environment.OTEL_TRACES_SAMPLER_ARG === "") {
    import_api12.diag.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + DEFAULT_RATIO + ".");
    return DEFAULT_RATIO;
  }
  var probability = Number(environment.OTEL_TRACES_SAMPLER_ARG);
  if (isNaN(probability)) {
    import_api12.diag.error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + DEFAULT_RATIO + ".");
    return DEFAULT_RATIO;
  }
  if (probability < 0 || probability > 1) {
    import_api12.diag.error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + DEFAULT_RATIO + ".");
    return DEFAULT_RATIO;
  }
  return probability;
}
var import_api12, FALLBACK_OTEL_TRACES_SAMPLER, DEFAULT_RATIO = 1;
var init_config2 = __esm(() => {
  init_esm3();
  init_AlwaysOffSampler();
  init_AlwaysOnSampler();
  init_ParentBasedSampler();
  init_TraceIdRatioBasedSampler();
  import_api12 = __toESM(require_src(), 1);
  FALLBACK_OTEL_TRACES_SAMPLER = TracesSamplerValues.AlwaysOn;
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js
function mergeConfig(userConfig) {
  var perInstanceDefaults = {
    sampler: buildSamplerFromEnv()
  };
  var DEFAULT_CONFIG = loadDefaultConfig();
  var target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
  target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
  target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
  return target;
}
function reconfigureLimits(userConfig) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  var spanLimits = Object.assign({}, userConfig.spanLimits);
  var parsedEnvConfig = getEnvWithoutDefaults();
  spanLimits.attributeCountLimit = (_f = (_e = (_d = (_b = (_a = userConfig.spanLimits) === null || _a === undefined ? undefined : _a.attributeCountLimit) !== null && _b !== undefined ? _b : (_c = userConfig.generalLimits) === null || _c === undefined ? undefined : _c.attributeCountLimit) !== null && _d !== undefined ? _d : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && _e !== undefined ? _e : parsedEnvConfig.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && _f !== undefined ? _f : DEFAULT_ATTRIBUTE_COUNT_LIMIT;
  spanLimits.attributeValueLengthLimit = (_m = (_l = (_k = (_h = (_g = userConfig.spanLimits) === null || _g === undefined ? undefined : _g.attributeValueLengthLimit) !== null && _h !== undefined ? _h : (_j = userConfig.generalLimits) === null || _j === undefined ? undefined : _j.attributeValueLengthLimit) !== null && _k !== undefined ? _k : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _l !== undefined ? _l : parsedEnvConfig.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _m !== undefined ? _m : DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT;
  return Object.assign({}, userConfig, { spanLimits });
}
var init_utility = __esm(() => {
  init_config2();
  init_esm3();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/export/BatchSpanProcessorBase.js
var import_api13, BatchSpanProcessorBase;
var init_BatchSpanProcessorBase = __esm(() => {
  init_esm3();
  import_api13 = __toESM(require_src(), 1);
  BatchSpanProcessorBase = function() {
    function BatchSpanProcessorBase2(_exporter, config) {
      this._exporter = _exporter;
      this._isExporting = false;
      this._finishedSpans = [];
      this._droppedSpansCount = 0;
      var env = getEnv();
      this._maxExportBatchSize = typeof (config === null || config === undefined ? undefined : config.maxExportBatchSize) === "number" ? config.maxExportBatchSize : env.OTEL_BSP_MAX_EXPORT_BATCH_SIZE;
      this._maxQueueSize = typeof (config === null || config === undefined ? undefined : config.maxQueueSize) === "number" ? config.maxQueueSize : env.OTEL_BSP_MAX_QUEUE_SIZE;
      this._scheduledDelayMillis = typeof (config === null || config === undefined ? undefined : config.scheduledDelayMillis) === "number" ? config.scheduledDelayMillis : env.OTEL_BSP_SCHEDULE_DELAY;
      this._exportTimeoutMillis = typeof (config === null || config === undefined ? undefined : config.exportTimeoutMillis) === "number" ? config.exportTimeoutMillis : env.OTEL_BSP_EXPORT_TIMEOUT;
      this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
      if (this._maxExportBatchSize > this._maxQueueSize) {
        import_api13.diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
        this._maxExportBatchSize = this._maxQueueSize;
      }
    }
    BatchSpanProcessorBase2.prototype.forceFlush = function() {
      if (this._shutdownOnce.isCalled) {
        return this._shutdownOnce.promise;
      }
      return this._flushAll();
    };
    BatchSpanProcessorBase2.prototype.onStart = function(_span, _parentContext) {};
    BatchSpanProcessorBase2.prototype.onEnd = function(span) {
      if (this._shutdownOnce.isCalled) {
        return;
      }
      if ((span.spanContext().traceFlags & import_api13.TraceFlags.SAMPLED) === 0) {
        return;
      }
      this._addToBuffer(span);
    };
    BatchSpanProcessorBase2.prototype.shutdown = function() {
      return this._shutdownOnce.call();
    };
    BatchSpanProcessorBase2.prototype._shutdown = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.onShutdown();
      }).then(function() {
        return _this._flushAll();
      }).then(function() {
        return _this._exporter.shutdown();
      });
    };
    BatchSpanProcessorBase2.prototype._addToBuffer = function(span) {
      if (this._finishedSpans.length >= this._maxQueueSize) {
        if (this._droppedSpansCount === 0) {
          import_api13.diag.debug("maxQueueSize reached, dropping spans");
        }
        this._droppedSpansCount++;
        return;
      }
      if (this._droppedSpansCount > 0) {
        import_api13.diag.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached");
        this._droppedSpansCount = 0;
      }
      this._finishedSpans.push(span);
      this._maybeStartTimer();
    };
    BatchSpanProcessorBase2.prototype._flushAll = function() {
      var _this = this;
      return new Promise(function(resolve, reject) {
        var promises = [];
        var count = Math.ceil(_this._finishedSpans.length / _this._maxExportBatchSize);
        for (var i = 0, j = count;i < j; i++) {
          promises.push(_this._flushOneBatch());
        }
        Promise.all(promises).then(function() {
          resolve();
        }).catch(reject);
      });
    };
    BatchSpanProcessorBase2.prototype._flushOneBatch = function() {
      var _this = this;
      this._clearTimer();
      if (this._finishedSpans.length === 0) {
        return Promise.resolve();
      }
      return new Promise(function(resolve, reject) {
        var timer = setTimeout(function() {
          reject(new Error("Timeout"));
        }, _this._exportTimeoutMillis);
        import_api13.context.with(suppressTracing(import_api13.context.active()), function() {
          var spans;
          if (_this._finishedSpans.length <= _this._maxExportBatchSize) {
            spans = _this._finishedSpans;
            _this._finishedSpans = [];
          } else {
            spans = _this._finishedSpans.splice(0, _this._maxExportBatchSize);
          }
          var doExport = function() {
            return _this._exporter.export(spans, function(result) {
              var _a;
              clearTimeout(timer);
              if (result.code === ExportResultCode.SUCCESS) {
                resolve();
              } else {
                reject((_a = result.error) !== null && _a !== undefined ? _a : new Error("BatchSpanProcessor: span export failed"));
              }
            });
          };
          var pendingResources = null;
          for (var i = 0, len = spans.length;i < len; i++) {
            var span = spans[i];
            if (span.resource.asyncAttributesPending && span.resource.waitForAsyncAttributes) {
              pendingResources !== null && pendingResources !== undefined || (pendingResources = []);
              pendingResources.push(span.resource.waitForAsyncAttributes());
            }
          }
          if (pendingResources === null) {
            doExport();
          } else {
            Promise.all(pendingResources).then(doExport, function(err) {
              globalErrorHandler(err);
              reject(err);
            });
          }
        });
      });
    };
    BatchSpanProcessorBase2.prototype._maybeStartTimer = function() {
      var _this = this;
      if (this._isExporting)
        return;
      var flush = function() {
        _this._isExporting = true;
        _this._flushOneBatch().finally(function() {
          _this._isExporting = false;
          if (_this._finishedSpans.length > 0) {
            _this._clearTimer();
            _this._maybeStartTimer();
          }
        }).catch(function(e) {
          _this._isExporting = false;
          globalErrorHandler(e);
        });
      };
      if (this._finishedSpans.length >= this._maxExportBatchSize) {
        return flush();
      }
      if (this._timer !== undefined)
        return;
      this._timer = setTimeout(function() {
        return flush();
      }, this._scheduledDelayMillis);
      unrefTimer(this._timer);
    };
    BatchSpanProcessorBase2.prototype._clearTimer = function() {
      if (this._timer !== undefined) {
        clearTimeout(this._timer);
        this._timer = undefined;
      }
    };
    return BatchSpanProcessorBase2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/export/BatchSpanProcessor.js
var __extends10, BatchSpanProcessor;
var init_BatchSpanProcessor = __esm(() => {
  init_BatchSpanProcessorBase();
  __extends10 = function() {
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
  BatchSpanProcessor = function(_super) {
    __extends10(BatchSpanProcessor2, _super);
    function BatchSpanProcessor2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchSpanProcessor2.prototype.onShutdown = function() {};
    return BatchSpanProcessor2;
  }(BatchSpanProcessorBase);
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/RandomIdGenerator.js
function getIdGenerator(bytes) {
  return function generateId() {
    for (var i = 0;i < bytes / 4; i++) {
      SHARED_BUFFER.writeUInt32BE(Math.random() * Math.pow(2, 32) >>> 0, i * 4);
    }
    for (var i = 0;i < bytes; i++) {
      if (SHARED_BUFFER[i] > 0) {
        break;
      } else if (i === bytes - 1) {
        SHARED_BUFFER[bytes - 1] = 1;
      }
    }
    return SHARED_BUFFER.toString("hex", 0, bytes);
  };
}
var SPAN_ID_BYTES = 8, TRACE_ID_BYTES = 16, RandomIdGenerator, SHARED_BUFFER;
var init_RandomIdGenerator = __esm(() => {
  RandomIdGenerator = function() {
    function RandomIdGenerator2() {
      this.generateTraceId = getIdGenerator(TRACE_ID_BYTES);
      this.generateSpanId = getIdGenerator(SPAN_ID_BYTES);
    }
    return RandomIdGenerator2;
  }();
  SHARED_BUFFER = Buffer.allocUnsafe(TRACE_ID_BYTES);
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/index.js
var init_node3 = __esm(() => {
  init_BatchSpanProcessor();
  init_RandomIdGenerator();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/index.js
var init_platform4 = __esm(() => {
  init_node3();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js
var api5, Tracer;
var init_Tracer = __esm(() => {
  init_esm3();
  init_Span();
  init_utility();
  init_platform4();
  api5 = __toESM(require_src(), 1);
  Tracer = function() {
    function Tracer2(instrumentationLibrary, config, _tracerProvider) {
      this._tracerProvider = _tracerProvider;
      var localConfig = mergeConfig(config);
      this._sampler = localConfig.sampler;
      this._generalLimits = localConfig.generalLimits;
      this._spanLimits = localConfig.spanLimits;
      this._idGenerator = config.idGenerator || new RandomIdGenerator;
      this.resource = _tracerProvider.resource;
      this.instrumentationLibrary = instrumentationLibrary;
    }
    Tracer2.prototype.startSpan = function(name, options, context3) {
      var _a, _b, _c;
      if (options === undefined) {
        options = {};
      }
      if (context3 === undefined) {
        context3 = api5.context.active();
      }
      if (options.root) {
        context3 = api5.trace.deleteSpan(context3);
      }
      var parentSpan = api5.trace.getSpan(context3);
      if (isTracingSuppressed(context3)) {
        api5.diag.debug("Instrumentation suppressed, returning Noop Span");
        var nonRecordingSpan = api5.trace.wrapSpanContext(api5.INVALID_SPAN_CONTEXT);
        return nonRecordingSpan;
      }
      var parentSpanContext = parentSpan === null || parentSpan === undefined ? undefined : parentSpan.spanContext();
      var spanId = this._idGenerator.generateSpanId();
      var traceId;
      var traceState;
      var parentSpanId;
      if (!parentSpanContext || !api5.trace.isSpanContextValid(parentSpanContext)) {
        traceId = this._idGenerator.generateTraceId();
      } else {
        traceId = parentSpanContext.traceId;
        traceState = parentSpanContext.traceState;
        parentSpanId = parentSpanContext.spanId;
      }
      var spanKind = (_a = options.kind) !== null && _a !== undefined ? _a : api5.SpanKind.INTERNAL;
      var links = ((_b = options.links) !== null && _b !== undefined ? _b : []).map(function(link) {
        return {
          context: link.context,
          attributes: sanitizeAttributes(link.attributes)
        };
      });
      var attributes = sanitizeAttributes(options.attributes);
      var samplingResult = this._sampler.shouldSample(context3, traceId, name, spanKind, attributes, links);
      traceState = (_c = samplingResult.traceState) !== null && _c !== undefined ? _c : traceState;
      var traceFlags = samplingResult.decision === api5.SamplingDecision.RECORD_AND_SAMPLED ? api5.TraceFlags.SAMPLED : api5.TraceFlags.NONE;
      var spanContext = { traceId, spanId, traceFlags, traceState };
      if (samplingResult.decision === api5.SamplingDecision.NOT_RECORD) {
        api5.diag.debug("Recording is off, propagating context in a non-recording span");
        var nonRecordingSpan = api5.trace.wrapSpanContext(spanContext);
        return nonRecordingSpan;
      }
      var initAttributes = sanitizeAttributes(Object.assign(attributes, samplingResult.attributes));
      var span = new Span(this, context3, name, spanContext, spanKind, parentSpanId, links, options.startTime, undefined, initAttributes);
      return span;
    };
    Tracer2.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
      var opts;
      var ctx;
      var fn;
      if (arguments.length < 2) {
        return;
      } else if (arguments.length === 2) {
        fn = arg2;
      } else if (arguments.length === 3) {
        opts = arg2;
        fn = arg3;
      } else {
        opts = arg2;
        ctx = arg3;
        fn = arg4;
      }
      var parentContext = ctx !== null && ctx !== undefined ? ctx : api5.context.active();
      var span = this.startSpan(name, opts, parentContext);
      var contextWithSpanSet = api5.trace.setSpan(parentContext, span);
      return api5.context.with(contextWithSpanSet, fn, undefined, span);
    };
    Tracer2.prototype.getGeneralLimits = function() {
      return this._generalLimits;
    };
    Tracer2.prototype.getSpanLimits = function() {
      return this._spanLimits;
    };
    Tracer2.prototype.getActiveSpanProcessor = function() {
      return this._tracerProvider.getActiveSpanProcessor();
    };
    return Tracer2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/MultiSpanProcessor.js
var __values8 = function(o) {
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
}, MultiSpanProcessor;
var init_MultiSpanProcessor = __esm(() => {
  init_esm3();
  MultiSpanProcessor = function() {
    function MultiSpanProcessor2(_spanProcessors) {
      this._spanProcessors = _spanProcessors;
    }
    MultiSpanProcessor2.prototype.forceFlush = function() {
      var e_1, _a;
      var promises = [];
      try {
        for (var _b = __values8(this._spanProcessors), _c = _b.next();!_c.done; _c = _b.next()) {
          var spanProcessor = _c.value;
          promises.push(spanProcessor.forceFlush());
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
      return new Promise(function(resolve) {
        Promise.all(promises).then(function() {
          resolve();
        }).catch(function(error) {
          globalErrorHandler(error || new Error("MultiSpanProcessor: forceFlush failed"));
          resolve();
        });
      });
    };
    MultiSpanProcessor2.prototype.onStart = function(span, context3) {
      var e_2, _a;
      try {
        for (var _b = __values8(this._spanProcessors), _c = _b.next();!_c.done; _c = _b.next()) {
          var spanProcessor = _c.value;
          spanProcessor.onStart(span, context3);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    };
    MultiSpanProcessor2.prototype.onEnd = function(span) {
      var e_3, _a;
      try {
        for (var _b = __values8(this._spanProcessors), _c = _b.next();!_c.done; _c = _b.next()) {
          var spanProcessor = _c.value;
          spanProcessor.onEnd(span);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
    };
    MultiSpanProcessor2.prototype.shutdown = function() {
      var e_4, _a;
      var promises = [];
      try {
        for (var _b = __values8(this._spanProcessors), _c = _b.next();!_c.done; _c = _b.next()) {
          var spanProcessor = _c.value;
          promises.push(spanProcessor.shutdown());
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      return new Promise(function(resolve, reject) {
        Promise.all(promises).then(function() {
          resolve();
        }, reject);
      });
    };
    return MultiSpanProcessor2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/export/NoopSpanProcessor.js
var NoopSpanProcessor;
var init_NoopSpanProcessor = __esm(() => {
  NoopSpanProcessor = function() {
    function NoopSpanProcessor2() {}
    NoopSpanProcessor2.prototype.onStart = function(_span, _context) {};
    NoopSpanProcessor2.prototype.onEnd = function(_span) {};
    NoopSpanProcessor2.prototype.shutdown = function() {
      return Promise.resolve();
    };
    NoopSpanProcessor2.prototype.forceFlush = function() {
      return Promise.resolve();
    };
    return NoopSpanProcessor2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js
var import_api14, __read18 = function(o, n) {
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
}, __spreadArray8 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}, ForceFlushState, BasicTracerProvider;
var init_BasicTracerProvider = __esm(() => {
  init_esm3();
  init_esm7();
  init_Tracer();
  init_config2();
  init_MultiSpanProcessor();
  init_NoopSpanProcessor();
  init_platform4();
  init_utility();
  import_api14 = __toESM(require_src(), 1);
  (function(ForceFlushState2) {
    ForceFlushState2[ForceFlushState2["resolved"] = 0] = "resolved";
    ForceFlushState2[ForceFlushState2["timeout"] = 1] = "timeout";
    ForceFlushState2[ForceFlushState2["error"] = 2] = "error";
    ForceFlushState2[ForceFlushState2["unresolved"] = 3] = "unresolved";
  })(ForceFlushState || (ForceFlushState = {}));
  BasicTracerProvider = function() {
    function BasicTracerProvider2(config) {
      if (config === undefined) {
        config = {};
      }
      var _a, _b;
      this._registeredSpanProcessors = [];
      this._tracers = new Map;
      var mergedConfig = merge({}, loadDefaultConfig(), reconfigureLimits(config));
      this.resource = (_a = mergedConfig.resource) !== null && _a !== undefined ? _a : Resource2.empty();
      if (mergedConfig.mergeResourceWithDefaults) {
        this.resource = Resource2.default().merge(this.resource);
      }
      this._config = Object.assign({}, mergedConfig, {
        resource: this.resource
      });
      if ((_b = config.spanProcessors) === null || _b === undefined ? undefined : _b.length) {
        this._registeredSpanProcessors = __spreadArray8([], __read18(config.spanProcessors), false);
        this.activeSpanProcessor = new MultiSpanProcessor(this._registeredSpanProcessors);
      } else {
        var defaultExporter = this._buildExporterFromEnv();
        if (defaultExporter !== undefined) {
          var batchProcessor = new BatchSpanProcessor(defaultExporter);
          this.activeSpanProcessor = batchProcessor;
        } else {
          this.activeSpanProcessor = new NoopSpanProcessor;
        }
      }
    }
    BasicTracerProvider2.prototype.getTracer = function(name, version, options) {
      var key = name + "@" + (version || "") + ":" + ((options === null || options === undefined ? undefined : options.schemaUrl) || "");
      if (!this._tracers.has(key)) {
        this._tracers.set(key, new Tracer({ name, version, schemaUrl: options === null || options === undefined ? undefined : options.schemaUrl }, this._config, this));
      }
      return this._tracers.get(key);
    };
    BasicTracerProvider2.prototype.addSpanProcessor = function(spanProcessor) {
      if (this._registeredSpanProcessors.length === 0) {
        this.activeSpanProcessor.shutdown().catch(function(err) {
          return import_api14.diag.error("Error while trying to shutdown current span processor", err);
        });
      }
      this._registeredSpanProcessors.push(spanProcessor);
      this.activeSpanProcessor = new MultiSpanProcessor(this._registeredSpanProcessors);
    };
    BasicTracerProvider2.prototype.getActiveSpanProcessor = function() {
      return this.activeSpanProcessor;
    };
    BasicTracerProvider2.prototype.register = function(config) {
      if (config === undefined) {
        config = {};
      }
      import_api14.trace.setGlobalTracerProvider(this);
      if (config.propagator === undefined) {
        config.propagator = this._buildPropagatorFromEnv();
      }
      if (config.contextManager) {
        import_api14.context.setGlobalContextManager(config.contextManager);
      }
      if (config.propagator) {
        import_api14.propagation.setGlobalPropagator(config.propagator);
      }
    };
    BasicTracerProvider2.prototype.forceFlush = function() {
      var timeout = this._config.forceFlushTimeoutMillis;
      var promises = this._registeredSpanProcessors.map(function(spanProcessor) {
        return new Promise(function(resolve) {
          var state;
          var timeoutInterval = setTimeout(function() {
            resolve(new Error("Span processor did not completed within timeout period of " + timeout + " ms"));
            state = ForceFlushState.timeout;
          }, timeout);
          spanProcessor.forceFlush().then(function() {
            clearTimeout(timeoutInterval);
            if (state !== ForceFlushState.timeout) {
              state = ForceFlushState.resolved;
              resolve(state);
            }
          }).catch(function(error) {
            clearTimeout(timeoutInterval);
            state = ForceFlushState.error;
            resolve(error);
          });
        });
      });
      return new Promise(function(resolve, reject) {
        Promise.all(promises).then(function(results) {
          var errors = results.filter(function(result) {
            return result !== ForceFlushState.resolved;
          });
          if (errors.length > 0) {
            reject(errors);
          } else {
            resolve();
          }
        }).catch(function(error) {
          return reject([error]);
        });
      });
    };
    BasicTracerProvider2.prototype.shutdown = function() {
      return this.activeSpanProcessor.shutdown();
    };
    BasicTracerProvider2.prototype._getPropagator = function(name) {
      var _a;
      return (_a = this.constructor._registeredPropagators.get(name)) === null || _a === undefined ? undefined : _a();
    };
    BasicTracerProvider2.prototype._getSpanExporter = function(name) {
      var _a;
      return (_a = this.constructor._registeredExporters.get(name)) === null || _a === undefined ? undefined : _a();
    };
    BasicTracerProvider2.prototype._buildPropagatorFromEnv = function() {
      var _this = this;
      var uniquePropagatorNames = Array.from(new Set(getEnv().OTEL_PROPAGATORS));
      var propagators = uniquePropagatorNames.map(function(name) {
        var propagator = _this._getPropagator(name);
        if (!propagator) {
          import_api14.diag.warn('Propagator "' + name + '" requested through environment variable is unavailable.');
        }
        return propagator;
      });
      var validPropagators = propagators.reduce(function(list, item) {
        if (item) {
          list.push(item);
        }
        return list;
      }, []);
      if (validPropagators.length === 0) {
        return;
      } else if (uniquePropagatorNames.length === 1) {
        return validPropagators[0];
      } else {
        return new CompositePropagator({
          propagators: validPropagators
        });
      }
    };
    BasicTracerProvider2.prototype._buildExporterFromEnv = function() {
      var exporterName = getEnv().OTEL_TRACES_EXPORTER;
      if (exporterName === "none" || exporterName === "")
        return;
      var exporter = this._getSpanExporter(exporterName);
      if (!exporter) {
        import_api14.diag.error('Exporter "' + exporterName + '" requested through environment variable is unavailable.');
      }
      return exporter;
    };
    BasicTracerProvider2._registeredPropagators = new Map([
      ["tracecontext", function() {
        return new W3CTraceContextPropagator;
      }],
      ["baggage", function() {
        return new W3CBaggagePropagator;
      }]
    ]);
    BasicTracerProvider2._registeredExporters = new Map;
    return BasicTracerProvider2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/export/ConsoleSpanExporter.js
var __values9 = function(o) {
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
}, ConsoleSpanExporter;
var init_ConsoleSpanExporter = __esm(() => {
  init_esm3();
  ConsoleSpanExporter = function() {
    function ConsoleSpanExporter2() {}
    ConsoleSpanExporter2.prototype.export = function(spans, resultCallback) {
      return this._sendSpans(spans, resultCallback);
    };
    ConsoleSpanExporter2.prototype.shutdown = function() {
      this._sendSpans([]);
      return this.forceFlush();
    };
    ConsoleSpanExporter2.prototype.forceFlush = function() {
      return Promise.resolve();
    };
    ConsoleSpanExporter2.prototype._exportInfo = function(span) {
      var _a;
      return {
        resource: {
          attributes: span.resource.attributes
        },
        instrumentationScope: span.instrumentationLibrary,
        traceId: span.spanContext().traceId,
        parentId: span.parentSpanId,
        traceState: (_a = span.spanContext().traceState) === null || _a === undefined ? undefined : _a.serialize(),
        name: span.name,
        id: span.spanContext().spanId,
        kind: span.kind,
        timestamp: hrTimeToMicroseconds(span.startTime),
        duration: hrTimeToMicroseconds(span.duration),
        attributes: span.attributes,
        status: span.status,
        events: span.events,
        links: span.links
      };
    };
    ConsoleSpanExporter2.prototype._sendSpans = function(spans, done) {
      var e_1, _a;
      try {
        for (var spans_1 = __values9(spans), spans_1_1 = spans_1.next();!spans_1_1.done; spans_1_1 = spans_1.next()) {
          var span = spans_1_1.value;
          console.dir(this._exportInfo(span), { depth: 3 });
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (spans_1_1 && !spans_1_1.done && (_a = spans_1.return))
            _a.call(spans_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (done) {
        return done({ code: ExportResultCode.SUCCESS });
      }
    };
    return ConsoleSpanExporter2;
  }();
});

// node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js
var init_esm8 = __esm(() => {
  init_BasicTracerProvider();
  init_platform4();
  init_ConsoleSpanExporter();
});

// src/services/api/metricsOptOut.ts
async function _fetchMetricsEnabled() {
  const authResult = getAuthHeaders();
  if (authResult.error) {
    throw new Error(`Auth error: ${authResult.error}`);
  }
  const headers = {
    "Content-Type": "application/json",
    "User-Agent": getClaudeCodeUserAgent(),
    ...authResult.headers
  };
  const endpoint = `https://api.anthropic.com/api/claude_code/organizations/metrics_enabled`;
  const response = await axios_default.get(endpoint, {
    headers,
    timeout: 5000
  });
  return response.data;
}
async function _checkMetricsEnabledAPI() {
  if (isEssentialTrafficOnly()) {
    return { enabled: false, hasError: false };
  }
  try {
    const data = await withOAuth401Retry(_fetchMetricsEnabled, {
      also403Revoked: true
    });
    logForDebugging(`Metrics opt-out API response: enabled=${data.metrics_logging_enabled}`);
    return {
      enabled: data.metrics_logging_enabled,
      hasError: false
    };
  } catch (error) {
    logForDebugging(`Failed to check metrics opt-out status: ${errorMessage(error)}`);
    logError(error);
    return { enabled: false, hasError: true };
  }
}
async function refreshMetricsStatus() {
  const result = await memoizedCheckMetrics();
  if (result.hasError) {
    return result;
  }
  const cached = getGlobalConfig().metricsStatusCache;
  const unchanged = cached !== undefined && cached.enabled === result.enabled;
  if (unchanged && Date.now() - cached.timestamp < DISK_CACHE_TTL_MS) {
    return result;
  }
  saveGlobalConfig((current) => ({
    ...current,
    metricsStatusCache: {
      enabled: result.enabled,
      timestamp: Date.now()
    }
  }));
  return result;
}
async function checkMetricsEnabled() {
  if (isClaudeAISubscriber() && !hasProfileScope()) {
    return { enabled: false, hasError: false };
  }
  const cached = getGlobalConfig().metricsStatusCache;
  if (cached) {
    if (Date.now() - cached.timestamp > DISK_CACHE_TTL_MS) {
      refreshMetricsStatus().catch(logError);
    }
    return {
      enabled: cached.enabled,
      hasError: false
    };
  }
  return refreshMetricsStatus();
}
var CACHE_TTL_MS, DISK_CACHE_TTL_MS, memoizedCheckMetrics;
var init_metricsOptOut = __esm(() => {
  init_axios();
  init_auth();
  init_config();
  init_debug();
  init_errors();
  init_http();
  init_log();
  init_memoize();
  init_privacyLevel();
  init_userAgent();
  CACHE_TTL_MS = 60 * 60 * 1000;
  DISK_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
  memoizedCheckMetrics = memoizeWithTTLAsync(_checkMetricsEnabledAPI, CACHE_TTL_MS);
});

// src/utils/telemetry/bigqueryExporter.ts
class BigQueryMetricsExporter {
  endpoint;
  timeout;
  pendingExports = [];
  isShutdown = false;
  constructor(options = {}) {
    const defaultEndpoint = "https://api.anthropic.com/api/claude_code/metrics";
    if (false) {} else {
      this.endpoint = defaultEndpoint;
    }
    this.timeout = options.timeout || 5000;
  }
  async export(metrics, resultCallback) {
    if (this.isShutdown) {
      resultCallback({
        code: ExportResultCode.FAILED,
        error: new Error("Exporter has been shutdown")
      });
      return;
    }
    const exportPromise = this.doExport(metrics, resultCallback);
    this.pendingExports.push(exportPromise);
    exportPromise.finally(() => {
      const index = this.pendingExports.indexOf(exportPromise);
      if (index > -1) {
        this.pendingExports.splice(index, 1);
      }
    });
  }
  async doExport(metrics, resultCallback) {
    try {
      const hasTrust = checkHasTrustDialogAccepted() || getIsNonInteractiveSession();
      if (!hasTrust) {
        logForDebugging("BigQuery metrics export: trust not established, skipping");
        resultCallback({ code: ExportResultCode.SUCCESS });
        return;
      }
      const metricsStatus = await checkMetricsEnabled();
      if (!metricsStatus.enabled) {
        logForDebugging("Metrics export disabled by organization setting");
        resultCallback({ code: ExportResultCode.SUCCESS });
        return;
      }
      const payload = this.transformMetricsForInternal(metrics);
      const authResult = getAuthHeaders();
      if (authResult.error) {
        logForDebugging(`Metrics export failed: ${authResult.error}`);
        resultCallback({
          code: ExportResultCode.FAILED,
          error: new Error(authResult.error)
        });
        return;
      }
      const headers = {
        "Content-Type": "application/json",
        "User-Agent": getClaudeCodeUserAgent(),
        ...authResult.headers
      };
      const response = await axios_default.post(this.endpoint, payload, {
        timeout: this.timeout,
        headers
      });
      logForDebugging("BigQuery metrics exported successfully");
      logForDebugging(`BigQuery API Response: ${jsonStringify(response.data, null, 2)}`);
      resultCallback({ code: ExportResultCode.SUCCESS });
    } catch (error) {
      logForDebugging(`BigQuery metrics export failed: ${errorMessage(error)}`);
      logError(error);
      resultCallback({
        code: ExportResultCode.FAILED,
        error: toError(error)
      });
    }
  }
  transformMetricsForInternal(metrics) {
    const attrs = metrics.resource.attributes;
    const resourceAttributes = {
      "service.name": attrs["service.name"] || "claude-code",
      "service.version": attrs["service.version"] || "unknown",
      "os.type": attrs["os.type"] || "unknown",
      "os.version": attrs["os.version"] || "unknown",
      "host.arch": attrs["host.arch"] || "unknown",
      "aggregation.temporality": this.selectAggregationTemporality() === AggregationTemporality.DELTA ? "delta" : "cumulative"
    };
    if (attrs["wsl.version"]) {
      resourceAttributes["wsl.version"] = attrs["wsl.version"];
    }
    if (isClaudeAISubscriber()) {
      resourceAttributes["user.customer_type"] = "claude_ai";
      const subscriptionType = getSubscriptionType();
      if (subscriptionType) {
        resourceAttributes["user.subscription_type"] = subscriptionType;
      }
    } else {
      resourceAttributes["user.customer_type"] = "api";
    }
    const transformed = {
      resource_attributes: resourceAttributes,
      metrics: metrics.scopeMetrics.flatMap((scopeMetric) => scopeMetric.metrics.map((metric) => ({
        name: metric.descriptor.name,
        description: metric.descriptor.description,
        unit: metric.descriptor.unit,
        data_points: this.extractDataPoints(metric)
      })))
    };
    return transformed;
  }
  extractDataPoints(metric) {
    const dataPoints = metric.dataPoints || [];
    return dataPoints.filter((point) => typeof point.value === "number").map((point) => ({
      attributes: this.convertAttributes(point.attributes),
      value: point.value,
      timestamp: this.hrTimeToISOString(point.endTime || point.startTime || [Date.now() / 1000, 0])
    }));
  }
  async shutdown() {
    this.isShutdown = true;
    await this.forceFlush();
    logForDebugging("BigQuery metrics exporter shutdown complete");
  }
  async forceFlush() {
    await Promise.all(this.pendingExports);
    logForDebugging("BigQuery metrics exporter flush complete");
  }
  convertAttributes(attributes) {
    const result = {};
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        if (value !== undefined && value !== null) {
          result[key] = String(value);
        }
      }
    }
    return result;
  }
  hrTimeToISOString(hrTime2) {
    const [seconds, nanoseconds] = hrTime2;
    const date = new Date(seconds * 1000 + nanoseconds / 1e6);
    return date.toISOString();
  }
  selectAggregationTemporality() {
    return AggregationTemporality.DELTA;
  }
}
var init_bigqueryExporter = __esm(() => {
  init_esm3();
  init_esm6();
  init_axios();
  init_metricsOptOut();
  init_state();
  init_auth();
  init_config();
  init_debug();
  init_errors();
  init_http();
  init_log();
  init_slowOperations();
  init_userAgent();
});

// src/utils/telemetry/logger.ts
class ClaudeCodeDiagLogger {
  error(message, ..._) {
    logError(new Error(message));
    logForDebugging(`[3P telemetry] OTEL diag error: ${message}`, {
      level: "error"
    });
  }
  warn(message, ..._) {
    logError(new Error(message));
    logForDebugging(`[3P telemetry] OTEL diag warn: ${message}`, {
      level: "warn"
    });
  }
  info(_message, ..._args) {
    return;
  }
  debug(_message, ..._args) {
    return;
  }
  verbose(_message, ..._args) {
    return;
  }
}
var init_logger = __esm(() => {
  init_debug();
  init_log();
});

// src/utils/telemetry/instrumentation.ts
function telemetryTimeout(ms, message) {
  return new Promise((_, reject) => {
    setTimeout((rej, msg) => rej(new TelemetryTimeoutError(msg)), ms, reject, message).unref();
  });
}
function bootstrapTelemetry() {
  if (false) {}
  if (!process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE) {
    process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE = "delta";
  }
}
function parseExporterTypes(value) {
  return (value || "").trim().split(",").filter(Boolean).map((t) => t.trim()).filter((t) => t !== "none");
}
async function getOtlpReaders() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_METRICS_EXPORTER);
  const exportInterval = parseInt(process.env.OTEL_METRIC_EXPORT_INTERVAL || DEFAULT_METRICS_EXPORT_INTERVAL_MS.toString());
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      const consoleExporter = new ConsoleMetricExporter;
      const originalExport = consoleExporter.export.bind(consoleExporter);
      consoleExporter.export = (metrics, callback) => {
        if (metrics.resource && metrics.resource.attributes) {
          logForDebugging(`
=== Resource Attributes ===`);
          logForDebugging(jsonStringify(metrics.resource.attributes));
          logForDebugging(`===========================
`);
        }
        return originalExport(metrics, callback);
      };
      exporters.push(consoleExporter);
    } else if (exporterType === "otlp") {
      const protocol = process.env.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPMetricExporter } = await import("@opentelemetry/exporter-metrics-otlp-grpc");
          exporters.push(new OTLPMetricExporter);
          break;
        }
        case "http/json": {
          const { OTLPMetricExporter } = await import("@opentelemetry/exporter-metrics-otlp-http");
          exporters.push(new OTLPMetricExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPMetricExporter } = await import("@opentelemetry/exporter-metrics-otlp-proto");
          exporters.push(new OTLPMetricExporter(httpConfig));
          break;
        }
        default:
          throw new Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`);
      }
    } else if (exporterType === "prometheus") {
      const { PrometheusExporter } = await import("@opentelemetry/exporter-prometheus");
      exporters.push(new PrometheusExporter);
    } else {
      throw new Error(`Unknown exporter type set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${exporterType}`);
    }
  }
  return exporters.map((exporter) => {
    if ("export" in exporter) {
      return new PeriodicExportingMetricReader({
        exporter,
        exportIntervalMillis: exportInterval
      });
    }
    return exporter;
  });
}
async function getOtlpLogExporters() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_LOGS_EXPORTER);
  const protocol = process.env.OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
  const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  logForDebugging(`[3P telemetry] getOtlpLogExporters: types=${jsonStringify(exporterTypes)}, protocol=${protocol}, endpoint=${endpoint}`);
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      exporters.push(new ConsoleLogRecordExporter);
    } else if (exporterType === "otlp") {
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPLogExporter } = await import("@opentelemetry/exporter-logs-otlp-grpc");
          exporters.push(new OTLPLogExporter);
          break;
        }
        case "http/json": {
          const { OTLPLogExporter } = await import("@opentelemetry/exporter-logs-otlp-http");
          exporters.push(new OTLPLogExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPLogExporter } = await import("@opentelemetry/exporter-logs-otlp-proto");
          exporters.push(new OTLPLogExporter(httpConfig));
          break;
        }
        default:
          throw new Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_LOGS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`);
      }
    } else {
      throw new Error(`Unknown exporter type set in OTEL_LOGS_EXPORTER env var: ${exporterType}`);
    }
  }
  return exporters;
}
async function getOtlpTraceExporters() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_TRACES_EXPORTER);
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      exporters.push(new ConsoleSpanExporter);
    } else if (exporterType === "otlp") {
      const protocol = process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPTraceExporter } = await import("@opentelemetry/exporter-trace-otlp-grpc");
          exporters.push(new OTLPTraceExporter);
          break;
        }
        case "http/json": {
          const { OTLPTraceExporter } = await import("@opentelemetry/exporter-trace-otlp-http");
          exporters.push(new OTLPTraceExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPTraceExporter } = await import("@opentelemetry/exporter-trace-otlp-proto");
          exporters.push(new OTLPTraceExporter(httpConfig));
          break;
        }
        default:
          throw new Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_TRACES_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`);
      }
    } else {
      throw new Error(`Unknown exporter type set in OTEL_TRACES_EXPORTER env var: ${exporterType}`);
    }
  }
  return exporters;
}
function isTelemetryEnabled() {
  return isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_TELEMETRY);
}
function getBigQueryExportingReader() {
  const bigqueryExporter = new BigQueryMetricsExporter;
  return new PeriodicExportingMetricReader({
    exporter: bigqueryExporter,
    exportIntervalMillis: 300000
  });
}
function isBigQueryMetricsEnabled() {
  const subscriptionType = getSubscriptionType();
  const isC4EOrTeamUser = isClaudeAISubscriber() && (subscriptionType === "enterprise" || subscriptionType === "team");
  return is1PApiCustomer() || isC4EOrTeamUser;
}
async function initializeBetaTracing(resource) {
  const endpoint = process.env.BETA_TRACING_ENDPOINT;
  if (!endpoint) {
    return;
  }
  const [{ OTLPTraceExporter }, { OTLPLogExporter }] = await Promise.all([
    import("@opentelemetry/exporter-trace-otlp-http"),
    import("@opentelemetry/exporter-logs-otlp-http")
  ]);
  const httpConfig = {
    url: `${endpoint}/v1/traces`
  };
  const logHttpConfig = {
    url: `${endpoint}/v1/logs`
  };
  const traceExporter = new OTLPTraceExporter(httpConfig);
  const spanProcessor = new BatchSpanProcessor(traceExporter, {
    scheduledDelayMillis: DEFAULT_TRACES_EXPORT_INTERVAL_MS
  });
  const tracerProvider = new BasicTracerProvider({
    resource,
    spanProcessors: [spanProcessor]
  });
  import_api15.trace.setGlobalTracerProvider(tracerProvider);
  setTracerProvider(tracerProvider);
  const logExporter = new OTLPLogExporter(logHttpConfig);
  const loggerProvider = new LoggerProvider({
    resource,
    processors: [
      new BatchLogRecordProcessor(logExporter, {
        scheduledDelayMillis: DEFAULT_LOGS_EXPORT_INTERVAL_MS
      })
    ]
  });
  logs.setGlobalLoggerProvider(loggerProvider);
  setLoggerProvider(loggerProvider);
  const eventLogger = logs.getLogger("com.bett_code.bett_code.events", "1.0.0");
  setEventLogger(eventLogger);
  process.on("beforeExit", async () => {
    await loggerProvider?.forceFlush();
    await tracerProvider?.forceFlush();
  });
  process.on("exit", () => {
    loggerProvider?.forceFlush();
    tracerProvider?.forceFlush();
  });
}
async function initializeTelemetry() {
  profileCheckpoint("telemetry_init_start");
  bootstrapTelemetry();
  if (getHasFormattedOutput()) {
    for (const key of [
      "OTEL_METRICS_EXPORTER",
      "OTEL_LOGS_EXPORTER",
      "OTEL_TRACES_EXPORTER"
    ]) {
      const v = process.env[key];
      if (v?.includes("console")) {
        process.env[key] = v.split(",").map((s) => s.trim()).filter((s) => s !== "console").join(",");
      }
    }
  }
  import_api15.diag.setLogger(new ClaudeCodeDiagLogger, import_api15.DiagLogLevel.ERROR);
  initializePerfettoTracing();
  const readers = [];
  const telemetryEnabled = isTelemetryEnabled();
  logForDebugging(`[3P telemetry] isTelemetryEnabled=${telemetryEnabled} (CLAUDE_CODE_ENABLE_TELEMETRY=${process.env.CLAUDE_CODE_ENABLE_TELEMETRY})`);
  if (telemetryEnabled) {
    readers.push(...await getOtlpReaders());
  }
  if (isBigQueryMetricsEnabled()) {
    readers.push(getBigQueryExportingReader());
  }
  const platform = getPlatform();
  const baseAttributes = {
    [import_semantic_conventions4.ATTR_SERVICE_NAME]: "bett-code",
    [import_semantic_conventions4.ATTR_SERVICE_VERSION]: "1.0.0"
  };
  if (platform === "wsl") {
    const wslVersion = getWslVersion();
    if (wslVersion) {
      baseAttributes["wsl.version"] = wslVersion;
    }
  }
  const baseResource = resourceFromAttributes(baseAttributes);
  const osResource = resourceFromAttributes(osDetector.detect().attributes || {});
  const hostDetected = hostDetector.detect();
  const hostArchAttributes = hostDetected.attributes?.[import_semantic_conventions4.SEMRESATTRS_HOST_ARCH] ? {
    [import_semantic_conventions4.SEMRESATTRS_HOST_ARCH]: hostDetected.attributes[import_semantic_conventions4.SEMRESATTRS_HOST_ARCH]
  } : {};
  const hostArchResource = resourceFromAttributes(hostArchAttributes);
  const envResource = resourceFromAttributes(envDetector.detect().attributes || {});
  const resource = baseResource.merge(osResource).merge(hostArchResource).merge(envResource);
  if (isBetaTracingEnabled()) {
    initializeBetaTracing(resource).catch((e) => logForDebugging(`Beta tracing init failed: ${e}`, { level: "error" }));
    const meterProvider2 = new MeterProvider({
      resource,
      views: [],
      readers
    });
    setMeterProvider(meterProvider2);
    const shutdownTelemetry2 = async () => {
      const timeoutMs = parseInt(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "2000");
      try {
        endInteractionSpan();
        const loggerProvider = getLoggerProvider();
        const tracerProvider = getTracerProvider();
        const chains = [meterProvider2.shutdown()];
        if (loggerProvider) {
          chains.push(loggerProvider.forceFlush().then(() => loggerProvider.shutdown()));
        }
        if (tracerProvider) {
          chains.push(tracerProvider.forceFlush().then(() => tracerProvider.shutdown()));
        }
        await Promise.race([
          Promise.all(chains),
          telemetryTimeout(timeoutMs, "OpenTelemetry shutdown timeout")
        ]);
      } catch {}
    };
    registerCleanup(shutdownTelemetry2);
    return meterProvider2.getMeter("com.bett_code.bett_code", "1.0.0");
  }
  const meterProvider = new MeterProvider({
    resource,
    views: [],
    readers
  });
  setMeterProvider(meterProvider);
  if (telemetryEnabled) {
    const logExporters = await getOtlpLogExporters();
    logForDebugging(`[3P telemetry] Created ${logExporters.length} log exporter(s)`);
    if (logExporters.length > 0) {
      const loggerProvider = new LoggerProvider({
        resource,
        processors: logExporters.map((exporter) => new BatchLogRecordProcessor(exporter, {
          scheduledDelayMillis: parseInt(process.env.OTEL_LOGS_EXPORT_INTERVAL || DEFAULT_LOGS_EXPORT_INTERVAL_MS.toString())
        }))
      });
      logs.setGlobalLoggerProvider(loggerProvider);
      setLoggerProvider(loggerProvider);
      const eventLogger = logs.getLogger("com.bett_code.bett_code.events", "1.0.0");
      setEventLogger(eventLogger);
      logForDebugging("[3P telemetry] Event logger set successfully");
      process.on("beforeExit", async () => {
        await loggerProvider?.forceFlush();
        const tracerProvider = getTracerProvider();
        await tracerProvider?.forceFlush();
      });
      process.on("exit", () => {
        loggerProvider?.forceFlush();
        getTracerProvider()?.forceFlush();
      });
    }
  }
  if (telemetryEnabled && isEnhancedTelemetryEnabled()) {
    const traceExporters = await getOtlpTraceExporters();
    if (traceExporters.length > 0) {
      const spanProcessors = traceExporters.map((exporter) => new BatchSpanProcessor(exporter, {
        scheduledDelayMillis: parseInt(process.env.OTEL_TRACES_EXPORT_INTERVAL || DEFAULT_TRACES_EXPORT_INTERVAL_MS.toString())
      }));
      const tracerProvider = new BasicTracerProvider({
        resource,
        spanProcessors
      });
      import_api15.trace.setGlobalTracerProvider(tracerProvider);
      setTracerProvider(tracerProvider);
    }
  }
  const shutdownTelemetry = async () => {
    const timeoutMs = parseInt(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "2000");
    try {
      endInteractionSpan();
      const shutdownPromises = [meterProvider.shutdown()];
      const loggerProvider = getLoggerProvider();
      if (loggerProvider) {
        shutdownPromises.push(loggerProvider.shutdown());
      }
      const tracerProvider = getTracerProvider();
      if (tracerProvider) {
        shutdownPromises.push(tracerProvider.shutdown());
      }
      await Promise.race([
        Promise.all(shutdownPromises),
        telemetryTimeout(timeoutMs, "OpenTelemetry shutdown timeout")
      ]);
    } catch (error) {
      if (error instanceof Error && error.message.includes("timeout")) {
        logForDebugging(`
OpenTelemetry telemetry flush timed out after ${timeoutMs}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: ${timeoutMs}ms
`, { level: "error" });
      }
      throw error;
    }
  };
  registerCleanup(shutdownTelemetry);
  return meterProvider.getMeter("com.bett_code.bett_code", "1.0.0");
}
async function flushTelemetry() {
  const meterProvider = getMeterProvider();
  if (!meterProvider) {
    return;
  }
  const timeoutMs = parseInt(process.env.CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS || "5000");
  try {
    const flushPromises = [meterProvider.forceFlush()];
    const loggerProvider = getLoggerProvider();
    if (loggerProvider) {
      flushPromises.push(loggerProvider.forceFlush());
    }
    const tracerProvider = getTracerProvider();
    if (tracerProvider) {
      flushPromises.push(tracerProvider.forceFlush());
    }
    await Promise.race([
      Promise.all(flushPromises),
      telemetryTimeout(timeoutMs, "OpenTelemetry flush timeout")
    ]);
    logForDebugging("Telemetry flushed successfully");
  } catch (error) {
    if (error instanceof TelemetryTimeoutError) {
      logForDebugging(`Telemetry flush timed out after ${timeoutMs}ms. Some metrics may not be exported.`, { level: "warn" });
    } else {
      logForDebugging(`Telemetry flush failed: ${errorMessage(error)}`, {
        level: "error"
      });
    }
  }
}
function parseOtelHeadersEnvVar() {
  const headers = {};
  const envHeaders = process.env.OTEL_EXPORTER_OTLP_HEADERS;
  if (envHeaders) {
    for (const pair of envHeaders.split(",")) {
      const [key, ...valueParts] = pair.split("=");
      if (key && valueParts.length > 0) {
        headers[key.trim()] = valueParts.join("=").trim();
      }
    }
  }
  return headers;
}
function getOTLPExporterConfig() {
  const proxyUrl = getProxyUrl();
  const mtlsConfig = getMTLSConfig();
  const settings = getSettings_DEPRECATED();
  const config = {};
  const staticHeaders = parseOtelHeadersEnvVar();
  if (settings?.otelHeadersHelper) {
    config.headers = async () => {
      const dynamicHeaders = getOtelHeadersFromHelper();
      return { ...staticHeaders, ...dynamicHeaders };
    };
  } else if (Object.keys(staticHeaders).length > 0) {
    config.headers = async () => staticHeaders;
  }
  const otelEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  if (!proxyUrl || otelEndpoint && shouldBypassProxy(otelEndpoint)) {
    const caCerts2 = getCACertificates();
    if (mtlsConfig || caCerts2) {
      config.httpAgentOptions = {
        ...mtlsConfig,
        ...caCerts2 && { ca: caCerts2 }
      };
    }
    return config;
  }
  const caCerts = getCACertificates();
  const agentFactory = (_protocol) => {
    const proxyAgent = mtlsConfig || caCerts ? new import_https_proxy_agent.HttpsProxyAgent(proxyUrl, {
      ...mtlsConfig && {
        cert: mtlsConfig.cert,
        key: mtlsConfig.key,
        passphrase: mtlsConfig.passphrase
      },
      ...caCerts && { ca: caCerts }
    }) : new import_https_proxy_agent.HttpsProxyAgent(proxyUrl);
    return proxyAgent;
  };
  config.httpAgentOptions = agentFactory;
  return config;
}
var import_api15, import_semantic_conventions4, import_https_proxy_agent, DEFAULT_METRICS_EXPORT_INTERVAL_MS = 60000, DEFAULT_LOGS_EXPORT_INTERVAL_MS = 5000, DEFAULT_TRACES_EXPORT_INTERVAL_MS = 5000, TelemetryTimeoutError;
var init_instrumentation = __esm(() => {
  init_esm2();
  init_esm();
  init_esm4();
  init_esm6();
  init_esm8();
  init_state();
  init_auth();
  init_platform();
  init_caCerts();
  init_cleanupRegistry();
  init_debug();
  init_envUtils();
  init_errors();
  init_mtls();
  init_proxy();
  init_settings();
  init_slowOperations();
  init_startupProfiler();
  init_betaSessionTracing();
  init_bigqueryExporter();
  init_logger();
  init_perfettoTracing();
  init_sessionTracing();
  import_api15 = __toESM(require_src(), 1);
  import_semantic_conventions4 = __toESM(require_src2(), 1);
  import_https_proxy_agent = __toESM(require_dist(), 1);
  TelemetryTimeoutError = class TelemetryTimeoutError extends Error {
  };
});
init_instrumentation();

export {
  parseExporterTypes,
  isTelemetryEnabled,
  initializeTelemetry,
  flushTelemetry,
  bootstrapTelemetry
};
