import { useState, useEffect } from 'react';
import client from '../utils/contentful'; 

const useContentful = (query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await client.getEntries({content_type : query});
        setData(response.items);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [query]); // Depend on 'query' so it refetches when the query changes

  return { data, isLoading, error };
};

export default useContentful;
