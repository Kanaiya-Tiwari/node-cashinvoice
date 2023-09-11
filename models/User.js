const pool = require('../config/dbConfig');

class User {
  static findByUsername(username, callback) {
    pool.query(
      'SELECT * FROM users WHERE username = ?',
      [username],
      (error, results) => {
        if (error) throw error;
        callback(results[0]);
      }
    );
  }

  static create(newUser, callback) {
    pool.query('INSERT INTO users SET ?', newUser, (error, results) => {
      if (error) throw error;
      callback(results.insertId);
    });
  }
}

module.exports = User;
