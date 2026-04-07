// @bun
import {
  getDesktopPath,
  init_file
} from "./chunk-0ybjyybr.js";
import"./chunk-acq8papb.js";
import"./chunk-k5yw79cx.js";
import"./chunk-5ajamnkb.js";
import"./chunk-4jqh9cde.js";
import"./chunk-xswm8fjv.js";
import"./chunk-r1gancj0.js";
import"./chunk-k5hep4qq.js";
import"./chunk-3c25bcsw.js";
import"./chunk-63kzvq55.js";
import"./chunk-64c1avct.js";
import"./chunk-ypnebnty.js";
import"./chunk-egb62rk0.js";
import"./chunk-wsj9bqwr.js";
import"./chunk-cdz5yb0r.js";
import {
  init_analytics,
  logEvent
} from "./chunk-paapvyzx.js";
import"./chunk-g1f9xvnd.js";
import"./chunk-202de3fk.js";
import"./chunk-vv49ky54.js";
import"./chunk-0hpnqvkf.js";
import"./chunk-hp13emx6.js";
import"./chunk-hhkbd8h1.js";
import {
  init_log,
  logError
} from "./chunk-rqbfd2rb.js";
import"./chunk-8tnsngw2.js";
import"./chunk-ya62xx2m.js";
import {
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  toError
} from "./chunk-8es6caa5.js";
import"./chunk-fbv4apne.js";
import"./chunk-h3gry12w.js";
import {
  getSessionId,
  init_state
} from "./chunk-qzn8r3qg.js";
import"./chunk-0ds34vbj.js";
import"./chunk-3wk0tdmp.js";
import"./chunk-1t5d3rxd.js";
import"./chunk-emdwnqgz.js";
import"./chunk-64q1p7wf.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/heapDumpService.ts
import { createWriteStream, writeFileSync } from "fs";
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { pipeline } from "stream/promises";
import {
  getHeapSnapshot,
  getHeapSpaceStatistics,
  getHeapStatistics
} from "v8";
async function captureMemoryDiagnostics(trigger, dumpNumber = 0) {
  const usage = process.memoryUsage();
  const heapStats = getHeapStatistics();
  const resourceUsage = process.resourceUsage();
  const uptimeSeconds = process.uptime();
  let heapSpaceStats;
  try {
    heapSpaceStats = getHeapSpaceStatistics();
  } catch {}
  const activeHandles = process._getActiveHandles().length;
  const activeRequests = process._getActiveRequests().length;
  let openFileDescriptors;
  try {
    openFileDescriptors = (await readdir("/proc/self/fd")).length;
  } catch {}
  let smapsRollup;
  try {
    smapsRollup = await readFile("/proc/self/smaps_rollup", "utf8");
  } catch {}
  const nativeMemory = usage.rss - usage.heapUsed;
  const bytesPerSecond = uptimeSeconds > 0 ? usage.rss / uptimeSeconds : 0;
  const mbPerHour = bytesPerSecond * 3600 / (1024 * 1024);
  const potentialLeaks = [];
  if (heapStats.number_of_detached_contexts > 0) {
    potentialLeaks.push(`${heapStats.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  }
  if (activeHandles > 100) {
    potentialLeaks.push(`${activeHandles} active handles - possible timer/socket leak`);
  }
  if (nativeMemory > usage.heapUsed) {
    potentialLeaks.push("Native memory > heap - leak may be in native addons (node-pty, sharp, etc.)");
  }
  if (mbPerHour > 100) {
    potentialLeaks.push(`High memory growth rate: ${mbPerHour.toFixed(1)} MB/hour`);
  }
  if (openFileDescriptors && openFileDescriptors > 500) {
    potentialLeaks.push(`${openFileDescriptors} open file descriptors - possible file/socket leak`);
  }
  return {
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    trigger,
    dumpNumber,
    uptimeSeconds,
    memoryUsage: {
      heapUsed: usage.heapUsed,
      heapTotal: usage.heapTotal,
      external: usage.external,
      arrayBuffers: usage.arrayBuffers,
      rss: usage.rss
    },
    memoryGrowthRate: {
      bytesPerSecond,
      mbPerHour
    },
    v8HeapStats: {
      heapSizeLimit: heapStats.heap_size_limit,
      mallocedMemory: heapStats.malloced_memory,
      peakMallocedMemory: heapStats.peak_malloced_memory,
      detachedContexts: heapStats.number_of_detached_contexts,
      nativeContexts: heapStats.number_of_native_contexts
    },
    v8HeapSpaces: heapSpaceStats?.map((space) => ({
      name: space.space_name,
      size: space.space_size,
      used: space.space_used_size,
      available: space.space_available_size
    })),
    resourceUsage: {
      maxRSS: resourceUsage.maxRSS * 1024,
      userCPUTime: resourceUsage.userCPUTime,
      systemCPUTime: resourceUsage.systemCPUTime
    },
    activeHandles,
    activeRequests,
    openFileDescriptors,
    analysis: {
      potentialLeaks,
      recommendation: potentialLeaks.length > 0 ? `WARNING: ${potentialLeaks.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects."
    },
    smapsRollup,
    platform: process.platform,
    nodeVersion: process.version,
    ccVersion: "1.0.0"
  };
}
async function performHeapDump(trigger = "manual", dumpNumber = 0) {
  try {
    const sessionId = getSessionId();
    const diagnostics = await captureMemoryDiagnostics(trigger, dumpNumber);
    const toGB = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(3);
    logForDebugging(`[HeapDump] Memory state:
  heapUsed: ${toGB(diagnostics.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${toGB(diagnostics.memoryUsage.external)} GB (NOT in snapshot)
  rss: ${toGB(diagnostics.memoryUsage.rss)} GB (total process)
  ${diagnostics.analysis.recommendation}`);
    const dumpDir = getDesktopPath();
    await getFsImplementation().mkdir(dumpDir);
    const suffix = dumpNumber > 0 ? `-dump${dumpNumber}` : "";
    const heapFilename = `${sessionId}${suffix}.heapsnapshot`;
    const diagFilename = `${sessionId}${suffix}-diagnostics.json`;
    const heapPath = join(dumpDir, heapFilename);
    const diagPath = join(dumpDir, diagFilename);
    await writeFile(diagPath, jsonStringify(diagnostics, null, 2), {
      mode: 384
    });
    logForDebugging(`[HeapDump] Diagnostics written to ${diagPath}`);
    await writeHeapSnapshot(heapPath);
    logForDebugging(`[HeapDump] Heap dump written to ${heapPath}`);
    logEvent("tengu_heap_dump", {
      triggerManual: trigger === "manual",
      triggerAuto15GB: trigger === "auto-1.5GB",
      dumpNumber,
      success: true
    });
    return { success: true, heapPath, diagPath };
  } catch (err) {
    const error = toError(err);
    logError(error);
    logEvent("tengu_heap_dump", {
      triggerManual: trigger === "manual",
      triggerAuto15GB: trigger === "auto-1.5GB",
      dumpNumber,
      success: false
    });
    return { success: false, error: error.message };
  }
}
async function writeHeapSnapshot(filepath) {
  if (typeof Bun !== "undefined") {
    writeFileSync(filepath, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
      mode: 384
    });
    Bun.gc(true);
    return;
  }
  const writeStream = createWriteStream(filepath, { mode: 384 });
  const heapSnapshotStream = getHeapSnapshot();
  await pipeline(heapSnapshotStream, writeStream);
}
var init_heapDumpService = __esm(() => {
  init_state();
  init_analytics();
  init_debug();
  init_errors();
  init_file();
  init_fsOperations();
  init_log();
  init_slowOperations();
});

// src/commands/heapdump/heapdump.ts
async function call() {
  const result = await performHeapDump();
  if (!result.success) {
    return {
      type: "text",
      value: `Failed to create heap dump: ${result.error}`
    };
  }
  return {
    type: "text",
    value: `${result.heapPath}
${result.diagPath}`
  };
}
var init_heapdump = __esm(() => {
  init_heapDumpService();
});
init_heapdump();

export {
  call
};
