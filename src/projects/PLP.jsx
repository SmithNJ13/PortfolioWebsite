import React, { useState, } from 'react'
import card from "../assets/ProjectTwo/Image1.png"
import img2 from "../assets/ProjectTwo/Image2.png"
import img3 from "../assets/ProjectTwo/Image3.png"
import img4 from "../assets/ProjectTwo/Image4.png"
import img5 from "../assets/ProjectTwo/Image5.png"
import img6 from "../assets/ProjectTwo/Image6.png"
import img7 from "../assets/ProjectTwo/Image7.png"
import img8 from "../assets/ProjectTwo/Image8.png"
import img9 from "../assets/ProjectTwo/Image9.png"
import img10 from "../assets/ProjectTwo/Image10.png"
import img11 from "../assets/ProjectTwo/Image11.png"
import img12 from "../assets/ProjectTwo/Image12.png"
import be1 from "../assets/ProjectTwo/BE1.png"
import be2 from "../assets/ProjectTwo/BE2.png"
import be3 from "../assets/ProjectTwo/BE3.png"
import be4 from "../assets/ProjectTwo/BE4.png"
import cardZoom from "../assets/ProjectTwo/CardZoom.png"
import { imgBorder } from '../slayfile.js'

import { Link } from 'react-router-dom'
import { G2, D2, D2_1, O2, webscrapeCode, seedMatchesCode, dynamicPostPatchCode, devProcess, initialPlan} from '../yapfile.js'
import StickyNote from '../components/StickyNote/index.jsx'
import Test from '../components/Test/test.jsx'
import Main from '../components/Main/index.jsx'
import ScrollTo from '../components/ScrollToTop/index.jsx'
import CodeBlock from '../components/CodeBlock/index.jsx'

const PLP = ({animations}) => {
  const string2 = "[ P.L.P ]"
  const [section, setSection] = useState(0)
  let scale, rotationR, rotationL
  if(animations === true) {
    scale = "115%",
    rotationR = "10deg",
    rotationL = "-10deg"
  } else {
    scale = "100%",
    rotationR = "0deg",
    rotationL = "0deg"
  }

 return (
    <div>
      <Main>
        <section className="h-auto w-auto font-bold flex flex-row sm:px-[5rem] px-[1rem] py-[1rem] flex flex-col items-center mt-[2rem]">
          <h1 className="sm:text-4xl text-3xl border-b-[1px] border-ivory rounded w-auto text-center">Premier League Predictions {string2}</h1>
          <h2 className="text-base text-azure hover:text-ivory hover:underline hover:cursor-pointer"><Link to="" target="_blank" rel="noopener noreferrer">deployed_link_for_project</Link></h2>
        </section>
        <section className="flex flex-col m-[2rem]">
          <h2 className="font-bold text-2xl">Project Summary:</h2>
          <p className="mx-[1rem] text-ivory">{G2}</p>
        </section>
        <section id="development" className="flex flex-col m-[2rem] my-[4rem]">
          <h2 className="font-bold text-2xl">Development Process:</h2>
          <p className="mx-[1rem] text-ivory">{devProcess}</p>
          <p className="mx-[1rem] text-ivory">You may click on a <span className="text-stalelime italic font-bold">sticky note</span> below to expand the section and see more information:</p>
          <div className="w-full border-stalelime border-t-[4px] my-[1rem]"></div>
          {section == 0 && (
            <div id="notes" className="flex flex-wrap gap-[4rem] justify-evenly mt-[2rem]">
              <StickyNote title={"Initial Plan & Conception"} scale={scale} rotation={rotationR}
              onClick={() => setSection(1)}>
                <p>Detailed explanations of the planning process, defining my focus and tools to use.</p>
              </StickyNote>

              <StickyNote title={"Expanding the Scope"} scale={scale} rotation={rotationR}
              onClick={() => setSection(2)}>
                <p>Explanation of core features that are neccessary to the application and how I went about implementing them.</p>
              </StickyNote>

              <StickyNote title={"Refactoring Data Structures"} scale={scale} rotation={rotationR}
              onClick={() => setSection(3)}>
                <p>Challenges and problems I faced during the development of the application, with explanations for the solutions I used to resolve the issues.</p>
              </StickyNote>

              <StickyNote title={"Current Version"} scale={scale} rotation={rotationR}
              onClick={() => setSection(4)}>
                <p>Things I learnt about during the development of this project and details about future improvements I would make, or different approaches I would use if I undertook a similar project.</p>
              </StickyNote>

              <StickyNote title={"Challenges and the Future"} scale={scale} rotation={rotationR}
              onClick={() => setSection(5)}>
                <p>Details on the current implementation of the project, as well as future improvements I intend to make.</p>
              </StickyNote>
            </div>
          )}
          {section == 1 && (
            <div>
              <section>
                <h2 className="font-bold text-2xl my-[1rem]">Initial Plan & Conception</h2>
                  <p className="mx-[1rem] text-ivory">{initialPlan}</p>
              </section>
            </div>
          )}
          {section == 2 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <div className="flex flex-col items-center">
              <p className="sm:mx-[2rem] mx-[1rem] mb-[1rem]">I wanted the website layout to look a bit cleaner and have more visually appealing colours, since the current focus of the website was on Arsenal premier league matches
                I decided to make the colour scheme similar to colours found on the Arsenal logo.
              </p>
              <img src={img4} className={imgBorder}></img>
              <p className="sm:mx-[7rem] my-[1rem] mx-[1rem]">After some development, I decided that the focus of just Arsenal only matches was too narrow a focus and I wanted to expanded the
                project to cover more - so I opened it up to every premier league match.
                <br className="mb-[1rem]"/>Additionally, I added a 'profile' page which displays a prediction table showcasing a history of the users most recent predictions, as well a
                'net xG' rating, which is a metric one can use to assess how accurate their predictions are.
              </p>
              <img src={img5} className={imgBorder}></img>
            </div>
            <h2 className="m-[1rem] text-2xl font-bold">Backend:</h2>
            <p className="my-[1rem] mx-[2rem]">On the backend while the focus was just on Arsenal matches, I had set up the basic data structure for the Match class, which included a:
              <li className="ml-[1rem]">Unique ID</li>
              <li className="ml-[1rem]">Match date</li>
              <li className="ml-[1rem]">Opponent (who Arsenal were against)</li>
              <li className="ml-[1rem]">An expected goal value (xG)</li>
              <li className="ml-[1rem]">An expected goal value for the opposing team (xGA)</li>
            </p>
            <img src={be1} className={`${imgBorder} sm:w-[43rem] sm:h-[19rem]`}></img>
            <p className="my-[1rem] mx-[2rem]">In addition to this, I had also set up the data structure for making a Prediction, this included the following variables:
            <li className="ml-[1rem]">Unique ID</li>
            <li className="ml-[1rem]">The user ID</li>
            <li className="ml-[1rem]">The match ID</li>
            <li className="ml-[1rem]">The predicted expected goal value (xG)</li>
            <li className="ml-[1rem]">The predicted expected goal value against (xGA) i.e. the opponents xG</li>
            </p>
            <img src={be2} className={imgBorder}></img>
            <p className="text-center sm:mx-[6rem] mx-[1rem] my-[1rem]">The result of this implementation allowed the user to make a prediction on any Arsenal match for both
              Arsenal and their opponent - and the relevant information would be stored to the backend database (UserID, matchID, predicted_xG and predicted_xGA) each prediction
              would have it's own unique ID for easy identification, this would also allow me to fetch all of the predictions for a specific user, or for a specific match if needed.
            </p>
            </>
          )}
          {section == 3 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <div className="flex flex-col items-center">
              <p className="sm:mx-[2rem] mx-[1rem] mb-[1rem]">In this implementation of the web application, I felt the need to re-evaluate the webpage layout and overall feel of the website. Given that
                it has now expanded beyond just Arsenal matches to encompass all premier league matches, it felt fitting to remove the Arsenal colours. As I'm really enjoy the usage of the colour green I knew
                that I wanted to encorporate it into my website and so I tried my own hand at picking a colour palette, I tried to keep the greens a soft, pastel colour so it could be contrasted by darker
                fonts for readability. I also designed a temporary logo to display on the NavBar for the sake of visualisation, as well as a mock 'news feed' on the far right of the screen.
              </p>
              <img src={img6} className={imgBorder}></img>
              <p className="sm:mx-[7rem] my-[1rem] mx-[1rem]">As I had expanded what the user was able to predict on, this had to be reflected on the cards and so the previous 'xG' button
                was replaced with a simple 'place predictions' button, which upon clicking would play a card flipping animation and reveal a set of predictions the user could make
              </p>
              <img src={img7} className={imgBorder}></img>
            </div>
            <h2 className="m-[1rem] text-2xl font-bold">Backend:</h2>
            <p className="my-[1rem] mx-[2rem]">Having expanded what the user can make predictions on I naturally had to refactor the Prediction class on the backend to make sure the data structure was
              suited for the new functionality, the new things I added into the data structure were:
              <li className="ml-[1rem]">side</li>
              <li className="ml-[1rem]">corners</li>
              <li className="ml-[1rem]">playerToScore</li>
              <li className="ml-[1rem]">cleanSheet</li>
            </p>
            <p className="my-[1rem] mx-[2rem]">I had also removed predicted_xGA as this was no longer needed, having the 'side' variable meant I could just take the xG of either
              home or away.
            </p>
            <img src={be3} className={`${imgBorder} sm:w-[43rem] sm:h-[19rem]`}></img>
            <p className="my-[1rem] mx-[2rem]">To better manage the predictions I also had to update the Match class file to help accomodate the newly added 'side' variable. <br/>The new things added
              to the Match class include:
            <li className="ml-[1rem]">time</li>
            <li className="ml-[1rem]">home</li>
            <li className="ml-[1rem]">home_xG</li>
            <li className="ml-[1rem]">away</li>
            <li className="ml-[1rem]">away_xG</li>
            </p>
            <img src={be4} className={imgBorder}></img>
            <p className="text-center sm:mx-[6rem] mx-[1rem] my-[1rem]">This allowed a new logical flow to making predictions, which would take the 'side' from a match, either
              home or away and use this data when making a prediction, so if the user made a prediction on a specific card it would get something along the lines of 'home' + 'xG'
              and then make the predicition of 'home, 3.1' for example.
            </p>
            </>
          )}
          {section == 4 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <p className="sm:mx-[2rem] mx-[1rem] mb-[1rem]">The current implementation of the web application has undergone the most significant changes, after getting
              most of the backend functionality and data structures sorted and designed in a way that makes more logical sense and allows for easier programming of functions, retrieval
              of information and more readable data I decided to tackle the presentation and layout of the website once and for all, accepting that design is not a talent of mine, I relied
              on external tools like <Link to="https://coolors.co/" className="text-ivory underline font-bold">coolors.co</Link> to provide me a colour palette that could still utilise the colour
              green, but be more visually appealing than what I had previously chosen.
              <br className="mb-[1rem]"></br>I utilised <Link to="https://www.canva.com/" className="text-ivory underline font-bold">canva.com</Link> to design a logo for the website that looked cleaner and more 'professional' that is displayed
              in the top-left corner, on the NavBar. The logo also additionally features as a 'return' button to navigate the user back to the home page.
            </p>
            <div className="flex flex-col items-center gap-[1rem]">
              <img src={img8} className={imgBorder}></img>
              <img src={img9} className={imgBorder}></img>
              <div className="flex sm:flex-row flex-col justify-evenly w-full">
                <img src={cardZoom} className={imgBorder}></img>
                <p className="text-start w-full sm:my-[2rem] p-[1rem]">The layout of the cards, as a result of <span onClick={() => setImplementation(3)} className="text-ivory font-bold underline hover:cursor-pointer">implementation#3</span>
                <br/>had to change to accommodate the new predictions the user can make.
                Displaying of the match time has also become a thing, so users can see when the specific match they're placing predictions on will actually take place.
                <p className="sm:mt-[10rem]">Following on from this, I also added content to the dormant 'teams' page, which allows the user to view a list of the teams
                  playing in the current season of the premier league. This is shown on the image below. Eventually the user will be able to click on each team and be
                  taken to the relevant page to display information about their chosen team.</p></p>
              </div>
              <img src={img10} className={imgBorder}></img>
              <p className="mx-[1rem]">Previous implementations had the login and register functionality, but the forms for them were incredibly basic and rudimentary, in this update I decided to design proper login and register
                forms that are easily readable and far more presentable. The following two images are of both the login and register form respectively.
              </p>
              <img src={img11} className={imgBorder}></img>
              <img src={img12} className={imgBorder}></img>
              <p className="mx-[1rem]">In summary this update provided a massive overhaul to the UI and layout of the web application to make it more friendly and readable to users, as well as improving the 
                navigation and feel of the webpage. It gives the website a cleaner, more professional feel to it. As well as the implementation of some additional functions, like the mapping
                of each team within the current premier league season on the 'teams' page.
              </p>
            </div>
            </>
          )}
          {section == 5 && (
            <>
            <h2 className="m-[1rem] text-2xl font-bold">Frontend:</h2>
            <p className="sm:mx-[2rem] mx-[1rem] mb-[1rem]">The current implementation of the web application has undergone the most significant changes, after getting
              most of the backend functionality and data structures sorted and designed in a way that makes more logical sense and allows for easier programming of functions, retrieval
              of information and more readable data I decided to tackle the presentation and layout of the website once and for all, accepting that design is not a talent of mine, I relied
              on external tools like <Link to="https://coolors.co/" className="text-ivory underline font-bold">coolors.co</Link> to provide me a colour palette that could still utilise the colour
              green, but be more visually appealing than what I had previously chosen.
              <br className="mb-[1rem]"></br>I utilised <Link to="https://www.canva.com/" className="text-ivory underline font-bold">canva.com</Link> to design a logo for the website that looked cleaner and more 'professional' that is displayed
              in the top-left corner, on the NavBar. The logo also additionally features as a 'return' button to navigate the user back to the home page.
            </p>
            <div className="flex flex-col items-center gap-[1rem]">
              <img src={img8} className={imgBorder}></img>
              <img src={img9} className={imgBorder}></img>
              <div className="flex sm:flex-row flex-col justify-evenly w-full">
                <img src={cardZoom} className={imgBorder}></img>
                <p className="text-start w-full sm:my-[2rem] p-[1rem]">The layout of the cards, as a result of <span onClick={() => setImplementation(3)} className="text-ivory font-bold underline hover:cursor-pointer">implementation#3</span>
                <br/>had to change to accommodate the new predictions the user can make.
                Displaying of the match time has also become a thing, so users can see when the specific match they're placing predictions on will actually take place.
                <p className="sm:mt-[10rem]">Following on from this, I also added content to the dormant 'teams' page, which allows the user to view a list of the teams
                  playing in the current season of the premier league. This is shown on the image below. Eventually the user will be able to click on each team and be
                  taken to the relevant page to display information about their chosen team.</p></p>
              </div>
              <img src={img10} className={imgBorder}></img>
              <p className="mx-[1rem]">Previous implementations had the login and register functionality, but the forms for them were incredibly basic and rudimentary, in this update I decided to design proper login and register
                forms that are easily readable and far more presentable. The following two images are of both the login and register form respectively.
              </p>
              <img src={img11} className={imgBorder}></img>
              <img src={img12} className={imgBorder}></img>
              <p className="mx-[1rem]">In summary this update provided a massive overhaul to the UI and layout of the web application to make it more friendly and readable to users, as well as improving the 
                navigation and feel of the webpage. It gives the website a cleaner, more professional feel to it. As well as the implementation of some additional functions, like the mapping
                of each team within the current premier league season on the 'teams' page.
              </p>
            </div>
            </>
          )}
          {section !== 0 && (
            <Test onClick={() => setSection(0)}/>
          )}
        </section>
        <section className="flex flex-col mx-[2rem]">
            <h2 className="font-bold text-2xl">Code Snippets:</h2>
            <p className="mx-[1rem] text-ivory">Below are some code snippets that are vital to the project:
            </p>
            <CodeBlock tabs={[
              {name: "WEBSCRAPE CODE", language: "javascript", code: webscrapeCode, description:""},
              {name: "MATCH SEEDING CODE", language: "javascript", code: seedMatchesCode, description:""},
              {name: "POST/PATCH CODE", language: "javascript", code: dynamicPostPatchCode, description:""},
            ]}/>
        </section>
        <section className="flex flex-col m-[2rem]">
          <h2 className="font-bold text-2xl">Outcome:</h2>
          <p className="mx-[1rem] text-ivory">{O2}</p>
        </section>
        <h2 className="font-bold text-2xl m-[1rem] text-center">Tools & Repo:</h2>
        <section className="flex flex-row flex-wrap m-[1rem] ml-[1rem] gap-[2rem] justify-evenly">
          <div id="frontend">
            <h2 className="text-xl">Frontend
              <li className="ml-[1rem] text-lg text-ivory">React</li>
              <li className="ml-[1rem] text-lg text-ivory">React-DOM</li>
              <li className="ml-[1rem] text-lg text-ivory">React-router</li>
              <li className="ml-[1rem] text-lg text-ivory">Framer-motion</li>
              <li className="ml-[1rem] text-lg text-ivory">Tailwindcss</li>

            </h2>
          </div>
          <div id="backend">
            <h2 className="text-xl">Backend & Database
              <li className="ml-[1rem] text-lg text-ivory">Axios</li>
              <li className="ml-[1rem] text-lg text-ivory">Cheerio</li>
              <li className="ml-[1rem] text-lg text-ivory">Mongodb</li>
              <li className="ml-[1rem] text-lg text-ivory">Express</li>
            </h2>
          </div>
          <div id="development">
            <h2 className="text-xl">Development
              <li className="ml-[1rem] text-lg text-ivory">Inkscape</li>
              <li className="ml-[1rem] text-lg text-ivory">Git</li>
            </h2>
          </div>
          <div id="languages">
            <h2 className="text-xl">Languages
              <li className="ml-[1rem] text-lg text-ivory">JavaScript</li>
              <li className="ml-[1rem] text-lg text-ivory">HTML</li>
              <li className="ml-[1rem] text-lg text-ivory">CSS</li>
            </h2>
          </div>
        </section>
        <div className="flex w-full justify-center">
          <Link to="https://github.com/SmithNJ13/PredictionSite" className="font-bold hover:text-azure underline" target="_blank" rel="noopener noreferrer">GitHub repository</Link>
        </div>
        <ScrollTo />
      </Main>
    </div>
  )
}

export default PLP
