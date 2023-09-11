const Task = require('../models/Task');

exports.getAllTasks = (req, res) => {
  Task.getAllTasks((tasks) => {
    res.json(tasks);
  });
};

exports.createTask = (req, res) => {
  const newTask = req.body;
  Task.create(newTask, (taskId) => {
    res.status(201).json({ id: taskId, ...newTask });
  });
};

exports.updateTask = (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  Task.update(taskId, updatedTask, (affectedRows) => {
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task updated successfully' });
  });
};

exports.deleteTask = (req, res) => {
  const taskId = req.params.id;
  Task.delete(taskId, (affectedRows) => {
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  });
};
