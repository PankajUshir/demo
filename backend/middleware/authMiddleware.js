const jwt = require('jsonwebtoken')
const config = require('../db/config/config')
const { sendUnauthorized } = require('../utils/response')

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        return sendUnauthorized(res)
    }

    jwt.verify(token, config.auth.secretKey, (err, user) => {
        if (err) {
            return sendResponse(res, 403, { message: 'Forbidden' })
        }
        req.user = user
        next()
    })
}

module.exports = authenticateToken
