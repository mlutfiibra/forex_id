'use strict';
module.exports = (sequelize, DataTypes) => {
  const stock_history = sequelize.define('stock_history', {
    stockId: DataTypes.INTEGER,
    buy: DataTypes.INTEGER,
    sell: DataTypes.INTEGER
  }, {
    hooks: {
      afterCreate: (instance, options) => {
        sequelize.models.Stock.findByPk(options.stockId)
        .then(stock => {
          stock.buy=instance.buy
          stock.sell=instance.sell

          return stock.save()
        })
      }
    }
  });
  stock_history.associate = function(models) {
    // associations can be defined here
    stock_history.belongsTo(models.Stock, {foreignKey: 'stockId'})
  };

  stock_history.generateRandomPrice = function() {
    return Math.floor(Math.random() * (100000 - 90000) + 90000)
  }

  return stock_history;
};