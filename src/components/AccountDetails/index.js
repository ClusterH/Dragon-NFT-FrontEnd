import React from 'react';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
import styled from 'styled-components';
import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg';
import { ReactComponent as Close } from '../../assets/images/x.svg';
import { SUPPORTED_WALLETS } from '../../config/constants/wallet';
import { injected, walletconnect } from '../../connectors';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { formatAddress } from '../../utils/addressHelpers';
import { ExplorerDataType, getExplorerLink } from '../../utils/getExplorerLink';
import { MainButton } from '../Button/MainButton';
// import { ButtonSecondary } from '../Buttons/Button'
import Identicon from '../Icons/Identicon';
import { ExternalLink } from '../WalletModal/Option';

const HeaderRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 16px 16px;
  font-weight: 500;
  color: #ffffff;
  font-size: 16px;
`;
const UpperSection = styled.div`
  position: relative;
  font-size: 16px;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`;
const InfoCard = styled.div`
  padding: 1rem;
  border: 1px solid #ffd58c47;
  border-radius: 4px;
  position: relative;
  display: grid;
  grid-row-gap: 12px;
  margin-bottom: 20px;
`;
const AccountGroupingRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;

  div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-size: 16px;
  }
`;
const AccountSection = styled.div`
  padding: 0rem 1rem;
`;
const YourAccount = styled.div`
  h5 {
    margin: 0 0 1rem 0;
    font-weight: 400;
  }

  h4 {
    margin: 0;
    font-weight: 500;
  }
`;
const LowerSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1.5rem;
  flex-grow: 1;
  overflow: auto;
  background-color: #2c2f36;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  h5 {
    margin: 0;
    font-weight: 400;
    color: #8f96ac;
  }
`;
const AccountControl = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 0;
  width: 100%;

  font-weight: 500;
  font-size: 1.25rem;

  a:hover {
    text-decoration: underline;
  }

  p {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const AddressLink = styled(ExternalLink)`
  font-size: 0.825rem;
  color: #8f96ac;
  margin-left: 1rem;
  font-size: 0.825rem;
  display: flex;
  :hover {
    color: #c3c5cb;
  }
`;
const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
const CloseColor = styled(Close)`
  path {
    stroke: #b2b9d2;
  }
`;
const WalletName = styled.div`
  width: initial;
  font-size: 0.825rem;
  font-weight: 500;
  color: #8f96ac;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${(props) => (props.iconSize ? props.iconSize + 'px' : '32px')};
    width: ${(props) => (props.iconSize ? props.iconSize + 'px' : '32px')};
  }
`;
const TransactionListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const WalletAction = styled.button`
  width: fit-content;
  font-weight: 400;
  margin-left: 8px;
  font-size: 0.825rem;
  padding: 4px 6px;
  outline: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const MainWalletAction = styled(WalletAction)`
  color: #ffffff;
`;

export default function AccountDetails({ toggleWalletModal, ENSName, openOptions }) {
  const { chainId, account, connector } = useActiveWeb3React();

  function formatConnectorName() {
    const { ethereum } = window;
    const isMetaMask = !!(ethereum && ethereum.isMetaMask);
    const name = Object.keys(SUPPORTED_WALLETS)
      .filter((k) => SUPPORTED_WALLETS[k].connector === connector && (connector !== injected || isMetaMask === (k === 'METAMASK')))
      .map((k) => SUPPORTED_WALLETS[k].name)[0];
    return <WalletName>Connected with {name}</WalletName>;
  }

  function getStatusIcon() {
    if (connector === injected) {
      return (
        <IconWrapper iconSize={16}>
          <Identicon />
        </IconWrapper>
      );
    } else if (connector === walletconnect) {
      return (
        <IconWrapper size={16}>
          <img src={WalletConnectIcon} alt={'wallet connect logo'} />
        </IconWrapper>
      );
    }
    return null;
  }

  return (
    <>
      <UpperSection>
        <CloseIcon onClick={toggleWalletModal}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>Account</HeaderRow>
        <AccountSection>
          <YourAccount>
            <InfoCard>
              <AccountGroupingRow>
                {formatConnectorName()}
                <div>
                  {connector !== injected && (
                    <WalletAction
                      style={{ fontSize: '.825rem', fontWeight: 400, marginRight: '8px' }}
                      onClick={() => {
                        connector.close();
                      }}
                    >
                      Disconnect
                    </WalletAction>
                  )}
                  <MainButton
                    backgroundColor={'transparent'}
                    borderRadius={'12px'}
                    color={'#ffd58c'}
                    onClick={() => {
                      openOptions();
                    }}
                  >
                    Change
                  </MainButton>
                </div>
              </AccountGroupingRow>
              <AccountGroupingRow id='web3-account-identifier-row'>
                <AccountControl>
                  {ENSName ? (
                    <>
                      <div>
                        {getStatusIcon()}
                        <p> {ENSName}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        {getStatusIcon()}
                        <p> {account && formatAddress(account)}</p>
                      </div>
                    </>
                  )}
                </AccountControl>
              </AccountGroupingRow>
              <AccountGroupingRow>
                {ENSName ? (
                  <>
                    <AccountControl>
                      <div>
                        {chainId && account && (
                          <AddressLink hasENS={!!ENSName} isENS={true} href={getExplorerLink(chainId, ENSName, ExplorerDataType.ADDRESS)}>
                            <LinkIcon size={16} />
                            <span style={{ marginLeft: '4px', fontSize: '16px' }}>View on Etherscan</span>
                          </AddressLink>
                        )}
                      </div>
                    </AccountControl>
                  </>
                ) : (
                  <>
                    <AccountControl>
                      <div>
                        {/* {account && (
                          <Copy toCopy={account}>
                            <span style={{ marginLeft: '4px' }}>Copy Address</span>
                          </Copy>
                        )} */}
                        {chainId && account && (
                          <AddressLink hasENS={!!ENSName} isENS={false} href={getExplorerLink(chainId, account, ExplorerDataType.ADDRESS)}>
                            <LinkIcon size={16} />
                            <span style={{ marginLeft: '4px', fontSize: '16px', color: '#ffffff' }}>View on Etherscan</span>
                          </AddressLink>
                        )}
                      </div>
                    </AccountControl>
                  </>
                )}
              </AccountGroupingRow>
            </InfoCard>
          </YourAccount>
        </AccountSection>
      </UpperSection>
    </>
  );
}
