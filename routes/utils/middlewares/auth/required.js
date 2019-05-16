// const { Users } = require('../../../../database/models')

const helper = require('../../../../infra/helpers')
const errorMessage = require('../../../../infra/utils/errorMessageMap')

module.exports = async (ctx, next) => {
  // let token = ctx.header.authorization

  // let tokenData
  // try {
  //   tokenData = helper.token.data(token)
  // } catch (error) {
  //   ctx.throw(400, errorMessage.AUTH_FAILED.message)
  //   return
  // }

  // let userData
  // try {
  //   userData = await Users.findOne({
  //     attributes: {
  //       exclude: ['password']
  //     },
  //     where: {
  //       userId: tokenData.data.userId,
  //       isRemoved: false
  //     }
  //   })
  // } catch (error) {
  //   ctx.throw(400, errorMessage.AUTH_FAILED.message)
  //   return
  // }

  // if (!userData) {
  //   ctx.throw(400, errorMessage.AUTH_FAILED.message)
  //   return
  // }

  // ctx.me = userData

  await next()
}
