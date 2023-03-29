const express = require('express');
const moviesController = require('../Controllers/moviesController');
const router = express.Router();

router.get('/movieData', (req, res) => {
    moviesController.moviesData(req,res)
})



module.exports = router;