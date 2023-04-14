const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.productController.getProducts(res);
});

router.get("/:id", (req, res) => {
  Controllers.productController.getSingleProduct(res);
});
router.post("/create", (req, res) => {
  Controllers.productController.createProduct(req.body, res);
});
router.put("/update/:id", (req, res) => {
  Controllers.productController.updateProduct(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.productController.deleteProduct(req, res);
});
module.exports = router;