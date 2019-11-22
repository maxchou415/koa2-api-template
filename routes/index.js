const router = require('koa-router')()

router.prefix('/api/v1')

router.all('/demo', require('./demo').routes())

module.exports = router
