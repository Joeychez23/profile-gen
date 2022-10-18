const Manager = require("../javascripts/library/manager.js");

test("Offices test", function() {
    const Offices = 23
    const manTest = new Manager("Joseph", 23, "joeychez123@gmail.com", Offices);
    expect(manTest.offices).toBe(Offices);
})

test("getOffices() test", function() {
    const Offices = 23
    const manTest = new Manager("Joseph", 23, "joeychez123@gmail.com", Offices);
    expect(manTest.getOffices()).toBe(Offices);
})

test("getRole() test", function() {
    const Role = "Manager"
    const manTest = new Manager("Joseph", 23, "joeychez123@gmail.com", 23);
    expect(manTest.getRole()).toBe(Role);
})