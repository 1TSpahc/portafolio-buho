import { Link } from 'wouter'
import { motion } from 'framer-motion'

export function ProjectItem ({ item }) {
  return (
    <div className=' overflow-hidden rounded-lg cursor-pointer my-4'>
      <Link to={`/project/${item.id}`}>
            <motion.img layoutId={item.id} src={item.project_image} alt={item.project_title} className='w-full block' />
      </Link>
    </div>
  )
}
