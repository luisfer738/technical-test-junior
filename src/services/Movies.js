const API_KEY = 'd453a52a'
export const searchMovies = async ({ Search }) => {
  if (Search === '') return null
  try {
    const response = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${Search}`)
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      tittle: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
