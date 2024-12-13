import { ethers } from 'ethers';

declare function greet(name: string): string;
declare function testFetchSuperagent(): Promise<any>;
declare const testBigNumber: () => Promise<string>;
declare const testEthers: () => Promise<ethers.Wallet>;
declare const testLodash: () => Promise<{
    x: number;
}[]>;
declare const testSample: () => Promise<string>;

export { greet, testBigNumber, testEthers, testFetchSuperagent, testLodash, testSample };
