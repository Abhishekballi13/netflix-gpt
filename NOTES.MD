# Netflix Gpt

- create react app
- configured TailwindCss
- Header
- Routing of App
- Login form
- Singin Form
- Sign up form
- useRef hook
- create Sign Up in firebase
- created redux store with user slice
- implemented sign out
- update profile
- bug fix :Sign up user displayName and profile picture update
- restricting the route,fixing the bugs
  - as header is present all across the app we are keeping this logic here,whenever authChanged is called it will automatically 
  - redirect him to if user is loged in ->> browse page
  - if user is logged out ->> login/sign up page
  - now our route is protected, if a user is not logged in he will not be able to move to browse page
- unsubscribed to our onAuthStateChanged callback function
- react.strict mode lot of things happen twice,reason is extra rendering of your components to check for inconsistencies
- this only happens in developer mode,not in production
-registered for tmdb api and create an app and get acess token
get data fron tmdb now playing movies list api
- custom hook for now playing movies
- create movieSlice
- update store with movies data
- planning for Main container and secondary container
- fetch data for trailer video
- update store with trailer video data
- emebeded the youtube video and make it autoplay and mute
- tailwind classes to make main container look more awesome 
- build our secondary container now
- now we are building gpt search feature
- GPT Search Page
- Multi language Feature in our App
- Integrate Gemini API
- created slice for gpt and added data there 
- reused movie list component to make movie suggestion container
- secret keys and info goes in .env file
- add .env files
- add .env file to gitignore
- did memoization ,so that we dont make unecesssary api calls like when we move between pages we are again and again api calls
so we subscribe to the store and only make call if no data is present for movies
- made our app responsive

# Features
 - Login/Signup Page
    - Sign In/Sign up form
    - redirect to Browse Page
 - Browse (after authentication)
    - Header
    - Main Movie
       - Trailer in background
       - Title and Description
       - Movie Suggestions
         - MovieLists * N
  - NetflixGpt
    -  Search Bar
    - Movie suggestions

- while deploying on vercel dont forget to add environment varibles there