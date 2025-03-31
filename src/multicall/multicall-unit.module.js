import { DynamicModule, Module } from '@nestjs/common';
import { MulticallUnitService } from './multicall-unit.service.js';
import { MULTICALL_UNIT_PARAMS_DI_TOKEN } from '../di-tokens.js';

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
      providers: [
        {
          provide: MULTICALL_UNIT_PARAMS_DI_TOKEN,
          useValue: { driver, options, multicallAddress },
        },
        {
          provide: MulticallUnitService,
          useFactory: (config) =>
            new MulticallUnitService(
              config.driver,
              config.options,
              config.multicallAddress
            ),
          inject: [MULTICALL_UNIT_PARAMS_DI_TOKEN],
        },
      ],
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
      providers: [
        {
          provide: MulticallUnitService,
          useValue: new MulticallUnitService(driver, options, multicallAddress),
        },
      ],
      exports: [MulticallUnitService],
    };
  }
}
