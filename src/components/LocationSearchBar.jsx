import React, { useState } from 'react';
import './components.css'; // Importing CSS file


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className='searchcontainer'>
    <form onSubmit={handleSubmit} className='search' >
      <input
        className='searchbar'
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter Location..."
      />
      <button type="submit" className='enterbtn'>Enter</button>
    </form>
    </div>
  );
};

export default SearchBar;
