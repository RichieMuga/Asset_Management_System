const jwt = require('jsonwebtoken')

const attachCookiesToRes = (res, user) => {
    const oneDay = 86400
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })

    res.cookie('cookieYaKwanza', token, { expires: new Date(Date.now() + oneDay), httpOnly: true, secure: true, signed: true })
}

module.exports = { attachCookiesToRes }