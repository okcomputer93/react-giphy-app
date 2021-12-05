import { useState, useEffect } from 'react';
import { fetchGifs } from '../helpers/fetchGifs';

export const useFetchGifs = (query) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const getGifs = async () => {
      const gifs = await fetchGifs(query);
      setState({
        data: gifs,
        loading: false,
      });
    };
    getGifs();
  }, [query]);

  return state;
};
