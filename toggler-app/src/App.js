import React, { useReducer } from 'react';

// Initial state
const initialState = {
  isVisible: false
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.container}>
      <h1>Toggle Visibility</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}>
        Toggle Message
      </button>
      {state.isVisible && <p style={styles.message}>Hello, World!</p>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial',
  },
  message: {
    marginTop: '20px',
    fontSize: '24px',
    color: 'green'
  }
};

export default App;
