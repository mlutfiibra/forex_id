module.exports = (req, res, next) => {
    if(req.session.role === 'Member') {
        next()
    }else{
        res.redirect('/')
    }
}