const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (user) => {
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username }, 'your_secret_key', {
      expiresIn: '1h',
    });
    res.json({ token });
  });
};

exports.signup = (req, res) => {
  const { username, password } = req.body;
  const newUser = { username, password };

  User.create(newUser, (userId) => {
    const token = jwt.sign({ username: newUser.username }, 'your_secret_key', {
      expiresIn: '1h',
    });
    res.status(201).json({ token });
  });
};
