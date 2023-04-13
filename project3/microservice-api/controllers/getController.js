"use strict";

const axios = require("axios");

const getMakeup = (res) => {
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then(function (response) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        res.send({ result: 500, data: err.message })
    })
}

module.exports = {
  getMakeup,
};
