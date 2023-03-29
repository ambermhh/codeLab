const express = require('express')
const testRoutes = require('./routes/myTestRoute');
const calculatorRoute = require('./routes/calculatorRoute');
const friendsRoute = require('./routes/friendsRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000

// parse requests of content-type - application/json
app.use(express.json());

app.use('/', express.static('public'))
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );

// parse requests of content-type - application/json
app.use(express.json());

app.use('/mytest', testRoutes);
app.use('/friends', friendsRoute);
app.use('/calculator', calculatorRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})