import React from 'react';

function ProfileCard({ name = "Anonymous", age, bio = "No biography available." }) {
  const truncatedBio = bio.length > 100 ? bio.slice(0, 100) + "… Read More" : bio;

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {truncatedBio}</p>
    </div>
  );
}

export default ProfileCard;
