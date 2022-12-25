const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://Test123:TestDeezCandice123@cluster0.ujggnnh.mongodb.net/?retryWrites=true&w=majority"

const accountSchema = {
    name: String,
    password: String
}

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDb")
    } catch(error) {
        console.error(error)
    }
}

connect();

app.listen(8000, ()=> {
    console.log("Server started on port 8000")
});