import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '../icons/Icon'

export function DarkMode () {
  const [toggle, setToggle] = useState(() => {
    const isDark = JSON.parse(window.localStorage.getItem('isDark'))
    return isDark ?? false
  })

  const handleClick = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    window.localStorage.setItem('isDark', toggle)
  }, [toggle])

  useEffect(() => {
    const isDark = window.localStorage.getItem('isDark')
    window.document.documentElement.classList.toggle('dark', JSON.parse(isDark))
  }, [toggle])

  return (
    <div className='w-[40px] h-[40px] rounded-full fixed bottom-4 right-4 bg-accent-200 flex items-center justify-center cursor-pointer select-none' onClick={handleClick}>
      {
        toggle ? <SunIcon /> : <MoonIcon />
      }
    </div>
  )
}
