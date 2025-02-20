import React from 'react'

const Test = ({onClick}) => {
  return (
    <div className="flex flex-col items-center w-full justify-center my-[2rem]">
        <h1 className="hover:cursor-pointer hover:text-ivory hover:bg-neutral-500 hover:bg-opacity-20 text-stalelime font-bold text-4xl w-min border-[2px] border-white rounded-[1rem] p-[4px]" onClick={onClick}>RETURN
        <p className="text-sm text-center">(to sticky notes)</p>
        </h1>
    </div>
  )
}

export default Test
