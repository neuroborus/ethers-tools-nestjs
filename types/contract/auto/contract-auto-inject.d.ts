import { Interface, InterfaceAbi } from 'ethers';

/**
 * Property or parameter decorator that injects a dynamically created contract instance
 * associated with the given ABI. The instance must be registered using `createContractProvider()`.
 *
 * @param abi - The contract ABI to identify the injected contract
 * @returns A NestJS-compatible decorator
 *
 * @example
 * @Injectable()
 * class MyService {
 *   @InjectAutoContract(MyAbi)
 *   private readonly contract: DynamicContract;
 * }
 *
 * @example
 * constructor(@InjectAutoContract(MyAbi) private readonly contract: DynamicContract) {}
 */
export declare function InjectAutoContract(
  abi: Interface | InterfaceAbi
): PropertyDecorator & ParameterDecorator;
