const cronStockHistory = require("node-cron")
const { Stock, stock_history } = require('../models')

cronStockHistory.schedule("* * * * * *", function() {
    Stock.findAll()
    .then(stocks=>{
        stocks.forEach(element => {
            return stock_history.create({
                stockId: element.id,
                buy: stock_history.generateRandomPrice(),
                sell: stock_history.generateRandomPrice()               
            }, {stockId: element.id})
        });
    })
    .then()
    .catch()
});

module.exports = cronStockHistory
