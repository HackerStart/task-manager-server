const express = require('express');
const mongoose = require('mongoose');
const Router = require('./src/router.js');
const app = express();
const port = 3333;
// Mongodb URL, You need to change it to match your local mongodb config
const mongodbConnURL = 'mongodb://localhost:27017/tasks';

mongoose.connect(mongodbConnURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
);
mongoose.connection.once('open', function () {
  console.log('Connect mongodb successfully!');
});

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

new Router(app);
app.listen(port, () => {
  console.log(`Server started and listening at http://localhost:${port}`);
});
