'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    buy: DataTypes.INTEGER,
    sell: DataTypes.INTEGER
  }, {});
  Stock.associate = function (models) {
    // associations can be defined here
    Stock.belongsToMany(models.User, { through: models.Stock_User, foreignKey: 'stockId' })
  };

  
  return Stock;
};