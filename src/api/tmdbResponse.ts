export interface Movie {
  id: number;
  genre_ids: number[];
  backdrop_path: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export const instanceOfMovie = (object: any): object is Movie => {
  return 'title' in object;
};

export interface TVSeries {
  id: number;
  backdrop_path: string;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}

export const instanceOfTVSeries = (object: any): object is TVSeries => {
  return 'first_air_date' in object;
};

export interface Profile {
  profile_path: string;
  adult: boolean;
  id: number;
  media_type: string;
  name: string;
  popularity: number;
}

export const instanceOfProfile = (obj: any): obj is Profile => {
  return 'profile_path' in obj;
};

export type MultiResultType = TVSeries | Movie;

export const getUniqueId = (data: MultiResultType): string =>
  instanceOfMovie(data) ? `movie_${data.id}` : `series_${data.id}`;
