const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
    console.log("test")
  Controllers.getController.getMakeup(res);
});


module.exports = router;