const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Student = require('./Student');
const Company = require('./Company');
const Admin = require('./Admin');

const User = db.sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('company', 'admin', 'student'),
    allowNull: false,
    defaultValue: 'student',
  },},
  {
    timestamps: true
});

User.hasOne(Student);
User.hasOne(Company);
User.hasOne(Admin);

module.exports = User;