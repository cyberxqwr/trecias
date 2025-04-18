import React from 'react';

function UserCard({ user }) {
  console.log(`Renderinama UserCard: ${user.name}`);

  return (
    <div className="user-card" style={{ border: '1px solid lightgray', margin: '5px', padding: '10px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Miestas: {user.address?.city || 'Nenurodyta'}</p>
    </div>
  );
}
export default React.memo(UserCard);
