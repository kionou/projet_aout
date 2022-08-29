'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vaccins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vaccins.init({
    nom: DataTypes.STRING,
    nom_maladie: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_doctor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vaccins',
  });
  return vaccins;
};