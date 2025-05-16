import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <h2>Welcome to Home</h2>;
      case 'about':
        return <h2>About Us</h2>;
      case 'contact':
        return <h2>Contact Us</h2>;
      default:
        return <h2>Page Not Found</h2>;
    }
  };

  return (
    <div className="App">
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <button style={buttonStyle} onClick={() => handleNavigation('home')}>
              Home
            </button>
          </li>
          <li style={navItemStyle}>
            <button style={buttonStyle} onClick={() => handleNavigation('about')}>
              About
            </button>
          </li>
          <li style={navItemStyle}>
            <button style={buttonStyle} onClick={() => handleNavigation('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <div style={contentStyle}>
        {renderContent()}
      </div>
    </div>
  );
}

const navStyle = {
  backgroundColor: '#282c34',
  padding: '10px',
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: 0,
};

const navItemStyle = {
  margin: '0 15px',
};

const buttonStyle = {
  backgroundColor: '#61dafb',
  border: 'none',
  padding: '10px 20px',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
};

const contentStyle = {
  marginTop: '20px',
  textAlign: 'center',
  fontSize: '24px',
};

export default App;
