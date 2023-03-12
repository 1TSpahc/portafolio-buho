import { motion } from 'framer-motion'
import { useContext } from 'react'
import { Context } from '../../Context/ContextProvider'
export function ModalCard ({ layoutId }) {
  const { data } = useContext(Context)
  const findObj = data.find((item) => item.id === layoutId)
  return (
        <motion.div className=" w-[90%] bg-[#18181b] border-2 border-zinc-800 rounded-md p-4 md:w-[650px] " layoutId={layoutId}>
            <h1 className="text-white text-center text-2xl md:text-3xl font-[700]">{findObj.project_title}</h1>
            <motion.div className=" grid grid-cols-1 w-[100%] m-auto items-center">
                <img src={findObj.project_image} alt={findObj.project_title} className="w-full m-auto rounded-md mt-3 col-span-2 md:w-[60%]" />
                <p className="text-gray-200 mt-4 col-span-2 text-center font-[300] text-[15px] md:text-[18px]"><span className='font-[500]'>Enunciado: </span>{findObj.project_info}</p>
            </motion.div>

            <motion.div className="w-full flex items-center justify-center gap-2 mt-1 mb-2">
                <a href={findObj.project_demo} target="_blank" className=" text-[15px] md:text-[18px] font-[500] border-2 border-zinc-800 rounded-md px-3 py-1 mt-3 duration-300  text-white hover:border-[#0885d9]">Demo</a>
                <a href={findObj.project_link} target="_blank" className=" text-[15px] md:text-[18px] font-[500] border-2 border-zinc-800 rounded-md px-3 py-1 mt-3 duration-300  text-white hover:border-[#0885d9]">Code</a>
            </motion.div>
        </motion.div>
  )
}
