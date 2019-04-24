const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8235
const routes = require('./routes')
const session = require('express-session')
//! router
const users = require('./routes/users')
const stocks = require('./routes/stocks')
const stock_user = require('./routes/stock_user')
const administrator = require('./routes/administrator')
const accounts = require('./routes/accounts')
const index = require('./routes/index')
// const stocks = require('./routes/stocks')
// const users = require('./routes/users')
// const accounts = require('./routes/accounts')
// const stock_user = require('./routes/stock_user')
// const administrator = require('./routes/administrator')
// const biddings = require('./routes/biddings')
// const isAuth = require('./middleware/isAuth')
// const isAdmin = require('./middleware/isAdmin')
const mySession = {
    secret: 'isLoggedIn'
}
app.use(session(mySession))

// app.use((req,res,next) => {
//     app.locals.session = req.session
//     next()
// })

app.use('/public',express.static('./public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

//! handle router 
app.use('/',index)
app.use('/users',users)
app.use('/stocks',stocks)
app.use('/administrator',administrator)
app.use('/accounts',accounts)
app.use('/stock-user',stock_user)
// app.use('/auth', auth)
// app.use('/users', isAuth, upload.single('img_path'), users)
// app.use('/admin', isAdmin, admin)
// app.use('/checkout', isAuth, checkout)
// app.use('/users', upload.single('img_path'), users)
// app.use('/items', items)
// app.use('/biddings', biddings)
app.use('/', routes)

app.listen(PORT, ()=> console.log(`Listening to ${new Date} radio ${PORT} F.M`))

