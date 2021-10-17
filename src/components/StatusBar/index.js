import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .prog-br {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prog-b {
    display: flex;
    align-items: center;
  }
  .prog-txt {
    margin-bottom: 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .prog-rial {
    height: 12px;
    width: 75px;
    background: #0c0c0b;
    border: 2px solid #ffd58c;
    position: relative;
    margin-left: 4px;
  }
  .innrt-rail {
    position: absolute;
    top: -0.05rem;
    left: 0;
    height: 0.85rem;
    background: linear-gradient(180deg, #f80505 0%, #ff7b36 100%);
    width: 50%;
  }
  .innrt-rail.rail2 {
    background: linear-gradient(180deg, #f8a505 0%, #ffd336 100%);
  }

  @media only screen and (max-width: 319px) {
    .prog-rial {
      width: 60px;
    }
    .prog-txt {
      font-size: 8px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .prog-rial {
      width: 65px;
    }
  }
`;

const StatusBar = ({ label }) => {
  return (
    <Container>
      <div className='prog-b'>
        <span className='prog-txt'>{label}</span>
        <div className='prog-rial'>
          <div id='barStatus1' className='innrt-rail'></div>
        </div>
      </div>
    </Container>
  );
};

export default StatusBar;
