/**
 * Generates a unique DI token string for a given contract class or string identifier.
 *
 * @param identifier - A contract class constructor or unique string
 * @returns The generated token string
 */
export declare function getAutoContractFactoryToken(
  identifier: string | Function
): string;
