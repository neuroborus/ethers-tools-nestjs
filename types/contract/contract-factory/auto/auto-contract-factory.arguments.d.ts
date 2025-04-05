import { Provider, Signer } from 'ethers';
import { ContractOptions } from 'ethers-tools';

export interface AutoContractFactoryArguments {
  address?: string;
  driver?: Signer | Provider;
  options?: ContractOptions;
}
