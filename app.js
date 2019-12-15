const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDb = require('./config/db');
const { fetchAndUpdateRedditData } = require('./cron/fetchAndUpdateRedditData');

const app = express();

// Cors
app.use(cors());

// Connect to database
connectDb();

// Body Parser
app.use(express.json({ extended: false }));

// Cron Job
fetchAndUpdateRedditData();

// Routes
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Unknown Endpoint
app.get('*', (req, res) => {
  res.status(404).send('Unknown Endpoint');
});

module.exports = app;
