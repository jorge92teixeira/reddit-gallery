const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Cors
app.use(cors());

// Body Parser
app.use(express.json({ extended: false }));

// Routes
app.get('/', (req, res) => {
  try {
    return res.send('Hello');
  } catch (error) {
    return res.status(500).send('Server Error');
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
