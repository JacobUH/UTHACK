require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// create express app
const app = express();

// middleware


// routes


// connection to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log("listening on port ", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })