import { motion } from "framer-motion";
import StarSVG from "../../assets/Star.svg";

const Star = () => {
  const getRandomRotation = () => {
    return Math.random() * 35 - 20; // Generates a random number between -15 and 15
  };

  const getRandomDuration = () => {
    return Math.random() * (3 - 2.25) + 2.25; // Generates a random number between 2.25 and 3
  };

  return (
    <motion.img
      id="Star"
      src={StarSVG}
      animate={{
        scale: [1, 0.75, 1], // scale down to 0.75 size, then back to original size
        opacity: [1, 0, 1], // fade out, then back to full opacity
        rotate: [0, getRandomRotation(), 0] // rotate randomly between -15 and 15 degrees when scaled down, then back to original rotation
      }}
      transition={{
        duration: getRandomDuration(), // random duration between 2.25 and 3 seconds
        repeat: Infinity, // repeat the animation indefinitely
        times: [0, 0.5, 1] // blink quickly when scale is 0.75
      }}
    />
  );
};

export default Star;
