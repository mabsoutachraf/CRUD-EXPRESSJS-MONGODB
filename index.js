const express = require('express');
const mongoose = require("mongoose");

// import stagiaire model

const Stagiaire = require('./models/stagiaire');

const app = express();

// middleware

app.use(express.json());

// connet to db
mongoose.connect("mongodb://localhost:27017/mydb2000");


// get all stagiaires
app.get("/stagiaires", async (req, res) => {

    const stagiaires = await Stagiaire.find();

    res.json(stagiaires);
});

// get single stagiaire
app.get("/stagiaires/:id", async (req, res) => {

    // get the id
    const { id } = req.params;

    // search for a specific stagiaire
    const stagiaire = await Stagiaire.findById(id);

    res.json(stagiaire);
});


// create new stagiaire
app.post("/stagiaires", (req, res) => {
    
    // instance
    const stagiaire = new Stagiaire();

    stagiaire.nom = req.body.nom;
    stagiaire.prenom = req.body.prenom;
    stagiaire.age = req.body.age;
    stagiaire.ville = req.body.ville;
    stagiaire.filiere = req.body.filiere;

    stagiaire.save();

    res.json({ message: "Created successfully", data: stagiaire });
    
});


// update new stagiaire

app.put("/stagiaires/:id", async (req, res) => {

    // get the id
    const { id } = req.params;

    // search for this specific resource
    const stagiaire = await Stagiaire.findById(id);

    stagiaire.nom = req.body.nom ? req.body.nom : stagiaire.nom;
    stagiaire.prenom = req.body.prenom ?  req.body.prenom : stagiaire.prenom;
    stagiaire.age = req.body.age ? req.body.age : stagiaire.age;
    stagiaire.ville = req.body.ville ?  req.body.ville : stagiaire.ville;
    stagiaire.filiere = req.body.filiere ? req.body.filiere : stagiaire.filiere;

    stagiaire.save();

    res.json({ message : "Updated successfully", data : stagiaire });

});


app.listen(82, () => console.log('Server is running on port 82'));