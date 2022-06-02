const inquirer = require("inquirer");

const department = async () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "department",
        message: "Please enter the name of the department.",
        validate: (department) => {
          if (department) {
            return true;
          } else {
            console.log("The department name is required");
            return false;
          }
        },
      },
    ]);
  };
  
  module.exports = department;