import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px sans-serif;
  }
  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4 {
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    color: #555555;

  }

  p {
    font-weight: 400;
    font-family: 'PT Sans', sans-serif;
    color: #555555;
  }


`;
