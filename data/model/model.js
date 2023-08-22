// data/model/model.js

let mongoose = require("mongoose");


let data = mongoose.Schema({
    name:{type:String},
    location:{type:String},
    description:{type:String},
    image:{type:String},
    date:{type:Date},
    likes: {
        type: Number,
        default: 0,
      },
      
})

let instaClone = mongoose.model("instaClone",data)

module.exports = instaClone;