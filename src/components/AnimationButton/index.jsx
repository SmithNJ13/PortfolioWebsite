import React from 'react'
import { animButton } from "../../slayfile.js"

const AnimationButton = () => {
  return (
    <div className="absolute flex flex-col items-end justify-center rounded-[40px] bg-sherwood h-[10rem] w-[8rem] sm:right-[9vw] right-[3vw] top-[-6rem] z-[100] border-stalelime border-[1px]">
        <div className="mt-[6rem] text-center w-full text-ivory">
        <p className="mb-[2px] font-bold">Animations: </p>
        <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" defaultChecked></input>
            <div class={animButton}/>
        </label>
        </div>
    </div>
  )
}

export default AnimationButton
