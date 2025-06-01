import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "#e0f7fa"; // Light blue
      setFocused(true);
    }
  };

  return (
    <div className="container">
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
        className="input-box"
      />
      <br />
      <button className="focus-button" onClick={handleFocus}>
        Focus Input
      </button>
      {focused && <p className="message">Focused!</p>}
    </div>
  );
}

export default App;
