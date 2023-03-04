import { useData } from '../../Hooks/useData'
import { GridItem } from '../Grid-Item/GridItem'
export function Grid ({ arr }) {
  const { data } = useData()
  return (<div className=' grid grid-cols-1 gap-5 mt-7 md:grid-cols-3'>
    {
        data.map(item => {
          return <GridItem key={item.id} item={item}/>
        })
    }
  </div>)
}
