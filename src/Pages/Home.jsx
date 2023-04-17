import { Projects } from '../components/Projects'
import { animate, motion } from 'framer-motion'
export function Home () {
  return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-center text-[#e5e7eb] text-3xl md:text-4xl font-bold ">Portafolio<span className="text-[#0885d9] "> Buho</span></h1>
        <Projects/>
      </motion.div>
  )
}
