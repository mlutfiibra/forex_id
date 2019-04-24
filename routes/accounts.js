const express = require('express')
const router = express.Router()
const {accounts,Stock_User,Stock,User} = require('../models')


router.get('/',(req,res)=>{
  res.send('Halaman accounts')
})













module.exports = router