'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate({User, Publish}) {
      Comment.belongsTo(Publish, {as: 'publish', foreignKey: 'publish_id'})
      Comment.belongsTo(User, {as: 'author', foreignKey:'author_id'})
    }
  }
  Comment.init({
    comment_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    publish_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN,
    content: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: "Comments"
  });
  return Comment;
};