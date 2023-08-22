// index.js

// const Express = require("express")
// const mongoose = require("mongoose");
// require('dotenv').config();

// let data = require("./data/data");
// const App = Express();
// const cors = require("cors");
// App.use(cors());
// let bodyparser = require("body-parser");
// App.use(bodyparser.json());
// App.use("/",data)
// App.use('/uploads', Express.static('./uploads'));

const express = require("express");
const app  =  express();
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const postRouter = require("./Router/PostRouter")
const port = 5000;


app.use(express.json());
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then((response) => {
    console.log("Connected to mongo DB successfully!");
})
.catch( err => {
    console.log("Connection to DB failed!", err);
})

app.use(fileUpload({
    useTempFiles:true
}))

app.use("/post",cors(),postRouter);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));