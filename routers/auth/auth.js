const express = require('express')
const router = express.Router()
const { createsignupuser, login, logout, updateUser } = require('../../controllers/auth/auth')
const { authentication } = require('../../middleware/authentication')
const rateLimiter = require('express-rate-limit')

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

router.route('/register').post(limiter, createsignupuser)
router.route('/login').post(limiter, login)
router.route('/logout').get(logout)
router.route('/update').patch(authentication, updateUser)
// router.route(authenticateUser, '/update').patch(updateUser)


module.exports = router