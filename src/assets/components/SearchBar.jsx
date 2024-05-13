
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onFilter }) => {
  const [engineType, setEngineType] = useState('');
  const [condition, setCondition] = useState('');


  const handleEngineTypeChange = (event) => {
    setEngineType(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleFilter = () => {
    const filters = {
      engineType: engineType.trim(),
      condition: condition.trim().toLowerCase() === 'all' ? '' : condition.trim().toLowerCase(),
    };
    onFilter(filters);
  };

  return (
    <div>
      <h2>Filter Cars</h2>
      <div>
        <label htmlFor="engineType">Engine Type:</label>
        <select id="engineType" value={engineType} onChange={handleEngineTypeChange}>
          <option value="">Any</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Petrol">Pertol</option>

        </select>
      </div>
      <div>
        <label htmlFor="condition">Condition:</label>
        <select id="condition" value={condition} onChange={handleConditionChange}>
          <option value="all">All</option>
          <option value="Brand New">New</option>
          <option value="used">Used</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

SearchBar.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default SearchBar;
