const express = require('express');
const router = express.Router();
const { findAllTasks } = require('./model/task.js');

router.get('/', async (req, res) => {
  const tasks = await findAllTasks();
  res.json(tasks);
});

module.exports = router;
