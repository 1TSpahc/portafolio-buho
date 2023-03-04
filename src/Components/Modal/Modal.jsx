import { ModalCard } from './ModalCard'

export function Modal ({ ModalFunct, arr }) {
  const [obj] = arr
  return <section className="fixed z-30 w-full h-full left-0 top-0 flex items-center justify-center bg-[#01c29bc8] duration-300 backdrop-blur-sm " id="modal" onClick={ModalFunct}>
    <ModalCard obj={obj}/>
    </section>
}
