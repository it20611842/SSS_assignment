//Importing the package 
const router = require("express").Router();

//Importing User model
let User = require("../models/cms");

//implementation of create route
//Data insertion
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    //newUser is an object
    const newUser = new User({
        //initializing the properties of the user
        name,
        email
    })

    newUser.save().then(() => {
        res.json("User added")
    }).catch((err) => {
        console.log(err);
    })
})

//To get the details of added users
router.route("/").get((req, res) => {
    User.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})

//Updating data of a specific user
//asynchronus function waits for a promise request
//req.params means to fetch the id that is in the url
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    //using destructure method
    const {name, email} = req.body;

    //Making an object to update
    const updateUser = {
        name,
        email
    }

    //Checking whether there is a user with the mentioned id
    const update = await User.findByIdAndUpdate(userId, updateUser).then(() => {
        //Sending a response after updating
        //Status means the response status
        res.status(200).send({Status: "User updated"})
    }).catch((err) => {
        console.log(err)
    })
})

//Deleting a user with specific id
router.route("/delete/:id").delete(async (req, res) => {
    //Fetching the user id
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(() => {
        res.status(200).send({Status: "User deleted"})
    }).catch((err) => {
        console.log(err)
    })
})

//Fetching details of a single user
router.route("/get/:id").get(async (req, res) => {
    //Fetching the user id
    let userId = req.params.id;

    const user = await User.findById(userId).then((user) => {
        res.status(200).send({Status: "User fetched", user})
    }).catch((err) => {
        console.log(err)
    })
})

//exporting the module
module.exports = router;

