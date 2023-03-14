export default interface TVSeries {
  id: number,
  backdrop_path: string,
  name: string,
  original_language: string,
  original_name: string,
  overview: string,
  poster_path: string,
  genre_ids: number[],
  popularity: number,
  first_air_date: string,
  vote_average: number,
  vote_count: number
}

export const instanceOfTVSeries = (object: any): object is TVSeries => {
    return 'first_air_date' in object;
}