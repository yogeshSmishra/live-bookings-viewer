# 📡 Live Bookings Viewer

A real-time full-stack web application that allows administrators to monitor and confirm venue bookings as they happen. Built using **Node.js**, **Express.js**, **Socket.IO**, and **Vanilla JavaScript**, this project demonstrates real-time communication, clean UI, and full-stack integration.

---

## 🚀 Live Demo

> _This project runs locally. Instructions to run it are below._

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js, Socket.IO
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Database:** In-memory (array on the server)

---

## 📌 Features

- Real-time updates for new bookings every 5 seconds
- No page refresh required – uses Socket.IO for live data
- New bookings are dynamically shown at the top
- Clean, responsive interface
- Easy setup with minimal dependencies

---

## 🔧 Installation & Running the Project

### 1. Clone the Repository

```bash
git clone https://github.com/yogeshSmishra/live-bookings-viewer.git
cd live-bookings-viewer
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Server
```bash
npm start
```
This will run the server on:
👉 http://localhost:3000

### 4. Open in Browser
Visit http://localhost:3000 in your web browser.
New bookings will appear in real-time, every 5 seconds.

---
## 🧪 Test Cases (Manual)
Open http://localhost:3000 in multiple browser tabs → All tabs show bookings in sync.

Bookings appear every 5 seconds without refresh.

Latest bookings appear at the top.
---

