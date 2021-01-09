require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Connect database
const connectDB = require('./bin/db');
connectDB();

// Using middlewares
app.use(cors());
// use logging when not in production
if (process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan');
  app.use(
    morgan(
      'dev'
      // { stream: { write: message => logger.http(message) } }
    )
  );
}

// Define routes

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'welcome to the api',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
