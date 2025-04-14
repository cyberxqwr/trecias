import React from 'react';

function SearchBar({ searchTerm, onSearchChange, onClearSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Ieškoti pagal vardą..."
        value={searchTerm}
        onChange={onSearchChange}
        aria-label="Naudotojo paieška pagal vardą"
      />
      <button
        onClick={onClearSearch}
        disabled={!searchTerm}
      >
        Valyti paiešką
      </button>
    </div>
  );
}

export default SearchBar;