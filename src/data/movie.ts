export default interface Movie {
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
}