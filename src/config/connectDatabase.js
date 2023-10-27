const db = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '3526',
    database: 'inventory_db'
  }
});

module.exports = db;