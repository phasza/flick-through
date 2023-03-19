import {
  type MultiResultType,
  getUniqueId,
  instanceOfProfile,
} from './tmdbResponse';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '21907d296a26ea0f8ea5ced654780804';

interface RawResult {
  results: any[];
  total_pages: number;
  total_results: number;
}

const doMultiSearch = async (
  query: string,
  page: number
): Promise<RawResult> => {
  const response = await fetch(
    `${baseUrl}/search/multi?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${query}`
  );
  return await response.json();
};

interface MultiSearchResult {
  results: Map<string, MultiResultType>;
  totalPages: number;
}

export const fetchMultiSearch = async (
  query: string,
  page: number
): Promise<MultiSearchResult> => {
  const response = await doMultiSearch(query, page);
  const results = new Map<string, MultiResultType>();
  response.results.forEach((i) => {
    if (instanceOfProfile(i)) {
      return;
    }

    if (i.poster_path === null) {
      return;
    }

    results.set(getUniqueId(i), i);
  });
  return {
    results,
    totalPages: response.total_pages,
  };
};
