import styled from 'styled-components';
import { Logo } from 'components/Logo/Logo';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding: 20px 0;
  height: 100vh;
  width: 100%;
  max-width: 110px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.underlineGrey};

  ${Logo} {
    margin-bottom: 47px;
  }
`;
