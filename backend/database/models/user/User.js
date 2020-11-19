const sequelize = require('sequelize');
const database = require('../../index.js');

const User = database.define(
  'users',
  {
    id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: {type: sequelize.STRING, isEmail: true, allowNull: false },
    email: { type: sequelize.STRING, allowNull: false },
    password: { type: sequelize.STRING, allowNull: false },
    status: { type: sequelize.INTEGER, allowNull: false },
    tier: { type: sequelize.INTEGER, allowNull: false },
    ref_id: { type: sequelize.STRING, isAlphanumeric:true, allowNull: false }
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
