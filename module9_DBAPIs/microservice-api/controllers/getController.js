"use strict";

const getNews = (res) => {
  fetch("https://inshorts.deta.dev/news?category=science")
    .then(function (response) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.status(500).send({ result: 500, error: err.message });
    });
};

const getSingleNews = (req, res) => {
  fetch("https://inshorts.deta.dev/news" + req.params.id)
    .then(function (response) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.status(500).send({ result: 500, error: err.message });
    });
};

const getAuthorNews = (req, res) => {
  fetch("https://inshorts.deta.dev/news?author=" + req.params.author)
    .then(function (response) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getNews,
  getSingleNews,
  getAuthorNews
};
