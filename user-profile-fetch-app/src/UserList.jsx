import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p style={{ textAlign: 'center' }}>Loading users...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>User Profiles</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '8px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
        />
      ))}
    </div>
  );
}

export default UserList;
