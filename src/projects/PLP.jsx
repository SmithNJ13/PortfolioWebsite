import React, { useState } from 'react'
import img1 from "../assets/ProjectTwo/Image1.png"
import img2 from "../assets/ProjectTwo/Image2.png"
import { Link } from 'react-router-dom'
import { G2, D2, D2_1, O2} from '../yapfile.js'
import StickyNote from '../components/StickyNote/index.jsx'
import Test from '../components/Test/test.jsx'

const PLP = ({returnState}) => {
  const string = "🡼"
  const string2 = "[ P.L.P ]"
  const [implementation, setImplementation] = useState(0)

 return (
    <div>
      <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-screen overflow-hidden py-[1rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime w-[55vw] my-[1rem] py-[2rem] z-[99]">
          <h2 className="text-4xl text-stalelime hover:text-ivory hover:cursor-pointer hover:bg-zinc-800 rounded-[10rem] bg-slate w-min h-min p-[3px] mx-[0.5rem] mt-[-1.5rem] text-center justify-center align-center self-center" onClick={returnState}>{string}</h2>
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
              <div id="notes" className="flex flex-wrap my-[4rem] mx-[2.5rem] gap-[4rem] justify-evenly">
                <StickyNote title={"Implementation #1"} 
                bulletOne={"card functionality"} rotation="-10deg" 
                bulletTwo={"rudimentary routes (home/profile/login)"} 
                bulletThree={"basic graphical design"}
                onClick={() => setImplementation(1)}/>

                <StickyNote title={"Implementation #2"} 
                bulletOne={"basic card UI elements"} rotation="10deg" posY="-1rem"
                bulletTwo={"backend functionality with cards"}
                bulletThree={"minor webpage layout changes & addition of NavBar"}
                onClick={() => setImplementation(2)}/>

                <StickyNote title={"Implementation #3"} 
                bulletOne={"overhaul of colour scheme and layout"} rotation="-10deg"
                bulletTwo={"expanded matches to include more teams"}
                bulletThree={"added a table to the profile page"}
                onClick={() => setImplementation(3)}/>

                <StickyNote title={"Implementation #4"} 
                bulletOne={"changed NavBar layout"} rotation="-10deg"
                bulletTwo={"revamped the colour scheme of the website and added 'teams' page"}
                bulletThree={"added login and signup functionality"}
                onClick={() => setImplementation(4)}/>

                <StickyNote title={"Current Implementation"} 
                bulletOne={"massive UI changes"} rotation="10deg"
                bulletTwo={"teams page displays elements"}
                bulletThree={"more predictions and revamp of backend data structure"}
                onClick={() => setImplementation(5)}/>
              </div>
            )}
            {implementation == 1 && (
              <><div className="mx-[1rem] my-[2rem]">
                <p>{D2} <br />Here is an image of what the first implementation of the cards looked like:</p>
              </div>
              <div className="flex flex-row mx-[4rem] gap-[1rem]">
                <img src={img1} className="w-[16rem] h-[22rem] rounded border-stalelime border-[2px]"></img>
                <p className="mt-[6rem]">Yapping yap yap!</p>
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
        </div>
      </main>
    </div>
  )
}

export default PLP
