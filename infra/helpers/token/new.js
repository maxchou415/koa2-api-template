const config = require('config')
const jwt = require('jsonwebtoken')

const secret = config.get('secret.token')

module.exports = (userId) => {
  const token = jwt.sign({
    data: {
      userId
    }
  }, secret, {
    algorithm: 'HS512',
    expiresIn: '7d'
  })
  return token
}
