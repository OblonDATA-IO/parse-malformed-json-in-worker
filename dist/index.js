"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMalformedJSON = void 0;
const worker_threads_1 = require("worker_threads");
const Comlink = __importStar(require("comlink"));
const node_adapter_1 = __importDefault(require("comlink/src/node-adapter"));
function parseMalformedJSON(malformedJSON) {
    const worker = new worker_threads_1.Worker(`./utilities/ScraperFactory/utilities/parseMalformedJSON/worker.js`);
    const parse = Comlink.wrap(node_adapter_1.default(worker));
    // @ts-ignore
    return parse(malformedJSON);
}
exports.parseMalformedJSON = parseMalformedJSON;
exports.default = parseMalformedJSON;