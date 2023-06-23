import PropTypes from 'prop-types'
import '../App.css'
function RenderMovies ({ mapperMovie }) {
  RenderMovies.propTypes = {
    mapperMovie: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        tittle: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
    ).isRequired
  }
  return (
    <ul className='Movies'>
      {
                mapperMovie.map(movie => (
                  <li className='movie' key={movie.id}>
                    <h3>{movie.tittle}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                  </li>
                ))
               }
    </ul>
  )
}
function RenderNoResult () {
  return (
    <p> No se encontraron peliculas para esta busquedad</p>
  )
}
export default function Movies ({ mapperMovie }) {
  Movies.propTypes = {
    mapperMovie: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        tittle: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
    ).isRequired
  }
  const hastMovies = mapperMovie?.length > 0
  return (

    hastMovies
      ? <RenderMovies mapperMovie={mapperMovie} />
      : <RenderNoResult />

  )
}
