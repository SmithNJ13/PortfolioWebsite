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
I started out by identifying what columns in the DataFrame I would need to focus on in this question, which I decided would be 
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

const totalWinsCode = `
Home_Winners = Prem_DF[Prem_DF["ftr"] == "H"]["home"]
Away_Winners = Prem_DF[Prem_DF["ftr"] == "A"]["away"]

Home_Winners.reset_index(drop=True, inplace=True)
Away_Winners.reset_index(drop=True, inplace=True)

# print(int(Home_Winners.value_counts()["Arsenal"]), int(Away_Winners.value_counts()["Arsenal"]))

total_wins = []
def totalWins():
    for team in teams_list:
        total_wins.append(
            {
                "Team": team,
                "Home_Wins": int(Home_Winners.value_counts()[team]),
                "Away_Wins": int(Away_Winners.value_counts()[team]),
                "Total_Wins": int(Home_Winners.value_counts()[team] + Away_Winners.value_counts()[team])
            }
        )
    return (total_wins)
print(totalWins())
`

const totalWinsCodeImp = `
Home_Winners = Prem_DF[Prem_DF["ftr"] == "H"]["home"]
Draw_Games_Home = Prem_DF[Prem_DF["ftr"] == "D"]["home"]
Draw_Games_Away = Prem_DF[Prem_DF["ftr"] == "D"]["away"]
Away_Winners = Prem_DF[Prem_DF["ftr"] == "A"]["away"]

Home_Winners.reset_index(drop=True, inplace=True)
Away_Winners.reset_index(drop=True, inplace=True)

total_wins = []
def totalWins():
    for team in teams_list:
        Home_Team = Prem_DF[Prem_DF["home"] == team]["home"]
        Away_Team = Prem_DF[Prem_DF["away"] == team]["away"]
        total_wins.append(
            {
                "Team": team,
                "Home_Wins": int(Home_Winners.value_counts()[team]),
                "Draws": int(Draw_Games_Home.value_counts()[team] + Draw_Games_Away.value_counts()[team]),
                "Away_Wins": int(Away_Winners.value_counts()[team]),
                "Total_Wins": int(Home_Winners.value_counts()[team] + Away_Winners.value_counts()[team]),
                "Total_Games": int(Home_Team.value_counts()[team] + Away_Team.value_counts()[team])
            }
        )
    return (total_wins)

print(totalWins())
`

const plotPieHomeAway = `
hwr_team = Highest_HWR["Team"]
hwr_percentages = [Highest_HWR["HomeWin%"], Highest_HWR["AwayWin%"]]
hwr_labels = ["Home Wins", "Away Wins"]

awr_team = Highest_AWR["Team"]
awr_percentages = [Highest_AWR["HomeWin%"], Highest_AWR["AwayWin%"]]
awr_labels = ["Home Wins", "Away Wins"]

awr2_team = Highest_AWR2["Team"]
awr2_percentages = [Highest_AWR2["HomeWin%"], Highest_AWR2["AwayWin%"]]
awr2_labels = ["Home Wins", "Away Wins"]

colours = ["dodgerblue", "firebrick"]

fig, axes = plt.subplots(1, 3, figsize=(10, 6))

axes[0].pie(hwr_percentages, labels=None, autopct="%1.1f%%", colors=colours, startangle=90)
axes[0].set_title(hwr_team)

axes[2].pie(awr2_percentages, labels=None, autopct="%1.1f%%", colors=colours, startangle=90)
axes[2].set_title(awr2_team)

axes[1].pie(awr_percentages, labels=None, autopct="%1.1f%%", colors=colours, startangle=90)
axes[1].set_title(awr_team)


fig.legend(hwr_labels, loc="upper center", ncol=2, frameon=False, title="Home Win Rate% vs. Away Win Rate%", title_fontsize=14)

plt.tight_layout()
plt.show()
`

const plotPieRates = `
hwr_team = Highest_HWR["Team"]
awr_team = Highest_AWR["Team"]
awr2_team = Highest_AWR2["Team"]

hwr_win_count = Highest_HWR["Total_Wins"]
hwr_draw_count = Highest_HWR["Draws"]
hwr_loss_count = Highest_HWR["Total_Games"] - (hwr_win_count + hwr_draw_count)

awr_win_count = Highest_AWR["Total_Wins"]
awr_draw_count = Highest_AWR["Draws"]
awr_loss_count = Highest_AWR["Total_Games"] - (awr_win_count + awr_draw_count)

awr2_win_count = Highest_AWR2["Total_Wins"]
awr2_draw_count = Highest_AWR2["Draws"]
awr2_loss_count = Highest_AWR2["Total_Games"] - (awr2_win_count + awr2_draw_count)

hwr_counts = [hwr_win_count, hwr_draw_count, hwr_loss_count]
awr_counts = [awr_win_count, awr_draw_count, awr_loss_count]
awr2_counts = [awr2_win_count, awr2_draw_count, awr2_loss_count]

hwr_percentages = [Highest_HWR["WinRate%"], Highest_HWR["DrawRate%"], Highest_HWR["LossRate%"]]
awr_percentages = [Highest_AWR["WinRate%"], Highest_AWR["DrawRate%"], Highest_AWR["LossRate%"]]
awr2_percentages = [Highest_AWR2["WinRate%"], Highest_AWR2["DrawRate%"], Highest_AWR2["LossRate%"]]

colours = ["dodgerblue", "slategrey", "firebrick"]

def autopct_format(pct, total_counts):
    total = int(round(pct * sum(total_counts) / 100.0))
    return f"{pct:.1f}%\\n ({total})"

fig, axes = plt.subplots(1, 3, figsize=(10, 6))

axes[0].pie(hwr_percentages, labels=None, autopct=lambda pct: autopct_format(pct, hwr_counts), colors=colours, startangle=90)
axes[0].set_title(hwr_team)

axes[1].pie(awr_percentages, labels=None, autopct=lambda pct: autopct_format(pct, awr_counts), colors=colours, startangle=90)
axes[1].set_title(awr_team)

axes[2].pie(awr2_percentages, labels=None, autopct=lambda pct: autopct_format(pct, awr2_counts), colors=colours, startangle=90)
axes[2].set_title(awr2_team)

fig.legend(["WinRate%", "DrawRate%", "LossRate%"], loc="upper center", ncol=3, frameon=False, title="Match Outcomes", title_fontsize=14)

plt.tight_layout()
plt.show()
`

const findTotalShotsCode = `
def findTotalShots(year, team):
    totalHomeShots = cycleTeam(year, team)[cycleTeam(year, team)["home"] == team]["hs"].sum()
    totalAwayShots = cycleTeam(year, team)[cycleTeam(year, team)["away"] == team]["as"].sum()
    totalHomeTShots = cycleTeam(year, team)[cycleTeam(year, team)["away"] == team]["hst"].sum()
    totalAwayTShots = cycleTeam(year, team)[cycleTeam(year, team)["away"] == team]["ast"].sum()
    totalShots = totalHomeShots + totalAwayShots
    totalTShots = totalHomeTShots + totalAwayTShots

    return (team, year, int(totalHomeShots), int(totalAwayShots), int(totalHomeTShots), int(totalAwayTShots), int(totalShots), int(totalTShots))

findTotalShots(2016, "Arsenal")
`
const shotsBySeasonCode = `
shots_by_season = []
def findShotCounts():
    for year in years_list:
        for team in teams_list:
            shots_by_season.append(findTotalShots(year, team))
    return shots_by_season

ts_by_year = pd.DataFrame(findShotCounts())
ts_by_year.rename(columns = {0: "Team", 1: "Year", 2: "Total_HS", 3: "Total_AS", 4: "Total_HST", 5: "Total_AST", 6: "Total_Shots", 7: "Total_Shots_onTarget"}, inplace=True)
`
const totalShotsDecadeCode = `
ts_tg_by_decade = []
for team in teams_list:
    ts_tg_by_decade.append({
        "Team": team,
        "Total_HG": int(tg_by_year[tg_by_year["Team"] == team]["Total_HG"].sum()),
        "Total_AG": int(tg_by_year[tg_by_year["Team"] == team]["Total_AG"].sum()),
        "Total_Goals": int(tg_by_year[tg_by_year["Team"] == team]["Total_Goals"].sum()),
        "Total_HS": int(ts_by_year[ts_by_year["Team"] == team]["Total_HS"].sum()),
        "Total_AS": int(ts_by_year[ts_by_year["Team"] == team]["Total_AS"].sum()),
        "Total_HST": int(ts_by_year[ts_by_year["Team"] == team]["Total_HST"].sum()),
        "Total_AST": int(ts_by_year[ts_by_year["Team"] == team]["Total_AST"].sum()),
        "Total_Shots": int(ts_by_year[ts_by_year["Team"] == team]["Total_Shots"].sum()),
        "Total_Shots_onTarget": int(ts_by_year[ts_by_year["Team"] == team]["Total_Shots_onTarget"].sum())
        })

goals_and_shots_decade = pd.DataFrame(ts_tg_by_decade)
goals_and_shots_decade.head()
`

const shotConversionCode = `
goals_and_shots_decade.loc[:, "TSCR%"] = (
    round(goals_and_shots_decade["Total_Goals"] / goals_and_shots_decade["Total_Shots"], 3) * 100
)
goals_and_shots_decade.loc[:, "OTCR%"] = (
    round(goals_and_shots_decade["Total_Goals"] / goals_and_shots_decade["Total_Shots_onTarget"], 3) * 100
)
goals_and_shots_decade.loc[:, "SOT%"] = ( round(goals_and_shots_decade["Total_Shots_onTarget"] / goals_and_shots_decade["Total_Shots"], 3) * 100 )
goals_and_shots_decade.head()
`

const scatterPlotTSTG = `
plt.figure(figsize=(10, 6))
sea.regplot(x="Total_Shots", y="Total_Goals", data=goals_and_shots_decade, scatter_kws={"color": "green", "alpha": 0.7}, line_kws={"color": "skyblue"})

plt.xlabel("Total Shots")
plt.ylabel("Total Goals")
plt.title("Total Shots v. Total Goals by Team (Decade)")

plt.show()

plt.figure(figsize=(10, 6))
sea.regplot(x="Total_Shots_onTarget", y="Total_Goals", data=goals_and_shots_decade, scatter_kws={"color": "green", "alpha": 0.7}, line_kws={"color": "skyblue"})

plt.xlabel("Total Shots on Target")
plt.ylabel("Total Goals")
plt.title("Total Shots on Target v. Total Goals by Team (Decade)")

plt.show()
`

const boxplotTS = `
plt.figure(figsize=(10, 6))

sea.boxplot(
    data=ts_by_year,
    y="Year",
    x="Total_Shots",
    hue="Year",
    palette="Paired",
    orient='h',
    width=0.75,
    fliersize=1,
    linewidth=1,
    linecolor="black",
    legend=False
)

plt.xticks(range(100, 900, 100))
plt.grid(False)

plt.xlabel('Total Shots', fontsize=10)
plt.ylabel('Year', fontsize=10)
plt.title('Total Shots per Year', fontsize=14)

plt.gca().invert_yaxis()

plt.tight_layout()
plt.show()
`

const boxplotConversionYear = `
outlier_teams = {}
for year in goals_and_shots_seasonal['Year'].unique():
    year_data = goals_and_shots_seasonal[goals_and_shots_seasonal['Year'] == year]
    
    Q3 = year_data['TSCR%'].quantile(0.75)
    Q1 = year_data['TSCR%'].quantile(0.25)
    IQR = Q3 - Q1
    upper_fence = Q3 + 1.5 * IQR
    lower_fence = Q1 - 1.5 * IQR
    
    outliers = year_data[(year_data['TSCR%'] > upper_fence) | (year_data['TSCR%'] < lower_fence)]
    if not outliers.empty:
        outlier_teams[year] = outliers['Team'].tolist()
    else:
        outlier_teams[year] = []

fig = px.box(goals_and_shots_seasonal, y="Year", x="TSCR%",
             color="Year",
             boxmode="group",
             title="TSCR% of Teams by Year",
             subtitle="plotly express",
             labels={
                 "TSCR%": "TSCR%: Total Shots (Goal)Conversation Rate"
             })

for i, year in enumerate(sorted(goals_and_shots_seasonal['Year'].unique())):
    year_data = goals_and_shots_seasonal[goals_and_shots_seasonal['Year'] == year]
    Q3 = year_data['TSCR%'].quantile(0.75)
    Q1 = year_data['TSCR%'].quantile(0.25)
    IQR = Q3 - Q1
    upper_fence = Q3 + 1.5 * IQR
    lower_fence = Q1 - 1.5 * IQR
    
    customdata = []
    for tscr in year_data['TSCR%']:
        if tscr > upper_fence or tscr < lower_fence:
            team = year_data[year_data['TSCR%'] == tscr]['Team'].iloc[0]
            customdata.append(team)
        else:
            customdata.append('')
            
    fig.data[i].customdata = customdata
    fig.data[i].update(
        boxpoints="outliers",
        quartilemethod="linear",
        jitter=0,
        orientation='h',
        width=0.75,
        hovertemplate="<b>Team:</b> %{customdata}<br>" +
                     "<b>TSCR%:</b> %{x:.1f}%"
    )

fig.update_layout(
    height=580,
    width=980,
    xaxis=dict(
        tickmode="array",
        tickvals=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        ticktext=["0%", "2%", "4%", "6%", "8%", "10%", "12%", "14%", "16%", "18%"],
    ),
    yaxis=dict(
        tickmode="array",
        tickvals=sorted(goals_and_shots_seasonal['Year'].unique()),
        ticktext=[str(year) for year in sorted(goals_and_shots_seasonal['Year'].unique())],
    ),
    showlegend=False,
)
fig.show()
`

const ascMetric = `
goals_and_shots_seasonal.sort_values(by="OTCR%", ascending=False).head(40)
goals_and_shots_seasonal.loc[:, "SOT%"] = ( round(goals_and_shots_seasonal["Total_Shots_onTarget"] / goals_and_shots_seasonal["Total_Shots"], 3) * 100 )
goals_and_shots_seasonal.sort_values(by="SOT%", ascending=False).head()
goals_and_shots_seasonal.sort_values(by="OTCR%", ascending=False).head()

for year in years_list:
    mean = round(goals_and_shots_seasonal[goals_and_shots_seasonal["Year"] == year]["Total_Shots"].mean())
    max_shots = goals_and_shots_seasonal[goals_and_shots_seasonal["Year"] == year]["Total_Shots"].max()
    goals_and_shots_seasonal.loc[goals_and_shots_seasonal["Year"] == year, "ASC"] = \
        round(goals_and_shots_seasonal.loc[goals_and_shots_seasonal["Year"] == year, "Total_Shots"].apply(lambda x: min(max((x - mean) / (max_shots - mean), -1), 1)), 2)
    
goals_and_shots_seasonal.sort_values(by="ASC", ascending=False).tail(20)
`

const seasonalDF = `
exclude = ["Leicester", "Burnley", "Southampton", "Newcastle"]
teams_counts = goals_and_shots_seasonal.groupby('Team')['Year'].nunique()
played_every_season1424 = teams_counts[teams_counts == len(years_list)].index
played_every_season1424 = [team for team in played_every_season1424 if team not in exclude]
every_season_DF = goals_and_shots_seasonal[goals_and_shots_seasonal['Team'].isin(played_every_season1424)]

every_season_DF.reset_index(drop=True, inplace=True)
every_season_DF

new_data = []
for _, row in every_season_DF.iterrows():
    new_data.append({
        "Team": row["Team"],
        "Year": row["Year"],
        "ASC": row["ASC"]
    })

every_season_DF = pd.DataFrame(new_data)
every_season_DF.head()
`

const lineplotASC = `
fig = px.line(
  every_season_DF, 
  x="Year", 
  y="ASC", 
  color="Team",
  markers=False, 
  title="ASC (Average Shot Coefficent) Performance of Teams Over the Years"
)

fig.update_layout(
  height=620,
  width=1000,
  xaxis_title="Year",
  yaxis_title="ASC",
  yaxis=dict(zeroline=True, zerolinewidth=1, zerolinecolor="black"),
  legend_title="Teams",
  template="plotly_white",
)

fig.show()
`

const scatterOTCR = `
Team_Colours = {
    "Arsenal": "#ff0500",
    "Chelsea": "#cdb100",
    "Crystal Palace": "#FF00E3",
    "Everton": "#040300",
    "Liverpool": "#0eff1f",
    "Man City": "#00FAFF",
    "Man United": "#6100c4",
    "Tottenham": "#0d00ff",
    "West Ham": "#3a713c"
}

fig = px.scatter(EverySeason_Yearly_1424_DF, x="WinRate%", y="OTCR%", color="Team", title="", opacity=0.75, hover_data=["Year"], color_discrete_map=Team_Colours)
fig.update_traces(textposition="top center", marker=dict(size=11, line=dict(width=1, color="DarkSlateGrey")))
fig.update_layout(height=610, width=860, legend_title="Teams")

fig.show()
`

const Q3_Summary = `
There is a strong correlation between shots taken and goals scored, with a slightly weaker - 
but still strong correlation between shots on target and goals scored.

In addition to this I created three new novel metrics to assist with my analysis, 
these were the following:
1.    TSCR% (Total Shot Conversion Rate): Goals per total shots taken
2.    OTCR% (On Target Conversion Rate): Goals per shots on target
3.    ASC (Average Shot Coefficient): Team's shot frequency compared to season mean

Teams with high OTCR% achieved significantly better win rates (~61.6%)
Poor finishing teams, low OTCR%, struggled to win (~18.4% win rate)
Higher shot volumes correlate more strongly with goals than shot accuracy alone

Manchester City: High-volume shooting strategy with good conversion rates
Liverpool: Similar high-volume approach but lower conversion efficiency
Arsenal/Chelsea: More balanced approach between shot volume and accuracy

Man City had a very consistent ASC rating, averaging +0.91 across the entire decade! Meaning that
of all the Premier League teams active throughout that time, Man City were often the team
taking the most shots in a game - this can be indicative of a teams attacking tempo.

From these statistics that I worked with, there was a strong indication that Man City
over the last decade has been one of the most consistent and high performing teams in the League.
Conversely, of the EPL teams that have played every season since 2014, Crystal Palace on the whole
tends to be one of the most - arguably the most, underperforming team. There is a case to be made
against West Ham too, however, statistically their peaks were much higher, whereas
Crystal Palace never had amazing peaks, both in WinRate% or attacking tempo.

Of all 35 teams that have played in the EPL across the last decade (2014-2024),
Middlesbrough was categorically the worst, performing terrible in every meaningful metric and
often being the last, or second to last in the list. The following metrics are:

13.2% WinRate, 41.8% Shots on Target (Which, I have evaluated and shown has a negative 
correlation on performance),

18.5% OTCR% (On Target Conversion Rate), 7.7% TSCR% (Total Shot Conversion Rate) 

and a whopping -0.94 ASC (Average Shot Coefficient)

This means that Middlesbrough, had many of their shots on target, but the vast majority of them did 
not convert to goals - indictating a poor finishing performance. A terrible, TSCR% rate means that the 
shots they were taking that are not on target are of rather poor quality and poor shot selection, 
and in addition to this, they weren't even shooting that often. In the one season they played, 
they were close to being the bottom in total shots made. So of the very very few shots they decided 
to take, they were poor choices and they had no finishing.

This is reflected in their astronomically low Win Rate of 13.2%.

So if anyone asks you who the worst Premier League team of the last decade has been 
- Middlesbrough wouldn't be a terrible answer to give.
`

export {
     G1, D1, O1, G2, D2, D2_1,
     O2, G3, D3, O3, actionCode, bgCode,
     reducerCode, carouselCode, webscrapeCode, seedMatchesCode,
     dynamicPostPatchCode, reducerDescription, actionDescription, backgroundDescription, carouselDescription,
     dataBackground, dataMergeCode, devProcess, initialPlan, premDF, cycleteam, findTotalGoals, ftgDesc,
     getTeamYear, teamyearDesc, goalCounts, goalDesc, goalQDesc, reflectionOne, reflectionTwo, reflectionThree,
     reflectionFour, reflectionFive, goalQDesc2, barChartCode, totalWinsCode, totalWinsCodeImp, plotPieHomeAway, plotPieRates,
     findTotalShotsCode, shotsBySeasonCode, totalShotsDecadeCode, ascMetric, shotConversionCode, scatterPlotTSTG, boxplotTS,
     boxplotConversionYear, seasonalDF, lineplotASC, scatterOTCR, Q3_Summary
    }