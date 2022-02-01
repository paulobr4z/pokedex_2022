import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    background: #151719;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
