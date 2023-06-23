import { useEffect, useState, useRef } from 'react'
export function useSearch () {
  const [Search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = Search === ''
      return
    }
    if (Search === '') {
      setError('El campo esta vacio')
      return
    }
    if (Search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numeros')
      return
    }
    if (Search.length < 3) {
      setError('La busquedad debe tener como mínimo tres carácteres')
      return
    }
    setError(null)
  }, [Search])
  return { Search, updateSearch, error }
}
