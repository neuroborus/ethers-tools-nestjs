/**
 * Property or parameter decorator that injects a multicall unit.
 *
 * @param identifier - A multicall class or unique string identifier
 * @returns A combined NestJS parameter and property decorator
 */
export declare const InjectMulticallFactory: (
  identifier: string | Function
) => ParameterDecorator & PropertyDecorator;
