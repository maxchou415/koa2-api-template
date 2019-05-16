const config = require('config')

module.exports = {
  development: {
    username: config.get('database.username'),
    password: config.get('database.password'),
    database: config.get('database.name'),
    host: config.get('database.host'),
    dialect: config.get('database.dialect')
  },
  staging: {
    username: config.get('database.username'),
    password: config.get('database.password'),
    database: config.get('database.name'),
    host: config.get('database.host'),
    dialect: config.get('database.dialect')
  },
  production: {
    username: config.get('database.username'),
    password: config.get('database.password'),
    database: config.get('database.name'),
    host: config.get('database.host'),
    dialect: config.get('database.dialect')
  }
}
