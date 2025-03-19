const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const existUser = await User.findOne({ $or: [{ email }, { username }] })
        if (existUser) {
            return res.status(400).send({ status: false, message: "User already exisit" })
        }
        const bcryptPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: bcryptPassword
        })
        return res.status(201).send({ status: true, message: "User created successfully", user })

    } catch (err) {
        console.log('err')
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const user = await User.findOne({ $or: [{ username }, { email }] })
        if (!user) {
            return res.status(404).send({ status: false, message: "User not found" })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(403).send({ status: false, message: "Password did not match" })
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: "3h" })
        return res.status(200).send({ status: true, message: "Successfully user login", token })

    } catch (err) {
        console.log('err: ', err)
        next(err)
    }
}