import React, {useEffect, useState} from 'react'
import { animButton, buttonBox } from "../../slayfile.js"

const AnimationButton = ({animations, setAnimations}) => {
  
  return (
    <div className={buttonBox}>
        <div className="mt-[6rem] text-center w-full text-ivory">
        <p className="mb-[2px] font-bold">Animations: </p>
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={animations} onChange={() => setAnimations((prev) => !prev)}></input>
            <div className={animButton}/>
        </label>
        </div>
    </div>
  )
}

export default AnimationButton
