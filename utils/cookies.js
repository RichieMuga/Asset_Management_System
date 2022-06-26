const jwt = require('jsonwebtoken')
require('dotenv').config()

const attachCookiesToRes = (res, user) => {
    const oneDay = 1000 * 60 * 60 * 24
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })

    const result = res.cookie('cookieYaKwanza', token, { expires: new Date(Date.now() + oneDay), httpOnly: true, secure: process.env.NODE_ENV === 'production', signed: true })
    return result
}

module.exports = { attachCookiesToRes }