import { Button } from '../../Button'
import { motion } from 'framer-motion'

export function ModalInfo ({ findProject }) {
  //
  return (
        <>
            <h2 className=' text-text-100 dark:-text--dark-text-100 text-center text-3xl'>{findProject.project_title}</h2>
            <motion.img src={findProject.project_image} alt={findProject.project_title} className='block w-[90%]  m-auto my-6 rounded-md md:w-[65%]' layoutId={findProject.id}/>
            {/* <motion.img src={findProject.project_image} alt={findProject.project_title} className='block w-[70%] m-auto my-6 rounded-md' /> */}
            <p className=' text-text-200 dark:-text--dark-text-200 text-center'><span className=' text-text-100 dark:-text--dark-text-100'>Enunciado: </span>{findProject.project_info}</p>
            <div className='flex items-center justify-center gap-2 py-4'>
                <Button text="Link" path={findProject.project_link} />
                <Button text="Demo" path={findProject.project_demo} />
            </div>
        </>
  )
}
