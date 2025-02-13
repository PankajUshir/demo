require('dotenv').config({ path: '../.env' })

module.exports = {
    auth: {
        jwtSecretKey: process.env.JWT_SECRETKEY,
    },
}
