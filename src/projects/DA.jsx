import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Main from '../components/Main'
import { imgBorder } from '../slayfile.js'
import superDF from "../assets/ProjectThree/DataFrameSuper.png"
import ScrollTo from '../components/ScrollToTop/index.jsx'
import { dataBackground, dataMergeCode } from '../yapfile.js'
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";

const DA = () => {

  useEffect(() => {
      Prism.highlightAll();
  }, []);
  
  return (
    <div>
      <Main>
          <section className="h-auto w-auto font-bold flex flex-row sm:px-[5rem] px-[1rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="sm:text-4xl text-3xl border-b-[1px] border-ivory rounded w-auto text-center">Data Analysis</h1>
            <h2 className="text-sm text-azure hover:text-ivory hover:underline hover:cursor-pointer"><Link to="">link_to_notebook</Link></h2>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Background:</h2>
            <p className="mx-[1rem] text-ivory">{dataBackground}</p>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">The Questions:</h2>
            <li className="ml-[2rem] text-ivory">Which team has scored the most goals in the past decade?</li>
            <li className="ml-[2rem] text-ivory">Which teams have had the most home wins vs. away wins?</li>
            <li className="ml-[2rem] text-ivory">Is there a correlation between the number of shots taken by a team and the number of goals they score?</li>
            <li className="ml-[2rem] text-ivory">Has fouling become more frequent over the years and what can one conclude from this?</li>
            <li className="ml-[2rem] text-ivory">What factors impact a teams ability to win the most?</li>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Data Sourcing:</h2>
            <p className="mx-[1rem] text-ivory">For this dataset I went to <Link to="https://www.kaggle.com/datasets/saife245/english-premier-league" className="text-stalelime underline font-bold hover:text-azure">kaggle.com</Link> and retrieved the relevant data files for my scope, so all the years between 2014 and 2024.</p>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Data Cleaning:</h2>
            <p className="mx-[1rem] text-ivory">I performed some checks to see if there were any irregularities in the data or data points that are not relevant to the scope of my questions.</p>
            <div></div>
            <p className="mx-[1rem] text-ivory">Additionally, I decided to merge all of the files from the past decade into a massive 'super' dataFrame: </p>
            <div className="m-[1rem] text-sm">
              <pre className="w-max h-max self-start rounded-[1rem]">
                <code className="language-python">
                  {dataMergeCode}
                </code>
              </pre>
            </div>
            <img src={superDF} className="w-auto h-auto self-start border-stalelime border-[1px] rounded-[1rem] sm:m-[1rem]"></img>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Visualisation:</h2>
            <img className="w-[65%] self-start border-stalelime border-[1px] rounded-[1rem] m-[1rem] ml-[3rem]"></img>
            <img className="w-[65%] self-end border-stalelime border-[1px] rounded-[1rem] m-[1rem] mr-[3rem]"></img>
            <p className="mx-[1rem] text-ivory">Various strings of text explaining graphs...</p>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Conclusion:</h2>
            <p className="mx-[1rem] text-ivory">In summary this is a conclusion Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis laboriosam quia, impedit, placeat expedita sit doloribus obcaecati quo enim accusantium eveniet ab laudantium unde possimus. Quaerat numquam consectetur atque.</p>
          </section>
          <ScrollTo />
      </Main>
    </div>
  )
}

export default DA
