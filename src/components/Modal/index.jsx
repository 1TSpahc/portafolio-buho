import { useContext, useRef } from 'react'
import { Context } from '../../Context/ContextProvider'
import { AnimatePresence, animate, motion } from 'framer-motion'
import { ModalInfo } from './ModalInfo/index'

export function Modal ({ modal, setModal }) {
  const id = modal.itemId
  const { data } = useContext(Context)
  const findProject = data.find((item) => item.id === Number(id))
  const elementRef = useRef()

  const handleClick = (e) => {
    // TODO STOP SCROLLING
    if (e.target === elementRef.current) {
      setModal({
        value: false,
        itemId: null
      })
      document.documentElement.style.overflowY = 'visible'
    }
  }

  return (
    <AnimatePresence>
        {
            findProject && (
                <motion.div className=' fixed w-full h-screen bg-bg-modal dark:-bg--dark-bg-modal  top-0 left-0 overflow-y-scroll flex flex-col items-center justify-center cursor-pointer' id='modal' ref={elementRef} onClick={handleClick} initial={{ opacity: 0, translateY: 0 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 0 }}>
                  <ModalInfo findProject={findProject}/>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}
