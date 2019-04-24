<<<<<<< HEAD
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
=======
const express = require('express')
const router = express.Router()
const {accounts,Stock_User,Stock,User} = require('../models')

router.get('/',(req,res)=>{
  res.send('Halaman Utama')
})













module.exports = router
>>>>>>> b398222186ec0b19fdb8a13e60a2009f1e77319f
