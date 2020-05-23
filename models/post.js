'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    idUser: DataTypes.STRING
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