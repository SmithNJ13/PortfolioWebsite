import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/catvdog.jpg"
import img2 from "../assets/catvdog.jpg"

const DA = ({returnState}) => {
  const string = "🡼"
  return (
    <div>
      <main id="mainBody" className="mx-auto text-stalelime flex flex-col justify-center items-center h-screen overflow-hidden py-[1rem]">
        <div id="content" className="overflow-y-scroll bg-sherwood rounded-2xl border-[1px] border-stalelime w-[55vw] my-[1rem] py-[2rem] z-[99]">
          <h2 className="text-4xl text-stalelime hover:text-ivory hover:cursor-pointer hover:bg-zinc-800 rounded-[10rem] bg-slate w-min h-min p-[3px] mx-[0.5rem] mt-[-1.5rem] text-center justify-center align-center self-center" onClick={returnState}>{string}</h2>
          <section className="h-auto w-auto font-bold flex flex-row text-4xl px-[5rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="border-b-[1px] border-ivory rounded">Data Analysis</h1>
            <h1 className="text-2xl text-center"></h1>
            <h2 className="text-sm text-ivory hover:underline hover:cursor-pointer"><Link to="">link_to_notebook</Link></h2>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Background:</h2>
            <p className="mx-[1rem]">This is a Background Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque officiis temporibus, impedit voluptatum, quaerat totam recusandae cupiditate laboriosam mollitia eveniet at nemo sed quis sit dolore. Facere fuga dicta doloremque.</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">The Questions:</h2>
            <p className="mx-[1rem]"></p>
            <li className="ml-[2rem]">Question1</li>
            <li className="ml-[2rem]">Question2</li>
            <li className="ml-[2rem]">Question3</li>
            <li className="ml-[2rem]">Question4</li>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Data Sourcing:</h2>
            <p>Description of data source</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Data Cleaning:</h2>
            <p>Description of cleaning</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Visualisation:</h2>
            <img src={img1} className="w-[65%] self-start border-stalelime border-[1px] rounded-[1rem] m-[1rem] ml-[3rem]"></img>
            <img src={img2} className="w-[65%] self-end border-stalelime border-[1px] rounded-[1rem] m-[1rem] mr-[3rem]"></img>
            <p>explanation of graphs, cats are cool</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Conclusion:</h2>
            <p>In summary this is a conclusion Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis laboriosam quia, impedit, placeat expedita sit doloribus obcaecati quo enim accusantium eveniet ab laudantium unde possimus. Quaerat numquam consectetur atque.</p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default DA
