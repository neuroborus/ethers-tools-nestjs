import { Provider, Signer } from 'ethers';
import { MulticallOptions, MulticallUnit } from 'ethers-tools';

/**
 * Injectable wrapper around ethers-tools MulticallUnit
 * for use with NestJS dependency injection.
 */
export declare class MulticallUnitService extends MulticallUnit {
  /**
   * Creates an instance of MulticallUnitService.
   *
   * @param driver - An ethers provider or signer.
   * @param options - Optional multicall configuration.
   * @param multicallAddress - Optional multicall contract address.
   */
  constructor(
    driver: Provider | Signer,
    options?: MulticallOptions,
    multicallAddress?: string
  );
}
