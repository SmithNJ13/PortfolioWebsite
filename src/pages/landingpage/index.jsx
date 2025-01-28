import "./style.css"
import TextAnimation from "../../components/TextAnimation";
import { useEffect, useState } from "react";
import Moon from "../../components/Moon/index"
import Star from "../../components/Star/index"
import WavesAnimation from "../../components/WavesAnimation"
import { SzndChef, PLP, DA } from "../../projects/exports";


const LandingPage = () => {
  const [complete, setComplete] = useState(false)
  const [visible, setVisible] = useState(true)
  const [loadMain, setLoadMain] = useState(false)
  const [project1, loadProject1] = useState(false)
  const [project2, loadProject2] = useState(false)
  const [project3, loadProject3] = useState(false)


  const returnState = () => {
    setLoadMain(true)
    loadProject1(false)
    loadProject2(false)
    loadProject3(false)
    console.log("Function called!")
  }

  async function handleClick() {
    setVisible(false)
    setLoadMain(true)
  }

  useEffect(() => {
  }, [complete])

  return (
    <>
    {visible && (
    <main className="mx-auto text-green-500 flex flex-col justify-center items-center h-screen">
      <section id="text" className="font-bold flex flex-row text-4xl">
        <TextAnimation onComplete={() => setComplete(true)}/>
      </section>
      <section>
        {complete && <button className="w-[4rem] h-auto mt-[2rem] text-green-500 font-bold text-2xl text-lightemerald hover:text-white"
        onClick={handleClick}> Enter </button>}
      </section>
    </main>
    )}
    {loadMain && (
      <>
      <Moon />
      <div id="Star" className="absolute top-[3vh] left-[2vw] rotate-[10deg]"><Star /></div>
      <div id="Star" className="absolute top-[37vh] left-[4vw] rotate-[2deg]"><Star /></div>
      <div id="Star" className="absolute top-[20vh] left-[18vw] rotate-[7deg]"><Star /></div>
      <div id="Star" className="absolute top-[6vh] right-[9vw] rotate-[-4deg]"><Star /></div>
      <div id="Star" className="absolute top-[17vh] right-[16vw] rotate-[-13deg]"><Star /></div>
      <div id="Star" className="absolute top-[41vh] right-[17vw] rotate-[11deg]"><Star /></div>
      <div id="Star" className="absolute top-[30vh] right-[3vw] rotate-[-22deg]"><Star /></div>
      <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-screen overflow-hidden py-[1rem]">
        <div id="content" className="overflow-y-hidden bg-sherwood rounded-2xl border-[1px] border-stalelime w-[55vw] my-[1rem] py-[2rem]">
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]">
          <h1 className="relative text-4xl">◆ ABOUT ME ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black rounded"></span></h1>
            <p className="mt-[1rem] text-xl">Hello and welcome! Thanks for stopping by, my name is Nathan. Ever since I was young, gaming has been a passion of mine. That passion led me to pursue <span className="text-ivory underline">Computer Science</span> at University. Despite the challenges post-graduation, I stayed dedicated, working on various <span className="text-ivory underline">projects</span> – including this <span className="text-ivory underline">website</span>. Feel free to explore and check out what I've accomplished!</p>
          </section>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[1rem]">
          <h1 className="relative text-4xl">◆ TECHNICAL SKILLS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black rounded"></span></h1>
          </section>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[1rem]">
          <h1 className="relative text-4xl">◆ PROJECTS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black rounded"></span></h1>
          <div>
            <ul className="hover:text-white hover:cursor-pointer" onClick={() => {loadProject1(true), setLoadMain(false)}}>SzndChef</ul>
            <ul className="hover:text-white hover:cursor-pointer" onClick={() => {loadProject2(true), setLoadMain(false)}}>Premier League Predictions - PLP</ul>
            <ul className="hover:text-white hover:cursor-pointer" onClick={() => {loadProject3(true), setLoadMain(false)}}>Data Analysis</ul>
          </div>
          </section>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[1rem] mb-[2rem]">
          <h1 className="relative text-4xl">◆ CONTACT ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black rounded"></span></h1>
          <div>
            <p className="mt-[1rem] text-xl">Email</p>
            <p className="text-xl">LinkedIn</p>
            <p className="text-xl">GitHub</p>
          </div>
          </section>
        </div>
      </main>
      <WavesAnimation />
      </>
    )}
    {project1 && (
      <SzndChef returnState={returnState}/>
    )}
    {project2 && (
      <PLP returnState={returnState}/>
    )}
    {project3 && (
      <DA returnState={returnState}/>
    )}
    </>
  );
}

export default LandingPage
