const Router = require('express')
const router = new Router()
const authRouter = require('./auth.web.router')
const quoteRouter = require('./quote.web.router')
const exerciseRouter = require('./exercise.web.router')
const trainingRouter = require('./training.web.router')
const courseRouter = require('./course.web.router')
const mainRouter = require('./main.web.router')


router.use('/auth',authRouter)
router.use('/quote',quoteRouter)
router.use('/exercise',exerciseRouter)
router.use('/training',trainingRouter)
router.use('/course',courseRouter)
router.use('/',mainRouter)

module.exports = router