const { Todo } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const todos = await Todo.findAll();
      res.status(200).send(todos);
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
      const todo = await Todo.create({ content: req.body.content });
      res.status(201).send(todo);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async update(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId);

      if (!todo) {
        throw new Error('No record found');
      }
      const updatedTodo = await todo.update({
        content: req.body.content || todoItem.content,
        complete: req.body.complete || todoItem.complete,
      });

      res.status(200).send(updatedTodo);
    } catch (error) {
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
