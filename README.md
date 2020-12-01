# Employee Engine
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Workflow](#workflow)
  - [Test Instructions](#test-instructions)
  - [Contact Me](#contact-me)

  ## Description
  Link to GitHub Repo: https://github.com/shannonquinn91/Employee-Engine
  This is a Node CLI application that takes in information about employees and generates an HTML webpage that displays summaries for each employee. The application prompts the user for information about the team members. The user an input any number of team members, and they may be a mix of managers, engineers, and interns. When the user has completed building the team, the application creates an HTML file that displays a formatted team roster based on the information provided by the user. This application uses the inquirer npm package to prompt the user. Jest was also installed to test the application.     

  Here is a walkthrough video of how to run this application:
  

  ## Installation
  A user can install this package using the following command:
  ```
  npm install
  ```
  

  ## Workflow
  My approach to this assignment was to begin with the code that was provided to start, which included pre-written tests, templates for the HTML page, and a start to the app.js file. I then created an Employee constructor and extended it to add methods and keys specific to a manager, engineer, and intern. I then wrote the function which builds the team. This function includes the questions for inquirer (based on which role the user is adding), and methods to execute when the user selects manager, engineer, intern, or "No". The "No" option means the user has completed building their team. When the user selects "No", the method which writes the HTML file is executed.

  

  ## Test Instructions
  A user can test this package using the following command:
  ```
  npm run test
  ```
  
  
  ## Contact Me
  You can check out my GitHub profile at https://www.github.com/shannonquinn91 or email me at shannon.quinn91@gmail.com.
  