import React, { useState } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button 
        onClick={handleDecrement}
        disabled={count === 0}
        style={{ marginLeft: '10px' }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
