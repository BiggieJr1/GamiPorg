import React from 'react';
import ReactDOM from 'react-dom/client';

// Buscador.jsx
import { useState } from 'react';
import Buscador from './Buscador';

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const data = ['React', 'Angular', 'Vue', 'Svelte']; // Datos para buscar (pueden ser más complejos)

  const handleSearch = (query) => {
    const results = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Buscador</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

//export default index;

