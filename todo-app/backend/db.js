const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://mahesh123:123mahesh@cluster0.eznll.mongodb.net/TODO?retryWrites=true&w=majority&appName=Cluster0';

// Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for the connection
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;
