"use strict";

const Models = require("../models");

const getProducts = (res) => {
  Models.Product.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const getSingleProduct = (res) => {
  Models.Product.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        res.send({ result: 404, error: "Product not found" });
      } else {
        res.send({ result: 200, data: data });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
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
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
