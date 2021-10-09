import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: ${({ theme }) => `-2px 4px 10px 0px ${theme.colors.shadowGrey}`};
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
