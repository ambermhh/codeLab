const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
    console.log("test")
  Controllers.getController.getNews(res);
});

router.get("/:id", (req, res) => {
  Controllers.getController.getSingleNews(req, res);
});

router.get("/:author", (req, res) => {
  Controllers.getController.getAuthorNews(req, res);
});
module.exports = router;