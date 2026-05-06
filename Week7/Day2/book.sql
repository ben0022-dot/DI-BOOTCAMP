CREATE DATABASE book_db;
USE book_db;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    "publishedYear" INTEGER NOT NULL
);