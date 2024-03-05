import React, { useState } from 'react';
import './components.css'; // Importing CSS file


const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (query) => {
    // Perform search logic here
    // For example, fetch data from an API based on the query
    console.log('Searching for:', query);
    // Update searchResults state with the results
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
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
