import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .btn1 {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 14px 20px;
    text-transform: uppercase;
    background: #000;
    border: 0;
    line-height: 17px;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
  .btn1:hover {
    background: #e6b670;
    color: #000;
  }
  .btn1.active {
    background: #e6b670;
    color: #000;
  }
  .btn-group {
    border-radius: 97px;
    overflow: hidden;
  }
  .btn-group > label {
    border-radius: 0 5px 5px 0;
    display: table-cell;
    padding: 0;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1326px) {
    .btn1 {
      font-family: 'Montserrat', sans-serif;
      display: flex;
      align-items: center;
      text-align: center;
      padding: 14px 12px;
    }
  }
  @media only screen and (max-width: 767px) {
    .btn1 {
      padding: 12px 14px;
      line-height: 17px;
      font-weight: 500;
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 1022px) {
    .btn1 {
      font-size: 12px;
      padding: 10px 8px;
    }
  }

  @media only screen and (max-width: 414px) {
    .btn1 {
      padding: 10px 5px;
    }
  }
`;

const btnData = [
  { idx: 0, label: 'All' },
  { idx: 1, label: 'Armour' },
  { idx: 2, label: 'Misc' },
  { idx: 3, label: 'Characters' }
];

const ButtonGroup = () => {
  return (
    <Container>
      <div className='btn-group' role='group' aria-label='Basic example'>
        {btnData.map((btn) => (
          <label key={btn.idx}>
            <button type='button' className={btn.idx === 1 ? 'btn1 active' : 'btn1'}>
              {btn.label}
            </button>
          </label>
        ))}
      </div>
    </Container>
  );
};

export default ButtonGroup;
