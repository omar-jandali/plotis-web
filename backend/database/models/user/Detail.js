const sequelize = require('sequelize');
const database = require('../../index.js');

const Detail = database.define(
  'details',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
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

Detail.sync()
  .then(() => {
    console.log('Detail database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = Detail;
