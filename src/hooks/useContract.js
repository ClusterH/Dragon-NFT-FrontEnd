import { useMemo } from 'react';
import VAULT_CHEF_ABI from '../config/abi/VaultChef.json';
import MASTER_CHEF_ABI from '../config/abi/MasterChef.json';
import ERC20_ABI from '../config/abi/erc20.json';
import { VAULT_CHEF_ADDRESSES, MASTER_CHEF_ADDRESSES } from '../config/pools';
import { getContract } from '../utils/web3React';
import { getPoolAddress } from '../utils/addressHelpers';
import { useActiveWeb3React } from './useWeb3';
import { ENS_REGISTRAR_ADDRESSES } from '../config/constants/addresses';
import ENS_ABI from '../config/abi/ens-registrar.json';
import ENS_PUBLIC_RESOLVER_ABI from '../config/abi/ens-public-resolver.json';

// returns null on errors
export function useContract(addressOrAddressMap, ABI, withSignerIfPossible = true) {
  const { library, account, chainId } = useActiveWeb3React();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
    let address;
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]);
}

export const useVaultChefContract = () => {
  return useContract(VAULT_CHEF_ADDRESSES, VAULT_CHEF_ABI);
};

export const useMasterChefContract = () => {
  return useContract(MASTER_CHEF_ADDRESSES, MASTER_CHEF_ABI);
};

export const usePoolContract = (pid) => {
  const { chainId } = useActiveWeb3React();

  return useContract(getPoolAddress(chainId, pid), ERC20_ABI);
};

export function useENSRegistrarContract(withSignerIfPossible) {
  return useContract(ENS_REGISTRAR_ADDRESSES, ENS_ABI, withSignerIfPossible);
}

export function useENSResolverContract(address, withSignerIfPossible) {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible);
}
