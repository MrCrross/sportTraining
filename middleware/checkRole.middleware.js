const jwt = require("jsonwebtoken")
module.exports = function(roles){
    return function (req,res,next){
        if(res.method === "OPTIONS"){
            next()
        }
        try{
            let flag = true
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                roles.forEach((role)=>{
                    if(3 ===role){
                        flag= false
                        next()
                    }
                })
                if(flag) return res.status(401).json({message: 'Не авторизован'})
            }
            const decoded = jwt.verify(token,process.env.APP_SECRET_KEY)
            roles.forEach((role)=>{
                if(decoded.role ==role){
                    flag= false
                    next()
                }
            })
            if(flag) return res.status(403).json({message: 'Нет доступа'})
        } catch (e){
            return res.status(401).json({message: 'Не авторизован'})
        }
    }
}


