const routes = require('express').Router()
const { Stock } = require('../models')

routes.get('/', (req, res) => {
    Stock.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then((data) => {
            // let success = req.query.success
            // res.render('index', {
            //     data: data,
            //     success: success,
            //     err: null
            // })
            res.render('index', {
                data,
                err: null
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