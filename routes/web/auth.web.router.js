const Router = require('express')
const router = new Router()
const authController = require('../../controllers/auth.controller')

router.get('/registration',authController.registration)
router.get('/login',authController.login)

module.exports = router