const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Booking logic
const bookings = [];

function randomBooking() {
  const venues = ['Cafe 123', 'The Bistro', 'Pizzeria X', 'Sushi Place'];
  const venueName = venues[Math.floor(Math.random() * venues.length)];
  const partySize = Math.floor(Math.random() * 10) + 1;
  const time = new Date().toLocaleTimeString();
  return { venueName, partySize, time };
}

setInterval(() => {
  const booking = randomBooking();
  bookings.push(booking);
  io.emit('new-booking', booking);
}, 5000);

io.on('connection', (socket) => {
  console.log('A client connected');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
