const Router = require('express')
const router = new Router()
const authRouter = require('./auth.api.router')
const userRouter = require('./user.api.router')
const quoteRouter = require("./quote.api.router");
const trainingRouter = require("./training.api.router");
const courseRouter = require("./course.api.router");
const exerciseRouter = require("./exercise.api.router");
const authMiddleware= require('../../middleware/auth.middleware')

router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/quote',authMiddleware,quoteRouter)
router.use('/exercise',authMiddleware,exerciseRouter)
router.use('/training',authMiddleware,trainingRouter)
router.use('/course',authMiddleware,courseRouter)

module.exports = router