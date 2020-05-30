--  header space 
 
--  Mock Users
 INSERT INTO Users (first_name, last_name, manager, email, password)
 VALUES ("John", "Smith", true, "js@gmail.com", "123456"),
("Jane", "Jones", true, "jj@gmail.com", "123456"),
("Julie", "Prince", true, "jp@gmail.com", "123456"),
("Mary", "Mack", false, "mem@gmail.com", "123456"),
("Mo", "Nance", false, "mn@gmail.com", "123456"),
("Matt", "Murphy", false, "mm@gmail.com", "123456"),
("Nick", "Ramos", false, "nr@gmail.com", "123456"),
("Noel", "Cooper", false, "nc@gmail.com", "123456"),
("Nat", "Plath", false, "np@gmail.com", "123456"),
("Paul", "Tack", false, "pt@gmail.com", "123456"),
("Pam", "Updike", false, "pu@gmail.com", "123456"),
("Pat", "Perry", false, "pp@gmail.com", "123456");

-- Mock Projects 
INSERT INTO Projects (project_name)
VALUES ("Project 1"),
("Project 2"),
("Project 3"),
("Project 4"),
("Project 5");

-- Mock Tasks 
INSERT INTO Tasks (task_name, status)
VALUES ("Models", "waiting"),
("Set up heroku", "assigned"),
("Convert to jQuery", "active"),
("Set Up Routes", "done"),
("Set Up Server", "waiting"),
("User Interface", "assigned"),
("Design", "active")

--  Mock Project Members
 INSERT INTO ProjectMembers (ProjectId, UserId)
 VALUES (1, 2),
(2, 1)