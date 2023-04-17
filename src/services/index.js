const apiUrl = import.meta.env.VITE_REACT_API_URL
const apiKey = import.meta.env.VITE_REACT_API_KEY

export async function getData () {
  try {
    const response = await fetch(`${apiUrl}?apikey=${apiKey}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
