import { useState } from 'react'
import { motion } from 'framer-motion'

export function GridItem ({ item, layoutId, handleSelected }) {
  const [loading, setLoading] = useState(true)

  const handleLoad = (e) => {
    setLoading(!loading)
  }
  const handleClick = () => {
    handleSelected(layoutId)
  }
  return (
    <motion.div className={` relative  after:content-[''] after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:shadow-load  overflow-hidden rounded-md bg-[#1b1f24] ${loading ? 'after:animate-loader' : 'after:animate-none after:hidden'}`} layoutId={layoutId} onClick={handleClick} initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}>
      <motion.img className={`w-full cursor-pointer z-10 ${loading ? ' opacity-0' : ' opacity-100'}`} src={item.project_image} alt={item.project_title} onLoad={handleLoad} />
    </motion.div>
  )
}
