import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Main from '../components/Main'
import { imgBorder } from '../slayfile.js'
import superDF from "../assets/ProjectThree/DataFrameSuper.png"
import supertrimDF from "../assets/ProjectThree/DataFrameSuperTrim.png"
import completeDF from "../assets/ProjectThree/DataFrameComplete.png"
import ScrollTo from '../components/ScrollToTop/index.jsx'
import { dataBackground, dataMergeCode, premDF, cycleteam, findTotalGoals, ftgDesc} from '../yapfile.js'
import Prism, { languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import CodeBlock from '../components/CodeBlock/index.jsx'
import StickyNote from '../components/StickyNote/index.jsx'

const DA = () => {

  useEffect(() => {
      Prism.highlightAll();
  }, []);
  
  return (
    <div>
      <Main>
          <section className="h-auto w-auto font-bold flex flex-row sm:px-[5rem] px-[1rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="sm:text-4xl text-3xl border-b-[1px] border-ivory rounded w-auto text-center">Data Analysis</h1>
            <h2 className="text-sm text-azure hover:text-ivory hover:underline hover:cursor-pointer"><Link to="https://github.com/SmithNJ13/data_analysis/blob/main/analysis.ipynb">Data Analysis Notebook</Link></h2>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Background:</h2>
            <p className="mx-[1rem] text-ivory">{dataBackground}</p>
          </section>
          <section className="flex flex-col m-[2rem] sm:w-[66rem] w-auto">
            <h2 className="font-bold text-2xl">The Questions:</h2>
            <li className="ml-[2rem] text-ivory">Which team has scored the most goals in the past decade?</li>
            <li className="ml-[2rem] text-ivory">Which team(s) in the past decade, win most of their games at home and which team(s) win most of their games away?</li>
            <li className="ml-[2rem] text-ivory"> Is there a correlation between the number of shots taken by a team and the number of goals they score, additionally, what deeper findings can you extrapolate from these statistics?</li>
            {/* <li className="ml-[2rem] text-ivory">Has fouling become more frequent over the years and what can one conclude from this?</li>
            <li className="ml-[2rem] text-ivory">What factors impact a teams ability to win the most?</li> */}
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Data Sourcing:</h2>
            <p className="mx-[1rem] text-ivory">For this dataset I went to <Link to="https://www.kaggle.com/datasets/saife245/english-premier-league" className="text-stalelime underline font-bold hover:text-azure">kaggle.com</Link> and retrieved the relevant data files for my scope, so all the years between 2014 and 2024.</p>
          </section>
          <section className="flex flex-col m-[2rem] text-ivory">
            <h2 className="font-bold text-2xl text-stalelime">Data Cleaning:</h2>
            <p className="mx-[1rem]">I performed some checks to see if there were any irregularities in the data or data points that are not relevant to the scope of my questions.</p>
            <div></div>
            <p className="mx-[1rem]">Additionally, I decided to merge all of the files from the past decade into a massive 'super' dataFrame: </p>
            <div className="m-[1rem] text-sm">
              <CodeBlock tabs={[
                {name: "Prem_DF", language: "python", code: premDF, description: "Merging all csv files covering season 13/14 to season 14/15 into one DataFrame"},
                {name: "cycleTeam", language: "python", code: cycleteam, description: "A core function that is used in many other functions later, effectively searches through the DataFrame by the specified year and team name."},
                {name: "findTotalGoals", language: "python", code: findTotalGoals, description: ftgDesc}
              ]}/>
            </div>
            <img src={superDF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
            <p>The 'season-13/14.csv' file contained many additional columns that the other datasets did not have and I did not feel like these were particularly relevant 
              to the questions I wanted to explore and so I limited the DataFrame to just the first 23 columns using: <span className="text-stalelime font-bold">Prem_DF = Prem_DF.iloc[:, :22]</span>. I also reset the index
              as I had no need of two seperate indexes.
            </p>
            <img src={supertrimDF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
            <p>I went on to run through some standard validation checks for 'na' values and duplicates and created a backup DataFrame in the event of experimental analysis, I also
              ran a <span className="text-stalelime font-bold">Prem_DF.info()</span> to check the data types of each column in the DataFrame to make sure they are what I expect them to be.
              After doing that I then ran a <span className="text-stalelime font-bold">Prem_DF.rename()</span> to standardise all the columns into lowercase so the columns had a consistent naming convention.
              I decided that as I am looking at long form yearly analysis across the entire decade, the only relevant part of the date I am interested in was the year.
              I converted the 'date' column into a datetime object using pd.to_datetime(), I then created a new column called 'year' and extracted just the year from the
              'date' column using <span className="text-stalelime font-bold">Prem_DF.insert(1, "year", Prem_DF["date"].dt.year)</span>
            </p>
            <img src={completeDF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
            <p className="text-center">With this I had my complete DataFrame, formatted in a way I felt would be conducive to analysing the data and answering the questions I had given myself.</p>
          </section>
          <section className="flex flex-col m-[2rem] text-ivory">
            <h2 className="font-bold text-2xl text-stalelime">Visualisation & Findings:</h2>
            <p className="mx-[1rem]">You may click on a <span className="text-stalelime italic font-bold">sticky note</span> below to expand a question section and reveal an in-depth analysis of it:</p>
            <div id="notes" className="flex flex-wrap gap-[4rem] justify-evenly mt-[2rem]">
              <StickyNote title={"Question #1"}>
                <p>A deep dive into Question 1.</p>
              </StickyNote>
              <StickyNote title={"Question #2"}>
                <p>A deep dive into Question 1.</p>
              </StickyNote>
              <StickyNote title={"Question #3"}>
                <p>A deep dive into Question 1.</p>
              </StickyNote>
            </div>
          </section>
          <section className="flex flex-col m-[2rem] text-ivory">
            <h2 className="font-bold text-2xl text-stalelime">Conclusion:</h2>
            <p className="mx-[1rem]">In summary this is a conclusion Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis laboriosam quia, impedit, placeat expedita sit doloribus obcaecati quo enim accusantium eveniet ab laudantium unde possimus. Quaerat numquam consectetur atque.</p>
          </section>
          <section className="flex flex-col m-[2rem] text-ivory">
            <h2 className="font-bold text-2xl text-stalelime">Reflections:</h2>
            <p className="underline text-lg mx-[1rem]">Things I did well
            </p>
            <p className="mx-[2rem]"><span className="text-lg font-bold">1. </span>Major reflection point one</p>
            <p className="mx-[2rem]"><span className="text-lg font-bold">2. </span>Major reflection point two</p>
            <p className="mx-[2rem]"><span className="text-lg font-bold">3. </span>Major reflection point three</p>
            <p className="underline text-lg mx-[1rem] mt-[1rem]">Things I did not do so well
            </p>
            <p className="mx-[2rem]"><span className="text-lg font-bold">1. </span>Major reflection point one</p>
            <p className="mx-[2rem]"><span className="text-lg font-bold">2. </span>Major reflection point two</p>
          </section>
          <ScrollTo />
      </Main>
    </div>
  )
}

export default DA
