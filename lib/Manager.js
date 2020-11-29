// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }
}

//let testManager = new Manager("Joe", 7866, "test@gmail.com", 334);
//console.log(testManager);

module.exports = Manager;