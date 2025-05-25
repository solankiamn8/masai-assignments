import React from 'react';

function UserCard({ name, email, city }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '10px auto',
    borderRadius: '8px',
    maxWidth: '400px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
};

export default UserCard;
