import { useEffect, useState } from 'react';
import axios from 'axios';
// const apiKey = process.env.NEXT_PUBLIC_MOVIES_API_KEY;
const apiKey = '';

export default function useData(query, page, ignore, setIgnore) {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    try {
      const fetch = async (e) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: apiKey,
              query,
              page,
            },
          }
        );
        const { results, total_results, total_pages } = response.data;
        if (!ignore) {
          setData(results);
          setTotal(total_results);
          setTotalPages(total_pages);
        }
      };
      if (!ignore) {
        fetch();
      }
    } catch (error) {
      if (error) {
        setErrorMsg('Error while loading data. Try again later.');
      }
    }

    return () => {
      setIgnore(true);
    };
  }, [query, page, ignore, setIgnore]);
  return [data, total, totalPages, errorMsg];
}
