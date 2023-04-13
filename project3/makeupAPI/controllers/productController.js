"use strict";

const Models = require("../models");



const getProduct = (res) => {
  Models.Product.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createProduct = (data, res) => {
  Models.Product.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateProduct = (req, res) => {
  Models.Product.update(req.body, { where: { ProductID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteProduct = (req, res) => {
  Models.Product.destroy({ where: { ProductID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};


module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
 
};
