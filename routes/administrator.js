const express = require('express')
const router = express.Router()
const {Accounts,Stock_User,Stock,User} = require('../models')

router.get('/users', (req, res) => {
  User.findAll({
    order: [['id','ASC']],
    include: [
      { model: Accounts}
    ],
    where: {
      role: 'Member'
    }
  })
  .then(users=>{
    // res.send(users)
    res.render('users/index', {users})
  })
  .catch(err=>{
    res.send(err)
  })
})












module.exports = router