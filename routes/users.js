const express = require('express')
const router = express.Router()
const { Accounts, Stock_User, Stock, User } = require('../models')

//! add user
router.get('/signup', (req, res) => {
  res.render('users/signup', {err:''})
})

router.post('/signup',(req,res)=>{
  User.create({...req.body})
  .then(user =>{
    res.redirect('/')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/signin', (req, res) => {
  res.render('users/signin', {err:''})
})

router.post('/signin', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if(user!==null) {
      if(user.checkHashPassword(req.body.password, user)) {
        if(user.role==="Administrator") {
          req.session.isLoggedIn = true
          req.session.userId = user.id
          req.session.name = user.name
          req.session.role = user.role
  
          res.redirect('/')
        }else if(user.role==="Member") {
          req.session.isLoggedIn = true
          req.session.userId = user.id
          req.session.name = user.name
          req.session.role = user.role
  
          res.redirect('/')
        }
      }else{
      res.render('users/signin', {err:'Wrong password'})
      }
    }else { 
      res.render('users/signin', {err:'Wrong email'})
    }
  })
})

//! edit
router.get('/edit/:id',(req,res)=>{
  User.findByPk(req.params.id)
  .then(user =>{
    res.render('users/edit', {user})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  User.findByPk(req.params.id)
  .then(user =>{
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    return user.save()
  })
  .then(user=>{
    res.redirect('/users')
  })
  .catch(err=>{
    res.send(err)
  })
})  

//! delete
router.get('/delete/:id',(req,res)=>{
  User.findByPk(req.params.id)
  .then(user=>{
    return user.destroy()
  })
  .then(deleted => {
    res.redirect('/users')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy()

  res.redirect('/')
})

router.get('/:id/stocks', (req, res) => {
  User.findOne(
    {
      include: [{model: Stock}],
      where: {id:req.params.id}
    }
  )
  .then(stockUsers=> {
    // res.send(stockUsers)
    res.render('users/stocks', {stockUsers})
  })
})

module.exports = router