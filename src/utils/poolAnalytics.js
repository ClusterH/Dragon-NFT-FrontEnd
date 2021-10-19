export const getAPY = (poolDCAUPerSecond, stakedTokenBalance) => {
  console.info(poolDCAUPerSecond, stakedTokenBalance);
  const date = new Date();
  const yearToSec = new Date(date.getFullYear(), 0, 0) / 1000;
  console.info(yearToSec);
};
