const Router = require('express')
const router = new Router()
const trainingController = require('../../controllers/training.controller')
const checkRole = require('../../middleware/checkRole.middleware')

router.post('/create',checkRole([1,2]),trainingController.store)
router.post('/createType',checkRole([1]),trainingController.storeType)
router.post('/update',checkRole([1]),trainingController.update)
router.post('/updateType',checkRole([1]),trainingController.updateType)
router.post('/delete',checkRole([1]),trainingController.delete)
router.post('/deleteType',checkRole([1]),trainingController.deleteType)

module.exports = router