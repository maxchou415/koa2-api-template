const config = require('config')
const jwt = require('jsonwebtoken')

const secret = config.get('secret.token')

module.exports = (incomingToken) => {
  let data
  try {
    data = jwt.verify(incomingToken, secret, {
      algorithms: ['HS512']
    })
  } catch (error) {
    throw new Error('TOKEN_VERIFY_FAILED')
  }
  return data
}
