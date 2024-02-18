const  express = require("express");



// import stagiaire Controller

const stagiaireController = require('../controllers/stagiaireController.js');

const router = express.Router();

// get all stagiaires
router.get("/", stagiaireController.getAllStagiaires);

// get single stagiaire
router.get("/:id",  stagiaireController.getSingleStagiaire );

    


// create new stagiaire
router.post("/",  stagiaireController.createStagiaire);


// update new stagiaire
router.put("/:id", stagiaireController.updateStagiaire );


// delete a stagiaire
router.delete("/:id", stagiaireController.deleteStagiaire);

// exports routes

module.exports = router;