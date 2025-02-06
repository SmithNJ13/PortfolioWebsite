import React from 'react'
import { Link } from 'react-router-dom'

const  Main = ({children}) => {
    const string = "🡼"
  return (
    <main id="mainBody" className="mx-1px text-stalelime flex flex-col justify-center items-center sm:h-[95vh] overflow-hidden sm:py-[4rem] sm:pt-[0rem] h-[100vh] py-[1rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime sm:w-[65vw] w-[90vw] my-[1rem] py-[2rem] z-[99]">
          <Link to={"/home"} style={{display: "contents"}}><h2 className="text-4xl text-stalelime hover:text-ivory hover:cursor-pointer hover:bg-zinc-800 rounded-[10rem] bg-slate w-min h-min p-[3px] mx-[0.5rem] mt-[-1.5rem] text-center justify-center align-center self-center">{string}</h2></Link>
            {children}
        </div>
    </main>
  )
}

export default Main
