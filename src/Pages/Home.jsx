import { DarkMode } from '../components/DarkMode'
import { Header } from '../components/Header/Header'
import { Projects } from '../components/Projects'
export function Home () {
  return (
      <div>
        <Header/>
        <Projects/>
        <DarkMode/>
      </div>
  )
}
