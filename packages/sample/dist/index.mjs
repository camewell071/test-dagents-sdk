// src/index.ts
import BigNumber from "bignumber.js";
import uniqBy from "lodash/uniqBy";
import { ethers } from "ethers";
import superagent from "superagent";
import { testSample2 } from "@test-agent/sample-1";
function greet(name) {
  return `Hello, ${name}! Welcome to the SDK!`;
}
async function testFetchSuperagent() {
  try {
    const post = await superagent.get("https://jsonplaceholder.typicode.com/posts");
    return post.body;
  } catch (error) {
    console.error("testFetchSuperagent error:", error);
  }
}
var testBigNumber = async () => {
  window.document.title = "Hello, World!";
  return BigNumber(1e9).plus(5).toString();
};
var testEthers = async () => {
  const privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
  const wallet = new ethers.Wallet(privateKey);
  return wallet;
};
var testLodash = async () => {
  const lodash = uniqBy([{ "x": 1 }, { "x": 2 }, { "x": 1 }], "x");
  return lodash;
};
var testSample = async () => {
  return testSample2();
};
export {
  greet,
  testBigNumber,
  testEthers,
  testFetchSuperagent,
  testLodash,
  testSample
};
