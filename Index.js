// index.js

const Express = require("express")
const mongoose = require("mongoose");
require('dotenv').config();

let data = require("./data/data");
const App = Express();
let cors = require("cors");
App.use(cors());
let bodyparser = require("body-parser");
App.use(bodyparser.json());
App.use("/",data)
const port = 5000;

// App.use('/uploads', Express.static('./uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then((response) => {
    console.log("Connected to mongo DB successfully!");
})
.catch( err => {
    console.log("Connection to DB failed!", err);
});

App.listen(port, () => console.log(`Server is running on http://localhost:${port}`));