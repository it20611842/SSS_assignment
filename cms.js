//Importing mongoose package
const mongoose = require('mongoose');

//Creating a schema
const Schema = mongoose.Schema;

//Creating an object and defining the attributes of the user with data type
const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

//To send data to the database through model
const User = mongoose.model("User", userSchema);

//exporting the module
module.exports = User;