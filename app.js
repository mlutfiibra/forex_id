const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const nodemailer = require('nodemailer');
const session = require('express-session')
const users = require('./routes/users')
const stocks = require('./routes/stocks')
const stock_user = require('./routes/stock_user')
const administrator = require('./routes/administrator')
const accounts = require('./routes/accounts')
const auth = require('./routes/auth')
const isAuth = require('./middlewares/isAuth')
const isAdministrator = require('./middlewares/isAdministrator')
const stockConditionInColor = require('./helpers/stockConditionInColor')
const numberToRupiah = require('./helpers/numberToRupiah')

const mySession = {
    secret: 'isLoggedIn'
}

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'luteathena@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions = {
    from: 'no-reply@forexid.com', // sender address
    to: 'luteathena@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
};

app.use(session(mySession))
app.locals.stockConditionInColor = stockConditionInColor
app.locals.numberToRupiah = numberToRupiah
app.use((req,res,next) => {
    app.locals.session = req.session
    next()
})

app.use('/public',express.static('./public'))
app.use(express.static('./assets'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.use('/administrator',isAdministrator, administrator)
app.use('/users', users)
app.use('/stocks',stocks)
app.use('/accounts',accounts)
app.use('/stock-user',stock_user)
app.use('/auth', auth)

app.use('/', routes)

app.listen(PORT, ()=> console.log(`Listening to ${new Date} radio ${PORT} F.M`))

