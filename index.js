const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "optionList",
      message: "Please select an option from the list",
      choices: [
        "View departments",
        "View roles",
        "View employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Change an employee's role",
      ],
    },
    {
      type: "input",
      name: "department",
      message: "What is the name of the department?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a department!");
          return false;
        }
      },
    },
  ]);
};
console.log(console.table(`SELECT * FROM departments;`));
promptUser();