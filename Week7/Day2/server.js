const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       // change to your postgres username
  host: 'localhost',
  database: 'blog_db',
  password: 'password',   // change to your postgres password
  port: 5432,
});

module.exports = pool;



const pool = require('../config/db');

const getAllPosts = async () => {
  const result = await pool.query('SELECT * FROM posts ORDER BY id ASC');
  return result.rows;
};

const getPostById = async (id) => {
  const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
  return result.rows[0];
};

const createPost = async (title, content) => {
  const result = await pool.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return result.rows[0];
};

const updatePost = async (id, title, content) => {
  const result = await pool.query(
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  );
  return result.rows[0];
};

const deletePost = async (id) => {
  const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };



const Post = require('../models/post.model');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: 'Title and content are required' });
    const newPost = await Post.createPost(title, content);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.updatePost(req.params.id, title, content);
    if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deletedPost = await Post.deletePost(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    next(err);
  }
};


const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;


const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;



const express = require('express');
const postRoutes = require('./server/routes/post.routes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/posts', postRoutes);

// Error handling for invalid routes (404 Not Found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handling for server errors (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',      // change to your postgres username
  host: 'localhost',
  database: 'book_db',
  password: 'password',  // change to your postgres password
  port: 5432,
});

module.exports = pool;




const pool = require('../config/db');

const getAllBooks = async () => {
  const result = await pool.query('SELECT * FROM books ORDER BY id ASC');
  return result.rows;
};

const getBookById = async (bookId) => {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [bookId]);
  return result.rows[0];
};

const createBook = async (title, author, publishedYear) => {
  const result = await pool.query(
    'INSERT INTO books (title, author, "publishedYear") VALUES ($1, $2, $3) RETURNING *',
    [title, author, publishedYear]
  );
  return result.rows[0];
};

const updateBook = async (bookId, title, author, publishedYear) => {
  const result = await pool.query(
    'UPDATE books SET title = $1, author = $2, "publishedYear" = $3 WHERE id = $4 RETURNING *',
    [title, author, publishedYear, bookId]
  );
  return result.rows[0];
};

const deleteBook = async (bookId) => {
  const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [bookId]);
  return result.rows[0];
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };


const Book = require('../models/book.model');

// Read all
exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

// Read one
exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.getBookById(req.params.bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

// Create
exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newBook = await Book.createBook(title, author, publishedYear);
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

// Update
exports.updateBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;
    const updatedBook = await Book.updateBook(req.params.bookId, title, author, publishedYear);
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (err) {
    next(err);
  }
};

// Delete
exports.deleteBook = async (req, res, next) => {
  try {
    const deletedBook = await Book.deleteBook(req.params.bookId);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    next(err);
  }
};


const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/', bookController.getAllBooks);
router.get('/:bookId', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:bookId', bookController.updateBook);
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;



const express = require('express');
const bookRoutes = require('./server/routes/book.routes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Error handling for invalid routes (404 Not Found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handling for server errors (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Set up the app to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



