const express = require('express')
const router = express.Router()
const {accounts,Stock_User,Stock,User} = require('../models')

router.get('/',(req,res)=>{
  res.send('Halaman Stock')
})


router.get('/', (req, res) => {
  // res.send('Halaman User')
  Stock.findAll()
  .then(stocks=>{
    res.send(stocks)
  })
  .catch(err=>{
    res.send(err)
  })

})

//! add stock
router.get('/add', (req, res) => {
  // Stock.create(
  //   {
  //     name: req.body.name,
  //     email: req.body.email,
  //     password : req.body.password
  //   }
  // )
  // .then(stock =>{
  //   //! masih belum di handle
  // })
  // .catch(err=>{
  //   res.send(err)
  // })
})

router.post('/add',(req,res)=>{
  Stock.create(
    {
      name: req.body.name,
      alias: req.body.alias,
      buy : req.body.buy,
      sell : req.body.sell
    }
  )
  .then(stock =>{
    //! masih belum di handle
  })
  .catch(err=>{
    res.send(err)
  })
})

//! edit
router.get('/edit/:id',(req,res)=>{
  Stock.findByPk(req.params.id)
  .then(stock =>{
    //! masih belum di handle
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  Stock.findByPk(req.params.id)
  .then(stock =>{
    //! masih belum di handle
    stock.name = req.body.name
    stock.alias = req.body.alias
    stock.buy = req.body.buy
    stock.sell = req.body.sell
    return stock.save()
  })
  .then(stock=>{
    //! masih belum di handle 
  })
  .catch(err=>{
    res.send(err)
  })
})


//! delete
router.get('/delete/:id',(req,res)=>{
  Stock.destroy(req.params.id)
  .then(stock=>{
    //! masih belum di handle 
  })
  .catch(err=>{
    res.send(err)
  })
})












module.exports = router