const Router = require('express')
const router = new Router()
const userController = require('../../controllers/user.controller')

router.get('/personal',userController.personal)
router.get('/create',userController.create)
router.get('/edit/:id',userController.edit)
router.get('/',userController.index)

module.exports = router