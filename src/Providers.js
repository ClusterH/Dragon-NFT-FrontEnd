import React from 'react';
import { Provider } from 'react-redux';

import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './utils/web3React';
import { BankVaultContextProvider } from './contexts/BankVaultContext';
import { NetworkContextName } from './config/constants/misc';
import store from './state';
import Web3ReactManager from './components/Web3ReactManager';

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);
const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Web3ReactManager>
            <BankVaultContextProvider>{children}</BankVaultContextProvider>
          </Web3ReactManager>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </Provider>
  );
};

export default Providers;
