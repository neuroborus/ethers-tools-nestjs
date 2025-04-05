import { Inject } from '@nestjs/common';
import { getAutoContractFactoryToken } from './get-auto-contract-factory-token.js';

/**
 * Property or parameter decorator that injects an auto contract factory by identifier.
 *
 * @param {string | Function} identifier - A contract class or unique string identifier
 * @returns {import('@nestjs/common').ParameterDecorator & import('@nestjs/common').PropertyDecorator}
 */
export const InjectAutoContractFactory = (identifier) =>
  Inject(getAutoContractFactoryToken(identifier));
