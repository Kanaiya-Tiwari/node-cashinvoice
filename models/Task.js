const pool = require('../config/dbConfig');

class Task {
  static getAllTasks(callback) {
    pool.query('SELECT * FROM tasks', (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static create(newTask, callback) {
    pool.query('INSERT INTO tasks SET ?', newTask, (error, results) => {
      if (error) throw error;
      callback(results.insertId);
    });
  }

  static update(taskId, updatedTask, callback) {
    pool.query(
      'UPDATE tasks SET ? WHERE id = ?',
      [updatedTask, taskId],
      (error, results) => {
        if (error) throw error;
        callback(results.affectedRows);
      }
    );
  }

  static delete(taskId, callback) {
    pool.query('DELETE FROM tasks WHERE id = ?', [taskId], (error, results) => {
      if (error) throw error;
      callback(results.affectedRows);
    });
  }
}

module.exports = Task;
