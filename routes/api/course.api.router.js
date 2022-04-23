const Router = require('express')
const router = new Router()
const courseController = require('../../controllers/course.controller')
const checkRole = require("../../middleware/checkRole.middleware");

router.post('/create',checkRole([1,2]),courseController.store)
router.post('/update',checkRole([1,2]),courseController.update)
router.post('/delete',checkRole([1,2]),courseController.delete)
router.post('/day/delete',checkRole([1,2]),courseController.deleteDay)

module.exports = router