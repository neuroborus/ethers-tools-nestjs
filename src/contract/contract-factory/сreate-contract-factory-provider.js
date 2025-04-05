import { getContractFactoryToken } from './get-contract-factory-token.js';

/**
 * Registers a factory provider for the given contract class and ABI.
 *
 * This allows injecting a factory that can create contract instances at runtime
 * with dynamic address, driver, and options.
 *
 * @template T
 * @param {typeof import('ethers-tools').Contract} ContractClass - The user-defined contract class
 * @param {import('types/contract').ContractFactoryArguments} [args] - Prepared data
 * @returns {import('@nestjs/common').Provider} A NestJS provider object
 */
export function createContractFactoryProvider(ContractClass, args) {
  const token = getContractFactoryToken(ContractClass);

  return {
    provide: token,
    useFactory: () => ({
      /**
       * Dynamically creates an instance of the contract with the provided parameters.
       * @param {import('types/contract').ContractFactoryArguments} localArgs
       * @returns {typeof import('ethers-tools').Contract}
       */
      create(localArgs) {
        return new ContractClass(
          localArgs.abi || args.abi,
          localArgs.address || args.address,
          localArgs.driver || args.driver,
          localArgs.options || args.options
        );
      },
    }),
  };
}
