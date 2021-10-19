import { AddressZero } from '@ethersproject/constants';
import { Contract } from '@ethersproject/contracts';
import { ethers } from 'ethers';
import { Contract as MultiContract } from 'ethers-multicall';
import { isAddress } from '../utils/addressHelpers';

const POLLING_INTERVAL = 12000;

export const validateAddress = (address) => {
  const addr = isAddress(address);
  if (!addr || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return addr;
};

export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export function getContract(address, abi, library, account) {
  const validAddress = validateAddress(address);
  // return new ethers.Contract(validAddress, abi, getProviderOrSigner(library, account));

  return new Contract(validAddress, abi, getProviderOrSigner(library, account));
}

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const getMultiCallContract = (address, abi, library, account) => {
  const validAddress = validateAddress(address);

  return new MultiContract(validAddress, abi);
};
