import { MulticallUnit } from 'ethers-tools';
import { MulticallFactoryArguments } from './multicall-factory.arguments';

/**
 * Factory interface for dynamically creating multical interface with configurable parameters.
 */
export interface MulticallFactory {
  create(args: MulticallFactoryArguments): MulticallUnit;
}
