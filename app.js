const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
function buildTeam(){
    const teamMembers = [];
    const managerQs = [
        {
            type: "input",
            name: "mame",
            message: "What is the managers name?"
        },
        {
            type: "imput",
            name: "id",
            message: "What is the managers ID#?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the managers email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?"
        }
    ]
    const engineerQs = [
        {
            type: "input",
            name: "mame",
            message: "What is the engineers name?"
        },
        {
            type: "imput",
            name: "id",
            message: "What is the engineers ID#?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineers email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineers GitHub username?"
        }
    ]
    const internQs = [
        {
            type: "input",
            name: "mame",
            message: "What is the interns name?"
        },
        {
            type: "imput",
            name: "id",
            message: "What is the interns ID#?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the interns email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
        }
    ]
    
    //prompt user to add an employee (choose manager, engineer, or intern) or not
    
    function questionUser() {
        inquirer.prompt([
        {
            type: "list",
            name: "builder",
            message: "Would you like to add a team member?",
            choices: ["Manager", "Engineer", "Intern", "No"]
        }
        ]).then((response) => {
            //console.log(response.builder)
            //if Manager is selected, run the addManager function
            if (response.builder === "Manager") {
                console.log("this works")
                addManager();
            }
            //if Engineer is selected, run the addEngineer function
            else if (response.builder === "Engineer") {
                addEngineer();
            }
            //if Intern is selected, run the addIntern function
            else if (response.builder === "Intern") {
                addIntern();
            }
            //if No is selected, assuming the team is complete, render the HTML page
            else if (response.builder === "No") {
                console.log(teamMembers);
            }
        })
    }
    // and to create objects for each team member (using the correct classes as blueprints!)
    //addManager function should use the managerQs to prompt the user, then push the new Manager to the array, then run  
    function addManager() {
        inquirer.prompt(managerQs).then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamMembers.push(manager);
            questionUser();
        })
    }
    
    function addEngineer(){
        inquirer.prompt(engineerQs).then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
            questionUser();
        })
    }
    
    function addIntern() {
        inquirer.prompt(internQs).then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            questionUser();
        })
    }
    questionUser();
}


buildTeam();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
