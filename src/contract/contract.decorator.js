import { Contract as EthersToolsContract } from 'ethers-tools';

/**
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
 * @param {string} [address]
 * @param {import('ethers').Signer | import('ethers').Provider | undefined} [driver]
 * @param {import('ethers-tools').ContractOptions} [options]
 * @returns {import('@nestjs/common').ClassDecorator}
 */
export function Contract(abi, address, driver, options) {
  return function (_TargetClass) {
    return class extends EthersToolsContract {
      constructor(...args) {
        super(abi, address, driver, options);
      }
    };
  };
}
