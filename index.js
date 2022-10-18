const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./public/javascripts/library/engineer.js");
const Manager = require("./public/javascripts/library/manager.js");
const Intern = require("./public/javascripts/library/intern.js");
const PUBLIC_DIR = path.resolve(__dirname, "public");
const testPath = path.join(PUBLIC_DIR, "test.html");
const renderHTML = require("./public/javascripts/src/template.js");



console.log(typeof(renderHTML));

/*
console.log(data);

data = JSON.parse(data);

console.log(data[0]);
*/

let team = new Array();

//Write the base html


let check = false;
let setMan = true;




const role = [
  {
    type: "list",
    message: "What employee type would you like to add",
    name: "role",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
  },
];

//Manager Questions
const managerQ = [
  {
    type: "input",
    message: "what is the managers name",
    name: "manName",
    validate: function (manName) {
      if (manName) {
        return true;
      } else {
        console.log("\nInvaild Name (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the managers ID",
    name: "manId",
    validate: function (manId) {
      manId = Number(manId);
      if (manId && manId != NaN) {
        return true;
      } else {
        console.log("\nInvaild ID (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the managers Email",
    name: "manEmail",
    validate: function (manEmail) {
      let check1 = 0;
      let check2 = 0;
      for (let i = 0; i < manEmail.length; i++) {
        if (manEmail[i] == "@") {
          check1 = 1;
        }
        if (manEmail[i] == ".") {
          check2 = 1;
        }
        if (manEmail[i] == '"') {
          check1 = 0;
          check2 = 0;
        }
      }
      if (manEmail && check1 >= 1 && check2 >= 1) {
        return true;
      } else {
        console.log("\nInvaild Email (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "how many offaces does the manager manage ",
    name: "manOff",
    validate: function (manOff) {
      manOff = Number(manOff);
      if (manOff && manOff != NaN) {
        return true;
      } else {
        console.log("\nInvaild Input (try again)");
        return false;
      }
    },
  },
];

//Engineer Questions
const engineerQ = [
  {
    type: "input",
    message: "what is the engineers name",
    name: "enginName",
    validate: function (enginName) {
      if (enginName) {
        return true;
      } else {
        console.log("\nInvaild Name (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the engineers ID",
    name: "enginId",
    validate: function (enginId) {
      enginId = Number(enginId);
      if (enginId && enginId != NaN) {
        return true;
      } else {
        console.log("\nInvaild ID (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the engineers Email",
    name: "enginEmail",
    validate: function (enginEmail) {
      let check1 = 0;
      let check2 = 0;
      for (let i = 0; i < enginEmail.length; i++) {
        if (enginEmail[i] == "@") {
          check1 = 1;
        }
        if (enginEmail[i] == ".") {
          check2 = 1;
        }
        if (enginEmail[i] == '"') {
          check1 = 0;
          check2 = 0;
        }
      }
      if (enginEmail && check1 >= 1 && check2 >= 1) {
        return true;
      } else {
        console.log("\nInvaild Email (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the engineers github",
    name: "enginGit",
    validate: function (enginGit) {
      if (enginGit) {
        return true;
      } else {
        console.log("\nInvaild GitHub (try again)");
        return false;
      }
    },
  },
];

//Interns Questions
const internQ = [
  {
    type: "input",
    message: "what is the interns name",
    name: "intName",
    validate: function (intName) {
      if (intName) {
        return true;
      } else {
        console.log("\nInvaild Name (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the interns ID",
    name: "intId",
    validate: function (intId) {
      intId = Number(intId);
      if (intId && intId != NaN) {
        return true;
      } else {
        console.log("\nInvaild ID (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what is the interns Email",
    name: "intEmail",
    validate: function (intEmail) {
      let check1 = 0;
      let check2 = 0;
      for (let i = 0; i < intEmail.length; i++) {
        if (intEmail[i] == "@") {
          check1 = 1;
        }
        if (intEmail[i] == ".") {
          check2 = 1;
        }
        if (intEmail[i] == '"') {
          check1 = 0;
          check2 = 0;
        }
      }
      if (intEmail && check1 >= 1 && check2 >= 1) {
        return true;
      } else {
        console.log("\nInvaild Email (try again)");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "what school did the intern attend",
    name: "intSch",
    validate: function (intSch) {
      if (intSch) {
        return true;
      } else {
        console.log("\nInvaild GitHub (try again)");
        return false;
      }
    },
  },
];

//Add all the roles
async function addMan() {
  const results = await inquirer.prompt(managerQ);
  //console.log(results);
  const data = new Manager(
    results.manName,
    results.manId,
    results.manEmail,
    results.manOff,
    "Manager"
  );
  team.push(data);
  console.log(team);
}

async function addEngin() {
  const results = await inquirer.prompt(engineerQ);
  //console.log(results);
  const data = new Engineer(
    results.enginName,
    results.enginId,
    results.enginEmail,
    results.enginGit,
    "Engineer"
  );
  team.push(data);
  console.log(team);
}

async function addIntern() {
  const results = await inquirer.prompt(internQ);
  //console.log(results);
  const data = new Intern(
    results.intName,
    results.intId,
    results.intEmail,
    results.intSch,
    "Intern"
  );
  team.push(data);
  console.log(team);
}

async function createTeam() {
  let currEmp;
  if(setMan == false) {
    currEmp = await inquirer.prompt(role);
  }
  if(setMan == true) {
    currEmp = {
      role: "Manager"
    }
    setMan = false;
  }

  //currEmp = await inquirer.prompt(role);

  if (currEmp.role == "Manager") {
    await addMan();
    createTeam();
  }

  if (currEmp.role == "Engineer") {
    await addEngin();
    createTeam();
  }

  if (currEmp.role == "Intern") {
    await addIntern();
    createTeam();
  }

  if (currEmp.role == "Exit") {
    fs.writeFile("./index.html", renderHTML(team), "UTF-8", function (err) {
      if (err) {
        console.log(err);
        return;
      }
    })
  }
}

createTeam();
