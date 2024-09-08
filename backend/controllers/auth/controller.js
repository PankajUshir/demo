const { Router } = require('express')
const { sendResponse, handleServerError } = require('../../utils/response')
const router = Router()
const User = require('../../db/models/user')

async function loginHandler(req, res, next) {
    try {
        const { email, password } = req.body

        // const user = await User.findAll()
        const user = await User.findOne({
            where: {
                email: email,
            },
        })

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const passwordMatch = await User.authenticate(password)

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({ userId: user.id }, config.auth.secretKey, {
            expiresIn: '24h',
        })
        return sendResponse(res, { token: token })
    } catch (error) {
        return handleServerError(res, error)
    }
}

async function signupHandler(req, res, next) {
    const userData = req.body
    if (!userData.email || !userData.password)
        return res
            .status(400)
            .json({ error: 'email and password are required' })

    const userById = await userService.getUserById(userData.email)

    if (userById) {
        return res.status(400).json({ message: 'User is already exist' })
    }

    const newUser = await userService.createUser(userData)
    return res.status(201).json({ message: 'User Created Successfully' })
}

router.get('/login', loginHandler)
router.post('/signup', signupHandler)

module.exports = router