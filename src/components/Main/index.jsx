import React from 'react'
import { Link } from 'react-router-dom'

const Main = ({children}) => {
    const string = "🡼"
  return (
    <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-[95vh] overflow-hidden py-[4rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime w-[65vw] my-[1rem] py-[2rem] z-[99]">
          <Link to={"/home"}><h2 className="text-4xl text-stalelime hover:text-ivory hover:cursor-pointer hover:bg-zinc-800 rounded-[10rem] bg-slate w-min h-min p-[3px] mx-[0.5rem] mt-[-1.5rem] text-center justify-center align-center self-center">{string}</h2></Link>
            {children}
        </div>
    </main>
  )
}

export default Main
