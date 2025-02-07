import React, { useState } from 'react'
import card from "../assets/ProjectTwo/Image1.png"
import img2 from "../assets/ProjectTwo/Image2.png"
import img3 from "../assets/ProjectTwo/Image3.png"
import img4 from "../assets/ProjectTwo/Image4.png"
import img5 from "../assets/ProjectTwo/Image5.png"
import img6 from "../assets/ProjectTwo/Image6.png"
import img7 from "../assets/ProjectTwo/Image7.png"
import img8 from "../assets/ProjectTwo/Image8.png"
import img9 from "../assets/ProjectTwo/Image9.png"
import img10 from "../assets/ProjectTwo/Image10.png"
import img11 from "../assets/ProjectTwo/Image11.png"
import img12 from "../assets/ProjectTwo/Image12.png"
import be1 from "../assets/ProjectTwo/BE1.png"
import be2 from "../assets/ProjectTwo/BE2.png"
import be3 from "../assets/ProjectTwo/BE3.png"
import be4 from "../assets/ProjectTwo/BE4.png"
import cardZoom from "../assets/ProjectTwo/CardZoom.png"
import { imgBorder } from '../slayfile.js'

import { Link } from 'react-router-dom'
import { G2, D2, D2_1, O2} from '../yapfile.js'
import StickyNote from '../components/StickyNote/index.jsx'
import Test from '../components/Test/test.jsx'
import Main from '../components/Main/index.jsx'
import ScrollTo from '../components/ScrollToTop/index.jsx'

const PLP = () => {
  const string2 = "[ P.L.P ]"
  const [implementation, setImplementation] = useState(0)

 return (
    <div>
      <Main>
        <section className="h-auto w-auto font-bold flex flex-row sm:px-[5rem] px-[1rem] py-[1rem] flex flex-col items-center mt-[2rem]">
          <h1 className="sm:text-4xl text-3xl border-b-[1px] border-ivory rounded w-auto text-center">Premier League Predictions {string2}</h1>
          <h2 className="text-sm text-ivory hover:underline hover:cursor-pointer"><Link to="">deployed_link_for_project</Link></h2>
        </section>
        <section className="flex flex-col m-[1rem]">
          <h2 className="font-bold underline text-2xl">Goal:</h2>
          <p className="mx-[1rem]">{G2}</p>
        </section>
        <section className="flex flex-col m-[1rem] my-[4rem]">
          <h2 className="font-bold underline text-2xl">Development:</h2>
          <p className="mx-[1rem]">Development came in many stages, you can click on one of the <span className="text-ivory underline font-bold">sticky notes</span> below to choose which implementation you would like details on:</p>
          {implementation == 0 && (
            <div id="notes" className="flex flex-wrap sm:my-[4rem] sm:mx-[4rem] gap-[8rem] justify-evenly">
              <StickyNote title={"Implementation #1"} 
              bulletOne={"card functionality"} rotation="10deg" posY="7rem"
              bulletTwo={"rudimentary routes (home/profile/login)"} 
              bulletThree={"basic graphical design"}
              onClick={() => setImplementation(1)}/>

              <StickyNote title={"Implementation #2"} 
              bulletOne={"basic card UI elements"} rotation="-10deg" posY="1rem"
              bulletTwo={"backend functionality with cards"}
              bulletThree={"minor webpage layout changes & addition of NavBar"}
              onClick={() => setImplementation(2)}/>

              <StickyNote title={"Implementation #3"} 
              bulletOne={"overhaul of colour scheme and layout"} rotation="10deg" posY="5rem"
              bulletTwo={"expanded matches to include more teams"}
              bulletThree={"added a table to the profile page"}
              onClick={() => setImplementation(3)}/>

              <StickyNote title={"Current Implementation"} 
              bulletOne={"changed NavBar layout"} rotation="-10deg"
              bulletTwo={"revamped the colour scheme of the website and added 'teams' page"}
              bulletThree={"added login and signup functionality"}
              onClick={() => setImplementation(4)}/>
            </div>
          )}
          {implementation == 1 && (
            <><div className="sm:mx-[2rem] sm:my-[2rem] m-[1rem]">
              <p>{D2} <br />Here is an image of what the first implementation of the cards looked like:</p>
            </div>
            <div className="flex sm:flex-row sm:mx-[4rem] sm:gap-[2rem] flex-wrap">
              <img src={card} className={`${imgBorder}`}></img>
              <p className="m-[1rem]">While setting up a very basic design and layout for the cards, I also mapped basic routing for both a 'profile' page and a 'login' page.
                <br />I then spent more time on further developing the card, adding the following features:
                <div className="mx-[1rem]">
                  <li>Card colours match that of their respective team icon</li>
                  <li>Cards became a part of a 'teamBanner' component</li>
                </div>
              <img src={img2} className={imgBorder}></img>
              </p>
            </div>
            <div className="flex flex-col m-[1rem]">
              <p className="self-center">Finally, I decided to add a NavBar and do some minor styling to the overall webpage, I was trying to express some creativity with an 'edgy' design</p>
              <img src={img3} className={imgBorder}></img>
              <i className="text-sm text-center">*I retroactively took this screenshot so the premier league team that usually renders in is not included in the current dataset</i>
            </div>
            </>
          )}
          {implementation == 2 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <div className="flex flex-col items-center">
              <p className="sm:mx-[2rem] mx-[1rem] mb-[1rem]">Here I overhauled the layout and colour scheme of the website as well as allowed the live matches to display games beyond just Arsenal matches.</p>
              <img src={img4} className={imgBorder}></img>
              <p className="sm:mx-[7rem] my-[1rem] mx-[1rem]">Additionally, I added a 'profile' page which displays a prediction table showcasing a history of the users most recent predictions, as well a
                'net xG' rating, which is a metric one can use to assess how accurate their predictions are.
              </p>
              <img src={img5} className={imgBorder}></img>
            </div>
            <h2 className="m-[1rem] text-2xl font-bold">Backend:</h2>
            <div className="flex sm:flex-row gap-[1rem] justify-around m-[1rem] flex-col">
              <img src={be1} className={imgBorder}></img>
              <img src={be2} className={imgBorder}></img>
            </div>
            <p className="text-center sm:mx-[6rem] mx-[1rem]">I also set up the backend data structures and endpoints, so that the matches could be displayed with their relevant data as well as setting
              up the prediction class for when the user makes a prediction.
            </p>
            </>
          )}
          {implementation == 3 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <div className="flex flex-col items-center">
              <p className="sm:mx-[2rem] mx-[1rem] mb-[1rem]">Here I overhauled the layout and colour scheme of the website as well as allowed the live matches to display games beyond just Arsenal matches.</p>
              <img src={img6} className={imgBorder}></img>
              <p className="sm:mx-[7rem] my-[1rem] mx-[1rem]">Additionally, I added a 'profile' page which displays a prediction table showcasing a history of the users most recent predictions, as well a
                'net xG' rating, which is a metric one can use to assess how accurate their predictions are.
              </p>
              <img src={img7} className={imgBorder}></img>
            </div>
            <h2 className="m-[1rem] text-2xl font-bold">Backend:</h2>
            <div className="flex sm:flex-row gap-[1rem] justify-around m-[1rem] flex-col">
              <img src={be3} className={imgBorder}></img>
              <img src={be4} className={imgBorder}></img>
            </div>
            <p className="text-center sm:mx-[6rem] mx-[1rem]">I also set up the backend data structures and endpoints, so that the matches could be displayed with their relevant data as well as setting
              up the prediction class for when the user makes a prediction.
            </p>
            </>
          )}
          {implementation == 4 && (
            <><div className="my-[1rem] flex flex-col gap-[1rem]">
              <img src={img8} className={imgBorder}></img>
              <img src={img9} className={imgBorder}></img>
              <img src={cardZoom} className={imgBorder}></img>
              <img src={img10} className={imgBorder}></img>
              <img src={img11} className={imgBorder}></img>
              <img src={img12} className={imgBorder}></img>
            </div>
            </>
          )}
          <Test onClick={() => setImplementation(0)}/>
        </section>
        <section className="flex flex-col m-[1rem]">
          <h2 className="font-bold underline text-2xl">Outcome:</h2>
          <p>{O2}</p>
        </section>
        <section className="flex flex-col m-[1rem]">
          <h2 className="font-bold underline text-2xl">Tools & Repo:</h2>
          <li className="ml-[1rem]">React</li>
          <li className="ml-[1rem]">JavaScript</li>
          <li className="ml-[1rem]">Axios</li>
          <li className="ml-[1rem]">React-router</li>
          <li className="ml-[1rem]">Framer-motion</li>
          <li className="ml-[1rem]">Git</li>
          <li className="ml-[1rem]">Tailwindcss</li>
          <li className="ml-[1rem]">Vite</li>
          <li className="ml-[1rem]">Cheerio</li>
          <li className="ml-[1rem]">Mongodb</li>
          <li className="ml-[1rem]">Cors</li>
          <li className="ml-[1rem]">Express</li>
          <li className="ml-[1rem]">bcrypt</li>
          <Link to="https://github.com/SmithNJ13/PredictionSite" className="font-bold text-center">GitHub repository</Link>
        </section>
        <ScrollTo />
      </Main>
    </div>
  )
}

export default PLP
