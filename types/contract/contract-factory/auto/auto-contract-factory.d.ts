import { DynamicContract } from 'ethers-tools';
import { AutoContractFactoryArguments } from './auto-contract-factory.arguments';

/**
 * Factory interface for dynamically creating contract instances with configurable parameters.
 */
export interface AutoContractFactory {
  create(args: AutoContractFactoryArguments): DynamicContract;
}
