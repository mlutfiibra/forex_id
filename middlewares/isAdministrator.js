module.exports = (req, res, next) => {
    if(req.session.role = 'Administrator') {
        next()
    }else{
        res.redirect('/')
    }
}