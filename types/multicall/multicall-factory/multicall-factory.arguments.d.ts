import { Provider, Signer } from 'ethers';
import { MulticallOptions } from 'ethers-tools';

export interface MulticallFactoryArguments {
  driver?: Signer | Provider;
  options?: MulticallOptions;
}
