import { Link } from 'wouter'

export function Header () {
  return (
    <header>
        <Link to='/'>
            <h1 className="text-center text-[#e5e7eb] text-3xl md:text-4xl font-bold ">Portafolio<span className="text-[#0885d9] "> Buho</span></h1>
        </Link>
    </header>
  )
}
