const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Product = require("./products");
const sequelizeInstance = dbConnect.Sequelize;

class Tag extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Tag.init(
  {
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product, //reference to another model
        key: "ProductID", //column name of the referenced model
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "tags", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = Tag;
