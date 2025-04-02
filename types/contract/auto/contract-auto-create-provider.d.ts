import { Provider } from '@nestjs/common';
import { Interface, InterfaceAbi } from 'ethers';
import { DynamicContract } from 'ethers-tools';

/**
 * Creates a NestJS provider that injects a dynamically generated contract instance
 * based on the provided ABI.
 *
 * @param abi - The contract ABI to use
 * @returns A NestJS provider definition for the dynamically created contract
 */
export declare function createContractAutoProvider(
  abi: Interface | InterfaceAbi
): Provider<DynamicContract>;
