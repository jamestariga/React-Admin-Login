import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background-image: url('../../../../../../bg.jpg');
    background-size: cover;
  }
`
export default GlobalStyle
