import { Grid } from '../Components/Grid/Grid'
import { ContextProvider } from '../Context/ContextProvider'
export function Home () {
  return (
    <ContextProvider>
      <div>
        <h1 className="text-center text-[#e5e7eb] text-3xl md:text-4xl font-bold ">Portafolio<span className="text-[#0885d9] "> Buho</span></h1>
        <Grid/>
      </div>
    </ContextProvider>
  )
}
/* 01c29a */
