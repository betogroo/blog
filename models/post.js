const slugify = require('slugify')
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    message: DataTypes.STRING,
    idUser: DataTypes.STRING,
    allowComment: DataTypes.BOOLEAN
  }, {});
  Post.associate = function (models) {
    this.belongsTo(models.User, {
      foreignKey: 'idUser'
    })
    this.hasMany(models.Coment, {
      foreignKey: 'idPost'
    })
  };
  return Post;
};