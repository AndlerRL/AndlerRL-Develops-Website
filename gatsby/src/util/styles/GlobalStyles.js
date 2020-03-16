import { createGlobalStyle, themeGet } from './index';
import logoDark from 'images/new_logo-dark.svg'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    min-width: 100%;
    min-height: 100vh;
    background: ${themeGet('colors.blackDepth.400')} url(${logoDark}) no-repeat;
    background-size: 300px 300px;
    background-blend-mode: overlay;
    background-position: center;
    scroll-behavior: smooth;
    animation: beat 0.33s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: #f5f5f5;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${themeGet('fontWeights.medium')};
    font-size: ${themeGet('fontSizes.2')}px;
    background-color: ${themeGet('colors.blacksDepth.500')};
    overflow: ${({ intro }) => intro && !intro.end ? 'hidden' : 'auto'};
    scroll-behavior: smooth;
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

  @keyframes beat {
    0% {
      background-size: 300px 300px;
    }
    50% {
      background-size: 315px 315px;
    }
    100% {
      background-size: 300px 300px;
    }
  }
`

export default GlobalStyles