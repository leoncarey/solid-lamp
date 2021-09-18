import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /*
  * General elements
  */
  html, body, * {
    font-family: ${props => props.theme.fonts.font_primary};
    font-weight: 300;
    color: ${props => props.theme.colors.color_font_1};
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
  }
    
  html, body {
    width: 100%;
    position: relative;
    padding: 0;
    margin: 0;
  }

  ::-moz-selection { /* Code for Firefox */
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
  }
  ::selection {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
  }

  a {
    transition: all .3s ease;
  }


  @keyframes icon-shake {
    0% { transform: scale(1) }
    20% { transform: scale(0.75) }
    70% { transform: scale(1.25) }
    100% { transform: scale(1) }
  }

  @keyframes menu-line {
    0% {
      transform-origin: 0% 80%;
      transform: scale3d(0.5, 1, 1);
    }

    50% {
      transform-origin: 0% 50%;
      transform: scale3d(1, 1, 1);
    }

    100% {
      transform-origin: 100% 50%;
      transform: scale3d(0, 1, 1);
    }
  }
`
