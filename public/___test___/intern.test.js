const Intern = require("../javascripts/library/intern.js");

test("School test", function() {
    const School = "N/A";
    const intTest = new Intern("Joseph", 23, "joeychez123@gmail.com", School);
    expect(intTest.school).toBe(School);
})

test("getSchool() test", function() {
    const School = "N/A";
    const intTest = new Intern("Joseph", 23, "joeychez123@gmail.com", School);
    expect(intTest.getSchool()).toBe(School);
})

test("getRole() test", function() {
    const Role = "Intern"
    const intTest = new Intern("Joseph", 23, "joeychez123@gmail.com", 23);
    expect(intTest.getRole()).toBe(Role);
})