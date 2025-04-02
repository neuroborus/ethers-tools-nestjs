import { DynamicModule } from '@nestjs/common';
import { ContractFactory } from './contract.factory';

/**
 * Global module providing ContractFactory for working with ethers-tools contracts.
 */
export declare class ContractModule {
  static forRoot?(): DynamicModule;
}

export { ContractFactory };
