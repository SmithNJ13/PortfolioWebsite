import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../../components/Main'

const HomePage = () => {
  return (
      <>
        <Main>
            <section className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center">◆ ABOUT ME ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
              <p className="mt-[1rem] sm:text-xl text-base">Hello and welcome! Thanks for stopping by, my name is Nathan. Ever since I was young, gaming has been a passion of mine. That passion led me to pursue <span className="text-ivory underline">Computer Science</span> at University. Despite the challenges post-graduation, I stayed dedicated, working on various <span className="text-ivory underline">projects</span> – including this <span className="text-ivory underline"><Link to="https://github.com/SmithNJ13/PortfolioWebsite">website</Link></span>. Feel free to explore and check out what I've accomplished!</p>
            </section>

            <section className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center w-[16rem]">◆ TECHNICAL SKILLS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
            <div className="mt-[2rem] sm:text-center flex sm:flex-row sm:gap-[6rem] gap-[1rem] sm:flex-nowrap flex-wrap mx-[1rem] sm:justify-evenly">
              <div className="sm:w-[12rem] w-[8rem] text-center">
                <ul className="sm:text-3xl text-xl">Languages</ul>
                <div className="flex flex-col text-start sm:text-xl text-base items-center text-ivory my-[1rem]">
                  <li className="w-[3rem]">JavaScript</li>
                  <li className="w-[3rem]">Python</li>
                  <li className="w-[3rem]">CSS</li>
                  <li className="w-[3rem]">HTML</li>
                  <li className="w-[3rem]">C#</li>
                </div>
              </div>
              <div className="sm:w-[12rem] w-[8rem] text-center">
                <ul className="sm:text-3xl text-xl">Libraries</ul>
                <div className="flex flex-col text-start sm:text-xl text-base items-center text-ivory my-[1rem]">
                  <li className="w-[3rem]">React</li>
                  <li className="w-[3rem]">Redux</li>
                  <li className="w-[3rem]">matplotlib</li>
                  <li className="w-[3rem]">seaborn</li>
                  <li className="w-[3rem]">numpy</li>
                  <li className="w-[3rem]">pandas</li>
                </div>
              </div>
              <div className="sm:w-[12rem] w-[8rem] text-center">
                <ul className="sm:text-3xl text-xl">Frameworks</ul>
                <div className="flex flex-col text-start sm:text-xl text-base items-center text-ivory my-[1rem]">
                  <li className="w-[3rem]">Vite</li>
                  <li className="w-[3rem]">Docker</li>
                  <li className="w-[3rem]">Tailwindcss</li>
                  <li className="w-[3rem]">Bootstrap</li>
                </div>
              </div>
              <div className="sm:w-[12rem] w-[8rem] text-center">
                <ul className="sm:text-3xl text-xl">Software</ul>
                <div className="flex flex-col text-start sm:text-xl text-base items-center text-ivory my-[1rem]">
                  <li className="w-[3rem]">Photoshop</li>
                  <li className="w-[3rem]">Unity Engine</li>
                  <li className="w-[3rem]">DaVinci Resolve</li>
                  <li className="w-[3rem]">Capcut</li>
                </div>
              </div>
            </div>
            </section>

            <section className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center">◆ PROJECTS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
            <div className="flex flex-col self-start items-start">
              <Link to={"da"}><ul className="hover:text-white hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">Data Analysis</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">Data analysis of... ...something</li>
              <Link to={"plp"}><ul className="hover:text-white hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">Premier League Predictions - PLP</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">A full-stack prediction application, where users can sign up, login and create predictions on various football matches, view their prediction history as well as relevant team information</li>
              <Link to={"szndchef"}><ul className="hover:text-white hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">SzndChef</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">A full-stack recipe web application, in which users can create an account, login and browse user created recipes as well as submit their own</li>
              <Link to={"fyp"}><ul className="hover:text-white hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">Final Year Project - C#</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">Information on my final year project</li>
            </div>
            </section>

            <section className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center">◆ CONTACT ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
            <div className="mt-[1rem] text-xl text-center flex flex-row gap-[1rem]">
              <p className="hover:text-white hover:cursor-pointer" onClick={() => window.location = "mailto:smithnathan96@live.co.uk"}> Email </p>
              <p>●</p>
              <p className="hover:text-white"><Link to="https://www.linkedin.com/in/nsmith96/"> LinkedIn </Link></p>
              <p>●</p>
              <p className="hover:text-white"><Link to="https://github.com/SmithNJ13"> GitHub </Link></p>
            </div>
            </section>
        </Main>
      </>
  )
}

export default HomePage
