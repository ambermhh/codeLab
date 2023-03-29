const express = require('express')
// const moviesRoute = require('./routes/moviesRoute');
const testRoute = require('./routes/moviesRoute');


const app = express()
const port = 3000

// app.use('/', express.static('public'))
app.use("/", express.static("public"));

// app.use('./movies',moviesRoute);

app.listen(port, () => {
console.log(`Example app
listening at
http://localhost:${port}`)
})