const express = require('express')
const router = express.Router()
const { Accounts, Stock_User, Stock, User } = require('../models')

router.get('/edit/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(user => {
      res.render('users/edit', { user })
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/edit/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(user => {
      user.name = req.body.name
      user.email = req.body.email
      user.password = req.body.password
      return user.save()
    })
    .then(user => {
      res.redirect('/users')
    })
    .catch(err => {
      res.send(err)
    })
})

//! delete
router.get('/delete/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(user => {
      return user.destroy()
    })
    .then(deleted => {
      res.redirect('/users')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/:id/stocks', (req, res) => {
  // res.send(req.session)
  User.findOne(
    {
      include: [{ model: Stock }],
      where: { id: req.params.id }
    }
  )
    .then(stockUsers => {
      // res.send(stockUsers)
      res.render('users/stocks', { stockUsers })
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/:id/buy', (req, res) => {
  // res.send('halaman stock')
  // res.send(req.session)
  Stock.findAll()
    .then(Stocks => {
      // res.send(stock)
      res.render('stocks/list', { Stocks, idUser: req.params.id })
    })
    .catch(err => {
      res.send(err)
    })
})


router.get('/:id/buy/stocks/:stockId', (req, res) => {
  // res.send(req.params)
  Promise.all([User.findByPk(req.params.id, { include: Accounts }), Stock.findByPk(req.params.stockId)])
    .then(([user, stock]) => {
      res.render('stocks/buy', { user, stock })
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/:id/buy/stocks/:stockId', (req, res) => {
  Promise.all([User.findByPk(req.params.id, { include: Accounts }), Stock.findByPk(req.params.stockId)])
    .then(([user, stock]) => {
      user.Account.balance -= stock.buy
      return user.Account.save()
      // return user.addStock(stock)
    })
    .then((user) => {
      Stock_User.create({
        stockId: req.params.stockId,
        userId: req.params.id
      })
      res.render('stocks/buySucces.ejs', {user})
    })
    .catch(err => {
      res.send(err)
    })
})


router.get('/:id/sell/:stockId', (req, res) => {
  Promise.all([User.findByPk(req.params.id, { include: Accounts }), Stock.findByPk(req.params.stockId)])
    .then(([user, stock]) => {
      user.Account.balance += stock.sell
      return user.Account.save()
    })
    .then((user) => {
      Stock_User.destroy({
        where: {
          stockId: req.params.stockId,
          userId: req.params.id
        }
      })
      // res.send(user)
      res.render('stocks/sellSucces.ejs', {user})
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/profile/:id', (req, res) => {
  User.findByPk(req.params.id, {
    include: [
      {model: Stock},
      {model: Accounts}
    ]
  })
  .then(user=> {
    // res.send(user)
    res.render('users/profile', {user})
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router