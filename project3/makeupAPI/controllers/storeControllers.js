const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");


const storeProducts = async () => {
    const response = await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    for (let product of response.data) {
      console.log(product);
      const productObj = {
        ProductID: product.id,
        Name: product.name,
        Brand: product.brand,
        Description: product.description
          ? product.description.substring(0, 4999)
          : "",
        Price: product.price,
        Category: product.category,
        Type: product.product_type,
        Image: product.image_link,
      };
      const [newProduct, created] = await Models.Product.findOrCreate({
        where: { ProductID: product.id },
        defaults: productObj,
      });
      storeColors(newProduct, product.product_colors);

    }
  };
  
  const storeColors = async (product, colors) => {
    for (let color of colors) {
      const colorObj = {
        Hex_value: color.hex_value,
        Color_name: color.color_name,
        ProductID: product.ProductID,
      };
      const [newColor, created] = await Models.Color.findOrCreate({
        where: {
          [Op.and]: [
            { ProductID: product.ProductID },
            { Hex_value: color.hex_value },
          ],
        },
        defaults: colorObj,
      });

    }
  };

  module.exports ={
    storeProducts
  }