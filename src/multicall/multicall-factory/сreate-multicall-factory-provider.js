import { MulticallUnit } from 'ethers-tools';
import { getMulticallFactoryToken } from './get-multicall-factory-token.js';

/**
 * Registers a factory provider for the given contract class and ABI.
 *
 * This allows injecting a factory that can create contract instances at runtime
 * with dynamic address, driver, and options.
 *
 * @template T
 * @param {string | function} identifier - Identifier
 * @param {import('types/multicall').MulticallFactoryArguments} [args] - Prepared data
 * @returns {import('@nestjs/common').Provider} A NestJS provider object
 */
export function createMulticallFactoryProvider(identifier, args) {
  const token = getMulticallFactoryToken(identifier);

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
