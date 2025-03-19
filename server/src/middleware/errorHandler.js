
const errorHandler = (err, req, res, next) => {
    console.log(err)
    return res.status(500).send({ status: false, message: "Internal Server Error" })
}

module.exports = errorHandler