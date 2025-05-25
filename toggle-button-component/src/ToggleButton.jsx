import React, { useState } from 'react';

function ToggleButton({ label }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(prev => !prev);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {label && <span style={{ marginRight: '10px' }}>{label}</span>}
      <button 
        onClick={toggle} 
        style={{ 
          color: isOn ? 'green' : 'red', 
          fontWeight: 'bold', 
          fontSize: '20px' 
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;
