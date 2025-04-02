import { getAbiDIToken } from '../../helpers/index.js';
import { ContractFactory } from '../contract.factory.js';

/**
 * Creates a NestJS provider that injects a dynamically generated contract instance
 * based on the provided ABI.
 *
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi - The contract ABI to use
 * @returns {import('ethers-tools').Provider<import('ethers-tools').DynamicContract>} - A NestJS provider definition
 */
export function createContractAutoProvider(abi) {
  return {
    provide: getAbiDIToken(abi),
    useFactory: (factory) => {
      const Class = factory.createClassAuto(abi);
      return new Class();
    },
    inject: [ContractFactory],
  };
}
