// index.js
const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 1️⃣ Serve all files in project root (so index.html & style.css load)
app.use(express.static(path.join(__dirname)));

// 2️⃣ In-memory store
const bookings = [];

// 3️⃣ Mock booking generator
function randomBooking() {
  const venues = ['Taj Hotel', 'Dominos', 'Inox', 'Sushi Place'];
  const venueName = venues[Math.floor(Math.random() * venues.length)];
  const partySize = Math.floor(Math.random() * 10) + 1;
  const time = new Date().toLocaleTimeString();
  return { venueName, partySize, time };
}

// 4️⃣ Emit a new booking every 5 seconds
setInterval(() => {
  const booking = randomBooking();
  bookings.push(booking);
  io.emit('new-booking', booking);
}, 5000);

// 5️⃣ Log client connections
io.on('connection', socket => {
  console.log('A client connected:', socket.id);
});

// 6️⃣ Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
