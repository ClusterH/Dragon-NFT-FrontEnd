import React from 'react';
import styled from 'styled-components';

export const MainButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    background: #000000;
    color: #ffffff;
  }

  &:disabled {
    color: #fefefe;
    cursor: default;
  }

  color: ${(props) => (props.color ? props.color : '#ffffff')};
  padding: ${(props) => (props.padding ? props.padding : '8px 16px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: fit-content;
  height: 32px;
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : '#0c0c0b')};
  border-radius: 8px;
`;

export const TransparentBtn = styled(MainButton)`
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  &:hover {
    background: transparent;
    color: #ffffff !important;
  }
  &:disabled {
    border: 2px solid #fefefe;
  }
`;
