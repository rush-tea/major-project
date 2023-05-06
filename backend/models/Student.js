const { DataTypes } = require("sequelize");
const db= require("../config/database");

const Student = db.sequelize.define('Student',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rollNo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collegeEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    personalEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    currentCgpa: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    branch: {
        type: DataTypes.STRING,
        allowNull: false
    },
    highSchoolName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    highSchoolPassingYear: {
        type: DataTypes.STRING,
        allowNull: false
    },
    highSchoolGrade: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    pwd: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    intermediateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    intermediatePassingYear: {
        type: DataTypes.STRING,
        allowNull: false
    },
    intermediateGrade: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    jeeMainsRank: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    yearOfPassing : {
        type: DataTypes.INTEGER,
        allowNull: false
    },  
    currentBacklogs: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalBacklogs: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resumeLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Student;
