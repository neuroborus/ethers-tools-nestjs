import { Contract } from 'ethers-tools';
import { getAutoContractFactoryToken } from './get-auto-contract-factory-token.js';

/**
 * Registers a factory provider for the given contract class and ABI.
 *
 * This allows injecting a factory that can create contract instances at runtime
 * with dynamic address, driver, and options.
 *
 * @template T\
 * @param {string | function} identifier - For DI token
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi } abi - Contract ABI-interface
 * @param {import('types/contract').AutoContractFactoryArguments} [args] - Prepared data
 * @returns {import('@nestjs/common').Provider} A NestJS provider object
 */
export function createAutoContractFactoryProvider(identifier, abi, args) {
  const token = getAutoContractFactoryToken(identifier);
  const contractClass = Contract.createAutoClass(
    abi,
    args?.address,
    args?.driver,
    args?.options
  );

  return {
    provide: token,
    useFactory: () => ({
      /**
       * Dynamically creates an instance of the contract with the provided parameters.
       * @param {import('types/contract').AutoContractFactoryArguments} localArgs
       * @returns {typeof import('ethers-tools').DynamicContract}
       */
      create(localArgs) {
        return new contractClass(localArgs);
      },
    }),
  };
}
