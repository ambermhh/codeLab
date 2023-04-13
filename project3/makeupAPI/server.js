const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");


// parse requests of content-type -application / json;
app.use(express.json());

let productRoutes = require('./routes/productRoutes')
app.use('/api/products', productRoutes)

let colorRoutes = require('./routes/colorRoutes')
app.use('/api/colors', colorRoutes)

let tagRoutes = require('./routes/tagRoutes')
app.use('/api/tags', tagRoutes)




app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MYSQL project 3." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
