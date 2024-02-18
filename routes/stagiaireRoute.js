const  express = require("express");

// import stagiaire model
const Stagiaire = require('../models/stagiaire.js');

const router = express.Router();

// get all stagiaires
router.get("/", async (req, res) => {

    const stagiaires = await Stagiaire.find();

    res.json(stagiaires);
});

// get single stagiaire
router.get("/:id", async (req, res) => {

    // get the id
    const { id } = req.params;

    // search for a specific stagiaire
    const stagiaire = await Stagiaire.findById(id);

    res.json(stagiaire);
});


// create new stagiaire
router.post("/", (req, res) => {
    
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
router.put("//:id", async (req, res) => {

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


// delete a stagiaire
router.delete("/:id", async (req, res) => {

    // get the id
    const { id } = req.params;

    await Stagiaire.deleteOne({ _id: id });

    res.json({ message: "Deleted successfully" });

});

// exports routes

module.exports = router;