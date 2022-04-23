const Router = require('express')
const router = new Router()
const courseController = require('../../controllers/course.controller')

router.get('/create',courseController.create)
router.get('/:id',courseController.show)
router.get('/:id/day/:day',courseController.showDay)
router.get('/:id/edit',courseController.edit)
router.get('/',courseController.index)

module.exports = router