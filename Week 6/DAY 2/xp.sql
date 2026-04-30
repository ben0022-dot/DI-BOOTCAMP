-- 1. All items, ordered by price (lowest to highest)
SELECT * FROM items ORDER BY price ASC;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;

-- 3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY last_name DESC;

-- 1. Select all columns from the "customer" table
SELECT * FROM customer;

-- 2. Display the names (first_name, last_name) using an alias named "full_name"
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3. Get all the dates that accounts were created (no duplicates)
SELECT DISTINCT create_date FROM customer;

-- 4. Get all customer details from the customer table, displayed in descending order by their first name
SELECT * FROM customer ORDER BY first_name DESC;

-- 5. Get film ID, title, description, year of release and rental rate in ascending order according to their rental rate
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

-- 6. Get the address and phone number of all customers living in the Texas district
SELECT a.address, a.phone 
FROM address a
JOIN customer c ON a.address_id = c.address_id
WHERE a.district = 'Texas';

-- 7. Retrieve all movie details where the movie id is either 15 or 150
SELECT * FROM film WHERE film_id IN (15, 150);

-- 8. Check if a favorite movie exists in the database (get film ID, title, description, length and rental rate)
-- Replace "Your Movie Title" with your actual favorite movie
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Your Movie Title';

-- 9. Get film ID, title, description, length and rental rate of all movies starting with the two first letters of your favorite movie
-- Replace "AB" with the first two letters of your favorite movie
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'AB%';

-- 10. Find the 10 cheapest movies
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

-- 11. Find the next 10 cheapest movies (bonus: try not to use LIMIT)
-- Using LIMIT with OFFSET
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;

-- Bonus approach without LIMIT (using a subquery)
SELECT f.* 
FROM film f
WHERE f.rental_rate > (SELECT MIN(rental_rate) FROM (
    SELECT rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 9
) AS temp)
ORDER BY f.rental_rate ASC
LIMIT 10;

-- 12. Join data from customer and payment tables to get first name, last name, amount and date of every payment, ordered by customer id
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 13. Get all movies which are not in inventory
SELECT f.* 
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;

-- 14. Find which city is in which country
SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

-- 15. Get customer's id, names, amount and date of payment ordered by the id of the staff member (bonus)
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;