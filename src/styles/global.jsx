import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export default createGlobalStyle`
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }

  input,select {
    color: #607D8B ;

  }

  *, button , input, select {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  a, a:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }

  input {
    cursor: pointer;
  }
`;
