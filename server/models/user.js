'use strict'
const { Model } = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize, Datatypes) => {
   class User extends Model {
      static associate({ Comment }) {
         User.hasMany(Comment, {})
      }
   };
   User.init({
      userId: {
         type: Datatypes.SMALLINT,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      firstname: Datatypes.STRING,
      lastname: Datatypes.STRING,
      email: Datatypes.STRING,
      passwordDigest: Datatypes.STRING
   },
      {
         sequelize,
         underscore: true,
         modelName: 'User',
      });

   return User;
}