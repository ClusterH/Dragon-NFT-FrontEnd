import { useMemo, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { CHAINS } from '../../config/constants/chains';
import { POOLS } from '../../config/pools';
import { useBankVaultContext } from '../../contexts/BankVaultContext';
import { useVaultChefContract } from '../../hooks/useContract';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { callStakedWantTokens, stake } from '../../utils/callHelpers';

export const useGetVaultStakedWant = (pools) => {
  const { account, error } = useActiveWeb3React();
  const contract = useVaultChefContract();

  const stakedAmounts = useMemo(async () => {
    if (!account) {
      toast.error(`${error ? 'Wrong Network' : 'Connect to wallet first'}`, {
        position: 'top-center',
        autoClose: 10000,
        closeOnClick: true,
        pauseOnHover: true
      });

      return undefined;
    }

    const _calls = pools.map((_p) => {
      return callStakedWantTokens(contract, _p.pid, account);
    });

    const response = await Promise.all(_calls).then((value) => {
      return value;
    });

    return pools.map((p, index) => ({
      ...p,
      stakedAmount: response[index].toString()
    }));
  }, [pools]);

  return stakedAmounts;
};

export const useGetPoolInfo = () => {
  const [pools, setPools] = useState([]);
  const { account, chainId } = useActiveWeb3React();
  const { setPoolInfo } = useBankVaultContext();

  useMemo(() => {
    if (account && chainId) setPools(POOLS[CHAINS[chainId]]);
    else setPools([]);
  }, [account, chainId]);

  useGetVaultStakedWant(pools).then((poolInfo) => setPoolInfo(poolInfo));
};

export const useStake = (pid) => {
  const { account } = useActiveWeb3React();
  const vaultChefContract = useVaultChefContract();

  const handleStake = useCallback(
    async (amount) => {
      const txHash = await stake(vaultChefContract, pid, amount, account);
    },
    [account, vaultChefContract, pid]
  );

  return { onStake: handleStake };
};
