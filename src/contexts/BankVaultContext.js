import React from 'react';

const initialState = { poolInfo: [], setPoolInfo: () => null };
const BankVaultContext = React.createContext(initialState);
export const useBankVaultContext = () => React.useContext(BankVaultContext);

export const BankVaultContextProvider = ({ children }) => {
  const [poolInfo, setPoolInfo] = React.useState([]);

  return <BankVaultContext.Provider value={{ poolInfo, setPoolInfo }}>{children}</BankVaultContext.Provider>;
};
