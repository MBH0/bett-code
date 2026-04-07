// @bun
import {
  require_src
} from "./chunk-64q1p7wf.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-unsupported.js
async function getMachineId() {
  import_api.diag.debug("could not read machine-id: unsupported platform");
  return;
}
var import_api;
var init_getMachineId_unsupported = __esm(() => {
  import_api = __toESM(require_src(), 1);
});
init_getMachineId_unsupported();

export {
  getMachineId
};
