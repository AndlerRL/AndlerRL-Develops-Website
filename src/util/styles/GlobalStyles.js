import { createGlobalStyle, themeGet, getPx } from './index';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: #f5f5f5;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`

export default GlobalStyles