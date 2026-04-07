// @bun
import {
  execAsync,
  init_execAsync
} from "./chunk-n7eqh833.js";
import {
  require_src
} from "./chunk-64q1p7wf.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-darwin.js
async function getMachineId() {
  try {
    const result = await execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"');
    const idLine = result.stdout.split(`
`).find((line) => line.includes("IOPlatformUUID"));
    if (!idLine) {
      return;
    }
    const parts = idLine.split('" = "');
    if (parts.length === 2) {
      return parts[1].slice(0, -1);
    }
  } catch (e) {
    import_api.diag.debug(`error reading machine id: ${e}`);
  }
  return;
}
var import_api;
var init_getMachineId_darwin = __esm(() => {
  init_execAsync();
  import_api = __toESM(require_src(), 1);
});
init_getMachineId_darwin();

export {
  getMachineId
};
