import styled from 'styled-components';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.shadowGrey};
`;
