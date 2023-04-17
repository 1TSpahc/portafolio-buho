
import { useData } from '../Hooks/useData'
import { ListOfProjects } from './ListOfProjects'
import { Loader } from './Loader'

export function Projects () {
  const { data, loading, error } = useData()

  return (
  <div>
    {
      loading ? <Loader/> : <ListOfProjects data={data}/>
    }
    {
      error && <p className='text-white text-4xl text-center'>Error</p>
    }
  </div>
  )
}
