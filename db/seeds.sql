INSERT INTO department (name)
VALUES ("Accounting"),
        ("Administration"),
        ("Human Resources"),
        ("IT");

INSERT INTO role (department_id, title, salary)
VALUES (1, "Head Accountant", 75000),
        (1, "Staff Accountant", 60000),
        (2, "Administrator", 80000),
        (3, "HR Coordinator", 55000),
        (4, "IT Lead", 100000),
        (4, "Help Desk Representative", 40000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeanine", "Gracelyn", 1, 2),
        ("Tobin", "Kaylie", 2, 1),
        ("Monique", "Ariella", 3, 2),
        ("Aloysius", "Alban", 4, 1),
        ("Toni", "Kyla", 1, 1),
        ("Taru", "Voitto", 4, 2);
