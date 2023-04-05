const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Post = require("./posts");
const User = require("./users");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    text_field: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true,
    },
    numLiked: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    references: {
        model: User, //reference to another model
        key: 'id', //column name of the referenced model
    },
    references: {
        model: Post, //reference to another model
        key: 'id', //column name of the referenced model
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comment;
