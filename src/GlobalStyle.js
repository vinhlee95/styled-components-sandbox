import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: Menlo, sans-serif;
    font-size: 16px;
    margin: 0;
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.color};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
