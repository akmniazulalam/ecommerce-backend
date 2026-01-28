function authMiddleware(req, res, next){
    if(req.session.isAuth) {
        next()
    }
    else{
        return res.status(200).json({message: "Unauthorized access"})

    }
    next()
}

module.exports = authMiddleware