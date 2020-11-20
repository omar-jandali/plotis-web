const sequelize = require('sequelize');
const database = require('../../index.js');

const Home = database.define(
  'users',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    address_street: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    },
    address_city: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    },
    address_state: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        max: 3
      }
    },
    address_zip: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        max: 6
      }
    },
    price: {
      type: sequelize.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    beds: {
      type: sequelize.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    baths: {
      type: sequelize.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    sqft: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    status: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    description: {
      type: sequelize.TEXT,
      allowNull: false,
      validate: {
        isAlpha: true,
      }
    }
  },
  {
    timestamp: true
  }
)

Home.sync()
  .then(() => {
    console.log('Home database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = Home;
