// @bun
import {
  getFsImplementation,
  init_debug,
  init_fsOperations,
  logForDebugging
} from "./chunk-8es6caa5.js";
import {
  hasNodeOption,
  init_envUtils,
  isEnvTruthy
} from "./chunk-h3gry12w.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-0ds34vbj.js";
import {
  axios_default,
  init_axios
} from "./chunk-3wk0tdmp.js";
import {
  require_dist
} from "./chunk-1t5d3rxd.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/caCerts.ts
function clearCACertsCache() {
  getCACertificates.cache.clear?.();
  logForDebugging("Cleared CA certificates cache");
}
var getCACertificates;
var init_caCerts = __esm(() => {
  init_memoize();
  init_debug();
  init_envUtils();
  init_fsOperations();
  getCACertificates = memoize_default(() => {
    const useSystemCA = hasNodeOption("--use-system-ca") || hasNodeOption("--use-openssl-ca");
    const extraCertsPath = process.env.NODE_EXTRA_CA_CERTS;
    logForDebugging(`CA certs: useSystemCA=${useSystemCA}, extraCertsPath=${extraCertsPath}`);
    if (!useSystemCA && !extraCertsPath) {
      return;
    }
    const tls = __require("tls");
    const certs = [];
    if (useSystemCA) {
      const getCACerts = tls.getCACertificates;
      const systemCAs = getCACerts?.("system");
      if (systemCAs && systemCAs.length > 0) {
        certs.push(...systemCAs);
        logForDebugging(`CA certs: Loaded ${certs.length} system CA certificates (--use-system-ca)`);
      } else if (!getCACerts && !extraCertsPath) {
        logForDebugging("CA certs: --use-system-ca set but system CA API unavailable, deferring to runtime");
        return;
      } else {
        certs.push(...tls.rootCertificates);
        logForDebugging(`CA certs: Loaded ${certs.length} bundled root certificates as base (--use-system-ca fallback)`);
      }
    } else {
      certs.push(...tls.rootCertificates);
      logForDebugging(`CA certs: Loaded ${certs.length} bundled root certificates as base`);
    }
    if (extraCertsPath) {
      try {
        const extraCert = getFsImplementation().readFileSync(extraCertsPath, {
          encoding: "utf8"
        });
        certs.push(extraCert);
        logForDebugging(`CA certs: Appended extra certificates from NODE_EXTRA_CA_CERTS (${extraCertsPath})`);
      } catch (error) {
        logForDebugging(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${extraCertsPath}): ${error}`, { level: "error" });
      }
    }
    return certs.length > 0 ? certs : undefined;
  });
});

// src/utils/mtls.ts
import { Agent as HttpsAgent } from "https";
function getWebSocketTLSOptions() {
  const mtlsConfig = getMTLSConfig();
  const caCerts = getCACertificates();
  if (!mtlsConfig && !caCerts) {
    return;
  }
  return {
    ...mtlsConfig,
    ...caCerts && { ca: caCerts }
  };
}
function getTLSFetchOptions() {
  const mtlsConfig = getMTLSConfig();
  const caCerts = getCACertificates();
  if (!mtlsConfig && !caCerts) {
    return {};
  }
  const tlsConfig = {
    ...mtlsConfig,
    ...caCerts && { ca: caCerts }
  };
  if (typeof Bun !== "undefined") {
    return { tls: tlsConfig };
  }
  logForDebugging("TLS: Created undici agent with custom certificates");
  const undiciMod = __require("undici");
  const agent = new undiciMod.Agent({
    connect: {
      cert: tlsConfig.cert,
      key: tlsConfig.key,
      passphrase: tlsConfig.passphrase,
      ...tlsConfig.ca && { ca: tlsConfig.ca }
    },
    pipelining: 1
  });
  return { dispatcher: agent };
}
function clearMTLSCache() {
  getMTLSConfig.cache.clear?.();
  getMTLSAgent.cache.clear?.();
  logForDebugging("Cleared mTLS configuration cache");
}
function configureGlobalMTLS() {
  const mtlsConfig = getMTLSConfig();
  if (!mtlsConfig) {
    return;
  }
  if (process.env.NODE_EXTRA_CA_CERTS) {
    logForDebugging("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs");
  }
}
var getMTLSConfig, getMTLSAgent;
var init_mtls = __esm(() => {
  init_memoize();
  init_caCerts();
  init_debug();
  init_fsOperations();
  getMTLSConfig = memoize_default(() => {
    const config = {};
    if (process.env.CLAUDE_CODE_CLIENT_CERT) {
      try {
        config.cert = getFsImplementation().readFileSync(process.env.CLAUDE_CODE_CLIENT_CERT, { encoding: "utf8" });
        logForDebugging("mTLS: Loaded client certificate from CLAUDE_CODE_CLIENT_CERT");
      } catch (error) {
        logForDebugging(`mTLS: Failed to load client certificate: ${error}`, {
          level: "error"
        });
      }
    }
    if (process.env.CLAUDE_CODE_CLIENT_KEY) {
      try {
        config.key = getFsImplementation().readFileSync(process.env.CLAUDE_CODE_CLIENT_KEY, { encoding: "utf8" });
        logForDebugging("mTLS: Loaded client key from CLAUDE_CODE_CLIENT_KEY");
      } catch (error) {
        logForDebugging(`mTLS: Failed to load client key: ${error}`, {
          level: "error"
        });
      }
    }
    if (process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE) {
      config.passphrase = process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
      logForDebugging("mTLS: Using client key passphrase");
    }
    if (Object.keys(config).length === 0) {
      return;
    }
    return config;
  });
  getMTLSAgent = memoize_default(() => {
    const mtlsConfig = getMTLSConfig();
    const caCerts = getCACertificates();
    if (!mtlsConfig && !caCerts) {
      return;
    }
    const agentOptions = {
      ...mtlsConfig,
      ...caCerts && { ca: caCerts },
      keepAlive: true
    };
    logForDebugging("mTLS: Creating HTTPS agent with custom certificates");
    return new HttpsAgent(agentOptions);
  });
});

// src/utils/proxy.ts
function disableKeepAlive() {
  keepAliveDisabled = true;
}
function getAddressFamily(options) {
  switch (options.family) {
    case 0:
    case 4:
    case 6:
      return options.family;
    case "IPv6":
      return 6;
    case "IPv4":
    case undefined:
      return 4;
    default:
      throw new Error(`Unsupported address family: ${options.family}`);
  }
}
function getProxyUrl(env = process.env) {
  return env.https_proxy || env.HTTPS_PROXY || env.http_proxy || env.HTTP_PROXY;
}
function getNoProxy(env = process.env) {
  return env.no_proxy || env.NO_PROXY;
}
function shouldBypassProxy(urlString, noProxy = getNoProxy()) {
  if (!noProxy)
    return false;
  if (noProxy === "*")
    return true;
  try {
    const url = new URL(urlString);
    const hostname = url.hostname.toLowerCase();
    const port = url.port || (url.protocol === "https:" ? "443" : "80");
    const hostWithPort = `${hostname}:${port}`;
    const noProxyList = noProxy.split(/[,\s]+/).filter(Boolean);
    return noProxyList.some((pattern) => {
      pattern = pattern.toLowerCase().trim();
      if (pattern.includes(":")) {
        return hostWithPort === pattern;
      }
      if (pattern.startsWith(".")) {
        const suffix = pattern;
        return hostname === pattern.substring(1) || hostname.endsWith(suffix);
      }
      return hostname === pattern;
    });
  } catch {
    return false;
  }
}
function createHttpsProxyAgent(proxyUrl, extra = {}) {
  const mtlsConfig = getMTLSConfig();
  const caCerts = getCACertificates();
  const agentOptions = {
    ...mtlsConfig && {
      cert: mtlsConfig.cert,
      key: mtlsConfig.key,
      passphrase: mtlsConfig.passphrase
    },
    ...caCerts && { ca: caCerts }
  };
  if (isEnvTruthy(process.env.CLAUDE_CODE_PROXY_RESOLVES_HOSTS)) {
    agentOptions.lookup = (hostname, options, callback) => {
      callback(null, hostname, getAddressFamily(options));
    };
  }
  return new import_https_proxy_agent.HttpsProxyAgent(proxyUrl, { ...agentOptions, ...extra });
}
function createAxiosInstance(extra = {}) {
  const proxyUrl = getProxyUrl();
  const mtlsAgent = getMTLSAgent();
  const instance = axios_default.create({ proxy: false });
  if (!proxyUrl) {
    if (mtlsAgent)
      instance.defaults.httpsAgent = mtlsAgent;
    return instance;
  }
  const proxyAgent = createHttpsProxyAgent(proxyUrl, extra);
  instance.interceptors.request.use((config) => {
    if (config.url && shouldBypassProxy(config.url)) {
      config.httpsAgent = mtlsAgent;
      config.httpAgent = mtlsAgent;
    } else {
      config.httpsAgent = proxyAgent;
      config.httpAgent = proxyAgent;
    }
    return config;
  });
  return instance;
}
function getWebSocketProxyAgent(url) {
  const proxyUrl = getProxyUrl();
  if (!proxyUrl) {
    return;
  }
  if (shouldBypassProxy(url)) {
    return;
  }
  return createHttpsProxyAgent(proxyUrl);
}
function getWebSocketProxyUrl(url) {
  const proxyUrl = getProxyUrl();
  if (!proxyUrl) {
    return;
  }
  if (shouldBypassProxy(url)) {
    return;
  }
  return proxyUrl;
}
function getProxyFetchOptions(opts) {
  const base = keepAliveDisabled ? { keepalive: false } : {};
  if (opts?.forAnthropicAPI) {
    const unixSocket = process.env.ANTHROPIC_UNIX_SOCKET;
    if (unixSocket && typeof Bun !== "undefined") {
      return { ...base, unix: unixSocket };
    }
  }
  const proxyUrl = getProxyUrl();
  if (proxyUrl) {
    if (typeof Bun !== "undefined") {
      return { ...base, proxy: proxyUrl, ...getTLSFetchOptions() };
    }
    return { ...base, dispatcher: getProxyAgent(proxyUrl) };
  }
  return { ...base, ...getTLSFetchOptions() };
}
function configureGlobalAgents() {
  const proxyUrl = getProxyUrl();
  const mtlsAgent = getMTLSAgent();
  if (proxyInterceptorId !== undefined) {
    axios_default.interceptors.request.eject(proxyInterceptorId);
    proxyInterceptorId = undefined;
  }
  axios_default.defaults.proxy = undefined;
  axios_default.defaults.httpAgent = undefined;
  axios_default.defaults.httpsAgent = undefined;
  if (proxyUrl) {
    axios_default.defaults.proxy = false;
    const proxyAgent = createHttpsProxyAgent(proxyUrl);
    proxyInterceptorId = axios_default.interceptors.request.use((config) => {
      if (config.url && shouldBypassProxy(config.url)) {
        if (mtlsAgent) {
          config.httpsAgent = mtlsAgent;
          config.httpAgent = mtlsAgent;
        } else {
          delete config.httpsAgent;
          delete config.httpAgent;
        }
      } else {
        config.httpsAgent = proxyAgent;
        config.httpAgent = proxyAgent;
      }
      return config;
    });
    __require("undici").setGlobalDispatcher(getProxyAgent(proxyUrl));
  } else if (mtlsAgent) {
    axios_default.defaults.httpsAgent = mtlsAgent;
    const mtlsOptions = getTLSFetchOptions();
    if (mtlsOptions.dispatcher) {
      __require("undici").setGlobalDispatcher(mtlsOptions.dispatcher);
    }
  }
}
async function getAWSClientProxyConfig() {
  const proxyUrl = getProxyUrl();
  if (!proxyUrl) {
    return {};
  }
  const [{ NodeHttpHandler }, { defaultProvider }] = await Promise.all([
    import("@smithy/node-http-handler"),
    import("@aws-sdk/credential-provider-node")
  ]);
  const agent = createHttpsProxyAgent(proxyUrl);
  const requestHandler = new NodeHttpHandler({
    httpAgent: agent,
    httpsAgent: agent
  });
  return {
    requestHandler,
    credentials: defaultProvider({
      clientConfig: { requestHandler }
    })
  };
}
function clearProxyCache() {
  getProxyAgent.cache.clear?.();
  logForDebugging("Cleared proxy agent cache");
}
var import_https_proxy_agent, keepAliveDisabled = false, getProxyAgent, proxyInterceptorId;
var init_proxy = __esm(() => {
  init_axios();
  init_memoize();
  init_caCerts();
  init_debug();
  init_envUtils();
  init_mtls();
  import_https_proxy_agent = __toESM(require_dist(), 1);
  getProxyAgent = memoize_default((uri) => {
    const undiciMod = __require("undici");
    const mtlsConfig = getMTLSConfig();
    const caCerts = getCACertificates();
    const proxyOptions = {
      httpProxy: uri,
      httpsProxy: uri,
      noProxy: process.env.NO_PROXY || process.env.no_proxy
    };
    if (mtlsConfig || caCerts) {
      const tlsOpts = {
        ...mtlsConfig && {
          cert: mtlsConfig.cert,
          key: mtlsConfig.key,
          passphrase: mtlsConfig.passphrase
        },
        ...caCerts && { ca: caCerts }
      };
      proxyOptions.connect = tlsOpts;
      proxyOptions.requestTls = tlsOpts;
    }
    return new undiciMod.EnvHttpProxyAgent(proxyOptions);
  });
});

export { getCACertificates, clearCACertsCache, init_caCerts, getMTLSConfig, getWebSocketTLSOptions, clearMTLSCache, configureGlobalMTLS, init_mtls, disableKeepAlive, getProxyUrl, shouldBypassProxy, createAxiosInstance, getWebSocketProxyAgent, getWebSocketProxyUrl, getProxyFetchOptions, configureGlobalAgents, getAWSClientProxyConfig, clearProxyCache, init_proxy };
