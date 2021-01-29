import { Worker } from "worker_threads";
import * as Comlink from "comlink";
import nodeEndpoint from "comlink/dist/umd/node-adapter.min.js";

export function parseMalformedJSON (
    malformedJSON
) {
    const worker = new Worker(`./worker.js`);
    const parse = Comlink.wrap(nodeEndpoint(worker));
    // @ts-ignore
    return parse(malformedJSON);
}

export default parseMalformedJSON;
