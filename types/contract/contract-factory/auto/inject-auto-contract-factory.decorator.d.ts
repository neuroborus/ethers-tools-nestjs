/**
 * Decorator that injects an auto contract factory registered under a specific identifier.
 *
 * @param identifier - A contract class constructor or unique string
 * @returns A NestJS-compatible injection decorator
 */
export declare function InjectAutoContractFactory(
  identifier: string | Function
): ParameterDecorator & PropertyDecorator;
