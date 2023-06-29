import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html:root{
  font-size: 62.5%; /* Set base font size to 62.5% (10px) of the default 16px */
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body{
    background-color: ${({ theme }) => theme.COLORS.LIGHT[600]};
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};

    -webkitfont-smoothing: antialiased

  }

  body, input, button, textarea, select{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
    }
  }
  @media (max-width: 768px) {
    .mobile {
      display: flex;
    }
    .desktop {
      display: none;
    }
  }
`
