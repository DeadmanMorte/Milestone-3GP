'use strict'
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) =>{
    class User extends Model {

    }
    User.init({
        userId:{
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        passwordDigest: DataTypes.STRING
   },
   {
    sequelize,
    underscore: true,
    modelName: 'User',
}); 
    return User
}