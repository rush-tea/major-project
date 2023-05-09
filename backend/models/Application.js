const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Job = require("./Job");
const Student = require("./Student");

const Application = db.sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
  }
);

Job.hasMany(Application, { onDelete: "CASCADE" });
Student.hasMany(Application, { onDelete: "CASCADE" });
Application.belongsTo(Job, { onDelete: "SET NULL" });
Application.belongsTo(Student, { as: "Student", onDelete: "SET NULL" });

module.exports = Application;
