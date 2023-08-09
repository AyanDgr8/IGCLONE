

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: String,
  location: String,
  likes: Number,
  description: String,
  PostImage: String, // Add the PostImage field for storing the image path
  date: Date,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
