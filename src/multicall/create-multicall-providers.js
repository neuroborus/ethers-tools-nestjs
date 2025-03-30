import { MULTICALL_UNIT_PARAMS_DI_TOKEN } from '../di-tokens.js';
import { MulticallUnitService } from './multicall-unit.service.js';

export const createMulticallProviders = (driver, options, multicallAddress) => {
  return [
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
  ];
};
