import { Metronome } from '@uiball/loaders'

export function Loader () {
  return (
        <div className='flex items-center justify-center h-32'>
            <Metronome
            size={40}
            speed={1.6}
            color="white"
        />
        </div>
  )
}
