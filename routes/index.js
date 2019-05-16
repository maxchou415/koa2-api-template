const router = require('koa-router')()

router.prefix('/api/v1')

router.get('/demo', require('./demo'))

module.exports = router
