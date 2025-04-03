import { Inject } from '@nestjs/common';
import { getAbiDIToken } from './get-abi-di-token.js';

/**
 * @public
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
 * @returns {import('@nestjs/common').PropertyDecorator & import('@nestjs/common').ParameterDecorator}
 */
export function InjectContract(abi) {
  return Inject(getAbiDIToken(abi));
}
