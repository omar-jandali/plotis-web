const sequelize = require('sequelize');
const database = require('../../index.js');

const Profile = database.define(
  'profile',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: sequelize.STRING,
      validate: {
        isApha: true,
      }
    },
    last_name: {
      type: sequelize.STRING,
      validate: {
        isAlpha: true
      }
    },
    gender: {
      type: sequelize.STRING,
      validate: {
        isAlpha: true,
        validate: {
          isIn: [['M', 'F', 'O']]
        }
      }
    },
    phone: {
      type: sequelize.INTEGER,
      validate: {
        max: 11
      }
    },
  },
  {
    timestamp: true
  }
)

Profile.sync()
  .then(() => {
    console.log('Profile database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = Profile;
