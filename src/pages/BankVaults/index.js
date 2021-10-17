import React from 'react';
import styled from 'styled-components';
import DragonInfo from '../../components/DragonInfo';
import Pannel from '../../components/Pannel';
import { useBankVaultContext } from '../../contexts/BankVaultContext';
import { useGetPoolInfo } from './hook';
import VaultItem from './VaultItem';

const Container = styled.div`
  .bank-vaults {
    padding: 235px 0 108px;
  }
  .bank-vaults .bank-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 67px;
  }
  .bank-vaults .bank-transactions {
    width: calc(100% - 429px);
  }
  .bank-banner {
    position: relative;
    margin-bottom: 30px;
  }
  .bank-transactions .banner-txt {
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.2;
    letter-spacing: 0.25px;
    color: #ffd58c;
  }
  .bank-transactions .colmn-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 13px;
  }
  .bank-transactions .colmn-list li {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 16px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #d3d3d3;
    list-style: none;
    width: 13.3%;
    padding-right: 15px;
  }
  .bank-transactions .colmn-list li:first-child {
    width: 13.5%;
  }
  .bank-transactions .colmn-list li:nth-child(2) {
    width: 13.5%;
  }
  .bank-transactions .colmn-list li:nth-child(3) {
    width: 13.6%;
  }
  .bank-transactions .colmn-list li:last-child {
    width: 19.5%;
  }
  .bank-transactions .vault-item {
    margin-bottom: 16px;
  }
  .bank-vaults .budget-list {
    padding: 0;
    margin: 0;
  }
  .bank-vaults .options-list li a,
  .bank-vaults .reward-wrp .qlp-txt,
  .bank-vaults .reward-wrp .reward-txt,
  .bank-vaults .budget-list li {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 22px;
    color: #ffffff;
    opacity: 0.8;
    list-style: none;
  }
  .bank-vaults .reward-wrp .reward-txt {
    font-weight: 500;
  }
  .bank-vaults .reward-wrp .qlp-txt {
    text-transform: uppercase;
    font-weight: 500;
  }

  .options-list li:hover {
    background: #343131;
  }
  .bank-vaults .options-list,
  .bank-vaults .reward-wrp {
    margin-bottom: 40px;
    list-style: none;
  }
  .bank-vaults .options-list li a {
    font-weight: 500;
    color: #85beeb;
  }
  .bank-vaults .options-list li a:hover {
    color: #85beeb;
  }
  .options-list li {
    margin: 2px -15px;
    padding: 5px 15px;
    width: calc(100% + 30px);
  }

  @media only screen and (min-width: 768px) {
    .bank-transactions .bank-banner img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    .bank-transactions .colmn-list {
      display: none;
    }
    .bank-banner {
      display: none;
    }
    .bank-vaults {
      padding: 89px 0 0;
    }
    .bank-vaults .bank-transactions {
      width: 100%;
    }
    .bank-vaults .bank-content {
      padding: 0;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .bank-transactions .colmn-list li {
      font-size: 1rem;
      width: 13.3%;
      padding-right: 6px;
    }
    .bank-vaults .bank-transactions {
      width: calc(100% - 355px);
    }
    .bank-vaults .bank-content {
      padding: 0;
    }
    .bank-vaults {
      padding: 158px 0 0;
    }
    .bank-transactions .banner-txt {
      font-size: 1.3rem;
    }
    .bank-vaults .options-list li a,
    .bank-vaults .reward-wrp .qlp-txt,
    .bank-vaults .reward-wrp .reward-txt,
    .bank-vaults .budget-list li {
      font-size: 1.3rem;
      line-height: 22px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1326px) {
    .bank-transactions .colmn-list li {
      font-size: 1.2rem;
      padding-right: 6px;
    }
    .bank-vaults .bank-transactions {
      width: calc(100% - 355px);
    }
    .bank-vaults .bank-content {
      padding: 0;
    }
    .bank-vaults {
      padding: 158px 0 0;
    }
    .bank-vaults .options-list li a,
    .bank-vaults .reward-wrp .qlp-txt,
    .bank-vaults .reward-wrp .reward-txt,
    .bank-vaults .budget-list li {
      line-height: 22px;
    }
  }
`;

const BankVaults = () => {
  useGetPoolInfo();

  const { poolInfo } = useBankVaultContext();
  return (
    <Container className='content'>
      <section className='bank-vaults'>
        <div className='container'>
          <div className='bank-content'>
            <div className='bank-transactions'>
              <div className='bank-banner'>
                <img src='assets/images/bank-banner.png' alt='image' />
                <span className='banner-txt'>Return to the Inn/Plains -&gt;</span>
              </div>
              <div className='vault-item-list'>
                <ul className='colmn-list'>
                  <li>Your Stake</li>
                  <li>APY</li>
                  <li>DAILY</li>
                  <li>TVL</li>
                </ul>

                <div className='transactions'>
                  {poolInfo &&
                    poolInfo.length > 0 &&
                    poolInfo.map((_pool) => (
                      <div className='vault-item' key={_pool.pid}>
                        <VaultItem pool={_pool} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <Pannel>
              <div className='budget-analysis'>
                <div className='reward-wrp'>
                  <strong className='reward-txt'>Rewards: </strong>
                  <ul className='budget-list'>
                    <li>Daily: $0.5</li>
                    <li>Weekly: $4.5</li>
                    <li>Annual: $234</li>
                  </ul>
                </div>
                <div className='reward-wrp'>
                  <strong className='qlp-txt'>DGNG/USDC QLP</strong>
                  <ul className='budget-list'>
                    <li>Initial Investment: $399</li>
                    <li>Realized: $100</li>
                    <li>Current Investment: $666</li>
                    <li>Profit: $367</li>
                  </ul>
                </div>
                <ul className='options-list'>
                  <li>
                    <a href='#'>[1] Withdraw All</a>
                  </li>
                  <li>
                    <a href='#'>[2] Redeem Rewards</a>
                  </li>
                  <li>
                    <a href='#'>[3] SAM: Should there be other options here?</a>
                  </li>
                </ul>
              </div>
              <DragonInfo />
            </Pannel>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BankVaults;
