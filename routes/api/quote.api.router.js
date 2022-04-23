const Router = require('express')
const router = new Router()
const quoteController = require('../../controllers/quote.controller')
const checkRole = require("../../middleware/checkRole.middleware");

router.post('/create',checkRole([1]),quoteController.create)
router.post('/update',checkRole([1]),quoteController.update)
router.post('/delete',checkRole([1]),quoteController.delete)

module.exports = router