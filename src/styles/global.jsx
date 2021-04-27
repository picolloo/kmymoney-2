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

  *, button , input {
    font-family: 'Roboto', sans-serif;
  }

  a, a:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }
`;
