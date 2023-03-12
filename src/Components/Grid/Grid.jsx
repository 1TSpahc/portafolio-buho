import { useState } from 'react'
import { useData } from '../../Hooks/useData'
import { GridItem } from '../Grid-Item/GridItem'
import { motion, AnimatePresence } from 'framer-motion'
import { ModalCard } from '../Modal/ModalCard'

export function Grid () {
  const [selectedId, setSelectedId] = useState(null)
  const { data } = useData()

  const handleModal = (e) => {
    const modalElement = document.getElementById('modal')
    if (modalElement === e.target) {
      setSelectedId(null)
      document.body.style.overflowY = 'auto'
    }
  }
  const handleSelected = (id) => {
    setSelectedId(id)
    document.body.style.overflowY = 'hidden'
  }

  return (<div className=' grid grid-cols-1 gap-5 mt-7 md:grid-cols-3'>
    {
      data.map((item) => {
        return (
          <GridItem item={item} layoutId={item.id} key={item.id} handleSelected={handleSelected}/>
        )
      })
    }
    <AnimatePresence>
      {selectedId && (
        <motion.section className='fixed z-40 w-full h-full left-0 top-0 flex items-center justify-center bg-zinc-900/90  duration-300 backdrop-blur-none md:backdrop-blur-sm md:bg-zinc-900/60' id='modal' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        onClick={handleModal}>
          <ModalCard layoutId={selectedId}/>
        </motion.section>
      )}
    </AnimatePresence>
  </div>)
}
