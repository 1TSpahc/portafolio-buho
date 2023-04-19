import { ProjectItem } from '../ProjectsItem/index'

export function ListOfProjects ({ data, modal, setModal }) {
  return (
    <div className=' grid grid-cols-1 gap-5 mt-5 md:columns-3  md:grid-cols-3'>
      {
        data.map((item) => {
          return <ProjectItem key={item.id} item={item} modalState={{ modal, setModal }} />
        })
      }
    </div>
  )
}
