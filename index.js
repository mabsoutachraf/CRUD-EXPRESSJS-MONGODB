const express = require('express');
const mongoose = require("mongoose");

// import stagiaire model

const Stagiaire = require('./models/stagiaire');

const app = express();

// connet to db
mongoose.connect("mongodb://localhost:27017/mydb2000");


// get all stagiaires
app.get("/stagiaires", async (req, res) => {
    
    const stagiaires = await Stagiaire.find();

    res.json(stagiaires);
});




app.listen(82, () => console.log('Server is running on port 82'));