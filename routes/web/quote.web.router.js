const Router = require('express')
const router = new Router()
const quoteController = require('../../controllers/quote.controller')


router.get('/',quoteController.index)

module.exports = router