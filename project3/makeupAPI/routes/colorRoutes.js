const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/colorController");


router.get("/", (req, res) => {
  console.log("test")
  Controllers.getColor(res);
  console.log("test11")

});
router.post("/create", (req, res) => {
  Controllers.createColor(req.body, res);
});
router.put("/:id", (req, res) => {
  Controllers.updateColor(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.deleteColor(req, res);
});
module.exports = router;
