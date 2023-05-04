import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'





import theme from './styles/theme'
import { Footer } from './components/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
)
