SELECT rating, COUNT(*) as film_count 
FROM film 
GROUP BY rating;

SELECT title, length, rental_rate 
FROM film 
WHERE (rating = 'G' OR rating = 'PG-13') 
  AND length < 120 
  AND rental_rate < 3.00 
ORDER BY title;

-- Update customer details
UPDATE customer 
SET first_name = 'YourFirstName', 
    last_name = 'YourLastName', 
    email = 'your.email@example.com' 
WHERE customer_id = 1;

-- Update address (assuming address_id from customer table)
UPDATE address 
SET address = 'Your Street', 
    address2 = 'Apt 123', 
    district = 'Your District', 
    city_id = 1  -- Adjust as needed
WHERE address_id = (SELECT address_id FROM customer WHERE customer_id = 1);

UPDATE students 
SET birth_date = '1998-11-02' 
WHERE first_name = 'Lea' AND last_name = 'Benichou';

UPDATE students 
SET birth_date = '1998-11-02' 
WHERE first_name = 'Marc' AND last_name = 'Benichou';

UPDATE students 
SET last_name = 'Guez' 
WHERE first_name = 'David' AND last_name = 'Grez';

DELETE FROM students 
WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- Total students
SELECT COUNT(*) FROM students;

-- Born after 1/01/2000
SELECT COUNT(*) FROM students 
WHERE birth_date > '2000-01-01';

ALTER TABLE students ADD COLUMN math_grade INT;

UPDATE students SET math_grade = 80 WHERE id = 1;
UPDATE students SET math_grade = 90 WHERE id IN (2, 4);
UPDATE students SET math_grade = 40 WHERE id = 6;

-- Count grades > 83
SELECT COUNT(*) FROM students WHERE math_grade > 83;

INSERT INTO students (first_name, last_name, birth_date, math_grade) 
VALUES ('Omer', 'Simpson', 
        (SELECT birth_date FROM students WHERE first_name = 'Omer'), 70);

		SELECT first_name, last_name, COUNT(math_grade) as total_grades
FROM students
GROUP BY first_name, last_name;

SELECT SUM(math_grade) FROM students;

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    item_id INT REFERENCES items(id),
    quantity_purchased INT
);

-- Inserts using subqueries (adjust IDs based on actual data)
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES 
    ((SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'), 
     (SELECT id FROM items WHERE name = 'fan'), 1),
    ((SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'), 
     (SELECT id FROM items WHERE name = 'large desk'), 10),
    ((SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'), 
     (SELECT id FROM items WHERE name = 'small desk'), 2);
SELECT p.*, c.first_name, c.last_name 
FROM purchases p 
JOIN customers c ON p.customer_id = c.id;

SELECT * FROM purchases 
WHERE item_id IN (
    SELECT id FROM items 
    WHERE name LIKE '%large desk%' OR name LIKE '%small desk%'
);

SELECT c.first_name, c.last_name, i.name 
FROM customers c
JOIN purchases p ON c.id = p.customer_id
JOIN items i ON p.item_id = i.id;

INSERT INTO purchases (customer_id, quantity_purchased) VALUES (1, 5);




