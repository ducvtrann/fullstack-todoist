const { Todo, Project } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const todos = await Todo.findAll();
      const sortedTodos = todos.sort((a, b) => a.createdAt - b.createdAt);

      res.status(200).send(sortedTodos);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async show(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId);

      res.status(200).send(todo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async create(req, res) {
    try {
      const project = await Project.findOne({
        where: { name: req.body.projectName },
      });

      let todo;
      if (project !== null) {
        todo = await Todo.create({
          content: req.body.content,
          projectId: project.id,
        });
      } else {
        const todo = await Todo.create({
          content: req.body.content,
        });
      }

      res.status(201).send(todo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async update(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId);
      if (!todo) {
        console.log('I was here');
        throw new Error('No record found');
      }

      const updatedTodo = await todo.update({
        content: req.body.content || todo.content,
        complete: req.body.complete || todo.complete,
      });

      res.status(200).send(updatedTodo);
    } catch (error) {
      console.log(error);
      throw new Error('Oops! Something went wrong!');
    }
  },
  async destroy(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId);

      if (!todo) {
        throw new Error('No record found');
      }
      await todo.destroy();
      res.status(204).send();
    } catch (error) {
      throw new Error('Oops! Something went wrong!');
    }
  },
};
