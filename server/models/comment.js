'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Comment extends Model {

        static associate({ User, Publish }) {
            Comment.belongsTo(Publish, { as: 'publish', foreignKey: 'publish_id' })
            Comment.belongsTo(User, { as: 'author', foreignKey: 'author_id' })
        }

    };
    Comment.init({
        commentId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        publishId: DataTypes.SMALLINT,
        authorId: DataTypes.SMALLINT,
        content: DataTypes.STRING,

    }, {
        sequelize,
        underscored: true,
        modelName: 'Comment',
    });
    return Comment;

};