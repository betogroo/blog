'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coment = sequelize.define('Coment', {
    message: DataTypes.TEXT,
    idPost: DataTypes.INTEGER,
    idUser: DataTypes.STRING
  }, {});
  Coment.associate = function (models) {
    this.belongsTo(models.User, {
      foreignKey: 'idUser'
    })
    this.belongsTo(models.Post, {
      foreignKey: 'idPost'
    })
  };
  return Coment;
};