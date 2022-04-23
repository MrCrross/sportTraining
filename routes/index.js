const Router = require('express')
const router = new Router()
const apiRouter = require('./api/api.router')
const webRouter = require('./web/web.router')

router.use('/api',apiRouter)
router.use('/',webRouter)

module.exports = router