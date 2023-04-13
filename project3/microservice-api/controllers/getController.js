"use strict";

const getMakeup = (res) => {
  fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    .then(function (response) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.status(500).send({ result: 500, error: err.message });
    });
};


module.exports = {
  getMakeup
};
