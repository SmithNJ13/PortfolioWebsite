import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/catvdog.jpg"
import img2 from "../assets/catvdog.jpg"
import Main from '../components/Main'
import { imgBorder } from '../slayfile.js'

const DA = () => {
  return (
    <div>
      <Main>
          <section className="h-auto w-auto font-bold flex flex-row sm:px-[5rem] px-[1rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="sm:text-4xl text-3xl border-b-[1px] border-ivory rounded w-auto text-center">Data Analysis</h1>
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
            <p className="mx-[1rem]">Description of data source</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Data Cleaning:</h2>
            <p className="mx-[1rem]">Description of cleaning</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Visualisation:</h2>
            <img src={img1} className="w-[65%] self-start border-stalelime border-[1px] rounded-[1rem] m-[1rem] ml-[3rem]"></img>
            <img src={img2} className="w-[65%] self-end border-stalelime border-[1px] rounded-[1rem] m-[1rem] mr-[3rem]"></img>
            <p className="mx-[1rem]">explanation of graphs, cats are cool</p>
          </section>
          <section className="flex flex-col m-[1rem]">
            <h2 className="font-bold underline text-2xl">Conclusion:</h2>
            <p className="mx-[1rem]">In summary this is a conclusion Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis laboriosam quia, impedit, placeat expedita sit doloribus obcaecati quo enim accusantium eveniet ab laudantium unde possimus. Quaerat numquam consectetur atque.</p>
          </section>
      </Main>
    </div>
  )
}

export default DA
