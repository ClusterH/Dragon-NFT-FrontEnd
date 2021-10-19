import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useStake } from '../hook';
import { useGetPoolAnayltics } from '../hook';

const Container = styled.div`
  .text-panel {
    width: 100%;
    padding: 14px 16px 10px;
    background: #ffd58c;
    border-radius: 2px;
    text-align: left;
    cursor: pointer;
  }
  .text-panel .details {
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
  }
  .text-panel h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #0c0c0b;
    margin-bottom: 8px;
  }
  .text-panel .txt,
  .text-panel .panel-links a {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    line-height: 16px;
    letter-spacing: 0.25px;
    text-decoration-line: underline;
    color: #0c0c0b;
  }
  .text-panel .panel-links a.token {
    margin-right: 17px;
  }
  .text-panel .txt {
    font-weight: 500;
    text-decoration: none;
  }
  .text-panel .info {
    width: 40%;
    padding-right: 20px;
  }
  .text-panel .txt.stake {
    width: 14%;
    padding-right: 15px;
  }
  .text-panel .txt.apy {
    width: 14%;
    padding-right: 15px;
  }
  .text-panel .txt.daily {
    width: 14%;
    padding-right: 15px;
  }
  .text-panel .txt.tvl {
    width: 18%;
  }
  .expand-area {
    display: flex;
    justify-content: space-between;
  }
  .expand-area .token {
    display: flex;
    align-items: center;
    height: 35px;
    width: 100%;
    opacity: 0.5;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid #000000;
    border-radius: 2px;
    padding: 6px 6px 6px 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: #0c0c0b;
    margin-bottom: 13px;
  }
  .expand-area .tokencard {
    text-align: center;
    width: 320px;
    position: relative;
  }

  .expand-area .token::placeholder {
    color: #0c0c0b;
  }

  .tokencard .max-bnt-group {
    opacity: 0.5;
    position: absolute;
    left: 0;
    z-index: 1;
    background: transparent;
    border: none;
    color: #0c0c0b;
    padding: 10px 5px;
    top: 0;
  }
  .tokencard .max-bnt-group:hover {
    opacity: 1;
    background: #100d0d;
    color: #ffd58c;
  }

  @media only screen and (max-width: 767px) {
    .text-panel .panel-links a {
      font-size: 1.1rem;
    }
    .text-panel h4 {
      font-size: 1.3rem;
    }
    .text-panel .txt.stake {
      width: 12%;
      padding-right: 8px;
      text-align: right;
    }
    .text-panel .info {
      width: 44%;
      margin-bottom: 6px;
      padding-right: 8px;
    }
    .text-panel .txt.apy {
      width: 12%;
      padding-right: 8px;
      text-align: right;
    }
    .text-panel .txt.daily {
      width: 12%;
      padding-right: 8px;
      text-align: right;
    }
    .text-panel .txt.tvl {
      width: 20%;
      text-align: right;
    }
    .text-panel .panel-links a.token {
      margin-right: 8px;
    }
    .text-panel {
      padding: 5px;
    }
    .text-panel .details {
      margin-bottom: 0px;
    }
    .expand-area .tokencard {
      width: 100%;
      margin-bottom: 15px;
    }
    .expand-area {
      display: block;
    }
    .btn {
      font-size: 11px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 414px) {
    .panel-links {
      white-space: nowrap;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .panel-links {
      white-space: nowrap;
    }
    .expand-area .token {
      height: 30px;
      width: 98%;
      font-size: 1.2rem;
      line-height: 16px;
    }
    .text-panel .info {
      width: 39%;
      padding-right: 10px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1326px) {
    .panel-links {
      white-space: nowrap;
    }
    .expand-area .token {
      height: 30px;
      width: 98%;
    }
    .text-panel .info {
      width: 39%;
      padding-right: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    .initial-panel {
      display: none;
    }
  }

  @media only screen and (max-width: 767px) {
    .bank-banner {
      display: none;
    }
    .text-panel {
      width: 100%;
    }

    .initial-panel .text-panel {
      margin-bottom: 16px;
      width: 100%;
      padding: 5px;
      background: #ffd58c;
      border-radius: 2px;
    }
    .initial-panel .details {
      margin-bottom: 0px;
      display: flex;
      align-items: flex-end;
    }
    .initial-panel .info {
      width: 49%;
      margin-bottom: 6px;
    }

    .initial-panel .info-right {
      padding-right: 8px;
    }
    .initial-panel .text-panel h4 {
      font-size: 1.4rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      line-height: 17px;
      width: 100%;
      letter-spacing: 0.25px;
      color: #0c0c0b;
      margin-bottom: 8px;
    }

    .initial-panel .btn {
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.3;
      width: 100%;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 0.05rem;
      text-align: center;
      color: #ffd58c;
      background: #100d0d;
      border-radius: 2px;
      padding: 7px 10px;
      border: 1px solid #100d0d;
      margin-bottom: 8px;
    }

    .initial-panel .current-list {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: #100d0d;
      line-height: 22px;
    }
  }
  @media only screen and (max-width: 414px) {
    .initial-panel .info:first-child {
      width: 65%;
      margin-bottom: 6px;
    }
    .initial-panel .current-list {
      font-size: 12px;
    }
    .initial-panel .btn {
      font-size: 1rem;
      padding: 7px 2px;
    }
    .initial-panel .info:last-child {
      width: 35%;
      margin-bottom: 6px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .text-panel {
      width: 100%;
      padding: 8px;
    }
    .text-panel h4 {
      font-size: 1.3rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1326px) {
    .text-panel {
      width: 100%;
      padding: 8px;
    }
    .text-panel h4 {
      line-height: 1.2;
      margin-bottom: 8px;
    }
  }
`;

const VaultItem = ({ pool }) => {
  const [expanded, setExpanded] = useState(false);
  const [val, setVal] = useState('');
  const { onStake } = useStake(pool.pid);

  useGetPoolAnayltics(pool.pid);

  const handleChange = useCallback(
    (e) => {
      setVal(e.currentTarget.value);
    },
    [setVal]
  );

  const handleStake = useCallback(async () => {
    try {
      const res = await onStake(val);
    } catch (e) {
      console.info(e);
    }
  }, [onStake, val]);

  return (
    <Container>
      <div className='text-panel'>
        <div className='details' onClick={() => setExpanded(!expanded)}>
          <div className='info'>
            <h4>{pool.name}</h4>
            <div className='panel-links'>
              <a href='#!' className='token'>
                Get Token
              </a>
              <a href='#!' className='liquidity'>
                Add Liquidity
              </a>
            </div>
          </div>
          <div className='stake txt'>{`$${pool.stakedAmount}`}</div>
          <div className='apy txt'>1.2K%</div>
          <div className='daily txt'>5%</div>
          <div className='tvl txt'>$1,000,000</div>
        </div>
        <div className='initial-panel'>
          <div className='text-panel'>
            <h4>DGNG - Single</h4>
            <div className='details'>
              <div className='info info-right'>
                <div className='current-list'>
                  Initial Investment:
                  <span>$399</span>
                </div>
                <div className='current-list'>
                  Realized:
                  <span>$100</span>
                </div>
                <div className='current-list'>
                  Current Investment:
                  <span>$666</span>
                </div>
                <div className='current-list'>
                  Profit:
                  <span>$367</span>
                </div>
              </div>
              <div className='info'>
                <a href='#!' className='btn'>
                  Get Token
                </a>
                <a href='#!' className='btn'>
                  Add Liquidity
                </a>
              </div>
            </div>
          </div>
        </div>
        {expanded && (
          <div className='expand-area'>
            <div className='tokencard'>
              <button type='button' className='max-bnt-group'>
                Max:
              </button>
              <input type='text' name='' className='token' placeholder='23.40583 DCAU' onChange={handleChange} />
              <button className='btn' onClick={handleStake}>
                Approve &amp; Stake
              </button>
            </div>
            <div className='tokencard'>
              <button type='button' className='max-bnt-group'>
                Max:
              </button>
              <input type='text' name='' className='token' placeholder='23.40583 DGNGUSDCLP' />
              <button href='#!' className='btn'>
                Withdraw
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default VaultItem;
