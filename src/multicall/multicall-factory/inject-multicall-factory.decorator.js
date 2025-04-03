import { Inject } from '@nestjs/common';
import { getMulticallFactoryToken } from './get-multicall-factory-token.js';

/**
 * Property or parameter decorator that injects a multicall unit.
 *
 * @param {string | Function} identifier - A multicall class or unique string identifier
 * @returns {import('@nestjs/common').ParameterDecorator & import('@nestjs/common').PropertyDecorator}
 */
export const InjectMulticallFactory = (identifier) =>
  Inject(getMulticallFactoryToken(identifier));
