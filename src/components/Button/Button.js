import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: #c0c7d6;
  border-radius: 50%;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

export default Button;