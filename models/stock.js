'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    description: DataTypes.STRING,
    buy: DataTypes.INTEGER,
    sell: DataTypes.INTEGER
  }, {});
  Stock.associate = function (models) {
    // associations can be defined here
    Stock.hasMany(models.Stock_User, {foreignKey: 'stockId'})
    Stock.hasMany(models.stock_history, {foreignKey: 'stockId'})
  };

  
  return Stock;
};