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
const G2 = `The objective of this website was to create a platform which would provide users with live games of current premier league matches and allow them to make predictions
            on the outcome of the match, the scope of this project initially started with limiting it to predicting xG (expected goals) of Arsenal matches, but I have since expanded
            it into something more. Allowing the user to predict on more statistics, as well as expanding the pool to all premier league teams.`
const D2 = `Given that the 'cards' are a core concept of the web application, I decided to create a component for them first and ensure it was functional,
            I gave the card a very basic UI design just for the purposes of testing.`
const D2_1 = ``
const O2 = `Outcome to be added upon completion of project.`

/* Project: Data Analysis, data exploration, cleaning and visualisation project
    relevant string information is found below */
const G3 = `Goal of some kind`
const D3 = `Development of some kind`
const O3 = `Outcome of some kind`







// Code stuff below:
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



export {G1, D1, O1, G2, D2, D2_1,
     O2, G3, D3, O3, actionCode, bgCode,
     reducerCode, carouselCode, webscrapeCode, seedMatchesCode,
     dynamicPostPatchCode, reducerDescription, actionDescription, backgroundDescription, carouselDescription
    }