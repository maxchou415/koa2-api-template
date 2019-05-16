const router = require('koa-router')()

const middlewares = require('../utils/middlewares')
const controllers = require('./controllers')

router.get('/public', controllers.public)

// TO USE AUTH MIDDLEWARE PLEASE BELOW THIS LINE
router.use(middlewares.auth.required)

router.get('/secret', controllers.secret)

module.exports = router.routes()
