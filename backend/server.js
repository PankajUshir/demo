const express = require('express')
const logger = require('./src/common/logger')
require('dotenv').config()
const app = express()

const port = process.env.PORT

app.listen(port, () => {
    logger.info(`Server Running at ${port} on ${new Date()}`)
})
