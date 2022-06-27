const express = require('express')
const router = express.Router()
const { createsignupuser, login, logout, updateUser } = require('../../controllers/auth/auth')
const { authentication } = require('../../middleware/authentication')

router.route('/register').post(createsignupuser)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/update').patch(authentication, updateUser)
// router.route(authenticateUser, '/update').patch(updateUser)


module.exports = router