import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  
  ${styledNormalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    padding: 0;
  }

  th, td {
    padding: 15px;
    text-align: left;
    background-color: #f8f9fa;
  }
`

export default GlobalStyle
