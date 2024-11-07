import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchInput({ defaultValue, setSearchQuery }) {
  const router = useRouter();

  const [inputValue, setInputValue] = useState(defaultValue);
  console.log('inputValue', inputValue);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setSearchQuery('');
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
    if (inputValue) return router.push(`/?q=${inputValue}`);
    if (!inputValue) return router.push('/');
  };

  return (
    <input
      type='text'
      id='inputId'
      placeholder='Search a movie'
      value={inputValue ?? ''}
      onChange={handleChange}
      className='searchInput'
    />
  );
}
export default SearchInput;
