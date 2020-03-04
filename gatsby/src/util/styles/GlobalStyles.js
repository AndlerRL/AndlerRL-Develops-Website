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
    height: auto;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: #f5f5f5;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${themeGet('fontWeights.regular')};
    font-size: ${themeGet('fontSizes.2')}px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }

  button {
    font-family: 'Oswald', sans-serif !important;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`

export default GlobalStyles