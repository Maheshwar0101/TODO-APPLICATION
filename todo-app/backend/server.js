const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Import the database connection (db.js is in the same folder as server.js)
require('./db');

// Middleware
app.use(express.json());
app.use(cors());

// Import and use the todo routes
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
