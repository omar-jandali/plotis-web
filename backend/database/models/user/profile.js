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
    dob_day: {
      type: sequelize.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    dob_month: {
      type: sequelize.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    dob_year: {
      type: sequelize.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    address_street: {
      type: sequelize.STRING,
      validate: {
        isAlphanumeric: true
      }
    },
    address_city: {
      type: sequelize.STRING,
      validate: {
        isAlphanumeric: true
      }
    },
    address_state: {
      type: sequelize.STRING,
      validate: {
        isAlpha: true,
        max: 3
      }
    },
    address_subdivision: {
      type: sequelize.STRING,
      validate: {
        isAlphanumeric: true
      }
    },
    address_country: {
      type: sequelize.STRING,
      validate: {
        isAlphanumeric: true
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
