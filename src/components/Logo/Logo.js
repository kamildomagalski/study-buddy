import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 80%;
  max-height: 60px;
  padding: 13px 15px;
  background-color: ${({ theme }) => theme.colors.shadowGrey};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weight.bold};
  text-align: right;
`;
