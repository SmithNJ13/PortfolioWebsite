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

import { Link } from 'react-router-dom'
import { G2, D2, D2_1, O2} from '../yapfile.js'
import StickyNote from '../components/StickyNote/index.jsx'
import Test from '../components/Test/test.jsx'
import Main from '../components/Main/index.jsx'

const PLP = () => {
  const string2 = "[ P.L.P ]"
  const [implementation, setImplementation] = useState(0)

 return (
    <div>
      <Main>
        <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]">
          <h1 className="">Premier League Predictions</h1>
          <h1 className="text-2xl border-b-[1px] border-ivory rounded w-[30rem] text-center">{string2}</h1>
          <h2 className="text-sm text-ivory hover:underline hover:cursor-pointer"><Link to="https://szndchef.netlify.app/">protocol_linkto_</Link></h2>
        </section>
        <section className="flex flex-col m-[1rem]">
          <h2 className="font-bold underline text-2xl">Goal:</h2>
          <p className="mx-[1rem]">{G2}</p>
        </section>
        <section className="flex flex-col m-[1rem] my-[4rem]">
          <h2 className="font-bold underline text-2xl">Development:</h2>
          <p className="mx-[1rem]">Development came in many stages, you can click on one of the <span className="text-ivory underline font-bold">sticky notes</span> below to choose which implementation you would like details on:</p>
          {implementation == 0 && (
            <div id="notes" className="flex flex-wrap my-[4rem] mx-[4rem] gap-[8rem] justify-evenly">
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
              bulletOne={"changed NavBar layout"} rotation="-10deg" posX="-4rem"
              bulletTwo={"revamped the colour scheme of the website and added 'teams' page"}
              bulletThree={"added login and signup functionality"}
              onClick={() => setImplementation(4)}/>
            </div>
          )}
          {implementation == 1 && (
            <><div className="mx-[2rem] my-[2rem]">
              <p>{D2} <br />Here is an image of what the first implementation of the cards looked like:</p>
            </div>
            <div className="flex flex-row mx-[4rem] gap-[2rem]">
              <img src={card} className="w-[19rem] h-[27rem] rounded border-stalelime border-[2px]"></img>
              <p className="m-[1rem]">While setting up a very basic design and layout for the cards, I also mapped basic routing for both a 'profile' page and a 'login' page.
                <br />I then spent more time on further developing the card, adding the following features:
                <div className="mx-[1rem]">
                  <li>Card colours match that of their respective team icon</li>
                  <li>Cards became a part of a 'teamBanner' component</li>
                </div>
              <img src={img2} 
              className="flex w-[45rem] h-[23rem] rounded border-stalelime border-[2px] mx-[1rem] mt-[2rem] justify-evenly"></img>
              </p>
            </div>
            <div className="flex flex-col m-[1rem]">
              <p className="self-center">Finally, I decided to add a NavBar and do some minor styling to the overall webpage, I was trying to express some creativity with an 'edgy' design</p>
              <img src={img3} className="w-[95%] h-[100%] rounded border-stalelime border-[2px] mx-auto mt-[1rem] self-center"></img>
              <i className="text-sm text-center">*I retroactively took this screenshot so the premier league team that usually renders in is not included in the current dataset</i>
            </div>
            </>
          )}
          {implementation == 2 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <div className="flex flex-col items-center">
              <p className="mx-[2rem]">Here I overhauled the layout and colour scheme of the website as well as allowed the live matches to display games beyond just Arsenal matches.</p>
              <img src={img4} className="w-[80%] h-auto rounded border-stalelime border-[2px] my-[1rem]"></img>
              <p className="mx-[7rem] my-[1rem]">Additionally, I added a 'profile' page which displays a prediction table showcasing a history of the users most recent predictions, as well a
                'net xG' rating, which is a metric one can use to assess how accurate their predictions are.
              </p>
              <img src={img5} className="w-[80%] h-auto rounded border-stalelime border-[2px] my-[1rem]"></img>
            </div>
            <h2 className="m-[1rem] text-2xl font-bold">Backend:</h2>
            <div className="flex flex-row gap-[1rem] justify-around m-[1rem]">
              <img src={be1} className="w-[35rem] h-[17rem]"></img>
              <img src={be2} className="w-[35rem] h-[17rem]"></img>
            </div>
            <p className="text-center mx-[6rem]">I also set up the backend data structures and endpoints, so that the matches could be displayed with their relevant data as well as setting
              up the prediction class for when the user makes a prediction.
            </p>
            </>
          )}
          {implementation == 3 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <div className="flex flex-col items-center">
              <p className="mx-[2rem]">Here I overhauled the layout and colour scheme of the website as well as allowed the live matches to display games beyond just Arsenal matches.</p>
              <img src={img6} className="w-[80%] h-auto rounded border-stalelime border-[2px] my-[1rem]"></img>
              <p className="mx-[7rem] my-[1rem]">Additionally, I added a 'profile' page which displays a prediction table showcasing a history of the users most recent predictions, as well a
                'net xG' rating, which is a metric one can use to assess how accurate their predictions are.
              </p>
              <img src={img7} className="w-[80%] h-auto rounded border-stalelime border-[2px] my-[1rem]"></img>
            </div>
            <h2 className="m-[1rem] text-2xl font-bold">Backend:</h2>
            <div className="flex flex-row gap-[1rem] justify-around m-[1rem]">
              <img src={be3} className="w-[35rem] h-[17rem]"></img>
              <img src={be4} className="w-[35rem] h-[17rem]"></img>
            </div>
            <p className="text-center mx-[6rem]">I also set up the backend data structures and endpoints, so that the matches could be displayed with their relevant data as well as setting
              up the prediction class for when the user makes a prediction.
            </p>
            </>
          )}
          {implementation == 4 && (
            <><div>
              <img src={img8}></img>
              <img src={img9}></img>
              <img src={cardZoom}></img>
              <img src={img10}></img>
              <img src={img11}></img>
              <img src={img12}></img>
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
          <li className="ml-[1rem]">Tool_One</li>
          <li className="ml-[1rem]">Tool_Two</li>
          <p>Repository_Link</p>
        </section>
      </Main>
    </div>
  )
}

export default PLP
