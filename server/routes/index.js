const TodoController = require('../controllers').Todo;

module.exports = (app) => {
  // TODO
  app.get('/api/todos', TodoController.index);
  app.get('/api/todos/:todoId', TodoController.show);
  app.post('/api/todos', TodoController.create);
  app.put('/api/todos/:todoId', TodoController.update);
  app.delete('/api/todos/:todoId', TodoController.destroy);
};
