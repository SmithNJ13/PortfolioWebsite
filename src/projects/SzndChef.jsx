import React, {useState} from 'react'
import img1 from "../assets/ProjectOne/SzndChefL.jpg"
import img2 from "../assets/ProjectOne/SzndChefS.jpg"
import { Link } from 'react-router-dom'
import { G1, D1, O1, actionCode, reducerCode, bgCode, reducerDescription, actionDescription, backgroundDescription, carouselCode, carouselDescription} from '../yapfile.js'
import Main from '../components/Main/index.jsx'
import { imgBorder } from '../slayfile.js'
import ScrollTo from '../components/ScrollToTop/index.jsx'
import LoadingImage from "../assets/ProjectOne/LoadingNav.png"
import SeasonalImage from "../assets/ProjectOne/SeasonalPage.png"
import UpdatedLoading from "../assets/ProjectOne/UpdatedLoading.png"
import StickyNote from '../components/StickyNote/index.jsx'
import CodeBlock from '../components/CodeBlock/index.jsx'
import { languages } from 'prismjs'
import Test from '../components/Test/test.jsx'

const SzndChef = () => {
  const [section, setSection] = useState(0)
  return (
    <div>
      <Main>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="border-b-[1px] border-ivory rounded">SzndChef</h1>
            <h2 className="text-base text-center text-nowrap text-azure hover:text-ivory hover:underline hover:cursor-pointer"><Link to="https://szndchef.netlify.app/" target="_blank" rel="noopener noreferrer">https://szndchef.netlify.app/</Link></h2>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Project Summary:</h2>
            <p className="mx-[1rem] text-ivory">{G1} <br/> I.e. for winter, roasts and warm, hearty meals are recommended.</p>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Development Process:</h2>
            <p className="mx-[1rem] text-ivory">{D1}</p>
            <p className="mx-[1rem] mt-[1rem] text-ivory">When tackling this, I knew going in that I wanted it to all be on a single page, I started by creating an outline on the
              left side of the screen - where the NavBar would eventually be placed. I gave this a background colour to test different states, I wanted the background and
              theme of the page to change with each season. In this case I made summer yellow, and when switching to spring, autumn or winter the theme would change to green,
              orange or blue. I also implemented a carousel that featured placeholder images of fruit to test functionality.
            </p>
            <p className="mx-[1rem] mt-[1rem] text-ivory">You may click on a <span className="text-stalelime italic font-bold">sticky note</span> below to expand the section and see more information:</p>
              <div className="w-full border-stalelime border-t-[4px] my-[1rem]"></div>
              {section === 0 && (
                <div id="notes" className="flex flex-wrap gap-[4rem] justify-evenly mt-[2rem]">
                  <StickyNote title={"Planning & Approach"} onClick={() => setSection(1)}>
                    <p>Detailed explanations of the planning process, defining my focus and tools to use.</p>
                  </StickyNote>
                  <StickyNote title={"Core Features & Implementation"} onClick={() => setSection(2)}>
                    <p>Explanation of core features that are neccessary to the application and how I went about implementing them.</p>
                  </StickyNote>
                  <StickyNote title={"Challenges & Solutions"} onClick={() => setSection(3)}>
                    <p>Challenges and problems I faced during the development of the application, with explanations for the solutions I used to resolve the issues.</p>
                  </StickyNote>
                  <StickyNote title={"Learning Outcomes"} onClick={() => setSection(4)}>
                    <p>Things I learnt about during the development of this project and details about future improvements I would make, or different approaches I would use if I undertook a similar project.</p>
                  </StickyNote>
                </div>
              )}
            <Test onClick={() => setSection(0)}/>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Code Snippets:</h2>
            <p className="mx-[1rem] text-ivory">Below are some code snippets that are vital to the project:
            </p>
            <CodeBlock tabs={[
              {name: "ACTION CODE", language: "javascript", code: actionCode, description:actionDescription},
              {name: "REDUCER CODE", language: "javascript", code: reducerCode, description:reducerDescription},
              {name: "BACKGROUND CODE", language: "javascript", code: bgCode, description:backgroundDescription},
              {name: "CAROUSEL CODE", language: "javascript", code: carouselCode, description:carouselDescription},
            ]}/>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Project Outcome:</h2>
            <p className="mx-[1rem] text-ivory">{O1}</p>
            <img src={img1} className={`${imgBorder} my-[1rem]`}></img>
            <img src={img2} className={`${imgBorder} my-[1rem]`}></img>
          </section>
          <h2 className="font-bold text-2xl m-[2rem] text-center">Tools & Repo:</h2>
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
                <li className="ml-[1rem] text-lg text-ivory">JWT-based Authentication</li>
                <li className="ml-[1rem] text-lg text-ivory">Axios</li>
              </h2>
            </div>
            <div id="development">
              <h2 className="text-xl">Development
                <li className="ml-[1rem] text-lg text-ivory">JSDOM</li>
                <li className="ml-[1rem] text-lg text-ivory">Git</li>
                <li className="ml-[1rem] text-lg text-ivory">Trello</li>
                <li className="ml-[1rem] text-lg text-ivory">Canva</li>
              </h2>
            </div>
            <div id="languages">
              <h2 className="text-xl">Languages
                <li className="ml-[1rem] text-lg text-ivory">JavaScript, with Jest</li>
                <li className="ml-[1rem] text-lg text-ivory">Python</li>
                <li className="ml-[1rem] text-lg text-ivory">CSS</li>
                <li className="ml-[1rem] text-lg text-ivory">HTML</li>
              </h2>
            </div>
          </section>
          <div className="flex flex-col justify-center">
            <Link to="https://github.com/SmithNJ13/yao42_frontend" className="font-bold text-center hover:text-azure underline" target="_blank" rel="noopener noreferrer">GitHub repository (Frontend)</Link>
            <Link to="https://github.com/ollie-byrne99/Lap_4_Server" className="font-bold text-center hover:text-azure underline" target="_blank" rel="noopener noreferrer">GitHub repository (Backend)</Link>
          </div>
          <ScrollTo />
      </Main>
    </div>
  )
}

export default SzndChef
