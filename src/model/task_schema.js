const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
  name: String,
  desc: String,
  deadline: String,
  status: String,
});

module.exports = task;
