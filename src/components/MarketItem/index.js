import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #404040;
    border: 2px solid #000;
    transition: all 0.3s ease-in-out;
    &:hover {
      border-color: #e6b670;
    }
  }

  .info img {
    padding: 15px;
  }

  .sell {
    font-family: 'Montserrat', sans-serif;
    background: #e6b670;
    padding: 10px 6px;
    font-style: normal;
    font-weight: 500;
    position: absolute;
    font-size: 11px;
    line-height: 13px;
    width: 70px;
    text-align: center;
    border-radius: 2px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .info {
      width: 33%;
    }
  }
  @media only screen and (max-width: 767px) {
    .column {
      margin-bottom: 20px;
    }

    .discription h6 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      margin: 0 0 5px 0;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.25px;
      text-transform: uppercase;
      color: #ffffff;
    }

    .discription p {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.25px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  @media only screen and (min-width: 768px) {
    .discription {
      display: none;
    }
  }
`;

const MarketItem = ({ selected }) => {
  return (
    <Container className='info'>
      <div className='column'>
        <img alt='avatar' src='https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png' />

        {selected && (
          <a href='#' className='sell'>
            Sell
          </a>
        )}
      </div>
      <div className='discription'>
        <h6>2 DGNG</h6>
        <p>Armour of Divergence</p>
      </div>
    </Container>
  );
};

export default MarketItem;
