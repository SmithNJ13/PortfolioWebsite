import {motion, useMotionValue, useTransform, animate} from "framer-motion"
import CursorBlinker from "../CursorBlinker"
import { useState, useEffect } from "react"

const TextAnimation = ({ onComplete }) => {
    const baseText = "Nathan Smith ◆ Junior Developer & Data Analyst"
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest))
    const [_, setComplete] = useState(false)
    
    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: 2.0,
            ease: "easeInOut",
            onComplete: () => {
                setComplete(true)
                onComplete()
            }
        })
        return controls.stop
    }, [count, onComplete])
    

  return (
    <span className="text-lightemerald text-center p-[1rem]">
        <motion.span>
            {displayText}
        </motion.span>
        <CursorBlinker />
    </span>
  )
}

export default TextAnimation
