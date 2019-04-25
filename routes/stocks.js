const express = require('express')
const router = express.Router()
const {Accounts,Stock_User,Stock,User, stock_history} = require('../models')

router.get('/:id/detail', (req, res) => {
  Stock.findByPk(
    req.params.id,
    {include: [{model: stock_history}]}
  )
  .then(stock=> {
    
    let stockBuy = []
    let stockSell = []
    
    stock.stock_histories.forEach(element => {
      stockBuy.push(element.buy)
      stockSell.push(element.sell)
    });

    chart = {
        labels: ['1d', '1w', '1m', '3m', '1y'],
        datasets: [{ 
            data: stockBuy.reverse(),
            label: "buy price",
            borderColor: "#3e95cd",
            fill: false
        },
        {
          data: stockSell.reverse(),
          label: "sell price",
          borderColor: "#8e5ea2",
          fill: false
        }]
    }
    // res.send(chart);
    res.render('stocks/detail',{stock,chart})
  })
  .catch(err=>{
    res.send(err)
  })
})










module.exports = router