import React from 'react';
import styled from 'styled-components';
import StatusBar from '../StatusBar';

const Container = styled.div`
  .final-progress {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .final-progress .prog-coln {
    width: calc(100% - 59px);
  }
  .final-progress .prog-value {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 18px;
  }
  .final-progress .prog-value span {
    font-family: 'Cinzel', serif;
    padding-left: 9px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.25px;
    color: #ffd58c;
  }
  .final-progress .placeholder {
    width: 47px;
    height: 47px;
    background: #3e3e3e;
    border: 1px solid #e6b670;
    cursor: pointer;
  }
  .final-progress .prog-br {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 319px) {
    .final-progress {
      display: flex;
    }

    .final-progress .prog-value span {
      font-size: 12px;
    }
    .final-progress .prog-value {
      font-size: 8px;
    }
  }
`;

const DragonInfo = () => {
  return (
    <Container>
      <div className='final-progress'>
        <div className='placeholder'>
          <img alt='avatar' src='https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png' />
        </div>
        <div className='prog-coln'>
          <p className='prog-value'>
            Turns : <span id='countValue'>5/10</span>
          </p>
          <div className='prog-br'>
            <StatusBar label='Health' />
            <StatusBar label='Exp' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DragonInfo;
