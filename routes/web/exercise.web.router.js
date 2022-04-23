const Router = require('express')
const router = new Router()
const exerciseController = require('../../controllers/exercise.controller')


router.get('/',exerciseController.index)
router.get('/types',exerciseController.types)
router.get('/create',exerciseController.create)

module.exports = router