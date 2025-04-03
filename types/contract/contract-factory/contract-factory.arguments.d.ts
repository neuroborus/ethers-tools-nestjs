import { Interface, InterfaceAbi, Provider, Signer } from 'ethers';
import { ContractOptions } from 'ethers-tools';

export interface ContractFactoryArguments {
  address?: string;
  abi?: Interface | InterfaceAbi;
  driver?: Signer | Provider;
  options?: ContractOptions;
}
