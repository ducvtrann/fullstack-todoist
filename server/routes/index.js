const TodoController = require('../controllers').Todo;
const ProjectController = require('../controllers').Project;

module.exports = (app) => {
  // TODO
  app.get('/api/todos', TodoController.index);
  app.get('/api/todos/:todoId', TodoController.show);
  app.post('/api/todos', TodoController.create);
  app.patch('/api/todos/:todoId', TodoController.update);
  app.delete('/api/todos/:todoId', TodoController.destroy);

  // PROJECT
  app.get('/api/projects', ProjectController.index);
  app.get('/api/projects/:projectId', ProjectController.show);
  app.post('/api/projects', ProjectController.create);
  app.patch('/api/projects/:projectId', ProjectController.update);
  app.delete('/api/projects/:projectId', ProjectController.destroy);
};
