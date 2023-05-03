const { DataTypes } = require("sequelize");
const db = require("../config/database");
const User = require("./user");

const Company = db.sequelize.define('Company',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: User,
    //     key: "id",
    //   },
    // },
  },
  {
    timestamps: true
  }
);

module.exports = Company;
