"use strict";
const Mongoose = require("mongoose");
const uri = process.env.DB_URI || "mongodb://localhost/myFirstDatabase";


const mongooseOptions = {  // dont need this anymore because of the updated new version
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//Connect to MongoDB
Mongoose.connect(uri, mongooseOptions)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error: " + error.message));


// Get the default connection
const db = Mongoose.connection;


// Bind connection to error event (to get notification of connectionerrors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


exports.Mongoose = Mongoose;
