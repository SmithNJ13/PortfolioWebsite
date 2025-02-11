import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../../components/Main'

const HomePage = () => {
  return (
      <>
        <Main>
            <section className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center">◆ ABOUT ME ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
              <p className="mt-[1rem] sm:text-xl text-base text-ivory">Hello and welcome! Thanks for stopping by, my name is Nathan. Ever since I was young, gaming has been a passion of mine. That passion led me to pursue Computer Science at University. Despite the challenges post-graduation, I stayed dedicated, working on various projects – including this <span className="text-stalelime underline hover:text-azure"><Link to="https://github.com/SmithNJ13/PortfolioWebsite">website</Link></span>. Feel free to explore and check out what I've accomplished!</p>
            </section>

            <section className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center sm:w-[24rem] w-[16rem]">◆ TECHNICAL SKILLS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
            <div className="mt-[2rem] sm:text-center flex sm:flex-row sm:gap-[6rem] gap-[1px] sm:flex-nowrap flex-wrap mx-[1rem] sm:justify-evenly justify-evenly">
              <div className="sm:w-[12rem] w-[8rem]">
                <div className="flex flex-col sm:text-xl text-base items-center my-[1rem]">
                <ul className="sm:text-3xl text-xl text-stalelime list-disc text-center">Languages
                  <div className="mt-[1rem] ml-[1.1rem] text-start">
                    <li className="w-auto sm:text-xl text-base text-ivory">JavaScript</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">Python</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">CSS</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">HTML</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">C#</li>
                  </div>
                </ul>
                </div>
              </div>
              <div className="sm:w-[12rem] w-[8rem]">
                <div className="flex flex-col sm:text-xl text-base items-center my-[1rem]">
                  <ul className="sm:text-3xl text-xl text-stalelime list-disc text-center">Libraries
                    <div className="mt-[1rem] ml-[1.1rem] text-start">
                      <li className="w-auto sm:text-xl text-base text-ivory">React</li>
                      <li className="w-auto sm:text-xl text-base text-ivory">Redux</li>
                      <li className="w-auto sm:text-xl text-base text-ivory">matplotlib</li>
                      <li className="w-auto sm:text-xl text-base text-ivory">seaborn</li>
                      <li className="w-auto sm:text-xl text-base text-ivory">numpy</li>
                      <li className="w-auto sm:text-xl text-base text-ivory">pandas</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="sm:w-[12rem] w-[8rem]">
                <div className="flex flex-col sm:text-xl text-base items-center my-[1rem]">
                <ul className="sm:text-3xl text-xl text-stalelime list-disc text-center">Software
                  <div className="mt-[1rem] ml-[1.1rem] text-start">
                    <li className="w-auto sm:text-xl text-base text-ivory">Photoshop</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">Unity Engine</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">DaVinci Resolve</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">Capcut</li>
                  </div>
                </ul>
                </div>
              </div>
              <div className="sm:w-[12rem] w-[8rem]">
                <div className="flex flex-col sm:text-xl text-base items-center my-[1rem]">
                <ul className="sm:text-3xl text-xl text-stalelime list-disc text-center">Frameworks
                  <div className="mt-[1rem] ml-[1.1rem] text-start">
                    <li className="w-auto sm:text-xl text-base text-ivory">Vite</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">Docker</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">Tailwindcss</li>
                    <li className="w-auto sm:text-xl text-base text-ivory">Bootstrap</li>
                  </div>
                </ul>
                </div>
              </div>
            </div>
            </section>

            <section id="projects" className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center">◆ PROJECTS ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
            <div className="flex flex-col self-start items-start">
              <Link to={"da"}><ul className="hover:text-azure hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">Data Analysis</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">WIP. deadline 21st Feb</li>
              <Link to={"plp"}><ul className="hover:text-azure hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">Premier League Predictions - PLP</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">A full-stack prediction application, where users can sign up, login and create predictions on various football matches, view their prediction history as well as relevant team information</li>
              <Link to={"szndchef"}><ul className="hover:text-azure hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">SzndChef</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">A full-stack recipe web application, in which users can create an account, login and browse user created recipes as well as submit their own</li>
              <Link to={"fyp"}><ul className="hover:text-azure hover:cursor-pointer sm:text-2xl text-xl underline mt-[1rem]">Final Year Project - C#</ul></Link>
              <li className="sm:text-xl text-basetext-xl text-ivory sm:w-[44rem] ml-[1rem]">Information on my final year project</li>
            </div>
            </section>

            <section className="h-auto w-auto font-bold sm:px-[5rem] sm:py-[1rem] flex flex-col items-center sm:mt-[2rem] p-[1rem]">
            <h1 className="relative sm:text-4xl text-2xl text-center">◆ CONTACT ◆<span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-ivory rounded"></span></h1>
            <div className="mt-[1rem] text-xl text-center flex flex-row gap-[1rem]">
              <p className="hover:text-azure underline hover:cursor-pointer" onClick={() => window.location = "mailto:smithnathan96@live.co.uk"}> Email </p>
              <p className="text-white">●</p>
              <p className="hover:text-azure underline"><Link to="https://www.linkedin.com/in/nsmith96/"> LinkedIn </Link></p>
              <p className="text-white">●</p>
              <p className="hover:text-azure underline"><Link to="https://github.com/SmithNJ13"> GitHub </Link></p>
            </div>
            </section>
        </Main>
      </>
  )
}

export default HomePage
