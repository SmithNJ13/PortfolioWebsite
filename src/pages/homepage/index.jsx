import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
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
            <Link to={"szndchef"}><ul className="hover:text-white hover:cursor-pointer text-2xl underline mt-[1rem]">SzndChef</ul></Link>
            <li className="text-xl text-ivory w-[44rem] ml-[1rem]">A full-stack recipe web application, in which users can create an account, login and browse user created recipes as well as submit their own</li>
            <Link to={"plp"}><ul className="hover:text-white hover:cursor-pointer text-2xl underline mt-[1rem]">Premier League Predictions - PLP</ul></Link>
            <li className="text-xl text-ivory w-[44rem] ml-[1rem]">A full-stack prediction application, where users can sign up, login and create predictions on various football matches, view their prediction history as well as relevant team information</li>
            <Link to={"da"}><ul className="hover:text-white hover:cursor-pointer text-2xl underline mt-[1rem]">Data Analysis</ul></Link>
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
  )
}

export default HomePage
