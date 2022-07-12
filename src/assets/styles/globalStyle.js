import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }
    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;

export const GlobalWrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: ${({ theme }) => `-2px 4px 10px 0px ${theme.colors.shadowGrey}`};
`;

export const GlobalStyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.shadowGrey};
`;
