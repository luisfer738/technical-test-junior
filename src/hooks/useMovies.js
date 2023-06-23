import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/Movies'
export function useMovies ({ Search, sorts }) {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(Search)
  const getMovies = useMemo(() => {
    return async ({ Search }) => {
      if (Search === previousSearch.current) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = Search
        const newMovie = await searchMovies({ Search })
        setResponseMovies(newMovie)
      } catch (e) {
        setError(false)
      } finally {
        setLoading(false)
      }
    }
  }, [])
  /*  const sortMovies = sorts
    ? [...responseMovies].sort((a, b) => a.tittle.localeCompare(b.tittle))
    : responseMovies */
  const sortMovies = useMemo(() => {
    return sorts
      ? [...responseMovies].sort((a, b) => a.tittle.localeCompare(b.tittle))
      : responseMovies
  }, [sorts, responseMovies])
  return { movies: sortMovies, getMovies, loading }
}
