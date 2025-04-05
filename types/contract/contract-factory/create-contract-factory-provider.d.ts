import { Provider as NestProvider } from '@nestjs/common';
import type { InterfaceAbi, Provider, Signer } from 'ethers';
import type { Contract } from 'ethers-tools';
import { ContractFactoryArguments } from './contract-factory.arguments';

/**
 * Registers a factory provider for a given contract class and ABI,
 * allowing it to be injected via `@InjectContractFactory(...)`.
 *
 * @param ContractClass - A user-defined class extending the base `Contract`
 * @param args - The ABI used by the contract
 * @returns A NestJS provider that exposes a factory to create contract instances
 */
export declare function createContractFactoryProvider<T extends Contract>(
  ContractClass: new (
    abi: InterfaceAbi,
    address: string,
    driver?: Signer | Provider,
    options?: any
  ) => T,
  args?: ContractFactoryArguments
): NestProvider;
