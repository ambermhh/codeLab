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
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Brand: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      require: true
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    Description: {
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
