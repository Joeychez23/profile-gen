const Engineer = require("../javascripts/library/engineer.js");

test("Github test", function() {
    const Github = "Joeychez23";
    const enTest = new Engineer("Joseph", 23, "joeychez123@gmail.com", Github);
    expect(enTest.github).toBe(Github);
})

test("getGithub() test", function() {
    const Github = "Joeychez23";
    const enTest = new Engineer("Joseph", 23, "joeychez123@gmail.com", Github);
    expect(enTest.getGithub()).toBe(Github);
})

test("getRole() test", function() {
    const Role = "Engineer"
    const enTest = new Engineer("Joseph", 23, "joeychez123@gmail.com", 23);
    expect(enTest.getRole()).toBe(Role);
})