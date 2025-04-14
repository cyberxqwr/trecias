import React from 'react';

// Use destructured props directly in the function signature
function UserCard({ user }) {
  console.log(`Renderinama UserCard: ${user.name}`); // Log to see when card renders

  return (
    <div className="user-card" style={{ border: '1px solid lightgray', margin: '5px', padding: '10px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Miestas: {user.address?.city || 'Nenurodyta'}</p> {/* Safely access nested property */}
    </div>
  );
}

// --- Optimization: React.memo ---
// This prevents UserCard from re-rendering if its props (the `user` object)
// have not changed reference or value (shallow comparison).
// Useful when UserCard is part of a list that might re-render frequently.
export default React.memo(UserCard);