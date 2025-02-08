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

export {G1, D1, O1, G2, D2, D2_1, O2, G3, D3, O3}