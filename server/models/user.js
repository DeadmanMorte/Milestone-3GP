'use strict'
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) =>{
    class User extends Model {
        // code for user comment associations for later
        // static associate({ Comment }) {
        //     User.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
        //   }

    }
    User.init({
        userId:{
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        passwordDigest: DataTypes.STRING
   },
   {
    sequelize,
    underscore: true,
    modelName: 'User',
}); 
    return User
}