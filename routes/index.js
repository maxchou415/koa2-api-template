const router = require('koa-router')()

router.prefix('/api/v1')

router.all('/demo', require('./demo'))

module.exports = router
