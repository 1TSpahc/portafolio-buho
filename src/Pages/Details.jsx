import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'wouter'

export function Details ({ params }, { isVisible }) {
  const { id } = params
  const { data } = useContext(Context)
  const findProject = data.find((project) => project.id === Number(id))

  return (
    <AnimatePresence>
      <motion.div key="modal" initial={{ opacity: 0, translateY: 10 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0 }}>
        <h2 className='text-white text-center text-3xl'>{findProject.project_title}</h2>
        <motion.img src={findProject.project_image} alt={findProject.project_title} className='block w-[70%] m-auto my-6 rounded-md' layoutId={findProject.id} />
        <p className='text-white text-center'>{findProject.project_info}</p>
        {/* <Link to='/' className='w-[40px] h-[40px] rounded-full bg-red-200 absolute right-4 bottom-4'>
        X
        </Link> */}
        <div className='flex items-center justify-center gap-2 py-4'>
          <a className=' rounded-md border border-blue-500 px-4 py-1 text-white' target='_blank' href={findProject.project_link}>Link</a>
          <a className=' rounded-md border border-blue-500 px-4 py-1 text-white' target='_blank' href={findProject.project_demo}>Demo</a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
