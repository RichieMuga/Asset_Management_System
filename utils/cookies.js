const jwt = require('jsonwebtoken')
require('dotenv').config()

const attachCookiesToRes = (res, user) => {
    const oneDay = 1000 * 60 * 60 * 24
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
    // console.log(token);

    const result = res.cookie('cookieYaKwanza', token, { expires: new Date(Date.now() + oneDay), httpOnly: true, secure: process.env.NODE_ENV === 'production', signed: true, SameSite: process.env.NODE_ENV === 'production' })
    return result
}

module.exports = { attachCookiesToRes }