const express = require('express');
const app = express();
app.use(express.json());

const seats = {}; // { seatId: { status: 'available' | 'locked' | 'booked', lockedBy: null, lockTime: null } }
const LOCK_DURATION = 60 * 1000; // 1 minute

// Initialize seats
['A1', 'A2', 'A3', 'B1', 'B2'].forEach(id => {
  seats[id] = { status: 'available', lockedBy: null, lockTime: null };
});

// View all seats
app.get('/seats', (req, res) => {
  res.json(seats);
});

// Lock a seat
app.post('/seats/:id/lock', (req, res) => {
  const seat = seats[req.params.id];
  const user = req.body.user;

  if (!seat) return res.status(404).json({ error: 'Seat not found' });

  // Expire old lock
  if (seat.status === 'locked' && Date.now() - seat.lockTime > LOCK_DURATION) {
    seat.status = 'available';
    seat.lockedBy = null;
    seat.lockTime = null;
  }

  if (seat.status !== 'available') {
    return res.status(400).json({ error: `Seat is ${seat.status}` });
  }

  seat.status = 'locked';
  seat.lockedBy = user;
  seat.lockTime = Date.now();
  res.json({ message: 'Seat locked', seat });
});

// Confirm booking
app.post('/seats/:id/confirm', (req, res) => {
  const seat = seats[req.params.id];
  const user = req.body.user;

  if (!seat) return res.status(404).json({ error: 'Seat not found' });

  if (seat.status !== 'locked' || seat.lockedBy !== user) {
    return res.status(400).json({ error: 'Seat not locked by you or already booked' });
  }

  seat.status = 'booked';
  seat.lockedBy = null;
  seat.lockTime = null;
  res.json({ message: 'Seat booked', seat });
});

app.listen(3000, () => console.log('Server running on port 3000'));
