'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_User = sequelize.define('Stock_User', {
    stockId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Stock_User.associate = function(models) {
    // associations can be defined here
  };
  return Stock_User;
};