'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctors.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    numero: DataTypes.STRING,
    specialite: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    password: DataTypes.STRING,
    centre: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'doctors',
  });
  return doctors;
};