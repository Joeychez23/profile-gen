const Employee = require("../javascripts/library/employee.js");


test("Testing employee initalization.", function() {
    const emTest = new Employee();
    expect(typeof(emTest)).toBe("object");
})


//Object testing

test("Name test", function() {
    const Name = "Joseph";
    const emTest = new Employee(Name);
    expect(emTest.name).toBe(Name);
})

test("ID test", function() {
    const Id = 23;
    const emTest = new Employee("Joseph", Id);
    expect(emTest.id).toBe(Id);
})

test("Email test", function() {
    const Email = "joeychez123@gmail.com";
    const emTest = new Employee("Joseph", "23", Email);
    expect(emTest.email).toBe(Email);
})


//Method testing


test("getName() test", function() {
    const Name = "Joseph";
    const emTest = new Employee(Name);
    expect(emTest.getName()).toBe(Name);
})

test("getId() test", function() {
    const Id = 23;
    const emTest = new Employee("Joseph", Id);
    expect(emTest.getId()).toBe(Id);
})

test("getEmail() test", function() {
    const Email = "joeychez123@gmail.com";
    const emTest = new Employee("Joseph", 23, Email);
    expect(emTest.getEmail()).toBe(Email);
})

test("getRole() test", function() {
    const Role = "Employee";
    const emTest = new Employee("Joseph", 23, "joeychez123@gmail.com");
    expect(emTest.getRole()).toBe(Role);
})
