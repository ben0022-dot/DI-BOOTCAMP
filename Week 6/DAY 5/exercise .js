const express = require('express');
const app = express();
app.use(express.json());

let posts = []; // Simulating database

app.get('/posts', (req, res) => res.json(posts));

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  post ? res.json(post) : res.status(404).send('Post not found');
});

app.post('/posts', (req, res) => {
  const newPost = { id: Date.now().toString(), ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).send('Not found');
  posts[index] = { ...posts[index], ...req.body };
  res.json(posts[index]);
});

app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.status(204).send();
});

// Basic Error Handling
app.use((req, res) => res.status(404).send('Route not found'));
app.listen(3000, () => console.log('Blog API running on port 3000'));

const express = require('express');
const app = express();
app.use(express.json());

let books = [{ id: 1, title: 'Learn Express', author: 'John Doe', publishedYear: 2026 }];

app.get('/api/books', (req, res) => res.json(books));

app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  book ? res.status(200).json(book) : res.status(404).json({ message: 'Book not found' });
});

app.post('/api/books', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(5000, () => console.log('Book API running on port 5000'));

const axios = require('axios');

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

module.exports = { fetchPosts };

const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();

app.get('/api/posts', async (req, res) => {
  try {
    const data = await fetchPosts();
    console.log('Data successfully retrieved');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(5000, () => console.log('CRUD API running on port 5000'));

