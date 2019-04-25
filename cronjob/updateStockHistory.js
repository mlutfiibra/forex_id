const cronStockHistory = require("node-cron")
const { Stock, stock_history } = require('../models')

cronStockHistory.schedule("* * * * * *", function() {
    console.log("running a task every minute");
    Stock.findAll()
    .then(stocks=>{
        stocks.forEach(element => {
            return stock_history.create({
                stockId: element.id,
                buy: Math.floor(Math.random() * (70000 - 60000) + 60000),
                sell: Math.floor(Math.random() * (70000 - 60000) + 60000)                
            })
        });
    })
    .then()
    .catch()
});

module.exports = cronStockHistory
