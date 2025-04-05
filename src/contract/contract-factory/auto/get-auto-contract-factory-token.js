import { AUTO_CONTRACT_FACTORY_TOKEN_PREFIX } from '../../../di-tokens.js';

/**
 * Generates a unique DI token for a given contract class or identifier.
 *
 * @param {string | Function} identifier - Either a class constructor or a unique string
 * @returns {string} The generated DI token
 */
export function getAutoContractFactoryToken(identifier) {
  const name = typeof identifier === 'function' ? identifier.name : identifier;
  return `${AUTO_CONTRACT_FACTORY_TOKEN_PREFIX}${name}`;
}
