import { Inject } from '@nestjs/common';
import { getContractFactoryToken } from './get-contract-factory-token.js';

/**
 * Property or parameter decorator that injects a contract factory by class or identifier.
 *
 * @param {string | Function} identifier - A contract class or unique string identifier
 * @returns {import('@nestjs/common').ParameterDecorator & import('@nestjs/common').PropertyDecorator}
 */
export const InjectContractFactory = (identifier) =>
  Inject(getContractFactoryToken(identifier));
