const employee = require("./employee.js");


class engineer extends employee{
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = role;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer";
    }
}

 module.exports = engineer;