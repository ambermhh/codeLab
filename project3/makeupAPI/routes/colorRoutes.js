const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.colorController.getColor(res);
});
router.post("/create", (req, res) => {
  Controllers.colorController.createColor(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.colorController.updateColor(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.colorController.deleteColor(req, res);
});
module.exports = router;