'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define('Accounts', {
    name: DataTypes.STRING,
    accountNumber: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Accounts.associate = function(models) {
    // associations can be defined here
    Accounts.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Accounts;
};  