const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors()); // Enables cross-origin requests
app.use(express.json()); // Allows server to handle JSON data

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

  app.get('/', (req, res) => {
    res.send('Server is running...');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  