
import { useState } from 'react'
import { useData } from '../../Hooks/useData'
import { ListOfProjects } from './ListOfProjects/index'
import { Loader } from '../Loader/index'
import { Modal } from '../Modal'

export function Projects () {
  const { data, loading, error } = useData()
  const [modal, setModal] = useState({ value: false, itemId: null })

  return (
  <div>
    {
      loading ? <Loader/> : <ListOfProjects data={data} modal={modal.value} setModal={setModal}/>
    }
    {
      modal && <Modal modal={modal} setModal={setModal}/>
    }
    {
      error && <p className='text-white text-4xl text-center'>Error</p>
    }
  </div>
  )
}
