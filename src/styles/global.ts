import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  html {
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Inter', serif;
    font-size: 16px;
    background: #00171F;
    color: white;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }
`;
