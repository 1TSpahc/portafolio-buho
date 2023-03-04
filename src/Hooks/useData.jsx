import { useEffect, useContext } from 'react'
import { Context } from '../Context/ContextProvider'

export function useData () {
  const { data, setData } = useContext(Context)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/src/Services/bd.json')
      const data = await response.json()
      setData(data)
    }
    getData()
  }, [])

  return {
    data
  }
}
