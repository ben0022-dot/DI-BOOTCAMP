-- ==========================================
-- Create Tables and Insert Data
-- ==========================================

CREATE TABLE FirstTab (
    id INTEGER,
    name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

CREATE TABLE SecondTab (
    id INTEGER
);

INSERT INTO SecondTab VALUES
(5),
(NULL);

-- ==========================================
-- View Data
-- ==========================================

SELECT * FROM FirstTab;
SELECT * FROM SecondTab;

-- ==========================================
-- Q1
-- Prediction:
-- Subquery returns NULL only
-- Comparing with NOT IN (NULL) gives UNKNOWN
-- Output = 0
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NULL
);

-- Output: 0


-- ==========================================
-- Q2
-- Prediction:
-- Subquery returns (5)
-- Values not equal to 5 are counted
-- IDs counted: 6,7
-- NULL ignored
-- Output = 2
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id = 5
);

-- Output: 2


-- ==========================================
-- Q3
-- Prediction:
-- Subquery returns (5, NULL)
-- NOT IN with NULL returns UNKNOWN
-- No rows match
-- Output = 0
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
);

-- Output: 0


-- ==========================================
-- Q4
-- Prediction:
-- Subquery returns (5)
-- IDs not equal to 5 counted
-- IDs counted: 6,7
-- NULL ignored
-- Output = 2
-- ==========================================

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NOT NULL
);

-- Output: 2