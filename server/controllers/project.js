const { Project, Todo } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const projects = await Project.findAll({
        include: Todo,
        order: [
          ['createdAt', 'ASC'],
          [Todo, 'createdAt', 'ASC'],
        ],
      });

      res.status(200).send(projects);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  async show(req, res) {
    try {
      const project = await Project.findByPk(req.params.projectId);

      res.status(200).send(project);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async create(req, res) {
    try {
      const project = await Project.create({ name: req.body.name });
      res.status(201).send(project);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async update(req, res) {
    try {
      const project = await Project.findByPk(req.params.projectId);
      if (!project) {
        throw new Error('No record found');
      }

      const updatedProject = await project.update({
        name: req.body.name || project.name,
      });

      res.status(200).send(updatedProject);
    } catch (error) {
      console.log(error);
      throw new Error('Oops! Something went wrong!');
    }
  },
  async destroy(req, res) {
    try {
      const project = await Project.findOne({
        where: { name: req.params.name },
      });

      if (!project) {
        throw new Error('No record found');
      }
      await project.destroy();
      res.status(204).send();
    } catch (error) {
      throw new Error('Oops! Something went wrong!');
    }
  },
};
