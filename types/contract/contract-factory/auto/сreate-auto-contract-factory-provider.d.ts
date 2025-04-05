import type { Provider } from '@nestjs/common';
import type { Interface, InterfaceAbi } from 'ethers';
import type { DynamicContract } from 'ethers-tools';
import { AutoContractFactoryArguments } from './auto-contract-factory.arguments';

/**
 * Registers a factory provider for the given contract class and ABI.
 *
 * This allows injecting a factory that can create contract instances at runtime
 * with dynamic address, driver, and options.
 *
 * @template T
 * @param identifier - For DI token
 * @param abi - Contract ABI-interface
 * @param args - Prepared data
 * @returns A NestJS provider object
 */
export declare function createAutoContractFactoryProvider(
  identifier: string | Function,
  abi: Interface | InterfaceAbi,
  args?: AutoContractFactoryArguments
): Provider<{
  /**
   * Dynamically creates an instance of the contract with the provided parameters.
   * @param localArgs - Runtime arguments for contract instantiation.
   */
  create(localArgs: AutoContractFactoryArguments): DynamicContract;
}>;
