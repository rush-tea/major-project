const { DataTypes } = require("sequelize");
const db = require("../config/database");
const User = require("./user");

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

module.exports = Admin;
