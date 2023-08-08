// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then((response) => {
        console.log("Connected to mongo DB successfully!");
    })
    .catch( err => {
        console.log("Connection to DB failed!", err);
    });
    
  const postsRoutes = require('../routes/posts');
  app.use(postsRoutes);
  
  app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));