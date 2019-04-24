const express = require('express')
const router = express.Router()
const { accounts, Stock_User, Stock, User } = require('../models')

//! list users
router.get('/', (req, res) => {
  // res.send('Halaman User')
  User.findAll()
  .then(users=>{
    res.send(users)
  })
  .catch(err=>{
    res.send(err)
  })

})

//! add user
router.get('/add', (req, res) => {
  // User.create(
  //   {
  //     name: req.body.name,
  //     email: req.body.email,
  //     password : req.body.password
  //   }
  // )
  // .then(user =>{
  //   //! masih belum di handle
  // })
  // .catch(err=>{
  //   res.send(err)
  // })
})

router.post('/add',(req,res)=>{
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password : req.body.password
    }
  )
  .then(user =>{
    //! masih belum di handle
  })
  .catch(err=>{
    res.send(err)
  })
})

//! edit
router.get('/edit/:id',(req,res)=>{
  User.findByPk(req.params.id)
  .then(user =>{
    //! masih belum di handle
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  User.findByPk(req.params.id)
  .then(user =>{
    //! masih belum di handle
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    return user.save()
  })
  .then(user=>{
    //! masih belum di handle 
  })
  .catch(err=>{
    res.send(err)
  })
})


//! delete
router.get('/delete/:id',(req,res)=>{
  User.destroy(req.params.id)
  .then(user=>{
    //! masih belum di handle 
  })
  .catch(err=>{
    res.send(err)
  })
})










module.exports = router