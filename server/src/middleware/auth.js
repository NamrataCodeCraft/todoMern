
const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
    try {console.log('reqqqqqqqqqqqq ', req)
        const token = req.headers.authorization
        console.log('token:: ', token)
        if (!token) {
            return res.status(400).send({ status: false, message: "token is required" })
        }
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verify
        next()

    } catch (err) {
        console.log('err: ', err)
    }
}

module.exports = authentication