CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL
);

CREATE TABLE Customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INTEGER REFERENCES Customer(id)
);

INSERT INTO Customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');
INSERT INTO Customer_profile (isLoggedIn, customer_id)
SELECT TRUE, id FROM Customer WHERE first_name = 'John';

INSERT INTO Customer_profile (isLoggedIn, customer_id)
SELECT FALSE, id FROM Customer WHERE first_name = 'Jerome';

SELECT c.first_name
FROM Customer c
INNER JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

SELECT COUNT(*) AS not_loggedin
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL
);

INSERT INTO Book (title, author) VALUES 
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

INSERT INTO Student (name, age) VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
       (SELECT student_id FROM Student WHERE name = 'John'),
       '2022-02-15';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
       (SELECT student_id FROM Student WHERE name = 'Bob'),
       '2021-03-03';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
       (SELECT student_id FROM Student WHERE name = 'Lera'),
       '2021-05-23';

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
SELECT (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
       (SELECT student_id FROM Student WHERE name = 'Bob'),
       '2021-08-12';

	   SELECT * FROM Library;

	   SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age) AS avg_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student WHERE name = 'Patrick';  -- Library unchanged
SELECT * FROM Library;  -- Still 4 rows

