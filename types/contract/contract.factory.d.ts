import { Interface, InterfaceAbi, Provider, Signer } from 'ethers';
import {
  ContractOptions,
  DynamicContractConstructorArgs,
  Contract as EthersToolsContract,
} from 'ethers-tools';

/**
 * Injectable factory for dynamically creating contract instances or contract-based classes.
 */
export declare class ContractFactory {
  /**
   * Creates a contract instance dynamically.
   *
   * @param abi - The contract ABI.
   * @param address - Optional deployed contract address.
   * @param driver - Optional provider or signer.
   * @param options - Optional contract options.
   * @returns A contract instance.
   */
  create<T = EthersToolsContract>(
    abi: Interface | InterfaceAbi,
    address?: string,
    driver?: Provider | Signer,
    options?: ContractOptions
  ): T;

  /**
   * Returns a class that directly extends the base contract class.
   *
   * @param abi - The contract ABI.
   * @param address - Optional deployed contract address.
   * @param driver - Optional provider or signer.
   * @param options - Optional contract options.
   * @returns A constructor function that produces contract instances.
   */
  createClass(
    abi: Interface | InterfaceAbi,
    address?: string,
    driver?: Provider | Signer,
    options?: ContractOptions
  ): new (args: DynamicContractConstructorArgs) => EthersToolsContract;
}
