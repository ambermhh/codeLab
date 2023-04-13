const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Product extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Product.init(
  {
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    Image: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Brand: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Description: {
        type: DataTypes.STRING(5000),
        allowNull: true,
      },
      Category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
 
  
  },
  {
    sequelize: sequelizeInstance,
    modelName: "products", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = Product;
