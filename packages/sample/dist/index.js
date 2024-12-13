"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  greet: () => greet,
  testBigNumber: () => testBigNumber,
  testEthers: () => testEthers,
  testFetchSuperagent: () => testFetchSuperagent,
  testLodash: () => testLodash,
  testSample: () => testSample
});
module.exports = __toCommonJS(src_exports);
var import_bignumber = __toESM(require("bignumber.js"));
var import_uniqBy = __toESM(require("lodash/uniqBy"));
var import_ethers = require("ethers");
var import_superagent = __toESM(require("superagent"));
var import_sample_1 = require("@test-agent/sample-1");
function greet(name) {
  return `Hello, ${name}! Welcome to the SDK!`;
}
async function testFetchSuperagent() {
  try {
    const post = await import_superagent.default.get("https://jsonplaceholder.typicode.com/posts");
    return post.body;
  } catch (error) {
    console.error("testFetchSuperagent error:", error);
  }
}
var testBigNumber = async () => {
  window.document.title = "Hello, World!";
  return (0, import_bignumber.default)(1e9).plus(5).toString();
};
var testEthers = async () => {
  const privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
  const wallet = new import_ethers.ethers.Wallet(privateKey);
  return wallet;
};
var testLodash = async () => {
  const lodash = (0, import_uniqBy.default)([{ "x": 1 }, { "x": 2 }, { "x": 1 }], "x");
  return lodash;
};
var testSample = async () => {
  return (0, import_sample_1.testSample2)();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  greet,
  testBigNumber,
  testEthers,
  testFetchSuperagent,
  testLodash,
  testSample
});
