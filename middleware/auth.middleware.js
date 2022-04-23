const jwt = require("jsonwebtoken")
module.exports = function (req,res,next){
    if(res.method === "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.redirect('/')
        }
        req.user = jwt.verify(token, process.env.APP_SECRET_KEY)
        next()
    } catch (e){
        return res.redirect('/')
    }
}