-- 1. Create the database
CREATE DATABASE bootcamp;

-- 2. Use the database (if using MySQL/PostgreSQL command line)
-- USE bootcamp;

-- 3. Create the table
CREATE TABLE students (
    id SERIAL PRIMARY KEY, -- 'SERIAL' or 'AUTO_INCREMENT' depending on your SQL dialect
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

-- Efficiently insert multiple rows at once
INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

-- Insert your own information (ID will auto-increment to 7)
INSERT INTO students (first_name, last_name, birth_date) 
VALUES ('John', 'Doe', '1995-05-20');

-- 1. Fetch all of the data from the table.
SELECT * FROM students;

-- 2. Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students;

-- 3. Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students WHERE id = 2;

-- 4. Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- 5. Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- 6. Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

-- 7. Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%';

-- 8. Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- 9. Fetch the students whose second to last letter of their first_names are a.
-- The underscore (_) represents exactly one character.
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

-- 10. Fetch the students whose id’s are equal to 1 AND 3.
-- Note: Use IN because a single row cannot have two IDs at once.
SELECT first_name, last_name FROM students WHERE id IN (1, 3);

-- 11. Fetch the students whose birth_dates are equal to or come after 1/01/2000.
SELECT * FROM students WHERE birth_date >= '2000-01-01';