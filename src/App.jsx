
import { useThemeToggle } from './hooks/theme';
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'
import React, { useEffect, useState } from 'react'
import LightTheme from './styles/LightTheme'
import DarkTheme from './styles/DarkTheme'

export default function App() {
  const { theme, toggleTheme } = useThemeToggle();
  const [themeMode, setThemeMode] = useState(DarkTheme)
  useEffect(() => {
    const setMode = theme === 'dark' ? LightTheme : DarkTheme;
    setThemeMode(setMode)

  }, [theme])


  return (
    <React.StrictMode>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
          <button id='toggleButton' className='toggleHide' onClick={toggleTheme}>sadas</button>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
