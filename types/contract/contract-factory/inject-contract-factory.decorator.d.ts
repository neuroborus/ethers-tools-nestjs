/**
 * Decorator that injects a contract factory registered under a specific identifier.
 *
 * @param identifier - A contract class constructor or unique string
 * @returns A NestJS-compatible injection decorator
 */
export declare function InjectContractFactory(
  identifier: string | Function
): ParameterDecorator & PropertyDecorator;
