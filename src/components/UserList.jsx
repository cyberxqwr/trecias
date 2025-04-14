import React from 'react';
import UserCard from './UserCard';

function UserList({ users }) {
  // Check if the users array is empty
  if (!users || users.length === 0) {
    return <p>Rezultatų nėra.</p>; // Display message if no users match
  }

  return (
    <div className="user-list">
      <h2>Naudotojų Sąrašas</h2>
      {users.map(user => (
        // The key prop is essential for list rendering performance
        // UserCard is memoized, so it will only re-render if the `user` prop changes
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;