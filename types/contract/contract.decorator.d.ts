import { Interface, InterfaceAbi, Provider, Signer } from 'ethers';
import { ContractOptions } from 'ethers-tools';

/**
 * Class decorator that transforms the target class into a subclass
 * of `ethers-tools` Contract.
 *
 * @param abi - The contract ABI
 * @param address - Optional deployed contract address
 * @param driver - Optional provider or signer
 * @param options - Optional additional contract options
 * @returns A NestJS-compatible class decorator
 */
export declare function Contract(
  abi: Interface | InterfaceAbi,
  address?: string,
  driver?: Provider | Signer,
  options?: ContractOptions
): ClassDecorator;
