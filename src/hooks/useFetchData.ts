import { useEffect, useState } from 'react';

interface UseFetchDataResult<T> {
  result: T | undefined;
  isLoading: boolean;
  error: unknown | null;
}

const useFetchData = <T>(fetch: () => Promise<T>): UseFetchDataResult<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<T | undefined>(undefined);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch()
      .then((i) => {
        setResult(i);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { result, isLoading, error };
};

export default useFetchData;
