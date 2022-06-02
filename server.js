const express = require('express');
const inquirer = require("inquirer");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: '',
  port: 3001,
  database: 'employeeTracker'
});

function promptUser() {
    inquirer
        .prompt({
            type: "list",
            choices: [
                "View Departments",
                "View Roles",
                "View Employees",
                "Add Department",
                "Add Role",
                "Add Employee"
            ],
            message: "Please select an option from the menu",
            name: "choice"
        })
        .then(function(result) {
            console.log("You chose: " +result.choice);
            switch (result.choice) {
                case "View Departments":
                    viewAllDepartments();
                    break;
                case "View Roles":
                    viewAllRoles();
                    break;
                case "View Employees":
                    viewAllEmployees();
                    break;
                case "Add Department":
                    newDepartment();
                    break;
                case "Add Role":
                    newRole();
                    break;
                case "Add Employee":
                    newEmployee();
                    break;
            }
        });
}
function viewAllDepartments() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        startApp();
    });
}
function viewAllRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
}

function viewAllEmployees() {
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startScreen();
    });
}
function newDepartment() {
    inquirer.prompt({
        type: "input",
        message: "Please enter the name of the department.",
        name: "newDep"
    }).then(function(answer){
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.newDep], function(err, res){
            if (err) throw err;
            console.table(res)
            startApp();
        })
    })
}
function newRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the role.",
            name: "newRole",
        },
        {
            type: "input",
            message: "Please enter the annual salary for this role (do not include dollar signs or commas)",
            name: "salary"
        },
        {
            type: "input",
            message: "Please enter the department number for the new role."
        }
    ]).then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.newRole, answer.salary, answer.depID], function(err, res) {
            if (err) throw err;
            console.table(res);
            startApp()
        });
    });
};

function newEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the employee's first name",
            name: "firstName"
        },
        {
            type: "input",
            message: "Please enter the employee's last name",
            name: "lastName"
        },
        {
            type: "input",
            message: "Please enter the employee's role ID number",
            name: "roleId"
        },
        {
            type: "input",
            message: "Please enter the employee's manager ID number",
            name: "managerId"
        }
    ]).then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.lastNam, answer.firstNam, answer.empId, answer.manId], function(err, res) {
            if (err) throw err;
            console.table(res);
            startApp();
        });
    });
}

promptUser();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});