// knexfile.js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',       // your postgres username
      password: 'password',   // your postgres password
      database: 'user_auth_db',
      port: 5432
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};


const knex = require('knex');
const config = require('../../knexfile');

// Initialize Knex using the development environment settings
const db = knex(config.development);

module.exports = db;



const db = require('../config/db');

// Uses a transaction to insert into BOTH tables securely
const createUser = async (userData, hashedPassword) => {
  return db.transaction(async (trx) => {
    // Insert into users table
    await trx('users').insert({
      email: userData.email,
      username: userData.username,
      first_name: userData.first_name,
      last_name: userData.last_name
    });

    // Insert into hashpwd table
    await trx('hashpwd').insert({
      username: userData.username,
      password: hashedPassword
    });
  });
};

const findByUsername = async (username) => {
  // Joining tables to get full user details including the hashed password
  return db('hashpwd')
    .join('users', 'hashpwd.username', 'users.username')
    .where({ 'hashpwd.username': username })
    .select('users.id', 'users.email', 'users.username', 'users.first_name', 'users.last_name', 'hashpwd.password')
    .first();
};

const getAllUsers = async () => {
  return db('users').select('id', 'email', 'username', 'first_name', 'last_name');
};

const getUserById = async (id) => {
  return db('users').where({ id }).select('id', 'email', 'username', 'first_name', 'last_name').first();
};

const updateUser = async (id, userData) => {
  await db('users').where({ id }).update(userData);
  return db('users').where({ id }).select('id', 'email', 'username', 'first_name', 'last_name').first();
};

module.exports = { createUser, findByUsername, getAllUsers, getUserById, updateUser };


const bcrypt = require('bcrypt');
const User = require('../models/user.model');

// POST /register
exports.register = async (req, res, next) => {
  try {
    const { username, password, email, first_name, last_name } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Hash the password using bcrypt (salt rounds = 10)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Add user using transaction
    await User.createUser({ username, email, first_name, last_name }, hashedPassword);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    // Handle duplicate username/email database constraint errors
    if (err.code === '23505') {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    next(err);
  }
};

// POST /login
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findByUsername(username);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password from the database
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Don't send the password back to the client
    const { password: pwd, ...userWithoutPassword } = user;
    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } catch (err) {
    next(err);
  }
};

// GET /users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// GET /users/:id
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// PUT /users/:id
exports.updateUser = async (req, res, next) => {
  try {
    const { email, first_name, last_name } = req.body;
    const updateData = {};
    
    if (email) updateData.email = email;
    if (first_name) updateData.first_name = first_name;
    if (last_name) updateData.last_name = last_name;

    const updatedUser = await User.updateUser(req.params.id, updateData);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    
    res.status(200).json(updatedUser);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ message: 'Email already in use' });
    }
    next(err);
  }
};


const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);

module.exports = router;

const express = require('express');
const userRoutes = require('./server/routes/user.routes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use Routes
app.use(userRoutes);

// 404 Error Handling for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Server Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

