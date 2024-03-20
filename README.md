<!-- youtube video link -->

youtube video link for basic explaination - https://youtu.be/6zgQtp-EcFU

<!-- Project setup -->

This project is made using vite react & using core libraries like Sass, Recharts & Redux

script commands
To install in local - npm install
To run on localhost - npm run dev
To build - npm run build

<!-- Main folder structure -->

readme.md - readme file
mock_DB - to mock data of database using json file (ai-data.json)
mock_backend - to mock api endpoint for fetching data using Promise
frontend - all the core logics and files are inside this folder

frontend/src/components - all 4 components for each chart
frontend/src/sass - all the styles
frontend/src/state - core logics for redux store, slices & reducers
frontend/src/main.tsx - entry point
frontend/src/app.tsx - data fetching on page load & calling components

<!-- funcionality -->

1. app.tsx
   using useEffect() to fetch data on page load & passing it to all different components as per requirment

2. CategoryDistribution - component to display bar graph for distribution of queries per category

- First data is transformed into array of objects to match it for recharts data requirements type
- Using responsive design system, a bar chart is dispayed along with customTooltip

3. ResponseTime - component to display the avg time of trends on basis of days or weeks using a two tabs

- State for tab buttons is managed using Redux
- Using responsive design system, a line charts is displayed

4. ResponseTime - component to display usage statistics on basis of platform and country of users

- State for tab buttons is managed using Redux
- A pie chart is displayed using customized labels

3. UserSatisfaction - component to display the count of users on basis of different ratings

- Bar is used to display the data

<!-- Main styles -->

Sass is used for pre-processing the css applied
Gradient is used at home page
Grid for two columns is used to display charts laptop screen which later converted to single column for screen less than 920px wide
Consistent theme is used to have satisfactory user experience
