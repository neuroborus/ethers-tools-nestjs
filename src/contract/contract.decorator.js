import { ContractFactory } from './contract.factory.js';

const factory = new ContractFactory();

/**
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
 * @param {string} [address]
 * @param {import('ethers').Signer | import('ethers').Provider | undefined} [driver]
 * @param {import('ethers-tools').ContractOptions} [options]
 * @returns {import('@nestjs/common').ClassDecorator}
 */
export function Contract(abi, address, driver, options) {
  return function (_TargetClass) {
    return factory.createClass(abi, address, driver, options);
  };
}
