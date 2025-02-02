import "./style.css"
import TextAnimation from "../../components/TextAnimation";
import { useEffect, useState } from "react";
import Moon from "../../components/Moon/index"
import Star from "../../components/Star/index"
import WavesAnimation from "../../components/WavesAnimation"
import { SzndChef, PLP, DA } from "../../projects/exports";
import { Link } from "react-router-dom";

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
    <main className="mx-auto flex flex-col justify-center items-center h-screen">
      <section id="text" className="font-bold flex flex-row text-4xl">
        <TextAnimation onComplete={() => setComplete(true)}/>
      </section>
      <section>
        {!complete && <button className="w-[4rem] h-auto mt-[2rem] font-bold text-2xl border-b-[1px] border-transparent text-slate">_</button>}
      </section>
      <section>
        {complete && <button className="w-[8rem] h-auto mt-[2rem] font-bold text-2xl text-lightemerald border-b-[1px] hover:text-white"
        onClick={handleClick}>E N T E R</button>}
      </section>
    </main>
    )}
    <Moon />
    <div id="Star1" className="absolute top-[3vh] left-[2vw] rotate-[10deg]"><Star /></div>
    <div id="Star2" className="absolute top-[37vh] left-[4vw] rotate-[2deg]"><Star /></div>
    <div id="Star3" className="absolute top-[4vh] left-[20vw] rotate-[8deg]"><Star /></div>
    <div id="Star4" className="absolute top-[6vh] right-[6vw] rotate-[-4deg]"><Star /></div>
    <div id="Star5" className="absolute top-[17vh] right-[15vw] rotate-[-13deg]"><Star /></div>
    <div id="Star6" className="absolute top-[41vh] right-[12vw] rotate-[11deg]"><Star /></div>
    <div id="Star7" className="absolute top-[30vh] right-[3vw] rotate-[-22deg]"><Star /></div>
    <WavesAnimation />
    {loadMain && (
      <>
      <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-[95vh] overflow-hidden py-[4rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime w-[65vw] my-[1rem] py-[2rem] z-[99]">
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]">
          <h1 className="relative text-4xl">◆ ABOUT ME ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
            <p className="mt-[1rem] text-xl">Hello and welcome! Thanks for stopping by, my name is Nathan. Ever since I was young, gaming has been a passion of mine. That passion led me to pursue <span className="text-ivory underline">Computer Science</span> at University. Despite the challenges post-graduation, I stayed dedicated, working on various <span className="text-ivory underline">projects</span> – including this <span className="text-ivory underline"><Link to="https://github.com/SmithNJ13/PortfolioWebsite">website</Link></span>. Feel free to explore and check out what I've accomplished!</p>
          </section>

          <section className="h-auto w-auto font-bold text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[1rem]">
          <h1 className="relative text-4xl">◆ TECHNICAL SKILLS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
          <div className="mt-[2rem] text-center flex flex-row gap-[10rem]">
            <div>
              <ul className="text-3xl">Languages</ul>
              <div className="flex flex-col text-start text-xl text-ivory my-[1rem]">
                <li>JavaScript</li>
                <li>Python</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>C#</li>
              </div>
            </div>
            <div>
              <ul className="text-3xl">Libraries</ul>
              <div className="flex flex-col text-start text-xl text-ivory my-[1rem]">
                <li>React</li>
                <li>Redux</li>
                <li>matplotlib</li>
                <li>seaborn</li>
                <li>numpy</li>
                <li>pandas</li>
              </div>
            </div>
            <div>
              <ul className="text-3xl">Frameworks</ul>
              <div className="flex flex-col text-start text-xl text-ivory my-[1rem]">
                <li>Vite</li>
                <li>Docker</li>
                <li>Tailwindcss</li>
                <li>Bootstrap</li>
              </div>
            </div>
            <div>
              <ul className="text-3xl">Software</ul>
              <div className="flex flex-col text-start text-xl text-ivory my-[1rem]">
                <li>Photoshop</li>
                <li>Unity Engine</li>
                <li>DaVinci Resolve</li>
                <li>Capcut</li>
              </div>
            </div>
          </div>
          </section>

          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[1rem]">
          <h1 className="relative text-4xl">◆ PROJECTS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
          <div className="flex flex-col self-start items-start">
            <ul className="hover:text-white hover:cursor-pointer text-2xl underline mt-[1rem]" onClick={() => {loadProject1(true), setLoadMain(false)}}>SzndChef</ul>
            <li className="text-xl text-ivory w-[44rem] ml-[1rem]">A full-stack recipe web application, in which users can create an account, login and browse user created recipes as well as submit their own</li>
            <ul className="hover:text-white hover:cursor-pointer text-2xl underline mt-[1rem]" onClick={() => {loadProject2(true), setLoadMain(false)}}>Premier League Predictions - PLP</ul>
            <li className="text-xl text-ivory w-[44rem] ml-[1rem]">A full-stack prediction application, where users can sign up, login and create predictions on various football matches, view their prediction history as well as relevant team information</li>
            <ul className="hover:text-white hover:cursor-pointer text-2xl underline mt-[1rem]" onClick={() => {loadProject3(true), setLoadMain(false)}}>Data Analysis</ul>
            <li className="text-xl text-ivory w-[44rem] ml-[1rem]">Data analysis of... ...something</li>
            <ul className="hover:text-white hover:cursor-pointer text-2xl underline mt-[1rem]" onClick={() => console.log("Not implemented yet.")}>Final Year Project - C#</ul>
            <li className="text-xl text-ivory w-[44rem] ml-[1rem]">Information on my final year project</li>
          </div>
          </section>

          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[1rem] mb-[2rem]">
          <h1 className="relative text-4xl">◆ CONTACT ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
          <div className="mt-[1rem] text-xl text-center flex flex-row gap-[1rem]">
            <p className="hover:text-white hover:cursor-pointer" onClick={() => window.location = "mailto:smithnathan96@live.co.uk"}> Email </p>
            <p>●</p>
            <p className="hover:text-white"><Link to="https://www.linkedin.com/in/nsmith96/"> LinkedIn </Link></p>
            <p>●</p>
            <p className="hover:text-white"><Link to="https://github.com/SmithNJ13"> GitHub </Link></p>
          </div>
          </section>

        </div>
      </main>
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
