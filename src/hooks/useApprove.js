import { useCallback } from 'react';
import { approve } from '../utils/callHelpers';
import { useVaultChefContract } from './useContract';
import { useActiveWeb3React } from './useWeb3';

export const usePoolApprove = (poolContract) => {
  const { account } = useActiveWeb3React();
  const vaultChefContract = useVaultChefContract();

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(poolContract, vaultChefContract, account);
      return tx;
    } catch (e) {
      return false;
    }
  }, [account, poolContract, vaultChefContract]);

  return { onApprove: handleApprove };
};
