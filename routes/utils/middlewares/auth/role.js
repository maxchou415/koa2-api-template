module.exports = (requiredRole) => {
  async function checker (ctx, next) {
    const user = ctx.me
    if (user.role < requiredRole) {
      ctx.throw(400, 'PERMISSION_DELINED')
      return
    }
    await next()
  }
  return checker
}
