import "./App.css"
import {Routes, Route} from "react-router-dom"
import { LandingPage, } from "./pages/export"
import Moon from "./components/Moon/index"
import Star from "./components/Star/index"
import WavesAnimation from "./components/WavesAnimation"
import HomePage from "./pages/homepage"
import SzndChef from "./projects/SzndChef"
import PLP from "./projects/PLP"
import DA from "./projects/DA"

function App() {

  return (
    <>
      <Moon />
      <div id="Star1" className="absolute top-[3vh] left-[2vw] rotate-[10deg]"><Star /></div>
      <div id="Star2" className="absolute top-[37vh] left-[4vw] rotate-[2deg]"><Star /></div>
      <div id="Star3" className="absolute top-[4vh] left-[20vw] rotate-[8deg]"><Star /></div>
      <div id="Star4" className="absolute top-[6vh] right-[6vw] rotate-[-4deg]"><Star /></div>
      <div id="Star5" className="absolute top-[17vh] right-[15vw] rotate-[-13deg]"><Star /></div>
      <div id="Star6" className="absolute top-[41vh] right-[12vw] rotate-[11deg]"><Star /></div>
      <div id="Star7" className="absolute top-[30vh] right-[3vw] rotate-[-22deg]"><Star /></div>
      <WavesAnimation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/szndchef" element={<SzndChef />} />
        <Route path="/home/plp" element={<PLP />} />
        <Route path="/home/da" element={<DA />} />
      </Routes>
    </>
  )
}

export default App
