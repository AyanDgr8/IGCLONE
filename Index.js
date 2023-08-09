const Express = require("express")
const mongoose = require("mongoose");

let data = require("./data/data");
const App = Express();
let cors = require("cors");
App.use(cors());
let bodyparser = require("body-parser");
App.use(bodyparser.json());
App.use("/",data)


// App.use('/uploads', Express.static('./uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then((response) => {
    console.log("Connected to mongo DB successfully!");
})
.catch( err => {
    console.log("Connection to DB failed!", err);
});

App.listen(300,()=>console.log("server running 300"));