import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { CHAINS } from '../../config/constants/chains';
import { POOLS } from '../../config/pools';
import { useBankVaultContext } from '../../contexts/BankVaultContext';
import { useMasterChefContract, usePoolContract, useVaultChefContract } from '../../hooks/useContract';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { getBalanceNumber } from '../../utils/bigNumberConverter';
import { approve, callPoolInfo, callStakedWantTokens, callTotalAllocPoint, callDCAUPerSecond, stake } from '../../utils/callHelpers';
import { getAPY } from '../../utils/poolAnalytics';

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
      stakedAmount: (response[index] / 10 ** 18).toFixed(5)
    }));
  }, [pools, account, contract, error]);

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
  const poolContract = usePoolContract(pid);

  const handleStake = useCallback(
    async (amount) => {
      // const allowanceAmount = await getAllowance(poolContract, vaultChefContract, account);
      const status = await approve(poolContract, vaultChefContract, account);

      if (status) {
        const res = await stake(vaultChefContract, pid, amount, account);
        console.info(res);
        return res;
      }
    },
    [poolContract, vaultChefContract, account, pid]
  );

  return { onStake: handleStake };
};

export const useGetPoolAnayltics = async (pid) => {
  const { account } = useActiveWeb3React();
  const masterChefContract = useMasterChefContract();
  const vaultChefContract = useVaultChefContract();

  const res = useMemo(async () => {
    const stakedTokenBalance = await callStakedWantTokens(vaultChefContract, pid, account);
    const poolInfo = await callPoolInfo(masterChefContract, pid);
    const totalAllocPoint = await callTotalAllocPoint(masterChefContract);
    const dcauPerSecond = await callDCAUPerSecond(masterChefContract);
    const poolWeight = getBalanceNumber(poolInfo.allocPoint) / getBalanceNumber(totalAllocPoint);
    const poolDCAUPerSecond = dcauPerSecond * poolWeight;
    getAPY(poolDCAUPerSecond, stakedTokenBalance);
  }, [account, pid, masterChefContract, vaultChefContract]);
  return res;
};
