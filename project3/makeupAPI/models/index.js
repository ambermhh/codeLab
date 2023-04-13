"use strict";


const Product = require("./products"); //require the model
const Tag = require("./tags"); //require the model
const Color = require("./colors"); //require the model



async function init() {
  await Product.sync(); //sync the model
  await Tag.sync(); //sync the model
  await Color.sync(); //sync the model
}
init();
module.exports = {
  Product, //export the model
  Tag, //export the model
  Color, //export the model
};
