'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Comment}) {
      User.hasMany(Comment, {as: 'author', foreignKey: 'author_id'})
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING, 
    passwordDigest: DataTypes.STRING,
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
    
  });
  return User;
};