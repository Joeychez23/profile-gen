const employee = require("./employee.js");


class intern extends employee{
    constructor(name, id, email, school, role) {
        super(name, id, email);
        this.school = school;
        this.role = role;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern";
    }
}

 module.exports = intern;