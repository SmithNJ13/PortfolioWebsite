import {motion, useMotionValue, useTransform, animate} from "framer-motion"
import CursorBlinker from "../CursorBlinker"
import { useState, useEffect } from "react"

const TextAnimation = ({ onComplete, animations }) => {
    const baseText = "Nathan Smith ◆ Junior Developer & Data Analyst"
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest))
    const [_, setComplete] = useState(false)
    let time = 2.5
    if(animations === true) {
        time = 2.5
    } else {
        time = 0
    }
    
    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: time,
            ease: "easeInOut",
            onComplete: () => {
                setComplete(true)
                onComplete()
            }
        })
        return controls.stop
    }, [count, onComplete])
    

  return (
    <>
    {animations && (
        <span className="text-lightemerald text-center p-[1rem]">
            <motion.span>
                {displayText}
            </motion.span>
            <CursorBlinker />
        </span>
    )}
    {!animations && (
        <span className="text-lightemerald text-center p-[1rem] mr-[4px]">Nathan Smith ◆ Junior Developer & Data Analyst</span>
    )}
    </>
  )
}

export default TextAnimation
