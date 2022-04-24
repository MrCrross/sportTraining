const Router = require('express')
const router = new Router()
const userController = require('../../controllers/user.controller')
const checkRole = require("../../middleware/checkRole.middleware");

router.post('/create',checkRole([1]),userController.store)
router.post('/update',checkRole([1,2,3]),userController.update)
router.post('/updatePassword',checkRole([1,2,3]),userController.updatePassword)
router.post('/delete',checkRole([1]), userController.delete)

module.exports = router