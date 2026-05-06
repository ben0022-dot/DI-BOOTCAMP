CREATE DATABASE user_auth_db;
USE user_auth_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

CREATE TABLE hashpwd (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL REFERENCES users(username),
    password TEXT NOT NULL
);