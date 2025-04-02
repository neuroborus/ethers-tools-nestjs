import { Interface, InterfaceAbi, Provider, Signer } from 'ethers';
import {
  Contract,
  ContractOptions,
  DynamicContract,
  DynamicContractConstructorArgs
} from 'ethers-tools';

/**
 * Injectable factory for dynamically creating contract instances or contract-based classes.
 */
export declare class ContractFactory {
  /**
   * Creates a contract instance dynamically.
   *
   * @param abi - The contract ABI
   * @param address - Optional deployed contract address
   * @param driver - Optional provider or signer
   * @param options - Optional contract options
   * @returns A contract instance
   */
  create<T = Contract>(
    abi: Interface | InterfaceAbi,
    address?: string,
    driver?: Provider | Signer,
    options?: ContractOptions
  ): T;

  /**
   * Creates an automatic contract instance dynamically with generated method accessors.
   *
   * @param abi - The contract ABI
   * @param address - Optional deployed contract address
   * @param driver - Optional provider or signer
   * @param options - Optional contract options
   * @returns A dynamic contract instance
   */
  createAuto(
    abi: Interface | InterfaceAbi,
    address?: string,
    driver?: Provider | Signer,
    options?: ContractOptions
  ): DynamicContract;

  /**
   * Returns a class that extends the base contract with injected constructor arguments.
   *
   * @param abi - The contract ABI
   * @param address - Optional deployed contract address
   * @param driver - Optional provider or signer
   * @param options - Optional contract options
   * @returns A class constructor extending the base contract
   */
  createClass(
    abi: Interface | InterfaceAbi,
    address?: string,
    driver?: Provider | Signer,
    options?: ContractOptions
  ): new (args: DynamicContractConstructorArgs) => Contract;

  /**
   * Returns a class that extends the base dynamic contract class with injected constructor arguments.
   *
   * @param abi - The contract ABI
   * @param address - Optional deployed contract address
   * @param driver - Optional provider or signer
   * @param options - Optional contract options
   * @returns A class constructor extending the dynamic contract
   */
  createClassAuto(
    abi: Interface | InterfaceAbi,
    address?: string,
    driver?: Provider | Signer,
    options?: ContractOptions
  ): new (args: DynamicContractConstructorArgs) => DynamicContract;
}
