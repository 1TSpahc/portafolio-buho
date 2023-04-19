import { motion } from 'framer-motion'

export function ProjectItem ({ item, modalState }) {
  const { modal, setModal } = modalState

  const handleClick = (event) => {
    const currentElement = event.target
    const id = currentElement.getAttribute('id')
    setModal({
      value: true,
      itemId: id
    })
    document.documentElement.style.overflowY = 'hidden'
  }
  return (
    <div className=' overflow-hidden rounded-lg cursor-pointer p-1 bg-accent-200 dark:bg-[transparent] ' onClick={handleClick}>
            <motion.img layoutId={item.id} src={item.project_image} alt={item.project_title} className='w-full block rounded-md' id={item.id} />
    </div>
  )
}
