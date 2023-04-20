//Importing the packages or dependencies needed
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

//To read the .env dependency by the server.js
require("dotenv").config();

//Defining the port where to start
const PORT = process.env.PORT || 8070;

//Using the imported dependencies
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//Connecting the database
mongoose.connect(URL, {});

//To check whether the connection is successfull
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!");
})

//Importing user.js file
const userRouter = require("./routes/user.js");

//To access and use the user.js file in routes folder
app.use("/user", userRouter);

//Listening to the mentioned port
app.listen(PORT, () => {
    console.log('Server is running on port 8070')
})