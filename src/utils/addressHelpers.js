import { ethers } from 'ethers';
import { getAddress } from '@ethersproject/address';

import { CONTRACT_ADDRESSES, POOLS } from '../config/pools';
import { CHAINS } from '../config/constants/chains';

export const ADDRESS_ZERO = ethers.constants.AddressZero;

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value) {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export function formatAddress(value) {
  const address = isAddress(value);
  if (address === false) {
    return null;
  }
  const prefix = address.substring(0, 6); // 0x1234
  const suffix = address.substring(38, 42); // ...abcd
  return `${prefix}...${suffix}`;
}

export const getENSName = (chainId) => {
  return CHAINS[chainId];
};

export const getVaultChefAddress = (chainId) => {
  return CONTRACT_ADDRESSES[getENSName(chainId)].vaultChef;
};

export const getMasterChefAddress = (chainId) => {
  return CONTRACT_ADDRESSES[getENSName(chainId)].masterChef;
};

export const getPoolAddress = (chainId, poolId) => {
  return POOLS[getENSName(chainId)][poolId].address;
};
