'use client';
import React from 'react';

function SearchBar({
  loadMovies,
  handleChange,
  suggestions,
  setSuggestions,
  setSearchQuery,
  params,
  setMovies,
}) {
  const handleSuggestionClick = async (suggestion) => {
    params.set('search', suggestion);
    setSearchQuery(suggestion);
    await loadMovies();
    setSuggestions([]);
  };

  return (
    <div className='searchContainer'>
      <form onSubmit={loadMovies}>
        <input
          type='text'
          name='searchQuery'
          placeholder='Enter a movie title'
          onChange={handleChange}
          className='searchInput'
        />
        <button type='submit' className='searchButton'>
          Search
        </button>
        {suggestions && suggestions.length !== 0 && (
          <div className='searchSuggestions'>
            {suggestions.map((item) => (
              <div key={item.id} className='searchSuggestionLink'>
                <p onClick={() => handleSuggestionClick(item.name)}>
                  {' '}
                  {item.name}{' '}
                </p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}
export default SearchBar;
