import React, { useState } from 'react';
import './App.css';

function App() {
  const [reactTitle, setReactTitle] = useState(document.title);
  const [reactUpdateCount, setReactUpdateCount] = useState(0);

  const changeTitleWithReact = () => {
    setReactTitle("React: " + new Date().toLocaleTimeString());
    setReactUpdateCount(reactUpdateCount + 1);
  };

  const changeTitleWithVanillaJS = () => {
    document.title = "Vanilla JS: " + new Date().toLocaleTimeString();
    document.getElementById("vanilla-update-count").textContent =
      parseInt(document.getElementById("vanilla-update-count").textContent) + 1;
  };

  return (
    <div className="App">
      <h1>React Virtual DOM vs. Vanilla DOM</h1>

      <div>
        <h2>React Title: {reactTitle}</h2>
        <button onClick={changeTitleWithReact}>Change Title (React)</button>
        <p>React Updates: {reactUpdateCount}</p>
      </div>

      <div>
        <h2>Vanilla JS Title: {document.title}</h2>
        <button onClick={changeTitleWithVanillaJS}>Change Title (Vanilla JS)</button>
        <p>Vanilla JS Updates: <span id="vanilla-update-count">0</span></p>
      </div>
    </div>
  );
}

export default App;
