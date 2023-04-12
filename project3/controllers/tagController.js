"use strict";

const Models = require("../models");
const getTag = (res) => {
  Models.Tag.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createTag = (data, res) => {
  Models.Tag.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateTag = (req, res) => {
  Models.Tag.update(req.body, { where: { TagID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteTag = (req, res) => {
  Models.Tag.destroy({ where: { TagID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getTag,
  createTag,
  updateTag,
  deleteTag
  
};
