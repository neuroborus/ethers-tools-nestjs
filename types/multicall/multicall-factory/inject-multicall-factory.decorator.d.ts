/**
 * Decorator that injects a multicall factory registered under a specific identifier.
 *
 * @param identifier - A contract class constructor or unique string
 * @returns A NestJS-compatible injection decorator
 */
export declare function InjectMulticallFactory(
  identifier: string | Function
): ParameterDecorator & PropertyDecorator;
