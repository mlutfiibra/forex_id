'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_User = sequelize.define('Stock_User', {
    stockId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Stock_User.associate = function(models) {
    models.User.belongsToMany(models.Stock, { through: models.Stock_User, foreignKey: 'userId' })
    models.Stock.belongsToMany(models.User, { through: models.Stock_User, foreignKey: 'stockId' })
  };
  return Stock_User;
};