// SearchBar.js
import React, { useState } from 'react';

function Buscador({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query); // Llama a la función de búsqueda con el término de búsqueda actual
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
        style={{
          padding: '8px',
          width: '200px',
          marginRight: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
        Buscar
      </button>
    </div>
  );
}

export default Buscador;
