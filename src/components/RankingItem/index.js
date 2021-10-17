import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .check-group .check-status {
    width: 50px;
    height: 50px;
    border: 4px solid #e6b670;
    background: transparent;
    transition: all 0.3s ease-in-out;
    margin-right: 16px;
  }
  .check-group label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .check-status img {
    padding: 2px;
  }
  .check-group .number {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    position: relative;
    color: #fff;
    width: 40px;
    margin-right: 16px;
    text-align: right;
  }
  .check-group .txt {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    width: calc(100% - 122px);
  }
  .check-group {
    max-width: 263px;
    margin: 0 auto;
    margin-bottom: 17px;
  }

  @media only screen and (max-width: 319px) {
    .check-group .txt {
      font-size: 12px;
    }
    .check-group .number {
      font-size: 25px;
    }
  }
`;

const RankingItem = ({ idx }) => {
  return (
    <Container className='check-group'>
      <label>
        <span className='number'>{idx}</span>
        <span className='check-status'>
          <img src='https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png' />
        </span>
        <span className='txt'>Name? Address?</span>
      </label>
    </Container>
  );
};

export default RankingItem;
