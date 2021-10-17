import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';

export const approve = async (tokenContract, contract, account) => {
  return tokenContract.methods.approve(contract.options.address, ethers.constants.MaxUint256).send({ from: account });
};

export const stake = async (vaultChefContract, pid, amount, account) => {
  const decimals = 18; //change as dynamic if lpToken has difference decimals
  return vaultChefContract.methods
    .deposit(pid, new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash;
    });
};

export const callStakedWantTokens = async (vaultChefContract, poolId, account) => {
  const txHash = await vaultChefContract.stakedWantTokens(poolId, account);

  return txHash;
};
