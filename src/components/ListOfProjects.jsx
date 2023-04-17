
import { ProjectItem } from './ProjectItem'

export function ListOfProjects ({ data }) {
  return (
    <div className=' col-span-1  mt-5 md:columns-3 '>
      {
        data.map((item) => {
          return <ProjectItem key={item.id} item={item} />
        })
      }
    </div>
  )
}
