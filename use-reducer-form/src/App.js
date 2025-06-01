import React, { useReducer } from 'react';

const initialState = {
  email: '',
  password: '',
  submitted: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'submit':
      return { ...state, submitted: true };
    case 'reset':
      return initialState;
    default:
      throw new Error('invalid action type');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      dispatch({ type: 'submit' });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>User Form with useReducer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: '1rem' }}>
            Reset
          </button>
        </div>
      </form>

      <div style={{ marginTop: '2rem' }}>
        {!state.submitted ? (
          <div>No details found</div>
        ) : (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
