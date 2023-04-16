'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Publish extends Model {

    static associate({ Comment }) {
      Publish.hasMany(Comment, {foreignKey: 'publish_id', as: 'comments'})
    }

  };
  Publish.init({
    publish_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    caption: DataTypes.STRING,
    pic: DataTypes.STRING,
    like: {
      type: Number,
      default: 0,
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Publish',
  })
  return Publish;
}