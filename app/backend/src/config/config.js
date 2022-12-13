
require('dotenv').config();

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
};

module.exports = {
  development: {
    ...config,
    database: 'todolist',
  },
  test: {
    ...config,
    database: 'todolist',
    logging: false,
  },
  production: {
    ...config,
    database: 'todolist',
  },
};