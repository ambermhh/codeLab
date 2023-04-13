const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.tagController.getTag(res);
});
router.post("/create", (req, res) => {
  Controllers.tagController.createTag(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.tagController.updateTag(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.tagController.deleteTag(req, res);
});
module.exports = router;