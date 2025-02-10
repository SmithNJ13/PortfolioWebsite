import { motion } from "framer-motion"

const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.25,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

const CursorBlinker = () => {
  return (
    <motion.div 
    variants={cursorVariants}
    animate="blinking"
    className="inline-block h-6 w-[3px] translate-y-1 bg-ivory ml-[1px]"
    />
  )
}

export default CursorBlinker
