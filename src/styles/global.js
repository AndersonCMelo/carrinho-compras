import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFFFFF;
    color: #373A3C;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select, a {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 800;
  }

  strong {
    font-weight: 800;
  }

  button {
    cursor: pointer;
  }
`;
