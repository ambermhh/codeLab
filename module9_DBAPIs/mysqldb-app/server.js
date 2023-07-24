const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");


// parse requests of content-type -application / json;
app.use(express.json());

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)


app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MYSQL application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// const express = require("express");
// const app = express();
// const cors = require('cors')
// require("dotenv").config();
// let dbConnect = require("./dbConnect");
// const Controllers = require("./controllers"); 

// // parse requests of content-type - application/json
// app.use(express.json());
// app.use(cors());

// let userRoutes = require('./routes/userRoutes')
// app.use('/api/users', userRoutes)

// app.use("/", express.static("public"));

// // app.get("/", (req, res) => {
// //     res.json({ message: "Welcome to my MySQL application." });
// // });

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
//     //Controllers.gotBooksController.storeBooksAsync()
// });
