const express = require('express')
require('dotenv').config()
const logger = require('./src/common/logger')
const { sequelize } = require('./db/config/sequelize')
const app = express()

const port = process.env.PORT

sequelize
    .authenticate()
    .then(() => {
        app.listen(port, () => {
            logger.info(
                `Connection has been established successfully on ${new Date()}`
            )
            logger.info(`Server Running at ${port} on ${new Date()}`)
        })
    })
    .catch((error) => {
        logger.error('Unable to connect to the database:', error)
    })
