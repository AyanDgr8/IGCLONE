// models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: {type:String,required:true},
  postImage:{type:String,required:true},
  Location: {type:String,required:true},
  description:{type:String,required:true},
  date:{type:Date,required:true},
  likes:{type:Number,default:0}
});

const InstaPost = mongoose.model("Instapost",postSchema);

module.exports = InstaPost;
