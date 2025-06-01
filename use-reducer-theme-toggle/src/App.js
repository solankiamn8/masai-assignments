import React, { useReducer } from "react";
import "./App.css";

// Initial state
const initialState = {
  theme: "light",
};

// Reducer function
function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const appStyles = {
    backgroundColor: state.theme === "light" ? "#f9f9f9" : "#222",
    color: state.theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease-in-out",
  };

  return (
    <div style={appStyles}>
      <h1>Current Theme: {state.theme}</h1>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
