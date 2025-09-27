const express = require('express');
const app = express();
app.use(express.json());

let cards = [];
let idCounter = 1;

// List all cards
app.get('/cards', (req, res) => {
  res.json(cards);
});

// Add a new card
app.post('/cards', (req, res) => {
  const { suit, value } = req.body;
  const newCard = { id: idCounter++, suit, value };
  cards.push(newCard);
  res.status(201).json(newCard);
});

// Get a card by ID
app.get('/cards/:id', (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  card ? res.json(card) : res.status(404).json({ error: 'Card not found' });
});

// Delete a card by ID
app.delete('/cards/:id', (req, res) => {
  const index = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    const deleted = cards.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ error: 'Card not found' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
