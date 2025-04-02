import { Inject } from '@nestjs/common';
import { getAbiDIToken } from '../../helpers/index.js';

/**
 * Property or parameter decorator that injects a dynamically created contract instance
 * associated with the given ABI. The instance is created via the ContractFactory
 * and must be registered using `createContractProvider()` with the same ABI.
 *
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi - The contract ABI to identify the injected contract
 * @returns {import('@nestjs/common').PropertyDecorator & import('@nestjs/common').ParameterDecorator} - A NestJS-compatible decorator
 *
 * @example
 * // Usage in a class
 * @Injectable()
 * class MyService {
 *   @InjectAutoContract(MyAbi)
 *   private readonly contract: DynamicContract;
 * }
 *
 * @example
 * // Usage in constructor
 * constructor(@InjectAutoContract(MyAbi) private readonly contract: DynamicContract) {}
 */
export function InjectAutoContract(abi) {
  const token = getAbiDIToken(abi);
  return (target, key, index) => {
    const inject = Inject(token);
    return inject(target, key, index);
  };
}
