export function ModalCard ({ obj }) {
  return <div className=" w-[90%] bg-[#1b1f24] border-2 border-[#01c29a] rounded-md p-4 md:w-[650px] ">
        <h1 className="text-white text-center text-2xl md:text-3xl font-[700]">{obj.title}</h1>
        <div className=" grid grid-cols-1 w-[100%] m-auto items-center">
            <img src={obj.image} alt={obj.title} className="w-full m-auto rounded-md mt-3 col-span-2 md:w-[60%]" />
            <p className="text-gray-200 mt-4 col-span-2 text-center font-[300] text-[15px] md:text-[18px]">{obj.info}</p>
        </div>

        <div className="w-full flex items-center justify-center gap-2 mt-1 mb-2">
            <a href={obj.demo} target="_blank" className=" text-[15px] md:text-[18px] font-[500] border-2 border-[#01c29a] rounded-md px-3 py-1 mt-3  text-white">Demo</a>
            <a href={obj.link} target="_blank" className=" text-[15px] md:text-[18px] font-[500] border-2 border-[#01c29a] bg-[#01c29a] rounded-md px-3 py-1 mt-3  text-white">Code</a>
        </div>
    </div>
}
