const Router = require('express')
const router = new Router()
const mainController = require('../../controllers/main.controller')


router.get('/calc',mainController.calc)
router.get('/',mainController.index)

module.exports = router