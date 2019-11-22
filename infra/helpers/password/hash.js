const config = require('config')
const crypto = require('crypto')
const secret = config.get('secret.password')

module.exports = (incomingPassword) => {
  const originPassword = String(incomingPassword)
  const hashedPassword = crypto.createHmac('RSA-SHA512', secret)
    .update(originPassword)
    .digest('hex')
  return hashedPassword
}
