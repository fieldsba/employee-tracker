const inquirer = require("inquirer");

const role = async () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "role",
        message: "Please enter the role.",
        validate: (role) => {
          if (role) {
            return true;
          } else {
            console.log("Role is required.");
            return false;
          }
        },
      },
    ]);
  };
  
  module.exports = department;