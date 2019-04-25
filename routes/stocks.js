const express = require('express')
const router = express.Router()
const {Accounts,Stock_User,Stock,User} = require('../models')

router.get('/:id', (req, res) => {
  // Stock.findByPk(req.params.id,{include : User})
  Promise.all([Stock.findByPk(req.params.id,{include : User}),Accounts.findByPk(req.params.id,{include : User})])
  .then(([stock,account])=>{
    // res.send(stock)
    res.render('stocks/index',{stock,account})
  })
  .catch(err=>{
    res.send(err)
  })

})

router.get("/:id/buy",(req,res)=>{
  Promise.all([Stock.findByPk(req.params.id,{include : User}),Accounts.findByPk(req.params.id,{include : User})])
  .then(([stock,account])=>{

    if(account.balance >= stock.buy){
      account.balance -= stock.buy
    } else {
      throw `saldo anda tidak mencukupi`
    }
    return account.save()
  })
  .then(save=>{
    render('stocks/buySucces')
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