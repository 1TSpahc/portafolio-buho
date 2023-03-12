
import { useEffect, useContext } from 'react'
import { Context } from '../Context/ContextProvider'

export function useData () {
  const { data, setData } = useContext(Context)

  const apiUrl = import.meta.env.VITE_REACT_API_URL
  const apiKey = import.meta.env.VITE_REACT_API_KEY

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${apiUrl}?apikey=${apiKey}`)
      const data = await response.json()
      setData(data)
    }
    getData()
  }, [])

  return {
    data
  }
}
