'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.hasMany(models.Todo, {
        foreignKey: {
          name: 'projectId',
          allowNull: true,
        },
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  }
  Project.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};
