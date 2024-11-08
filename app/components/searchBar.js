'use client';
import { React, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Input from './ui/Input';
import useDebounce from '../hooks/useDebounce';

function SearchBar({
  updateState,
  suggestions,
  setSuggestions,
  setIgnore,
  setPaths,
}) {
  const [value, setValue] = useState('');
  const apiKey = '';
  const debouncedInputValue = useDebounce(value, 500);
  const searchParams = useSearchParams();

  const fetchSuggestions = async (value) => {
    if (typeof value === 'string') {
      if (value.trim().length === 0) {
        setSuggestions([]);
        return;
      }
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/keyword`,
        {
          params: {
            api_key: apiKey,
            query: value,
          },
        }
      );
      const { results } = response.data;
      if (Object.keys(results).length !== 0) {
        setSuggestions([...results]);
      }
    }
  };

  useEffect(() => {
    fetchSuggestions(debouncedInputValue);
  }, [debouncedInputValue]);

  const handleClick = (value) => {
    setValue(value);
    updateState(value);
    setSuggestions([]);
    setIgnore(false);
    setPaths(value);
  };

  const handleChange = (event) => {
    const newState = event.target.value;
    console.log('state', event.target.value);
    setValue(newState);
    updateState(newState);
  };

  return (
    <div className='searchContainer'>
      <Input
        type='text'
        name='searchQuery'
        value={value}
        placeholder='Enter a movie title'
        onChange={handleChange}
        className='searchInput'
        defaultValue={searchParams.get('search')?.toString()}
      />
      {suggestions && suggestions.length !== 0 && (
        <div className='searchSuggestions'>
          {suggestions.map((item) => (
            <div key={item.id} className='searchSuggestionLink'>
              <p onClick={() => handleClick(item.name)}> {item.name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
