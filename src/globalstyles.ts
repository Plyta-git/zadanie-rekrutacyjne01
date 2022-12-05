import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #D9D9D9;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 100%;
}

`;
 
export default GlobalStyle;