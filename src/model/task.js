const mongoose = require('mongoose');
const taskSchema = require('./task_schema.js');

// your need change config model to match your local mongodb collection
const Task = mongoose.model('Item', taskSchema);

exports.findAllTasks = function () {
  return Task.find({}).exec();
};
