const express = require('express')
const router = express.Router()
const { Accounts, Stock_User, Stock, User } = require('../models')

//! add user
router.get('/signup', (req, res) => {
  res.render('users/signup', { err: '' })
})

router.post('/signup', (req, res) => {
  User.create({ ...req.body })
    .then(user => {
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/signin', (req, res) => {
  res.render('users/signin', { err: '' })
})

router.post('/signin', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user !== null) {
        if (user.checkHashPassword(req.body.password, user)) {
          if (user.role === "Administrator") {
            req.session.isLoggedIn = true
            req.session.userId = user.id
            req.session.name = user.name
            req.session.role = user.role

            res.redirect('/')
          } else if (user.role === "Member") {
            req.session.isLoggedIn = true
            req.session.userId = user.id
            req.session.name = user.name
            req.session.role = user.role

            res.redirect('/')
          }
        } else {
          res.render('users/signin', { err: 'Wrong password' })
        }
      } else {
        res.render('users/signin', { err: 'Wrong email' })
      }
    })
})

//! edit
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

router.get('/logout', (req, res) => {
  req.session.destroy()

  res.redirect('/')
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
      res.render('stocks/buy.ejs', { user, stock })
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
      res.render('stocks/buySucces.ejs')
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

      res.render('stocks/sellSucces.ejs')
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router