import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './App.css'

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
          throw new Error(`HTTP klaida! Statusas: ${response.status}`);
        }
        const data = await response.json();
        setAllUsers(data);
      } catch (e) {
        console.error("Nepavyko gauti naudotojų:", e);
        setError("Nepavyko užkrauti naudotojų sąrašo. Bandykite vėliau.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!searchTerm) {
      return allUsers;
    }
    return allUsers.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allUsers, searchTerm]);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return (
    <div className="App">
      <h1>Naudotojų Paieška</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />
      {loading && <p>Kraunama...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <UserList users={filteredUsers} />
      )}
    </div>
  );
}

export default App;
