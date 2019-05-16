const config = require('config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.get('database.name'), config.get('database.username'), config.get('database.password'), {
  host: config.get('database.host'),
  dialect: config.get('database.dialect'),
  pool: config.get('database.pool'),
  define: {
    timestamps: false
  }
})

module.exports = sequelize
module.exports.testConnection = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('===== Database Connection has been established successfully. =====')
    })
    .catch(err => {
      throw ('Unable to connect to the database:', err)
    })
}
