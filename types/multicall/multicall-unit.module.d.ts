import { DynamicModule } from '@nestjs/common';
import { Provider, Signer } from 'ethers';
import { MulticallOptions } from 'ethers-tools';

export declare class MulticallModule {
  /**
   * Registers a global MulticallUnitService provider.
   *
   * @param driver - An ethers provider or signer.
   * @param options - Optional multicall configuration.
   * @param multicallAddress - Optional multicall contract address.
   * @returns A global DynamicModule.
   */
  static forRoot(
    driver: Provider | Signer | undefined,
    options?: MulticallOptions,
    multicallAddress?: string
  ): DynamicModule;

  /**
   * Registers a local MulticallUnitService provider.
   *
   * @param driver - An ethers provider or signer.
   * @param options - Optional multicall configuration.
   * @param multicallAddress - Optional multicall contract address.
   * @returns A local DynamicModule.
   */
  static forFeature(
    driver: Provider | Signer | undefined,
    options?: MulticallOptions,
    multicallAddress?: string
  ): DynamicModule;
}
