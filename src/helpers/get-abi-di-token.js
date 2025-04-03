/**
 * @public
 * @param {import('ethers').Interface | import('ethers').InterfaceAbi} abi
 * @returns {string}
 */
export const getAbiDIToken = (abi) => {
  return `Contract_${JSON.stringify(abi)}`;
};
