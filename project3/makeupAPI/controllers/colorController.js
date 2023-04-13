"use strict";

const Models = require("../models");


const getColor = (res) => {
  Models.Color.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createColor = (data, res) => {
  Models.Color.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateColor = (req, res) => {
  Models.Color.update(req.body, { where: { ColorID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteColor = (req, res) => {
  Models.Color.destroy({ where: { ColorID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
    getColor,
    createColor,
    updateColor,
    deleteColor
 
};
