import React from 'react'
import img1 from "../assets/PredictionLive.png"
import img2 from "../assets/PredictionTable.png"
import { Link } from 'react-router-dom'
import { G2, D2, D2_1, O2} from '../yapfile.js'

const PLP = ({returnState}) => {
  const string = "🡼"
  const string2 = "[ P.L.P ]"
 return (
    <div>
      <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-screen overflow-hidden py-[1rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime w-[55vw] my-[1rem] py-[2rem]">
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
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Development:</h2>
            <p className="mx-[1rem]">{D2}</p>
            <li className="ml-[2rem]">Display live Arsenal matches</li>
            <li className="ml-[2rem]">Allow users to predict on xG</li>
            <li className="ml-[2rem]">Allow users to sign up and login</li>
            <li className="ml-[2rem]">Display a history of the users previous predictions</li>
            <img src={img1} className="w-[65%] self-start border-stalelime border-[1px] rounded-[1rem] m-[1rem] ml-[3rem]"></img>
            <p className="my-[2rem] mx-[1rem]">{D2_1}</p>
            <img src={img2} className="w-[65%] self-end border-stalelime border-[1px] rounded-[1rem] m-[1rem] mr-[3rem]"></img>
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
