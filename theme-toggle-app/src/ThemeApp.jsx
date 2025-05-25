import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

function ThemeApp() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const appStyle = {
    backgroundColor: theme === 'dark' ? '#111' : '#fafafa',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyle}>
      <h2 style={{ textAlign: 'center' }}>Theme Toggle App</h2>
      <div style={{ textAlign: 'center' }}>
        <button onClick={toggleTheme} style={{ padding: '10px 20px', marginBottom: '20px' }}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
      <ThemedBox theme={theme}>Box 1 - Hello Theme!</ThemedBox>
      <ThemedBox theme={theme}>Box 2 - Conditional Styling</ThemedBox>
      <ThemedBox theme={theme}>Box 3 - React Props Power</ThemedBox>
    </div>
  );
}

export default ThemeApp;
