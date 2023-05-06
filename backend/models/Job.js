const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Company = require('./Company');

const Job = db.sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobRole: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jobCompensation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobFixedCompensation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Company,
      key: 'id',
    },
  },
});

Job.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });
Company.hasMany(Job, { foreignKey: 'companyId', as: 'jobs' });

module.exports = Job;
