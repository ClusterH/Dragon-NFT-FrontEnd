import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import React from 'react';
import { FiActivity } from 'react-icons/fi';
import styled from 'styled-components';
import { NetworkContextName } from '../../config/constants/misc';
import useENSName from '../../hooks/useENSName';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { useWalletModalToggle } from '../../state/application/hook';
import { formatAddress } from '../../utils/addressHelpers';
import WalletModal from '../WalletModal';

const Web3StatusGeneric = styled.div`
  display: inline-block;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0b;
  padding: 0.5rem 1rem;
  border: solid;
  border-color: #ffd58c;
  border-width: 1px;
  border-radius: 0px;
  text-decoration: none;
  transition: 0.3s;
  color: #ffffff;
  :hover {
    color: #ffffff;
    border-color: transparent;
    background: #000000;
  }
`;
const Web3StatusError = styled(Web3StatusGeneric)`
  background-color: #fd4040;
  border: 1px solid #fd4040;
  color: #ffffff;
  font-weight: 500;
  :hover,
  :focus {
    background-color: #fd4040;
  }
`;
const Web3StatusConnect = styled(Web3StatusGeneric)``;
const Web3StatusConnected = styled(Web3StatusGeneric)`
  background-color: ${(props) => (props.pending ? '#0093fc' : '#000000')};
  color: #ffffff;
  font-weight: 500;
`;
const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.8rem;
  font-weight: 700;
  width: fit-content;
  font-weight: 600;
  letter-spacing: 0.25px;
  line-height: 1.3;
  font-family: 'Cinzel', serif;
  color: #fff;
`;
const NetworkIcon = styled(FiActivity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;

const Web3StatusInner = () => {
  const { account, error } = useWeb3React();
  const { ENSName } = useENSName(account ?? undefined);
  const toggleWalletModal = useWalletModalToggle();

  if (account) {
    return (
      <Web3StatusConnected id='web3-status-connected' onClick={toggleWalletModal}>
        <Text>{ENSName || formatAddress(account)}</Text>
      </Web3StatusConnected>
    );
  } else if (error) {
    return (
      <Web3StatusError onClick={toggleWalletModal}>
        <NetworkIcon />
        <Text>{error ? 'Wrong Network' : 'Error'}</Text>
      </Web3StatusError>
    );
  } else {
    return (
      <Web3StatusConnect id='connect-wallet' onClick={toggleWalletModal}>
        <Text>{'Connect Wallet'}</Text>
      </Web3StatusConnect>
    );
  }
};

const Web3Status = () => {
  const { active, account } = useActiveWeb3React();
  const contextNetwork = useWeb3React(NetworkContextName);
  const { ENSName } = useENSName(account ?? undefined);
  if (!contextNetwork.active && !active) {
    return null;
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal ENSName={ENSName ?? undefined} />
    </>
  );
};

export default Web3Status;
