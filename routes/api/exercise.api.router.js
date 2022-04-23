const Router = require('express')
const router = new Router()
const exerciseController = require('../../controllers/exercise.controller')
const checkRole = require("../../middleware/checkRole.middleware");

router.post('/create',checkRole([1,2]),exerciseController.store)
router.post('/createType',checkRole([1]),exerciseController.storeType)
router.post('/update',checkRole([1]),exerciseController.update)
router.post('/updateType',checkRole([1]),exerciseController.updateType)
router.post('/delete',checkRole([1]),exerciseController.delete)
router.post('/deleteType',checkRole([1]),exerciseController.deleteType)

module.exports = router