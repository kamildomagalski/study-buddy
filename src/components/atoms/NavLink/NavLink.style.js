import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 21px;
  margin-bottom: 13px;
  color: ${({ theme }) => theme.colors.shadowGrey};

  a {
    display: flex;
    font-family: Roboto, sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.colors.shadowGrey};
    text-decoration: none;
    margin-right: 25px;
  }

  .active {
    margin-right: 0;
    ::after {
      display: flex;
      height: 9px;
      content: '';
      margin-left: 3px;
      width: 22px;
      border-bottom: 3px solid ${({ theme }) => theme.colors.underlineGrey};
    }
  }
`;
