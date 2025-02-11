import React from 'react'
import img1 from "../assets/ProjectOne/SzndChefL.jpg"
import img2 from "../assets/ProjectOne/SzndChefS.jpg"
import { Link } from 'react-router-dom'
import { G1, D1, O1} from '../yapfile.js'
import Main from '../components/Main/index.jsx'
import { imgBorder } from '../slayfile.js'
import ScrollTo from '../components/ScrollToTop/index.jsx'
import LoadingImage from "../assets/ProjectOne/LoadingNav.png"
import SeasonalImage from "../assets/ProjectOne/SeasonalPage.png"
import UpdatedLoading from "../assets/ProjectOne/UpdatedLoading.png"

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
            <p className="mx-[1rem] mt-[1rem]">When tackling this, I knew going in that I wanted it to all be on a single page, I started by creating an outline on the
              left side of the screen - where the NavBar would eventually be placed. I gave this a background colour to test different states, I wanted the background and
              theme of the page to change with each season. In this case I made summer yellow, and when switching to spring, autumn or winter the theme would change to green,
              orange or blue. I also implemented a carousel that featured placeholder images of fruit to test functionality.
            </p>
            <img src={SeasonalImage} className={`${imgBorder} sm:w-[60vw] sm:h-[70vh] mt-[1rem]`}></img>
            <i className="text-sm text-center">*As this image has been taken retroactively, the images used are not stored and thus only display as "..."</i>
            <p className="mx-[1rem] mt-[1rem]">I also implemented a temporary 'loading' page so there wouldn't be problems with unloaded assets. As well as a rudimentary
              NavBar for the sake of visualisation and testing endpoints.
            </p>
            <img src={LoadingImage} className={`${imgBorder} sm:w-[60vw] sm:h-[70vh] my-[1rem]`}></img>
            <p className="mx-[1rem] mt-[1rem]">Further down the development line the loading page eventually looked like the below image, in addition to this you can see the background changing colour
              as the season currently being navigated to is winter.
            </p>
            <img src={UpdatedLoading} className={`${imgBorder} mt-[1rem]`}></img>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Outcome:</h2>
            <p className="mx-[1rem]">{O1}</p>
            <img src={img1} className={`${imgBorder} my-[1rem]`}></img>
            <img src={img2} className={`${imgBorder} my-[1rem]`}></img>
          </section>
          <h2 className="font-bold underline text-2xl m-[1rem] text-center">Tools & Repo:</h2>
          <section className="flex flex-row flex-wrap m-[1rem] ml-[1rem] gap-[2rem] justify-evenly">
            <div id="frontend">
              <h2 className="text-xl">Frontend
                <li className="ml-[1rem] text-lg text-ivory">Vite</li>
                <li className="ml-[1rem] text-lg text-ivory">React</li>
                <li className="ml-[1rem] text-lg text-ivory">React-router</li>
                <li className="ml-[1rem] text-lg text-ivory">Framer-motion</li>
                <li className="ml-[1rem] text-lg text-ivory">Tailwindcss</li>
                <li className="ml-[1rem] text-lg text-ivory">Redux</li>
                <li className="ml-[1rem] text-lg text-ivory">Canvas</li>
                <li className="ml-[1rem] text-lg text-ivory">Axios</li>
              </h2>
            </div>
            <div id="backend">
              <h2 className="text-xl">Backend & Database
                <li className="ml-[1rem] text-lg text-ivory">Flask</li>
                <li className="ml-[1rem] text-lg text-ivory">Waitress</li>
                <li className="ml-[1rem] text-lg text-ivory">Uvicorn</li>
                <li className="ml-[1rem] text-lg text-ivory">Axios</li>
                <li className="ml-[1rem] text-lg text-ivory">JWT</li>
                <li className="ml-[1rem] text-lg text-ivory">Cors</li>
                <li className="ml-[1rem] text-lg text-ivory">Bcrypt</li>
              </h2>
            </div>
            <div id="development">
              <h2 className="text-xl">Development
                <li className="ml-[1rem] text-lg text-ivory">Jest</li>
                <li className="ml-[1rem] text-lg text-ivory">JSDOM</li>
                <li className="ml-[1rem] text-lg text-ivory">Git</li>
                <li className="ml-[1rem] text-lg text-ivory">Trello</li>
                <li className="ml-[1rem] text-lg text-ivory">Canva</li>
              </h2>
            </div>
            <div id="languages">
              <h2 className="text-xl">Languages
                <li className="ml-[1rem] text-lg text-ivory">JavaScript</li>
                <li className="ml-[1rem] text-lg text-ivory">Python</li>
                <li className="ml-[1rem] text-lg text-ivory">CSS</li>
                <li className="ml-[1rem] text-lg text-ivory">HTML</li>
              </h2>
            </div>
          </section>
          <div className="flex flex-col justify-center">
            <Link to="https://github.com/SmithNJ13/yao42_frontend" className="font-bold text-center">GitHub repository (Frontend)</Link>
            <Link to="https://github.com/ollie-byrne99/Lap_4_Server" className="font-bold text-center">GitHub repository (Backend)</Link>
          </div>
          <ScrollTo />
      </Main>
    </div>
  )
}

export default SzndChef
