import React from 'react'
import PredictionIMG1 from "../assets/PredictionLive.png"
import { Link } from 'react-router-dom'

const SzndChef = ({returnState}) => {
  const string = "🡼"
  return (
    <div>
      <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-screen overflow-hidden py-[1rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime w-[55vw] my-[1rem] py-[2rem]">
          <h2 className="text-4xl text-stalelime hover:text-ivory hover:cursor-pointer hover:bg-zinc-800 rounded-[10rem] bg-slate w-min h-min p-[3px] mx-[0.5rem] mt-[-1.5rem] text-center justify-center align-center self-center" onClick={returnState}>{string}</h2>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="border-b-[1px] border-ivory rounded">SzndChef</h1>
            <h2 className="text-sm text-ivory hover:underline hover:cursor-pointer"><Link to="https://szndchef.netlify.app/">https://szndchef.netlify.app/</Link></h2>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Goal:</h2>
            <p className="mx-[1rem]">The objective of this project was to build a full-stack web application that is deployed and accessible by anyone. The users that sign up will be able to login and
              browse through a variety of recipes, both default and user-created. They would also be able to comment their thoughts on each recipe, as well as favourite ones that they
              like. The core theme and selling point of this web application is the "seasonal" focus, being able to filter recipes by their ideal season.
              <br/>I.e. for winter, roasts and warm, hearty meals are recommended.
            </p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Development:</h2>
            <p className="mx-[1rem]">Initially the team was uncertain of what product we want to produce</p>
            <img src={PredictionIMG1} className="w-[70%] self-center border-stalelime border-[1px] rounded-[1rem] m-[1rem]"></img>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Outcome:</h2>
            <p>insert description of some kind... Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam odit nemo, neque repellendus exercitationem asperiores, laboriosam iure facilis aliquam ex quidem quod tempore sed! Facere totam temporibus quia sed.</p>
            <img src={PredictionIMG1} className="w-[70%] self-center border-stalelime border-[1px] rounded-[1rem] m-[1rem]"></img>
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

export default SzndChef
