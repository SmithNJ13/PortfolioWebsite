import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Main from '../components/Main'
import { imgBorder } from '../slayfile.js'
import superDF from "../assets/ProjectThree/DataFrameSuper.png"
import supertrimDF from "../assets/ProjectThree/DataFrameSuperTrim.png"
import completeDF from "../assets/ProjectThree/DataFrameComplete.png"
import barChart from "../assets/ProjectThree/barchart_totalGoals_decade.png"
import totalYearGoals from "../assets/ProjectThree/totalyearGoalsDF.png"
import totalDecadeGoals from "../assets/ProjectThree/totaldecadeGoals.png"
import totalWinsOnly from "../assets/ProjectThree/totalWinsOnly.png"
import middlesbrough from "../assets/ProjectThree/middlesbroughWR.png"
import pieHomeAway from "../assets/ProjectThree/piechart_home_vs_away.png"
import pieRates from "../assets/ProjectThree/piechart_matchoutcomes.png"
import pieManCity from "../assets/ProjectThree/piechart_manCity.png"
import ScrollTo from '../components/ScrollToTop/index.jsx'
import { dataBackground, dataMergeCode, premDF, cycleteam, findTotalGoals, ftgDesc, getTeamYear, teamyearDesc, goalCounts, goalDesc, 
  goalQDesc, reflectionOne, reflectionTwo, reflectionThree, reflectionFour, reflectionFive, goalQDesc2, barChartCode,
  totalWinsCode, totalWinsCodeImp,
  plotPieHomeAway,
  plotPieRates, } from '../yapfile.js'
import Prism, { languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import CodeBlock from '../components/CodeBlock/index.jsx'
import StickyNote from '../components/StickyNote/index.jsx'
import Test from '../components/Test/test.jsx'

const DA = () => {
  const [section, setSection] = useState(0)
  const emphasis = "text-stalelime font-bold italic"
  const emphasisB = "text-stalelime font-bold"

  useEffect(() => {
      Prism.highlightAll();
  }, []);
  
  return (
    <div>
      <Main>
          <section className="h-auto w-auto font-bold flex flex-row sm:px-[5rem] px-[1rem] py-[1rem] flex flex-col items-center mt-[2rem]">
            <h1 className="sm:text-4xl text-3xl border-b-[1px] border-ivory rounded w-auto text-center">Data Analysis</h1>
            <h2 className="text-base text-azure hover:text-ivory hover:underline hover:cursor-pointer"><Link to="https://github.com/SmithNJ13/data_analysis/blob/main/analysis.ipynb">Data Analysis Notebook</Link></h2>
          </section>
          <section className="flex flex-col m-[2rem]">
            <h2 className="font-bold text-2xl">Background:</h2>
            <p className="mx-[1rem] text-ivory">{dataBackground}</p>
          </section>
          <section className="flex flex-col m-[2rem] sm:w-[66rem] w-auto">
            <h2 className="font-bold text-2xl">The Questions:</h2>
            <li className="ml-[2rem] text-ivory">Which team has scored the most goals in the past decade?</li>
            <li className="ml-[2rem] text-ivory">Which team(s) in the past decade, win most of their games at home and which team(s) win most of their games away?</li>
            <li className="ml-[2rem] text-ivory">Is there a correlation between the number of shots taken by a team and the number of goals they score, additionally, what deeper findings can you extrapolate from these statistics?</li>
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
                {name: "findTotalGoals", language: "python", code: findTotalGoals, description: ftgDesc},
              ]}/>
            </div>
            <img src={superDF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
            <p>The 'season-13/14.csv' file contained many additional columns that the other datasets did not have and I did not feel like these were particularly relevant 
              to the questions I wanted to explore and so I limited the DataFrame to just the first 23 columns using: <span className={emphasis}>Prem_DF = Prem_DF.iloc[:, :22]</span>. I also reset the index
              as I had no need of two seperate indexes.
            </p>
            <img src={supertrimDF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
            <p>I went on to run through some standard validation checks for 'na' values and duplicates and created a backup DataFrame in the event of experimental analysis, I also
              ran a <span className={emphasis}>Prem_DF.info()</span> to check the data types of each column in the DataFrame to make sure they are what I expect them to be.
              After doing that I then ran a <span className={emphasis}>Prem_DF.rename()</span> to standardise all the columns into lowercase so the columns had a consistent naming convention.
              I decided that as I am looking at long form yearly analysis across the entire decade, the only relevant part of the date I am interested in was the year.
              I converted the 'date' column into a datetime object using pd.to_datetime(), I then created a new column called 'year' and extracted just the year from the
              'date' column using <span className={emphasis}>Prem_DF.insert(1, "year", Prem_DF["date"].dt.year)</span>
            </p>
            <img src={completeDF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
            <p className="text-center">With this I had my complete DataFrame, formatted in a way I felt would be conducive to analysing the data and answering the questions I had given myself.</p>
          </section>
          <section className="flex flex-col m-[2rem] text-ivory">
            <h2 className="font-bold text-2xl text-stalelime">Visualisation & Findings:</h2>
            <p className="mx-[1rem] mb-[1rem]">When choosing my questions, I considered my own knowledge and understanding of football as well as the data contained within the data sets.
              <br />I wanted each question to be varying in difficulty. For <span className={emphasis}>question 1</span>, I chose this because I was curious about which team had scored the most goals in the last decade but also
              in part because I knew it would be a reasonably achievable target.
              <br />
              <br />For <span className={emphasis}>question 2</span> I wanted a deeper analysis and I was curious if teams that had a high win rate% at home were good teams, I also wanted to explore if
              home advantage is a real thing and if so - how much impact does it have on a game?
              <br />
              <br /><span className={emphasis}>Question 3</span> was initially more ambitious but not the most ambitious question I had. I wanted to explore the correlation between the number of shots a team made
              and their ability to score goals. However, as I was going through this question it was soon revealed to me that it could be so much more deeper than that and so I went on to explore this, looking into
              how the total number of shots reflect a teams 'dominance' on the field, how each team stacked up against the mean of that season; which teams had better finishing and on target goal conversion rates and many more facets.
            </p>
            <p className="mx-[1rem]">You may click on a <span className="text-stalelime italic font-bold">sticky note</span> below to expand a question section and reveal an in-depth analysis of it:</p>
            <div className="w-full border-stalelime border-t-[4px] my-[1rem]"></div>
              {section == 0 && (
              <div id="notes" className="flex flex-wrap gap-[4rem] justify-evenly mt-[2rem]">
                <StickyNote title={"Question #1"}
                onClick={() => setSection(1)}>
                  <p>Which team has scored the most goals in the past decade?</p>
                </StickyNote>
                <StickyNote title={"Question #2"}
                onClick={() => setSection(2)}>
                  <p>Which team(s) in the past decade, win most of their games at home and which team(s) win most of their games away?</p>
                </StickyNote>
                <StickyNote title={"Question #3"}
                onClick={() => setSection(3)}>
                  <p>Is there a correlation between the number of shots taken by a team and the number of goals they score, additionally, what deeper findings can you extrapolate from these statistics?</p>
                </StickyNote>
              </div>
              )}
              {section == 1 && (
                <>
                  <section>
                    <h2 className="text-2xl text-center text-stalelime mt-[2rem] mb-[1rem] px-[12rem]">Question 1: <span className="text-ivory">Which team has scored the most goals in the past decade?</span></h2>
                    <p className="mx-[1rem]">{goalQDesc} '<strong>team</strong>', '<strong>year</strong>', '<strong>fthg</strong>' and '<strong>ftag</strong>'.
                    <br />I then thought about which graphs I will likely be using for this and settled on displaying the information as a bar chart.</p>
                    <div className="m-[1rem] text-sm">
                      <CodeBlock tabs={[
                        {name: "Teams & Years list", language: "python", code: getTeamYear, description: teamyearDesc},
                        {name: "goalCounts", language: "python", code: goalCounts, description: goalDesc},
                      ]}/>
                    </div>
                    <p className="mx-[1rem]">{goalQDesc2}</p>
                    <div className="flex flex-row justify-evenly">
                      <img src={totalYearGoals} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                      <img src={totalDecadeGoals} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                    </div>
                    <p className="mx-[1rem]">Now having the relevant data that I need stored as a DataFrame for both the year and by decade, I can plot this data on a graph using
                      <span className={emphasis}> matplotlib</span>. You can find the code I used for this below.
                    </p>
                    <CodeBlock tabs={[
                      {name: "Bar Chart Plot", language: "python", code: barChartCode, description: "The code used to plot and visualise a bar chart graph, displaying the total goals scored by the top 10 highest scoring teams across the past 10 years."}
                    ]}/>
                  </section>
                  <img src={barChart} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <h2 className="text-2xl text-stalelime mx-[1rem]">Summary:</h2>
                  <p className="mx-[2rem]">In summary from the graph above we can see that Man City has the highest amount of total goals scored from the years 2014 to 2024.
                    With a grand total of: <strong>989</strong>. In second place is Liverpool with: <strong>876</strong> and in third place, Arsenal with: <strong>777</strong>.
                    As goals often strongly correlate with wins in Football, one could reasonably assume Man City is a team that wins fairly often, or at least ranks highly
                    in the Premier League table.
                  </p>
                </>
              )}
              {section == 2 && (
                <>
                  <section>
                    <h2 className="text-2xl text-center text-stalelime mt-[2rem] mb-[1rem] px-[12rem]">Question 2: <span className="text-ivory">Which team(s) in the past decade, win most of their games at home and which team(s) win most of their games away?</span></h2>
                    <p className="mx-[1rem]">This question I wanted to have a more in-depth exploration and a deeper analysis, now that I was becoming more comfortable with the data.
                      Before diving into the data, I first broke down the key components of the question: 
                      <li className="mx-[1rem]">Focus on the past decade (2014 to 2024)</li>
                      <li className="mx-[1rem]">Need to get total home wins and away wins to get a percentage value overall</li>
                    </p>
                    <br />
                    <p className="mx-[1rem]">I also established key variables to pay attention to:
                      <li className="mx-[1rem]">"home" and "away"</li>
                      <li className="mx-[1rem]">"year"</li>
                      <li className="mx-[1rem]">"ftr" (full-time result)</li>
                    </p>
                    <br />
                    <p className="mx-[1rem]">After doing this I created a <span className={emphasis}>totalWins()</span> function, which you can see in the code <span className="text-stalelime font-bold italic">below</span> this code simply took count of all the times 'H'
                    appeared in the full-time result column when the 'home' column matched the team name and vice versa for 'away' matching 'A' in full-time result. Adding these two counts together gave me the total value of 'wins' a team had achieved.
                    <br/>
                    </p>
                    <CodeBlock tabs={[
                      {name: "totalWins()", language: "python", code: totalWinsCode, description: "Desc."},
                      {name: "totalWins() Refined", language: "python", code: totalWinsCodeImp, description: "Desc."}
                    ]}/>
                  </section>
                  <div className="flex flex-row justify-evenly">
                    <p className="mx-[1rem] mt-[1rem] w-[42rem]">Once I had aggregated the data from the <span className={emphasis}>totalWins()</span> function, it was initially looking promising - so I pressed on and
                    calculated the <span className={emphasis}>Home WinRate%</span> and the <span className={emphasis}>Away WinRate%</span> for each team. This was when I realised a particular issue with
                    the data.
                    <br />
                    <br />As you can see from the image displaying the <span className={emphasis}>HomeWin%</span> and <span className={emphasis}>AwayWin%</span>, along with the total number of wins
                    Middlesbrough has an <span className="font-bold italic">80% home win rate</span> and only 5 wins?
                    This can appear quite misleading at face value and so I decided, in the interest of fairness and good quality exploration that more data was needed to draw out better conclusions.
                    I went back to my <span className={emphasis}>totalWins()</span> function and refined it to include <span className="text-stalelime font-bold italic">draws</span> and <span className="text-stalelime font-bold italic">total games</span>.
                    In addition to this, I also included an overall <span className="text-stalelime font-bold italic">WinRate%</span>.</p>
                    <img src={totalWinsOnly} className="w-[100%] h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  </div>
                  <p className="mx-[1rem] mt-[1rem]">As you can see from the image below, that after including those changes to the <span className={emphasis}>totalWins()</span> function, Middlesbrough [20] does not seem nearly as impressive.
                  Even with the 80% home win rate included. The columns in order are: 
                  <br/> <span className="text-stalelime font-bold italic">index, team, home_wins, draws, away_wins, total_wins, total_games, homeWin%, awayWin% and overall winRate%</span>.
                  <br />From this we can see Middlesbrough have <strong>5</strong> <span className={emphasis}>total wins</span>, <strong>38</strong> <span className={emphasis}>total games</span> and only a <strong>13.2%</strong> <span className={emphasis}>win rate</span>.
                  This contrasts massively with their <strong>80%</strong><span className={emphasis}> home win rate</span>.</p>
                  <img src={middlesbrough} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="mx-[1rem]">In order to deal with massive disparities in the data like this and examine <span className="text-stalelime font-bold italic">home and away win rate%</span> in a meaningful way I decided to limit the DataFrame
                    to teams that have only <strong>50 or more wins</strong>. After doing this and sorting through the DataFrame by seeing the highest and lowest values, and checking that all teams have 50 or more total wins I carried on
                    to plot a pie chart to display this information. The code and graphs can be seen below.
                  </p>
                  <CodeBlock tabs={[
                    {name: "Pie Chart Plot (Home% v Away%)", language: "python", code: plotPieHomeAway, description: "Desc."},
                    {name: "Pie Chart Plot (Win, Draw & Loss Rate%)", language: "python", code: plotPieRates, description: "Desc."}
                  ]}/>
                  <img src={pieHomeAway} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="mx-[1rem] my-[1rem] text-center">In the graph above, we can see that <strong>Stoke</strong> has the highest Home Win Rate%. One might infer from this that stoke are a dominating team at Home.
                  <br />However, if I examine the data more concisely and I pull up these teams win rates and match outcomes, we can see below that this is <strong>not</strong> the case.</p>
                  <img src={pieRates} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="mx-[1rem] my-[1rem] text-center">The reality is that Stoke underperform in securing wins for their team, it just so happens that when they <strong>do</strong> win it is in most cases only at Home.
                  Conversely, if we look at a team with an exceptionally high overall win rate - <strong>Man City</strong> we can see that their home win rate% and their away win rate% is much
                  more balanced and closer to a 50-50 split. This trend is also similiar with Chelsea, though not quite as strong. This would indicate that teams with high overall win rates
                  tend to perform well at home and away. The below image shows the relevant information exclusively for Man City.</p>
                  <img src={pieManCity} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <h2 className="text-2xl text-stalelime mx-[1rem]">Summary:</h2>
                  <p className="mx-[2rem]">What I can conclude from this is that, of the teams with 50 or more wins:
                    <li className="mx-[1rem] mt-[0.5rem]">Home advantage is a <span className="font-bold italic">very real</span> thing. You are more likely to win at Home and this is true of every team
                    that has played within the EPL in the last 10 years.</li>
                    <li className="mx-[1rem] mt-[0.5rem]"><strong>Stoke</strong> get most of their wins (<span className={emphasisB}>65.5%</span>) from playing at Home, coupled with their overall win rate (<span className={emphasisB}>32.2%</span>) they are not a particularly strong team.
                      The wins they do get, the majority are because of Home advantage.</li>
                    <li className="mx-[1rem] mt-[0.5rem]">Chelsea has a higher than average Away Win Rate (<span className={emphasisB}>47.7%</span>) compared to other teams. This has no reflection on the teams ability. 
                      <br />Teams like Man City who have a similar value (<span className={emphasisB}>46.0%</span>) have a significantly better performance and higher overall Win Rate (<span className={emphasisB}>69.6%</span>).</li>
                    <li className="mx-[1rem] mt-[0.5rem]">Looking at Home Win Rate% and Away Win Rate% has no real significant impact 
                      in determining a teams ability, or their performance. Other than identifying that Home advantage is a thing that affects all teams.</li>
                    <li className="mx-[1rem] mt-[0.5rem]">Teams that rely mostly on Home Wins have poor win rates and teams that can secure wins
                      Away tend to have higher overall win rates.
                      <br />To conclude, teams <span className={emphasis}>must excel both at Home and Away</span> to be considered a strong team.
                      <br />This is reinforced by <strong>Middlesbrough</strong> having the highest Home Win% but the lowest WinRate% in the entire DataFrame.</li>
                  </p>
                </>
              )}
              {section == 3 && (
                <>
                  <section>
                    <h2 className="text-2xl text-center text-stalelime mt-[2rem] mb-[1rem] px-[12rem]">Question 3: <span className="text-ivory">Is there a correlation between the number of shots taken by a team and the number of goals they score, additionally, what deeper findings can you extrapolate from these statistics?</span></h2>
                  </section>
                  <img src={barChart} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                </>
              )}
              {section !== 0 && (
                <Test onClick={() => setSection(0)}/>
              )}
            <div className="w-full border-stalelime border-t-[4px] my-[1rem]"></div>
          </section>
          <section className="flex flex-col m-[2rem] text-ivory">
            <h2 className="font-bold text-2xl text-stalelime">Conclusion:</h2>
            <p className="mx-[1rem]">In summary this is a conclusion Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis laboriosam quia, impedit, placeat expedita sit doloribus obcaecati quo enim accusantium eveniet ab laudantium unde possimus. Quaerat numquam consectetur atque.</p>
          </section>
          <section className="flex flex-col m-[2rem] text-ivory">
            <h2 className="font-bold text-2xl text-stalelime">Reflections:</h2>
            <p className="underline text-lg mx-[1rem]">Things I did well
            </p>
            <p className="mx-[2rem] my-[0.75rem]"><span className="text-lg font-bold text-stalelime">1. </span>{reflectionOne}</p>
            <p className="mx-[2rem] my-[0.75rem]"><span className="text-lg font-bold text-stalelime">2. </span>{reflectionTwo}</p>
            <p className="mx-[2rem] my-[0.75rem]"><span className="text-lg font-bold text-stalelime">3. </span>{reflectionThree}</p>
            <p className="underline text-lg mx-[1rem] mt-[1rem]">Things I did not do so well
            </p>
            <p className="mx-[2rem] my-[0.75rem]"><span className="text-lg font-bold text-stalelime">1. </span>{reflectionFour}</p>
            <p className="mx-[2rem] my-[0.75rem]"><span className="text-lg font-bold text-stalelime">2. </span>{reflectionFive}</p>
          </section>
          <div className="flex w-full justify-center">
            <Link to="https://github.com/SmithNJ13/data_analysis" className="font-bold hover:text-azure underline">GitHub repository</Link>
          </div>
          <ScrollTo />
      </Main>
    </div>
  )
}

export default DA
