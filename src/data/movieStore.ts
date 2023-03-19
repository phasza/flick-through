import { create } from 'zustand';

import { type MultiResultType } from '../api/tmdbResponse';
import { fetchMultiSearch } from '../api/tmdbService';

interface MovieStoreState {
  moviesList: Map<string, MultiResultType>;
  isLoading: boolean;
  error: unknown | null;
  totalPages: number;
  reset: () => void;
  fetchBySearch: (query: string, page: number) => Promise<void>;
}

const useMovieStore = create<MovieStoreState>()((set) => ({
  moviesList: new Map(),
  isLoading: false,
  error: null,
  totalPages: 0,
  reset: () => {
    set(
      (state) => ({
        ...state,
        moviesList: new Map(),
        isLoading: false,
        error: null,
        totalPages: 0,
      }),
      true
    );
  },
  fetchBySearch: async (query, page) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchMultiSearch(query, page);

      set((state) => ({
        isLoading: false,
        error: null,
        moviesList: new Map([...state.moviesList, ...response.results]),
        totalPages: response.totalPages,
      }));
    } catch (error) {
      set({ isLoading: false, error });
    }
  },
}));

export const moviesListSelector = (
  state: MovieStoreState
): MultiResultType[] => {
  return Array.from(state.moviesList.values());
};

export default useMovieStore;
