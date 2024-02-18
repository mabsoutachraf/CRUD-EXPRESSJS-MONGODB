const  mongoose = require("mongoose");


const stagiaireShema = mongoose.Schema({
    nom: String,
    prenom: String,
    age: Number,
    ville: String,
    filiere: String
});

module.exports = mongoose.model("stagiaires", stagiaireShema);