## Project Setup
1. Install dependencies:
```
npm install
```

2. Start the project:
```
npm start
```
First, run the development server:
npm run dev

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### About the Project

Technologies in the project: 
 - React
 - TypeScript
 - Next.js
 - Tailwind CSS
 - Jest
 - React Testing Library


Page build
Layout built with flexbox

Navigation
- use of next app router


Index Page
- server component
- use of Next.js fetch API
- data is passed from the index page to the relevant exercise page using a link and query parameters




Exercise Page
- client component
- localStorage
  - each exercise stores data based on an exercise key in localstorage
  - e.g. "fitbod-landmine-press"
  - e.g. "fitbod-dumbbell-fly"
- input validation
- error handling
- responsive design for smaller mobile viewports



Mock of Data stored :

    [{
    id: "03/23/2024",
    data: [
      {
        "exerciseId": "lat-pulldown",
        "time": "2024-03-19T23:47:08.683Z",
        "reps": "10",
        "weight": "20",
        "estimated1RM": 27
      },
      {
        "exerciseId": "lat-pulldown",
        "time": "2024-03-19T23:46:44.474Z",
        "reps": "10",
        "weight": "60",
        "estimated1RM": 80
      },
      {
        "exerciseId": "lat-pulldown",
        "time": "2024-03-19T23:45:53.590Z",
        "reps": "5",
        "weight": "70",
        "estimated1RM": 79
      },
      {
        "exerciseId": "lat-pulldown",
        "time": "2024-03-19T23:04:32.878Z",
        "reps": "12",
        "weight": "50",
        "estimated1RM": 72
      }
    ]
  }, {
    id: "03/22/2024",
    data: [
      {
        "exerciseId": "lat-pulldown",
        "time": "2024-03-19T23:47:08.683Z",
        "reps": "10",
        "weight": "20",
        "estimated1RM": 27
      },
      {
        "exerciseId": "lat-pulldown",
        "time": "2024-03-19T23:46:44.474Z",
        "reps": "10",
        "weight": "60",
        "estimated1RM": 80
      },
      {
        "exerciseId": "lat-pulldown",
        "time": "2024-03-19T23:45:53.590Z",
        "reps": "5",
        "weight": "70",
        "estimated1RM": 79
      }
    ]
  }]
  






### Testing
 - create mock test for get exercises api
  - see fetchExercises.ts




- focused on rendering
- given more time, I would work toward better test coverage of functionality such the PerformanceForm behavior with user inputs
- found quirks when trying to mock the api request for server components
- found quirks when trying to test useParams hook for the exercise page - may not be possible at this time
- fix deprecatoin warnings
  - testURL is being replaced (passing the URL via "testEnvironmentOptions.url")



### Questions for the Design Team
- in the scenario where I'm collaborating with the designer/design team, these are clarifying questions I would have in order to ensure we build for responsiveness but stick to the spirit of the design

	32px space between the “weight” input and the “+” button

	- visually, looks better to preserve the 32px spacing around all content
	- samsung Galaxy S8+ has an especially small screen width. I’ve modified the labels to stack on top of input fields so we retain all input fields and “+” button in one horizontal line (use Chrome dev tools to get a better visual)
  - add "No performances found" when no performances exist

Clarification: 
	“+” button has an 1px black border on the desktop view, but not the mobile view



### Known quirks/bugs
	- mobile handling of red ring around the input fields
	- focus-visible modifier in tailwind behaves a bit weird
		https://tailwindcss.com/docs/hover-focus-and-other-states


