/**
 * Generates a unique DI token for a multicall unit.
 *
 * @param identifier - Either a string or a class constructor
 * @returns The generated DI token as a string
 */
export declare function getMulticallFactoryToken(
  identifier: string | Function
): string;
