const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Eligibility = db.sequelize.define(
  "Eligibility",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    branchedAllowed: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue("branchedAllowed"));
      },
      set(val) {
        this.setDataValue("branchedAllowed", JSON.stringify(val));
      },
    },
    pwdAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    minCgpa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Eligibility;
