const Sequelize = require("sequelize-oracle");
//Modelo de usuario
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user", //nome da tabela
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [6, 20],
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        len: [8, 20],
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
};
