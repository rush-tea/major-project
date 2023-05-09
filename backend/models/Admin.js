const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Admin = db.sequelize.define('Admin',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true
  }
);

module.exports = Admin;
