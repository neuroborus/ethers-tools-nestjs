import { Injectable } from '@nestjs/common';
import { MulticallUnit } from 'ethers-tools';

@Injectable()
export class MulticallUnitService extends MulticallUnit {
  /**
   * @param {import('ethers').Provider | import('ethers').Signer} driver
   * @param {import('../../types/entities').MulticallOptions} [options]
   * @param {string} [multicallAddress]
   */
  constructor(driver, options, multicallAddress) {
    super(driver, options, multicallAddress);
  }
}
