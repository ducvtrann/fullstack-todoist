const { Todo } = require('../models');

module.exports = {
  create(req, res) {
    return Todo.create({
      title: req.body.content,
    })
      .then((todo) => res.status(201).send(todo))
      .catch((error) => res.status(400).send(error));
  },
};
