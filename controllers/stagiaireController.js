// import stagiaire model
const Stagiaire = require('../models/stagiaire.js');


class StagiaireController {

    static async getAllStagiaires(req, res){

        const stagiaires = await Stagiaire.find();

        res.json(stagiaires);
    }

    static async getSingleStagiaire(req, res){
        // get the id
        const { id } = req.params;

        // search for a specific stagiaire
        const stagiaire = await Stagiaire.findById(id);

        res.json(stagiaire);

    }

    static createStagiaire(req, res){
        // instance
        const stagiaire = new Stagiaire();

        stagiaire.nom = req.body.nom;
        stagiaire.prenom = req.body.prenom;
        stagiaire.age = req.body.age;
        stagiaire.ville = req.body.ville;
        stagiaire.filiere = req.body.filiere;

        stagiaire.save();

        res.json({ message: "Created successfully", data: stagiaire });
    }

    static async updateStagiaire(req, res){

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
    }

    static async deleteStagiaire(req, res){
        // get the id
        const { id } = req.params;

        await Stagiaire.deleteOne({ _id: id });

        res.json({ message: "Deleted successfully" });
    }

}

module.exports =  StagiaireController;