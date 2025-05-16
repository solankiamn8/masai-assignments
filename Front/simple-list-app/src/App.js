import React from 'react';
import './App.css';

function App() {
  const items = ["React", "JavaScript", "CSS"];

  return (
    <div className="App">
      <h1>My List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
