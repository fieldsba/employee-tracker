const inquirer = require("inquirer");

const department = async () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "employee",
        message: "Please enter the name of the employee.",
        validate: (emp) => {
          if (emp) {
            return true;
          } else {
            console.log("Employee name is required.");
            return false;
          }
        },
      },
    ]);
  };
  
  module.exports = department;