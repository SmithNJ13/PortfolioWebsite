import MoonSVG from "../../assets/CrescentMoon.svg"

const Moon = () => {
  return (
    <img id="Moon" className="absolute sm:top-10 sm:left-32 top-[0.5rem] left-[0.75rem] scale-[80%] sm:scale-[100%] rotate-[16deg]" src={MoonSVG}></img>
  )
}

export default Moon
