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
import goalsandshotsDF from "../assets/ProjectThree/goalsandshotsDF.png"
import scatterShotsGoals from "../assets/ProjectThree/scatter_shots_vs_goals_decade.png"
import scatterOTGoals from "../assets/ProjectThree/scatter_shots_onTarget_decade.png"
import boxplot_TShots from "../assets/ProjectThree/barplot_totalshots.png"
import boxplot_TSCR from "../assets/ProjectThree/barplot_TSCR.png"
import boxplot_OTCR from "../assets/ProjectThree/barplot_OTCR.png"
import linechart_Top3 from "../assets/ProjectThree/linechart_top3_asc.png"
import linechart_Mid3 from "../assets/ProjectThree/linechart_middle3_asc.png"
import linechart_Bot3 from "../assets/ProjectThree/linechart_bot3_asc.png"
import scatter_SOT_ASC from "../assets/ProjectThree/scatter_ASC_v_SOT.png"
import scatter_OTCR_WR from "../assets/ProjectThree/scatter_OTCR_v_WinRate.png"
import scatter_OTCR_WR_Season from "../assets/ProjectThree/scatter_OTCRvWR_seasonal.png"
import scatter_Top4ASC from "../assets/ProjectThree/scatter_top4_WR_ASC.png"
import scatter_Top4OTCR from "../assets/ProjectThree/scatter_top4_WR_OTCR.png"
import asc_DF from "../assets/ProjectThree/ASC_DF.png"
import ScrollTo from '../components/ScrollToTop/index.jsx'
import { dataBackground, dataMergeCode, premDF, cycleteam, findTotalGoals, ftgDesc, getTeamYear, teamyearDesc, goalCounts, goalDesc, 
  goalQDesc, reflectionOne, reflectionTwo, reflectionThree, reflectionFour, reflectionFive, goalQDesc2, barChartCode,
  totalWinsCode, totalWinsCodeImp,
  plotPieHomeAway,
  plotPieRates,
  findTotalShotsCode,
  shotsBySeasonCode,
  totalShotsDecadeCode,
  shotConversionCode,
  scatterPlotTSTG,
  boxplotTS,
  boxplotConversionYear,
  ascMetric,
  seasonalDF,
  lineplotASC,
  scatterOTCR, } from '../yapfile.js'
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
            <h2 className="text-base text-azure hover:text-ivory hover:underline hover:cursor-pointer"><Link to="https://github.com/SmithNJ13/data_analysis/blob/main/analysis.ipynb" target="_blank" rel="noopener noreferrer">Data Analysis Notebook</Link></h2>
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
                    <h2 className="sm:text-2xl text-lg text-center text-stalelime mt-[2rem] mb-[1rem] sm:px-[12rem] px-[1rem]">Question 1: <span className="text-ivory">Which team has scored the most goals in the past decade?</span></h2>
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
                    <h2 className="sm:text-2xl text-lg text-center text-stalelime mt-[2rem] mb-[1rem] sm:px-[12rem] px-[1rem]">Question 2: <span className="text-ivory">Which team(s) in the past decade, win most of their games at home and which team(s) win most of their games away?</span></h2>
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
                    <p className="mx-[1rem]">I went on to then create a <span className={emphasis}>totalWins()</span> function to count home and away wins based on the 'ftr' (full-time result) column, then calculated each team's win rates.
                    <br/>
                    The code for this can be seen <span className={emphasis}>below</span>:
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
                  The columns in order are: <span className="text-stalelime font-bold italic">index, team, home_wins, draws, away_wins, total_wins, total_games, homeWin%, awayWin% and overall winRate%</span>.
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
                  <p className="mx-[1rem] my-[1rem] text-center">In contrast, if we look at a team with an exceptionally high overall win rate - <strong>Man City</strong> we can see that their home win rate% and their away win rate% is much
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
                    <h2 className="sm:text-2xl text-lg text-center text-stalelime mt-[2rem] mb-[1rem] sm:px-[12rem] px-[1rem]">Question 3: <span className="text-ivory">Is there a correlation between the number of shots taken by a team and the number of goals they score, additionally, what deeper findings can you extrapolate from these statistics?</span></h2>
                    <p className="mx-[1rem]">For this question, I knew it was going to be pretty in-depth and cover a variety of different graphs but there were two specific
                      graph types I had in mind that I really wanted to use - which were scatterplots and boxplots.
                      As usual, I identified the columns to focus on for this question, the ones I decided on were:
                      <li className="mx-[1rem]">"year"</li>
                      <li className="mx-[1rem]">"home"</li>
                      <li className="mx-[1rem]">"away"</li>
                      <li className="mx-[1rem]">"team" (using DataFrames where it is already defined)</li>
                      <li className="mx-[1rem]">"fthg" (full-time home goals)</li>
                      <li className="mx-[1rem]">"ftag" (full-time away goals)</li>
                      <li className="mx-[1rem]">"hs" (home shots)</li>
                      <li className="mx-[1rem]">"as" (away shots)</li>
                      <li className="mx-[1rem]">"hst" (home shots, on target)</li>
                      <li className="mx-[1rem]">"ast" (away shots, on target)</li>
                    </p>
                    <br /><p className="mx-[1rem]">After doing this, I then went on to create a function for finding the total shots for each team, in every year. The code for this is displayed below:</p>
                    <CodeBlock tabs={[
                      {name: "findTotalShots()", language:"python", code: findTotalShotsCode, description: "Desc."},
                      {name: "Shots by Year", language:"python", code: shotsBySeasonCode, description: "Desc."}
                    ]}/>
                    <p className="m-[1rem]">Once I had created the DataFrame containing the relevant information. I then used <span className={emphasisB}>pd.merge( )</span> to combine
                    my new ts_by_year DataFrame and my previous tg_by_year DataFrame from question 2 together. I then used <span className={emphasisB}>df.loc[ ]</span> to filter out
                    rows which had 0 values across the board as they were not helpful to this analysis.
                    <span className={emphasisB}><br />goals_and_shots_seasonal = combined_df.loc[~(combined_df.iloc[:, 2:].sum(axis=1) == 0)]</span>
                    <br/>Below is the resulting DataFrame, ready and primed for analysis.</p>
                  </section>
                  <img src={goalsandshotsDF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <CodeBlock tabs={[
                    {name: "Goals and Shots by Decade", language:"python", code: totalShotsDecadeCode, description: "Desc."},
                    {name: "Creating new metrics (TSCR%, OTCR%, SOT%)", language:"python", code: shotConversionCode, description: `TSCR% is the 'Total Shot Conversion Rate' which is the percentage of Shots that resulted in Goals.
                      OTCR% is the 'On Target Conversion Rate' which is the percentage of Shots On Target that resulted in Goals. SOT% is just the percentage of total shots that were on target.`},
                    {name: "Scatter Plot Code", language:"python", code: scatterPlotTSTG, description: "Desc."}
                  ]}/>
                  <p className="m-[1rem]">Using both the total_goals by year DataFrame and the total_shots by year DataFrame, I created a new DataFrame that covered the totals of the entire decade for
                    both goals and shots for each team. I then created three new metrics to help show correlations between the data, these were:
                    <li className="mx-[1rem] text-stalelime font-bold">TSCR% (Total Shot Goal Conversion Rate)</li>
                    <li className="mx-[1rem] text-stalelime font-bold">OTCR% (On Target Goal Conversion Rate)</li>
                    <li className="mx-[1rem] text-stalelime font-bold">SOT% (Shots on Target)</li>
                  </p>
                  <p className="mx-[1rem]">After doing this I wanted to explore the relationship between total shots and goals, and total shots on target and goals to see which one
                    has a greater correlation and if so - what type of correlation.
                  </p>
                  <img src={scatterShotsGoals} className="w-auto h-auto self-start border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <img src={scatterOTGoals} className="w-auto h-auto self-end border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="m-[1rem]">As we can observe from the graphs above, it appears that both total shots and total shots <strong>on target</strong> have a positive
                  correlation with goals scored. However, total shots having a slightly more positive correlation along with a tighter confidence window could tentatively show
                  that for teams aiming to score it is <strong>better to just take more shots</strong> than it is to try and be more precise with shots on target.</p>
                  <CodeBlock tabs={[
                    {name: "Boxplot (Total Shots)", language:"python", code: boxplotTS, description: "Desc."},
                    {name: "Boxplot (TSCR%)", language:"python", code: boxplotConversionYear, description: "Desc."}
                  ]}/>
                  <p className="m-[1rem]">Carrying on with my analysis, I was curious to explore if teams in recent years had become more 'aggressive' and focused on 
                    attacking and keeping momentum - one metric I thought would be a useful indicator of this was total shots and I wanted to have a graph where I could
                    compare each year side-by-side and see how the teams as a 'cohort' compare against each year.
                    <br />As a fan of the game Final Fantasy XIV, I frequently look up statistics relating to the game - for optimisation purposes. I was inspired
                    by their usage of horizontal boxplots, which you can find <a href="https://www.fflogs.com/zone/statistics/58?boss=1078" target="_blank" className="text-stalelime underline font-bold hover:text-azure">HERE</a> if you are curious.
                    <br />With this in mind, I decided I would like to use horizontal comparative boxplots for this analysis. I also decided to check out if teams had become more 'accurate' over the years using this method too, and comparing
                    total shot conversion rate and on target conversion rate.
                  </p>
                  <img src={boxplot_TShots} className="w-auto h-auto self-end border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <img src={boxplot_TSCR} className="w-auto h-auto self-start border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="mx-[1rem]">There isn't any discernable difference or uptick in total shots by teams across the year and they all tend to fall within a general
                    range of variability. <br/>However one important observation to note is that <span className={emphasisB}>2020 has a drastic reduction</span> in total shots,
                    I don't have the statistics to fully interrogate why - but one possible explanation could be the COVID pandemic that was ongoing and a lack of audience as a result.
                    <br/>Usually in matches there is an audience to spur the players on and provide motivating chants. 2020 also has a pretty significant outlier in TSCR%, this team is
                    actually <span className={emphasisB}>Norwich City</span> with a TSCR% of <span className={emphasisB}>2.8</span>%. Meaning they had appalling shot selection.
                    <br/>This is quite shocking. If 100 shots were taken, most teams in the last decade would get at least 10 goals as a result. <strong>Norwich would get 2.</strong>
                    <br/>
                    <br/>In terms of TSCR% per year, the general range tends to be relatively consistent, however the 'maximum' limit does appear to have a very small positive trend upwards.
                    Which could serve as a modicum of evidence that the teams playing the best in the league, in recent years, have got a bit better at <span className={emphasisB}>shot selection</span>.
                    <br/>2016 is also an interesting year in that it had two outlier teams on <strong>both</strong> ends of the spectrum for TSCR%, in addition to a very tight lower and upper whisker.
                    This could indicate a lack of skill diversity in teams of that years ability to have quality shot selection.
                  </p>
                  <img src={boxplot_OTCR} className="w-auto h-auto self-end border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="mx-[1rem]">The OTCR% comparative boxplot ended up being somewhat disappointing to investigate, there was a small part of me hoping teams had become better
                    at finishing. The most interesting observation is that <span className={emphasisB}>2021 appears to have the largest variation</span> between its lower whisker and upper whisker.
                    This could be because of a lot of tactical diversity during this year. However, given previous questions and my analysis of data in the DataFrame - I am lead to believe a likely cause of this
                    variance is Manchester City putting on an absolutely insane performance for this season and creating a wide gap between them and second place.
                    <br/>This is made even clearer when you look at the distance between the lower whisker and Q3 and then Q3 to the upper whisker. It is almost the same level of variance.
                    <br/>
                    <br/>You can also compare this to the year above, <strong>2022</strong>, where the <span className={emphasisB}>outlier there is Manchester City</span> with an incredibly high OTCR% of <span className={emphasisB}>69.7</span>%
                  </p>
                  <p className="m-[1rem]">After plotting these graphs and noticing some interesting trends, I then think of a way I can compare the total shots a team made that year against the mean shots of all teams that same year.
                    With this in mind I created a metric called ASC which stands for 'Average Shot Coefficient'. I'm not the greatest at naming things, so perhaps there would be something better and more accurate.
                    <br/>What ASC essentially does is measures a teams Total Shots for that year, against the mean total shots of every team in that same year. The value is then clamped and normalised through min() max() functions to a value
                    between -1 and 1. <span className={emphasisB}>A positive value of 1</span> means that the team took more shots than the mean of that year, and was the team that took the most shots. <span className={emphasisB}>A negative value of -1</span> means that 
                    the team took less shots than the mean of that year, and was the team that took the least shots. 
                    <br/><br/>This means that I can just take a quick glance at this value and get a sense of a teams attacking momentum that year, as if you're taking more shots you're likely to be
                    in a good position to do so. You can find the code for this below, as well as the resulting DataFrame:
                  </p>
                  <CodeBlock tabs={[
                    {name: "Creation of ASC metric", language:"python", code: ascMetric, description: "Desc."},
                    {name: "Creating Seasonal_DF", languaage:"python", code: seasonalDF, description: "Desc."},
                    {name: "Line Chart (ASC)", language:"python", code: lineplotASC, description: "Desc."}
                  ]}/>
                  <img src={asc_DF} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="m-[1rem]">With the explanation of ASC in mind, and how it can be used to somewhat gauge a teams attacking prowess. I go on to plot the ASC
                    for teams who have played in every season since 2014 until 2024 to see how the most consistent teams in the last decade perform in this metric.
                    The graphs in this order show the top 3 - middle 3 and bottom 3 teams in this metric.
                  </p>
                  <img src={linechart_Top3} className="w-auto h-auto self-start border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <img src={linechart_Mid3} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <img src={linechart_Bot3} className="w-auto h-auto self-end border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <li className="my-[0.5rem] mx-[2rem]">From the above graphs we can clearly see that Man City has a very consistent performance in taking shots, more often than not being the team 
                    with the highest amount of shots taken in any given season.</li>
                  <li className="my-[0.5rem] mx-[2rem]">After 2020 Chelsea has rapidly declined in proactivity in taking shots, which might be indicative of a more defensive shift.</li>
                  <li className="my-[0.5rem] mx-[2rem]">From 2020 onwards Arsenal have rapidly improved their ability to constantly take shots and control the pace of the game.</li>
                  <li className="my-[0.5rem] mx-[2rem]">Crystal Palace tends to be the lowest performing team when it comes to being proactive with taking shots.</li>
                  <p className="mx-[1rem]">After plotting and examining the line charts and observing trends, I then go on to explore how shots on target correlate with ASC.</p>
                  <img src={scatter_SOT_ASC} className="w-auto h-auto self-start border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <img src={scatter_OTCR_WR} className="w-auto h-auto self-end border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p className="mx-[1rem]">The strong negative correlation between shots on target and ASC is interesting, because what this shows is there is <span className={emphasisB}>a clear trade-off </span>
                  between shot volume and precision. This is counter-intuitive because one might expect teams taking more shots to be better at shooting accurately, however, this 
                  doesn't seem to be the case. Teams that take more shots tend to have lower accuracy. Interestingly Manchester City is the highest 'point' on the first graph,
                  with an ASC of around 0.91 and 26.1% shots on target. But as we established earlier in Question 2, Manchester City also have an exceptionally high win rate.
                  On the opposite end of the spectrum we have teams like Middlesbrough, who had a high SOT% but a very poor win rate of 13%.</p>
                  <p className="mx-[1rem] mt-[1rem]">This trend would seem to indicate that teams who favour high attacking tempo and having a high shot volume actually fair much
                    better in winning their games than teams who prefer to take it slow and try score accurate shots.
                  </p>
                  <p className="mx-[1rem] mt-[1rem]">We can also see a very strong positive correlation between on target goal conversion rate% and win rate%, meaning that teams 
                    with much better finishing quality often tend to win more games. Interestingly, Manchester City is the highest point on this graph too. This shows that 
                    while Man City has a low percentage of shots on target, the ones that are on target often translate into goals.
                  </p>
                  <CodeBlock tabs={[
                    {name: "Scatter Plot (Consistent Teams)", language:"python", code: scatterOTCR, description: "Desc."}
                  ]}/>
                  <p className="m-[1rem]">After assessing the teams as an aggregate across the entire decade, combining their individual yearly performance into one statistic.
                    I decided I would look into their yearly performances individually across the year, to see how they compare to themselves and other teams. I did this through a 
                    scatterplot.
                  </p>
                  <img src={scatter_OTCR_WR_Season} className="w-auto h-auto self-center border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <p>Explain</p>
                  <img src={scatter_Top4ASC} className="w-auto h-auto self-end border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <img src={scatter_Top4OTCR} className="w-auto h-auto self-start border-stalelime border-[2px] rounded-[1rem] sm:m-[1rem]"></img>
                  <h2 className="text-2xl text-stalelime mx-[1rem]">Summary:</h2>
                  <p className="mx-[2rem]">
                    From the statistical analysis conducted, it is evident that shot volume has a stronger correlation with goal-scoring than shot accuracy alone. 
                    Teams that maintained a high OTCR% (On Target Conversion Rate) significantly outperformed those with lower values, with a stark contrast in win rates — <span className={emphasisB}>61.6</span>% for strong finishers 
                    versus just <span className={emphasisB}>18.4</span>% for poor finishers. <br/>Among all teams analyzed from the 2014-2024 Premier League seasons, Manchester City stood out as the most consistent attacking team, 
                    maintaining an impressive +<span className={emphasisB}>0.91</span> ASC (Average Shot Coefficient) across the decade. This highlights their sustained high shot volume, which reflects an aggressive attacking tempo and, ultimately, strong performance.
                    Conversely, teams like Crystal Palace and West Ham struggled with consistency, with Palace in particular being one of the most statistically underperforming teams to have played every season in this period. 
                    <br/>
                    <br/>However, when considering the single worst-performing team of the last decade, the data overwhelmingly points to Middlesbrough’s 2016-17 season. Their <span className={emphasisB}>13.2</span>% win rate was the lowest recorded, and their shot metrics paint a clear picture of inefficiency. 
                    With an OTCR% of just <span className={emphasisB}>18.5</span>% and a TSCR% of only <span className={emphasisB}>7.7</span>%, they struggled both in shot selection and finishing ability. 
                    <br/>Additionally, their -<span className={emphasisB}>0.94</span> ASC indicates that they were one of the least proactive attacking teams, ranking near the bottom for total shots taken.
                    Ultimately, based on performance across key offensive metrics, Middlesbrough’s 2016-17 campaign stands as the statistically worst Premier League season of the past decade, according to the data that I had
                    available to explore with. 
                    Their inability to generate high-quality chances, convert opportunities, or maintain a strong attacking presence directly contributed to their relegation and historically poor performance.
                  </p>
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
            <Link to="https://github.com/SmithNJ13/data_analysis" className="font-bold hover:text-azure underline" target="_blank" rel="noopener noreferrer">GitHub repository</Link>
          </div>
          <ScrollTo />
      </Main>
    </div>
  )
}

export default DA
