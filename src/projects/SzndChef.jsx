import React from 'react'
import img1 from "../assets/ProjectOne/SzndChefL.jpg"
import img2 from "../assets/ProjectOne/SzndChefS.jpg"
import { Link } from 'react-router-dom'
import { G1, D1, O1} from '../yapfile.js'
import Main from '../components/Main/index.jsx'
import { imgBorder } from '../slayfile.js'

const SzndChef = () => {
  return (
    <div>
      <Main>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="border-b-[1px] border-ivory rounded">SzndChef</h1>
            <h2 className="text-sm text-ivory hover:underline hover:cursor-pointer"><Link to="https://szndchef.netlify.app/">https://szndchef.netlify.app/</Link></h2>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Goal:</h2>
            <p className="mx-[1rem]">{G1} <br/> I.e. for winter, roasts and warm, hearty meals are recommended.</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Development:</h2>
            <p className="mx-[1rem]">{D1}</p>
            <img src={img1} className={imgBorder}></img>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Outcome:</h2>
            <p className="mx-[1rem]">{O1}</p>
            <img src={img2} className={imgBorder}></img>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Tools & Repo:</h2>
            <li className="ml-[1rem]">React</li>
            <li className="ml-[1rem]">JavaScript</li>
            <li className="ml-[1rem]">Python</li>
            <li className="ml-[1rem]">Waitress & Uvicorn</li>
            <li className="ml-[1rem]">Flask</li>
            <li className="ml-[1rem]">Bootstrap</li>
            <li className="ml-[1rem]">Axios</li>
            <li className="ml-[1rem]">Canvas</li>
            <li className="ml-[1rem]">React-dom</li>
            <li className="ml-[1rem]">Redux</li>
            <li className="ml-[1rem]">React-router</li>
            <li className="ml-[1rem]">Framer-motion</li>
            <li className="ml-[1rem]">Jest & jsdom</li>
            <li className="ml-[1rem]">Tailwindcss</li>
            <li className="ml-[1rem]">Cors</li>
            <li className="ml-[1rem]">bcrypt</li>
            <li className="ml-[1rem]">JWT</li>
            <Link to="https://github.com/SmithNJ13/yao42_frontend" className="font-bold text-center">GitHub repository (Frontend)</Link>
            <Link to="https://github.com/ollie-byrne99/Lap_4_Server" className="font-bold text-center">GitHub repository (Backend)</Link>
          </section>
      </Main>
    </div>
  )
}

export default SzndChef
