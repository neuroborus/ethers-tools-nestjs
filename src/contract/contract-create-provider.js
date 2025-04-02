import { getAbiDIToken } from '../helpers/index.js';

/**
 * Creates a NestJS provider that registers a custom contract class
 * for dependency injection using the given ABI as a DI token.
 *
 * This allows you to inject a manually defined contract class (e.g., one
 * decorated with `@Contract(...)`) wherever the ABI token is requested via `@InjectContract`.
 *
 * @param {typeof import('ethers-tools').Contract} ContractClass
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi - The ABI used to generate the DI token
 * @returns {import('@nestjs/common').Provider} A NestJS provider object
 *
 * @example
 * // Registration in a module
 * providers: [createContractProvider(MyContract, MyAbi)]
 */
export function createContractProvider(ContractClass, abi) {
  return {
    provide: getAbiDIToken(abi),
    useClass: ContractClass,
  };
}
