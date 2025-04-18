import React from 'react';
import UserCard from './UserCard';

function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p>Rezultatų nėra.</p>;
  }

  return (
    <div className="user-list">
      <h2>Naudotojų Sąrašas</h2>
      {users.map(user => (

        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
