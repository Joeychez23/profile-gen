const employee = require("./employee.js");


class manager extends employee{
    constructor(name, id, email, offices, role) {
        super(name, id, email);
        this.offices = offices;
        this.role = role;
    }

    getOffices() {
        return this.offices
    }

    getRole() {
        return "Manager";
    }
}

 module.exports = manager;