import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 33px 0 24px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.underlineGrey};
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-left: 24px;
  p {
    margin: 0 0 1px 0;
    color: ${({ theme }) => theme.colors.shadowGrey};
  }
  p:first-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
