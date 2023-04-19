import { NewtonsCradle } from '@uiball/loaders'

export function Loader () {
  return (
    <div className='flex items-center justify-center h-40'>
      <NewtonsCradle
        size={40}
        speed={1.4}
        color="#788189"
      />
    </div>
  )
}
