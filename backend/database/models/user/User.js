const sequelize = require('sequelize');
const database = require('../../index.js');

const User = database.define(
  'users',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        min: 6,
        max: 16
      }
    },
    email: {
      type: sequelize.STRING,
      allowNull: false
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 16
      }
    },
    status: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    type: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    tier: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    cip_tag: {
      type: sequelize.STRING,
      allowNull: false,
    },
    is_business: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    supp_id: {
      type: sequelize.STRING,
      allowNull: false,
    },
    ref_id: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
  },
  {
    timestamp: true
  }
)

User.sync()
  .then(() => {
    console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = User;
