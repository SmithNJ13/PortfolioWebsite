import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const  Main = ({children}) => {
    const string = "◀◀"
    const [home, setHome] = useState(false)
    const loc = useLocation()

    useEffect(() => {
      if(loc.pathname === "/home") {
        setHome(true)
      } else {
        setHome(false)
      }
    }, [loc.pathname])
  return (
    <main id="mainBody" className="mx-1px text-stalelime flex flex-col justify-center items-center sm:h-[96vh] overflow-hidden sm:py-[4rem] sm:pt-[2rem] pt-[1rem] h-[91vh] py-[1rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime sm:w-[65vw] w-[90vw] my-[1rem] pt-[2rem] z-[99]">
          { !home && (
            <>
              <Link to={"/home"} style={{display: "contents"}}><h2 className="text-2xl text-stalelime text-start hover:text-ivory hover:cursor-pointer hover:bg-zinc-800 rounded-[10rem] bg-slate w-[3.4rem] h-min p-[3px] mx-[0.5rem] mt-[-1.5rem] text-center justify-center align-center self-center">{string}</h2></Link>
            </>
          )}
          {children}
        </div>
    </main>
  )
}

export default Main
