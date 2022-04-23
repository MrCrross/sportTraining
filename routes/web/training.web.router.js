const Router = require('express')
const router = new Router()
const trainingController = require('../../controllers/training.controller')

router.get('/',trainingController.index)
router.get('/create',trainingController.create)
router.get('/:id/edit',trainingController.edit)
router.get('/types',trainingController.types)

module.exports = router