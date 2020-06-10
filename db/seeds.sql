--  header space 
 
--  Mock Users
 INSERT INTO Users (userName, first_name, last_name, manager, email)
 VALUES ("John", "John", "Smith", true, "js@gmail.com"),
("Jane", "Jane", "Jones", true, "jj@gmail.com"),
("Julie", "Julie", "Prince", true, "jp@gmail.com"),
("Mary", "Mary", "Mack", false, "mem@gmail.com"),
("Mo", "Mo", "Nance", false, "mn@gmail.com"),
("Matt", "Matt", "Murphy", false, "mm@gmail.com"),
("Nick", "Nick", "Ramos", false, "nr@gmail.com"),
("Noel", "Noel", "Cooper", false, "nc@gmail.com"),
("Nat", "Nat", "Plath", false, "np@gmail.com"),
("Paul", "Paul", "Tack", false, "pt@gmail.com"),
("Pam", "Pam", "Updike", false, "pu@gmail.com"),
("Pat", "Pat", "Perry", false, "pp@gmail.com"),
("Jen", "Jen", "Kruk", true, "jennsmail2000@yahoo.com");

-- Mock Projects 
INSERT INTO Projects (project_name, project_status, ProjectManagerId)
VALUES ("Project 1", null, 1),
("Project 2", null, 2),
("Project 3", null, 3),
("Project 4", null, 4),
("Project 5", null, 13);

-- Mock Tasks 
INSERT INTO Tasks (task_name, status, ProjectID, UserID)
VALUES ("Models", "waiting", 1, 2),
("Set up heroku", "assigned", 2, 3),
("Convert to jQuery", "active", 3, 4),
("Set Up Routes", "done", 1, 5),
("Set Up Server", "waiting", 2, 6),
("User Interface", "assigned", 3, 7),
("Design", "active", 5, 8);

--  Mock Project Members
 INSERT INTO ProjectMembers (ProjectId, UserId)
 VALUES (1, 2),
(2, 1),
(3, 1);