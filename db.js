const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://cloud:g4mHGf6WLwwlhQxR82joA2tY5LBxqvwR@dpg-clesbbrl00ks739tc7u0-a/cloud_v3ec', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
