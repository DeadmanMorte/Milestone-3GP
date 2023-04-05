'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Publish extends Model {

    static associate({ Comment }) {
      Publish.hasMany(Comment, {})
    }

  };
  Publish.init({
    PublishId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    caption: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Publish',
  })
  return Publish;
}