export default interface Movie {
  id: number,
  genreIds: number[],
  backdropPath: string,
  originalLanguage: string,
  overview: string,
  popularity: number,
  posterPath: string,
  releaseDate: string,
  title: string,
  viteAverage: number,
  voteCount: number
}