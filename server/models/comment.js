'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate({User, Publish}) {
      Comment.belongsTo(Publish, {as: ' publish', foreignkey: 'publish_id'})
      Comment.belongsTo(User, {as: 'author', foreignKey:'author_id'})
    }
  }
  Comment.init({
    comment_id: DataTypes.INTEGER,
    publish_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN,
    content: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};