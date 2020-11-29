// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

//let testEngineer = new Engineer("engineer name", 3341, "engineer@email.com", "engineerpro");
//console.log(testEngineer);

module.exports = Engineer;