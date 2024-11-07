'use client';
import React, { useState, Suspense, useCallback } from 'react';
import axios from 'axios';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import useDebounce from './hooks/useDebounce';
import usePagination from './hooks/usePagination';
import List from './components/list';
import Loader from './components/loader';
import SearchBar from './components/searchBar';
import Message from './components/message';
import Pagination from './components/pagination';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  // const apiKey = process.env.NEXT_PUBLIC_MOVIES_API_KEY;
  const apiKey = '6f4ec3400a9b8aa83884dfcf66b5ce91';
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const pagination = usePagination(movies, 3);
  const params = new URLSearchParams(searchParams);

  const fetchSuggestions = async (event) => {
    const value = event.target.value;
    if (typeof value === 'string') {
      if (value.trim().length === '') {
        setSearchQuery('');
        setSuggestions([]);
        setMovies([]);
        params.delete('search');
        return;
      }
      if (value) {
        setSearchQuery(value);
      }
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${value}`
      );
      const { results } = response.data;
      if (Object.keys(results).length !== 0) {
        setSuggestions([...results]);
      }
    }
  };
  const loadSuggestionsDebounced = useDebounce(fetchSuggestions, 500);

  const loadMovies = async (e) => {
    try {
      if (e) {
        e.preventDefault();
      }
      setSuggestions([]);
      if (searchQuery) {
        params.set('search', searchQuery);
        setMovies([]);
      } else {
        params.delete('search');
      }
      replace(`${pathname}?${params.toString()}`);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`,
        {
          params: { query: searchQuery, page: pagination.page },
        }
      );
      const { results, total_results } = response.data;
      setTotalResults(total_results);
      setMovies((movies) => [...movies, ...results]);
      setErrorMsg('');
    } catch (error) {
      console.log('error', error);
      setErrorMsg('Error while loading data. Try again later.');
    } finally {
      pagination.setPage(1);
    }
  };

  const onNextPage = useCallback(() => {
    pagination.setPage((prevState) => {
      if (prevState < pagination.totalPages) {
        return prevState + 1;
      }

      return prevState;
    });
  }, [pagination.totalPages]);

  const onPrevPage = useCallback(() => {
    pagination.setPage((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }

      return prevState;
    });
  }, []);

  const handleChange = (e) => {
    loadSuggestionsDebounced(e);
  };

  return (
    <div className='container'>
      <nav className='searchBar'>
        <Suspense>
          <SearchBar
            loadMovies={loadMovies}
            handleChange={handleChange}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            searchParams={searchParams}
            params={params}
            setMovies={setMovies}
          />
        </Suspense>
      </nav>
      <main className='content'>
        {searchQuery && (
          <Message totalResults={totalResults} searchQuery={searchQuery} />
        )}
        <Suspense fallback={<Loader />}>
          <List movies={pagination.data} />
          {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
        </Suspense>
      </main>
      {movies.length ? (
        <Pagination
          pagination={pagination}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
        />
      ) : null}
    </div>
  );
}
