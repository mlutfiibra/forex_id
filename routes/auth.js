const express = require('express')
const router = express.Router()
const { User } = require('../models')

router.get('/signup', (req, res) => {
    res.render('auth/signup', {
        err: ''
    })
})

router.post('/signup', (req, res) => {
    User.create({
            ...req.body
        })
        .then(user => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/signin', (req, res) => {
    res.render('auth/signin', {
        err: ''
    })
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
                    res.render('auth/signin', {
                        err: 'Wrong password'
                    })
                }
            } else {
                res.render('auth/signin', {
                    err: 'Wrong email'
                })
            }
        })
})

router.get('/logout', (req, res) => {
    req.session.destroy()

    res.redirect('/')
})

module.exports = router