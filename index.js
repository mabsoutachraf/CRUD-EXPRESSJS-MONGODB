const express = require('express');
const mongoose = require("mongoose");

// import stagiaireRoute
const stagiaireRoute = require("./routes/stagiaireRoute");

const app = express();

// middleware
app.use(express.json());
app.use("/stagiaires", stagiaireRoute);

// connet to db
mongoose.connect("mongodb://localhost:27017/mydb2000");





app.listen(82, () => console.log('Server is running on port 82'));