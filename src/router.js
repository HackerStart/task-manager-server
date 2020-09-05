const taskController = require('./task_controller.js');

class Router {
  constructor(app) {
    app.use('/tasks', taskController);
  }
}

module.exports = Router;
