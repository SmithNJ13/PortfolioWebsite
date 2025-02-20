/*  Key: G = "Goal", D = "Development", O = "Outcome"
         The value [1, 2, ...] denotes which project its relevant to, like an "ID"
         Any values after the initial number, i.e. _1, _2... denotes sub-sections
         Example: D2_3 = Development section, for project 2, subsection 3.

    Project: SzndChef, full-stack recipe web application
    relevant string information is found below */
const G1 = `The objective of this project was to build a full-stack web application that is deployed and accessible by anyone. The users that sign up will be able to login and
              browse through a variety of recipes, both default and user-created. They would also be able to comment their thoughts on each recipe, as well as favourite ones that they
              like. The core theme and selling point of this web application is the "seasonal" focus, being able to filter recipes by their ideal season.`
const D1 = `As a group project, development initially started by us making a trello board and getting in a call to discuss what we want from the application and which tasks each team member
is going to be assigned to, based on strengths and preferences. At the time, I was learning to properly use react states and given this was a seasonally themed recipe app, I took on the task
of designing the 'seasonal page' with it in mind that each season can be a state.`
const O1 = `The outcome of this project was a successfully deployed and functional full-stack seasonal recipe web application. We hit most of our target goals, by regularly checking the
trello board and working on our assigned tasks for that day. The seasonal page that I was designated to work on met my standards and was able to change themes dynamically, remain as a single page,
display all associated seasonal recipes as well as include a filter function by price and dietry restrictions, the user is also able to navigate to each displayed recipe for
information on how to cook it, as well as save the recipe to their 'likes' and comment their thoughts on it.`

/* Project: Premier League Predictions, full-stack prediction web application
    relevant string information is found below */
const G2 = `The objective of this website is to provide a platform for users in which they can make predictions on a variety of different statistics for each premier league team, as well as
view relevant information about the teams playing in the current season. This is a full-stack application that involved frontend development, backend development as well creating a database.`
const D2 = `Given that the 'cards' are a core concept of the web application, I decided to create a component for them first and ensure it was functional,
            I gave the card a very basic UI design just for the purposes of testing.`
const D2_1 = ``
const O2 = `Outcome to be added upon completion of project.`

/* Project: Data Analysis, data exploration, cleaning and visualisation project
    relevant string information is found below */
const G3 = `Goal of some kind`
const D3 = `Development of some kind`
const O3 = `Outcome of some kind`

const dataBackground = `Given that Football is one of the most globally recognised and popular sports, it has an abundance of statistics and data points that I can use for my portfolio which will provide
a lot of opportunity for data exploration. I also have a personal interest in the English Premier League and as such I have chosen this specific league to gather data on and explore. My focus for this analysis
is Premier League teams from the past decade (2014 - 2024). The vastness of this dataset provides a high volume of data as well as opening the possibility of potential predictive analysis.`

const devProcess = `Initially this project was to be aimed at just being able to predict the expected goal value (xG) on exclusively Arsenal premier league matches only, 
however throughout development I felt the need to expand the scope of the project continuously.`

const initialPlan = `Given the focus of the web application I knew the first order of business was to set up the backend and get it to a functional state, this is the backbone of the project
where a lot of the 'heavy lifting' regarding the logic and fetching of relevant information is done.`





// Code stuff below:
const initialBackendPLP = `
const opponentArray = []
const xg_array = []
const xga_array = []

axios(url)
    .then(response => {
        const HTML = response.data
        const $ = cheerio.load(HTML)

        $("td.left[data-stat='comp']:has(a:contains('Premier League'))").each((index, compElement) => {
            const competition = $(compElement).find("a").text().trim()
            if(competition === "Premier League") {
                const matchDate = $(compElement).closest("tr").find("th.left[data-stat='date']").text().trim();
                if (matchDate.includes(formattedDate)) {
                    const opponent = $(compElement).closest("tr").find("td.left[data-stat='opponent']");
                    const xgFor = $(compElement).closest("tr").find("td.right[data-stat='xg_for']");
                    const xgAgainst = $(compElement).closest("tr").find("td.right[data-stat='xg_against']");
                    
                    opponentArray.push(opponent.text());
                    if (xgFor.text() !== "") {
                        xg_array.push(xgFor.text());
                    }
                    if (xgAgainst.text() !== "") {
                        xga_array.push(xgAgainst.text());
                    }
                }
            }
        })
        if(opponentArray.length < 1) {
            console.log("No Arsenal Premier League matches today!")
        } else {
            opponentArray.forEach((element, index) => {
                console.log('Today's Opponent: \${element}')
                if(xg_array[index] !== undefined && xga_array[index] !== undefined) {
                    console.log('xG: \${xg_array[index]}, xGA: \${xga_array[index]}')
                }
            })
        }
    })
    .catch(error => {
        console.log("DATA NOT FOUND: ", error)
    })
    `
const initialBackendPLP2 = `
app.get("/", (req, res) => {
    const todayOpponent = opponentArray[0];
    const teamMatch = teams.find(team => team.name === todayOpponent);
    if (teamMatch) {
        const teamInfo = {
            opponent: todayOpponent,
            xG: xg_array[0],
            xGA: xga_array[0],
            primary: teamMatch.primary,
            secondary: teamMatch.secondary,
            icon: teamMatch.icon
        }
        res.json(teamInfo)
        return teamInfo
    } else {
        res.status(404).send("No team found")
    }
})
`

const reducerCode = `import { legacy_createStore as createStore } from "redux"

const initialState = {
    BGColour: "white",
}

function BGReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_BG_COLOUR":
            return {...state, BGColour: action.payload}
            default:
                return state
            }
        }

const store = createStore(BGReducer)
        
export { BGReducer, store }`

const actionCode = `export const changeBGColour = (colour) => ({
    type: "SET_BG_COLOUR",
    payload: colour
})
`

const bgCode = `
const BGStyle = {
    backgroundColor: BGColour,
};

const handleBG = (colour) => {
    dispatch(changeBGColour(colour));
};

if (!recipes || !ingredients) {
    switch (season) {
      case "spring":
        handleBG("#fafcf8");
        break;
      case "summer":
        handleBG("#fffefa");
        break;
      case "autumn":
        handleBG("#fffcf8");
        break;
      case "winter":
        handleBG("#f9fcff");
        break;
}
        `

const carouselCode = `
const CarouselComponent = ({ingredients, season}) => {
  return (
    <>
    <Carousel> {
      ingredients.filter((i) => i.season.toLowerCase().includes(season))
      .map((ingredient, index) => (
        <CarouselItem key={index}>
          <img src={ingredient.image} className='ingredient-image' alt={ingredient.name}/>
          <CarouselCaption>
            <h3>{ingredient.name}</h3>
            <p>{ingredient.description}</p>
          </CarouselCaption>
        </CarouselItem>
      ))
      }
    </Carousel>
    </>
  )
}`

const webscrapeCode = `
axios(url)
.then(response => {
        const HTML = response.data;
        const $ = cheerio.load(HTML);

        $("td.left[data-stat='date']").each((index, element) => {
            const date = $(element).find("a").text().trim()
            if(date) {
                const matchTime = $(element).closest("tr").find("td.right[data-stat='start_time']").text().trim()
                const homeTeam = $(element).closest("tr").find("td.right[data-stat='home_team'] a").text().trim()
                const homeXGS = $(element).closest("tr").find("td.right[data-stat='home_xg']").text().trim()
                const awayXGS = $(element).closest("tr").find("td.right[data-stat='away_xg']").text().trim()
                const awayTeam = $(element).closest("tr").find("td.left[data-stat='away_team'] a").text().trim()

                const homeXG = parseFloat(homeXGS)
                const awayXG = parseFloat(awayXGS)

                const matchInfo = {
                    date: date,
                    time: matchTime,
                    home: homeTeam,
                    homeXG: homeXG,
                    away: awayTeam,
                    awayXG: awayXG
                }
                premierLeagueMatches.push(matchInfo)
            }
        })
        // console.log(premierLeagueMatches)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
});
    `

const seedMatchesCode = `
const seedDB = async (matchesArray) => {
        try {
            await client.connect();
            await client.db("database").collection("matches").drop();

            let ID = 1;
            for (const match of matchesArray) {
                try {
                    await client.db("database").collection("matches").insertOne({
                        _id: ID,
                        date: match.date,
                        time: match.time,
                        home: match.home,
                        homeXG: match.homeXG,
                        away: match.away,
                        awayXG: match.awayXG
                    });
                    ID++;
                } catch (insertError) {
                    if (insertError.code !== 11000) {
                        console.error('Error inserting match:', insertError);
                    } else {
                    }
                }
            }
            console.log("MATCHES SEEDED!")
            await client.close();
        } catch (error) {
            console.error('Error connecting to the database:', error);
        }
};
    `
    const dynamicPostPatchCode = `
async function postPrediction (e) {
  const userID = 1
  e.preventDefault()
  const Form = new FormData(e.target)
  const xG = parseFloat(Form.get("xG"))
  const corners = parseInt(Form.get("corners"))
  const playerToScore = Form.get("playerToScore")
  const cleanSheet = Form.get("cleanSheet") === "on"
  console.log(side, xG, corners, playerToScore, cleanSheet)

  
  try {
    /* Fetch specific matches that are associated with a given userID and matchID, if none exist - we use POST method to create a new prediction, if one exists we update with PUT
    TODO: Change to PATCH instead for specific data*/
    const userPredictions = await fetch('$\{baseURL}/predictions/$\{userID}/$\{matchID}')
    const body = await userPredictions.json()
    if(body.length > 0) {
      if(side == "home") {
        const update = await fetch('$\{baseURL}/', {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: 1,
            matchID: matchID,
            side: {
              home: {
                predicted_xG: xG,
                corners: corners,
                playerToScore: playerToScore,
                cleanSheet: cleanSheet
              }
            }
          })
        })
        if(!update.ok) {
          console.log("Failed to update prediction", update.status)
        } else {
          console.log("Prediction updated successfully")
        }
      } else {
        const update = await fetch('$\{baseURL}/', {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: 1,
            matchID: matchID,
            side: {
              away: {
                predicted_xG: xG,
                corners: corners,
                playerToScore: playerToScore,
                cleanSheet: cleanSheet
              }
            }
          })
        })
        if(!update.ok) {
          console.log("Failed to update prediction", update.status)
        } else {
          console.log("Prediction updated successfully")
        }
      }
    } else {
      const response = await fetch('$\{baseURL}/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: 1,
          matchID: matchID,
          side: {
            home: side === "home" ? {
              predicted_xG: xG,
              corners: corners,
              playerToScore: playerToScore,
              cleanSheet: cleanSheet
            } : {
              predicted_xG: null,
              corners: null,
              playerToScore: null,
              cleanSheet: null
            },
            away: side === "away" ? {
              predicted_xG: xG,
              corners: corners,
              playerToScore: playerToScore,
              cleanSheet: cleanSheet
            } : {
              predicted_xG: null,
              corners: null,
              playerToScore: null,
              cleanSheet: null
            }
          }
        })
      })
      if(!response.ok) {
        console.log("Failed to create prediction", response.status)
      } else {
        console.log("Prediction created successfully")
      }
    }
  } catch (error) {
    console.log("Error making API call: ", error)
  }
}
`

const dataMergeCode = `
import pandas as pd

pd.set_option('display.max_columns', None)
p2425 = pd.read_csv("./Premier_League/season-2425.csv")
p2324 = pd.read_csv("./Premier_League/season-2324.csv")
p2223 = pd.read_csv("./Premier_League/season-2223.csv")
p2122 = pd.read_csv("./Premier_League/season-2122.csv")
p2021 = pd.read_csv("./Premier_League/season-2021.csv")
p1920 = pd.read_csv("./Premier_League/season-1920.csv")
p1819 = pd.read_csv("./Premier_League/season-1819.csv")
p1718 = pd.read_csv("./Premier_League/season-1718.csv")
p1617 = pd.read_csv("./Premier_League/season-1617.csv")
p1516 = pd.read_csv("./Premier_League/season-1516.csv")
p1415 = pd.read_csv("./Premier_League/season-1415.csv")

Prem_DF = pd.concat([p2425, p2324, p2223, p2122, p2021, p1920, p1819, p1718, p1617, p1516, p1415])
`

const reducerDescription = `Because needing to change the background was a function required by multiple different pages and components (seasonalPage, loadingPage, navBar) to prevent prop drilling it made sense
to create a global state via Redux. In this code I create a reducer to manage the state and allow it to dynamically change based on the incoming action.
For the ease of readability I have combined the store and reducer, however, in an actual project I would keep these seperate.`
const actionDescription = `Creating the action behind changing the background colour, this is used in the reducer. It takes in a colour parameter, 
which is the new colour I want to assign as the background colour. This data is then passed on to the store.`
const backgroundDescription = `In this code 'BGColour' is the state that is global and dynamically changes. I have a simple switch/case statement which checks the current season
it will then call the handleBG() function and pass in a colour parameter based on the season. This function then utilises the action I have created by delivering the colour as a
payload, this data is then fed into the store - which handles the state change and updates it.`
const carouselDescription = `This line of code is using bootstrap and its innate components, like the carousel. The component takes in two props of 'ingredients' and 'season'
it then filters through each ingredient and checks their 'season' tag - this data structure has been set up on the backend. If the ingredients season tag matches that of the 'season' prop
then we use mapping to create an item on the carousel for each one that matches. For each item created, it also lists the ingredients associated image, name and description.`

const premDF = `
import pandas as pd

pd.set_option('display.max_columns', None)
p2425 = pd.read_csv("./data/season-2425.csv")
p2324 = pd.read_csv("./data/season-2324.csv")
p2223 = pd.read_csv("./data/season-2223.csv")
p2122 = pd.read_csv("./data/season-2122.csv")
p2021 = pd.read_csv("./data/season-2021.csv")
p1920 = pd.read_csv("./data/season-1920.csv")
p1819 = pd.read_csv("./data/season-1819.csv")
p1718 = pd.read_csv("./data/season-1718.csv")
p1617 = pd.read_csv("./data/season-1617.csv")
p1516 = pd.read_csv("./data/season-1516.csv")
p1415 = pd.read_csv("./data/season-1415.csv")
p1314 = pd.read_csv("./data/season-1314.csv")

Prem_DF = pd.concat([p2425, p2324, p2223, p2122, p2021, p1920, p1819, p1718, p1617, p1516, p1415, p1314])
Prem_DF.reset_index(inplace=True)
`

const cycleteam = `
def cycleTeam(year, team):
    TeamYear_DF = Prem_DF.loc[(Prem_DF["year"] == year) & (Prem_DF["home"] == team) + (Prem_DF["away"] == team)]
    return TeamYear_DF

cycleTeam(2017, "Arsenal")
`

const findTotalGoals = `
def findTotalGoals(year, team):
    totalHomeGoals = cycleTeam(year, team)[cycleTeam(year, team)["home"] == team]["fthg"].sum()
    totalAwayGoals = cycleTeam(year, team)[cycleTeam(year, team)["away"] == team]["ftag"].sum()
    totalGoals = totalHomeGoals + totalAwayGoals
    # objectName = f"{team}{year}"
    
    return (team, year, int(totalHomeGoals), int(totalAwayGoals), int(totalGoals))

findTotalGoals(2014, "Arsenal")
`

const ftgDesc = `
A practical use of the cycleTeam function in action to help aid another function. This function cycles through the specified year and team name, 
while returning the sum value of all the goals where the specified team is 'home' and the same for when the specified team is 'away'. 
It then combines these two values together to get 'total goals'. An example result from this code would be this: ('Arsenal', 2014, 38, 27, 65)
`

const getTeamYear = `
teams_list = set()
years_list = set()
for index, entry in Prem_DF.iterrows():
    teams_list.add(entry["home"])
    years_list.add(entry["year"])

teams_list = sorted(teams_list)
years_list = sorted(years_list)

print(years_list)
`
const teamyearDesc = `
This code allows me to fetch every team name and every year used within the DataFrame and by storing them as a set, they will be unique values.
I can then use the teams_list and years_list to cycle through them and pass the values into my cycleTeam / findTotalGoals functions.
I understand I could go back and better optimise this code to merge parts of it into a more coherent function, but these were designed as I 
was working through my analysis and were made to suit my needs at that time.
`

const goalCounts = `
Goal_Counts = []
def findGoalCounts():
    for year in years_list:
        for team in teams_list:
            Goal_Counts.append(findTotalGoals(year, team))
    return Goal_Counts

tg_by_year = pd.DataFrame(findGoalCounts())
tg_by_year.rename(columns = {0: "Team", 1: "Year", 2: "Total_HG", 3: "Total_AG", 4: "Total_Goals"}, inplace=True)
`
const goalDesc = `
This code essentially utilises the previously shown (above) cycleTeam and findTotalGoals functions, cycling through the teams and years found in teams_list and years_list.
For each entry that matches, we append the relevant statistics (in this case, 'fthg', 'ftag' and then adding both together for total goals) to Goal_Counts and return the data.
I then create a new DataFrame which has this data stored in a readable format.
`

const goalQDesc = `
For this question I knew I would need a unique list of all the teams and the years they played, I also knew that it would be useful in the future when I am examining individual teams
or specific years in more detail. This code can be found below in 'Teams & Years list'.
`
const goalQDesc2 = `
Once I had the list of team names and years, I could cycle through the DataFrame and could use it in my findGoalCounts() function.
I also created a new DataFrame which stored the information of Total_Goals for each team, for every year.
Now having an entire DataFrame of each teams Total_Goals by year, I could apply a similar logic and just cycle through the team names in the DataFrame,
and use the .sum() function to add up all the Total_Goals where the team name matches and then append this data to a new list that I can convert into another DataFrame
that reflects the Total_Goals of that team across all years.
`

const reflectionOne = `
Intuitatively came up with new metrics, combining statistics already in the DataFrame to help 
better my analysis (OTCR%, SOT%, ASC) this allowed me to effectively combine multiple metrics 
into 'one' so it was easier to spot correlations between things, for example, ASC vs Win Rate%.
`
const reflectionTwo = `
Identified valuable metrics that could provide insightful analysis to a teams performance and 
filtered out less valuable, or less relevant metrics meaning I kept a clear, defined scope which
allows for more efficient and effective breakdowns.
`
const reflectionThree = `
Curiosity, I allowed my curiosity to guide me in exploring my analysis which meant I could discover 
intriguing and meaningful relationships and correlations between various different statistics. 
However, this was a slightly double-edged sword as it meant I would investigate some
leads that I thought could be interesting and promising only to discover there wasn't much of a 
correlation or meaningful impact on team performance which did tell me something about the data, 
but was disappointing to experience as I would have hoped to explore these avenues.

For example, I thought perhaps teams got more accurate over the years, so I did a 
comparative boxplot to see if teams OTCR% had increased over the decade. 
I also explored if teams were being more proactive and aggressive taking more shots on the whole, 
but this also followed a similar trend, interestingly however, 2020 was a standout year in this metric 
being significantly behind all the others - this may be in part due to the pandemic happening at the time. 
A lack of audience and crowd to spur the teams on might have, even subconciously affected their 
willingness to be aggressive or 'put on a show'.
`
const reflectionFour = `
Too trusting of the data source and naivety in the data sets ability to fully explore in-depth 
the things I wanted to explore. For example, taking more time to gather from different sources other
relevant statistics and information like xG, league points, goals conceded would have provided me
with more meaningful and interesting statistics to do a deeper analysis.
`
const reflectionFive = `
Formatting and preparation of the data and DataFrames, I could have fine tuned the DataFrames 
into an additional category to include 'seasonal' performance, I had a yearly DataFrame and a decade 
DataFrame but as I explored I noticed some teams were having their games cut off given how the EPL has its
matches structured. Towards my final question I did categorise the DataFrame into a seasonal one,
so each team had 38 matches to draw data from. However, I realised this would have been beneficial
to the questions prior too.
`

const barChartCode = `
Question_One_Top10 = Question_One.head(10)
Top_10 = Question_One_Top10.plot(x="Team", y="Total_Goals", kind="bar", color="green", figsize=(12,6))

plt.xticks(rotation=0)
plt.yticks(range(0, Question_One_Top10["Total_Goals"].max() + 100, 100))
plt.xlabel("Team")
plt.ylabel("Total Goals")
plt.title("Top 10 highest scoring teams of the last decade (2014-2024)")
plt.grid(axis="y", linestyle="--", color="black", alpha=0.6)

for i, value in enumerate(Question_One_Top10["Total_Goals"]):
    if i < 3:
        plt.text(i, value + 10, str(value), ha="center", fontsize=10, fontweight="bold", color="black", alpha=0.6)
plt.show()
`

export {G1, D1, O1, G2, D2, D2_1,
     O2, G3, D3, O3, actionCode, bgCode,
     reducerCode, carouselCode, webscrapeCode, seedMatchesCode,
     dynamicPostPatchCode, reducerDescription, actionDescription, backgroundDescription, carouselDescription,
     dataBackground, dataMergeCode, devProcess, initialPlan, premDF, cycleteam, findTotalGoals, ftgDesc,
     getTeamYear, teamyearDesc, goalCounts, goalDesc, goalQDesc, reflectionOne, reflectionTwo, reflectionThree,
     reflectionFour, reflectionFive, goalQDesc2, barChartCode
    }