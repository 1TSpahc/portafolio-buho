import { OwlIcon } from '../icons/Icon'

export function Header () {
  return (
    <header className="flex items-center justify-center gap-1">
        <h1 className="text-center text-text-100 dark:-text--dark-text-100 text-3xl md:text-4xl font-[500] ">Portafolio<span className=" text-accent-100 "> Búho</span></h1>
        <OwlIcon/>
    </header>
  )
}
