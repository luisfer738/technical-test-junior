import './App.css'
import { useState } from 'react'
import Movies from './components/movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
// manera con useref
// const inputEl = inputRef.current
// const value = inputEl.value
// manera controlada
// const { query } = Object.fromEntries(
// new window.FormData(event.target))

function App () {
  const { Search, updateSearch, error } = useSearch()
  const [sorts, setSorts] = useState(true)
  const { movies: mapperMovie, getMovies, loading } = useMovies({ Search, sorts })
  const handleSubmi = (event) => {
    event.preventDefault()
    getMovies({ Search })
  }
  const handleChange = (event) => {
    updateSearch(event.target.value)
  }
  const handleSort = () => {
    setSorts(!sorts)
    console.log(sorts)
  }

  return (
    <div className='page'>
      <header className=' '>
        <h1 className='TittleBuscador'>Buscador de peliculas</h1>
        <form className='form ml-3' onSubmit={handleSubmi}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={Search} name='query' placeholder='Avenger, Start Wars, The Matrix....' className='input' />
          <input type='checkbox' onChange={handleSort} checked={sorts} />
          <button className='buttom bg-blue-700' type='submit'>Buscar </button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>
      <main className='main'>
        {
          loading ? <p>Cargando.....</p> : <Movies mapperMovie={mapperMovie} />
        }
      </main>
    </div>
  )
}

export default App
