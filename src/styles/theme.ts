import { DefaultTheme } from 'styled-components'

const Theme: DefaultTheme = {
  title: 'light',

  colors: {
    primary: '#DD7E48',
    secondary: '#5A5766',
    tertiary: '#f5f0f0',

    black: '#171b1c',
    white: '#ffffff',
    sub_white: 'rgba(255,255,255,0.6)',

    color_font_1: '#555555',
    color_font_2: '#DD7E48',
    color_font_3: '#48435C',

    hover_link_1: '#23d2e2',
    hover_link_2: '#adafca',

    border_opacity: 'rgba(255, 255, 255, 0.3)',
    border_footer: '#454949',

    links_footer: 'rgba(255,255,255,0.6)',

    danger_color: '#dc3545'
  },

  fonts: {
    font_primary: "'Rajdhani', sans-serif",
    font_secondary: "'Titillium Web', sans-serif"
  },

  inputs: {
    border_primary: '#dedeea',
    background_primary: '#ffffff',
    color: '#3e3f5e',
    placeholder_color: '#adafca'
  },

  buttons: {
    box_color: '4px 7px 12px 0 rgba(97,93,250, .2)',
    background: '#615dfa',
    background_hover: '#5753e4'
  }
}

export default Theme
