import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { CHAINS } from '../config/constants/chains';
import { getLibrary } from '../utils/web3React';
import { NetworkConnector } from './NetworkConnector';

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
const WALLETCONNECT_BRIDGE_URL = 'https://uniswap.bridge.walletconnect.org';

// if (typeof INFURA_KEY === 'undefined') {
//   throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
// }

export const NETWORK_URLS = {
  [1]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [4]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`
};

const SUPPORTED_CHAIN_IDS = Object.keys(CHAINS).map((key) => Number(key));

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 1
});

let networkLibrary;
export function getNetworkLibrary() {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS
});

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
  pollingInterval: 15000
});
