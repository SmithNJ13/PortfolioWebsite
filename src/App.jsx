import "./App.css"
import {Routes, Route} from "react-router-dom"
import { LandingPage, HomePage } from "./pages/export"
import { SzndChef, PLP, DA, FYP } from "./projects/exports"
import Moon from "./components/Moon/index"
import Star from "./components/Star/index"
import WavesAnimation from "./components/WavesAnimation"
import AnimationButton from "./components/AnimationButton"
import { useState, useEffect } from "react"

function App() {
  const [animations, setAnimations] = useState(() => {
    return JSON.parse(localStorage.getItem("Animations")) ?? true
  })
  useEffect(() => {
    localStorage.setItem("Animations", JSON.stringify(animations))
  }, [animations])

  return (
    <>
      <AnimationButton animations={animations} setAnimations={setAnimations}/>
      <Moon />
      <div id="Star1" className="absolute top-[3vh] left-[2vw] rotate-[10deg] hidden xl:block"><Star animations={animations}/></div>
      <div id="Star2" className="absolute top-[37vh] left-[4vw] rotate-[2deg] hidden xl:block"><Star animations={animations}/></div>
      <div id="Star3" className="absolute top-[4vh] left-[20vw] rotate-[8deg] hidden xl:block"><Star animations={animations}/></div>
      <div id="Star4" className="absolute top-[6vh] right-[6vw] rotate-[-4deg] hidden xl:block"><Star animations={animations}/></div>
      <div id="Star5" className="absolute rotate-[-13deg] top-[6vh] right-[8vw] sm:top-[17vh] sm:right-[15vw]"><Star animations={animations}/></div>
      <div id="Star6" className="absolute sm:top-[41vh] sm:right-[12vw] top-[12vh] right-[30vw] rotate-[11deg]"><Star animations={animations}/></div>
      <div id="Star7" className="absolute sm:top-[30vh] sm:right-[3vw] top-[18vh] right-[14vw] rotate-[-22deg]"><Star animations={animations}/></div>
      <WavesAnimation animations={animations}/>
      <Routes>
        <Route path="/" element={<LandingPage animations={animations} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/szndchef" element={<SzndChef />} />
        <Route path="/home/plp" element={<PLP animations={animations} />} />
        <Route path="/home/da" element={<DA />} />
        <Route path="/home/fyp" element={<FYP />} />
      </Routes>
    </>
  )
}

export default App
