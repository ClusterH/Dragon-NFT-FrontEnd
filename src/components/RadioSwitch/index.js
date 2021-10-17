import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .mp-inventory {
    position: relative;
  }
  .mp-inventory input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  .mp-inventory input:checked + label .switcher {
    background: #99794b;
    transition: all 0.3s ease-in-out;
  }
  .mp-inventory input:checked + label .switcher:after {
    left: 27px;
    background: #e6b670;
  }
  .mp-inventory .switcher {
    width: 50px;
    height: 24px;
    background: #100d0d;
    border-radius: 30.5454px;
    position: relative;
    vertical-align: middle;
    margin-left: 5px;
  }
  .mp-inventory .switcher:after {
    position: absolute;
    content: '';
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #e6b670;
    transition: all 0.3s ease-in-out;
  }
  .mp-inventory label {
    font-family: 'Montserrat', sans-serif;
    left: 8%;
    cursor: pointer;
    padding: 10px 0 0;
    position: relative;
    text-transform: uppercase;
    font-size: 13px;
    color: #fff;
    position: relative;
  }

  @media only screen and (max-width: 1022px) {
    .mp-inventory {
      position: absolute;
      width: 100%;
      left: -20px;
      top: -41px;
    }
  }
  @media only screen and (max-width: 767px) {
    .mp-inventory {
      left: -34px;
    }
  }
`;

const RadioSwitch = ({ label }) => {
  return (
    <Container>
      <div className='mp-inventory'>
        <input type='checkbox' id='switchTo' />
        <label htmlFor='switchTo'>
          {label}
          <span className='switcher'></span>
        </label>
      </div>
    </Container>
  );
};

export default RadioSwitch;
