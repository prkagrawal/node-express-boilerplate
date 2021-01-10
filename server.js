require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// Connect database
const connectDB = require('./bin/db');
connectDB();

// Using middlewares
if (process.env.NODE_ENV === 'production') {
  // specify cors for your frontend
} else {
  // development
  app.use(cors());
}
app.disable('x-powered-by');
app.use(express.json({ limit: '5mb' }));
app.use(
  express.urlencoded({ extended: false, limit: '5mb', parameterLimit: 5000 })
);
app.use(cors());
app.use(morgan('dev'));

// Define routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'welcome to the api',
  });
});

const PORT = process.env.PORT || 5000;

/* eslint-disable no-console */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
/* eslint-enable no-console */
