const {User} = require('../models')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')


const generateToken = (id, name, role) => {
    return jwt.sign({
        id,
        name,
        role,
        exp: Date.now() + (100 * 60 * 60 * 24)
    }, process.env.APP_SECRET_KEY)
}

const verify = (token) => {
    return jwt.verify(token,
        process.env.APP_SECRET_KEY, (err, payload) => {
            if (err) return false
            else if (payload) {
                return true
            }
        });
}

class UserController {

    async registration(req, res) {
        const {first_name, last_name, name, password, role} = req.body
        if (!name || !password) {
            return res.json({
                error: true,
                message: 'Некорректный логин или пароль'
            })
        }
        const candidate = await User.findOne({where: {name}})
        if (candidate) {
            return res.json({
                error: true,
                message: 'Пользователь с таким логином уже существует'
            })
        }
        const hashPassword = crypto.SHA256(password).toString()
        const user = await User.create({first_name, last_name, name, password: hashPassword, role})
        const token = generateToken(user.id, user.name, user.role)
        return res.json({token})
    }

    async login(req, res) {
        const {name, password} = req.body
        const user = await User.findOne({where: {name}})
        if (!user) {
            return res.json({
                error: true,
                message: 'Пользователь не найден'
            })
        }
        const hashPassword = crypto.SHA256(password).toString()
        if (hashPassword !== user.password) {
            return res.json({
                error: true,
                message: 'Указан неверный пароль'
            })
        }
        const token = generateToken(user.id, user.name, user.role)
        return res.json({token})
    }


    async check(req, res) {
        const auth = req.headers.authorization
        if (!auth) {
            return res.json({
                error: true,
                message: 'Не авторизован'
            })
        }
        let token = auth.split(' ')[1]
        if (verify(token)) token = generateToken(req.user.id, req.user.name, req.user.role)
        else return res.json({
            error: true,
            message: 'Токен подделан'
        })
        return res.json({token})
    }
}

module.exports = new UserController()