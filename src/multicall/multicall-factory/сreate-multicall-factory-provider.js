import { MulticallUnit } from 'ethers-tools';
import { getMulticallFactoryToken } from './index.js';

/**
 * Registers a factory provider for the given contract class and ABI.
 *
 * This allows injecting a factory that can create contract instances at runtime
 * with dynamic address, driver, and options.
 *
 * @template T
 * @param {string} name - Identifier
 * @param {import('types/multicall').MulticallFactoryArguments} [args] - Prepared data
 * @returns {import('@nestjs/common').Provider} A NestJS provider object
 */
export function createMulticallFactoryProvider(name, args) {
  const token = getMulticallFactoryToken(name);

  return {
    provide: token,
    useFactory: () => ({
      /**
       * Dynamically creates an instance of the MulticallUnit with the provided parameters.
       * @param {import('types/multicall').MulticallFactoryArguments} [localArgs] - Creation data
       * @returns {typeof import('ethers-tools').MulticallUnit}
       */
      create(localArgs) {
        return new MulticallUnit(
          localArgs?.driver || args?.driver,
          localArgs?.options || args?.options
        );
      },
    }),
  };
}
