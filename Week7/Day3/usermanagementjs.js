// storage.js
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const USERS_FILE = process.env.USERS_FILE || 'data/users.json';

class UserStorage {
  constructor() {
    this.filePath = path.join(__dirname, '..', '..', USERS_FILE);
    this.ensureDirExists();
  }

  async ensureDirExists() {
    try {
      await fs.mkdir(path.dirname(this.filePath), { recursive: true });
      try {
        await fs.access(this.filePath);
      } catch {
        await fs.writeFile(this.filePath, JSON.stringify([], null, 2));
      }
    } catch (error) {
      console.error('Error ensuring directory:', error);
    }
  }

  async readUsers() {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') return [];
      throw new Error(`Failed to read users file: ${error.message}`);
    }
  }

  async writeUsers(users) {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
    } catch (error) {
      throw new Error(`Failed to write users file: ${error.message}`);
    }
  }
}

module.exports = new UserStorage();


const Joi = require('joi');

const registerSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).required(),
  last_name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required()
});

module.exports = {
  validateRegister: (req, res, next) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  },
  validateLogin: (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  }
};


const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const storage = require('../config/storage');

const register = async (req, res) => {
  try {
    const { first_name, last_name, email, username, password } = req.body;
    const users = await storage.readUsers();

    // Check if username or email exists
    const usernameExists = users.find(u => u.username === username);
    const emailExists = users.find(u => u.email === email);
    
    if (usernameExists || emailExists) {
      return res.status(409).json({ 
        error: 'Username or email already exists' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUNDS));
    const newUser = {
      id: uuidv4(),
      first_name,
      last_name,
      email,
      username,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    await storage.writeUsers(users);

    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json({ 
      message: 'User registered successfully!',
      user: userWithoutPassword 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await storage.readUsers();

    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({ 
      message: 'Login successful!',
      user: userWithoutPassword 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await storage.readUsers();
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    res.status(200).json(usersWithoutPasswords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const users = await storage.readUsers();
    const user = users.find(u => u.id === req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const { password, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const users = await storage.readUsers();
    const userIndex = users.findIndex(u => u.id === req.params.id);
    
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_ROUNDS));
    }
    
    users[userIndex] = {
      ...users[userIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    
    await storage.writeUsers(users);
    const { password, ...userWithoutPassword } = users[userIndex];
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser
};



const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser
} = require('../controllers/userController');
const { validateRegister, validateLogin } = require('../middleware/validation');

// Auth routes
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

// Demo routes (no auth)
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);

module.exports = router;



const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use('/api/users', usersRouter);

// Serve HTML pages
app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.get('/', (req, res) => {
  res.redirect('/register.html');
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(` User Management API running on http://localhost:${PORT}`);
  console.log(` Register: http://localhost:${PORT}/register.html`);
  console.log(` Login: http://localhost:${PORT}/login.html`);
  console.log(`
     API Docs: http://localhost:${PORT}/api/users`);
});

