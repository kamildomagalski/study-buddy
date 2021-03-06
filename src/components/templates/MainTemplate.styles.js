import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 110px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
