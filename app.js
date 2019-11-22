const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const errorHandler = require('koa-better-error-handler')
const koa404Handler = require('koa-404-handler')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

const api = require('./routes')

// database
require('./infra/utils/database').testConnection()

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(cors())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error handler
app.context.onerror = errorHandler
app.context.api = true

// 404 handler
app.context.onerror = errorHandler
app.use(koa404Handler)

// routes
app.use(api.routes())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
