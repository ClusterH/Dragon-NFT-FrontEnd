import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';

export const getTokenBalance = async (tokenContract, account) => {
  const balance = await tokenContract.balanceOf(account);
  return balance;
};

export const getAllowance = async (tokenContract, operatorContract, account) => {
  try {
    const allowance = await tokenContract.allowance(account, operatorContract.address);
    return allowance;
  } catch (e) {
    return '0';
  }
};

export const approve = async (tokenContract, contract, account) => {
  const allowance = await getAllowance(tokenContract, contract, account);
  if (allowance === 0) {
    const tx = await tokenContract.approve(contract.address, ethers.constants.MaxUint256);
    const receipt = tx.wait();
    return receipt.status;
  } else {
    return true;
  }
};

export const stake = async (vaultChefContract, pid, amount, account) => {
  const decimals = 18; //change as dynamic if lpToken has difference decimals
  const txHash = await vaultChefContract.deposit(pid, new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString());
  const receipt = txHash.wait();
  return receipt.status;
};

export const callStakedWantTokens = async (vaultChefContract, poolId, account) => {
  const receipt = await vaultChefContract.stakedWantTokens(poolId, account);

  return receipt;
};

export const callPoolInfo = async (masterChefContract, poolId) => {
  const receipt = await masterChefContract.poolInfo(poolId);

  return receipt;
};

export const callTotalAllocPoint = async (masterChefContract) => {
  console.log(masterChefContract);

  const receipt = await masterChefContract.totalAllocPoint();

  return receipt;
};

export const callDCAUPerSecond = async (masterChefContract) => {
  const receipt = await masterChefContract.dcauPerBlock(); //change dcauPerBlock to dcauPerSecond

  return receipt;
};
