const routes = require('express').Router()
const { Stock, stock_history } = require('../models')

routes.get('/', (req, res) => {
    Stock.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then((stocks) => {
            // let success = req.query.success
            // res.render('index', {
            //     data: data,
            //     success: success,
            //     err: null
            // })
            // res.render('index', {
            //     stocks: {
            //         labels: ['1d', '1w', '1m', '3m', '1y', '5y'],
            //         datasets: [{ 
            //             data: [8600 ,114,106,106,107,111,133,221,783,2478],
            //             label: "Astra",
            //             borderColor: "#3e95cd",
            //             fill: false
            //         }]
            //     },
            //     err: null
            // })

            res.render('index', {
                stocks, err: ''
            })
        })
        .catch((err) => {
            res.send(err);
        })
});

routes.get('*', (req, res) => {
    res.status(404).send('404 page not found');
})

module.exports = routes 
