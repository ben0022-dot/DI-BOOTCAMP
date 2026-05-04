const express = require('express');
const app = express();
app.use(express.json());

const emojis = [
  { id: 1, emoji: '😀', name: 'Smile' },
  { id: 2, emoji: '🐶', name: 'Dog' },
  { id: 3, emoji: '🌮', name: 'Taco' },
  { id: 4, emoji: '🚀', name: 'Rocket' }
];

let leaderboard = [];

// Get a random emoji and distractors
app.get('/api/game/new', (req, res) => {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const distractors = emojis
    .filter(e => e.id !== correct.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
    
  const options = [correct, ...distractors].sort(() => 0.5 - Math.random());
  res.json({ emoji: correct.emoji, id: correct.id, options });
});

// Check guess
app.post('/api/game/guess', (req, res) => {
  const { id, guess } = req.body;
  const correctEmoji = emojis.find(e => e.id === id);
  const isCorrect = correctEmoji.name === guess;
  res.json({ correct: isCorrect, correctName: correctEmoji.name });
});

app.listen(3000, () => console.log('Game server running on http://localhost:3000'));

async function submitGuess(emojiId, selectedName) {
  const response = await fetch('/api/game/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: emojiId, guess: selectedName })
  });
  
  const result = await response.json();
  if (result.correct) {
    alert('Correct!');
  } else {
    alert(`Wrong! The answer was ${result.correctName}`);
  }
}

