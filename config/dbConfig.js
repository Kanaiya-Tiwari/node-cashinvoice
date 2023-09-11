const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_manager_db',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
