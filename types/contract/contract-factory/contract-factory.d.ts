import { Contract } from 'ethers-tools';
import { ContractFactoryArguments } from './contract-factory.arguments';

/**
 * Factory interface for dynamically creating contract instances with configurable parameters.
 */
export interface ContractFactory<T extends Contract> {
  create(args: ContractFactoryArguments): T;
}
