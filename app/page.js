'use client';
import React, { useState, Suspense } from 'react';
import useData from './hooks/useData';
import List from './components/list';
import Loader from './components/loader';
import SearchBar from './components/searchBar';
import Message from './components/message';
import Navigation from './components/ui/Navigation';
import Main from './components/ui/Main';
import Button from './components/ui/Button';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [page, setPage] = useState(1);
  const [ignore, setIgnore] = useState(true);
  const [results, total, total_pages] = useData(
    searchQuery,
    page,
    ignore,
    setIgnore
  );
  const handleUpdateState = (value) => {
    setSearchQuery(value);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };
  const loadLess = () => {
    setPage((page) => page - 1);
  };
  const handleSubmit = () => {
    setSuggestions([]);
    setIgnore(false);
  };
  return (
    <>
      <Navigation>
        <Suspense>
          <SearchBar
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            updateState={handleUpdateState}
            setIgnore={setIgnore}
          />
          <Button type='submit' className='searchButton' onClick={handleSubmit}>
            Search
          </Button>
        </Suspense>
      </Navigation>
      <Main>
        {results?.length ? (
          <Message
            totalResults={total}
            searchQuery={searchQuery}
            results={results}
          />
        ) : null}
        <Suspense fallback={<Loader />}>
          {results && <List movies={results} />}
          {results && results.length === 0 && searchQuery !== '' && (
            <p className='message'> No movies for your search were found. </p>
          )}
          {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
        </Suspense>

        <div className='more'>
          {page > 1 && (
            <Button type='pageBtn' onClick={loadLess}>
              Back
            </Button>
          )}
          {page !== total_pages && (
            <Button type='pageBtn' onClick={loadMore}>
              Load more
            </Button>
          )}
        </div>
      </Main>
    </>
  );
}
