import { MUTLICALL_FACTORY_TOKEN_PREFIX } from '../../di-tokens.js';

/**
 * Generates a unique DI token for a multicall factory.
 *
 * @param {string | Function} identifier - Either a class constructor or a unique string
 * @returns {string} The generated DI token
 */
export function getMulticallFactoryToken(identifier) {
  const name = typeof identifier === 'function' ? identifier.name : identifier;
  return `${MUTLICALL_FACTORY_TOKEN_PREFIX}${name}`;
}
