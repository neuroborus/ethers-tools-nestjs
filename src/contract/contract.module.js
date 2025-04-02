import { Module } from '@nestjs/common';
import { ContractFactory } from './contract.factory.js';

@Module({
  providers: [ContractFactory],
  exports: [ContractFactory],
})
export class ContractModule {}
