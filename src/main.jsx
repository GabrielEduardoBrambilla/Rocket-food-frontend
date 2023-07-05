import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'

import { useState } from 'react';

import LightTheme from './styles/LightTheme'
import DarkTheme from './styles/DarkTheme'

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
          <button onClick={toggleTheme}>Toggle Theme</button>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
