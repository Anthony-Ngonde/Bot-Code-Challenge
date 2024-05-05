// SortBar.js
import React, { useState } from 'react';

function SortBar({ handleSortBy, handleFilterByClass }) {
  const [sortBy, setSortBy] = useState('health');
  const [filterByClass, setFilterByClass] = useState('all');

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    handleSortBy(selectedSortBy);
  };

  const handleFilterChange = (event) => {
    const selectedClass = event.target.value;
    setFilterByClass(selectedClass);
    handleFilterByClass(selectedClass);
  };

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="health">Sort by Health</option>
        <option value="damage">Sort by Damage</option>
        <option value="armor">Sort by Armor</option>
      </select>
      <select value={filterByClass} onChange={handleFilterChange}>
        <option value="all">All Classes</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
}

export default SortBar;