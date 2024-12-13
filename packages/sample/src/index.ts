import BigNumber from "bignumber.js";
import uniqBy from 'lodash/uniqBy';
import { ethers } from "ethers";
import superagent from 'superagent';

export function greet(name: string): string {
    return `Hello, ${name}! Welcome to the SDK!`;
}

export async function testFetchSuperagent() {
    try {
        const post = await superagent.get('https://jsonplaceholder.typicode.com/posts');
        return post.body;
    } catch (error) {
        console.error("testFetchSuperagent error:", error);
    }
}

export const testBigNumber = async () => {
    window.document.title = "Hello, World!";
    return BigNumber(1000000000).plus(5).toString();
}

export const testEthers = async () => {
    const privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
    const wallet = new ethers.Wallet(privateKey);
    return wallet
}

export const testLodash = async () => {
    const lodash = uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
    return lodash;
}