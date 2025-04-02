import { Interface, InterfaceAbi } from 'ethers';

/**
 * Decorator for injecting a contract instance associated with the given ABI.
 * The contract must be registered using `createContractProvider()` or similar.
 *
 * Can be used on a class property or constructor parameter.
 *
 * @param abi - The contract ABI
 * @returns A NestJS-compatible decorator
 */
export declare function InjectContract(
  abi: Interface | InterfaceAbi
): PropertyDecorator & ParameterDecorator;
