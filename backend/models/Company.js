const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Company = db.sequelize.define('Company',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyDescription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = Company;
