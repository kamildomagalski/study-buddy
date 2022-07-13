import styled from 'styled-components';
import { Logo } from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  height: 100vh;
  width: 100%;
  max-width: 110px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.underlineGrey};

  ${Logo} {
    margin: 20px 0 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-bottom: 13px;
  font-family: Roboto, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.shadowGrey};
  text-align: right;
  text-decoration: none;
  margin: 15px 20px 15px 0;
  position: relative;

  &.active {
    ::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.underlineGrey};
  }
`;
