// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ query, setQuery, searchBooks }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o título ou autor do livro"
      />
      <button onClick={searchBooks}>Buscar</button>
    </div>
  );
};

export default SearchBar;
