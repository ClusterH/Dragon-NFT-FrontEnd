import { AddressZero } from '@ethersproject/constants';
import { Contract } from '@ethersproject/contracts';
import { ethers } from 'ethers';
import { Contract as MultiContract } from 'ethers-multicall';
import { isAddress } from '../utils/addressHelpers';

const POLLING_INTERVAL = 12000;
// const injected = new InjectedConnector({ supportedChainIds: [4] }); // hard coded at the moment - rinkeby network

// export const connectorLocalStorageKey = 'connectorIdDCAU';

// // @todo check this
// const walletconnect = new WalletConnectConnector({
//   rpc: { 4: 'https://bsc-dataseed.binance.org/' },
//   bridge: 'https://pancakeswap.bridge.walletconnect.org/',
//   qrcode: true,
//   pollingInterval: 12000
// });

// export const connectorsByName = {
//   [ConnectorNames.Injected]: injected,
//   [ConnectorNames.WalletConnect]: walletconnect
// };

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
