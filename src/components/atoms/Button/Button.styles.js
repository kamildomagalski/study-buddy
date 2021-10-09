import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
