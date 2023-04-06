"use strict";

const Models = require("../models");
const getComments = (res) => {
  Models.Comment.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createComment = (data, res) => {
  Models.Comment.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateComment = (req, res) => {
  Models.Comment.update(req.body, { where: { CommentID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { CommentID: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
