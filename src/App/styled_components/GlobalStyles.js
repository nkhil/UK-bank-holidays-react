import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  
  ${styledNormalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  p {
    line-height: 1.8;
    font-size: 1.1rem;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    padding: 0;
  }
`

export default GlobalStyle
