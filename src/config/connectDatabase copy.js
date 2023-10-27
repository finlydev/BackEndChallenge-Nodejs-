const db = require('knex')({
    client: 'mysql2',
    connection: {
        port : process.env.DB_PORT,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        multipleStatements : true
    }
  });
  if(db){
    console.log('Connected DB');
  }
  module.exports = db;