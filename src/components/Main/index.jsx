import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import arrow from "../../assets/arrow.png"

const  Main = ({children}) => {
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
              <Link to={"/home"}><img src={arrow} className="flex object:contain hover:cursor-pointer hover:bg-zinc-700 border-stalelime border-[1px] rounded-[50rem] bg-slate w-[3rem] h-[3rem] p-[5px] mx-[1rem] mt-[-1rem] text-center justify-center align-center self-center"></img></Link>
            </>
          )}
          {children}
        </div>
    </main>
  )
}

export default Main
