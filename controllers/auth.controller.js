class AuthController{

    async registration(req,res){
        return res.render('auth/registration')
    }

    async login(req,res){
        return res.render('auth/login')
    }

}

module.exports = new AuthController()