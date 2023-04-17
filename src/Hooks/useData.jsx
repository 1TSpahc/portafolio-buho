
import { useEffect, useContext, useState } from 'react'
import { Context } from '../Context/ContextProvider'
import { getData } from '../services'

export function useData () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { data, setData } = useContext(Context)

  useEffect(() => {
    setLoading(true)
    getData()
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {
    data,
    loading,
    error
  }
}
