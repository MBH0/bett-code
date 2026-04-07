// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync.js
import * as child_process from "child_process";
import * as util from "util";
var execAsync;
var init_execAsync = __esm(() => {
  execAsync = util.promisify(child_process.exec);
});

export { execAsync, init_execAsync };
