import { Interface, InterfaceAbi } from 'ethers';

/**
 * Returns a unique string token for the given ABI.
 * This token is used as an identifier for NestJS dependency injection.
 *
 * @public
 * @param abi - Contract ABI (Interface or InterfaceAbi)
 * @returns A unique DI token string for the contract
 */
export declare function getAbiDIToken(abi: Interface | InterfaceAbi): string;
