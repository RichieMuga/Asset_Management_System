const express = require('express')
const router = express.Router()
const { createsignupuser, login, logout } = require('../../controllers/auth/auth')
const authenticateUser = require('../../middleware/authentication')

router.route('/register').post(createsignupuser)
router.route('/login').post(login)
router.route('/logout').get(logout)
// router.route(authenticateUser, '/update').patch(updateUser)


module.exports = router