const express = require('express')
const router = express.Router()
const { Accounts, Stock_User, Stock, User } = require('../models')

router.get('/users', (req, res) => {
  User.findAll({
    order: [['id', 'ASC']],
    include: [
      { model: Accounts }
    ],
    where: {
      role: 'Member'
    }
  })
    .then(users => {
      // res.send(users)
      res.render('users/index', { users })
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/list-stocks',(req,res)=>{
  Stock.findAll()
  .then(Stocks=>{
    res.render('adminitrator/list-item',{Stocks})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  res.render('stocks/add')
})

router.post('/add', (req, res) => {
  // res.send(req.body)
  Stock.create(
    {
      name: req.body.name,
      alias: req.body.alias,
      buy: req.body.buy,
      sell: req.body.sell,
      description: req.body.description
    }
  )
    .then(stock => {
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/:id/edit',(req,res)=>{
  Stock.findByPk(req.params.id)
  .then(stock=>{
    res.render('stocks/edit',{stock})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/:id/edit', (req, res) => {
  // res.send(req.body)
  Stock.update(
    {
      name: req.body.name,
      alias: req.body.alias,
      buy: req.body.buy,
      sell: req.body.sell,
      description: req.body.description
    },
    { where: { id: req.params.id } }
  )
    .then(stock => {
      res.redirect('/administrator/list-stocks')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/:id/delete',(req,res)=>{
  Stock.findByPk(req.params.id)
  .then(stock=>{
    return stock.destroy()
  })
  .then(stock=>{
    res.redirect('/administrator/list-stocks')
  })
  .catch(err=>{
    res.send(err)
  })
})











module.exports = router