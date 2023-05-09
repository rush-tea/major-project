const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Company = require('./Company');
const Eligibility = require('./Eligibility');

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
    allowNull: false,
  },
  jobCompensation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobFixedCompensation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobLocation: {
    type: DataTypes.STRING,
    allowNull: false,
    get: function() {
      return JSON.parse(this.getDataValue('jobLocation'));
    },
    set: function(val) {
      return this.setDataValue('jobLocation', JSON.stringify(val));
    }
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Company,
      key: 'id',
    },
  },
},
{
  timestamps: true
});

Job.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });
Company.hasMany(Job, { foreignKey: 'companyId', as: 'jobs' });
Job.hasOne(Eligibility, { foreignKey: 'jobId', as: 'eligibility' });
Eligibility.belongsTo(Job, { foreignKey: 'jobId' });

module.exports = Job;