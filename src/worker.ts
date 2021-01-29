import { parentPort } from "worker_threads";
import * as Comlink from "comlink";
import nodeEndpoint from "comlink/src/node-adapter";

import dJSON from "dirty-json";

function parse (malformedJSON: string) {
    return dJSON.parse(malformedJSON);
}

Comlink.expose(
    parse,
    nodeEndpoint(parentPort)
);
