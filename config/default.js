module.exports = {
  app: {
    name: 'koa2-template'
  },
  database: {
    port: 5432,
    dialect: 'postgres',
    host: 'localhost',
    name: 'koa2-template',
    username: 'root',
    password: 'koa2-template',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  secret: {
    password: '',
    token: ''
  }
}
