import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: Menlo, sans-serif;
    font-size: 16px;
  }

  p {
    color: red;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

`;
