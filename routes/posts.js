// routes/post.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Post = require('../models/Post');

// Set up Multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Images will be stored in the 'uploads' directory
    },
    filename: function (req, file, cb) {
      // Use the current timestamp as the file name to avoid collisions
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
// Handle image upload
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No image provided' });
    }
  
    const imageUrl = req.file.path;
    res.json({ imageUrl });
});

router.post('/add-post', (req, res) => {
  const { name, location, likes, description, imageUrl } = req.body;

  const newPost = new Post({
    name,
    location,
    likes,
    description,
    PostImage: imageUrl,
    date: new Date()
  });

  newPost.save()
    .then(post => {
      res.json(post);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to add post' });
    });
});

module.exports = router;
