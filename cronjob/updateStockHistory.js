const cronStockHistory = require("node-cron")
const { Stock, stock_history } = require('../models')

cronStockHistory.schedule("* * * * * *", function() {
    console.log("running a task every minute");
    Stock.findAll()
    .then(stocks=>{
        stocks.forEach(element => {
            return stock_history.create({
                stockId: element.id,
                buy: Math.floor(Math.random() * (700 - 600) + 600),
                sell: Math.floor(Math.random() * (700 - 600) + 600)                
            })
        });
    })
    .then()
    .catch()
});

module.exports = cronStockHistory
