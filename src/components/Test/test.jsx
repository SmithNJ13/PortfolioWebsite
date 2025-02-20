import React from 'react'

const Test = ({onClick}) => {
  return (
    <div className="flex w-full justify-center my-[2rem]">
        <h1 className="hover:cursor-pointer hover:text-ivory font-bold text-4xl w-min border-[2px] border-white rounded-[1rem] p-[5px]" onClick={onClick}>RETURN</h1>
    </div>
  )
}

export default Test
