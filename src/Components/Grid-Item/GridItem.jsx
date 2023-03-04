import { useState, useContext } from 'react'
import { Context } from '../../Context/ContextProvider'
import { Modal } from '../Modal/Modal'

export function GridItem ({ item }) {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const { data } = useContext(Context)

  const findObj = data.filter((obj) => obj.id === item.id)

  const handleClick = () => {
    setModal(true)
  }
  const handleModal = (e) => {
    const modalElement = document.getElementById('modal')
    if (modalElement === e.target) {
      setModal(false)
    }
  }
  if (modal) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
  const handleLoad = (e) => {
    setLoading(!loading)
  }

  return <div className={` relative  after:content-[''] after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:shadow-load  overflow-hidden rounded-md bg-[#1b1f24] ${loading ? 'after:animate-loader' : 'after:animate-none'}`}>
    <img className={`w-full cursor-pointer z-10 ${loading ? ' opacity-0' : ' opacity-100'}`} src={item.image} alt={item.title} onClick={handleClick} onLoad={handleLoad} />
    {
      modal ? <Modal ModalFunct={handleModal} arr={findObj}/> : ''
    }

  </div>
}
