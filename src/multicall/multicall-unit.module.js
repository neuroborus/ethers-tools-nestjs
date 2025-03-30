import { DynamicModule, Module } from '@nestjs/common';
import { MulticallUnitService } from './multicall-unit.service.js';
import { createMulticallProviders } from './create-multicall-providers.js';

@Module({})
export class MulticallModule {
  /**
   * @param {import('ethers').Provider | import('ethers').Signer | undefined} driver
   * @param {import('../../types/entities').MulticallOptions} [options]
   * @param {string} [multicallAddress]
   * @returns {import('@nestjs/common').DynamicModule}
   */
  static forRoot(driver, options, multicallAddress) {
    return {
      global: true,
      module: MulticallModule,
      providers: createMulticallProviders(driver, options, multicallAddress),
      exports: [MulticallUnitService],
    };
  }

  /**
   * @param {import('ethers').Provider | import('ethers').Signer | undefined} driver
   * @param {import('../../types/entities').MulticallOptions} [options]
   * @param {string} [multicallAddress]
   * @returns {import('@nestjs/common').DynamicModule}
   */
  static forFeature(driver, options, multicallAddress) {
    return {
      module: MulticallModule,
      providers: createMulticallProviders(driver, options, multicallAddress),
      exports: [MulticallUnitService],
    };
  }
}
