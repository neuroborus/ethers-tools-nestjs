import { Injectable } from '@nestjs/common';
import { Contract as EthersToolsContract } from 'ethers-tools';

/**
 * Injectable factory for dynamically creating contract instances or contract-based classes.
 */
@Injectable()
export class ContractFactory {
  /**
   * Creates a contract instance dynamically.
   *
   * @template T
   * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
   * @param {string} [address]
   * @param {import('ethers').Provider | import('ethers').Signer} [driver]
   * @param {import('ethers-tools').ContractOptions} [options]
   * @returns {T}
   */
  create(abi, address, driver, options) {
    return new EthersToolsContract(abi, address, driver, options);
  }

  /**
   * Creates an automatic contract instance dynamically.
   *
   * @template T
   * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
   * @param {string} [address]
   * @param {import('ethers').Provider | import('ethers').Signer} [driver]
   * @param {import('ethers-tools').ContractOptions} [options]
   * @returns {T}
   */
  createAuto(abi, address, driver, options) {
    return EthersToolsContract.createAutoInstance(abi, address, driver, options);
  }

  /**
   * Returns a class that directly extends the base contract class.
   *
   * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
   * @param {string} [address]
   * @param {import('ethers').Provider | import('ethers').Signer} [driver]
   * @param {import('ethers-tools').ContractOptions} [options]
   * @returns {new (args: DynamicContractConstructorArgs) => EthersToolsContract}
   */
  createClass(abi, address, driver, options) {
    return class extends EthersToolsContract {
      constructor(args) {
        super(args.abi || abi, args.address || address, args.driver || driver, args.options || options);
      }
    };
  }
  /**
   * Returns an automatic class that directly extends the base contract class.
   *
   * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
   * @param {string} [address]
   * @param {import('ethers').Provider | import('ethers').Signer} [driver]
   * @param {import('ethers-tools').ContractOptions} [options]
   * @returns {new (args: DynamicContractConstructorArgs) => EthersToolsContract}
   */
  createClassAuto(abi, address, driver, options) {
    return EthersToolsContract.createAutoClass(abi, address, driver, options);
  }
}
