import React from 'react';

function ThemedBox({ theme, children }) {
  const boxStyle = {
    padding: '20px',
    margin: '10px auto',
    width: '80%',
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return <div style={boxStyle}>{children}</div>;
}

export default ThemedBox;
