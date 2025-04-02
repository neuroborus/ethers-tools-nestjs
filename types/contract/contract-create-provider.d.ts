import { Interface, InterfaceAbi } from 'ethers';
import { Provider } from '@nestjs/common';
import { Contract } from 'ethers-tools';

/**
 * Creates a NestJS provider that registers a custom contract class
 * for dependency injection using the given ABI as a DI token.
 *
 * @param ContractClass - A class constructor extending the base Contract
 * @param abi - The ABI used to generate the DI token
 * @returns A NestJS provider object
 */
export declare function createContractProvider(
  ContractClass: new (...args: any[]) => Contract,
  abi: Interface | InterfaceAbi
): Provider;
