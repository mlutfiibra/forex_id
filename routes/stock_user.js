const express = require('express')
const router = express.Router()
const { Accounts, Stock_User, Stock, User } = require('../models')


router.get('/',(req,res)=>{
  res.send('Halaman stock_user')
})













module.exports = router