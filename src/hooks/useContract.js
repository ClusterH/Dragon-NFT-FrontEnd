import { useMemo } from 'react';
import { VAULT_ABI } from '../config/abi/VaultChef';
import { CHAINS } from '../config/constants/chains';
import { CONTRACT_ADDRESSES } from '../config/pools';
import { getContract } from '../utils/web3React';
import { useActiveWeb3React } from './useWeb3';
import { ENS_REGISTRAR_ADDRESSES } from '../config/constants/addresses';
import ENS_ABI from '../config/abi/ens-registrar.json';
import ENS_PUBLIC_RESOLVER_ABI from '../config/abi/ens-public-resolver.json';

export const useVaultChefContract = () => {
  const { account, library, chainId } = useActiveWeb3React();
  return getContract(CONTRACT_ADDRESSES[CHAINS[chainId]].vaultChef, VAULT_ABI, library, account);
};

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

export function useENSRegistrarContract(withSignerIfPossible) {
  return useContract(ENS_REGISTRAR_ADDRESSES, ENS_ABI, withSignerIfPossible);
}

export function useENSResolverContract(address, withSignerIfPossible) {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible);
}
